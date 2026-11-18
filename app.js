(() => {
'use strict';
const D = window.DATA, LV = ['N5','N4','N3','N2','N1'];
const $ = (s, r = document) => r.querySelector(s);
const view = $('#view');
const SPK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H3v6h3l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13"/></svg>';
const gk = (lv, g) => `${lv}|${g.p}`;
/* Bersihkan duplikat lintas berkas: pertahankan kemunculan di level terendah */
(function dedupeData() {
  const sv = new Set(), sk = new Set(), sg = new Set();
  for (const l of LV) {
    const d = D[l];
    d.vocab = d.vocab.filter(v => { const k = v[0].replace(/\((な|する)\)/g, ''); if (sv.has(k)) return false; sv.add(k); return true; });
    d.kanji = d.kanji.filter(k => { if (sk.has(k[0])) return false; sk.add(k[0]); return true; });
    d.grammar = d.grammar.filter(g => { if (sg.has(g.p)) return false; sg.add(g.p); return true; });
    const sq = new Set();
    d.questions = d.questions.filter(q => { const k = q.q + (q.p || '') + (q.say || ''); if (sq.has(k)) return false; sq.add(k); return true; });
  }
})();
const esc = s => String(s).replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
const shuffle = a => { for (let i = a.length - 1; i > 0; i--) { const j = Math.random() * (i + 1) | 0; [a[i], a[j]] = [a[j], a[i]]; } return a; };
const pick = (a, n) => shuffle(a.slice()).slice(0, n);

/* ---------- store ---------- */
const KEY = 'nihongo-michi-v1';
const def = { level:'N5', newPerDay:10, theme:'auto', xp:0, days:{}, srs:{}, tests:[], gram:{}, talk:{}, acc:{}, wrong:{}, exam:'', examLv:'N5', vids:[], custom:[], daily:{ dl:{}, rp:{} }, official:[] };
let S;
try { S = Object.assign({}, def, JSON.parse(localStorage.getItem(KEY) || '{}')); } catch (e) { S = Object.assign({}, def); }
const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} };
const dayIdx = () => { const d = new Date(); return Math.floor((d.getTime() - d.getTimezoneOffset() * 6e4) / 864e5); };
const dayKey = (i = dayIdx()) => new Date(i * 864e5).toISOString().slice(0, 10);
const today = () => S.days[dayKey()] || (S.days[dayKey()] = { n:0, xp:0, new:0, cards:0, gram:0, talk:0, quiz:0 });
const bump = (f, n = 1, xp = 0) => { const t = today(); t[f] = (t[f] || 0) + n; t.n += n; t.xp += xp; S.xp += xp; save(); };
const streak = () => { let i = dayIdx(), c = 0; if (!(S.days[dayKey(i)] || {}).n) i--; while ((S.days[dayKey(i)] || {}).n) { c++; i--; } return c; };
const applyTheme = () => { document.documentElement.dataset.theme = S.theme; };
if (!S.daily || !S.daily.dl) S.daily = { dl:{}, rp:{} };
if (!Array.isArray(S.official)) S.official = [];
applyTheme();
const toast = m => { const t = $('#toast'); t.textContent = m; t.classList.add('show'); clearTimeout(toast.h); toast.h = setTimeout(() => t.classList.remove('show'), 2200); };

/* ---------- speech ---------- */
const jaVoice = () => (window.speechSynthesis ? speechSynthesis.getVoices().find(v => v.lang && v.lang.toLowerCase().startsWith('ja')) : null);
const mk = t => { const u = new SpeechSynthesisUtterance(t.replace(/\(な\)/g, '')); u.lang = 'ja-JP'; u.rate = .85; const v = jaVoice(); if (v) u.voice = v; return u; };
const say = t => { if (!window.speechSynthesis) return toast('Perangkat tidak mendukung suara'); speechSynthesis.cancel(); speechSynthesis.speak(mk(t)); if (!jaVoice()) toast('Suara Jepang belum terpasang di perangkat ini'); };
if (window.speechSynthesis) speechSynthesis.getVoices();

/* ---------- content helpers ---------- */
const cardsOf = (lv, withCustom = true) => [].concat(
  D[lv].vocab.map(x => ({ id:`${lv}|v|${x[0]}`, t:'v', w:x[0], r:x[1], m:x[2] })),
  D[lv].kanji.map(x => ({ id:`${lv}|k|${x[0]}`, t:'k', w:x[0], r:x[1], m:x[2] })),
  withCustom ? S.custom.filter(c => c.lv === lv).map(c => ({ id:`${lv}|c|${c.k}`, t:'v', w:c.w, r:c.r, m:c.m })) : []);
const lvChips = cur => `<div class="chips" role="group" aria-label="Level">${LV.map(l => `<button class="chip ${l === cur ? 'on' : ''}" data-act="lv" data-v="${l}">${l}</button>`).join('')}</div>`;
const sayBtn = t => `<button class="say" data-act="say" data-t="${esc(t)}" aria-label="Dengarkan">${SPK}</button>`;
const INFO = {
  N5:{ kanji:'±100', vocab:'±800', jam:'150–200', can:'Memperkenalkan diri, berbelanja, bertanya arah dan waktu dengan kalimat pendek.', bahan:'Genki I · Minna no Nihongo I · Marugoto A1' },
  N4:{ kanji:'±300', vocab:'±1.500', jam:'+200–250', can:'Bercerita pengalaman, memberi alasan, mengundang, memahami pengumuman sederhana.', bahan:'Genki II · Minna no Nihongo II · Shin Kanzen Master N4' },
  N3:{ kanji:'±650', vocab:'±3.750', jam:'+300–400', can:'Membaca teks sehari-hari, mengikuti percakapan tempo normal, menyampaikan pendapat.', bahan:'Tobira · Shin Kanzen Master N3 · Nihongo Soumatome N3' },
  N2:{ kanji:'±1.000', vocab:'±6.000', jam:'+400–500', can:'Membaca koran dan artikel, bekerja dan kuliah dalam bahasa Jepang.', bahan:'Shin Kanzen Master N2 · Nihongo Soumatome N2 · NHK News' },
  N1:{ kanji:'±2.000', vocab:'±10.000', jam:'+500–700', can:'Memahami teks abstrak, diskusi, bahasa formal dan idiomatik.', bahan:'Shin Kanzen Master N1 · Nihongo Soumatome N1 · koran dan novel' }
};
const lvProg = lv => {
  const cs = cardsOf(lv, false), m = cs.filter(c => (S.srs[c.id] || {}).i >= 14).length;
  const g = D[lv].grammar, gd = g.filter(x => S.gram[gk(lv, x)]).length;
  const c = D[lv].convo, cd = c.filter(x => S.talk[x.id]).length;
  const p = (m / cs.length) * .5 + (gd / g.length) * .25 + (cd / c.length) * .25;
  return { m, total:cs.length, gd, gt:g.length, cd, ct:c.length, p:Math.round(p * 100) };
};

/* ---------- spaced repetition ---------- */
const sched = (r0, g) => {
  const r = Object.assign({ e:2.5, i:0, n:0, d:dayIdx() }, r0);
  if (g === 0) { r.e = Math.max(1.3, r.e - .2); r.i = 0; r.n = 0; r.d = dayIdx(); return r; }
  if (g === 1) { r.i = Math.max(1, Math.round((r.i || 1) * 1.2)); r.e = Math.max(1.3, r.e - .15); }
  else if (g === 2) { r.i = r.n === 0 ? 1 : r.n === 1 ? 3 : Math.round(r.i * r.e); r.n++; }
  else { r.i = r.n === 0 ? 3 : Math.round(Math.max(r.i, 1) * r.e * 1.3); r.e += .15; r.n++; }
  r.d = dayIdx() + r.i; return r;
};
const dueOf = lv => cardsOf(lv).filter(c => S.srs[c.id] && S.srs[c.id].d <= dayIdx());
/* batas kartu baru dihitung PER LEVEL: tiap level N5–N1 punya jatah newPerDay sendiri setiap hari */
const newLeft = lv => Math.max(0, Math.min(S.newPerDay - ((today().newLv || {})[lv] || 0), cardsOf(lv).filter(c => !S.srs[c.id]).length));
{ const t0 = S.days[dayKey()]; if (t0 && t0.new && !t0.newLv) t0.newLv = { [S.level]: t0.new }; }
let C = null; // card session

/* ---------- router ---------- */
let timer = null;
const clearTimer = () => { if (timer) { clearInterval(timer); timer = null; } };
const ui = { tab:'v', ctype:'all', tr:true, blur:false };
const routes = { format:vFormat, '':vDash, belajar:vLearn, kartu:vCards, aksel:vAksel, latihan:vPractice, ujian:vExam, rencana:vPlan, menu:vMenu, pasang:vInstall, bicara:vTalk, harian:vDaily, tonton:vVideo, lainnya:vMore };
/* ---- rasa aplikasi: judul nav bar, tombol kembali, animasi halaman ---- */
const TITLES = { '':'Beranda', belajar:'Teori', kartu:'Kartu ulang', aksel:'Akselerator', latihan:'Latihan', ujian:'Ujian', menu:'Menu', rencana:'Rencana belajar', pasang:'Pasang aplikasi', lainnya:'Setelan', format:'Format ujian', harian:'Sehari-hari', bicara:'Dialog', tonton:'Tonton' };
const PARENT = { format:'ujian', rencana:'menu', pasang:'menu', lainnya:'menu', harian:'menu', bicara:'menu', tonton:'menu' };
let prevRoute = null;
const navParent = (r, sub) => sub && (r === 'harian' || r === 'bicara') ? r : PARENT[r];
function navUpdate(r, sub) {
  const par = navParent(r, sub), back = $('#navback'), h = view.querySelector('h1');
  if (back) { back.hidden = par == null; back.dataset.to = par == null ? '' : '#/' + par; $('#navbacklbl').textContent = par == null ? '' : TITLES[par] || 'Kembali'; }
  const tt = $('#navtitle'); if (tt) { const ht = h ? h.textContent.replace(/\s+/g, ' ').trim() : ''; tt.textContent = ht && ht.length <= 22 ? ht : (TITLES[r] || ht || 'Michi'); }
  navScroll();
}
function navScroll() { const tb = $('#topbar'); if (!tb) return; const h = view.querySelector('.pagehead h1'); const y = window.scrollY;
  tb.classList.toggle('solid', y > 4); tb.classList.toggle('showtitle', !h || h.getBoundingClientRect().bottom < tb.getBoundingClientRect().bottom + 4); }
window.addEventListener('scroll', navScroll, { passive:true });
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
function animView(r, sub) {
  const key = r + (sub ? '/' + sub : ''); let cls = 'vfade';
  if (prevRoute != null && prevRoute !== key) { const [pr, ps] = prevRoute.split('/');
    if (navParent(r, sub) === pr && !(r === pr && !sub)) cls = 'vpush'; else if (navParent(pr, ps) === r && !(pr === r && !ps)) cls = 'vpop'; else if (r === pr && sub && !ps) cls = 'vpush'; else if (r === pr && !sub && ps) cls = 'vpop'; }
  if (prevRoute !== key) { view.classList.remove('vfade', 'vpush', 'vpop'); void view.offsetWidth; view.classList.add(cls); }
  prevRoute = key;
}
function installBanner(r) {
  if (r === 'pasang' || typeof installed !== 'function' || installed()) return '';
  const d = devKind(); if (d.os === 'desktop') return '';
  if (S.ibHide && dayIdx() - S.ibHide < 7) return '';
  return `<div class="ibanner"><span class="ib-ic">道</span><a href="#/pasang"><b>Pasang Michi di layar utama</b><small>Layar penuh tanpa bilah browser, bisa offline</small></a><button class="ib-x" data-act="ibhide" aria-label="Tutup">✕</button></div>`;
}
function render() {
  clearTimer(); Q = null;
  const [r, sub] = location.hash.replace(/^#\/?/, '').split('/');
  const fn = routes[r] || vDash;
  document.querySelectorAll('#nav a,#tabbar a,.gear').forEach(a => a.classList.toggle('on', a.dataset.r === (routes[r] ? (r === 'format' ? 'ujian' : r) : '')));
  view.innerHTML = installBanner(routes[r] ? r : '') + fn(sub);
  window.scrollTo(0, 0);
  if (r === 'bicara' && sub) curConvo = findConvo(sub);
  navUpdate(routes[r] ? r : '', sub); animView(routes[r] ? r : '', sub);
}
window.addEventListener('hashchange', render);

/* ---------- dashboard ---------- */
function examLine() {
  if (S.exam) {
    const days = Math.round((new Date(S.exam + 'T00:00:00Z') - new Date(dayKey() + 'T00:00:00Z')) / 864e5);
    if (days >= 0) return `Ujian ${S.examLv}: <b>${days} hari lagi</b>${days ? ` · sekitar ${Math.ceil(days / 7)} pekan untuk belajar` : ' · hari ini, semangat!'}`;
  }
  return 'Konsisten 30 menit setiap hari mengalahkan 5 jam sekali seminggu. Atur tanggal ujianmu di Panduan &amp; setelan.';
}
function vDash() {
  const lv = S.level, t = today(), due = dueOf(lv).length, nl = newLeft(lv), p = lvProg(lv);
  const h = new Date().getHours(), gr = h < 11 ? 'おはよう' : h < 18 ? 'こんにちは' : 'こんばんは';
  const gNext = D[lv].grammar.findIndex(x => !S.gram[gk(lv, x)]);
  const cNext = D[lv].convo.find(c => !S.talk[c.id]) || D[lv].convo[0];
  const tasks = [
    { done:t.cards > 0 && due + nl === 0, h:'#/kartu', b:'Kartu ulang', s:`${due} jatuh tempo · ${nl} kartu baru`, go:'Mulai' },
    { done:t.gram > 0, h:'#/belajar', tab:'g', b:'Satu pola tata bahasa', s:gNext < 0 ? 'Semua pola sudah ditandai paham' : D[lv].grammar[gNext].p, go:'Buka' },
    { done:t.talk > 0, h:'#/bicara/' + cNext.id, b:'Satu percakapan', s:cNext.title, go:'Buka' },
    { done:t.quiz > 0, h:'#/latihan', b:'Latihan per tipe soal', s:(() => { const w = weakTypes(lv, 1)[0]; return w ? 'Terlemah: ' + w.name : 'Soal gaya JLPT'; })(), go:'Mulai' },
    (() => { const T = axTasks(), n = T.slice(0, 4).filter(x => x.done).length; return { done:n === 4, h:'#/aksel', b:'Akselerator 80/20 (20 mnt)', s:`${n}/4 langkah · ${T[0].s} · hari ke-${axDay()}`, go:'Buka' }; })()
  ];
  const doneN = tasks.filter(x => x.done).length;
  const tests = S.tests.filter(x => x.lv === lv).slice(-4).reverse();
  const acc = S.acc[lv];
  // heatmap
  const wk = 17, wd = (new Date(dayKey()).getUTCDay() + 6) % 7, cells = (wk - 1) * 7 + wd + 1, first = dayIdx() - cells + 1;
  let heat = '';
  for (let i = 0; i < cells; i++) {
    const n = (S.days[dayKey(first + i)] || {}).n || 0;
    heat += `<i class="${n > 14 ? 'l3' : n > 4 ? 'l2' : n > 0 ? 'l1' : ''}" title="${dayKey(first + i)} · ${n} aktivitas"></i>`;
  }
  return `
  <header class="pagehead"><div><p class="greet">${gr}</p><h1>Hari ini, ${doneN} dari ${tasks.length} selesai.</h1>
  <p>${examLine()}</p></div>${lvChips(lv)}</header>
  <div class="hero">
    <div class="card plan"><div class="plan-h"><h2>Rencana hari ini · ${lv}</h2><span class="tiny">${p.p}% level ini</span></div>
      ${tasks.map(x => `<a class="task ${x.done ? 'done' : ''}" href="${x.h}" ${x.tab ? `data-act="tab" data-v="${x.tab}"` : ''}><span class="check"></span><span><b>${x.b}</b><small class="jp">${x.s}</small></span><span class="go">${x.done ? 'Lagi' : x.go} →</span></a>`).join('')}
    </div>
    <div class="stats">
      <div class="stat"><b class="num">${streak()}</b><span>hari beruntun</span></div>
      <div class="stat"><b class="num">${S.xp}</b><span>total poin</span></div>
      <div class="stat"><b class="num">${p.m}<small class="tiny">/${p.total}</small></b><span>kartu dikuasai</span></div>
      <div class="stat"><b class="num">${acc && acc.t ? Math.round(acc.c / acc.t * 100) + '%' : '—'}</b><span>akurasi latihan ${lv}</span></div>
    </div>
  </div>
  ${dashExam(lv)}
  <section><div class="sec-h"><h2>Jalur N5 → N1</h2><span class="tiny">klik untuk berpindah level</span></div>
    ${LV.map(l => { const q = lvProg(l); return `<button class="lvl ${l === lv ? 'cur' : ''}" data-act="lv" data-v="${l}"><span class="stamp">${l}</span><span class="meta">${q.m}/${q.total} kartu · ${q.gd}/${q.gt} tata bahasa · ${q.cd}/${q.ct} percakapan</span><span class="pct num">${q.p}%</span><span class="bar"><i style="width:${q.p}%"></i></span></button>`; }).join('')}
  </section>
  <section class="two">
    <div><div class="sec-h"><h2>Konsistensi 17 minggu</h2></div><div class="heat" aria-label="Peta aktivitas">${heat}</div></div>
    <div><div class="sec-h"><h2>Simulasi ${lv} terakhir</h2></div>
      ${tests.length ? tests.map(x => `<div class="rowl"><span class="num">${x.d}</span><span>${x.c}/${x.n} benar</span><b class="num">${x.pct}%</b></div>`).join('') : '<div class="empty">Belum ada simulasi. Coba satu di menu Ujian.</div>'}
    </div>
  </section>`;
}

/* ---------- learn ---------- */
function vLearn() {
  const lv = S.level, d = D[lv];
  const tabs = [['v', `Kosakata (${d.vocab.length})`], ['g', `Tata bahasa (${d.grammar.length})`], ['k', `Kanji (${d.kanji.length})`], ['a', 'Kana']];
  let body = '';
  if (ui.tab === 'a') {
    const sc = ui.kana || 'hira', names = { basic:'Dasar', dakuten:'Bersuara (゛ ゜)', combo:'Gabungan (拗音)' };
    body = `<div class="chips" style="margin-bottom:18px"><button class="chip ${sc === 'hira' ? 'on' : ''}" data-act="kset" data-v="hira">Hiragana ひらがな</button><button class="chip ${sc === 'kata' ? 'on' : ''}" data-act="kset" data-v="kata">Katakana カタカナ</button></div>` +
      Object.keys(names).map(k => `<h3 class="pcat">${names[k]}</h3><div class="kana-grid">${D.kana[sc][k].map(x => `<button class="kn" data-act="say" data-t="${x[0]}"><span class="jp">${x[0]}</span><small>${x[1]}</small></button>`).join('')}</div>`).join('') +
      `<p class="note" style="margin-top:20px">Ketuk kotak untuk mendengar. Hiragana untuk kata asli Jepang dan akhiran; katakana untuk kata serapan dan nama asing. っ kecil menggandakan konsonan: きって = kitte. Vokal panjang di katakana memakai ー.</p>`;
  } else if (ui.tab === 'v') {
    body = `<input class="search" data-filter placeholder="Cari kata atau arti…" aria-label="Cari">` +
      d.vocab.map(x => `<div class="vrow" data-s="${esc((x.join(' ')).toLowerCase())}"><span class="w">${x[0]}</span><span><span class="r">${x[1] !== x[0] ? x[1] : ''}</span><br>${x[2]}</span>${sayBtn(x[1])}</div>`).join('');
  } else if (ui.tab === 'g') {
    body = d.grammar.map((g, i) => `<details class="g"><summary><span class="gp">${g.p}</span>${S.gram[gk(lv, g)] ? '<span class="gdone">Paham ✓</span>' : '<span></span>'}<span class="gm">${g.m}</span></summary>
      <div class="gbody">${g.e.map(e => `<div class="ex">${sayBtn(e[0])}<div><span class="jp">${e[0]}</span><small>${e[1]}</small></div></div>`).join('')}
      <div class="note">${g.n}</div>
      <button class="btn ghost" data-act="gram" data-i="${i}">${S.gram[gk(lv, g)] ? 'Batalkan tanda paham' : 'Tandai sudah paham'}</button></div></details>`).join('');
  } else {
    body = `<div class="kgrid">${d.kanji.map(k => `<div class="kt"><div class="k">${k[0]}</div><div class="rd">${k[1]}</div><div class="mn">${k[2]}</div></div>`).join('')}</div>`;
  }
  return `<header class="pagehead"><div><p class="eyebrow">Belajar</p><h1>Materi ${lv}</h1><p>${INFO[lv].can}</p></div>${lvChips(lv)}</header>
  <div class="tabs" role="tablist">${tabs.map(t => `<button role="tab" class="${ui.tab === t[0] ? 'on' : ''}" data-act="tab" data-v="${t[0]}">${t[1]}</button>`).join('')}</div>${body}`;
}

/* ---------- flashcards ---------- */
function vCards() {
  const lv = S.level;
  if (C && C.lv === lv && C.q.length && C.i < C.q.length) return cardView();
  const due = dueOf(lv).length, nl = newLeft(lv);
  const fin = C && C.done ? `<div class="card" style="margin-bottom:24px"><b>Sesi selesai.</b> ${C.done} kartu ditinjau. Kerja bagus.</div>` : '';
  return `<header class="pagehead"><div><p class="eyebrow">Kartu ulang</p><h1>Ulangi tepat waktu</h1><p>Kartu muncul lagi tepat sebelum kamu lupa. Jawab jujur; sistem yang mengatur jedanya.</p></div>${lvChips(lv)}</header>
  <div class="stage">${fin}<div class="card" style="text-align:center;padding:36px 20px">
    <div class="stats" style="margin-bottom:24px"><div class="stat"><b class="num">${due}</b><span>jatuh tempo</span></div><div class="stat"><b class="num">${nl}</b><span>kartu baru hari ini</span></div></div>
    <button class="btn shu" data-act="cstart" ${due + nl ? '' : 'disabled'}>${due + nl ? 'Mulai sesi' : 'Semua beres untuk hari ini'}</button>
    ${(() => { const oth = LV.filter(l => l !== lv).map(l => [l, dueOf(l).length + newLeft(l)]).filter(x => x[1]); return oth.length ? `<p class="tiny" style="margin:18px 0 8px">${due + nl ? 'Level lain yang masih punya kartu hari ini:' : `Level ${lv} beres. Lanjut ke level lain:`}</p><div class="chips" style="justify-content:center">${oth.map(x => `<button class="chip" data-act="lv" data-v="${x[0]}">${x[0]} · ${x[1]} kartu</button>`).join('')}</div>` : ''; })()}
    <p class="tiny" style="margin-top:14px">Batas kartu baru per hari diatur di Panduan &amp; setelan.</p></div></div>`;
}
function cardView() {
  const c = C.q[C.i], r = S.srs[c.id] || {}, n = C.q.length;
  const lab = g => { const x = sched(r, g); return g === 0 ? 'sesi ini' : x.i + ' hr'; };
  return `<div class="stage"><div class="qbar"><button class="link" data-act="cquit">← Selesai</button><span class="num" style="margin-left:auto">${C.i + 1}/${n}</span></div>
  <div class="prog"><i style="width:${C.i / n * 100}%"></i></div>
  <div class="card flash" data-act="cflip"><span class="tiny">${({ k:'Kanji', v:'Kosakata', g:'Tata bahasa', p:'Frasa kaiwa' })[c.t] || 'Kosakata'}${C.lv === 'AX' ? ' · Akselerator' : ''}</span><div class="big ${c.w.length > 6 ? 'long' : ''}">${c.w}</div>
    ${C.flip ? `<div class="ans"><div class="rd">${c.r !== c.w ? c.r : ''}</div><div>${c.m}</div></div>` : '<span class="hint">ketuk atau tekan Spasi untuk membalik</span>'}</div>
  ${C.flip ? `<div style="text-align:center;margin-top:10px"><span class="tiny swipehint">Geser kanan = Baik · kiri = Lagi</span> ·<button class="link" data-act="say" data-t="${esc(c.say || (c.t === 'k' ? c.w : c.r))}">Dengarkan</button></div>
  <div class="rate">${['Lagi', 'Sulit', 'Baik', 'Mudah'].map((l, g) => `<button data-act="rate" data-g="${g}"><b>${l}</b><small>${lab(g)}</small></button>`).join('')}</div>` : ''}</div>`;
}

/* ---------- quiz engine ---------- */
let Q = null;
const SEC = { kanji:'文字・語彙', vocab:'文字・語彙', grammar:'文法', reading:'読解', listen:'聴解', kana:'かな' };
const SUBN = (D.format && D.format.subtypeNames) || {};
function genL(lv, n) {
  const V = D[lv].vocab, G = [].concat.apply([], D[lv].grammar.map(g => g.e));
  const out = pick(V, Math.ceil(n / 2)).map(x => ({ t:'listen', say:x[1], q:'Dengarkan, lalu pilih artinya.', o:[x[2]].concat(pick(V.filter(y => y[2] !== x[2]), 3).map(y => y[2])), a:0, x:`${x[0]}（${x[1]}）= ${x[2]}` }));
  pick(G, Math.floor(n / 2)).forEach(e => { const o = pick(G.filter(y => y[1] !== e[1]), 3).map(y => y[1]);
    out.push({ t:'listen', say:e[0], q:'Dengarkan kalimat, lalu pilih terjemahannya.', o:[e[1]].concat(o), a:0, x:`${e[0]} = ${e[1]}` }); });
  return shuffle(out);
}
function genKana(n) {
  const K = D.kana, all = [].concat(K.hira.basic, K.hira.dakuten, K.kata.basic, K.kata.dakuten);
  return pick(all, n).map((x, k) => {
    const others = pick(all.filter(y => y[1] !== x[1]), 3);
    if (k % 2) return { t:'kana', q:`Kana mana yang dibaca 「${x[1]}」?`, o:[x[0]].concat(others.map(y => y[0])), a:0, x:`${x[0]} = ${x[1]}` };
    return { t:'kana', q:`「${x[0]}」dibaca?`, o:[x[1]].concat(others.map(y => y[1])), a:0, x:`${x[0]} = ${x[1]}` };
  });
}
const prep = q => { const idx = shuffle(q.o.map((_, i) => i)); return Object.assign({}, q, { o:idx.map(i => q.o[i]), a:idx.indexOf(q.a) }); };
function genQ(lv, n) {
  const out = [], V = D[lv].vocab, K = D[lv].kanji;
  pick(V.map((_, i) => i), n).forEach((i, k) => {
    const x = V[i], others = pick(V.filter(y => y[2] !== x[2]), 3);
    if (k % 2) out.push({ t:'vocab', q:`「${x[2]}」を にほんごで いうと？`, o:[x[0]].concat(others.map(y => y[0])), a:0, x:`${x[2]} = ${x[0]}（${x[1]}）` });
    else out.push({ t:'vocab', q:`「${x[0]}」の いみは？`, o:[x[2]].concat(others.map(y => y[2])), a:0, x:`${x[0]}（${x[1]}）= ${x[2]}` });
  });
  return out;
}
function genK(lv, n) {
  const K = D[lv].kanji;
  return pick(K.map((_, i) => i), Math.min(n, K.length)).map((i, k) => {
    const x = K[i], others = pick(K.filter(y => y[0] !== x[0]), 3);
    if (k % 2) return { t:'kanji', q:`「${x[0]}」の いみは？`, o:[x[2]].concat(others.map(y => y[2])), a:0, x:`${x[0]} = ${x[2]} (${x[1]})` };
    return { t:'kanji', q:`「${x[0]}」の よみかたは？`, o:[x[1]].concat(others.map(y => y[1])), a:0, x:`${x[0]}: ${x[1]} (${x[2]})` };
  });
}
/* ambil n teks bacaan utuh (semua soal dari teks yang sama) */
function readingSets(all, n) {
  const g = {}; all.filter(q => q.t === 'reading').forEach(q => { (g[q.p] = g[q.p] || []).push(q); });
  return [].concat.apply([], pick(Object.values(g), n));
}
/* kelompokkan soal bertipe k menurut teks (p) lalu ambil n kelompok utuh */
function groupSets(all, k, n) {
  const g = {}; all.filter(q => q.s === k).forEach(q => { const key = q.p || q.q; (g[key] = g[key] || []).push(q); });
  return [].concat.apply([], pick(Object.values(g), n));
}
/* simulasi: mengikuti struktur resmi bila bank soal bertipe tersedia; komposisi tetap agar durasi wajar */
function buildMock(lv) {
  const all = D[lv].questions, ord = { kanji:0, vocab:0, grammar:1, reading:2, listen:3 };
  const of = t => all.filter(q => q.t === t);
  if (all.filter(q => q.s).length >= 40) {
    const P = (k, n) => pick(all.filter(q => q.s === k), n), G = (k, n) => groupSets(all, k, n);
    const qs = [].concat(P('yomi', 6), P('hyouki', 5), P('gokei', 3), P('bunmyaku', 7), P('iikae', 5), P('youhou', 4),
      P('bunpou', 12), P('kumitate', 5), G('bunsho', 1), G('tan', 2), G('chuu', 1), G('chou', 1), G('tougou', 1), G('shuchou', 1), G('jouhou', 1),
      P('kadai', 4), P('point', 4), P('gaiyou', 3), P('hatsuwa', 3), P('sokuji', 5), P('ltougou', 2));
    return qs.sort((x, y) => ord[x.t] - ord[y.t]);
  }
  const qs = [].concat(pick(of('kanji'), 8), pick(of('vocab'), 8), genQ(lv, 4), genK(lv, 4),
    pick(of('grammar'), 20), readingSets(all, 3), pick(of('listen'), 6), genL(lv, 3));
  return qs.sort((x, y) => ord[x.t] - ord[y.t]);
}
function startQuiz(o) {
  clearTimer();
  Q = Object.assign({ i:0, ans:[], left:null, fin:false, flags:{}, grid:false }, o, { qs:o.qs.map(prep) });
  if (o.minutes) { Q.left = o.minutes * 60; timer = setInterval(tick, 1000); }
  qRender();
}
const fmt = s => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
function tick() { if (!Q) return clearTimer(); Q.left--; const e = $('#tm'); if (e) { e.textContent = fmt(Q.left); e.classList.toggle('low', Q.left < 60); } if (Q.left <= 0) qFinish(); }
function qRender() {
  const q = Q.qs[Q.i], n = Q.qs.length, prac = Q.mode === 'practice', pk = Q.ans[Q.i], shown = prac && pk != null;
  view.innerHTML = `<section class="quiz"><div class="qbar"><button class="link" data-act="qquit">← Keluar</button><span>${esc(Q.title)}</span><span class="num">${Q.i + 1}/${n}</span>${Q.left != null ? `<span id="tm" class="num tm ${Q.left < 60 ? 'low' : ''}">${fmt(Q.left)}</span>` : ''}</div>
  <div class="prog"><i style="width:${Q.i / n * 100}%"></i></div>
  <div class="qtools">${Q.mode === 'mock' ? `<button class="link" data-act="qflag">${Q.flags[Q.i] ? '⚑ Ditandai ragu' : '⚐ Tandai ragu'}</button><button class="link" data-act="qgrid">Daftar soal (${Q.ans.filter(x => x != null).length}/${n})</button><button class="link" data-act="qsubmit">Kumpulkan</button>` : ''}${q.t !== 'kana' ? `<button class="link" data-act="qbm">${isBm(LV.includes(Q.lv) ? Q.lv : S.level, q) ? '★ Tersimpan' : '☆ Simpan soal'}</button>` : ''}</div>
  ${Q.grid ? `<div class="qgrid">${Q.qs.map((x, j) => `<button class="${j === Q.i ? 'cur' : ''} ${Q.ans[j] != null ? 'ans' : ''} ${Q.flags[j] ? 'flag' : ''}" data-act="qjump" data-k="${j}">${j + 1}</button>`).join('')}</div>` : ''}
  <p class="qlabel">${SEC[q.t]}${q.s && SUBN[q.s] ? ' · ' + SUBN[q.s] : ''}</p>
  ${q.p ? `<blockquote class="passage jp">${q.p}</blockquote>` : ''}
  <p class="qtext jp">${q.q}</p>
  ${q.say ? `<p><button class="btn ghost" data-act="say" data-t="${esc(q.say)}">▶ Putar suara</button></p>` : ''}
  <div class="opts">${q.o.map((o, k) => `<button class="opt ${shown ? (k === q.a ? 'ok' : k === pk ? 'bad' : '') : (k === pk ? 'on' : '')}" data-act="pick" data-k="${k}"><i>${k + 1}</i><span>${o}</span></button>`).join('')}</div>
  ${shown ? `<div class="fb"><b>${pk === q.a ? 'Benar.' : 'Kurang tepat.'}</b> ${q.x}</div>` : ''}
  <div class="qnav"><button class="btn ghost" data-act="qprev" ${Q.i === 0 || prac ? 'style="visibility:hidden"' : ''}>← Sebelumnya</button>
  <button class="btn" data-act="qnext" ${pk == null && prac ? 'disabled' : ''}>${Q.i === n - 1 ? 'Selesai' : 'Lanjut →'}</button></div></section>`;
  if (q.say && pk == null) setTimeout(() => { if (Q && Q.qs[Q.i] === q) say(q.say); }, 250);
}
function qFinish() {
  if (!Q || Q.fin) return; Q.fin = true; clearTimer();
  if (Q.exam && E) { const A = Q.qs.map((_, i) => Q.ans[i] == null ? null : Q.ans[i]); recordStats(Q.lv, Q.qs, A); addWrong(Q.lv, Q.qs, A); E.res[E.si] = { qs:Q.qs, ans:A }; E.si++; save(); return E.si < E.ss.length ? examIntro() : examResult(); }
  const n = Q.qs.length, ok = Q.qs.filter((q, i) => Q.ans[i] === q.a).length, pct = Math.round(ok / n * 100), lv = Q.lv;
  const sec = {}; Q.qs.forEach((q, i) => { const s = SEC[q.t]; sec[s] = sec[s] || [0, 0]; sec[s][1]++; if (Q.ans[i] === q.a) sec[s][0]++; });
  const sub = {}; Q.qs.forEach((q, i) => { if (!q.s) return; const k = SUBN[q.s] || q.s; sub[k] = sub[k] || [0, 0]; sub[k][1]++; if (Q.ans[i] === q.a) sub[k][0]++; });
  S.acc[lv] = S.acc[lv] || { c:0, t:0 }; S.acc[lv].c += ok; S.acc[lv].t += n; recordStats(lv, Q.qs, Q.ans);
  if (Q.mode === 'mock') { S.tests.push({ d:dayKey(), lv, pct, n, c:ok }); S.tests = S.tests.slice(-40); }
  bump('quiz', 1, ok * 2 + (Q.mode === 'mock' ? 50 : 0)); if (lv === 'AX') axMark('q', true);
  const wk = q => q.q + (q.p || '') + (q.say || ''); S.wrong[lv] = S.wrong[lv] || [];
  Q.qs.forEach((q, i) => { const k = wk(q), j = S.wrong[lv].findIndex(w => wk(w) === k);
    if (Q.ans[i] === q.a) { if (j >= 0 && Q.review) S.wrong[lv].splice(j, 1); }
    else if (Q.ans[i] != null && j < 0 && q.t !== 'kana') S.wrong[lv].push(q); });
  S.wrong[lv] = S.wrong[lv].slice(-80); save();
  const wrong = Q.qs.map((q, i) => ({ q, i })).filter(x => Q.ans[x.i] !== x.q.a);
  const verdict = pct >= 80 ? 'Level ini sudah cukup kuat.' : pct >= 60 ? 'Mendekati. Rapikan bagian yang masih bocor.' : 'Perlu penguatan dasar. Ulangi kartu dan tata bahasa dulu.';
  Q.wrong = wrong.map(x => Q.qs[x.i]);
  view.innerHTML = `<section class="quiz"><p class="eyebrow">Hasil · ${lv}${Q.mode === 'mock' ? ' · Simulasi' : ''}</p>
  <div class="score"><b class="num">${pct}<small>%</small></b><div><p style="margin:0"><b>${ok} dari ${n} benar</b></p><p class="muted" style="margin:0">${verdict}</p></div></div>
  <div style="margin:22px 0 8px">${Object.keys(sec).map(k => `<div class="rowl"><span class="jp">${k}</span><b class="num">${sec[k][0]}/${sec[k][1]}</b></div>`).join('')}</div>
  ${Object.keys(sub).length ? `<p class="qlabel" style="margin-top:18px">Per tipe soal</p><div>${Object.keys(sub).map(k => `<div class="rowl"><span class="jp">${k}</span><b class="num">${sub[k][0]}/${sub[k][1]}</b></div>`).join('')}</div>` : ''}
  <div style="display:flex;gap:10px;flex-wrap:wrap;margin:20px 0 32px">${wrong.length ? '<button class="btn shu" data-act="qredo">Ulangi yang salah</button>' : ''}<a class="btn ghost" href="${Q.back || '#/latihan'}" data-act="qdone">Kembali</a><a class="btn ghost" href="#/">Beranda</a></div>
  <h2>Pembahasan</h2>${Q.qs.map((q, i) => { const g = Q.ans[i] === q.a; return `<div class="rev"><span class="tag ${g ? 'ok' : 'bad'}">${g ? 'Benar' : 'Salah'}</span>${q.p ? `<p class="jp muted" style="font-size:.9rem;margin:8px 0 0">${q.p}</p>` : ''}<p class="jp" style="margin:6px 0">${q.q}</p>
    <p class="tiny" style="margin:0">Jawabanmu: ${Q.ans[i] != null ? q.o[Q.ans[i]] : '(kosong)'} · Benar: <b>${q.o[q.a]}</b></p><p class="muted" style="font-size:.9rem;margin:4px 0 0">${q.x}</p></div>`; }).join('')}</section>`;
  window.scrollTo(0, 0);
}

/* ---------- format ujian ---------- */
function vFormat() {
  const lv = S.level, F = D.format, f = F[lv], cnt = {};
  D[lv].questions.forEach(q => { if (q.s) cnt[q.s] = (cnt[q.s] || 0) + 1; });
  return `<a class="link" href="#/latihan">← Latihan &amp; ujian</a>
  <header class="pagehead" style="margin-top:14px"><div><p class="eyebrow">Format ujian</p><h1>Struktur JLPT ${lv}</h1><p>Bagian, waktu, tipe soal, dan skor kelulusan. Latihan di aplikasi mengikuti tipe soal ini.</p></div>${lvChips(lv)}</header>
  <div class="note">${F.note}${f.note2 ? ' ' + f.note2 : ''}</div>
  <div class="stats" style="margin-bottom:28px"><div class="stat"><b class="num">${f.total}</b><span>menit total (±)</span></div><div class="stat"><b class="num">${f.sections.length}</b><span>bagian ujian</span></div></div>
  <p class="muted" style="margin-bottom:28px">${f.scale}</p>
  ${f.sections.map(sec => `<section><div class="sec-h"><h2 class="jp">${sec.n}</h2><span class="tiny">${sec.min ? sec.min + ' menit' : 'sesi bersama'}</span></div><div class="tscroll"><table><thead><tr><th>Bagian</th><th>Tipe</th><th>Isi</th><th></th></tr></thead><tbody>
    ${sec.items.map(it => `<tr><td class="jp">${it[0]}</td><td class="jp">${it[1]}</td><td>${it[2]}</td><td>${cnt[it[3]] ? `<button class="chip" data-act="qtype" data-s="${it[3]}">Latih (${cnt[it[3]]})</button>` : ''}</td></tr>`).join('')}</tbody></table></div></section>`).join('')}
  <section><h2 style="margin-bottom:10px">Strategi</h2><div class="clist">${f.tips.map(t => `<div class="tipline">${t}</div>`).join('')}</div></section>
  <section><h2 style="margin-bottom:10px">Sumber resmi</h2><div class="clist">${F.links.map(l => `<a href="${l[1]}" target="_blank" rel="noopener"><b>${l[0]}</b><span class="tiny">buka ↗</span></a>`).join('')}</div>
  <p class="tiny" style="margin-top:10px">Soal ujian asli tidak dirilis ke publik setelah ujian. Yang tersedia resmi: contoh soal di situs di atas dan buku soal resmi terbitan penyelenggara.</p></section>`;
}

/* ---------- conversation ---------- */
let curConvo = null;
const findConvo = id => { for (const l of LV) { const c = D[l].convo.find(x => x.id === id); if (c) return Object.assign({ lv:l }, c); } return null; };
function vTalk(sub) {
  const lv = S.level;
  if (sub && findConvo(sub)) {
    const c = findConvo(sub), who = [...new Set(c.lines.map(l => l[0]))];
    return `<a class="link" href="#/bicara">← Semua percakapan</a>
    <header class="pagehead" style="margin-top:16px"><div><p class="eyebrow">${c.lv} · ${c.topic}</p><h1>${c.title}</h1></div>
    <div style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn ghost" data-act="sayall">Putar semua</button><button class="btn ghost" data-act="tr">${ui.tr ? 'Sembunyikan' : 'Tampilkan'} terjemahan</button><button class="btn ghost" data-act="blur">${ui.blur ? 'Matikan' : 'Latihan'} peran</button></div></header>
    ${ui.blur ? '<p class="note">Latihan peran: kamu memerankan pihak kiri. Balasan di sisi kanan dikaburkan; ucapkan sendiri dulu, lalu ketuk untuk memeriksa.</p>' : ''}
    <div class="bubbles ${ui.tr ? '' : 'hide-id'} ${ui.blur ? 'blur' : ''}">${c.lines.map(l => `<div class="b ${l[0] === who[0] ? '' : 'right'}"><div class="who">${l[0]}</div><div class="jp" data-act="unblur">${l[1]}</div><div class="id">${l[2]}</div>${sayBtn(l[1])}</div>`).join('')}</div>
    <div style="margin-top:28px"><button class="btn ${S.talk[c.id] ? 'ghost' : 'shu'}" data-act="talkdone" data-id="${c.id}">${S.talk[c.id] ? 'Sudah selesai ✓' : 'Tandai selesai'}</button></div>`;
  }
  const tab = ui.ttab || 'c';
  const body = tab === 'c'
    ? `<div class="clist">${D[lv].convo.map(c => `<a href="#/bicara/${c.id}"><b>${c.title}</b><span class="tiny">${S.talk[c.id] ? 'Selesai ✓' : c.lines.length + ' baris'}</span><span class="tiny" style="grid-column:1">${c.topic}</span></a>`).join('')}</div>`
    : D.phrases.map(g => `<h3 class="pcat">${g.cat}</h3>${g.items.map(p => `<div class="phr"><span class="jp">${p[0]}</span><small>${p[1] !== p[0] ? p[1] + ' · ' : ''}${p[2]}</small>${sayBtn(p[1])}</div>`).join('')}`).join('');
  return `<header class="pagehead"><div><p class="eyebrow">Percakapan</p><h1>Berbicara dari hari pertama</h1><p>Dialog situasi nyata per level, ditambah frasa bertahan hidup yang bisa dipakai besok pagi.</p></div>${tab === 'c' ? lvChips(lv) : ''}</header>
  <div class="tabs"><button class="${tab === 'c' ? 'on' : ''}" data-act="ttab" data-v="c">Dialog per level</button><button class="${tab === 'p' ? 'on' : ''}" data-act="ttab" data-v="p">Frasa sehari-hari</button></div>${body}`;
}

/* ---------- video ---------- */
const yt = q => 'https://www.youtube.com/results?search_query=' + encodeURIComponent(q);
const STAT = { plan:'Rencana', now:'Sedang ditonton', done:'Selesai' };
function vVideo() {
  const lv = S.level, V = D.video, tab = ui.vtab || 'k';
  const tabs = [['k', 'Kanal'], ['c', 'Cari topik'], ['m', `Daftar saya (${S.vids.length})`], ['w', `Kata video (${S.custom.length})`]];
  let body = '';
  if (tab === 'k') {
    const list = V.channels.filter(c => c.lv.includes(lv));
    body = `<div class="note">Video dibuka di YouTube dan butuh internet. Yang tersimpan offline: katalog ini, daftar tontonan, catatan, dan kata baru milikmu.</div>
    <div class="vcards">${list.map(c => `<a class="vcard" href="${yt(c.q)}" target="_blank" rel="noopener"><span class="vk">${c.k}</span><b>${c.n}</b><span class="vf">${c.f}</span><span class="vl">${c.lv.map(l => `<i class="${l === lv ? 'on' : ''}">${l}</i>`).join('')}<em>Buka di YouTube ↗</em></span></a>`).join('')}</div>
    <h2 style="margin:36px 0 12px">Cara menonton agar benar-benar belajar</h2><div class="loop">${V.method.map(m => `<div><b>${m[0]}</b><span>${m[1]}</span></div>`).join('')}</div>
    <p class="tiny" style="margin-top:12px">Level tiap kanal berasal dari ulasan komunitas, bukan klasifikasi resmi. Aplikasi ini tidak mengunduh video atau transkrip; hak ciptanya milik pembuat kanal.</p>`;
  } else if (tab === 'c') {
    body = `<p class="muted">Pencarian YouTube siap pakai untuk level ${lv}. Tiap tema memakai kata kunci Jepang agar hasilnya percakapan asli.</p>
    <div class="clist">${V.topics.map(t => `<a href="${yt(t.q + ' ' + V.lvq[lv] + ' 会話')}" target="_blank" rel="noopener"><b>${t.t}</b><span class="tiny">YouTube ↗</span><span class="tiny jp" style="grid-column:1">${t.q} ${V.lvq[lv]} 会話</span></a>`).join('')}</div>`;
  } else if (tab === 'm') {
    body = `<form class="card vform" data-act="none" onsubmit="return false"><h3 style="margin-bottom:12px">Tambah video</h3>
      <input id="vt" class="search" placeholder="Judul video" aria-label="Judul">
      <input id="vu" class="search" placeholder="Tempel tautan YouTube (opsional)" inputmode="url" aria-label="Tautan">
      <div style="display:flex;gap:8px;flex-wrap:wrap"><select id="vl" aria-label="Level">${LV.map(l => `<option ${l === lv ? 'selected' : ''}>${l}</option>`).join('')}</select><button class="btn" data-act="vadd" type="button">Simpan</button></div></form>
    <div style="margin-top:20px">${S.vids.length ? S.vids.slice().reverse().map(v => `<div class="vitem"><div class="vh"><span class="stamp">${v.l}</span><b>${esc(v.t)}</b></div>
      ${v.u ? `<a class="link tiny" href="${esc(v.u)}" target="_blank" rel="noopener">Buka tautan ↗</a>` : ''}
      <div class="vrow2"><select data-vs="${v.id}" aria-label="Status">${Object.keys(STAT).map(k => `<option value="${k}" ${v.s === k ? 'selected' : ''}>${STAT[k]}</option>`).join('')}</select><button class="link" data-act="vdel" data-id="${v.id}">Hapus</button></div>
      <textarea data-vn="${v.id}" class="search" rows="2" placeholder="Catatan: kalimat berguna, kata baru, ringkasan…">${esc(v.n || '')}</textarea></div>`).join('') : '<div class="empty">Belum ada video. Simpan judul dan catatanmu di sini; semuanya tetap bisa dibuka tanpa internet.</div>'}</div>`;
  } else {
    const mine = S.custom.filter(c => c.lv === lv);
    body = `<p class="muted">Kata baru dari video yang kamu tonton. Otomatis masuk kartu ulang ${lv}.</p>
    <form class="card vform" onsubmit="return false"><input id="cw" class="search jp" placeholder="Kata / kalimat (Jepang)" aria-label="Kata"><input id="cr" class="search jp" placeholder="Cara baca (kana)" aria-label="Bacaan"><input id="cm" class="search" placeholder="Arti" aria-label="Arti"><button class="btn" data-act="cadd" type="button">Tambah ke kartu ${lv}</button></form>
    <div style="margin-top:20px">${mine.length ? mine.slice().reverse().map(c => `<div class="vrow" style="grid-template-columns:1fr 1.4fr auto"><span class="w">${esc(c.w)}</span><span><span class="r">${esc(c.r)}</span><br>${esc(c.m)}</span><button class="link" data-act="cdel" data-k="${c.k}">Hapus</button></div>`).join('') : `<div class="empty">Belum ada kata untuk ${lv}.</div>`}</div>`;
  }
  return `<header class="pagehead"><div><p class="eyebrow">Tonton</p><h1>Dengar dari penutur asli</h1><p>Kanal percakapan per level, pencarian per tema, dan buku catatan tontonanmu.</p></div>${lvChips(lv)}</header>
  <div class="tabs">${tabs.map(t => `<button class="${tab === t[0] ? 'on' : ''}" data-act="vtab" data-v="${t[0]}">${t[1]}</button>`).join('')}</div>${body}`;
}

/* ---------- daily life ---------- */
let RP = null;
const TIPS_ICON = '';
const dTopics = () => D.daily || [];
const cleanFb = s => String(s).replace(/^(\s*(Kurang tepat|Tepat|Benar|Salah)[.,:!]?)+\s*/i, '');
const cleanTr = s => s.replace(/^（dengar）\s*/, '');
const isHeard = s => /^（dengar）/.test(s);
function vDaily(sub) {
  const T = dTopics();
  if (!T.length) return '<div class="empty">Konten percakapan harian belum termuat.</div>';
  const t = T.find(x => x.id === sub);
  return t ? dailyTopic(t) : dailyHome(T);
}
function dailyHome(T) {
  const nd = T.reduce((a, t) => a + t.dialogs.length, 0), np = T.reduce((a, t) => a + t.phrases.length, 0);
  return `<header class="pagehead"><div><p class="eyebrow">Sehari-hari</p><h1>Jepang untuk hidup sehari-hari</h1><p>Tanpa level. Pilih situasinya, pelajari frasa, tiru dialog, lalu uji lewat simulasi percakapan interaktif.</p></div></header>
  <input class="search" data-dsearch placeholder="Cari frasa: maaf, halal, stasiun, ありがとう…" aria-label="Cari frasa">
  <div id="dres"></div>
  <div class="tgrid">${T.map(t => { const dl = t.dialogs.filter(d => S.daily.dl[d.id]).length, best = S.daily.rp[t.id];
    return `<a class="tcard" href="#/harian/${t.id}"><b>${t.title}</b><span>${t.desc}</span><small>${t.phrases.length} frasa · ${t.dialogs.length} dialog · simulasi ${best != null ? 'terbaik ' + best + '/' + t.roleplay.steps.length : 'belum dicoba'}${dl ? ` · ${dl}/${t.dialogs.length} dialog selesai` : ''}</small></a>`; }).join('')}</div>
  <p class="tiny" style="margin-top:22px">${T.length} situasi · ${np} frasa · ${nd} dialog. Mencari dialog berdasarkan level? <a href="#/bicara">Buka dialog N5–N1</a>.</p>`;
}
function dailyTopic(t) {
  const tab = ui.dtab || 'p';
  const tabs = [['p', `Frasa (${t.phrases.length})`], ['d', `Dialog (${t.dialogs.length})`], ['r', 'Simulasi'], ['t', 'Tips']];
  let body = '';
  if (tab === 'p') {
    if (ui.ptopic !== t.id) { ui.ptopic = t.id; ui.pidx = 0; ui.preveal = false; ui.pdir = ''; }
    const n = t.phrases.length, i = Math.max(0, Math.min(ui.pidx || 0, n - 1)); ui.pidx = i;
    const modeBar = `<div class="pbar"><div class="chips"><button class="chip ${ui.plist ? '' : 'on'}" data-act="pmode" data-v="slide">Slide</button><button class="chip ${ui.plist ? 'on' : ''}" data-act="pmode" data-v="list">Daftar</button></div>
      <div class="chips"><button class="chip ${ui.phide ? 'on' : ''}" data-act="phide">Tutup arti</button><button class="chip ${ui.pauto ? 'on' : ''}" data-act="pauto">Auto suara</button></div></div>`;
    if (ui.plist) {
      body = modeBar + `<div style="margin:10px 0 8px"><button class="btn ghost" data-act="padd" data-tid="${t.id}" data-i="all">Tambah semua ke kartu ulang</button></div>` +
        t.phrases.map((p, k) => `<div class="phr"><span class="jp" data-act="pgo" data-v="${k}" style="cursor:pointer">${p[0]} ${isHeard(p[2]) ? '<span class="tag bad" style="margin-left:6px">didengar</span>' : ''}</span><small>${p[1] !== p[0] ? p[1] + ' · ' : ''}${cleanTr(p[2])}</small><span class="phr-a">${sayBtn(p[0])}<button class="say" data-act="padd" data-tid="${t.id}" data-i="${k}" aria-label="Tambah ke kartu" title="Tambah ke kartu ulang">+</button></span></div>`).join('');
    } else {
      const ph = t.phrases[i], heard = isHeard(ph[2]), veil = ui.phide && !ui.preveal;
      body = modeBar + `<div class="pwrap"><div class="pslide ${ui.pdir || ''}" data-act="pslidetap">
        <div class="ptop"><span class="tiny num">${i + 1} / ${n}</span>${heard ? '<span class="tag bad">didengar</span>' : '<span class="tag ok">kamu ucapkan</span>'}<span class="tiny">${esc(ph[3] || '')}</span></div>
        <div class="pjp jp">${ph[0]}</div>
        ${ph[1] !== ph[0] ? `<div class="prd jp">${ph[1]}</div>` : ''}
        <div class="ptr ${veil ? 'veil' : ''}" data-act="preveal">${cleanTr(ph[2])}${veil ? '<span class="vhint">ketuk untuk melihat arti</span>' : ''}</div>
        <div class="pact"><button class="say big" data-act="say" data-t="${esc(ph[0])}" aria-label="Dengarkan">${SPK}</button><button class="chip" data-act="padd" data-tid="${t.id}" data-i="${i}">+ Kartu ulang</button></div>
      </div></div>
      <div class="pnav"><button class="pbtn" data-act="pprev" aria-label="Sebelumnya" ${i === 0 ? 'disabled' : ''}>←</button>
        <div class="pdots" aria-hidden="true"><i style="width:${(i + 1) / n * 100}%"></i></div>
        <button class="pbtn" data-act="pnext" aria-label="Berikutnya" ${i === n - 1 ? 'disabled' : ''}>→</button></div>
      <p class="tiny" style="text-align:center;margin-top:10px">Geser kiri = berikutnya · geser kanan = sebelumnya</p>`;
      if (ui.pauto && !ui.pquiet) setTimeout(() => { if (ui.ptopic === t.id && ui.pidx === i && !ui.plist && location.hash.startsWith('#/harian/')) say(ph[0]); }, 280);
      ui.pquiet = false;
    }
  } else if (tab === 'd') {
    const di = Math.min(ui.ddlg || 0, t.dialogs.length - 1), d = t.dialogs[di], who = [...new Set(d.lines.map(l => l[0]))];
    curConvo = { lines:d.lines.map(l => [l[0], l[1], l[3]]) };
    body = `<div class="chips" style="margin-bottom:16px">${t.dialogs.map((x, i) => `<button class="chip ${i === di ? 'on' : ''}" data-act="ddlg" data-v="${i}">${x.title}</button>`).join('')}</div>
    <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:18px"><button class="btn ghost" data-act="sayall">Putar semua</button><button class="btn ghost" data-act="tr">${ui.tr ? 'Sembunyikan' : 'Tampilkan'} terjemahan</button><button class="btn ghost" data-act="blur">${ui.blur ? 'Matikan' : 'Latihan'} peran</button></div>
    ${ui.blur ? '<p class="note">Latihan peran: balasan di sisi kanan dikaburkan. Ucapkan dulu, lalu ketuk untuk memeriksa.</p>' : ''}
    <div class="bubbles ${ui.tr ? '' : 'hide-id'} ${ui.blur ? 'blur' : ''}">${d.lines.map(l => `<div class="b ${l[0] === who[0] ? '' : 'right'}"><div class="who">${l[0]}</div><div class="jp" data-act="unblur">${l[1]}</div>${l[2] !== l[1] ? `<div class="rd2">${l[2]}</div>` : ''}<div class="id">${l[3]}</div>${sayBtn(l[1])}</div>`).join('')}</div>
    <div style="margin-top:26px"><button class="btn ${S.daily.dl[d.id] ? 'ghost' : 'shu'}" data-act="ddone" data-id="${d.id}">${S.daily.dl[d.id] ? 'Sudah selesai ✓' : 'Tandai selesai'}</button></div>`;
  } else if (tab === 'r') {
    body = rpView(t);
  } else {
    body = `<div class="clist">${t.tips.map(x => `<div class="tipline">${x}</div>`).join('')}</div>`;
  }
  return `<a class="link" href="#/harian">← Semua situasi</a>
  <header class="pagehead compact" style="margin-top:14px"><div><p class="eyebrow">Sehari-hari</p><h1>${t.title}</h1><p>${t.desc}</p></div></header>
  <div class="tabs">${tabs.map(x => `<button class="${tab === x[0] ? 'on' : ''}" data-act="dtab" data-v="${x[0]}">${x[1]}</button>`).join('')}</div>${body}`;
}
function rpView(t) {
  const R = t.roleplay, n = R.steps.length;
  if (!RP || RP.tid !== t.id) {
    return `<div class="card" style="text-align:center;padding:32px 20px"><h2 style="margin-bottom:6px">${R.title}</h2><p class="muted">${R.intro}</p><p class="tiny">${n} langkah · pilih jawaban yang paling tepat dan sopan. Suara lawan bicara diputar otomatis.</p>
    <button class="btn shu" data-act="rpstart" data-tid="${t.id}">Mulai simulasi</button>${S.daily.rp[t.id] != null ? `<p class="tiny" style="margin-top:12px">Skor terbaik: ${S.daily.rp[t.id]}/${n}</p>` : ''}</div>`;
  }
  if (RP.done) {
    return `<div class="card" style="text-align:center;padding:32px 20px"><p class="eyebrow">Selesai</p><div class="score" style="justify-content:center"><b class="num">${RP.score}<small>/${n}</small></b></div>
    <p class="muted">${RP.score === n ? 'Sempurna. Percakapanmu mengalir.' : RP.score >= n - 1 ? 'Hampir sempurna. Baca ulang umpan baliknya.' : 'Ulangi setelah membaca frasa dan dialognya.'}</p>
    <div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap"><button class="btn shu" data-act="rpstart" data-tid="${t.id}">Main lagi</button><button class="btn ghost" data-act="rpquit">Kembali</button></div></div>`;
  }
  const st = R.steps[RP.i], ord = RP.order[RP.i], pk = RP.pick;
  setTimeout(() => { if (RP && !RP.done && RP.i === RP.sayI && RP.pick == null) say(st.npc); }, 300);
  RP.sayI = RP.i;
  return `<div class="qbar"><button class="link" data-act="rpquit">← Keluar</button><span class="num">${RP.i + 1}/${n}</span></div><div class="prog"><i style="width:${RP.i / n * 100}%"></i></div>
  <div class="bubbles"><div class="b"><div class="who">Lawan bicara</div><div class="jp">${st.npc}</div><div class="id">${st.npcTr}</div>${sayBtn(st.npc)}</div></div>
  <p class="qlabel" style="margin-top:22px">Jawabanmu</p>
  <div class="opts">${ord.map((ci, k) => { const c = st.choices[ci]; const cls = pk == null ? '' : (c.ok ? 'ok' : (k === pk ? 'bad' : ''));
    return `<button class="opt ${cls}" data-act="rpchoose" data-k="${k}"><i>${k + 1}</i><span><span class="jp">${c.jp}</span>${pk != null ? `<small class="optsm">${c.tr}</small>` : ''}</span></button>`; }).join('')}</div>
  ${pk != null ? `<div class="fb"><b>${st.choices[ord[pk]].ok ? 'Tepat.' : 'Kurang tepat.'}</b> ${cleanFb(st.choices[ord[pk]].fb)}${st.choices[ord[pk]].ok ? '' : `<br><span class="tiny">Yang tepat: <b class="jp">${st.choices.find(c => c.ok).jp}</b> — ${cleanFb(st.choices.find(c => c.ok).fb)}</span>`}</div>
  <div class="qnav"><span></span><button class="btn" data-act="rpnext">${RP.i === n - 1 ? 'Lihat skor' : 'Lanjut →'}</button></div>` : ''}`;
}

/* ---------- guide & settings ---------- */
let deferred = null;
window.addEventListener('beforeinstallprompt', e => { e.preventDefault(); deferred = e; });
function vMore() {
  return `<header class="pagehead"><div><p class="eyebrow">Panduan &amp; setelan</p><h1>Sistem belajarnya</h1><p>Empat langkah yang diulang setiap hari. Rincian lengkap ada di berkas STUDY-SYSTEM.md.</p></div></header>
  <section><div class="loop"><div><b>Input</b><span>Satu pola tata bahasa dan satu dialog. Baca, dengarkan, tiru.</span></div><div><b>Ingat</b><span>Kartu ulang. Sepuluh menit, jangan dilewatkan.</span></div><div><b>Uji</b><span>Kuis 10 soal. Catat yang salah dan cari penyebabnya.</span></div><div><b>Pakai</b><span>Ucapkan atau tulis tiga kalimat sendiri dengan materi hari ini.</span></div></div></section>
  <section><div class="sec-h"><h2>Peta level</h2></div><div class="tscroll"><table><thead><tr><th>Level</th><th>Kanji</th><th>Kosakata</th><th>Jam belajar</th><th>Kemampuan</th><th>Buku</th></tr></thead><tbody>
  ${LV.map(l => `<tr><td><span class="stamp">${l}</span></td><td class="num">${INFO[l].kanji}</td><td class="num">${INFO[l].vocab}</td><td class="num">${INFO[l].jam}</td><td>${INFO[l].can}</td><td>${INFO[l].bahan}</td></tr>`).join('')}</tbody></table></div><p class="tiny" style="margin-top:8px">Jam belajar adalah perkiraan kasar untuk pelajar non-kanji, bukan angka resmi.</p></section>
  <section><div class="sec-h"><h2>Pekan ideal (±60 menit per hari)</h2></div><div class="tscroll"><table><thead><tr><th>Hari</th><th>Fokus</th></tr></thead><tbody>
  <tr><td>Sen–Jum</td><td>Kartu 10 mnt · tata bahasa 15 mnt · dialog 10 mnt · kuis 10 mnt · produksi 15 mnt</td></tr>
  <tr><td>Sabtu</td><td>Simulasi ujian, lalu analisis semua soal yang salah</td></tr>
  <tr><td>Minggu</td><td>Konsumsi bebas: NHK Easy, anime dengan subtitle Jepang, podcast, atau jurnal singkat</td></tr></tbody></table></div></section>
  <section><div class="sec-h"><h2>Soal resmi &amp; sumber luar</h2></div>
  <div class="clist">
   <a href="#/format"><b>Format ujian &amp; skor kelulusan</b><span class="tiny">buka →</span><span class="tiny" style="grid-column:1">Bagian, waktu, tipe soal, dan strategi per level</span></a>
   <a href="https://www.jlpt.jp/e/samples/forlearners.html" target="_blank" rel="noopener"><b>Contoh soal resmi JLPT (jlpt.jp)</b><span class="tiny">buka ↗</span><span class="tiny" style="grid-column:1">Contoh soal N1–N5 beserta audio dan kunci jawaban</span></a>
   <a href="https://www3.nhk.or.jp/news/easy/" target="_blank" rel="noopener"><b>NHK News Web Easy</b><span class="tiny">buka ↗</span><span class="tiny" style="grid-column:1">Berita sederhana dengan furigana, cocok N4–N2</span></a>
   <a href="https://jisho.org" target="_blank" rel="noopener"><b>Jisho.org</b><span class="tiny">buka ↗</span><span class="tiny" style="grid-column:1">Kamus Jepang–Inggris, pencarian kanji dan contoh kalimat</span></a>
  </div><p class="tiny" style="margin-top:10px">Untuk soal lengkap setara ujian, gunakan buku 日本語能力試験 公式問題集 terbitan penyelenggara.</p></section>
  <section><div class="sec-h"><h2>Setelan</h2></div>
   <div class="set"><div><b>Kartu baru per hari</b><br><span class="tiny">Mulai kecil agar ulangan tidak menumpuk</span></div><select data-set="newPerDay">${[5, 10, 15, 20, 30].map(n => `<option ${S.newPerDay === n ? 'selected' : ''}>${n}</option>`).join('')}</select></div>
   <div class="set"><div><b>Tanggal ujian JLPT</b><br><span class="tiny">Ujian resmi diadakan Juli dan Desember; hitung mundur tampil di beranda</span></div><span style="display:flex;gap:8px"><select data-set="examLv">${LV.map(l => `<option ${S.examLv === l ? 'selected' : ''}>${l}</option>`).join('')}</select><input type="date" data-set="exam" value="${S.exam}" style="font:inherit;padding:6px 8px;background:var(--card);color:var(--ink);border:1px solid var(--line);border-radius:6px"></span></div>
   <div class="set"><div><b>Tema</b></div><select data-set="theme">${[['auto', 'Ikuti perangkat'], ['light', 'Terang'], ['dark', 'Gelap']].map(t => `<option value="${t[0]}" ${S.theme === t[0] ? 'selected' : ''}>${t[1]}</option>`).join('')}</select></div>
   <div class="set"><div><b>Cadangan progres</b><br><span class="tiny">Data hanya tersimpan di perangkat ini</span></div><span style="display:flex;gap:8px"><button class="btn ghost" data-act="export">Ekspor</button><label class="btn ghost" style="cursor:pointer">Impor<input type="file" accept="application/json" data-import hidden></label></span></div>
   <div class="set"><div><b>Pasang sebagai aplikasi</b><br><span class="tiny">Agar bisa dibuka offline dari layar utama</span></div><button class="btn ghost" data-act="install">Pasang</button></div>
   <div class="set"><div><b>Hapus semua progres</b></div><button class="btn ghost" data-act="reset" style="color:var(--shu)">Hapus</button></div>
  </section>`;
}

/* ---------- actions ---------- */
const acts = {
  lv(el) { S.level = el.dataset.v; save(); C = null; const y = window.scrollY; render(); window.scrollTo(0, y); navScroll(); },
  navback(el) { const to = el.dataset.to || '#/'; if (location.hash !== to) location.hash = to; },
  ibhide(el, e) { e.preventDefault(); S.ibHide = dayIdx(); save(); const b = el.closest('.ibanner'); if (b) b.remove(); },
  say(el, e) { e.preventDefault(); e.stopPropagation(); say(el.dataset.t); },
  none() {},
  pmode(el) { ui.plist = el.dataset.v === 'list'; ui.pquiet = true; render(); },
  phide() { ui.phide = !ui.phide; ui.preveal = false; ui.pquiet = true; render(); },
  pauto() { ui.pauto = !ui.pauto; ui.pquiet = true; render(); toast(ui.pauto ? 'Suara otomatis aktif' : 'Suara otomatis mati'); },
  preveal() { if (ui.phide && !ui.preveal) { ui.preveal = true; ui.pquiet = true; render(); } },
  pslidetap() {},
  pgo(el) { ui.pidx = +el.dataset.v; ui.plist = false; ui.preveal = false; ui.pdir = ''; render(); },
  pnext() { const t = dTopics().find(x => x.id === ui.ptopic); if (!t || ui.pidx >= t.phrases.length - 1) return; ui.pidx++; ui.pdir = 'from-right'; ui.preveal = false; render(); },
  pprev() { if (!ui.pidx) return; ui.pidx--; ui.pdir = 'from-left'; ui.preveal = false; render(); },
  qtype(el) { const lv = el.dataset.lv || S.level, k = el.dataset.s, all = D[lv].questions.filter(q => q.s === k);
    const qs = all.some(q => q.p) ? groupSets(D[lv].questions, k, k === 'chou' ? 1 : 2) : pick(all, 12);
    startQuiz({ title:`${SUBN[k]} · ${lv}`, qs, mode:'practice', lv }); },
  oadd() { const g = +$('#og').value, t = +$('#ot').value; if (!(t > 0) || g < 0 || g > t) return toast('Isi jumlah benar dan total soal dengan benar');
    S.official.push({ d:dayKey(), lv:S.level, src:$('#osrc').value, g, t }); S.official = S.official.slice(-60); bump('quiz', 1, 20); save(); render(); toast('Skor tersimpan'); },
  dtab(el) { ui.dtab = el.dataset.v; render(); },
  ddlg(el) { ui.ddlg = +el.dataset.v; render(); },
  ddone(el) { if (!S.daily.dl[el.dataset.id]) { S.daily.dl[el.dataset.id] = 1; bump('talk', 1, 15); toast('+15 poin'); } save(); render(); },
  padd(el, e) { e.stopPropagation(); const t = dTopics().find(x => x.id === el.dataset.tid); if (!t) return; let n = 0;
    (el.dataset.i === 'all' ? t.phrases : [t.phrases[+el.dataset.i]]).forEach(p => { const lv = LV.includes(p[3]) ? p[3] : S.level;
      if (!S.custom.some(c => c.w === p[0] && c.lv === lv)) { S.custom.push({ k:Date.now().toString(36) + n++, lv, w:p[0], r:p[1], m:cleanTr(p[2]) }); } });
    save(); toast(n ? `${n} frasa masuk kartu ulang` : 'Sudah ada di kartu ulang'); },
  rpstart(el) { const t = dTopics().find(x => x.id === el.dataset.tid); RP = { tid:t.id, i:0, score:0, pick:null, done:false, order:t.roleplay.steps.map(s => shuffle(s.choices.map((_, i) => i))) }; render(); },
  rpchoose(el) { if (!RP || RP.pick != null) return; const t = dTopics().find(x => x.id === RP.tid), k = +el.dataset.k; RP.pick = k;
    if (t.roleplay.steps[RP.i].choices[RP.order[RP.i][k]].ok) RP.score++; render(); },
  rpnext() { const t = dTopics().find(x => x.id === RP.tid); RP.i++; RP.pick = null;
    if (RP.i >= t.roleplay.steps.length) { RP.done = true; const b = S.daily.rp[t.id]; if (b == null || RP.score > b) S.daily.rp[t.id] = RP.score; bump('talk', 1, 10 + RP.score * 3); }
    render(); },
  rpquit() { RP = null; render(); },
  vtab(el) { ui.vtab = el.dataset.v; render(); },
  vadd() { const t = $('#vt').value.trim(), u = $('#vu').value.trim(); if (!t && !u) return toast('Isi judul atau tautan');
    const safe = /^https?:\/\//i.test(u) ? u : (u ? 'https://' + u : '');
    S.vids.push({ id:Date.now().toString(36), t:t || u, u:safe, l:$('#vl').value, s:'plan', n:'' }); save(); ui.vtab = 'm'; render(); toast('Tersimpan'); },
  vdel(el) { if (confirm('Hapus video ini?')) { S.vids = S.vids.filter(v => v.id !== el.dataset.id); save(); render(); } },
  cadd() { const w = $('#cw').value.trim(), r = $('#cr').value.trim(), m = $('#cm').value.trim(); if (!w || !m) return toast('Isi kata dan arti');
    S.custom.push({ k:Date.now().toString(36), lv:S.level, w, r:r || w, m }); save(); ui.vtab = 'w'; render(); toast('Masuk kartu ulang'); },
  cdel(el) { S.custom = S.custom.filter(c => c.k !== el.dataset.k); delete S.srs[`${S.level}|c|${el.dataset.k}`]; save(); render(); },
  kset(el) { ui.kana = el.dataset.v; render(); },
  tab(el) { ui.tab = el.dataset.v; if (location.hash.startsWith('#/belajar')) render(); },
  ttab(el) { ui.ttab = el.dataset.v; render(); },
  gram(el) { const k = gk(S.level, D[S.level].grammar[+el.dataset.i]); if (S.gram[k]) delete S.gram[k]; else { S.gram[k] = 1; bump('gram', 1, 10); toast('+10 poin'); } save(); const open = [...document.querySelectorAll('details.g')].map(d => d.open); render(); document.querySelectorAll('details.g').forEach((d, i) => d.open = open[i]); },
  tr() { ui.tr = !ui.tr; render(); },
  blur() { ui.blur = !ui.blur; render(); },
  unblur(el) { el.style.filter = 'none'; },
  sayall() { if (!curConvo) return; if (!window.speechSynthesis) return toast('Perangkat tidak mendukung suara'); speechSynthesis.cancel(); curConvo.lines.forEach(l => speechSynthesis.speak(mk(l[1]))); },
  talkdone(el) { if (!S.talk[el.dataset.id]) { S.talk[el.dataset.id] = 1; bump('talk', 1, 15); toast('+15 poin'); } save(); render(); },
  cstart() { const lv = S.level, all = cardsOf(lv), di = dayIdx(), left = newLeft(lv);
    const due = shuffle(all.filter(c => S.srs[c.id] && S.srs[c.id].d <= di)), nw = all.filter(c => !S.srs[c.id]).slice(0, left);
    C = { lv, q:due.concat(nw), i:0, flip:false, done:0 }; render(); },
  cflip() { if (C) { C.flip = !C.flip; render(); } },
  cquit() { if (C) C.q = []; render(); },
  rate(el) { if (!C || !C.flip) return; const g = +el.dataset.g, c = C.q[C.i], isNew = !S.srs[c.id];
    S.srs[c.id] = sched(S.srs[c.id] || {}, g); if (isNew) { if (C.lv === 'AX') today().axnew = (today().axnew || 0) + 1; else { const t = today(); t.new++; t.newLv = t.newLv || {}; t.newLv[C.lv] = (t.newLv[C.lv] || 0) + 1; } }
    bump('cards', 1, g ? 2 : 0); C.done++; if (g === 0) C.q.push(c); C.i++; C.flip = false; render(); },
  qlisten() { const lv = S.level, hand = pick(D[lv].questions.filter(q => q.t === 'listen'), 8);
    startQuiz({ title:`Mendengar ${lv}`, qs:hand.concat(genL(lv, hand.length ? 4 : 10)), mode:'practice', lv }); },
  qkana() { startQuiz({ title:'Kuis kana', qs:genKana(15), mode:'practice', lv:S.level }); },
  qwrong() { const lv = S.level; startQuiz({ title:'Buku kesalahan', qs:shuffle((S.wrong[lv] || []).slice(0, 15)), mode:'practice', lv, review:true }); },
  mock() { return examStart(false); const lv = S.level, qs = buildMock(lv);
    startQuiz({ title:`Simulasi ${lv}`, qs, mode:'mock', lv, minutes:Math.ceil(qs.length * 1.1) }); },
  qpractice(el) { const lv = S.level, t = el.dataset.type, all = D[lv].questions; let qs;
    if (t === 'reading') qs = readingSets(all, 3);
    else if (t === 'grammar') qs = pick(all.filter(q => q.t === 'grammar'), 15);
    else if (t === 'kv') qs = pick(all.filter(q => q.t === 'kanji' || q.t === 'vocab'), 15);
    else qs = pick(all.filter(q => q.t !== 'reading' && q.t !== 'listen'), 15).concat(readingSets(all, 1));
    startQuiz({ title:`Latihan ${lv}`, qs, mode:'practice', lv }); },
  qquick(el) { const lv = S.level; startQuiz({ title:`Kuis kilat ${lv}`, qs:el.dataset.type === 'vocab' ? genQ(lv, 10) : genK(lv, 10), mode:'practice', lv }); },
  pick(el) { if (!Q) return; const k = +el.dataset.k; if (Q.mode === 'practice' && Q.ans[Q.i] != null) return; Q.ans[Q.i] = k; qRender(); },
  qnext() { if (!Q) return; if (Q.i < Q.qs.length - 1) { Q.i++; qRender(); window.scrollTo(0, 0); } else if (Q.mode === 'mock') acts.qsubmit(); else qFinish(); },
  qprev() { if (Q && Q.i > 0) { Q.i--; qRender(); } },
  qquit() { if (!Q || confirm('Keluar dari sesi ini? Progres sesi tidak disimpan.')) { clearTimer(); Q = null; render(); } },
  qredo() { const w = Q.wrong, o = Q; startQuiz({ title:'Ulangi yang salah', qs:w, mode:'practice', lv:o.lv }); },
  qdone(el, e) { e.preventDefault(); location.hash = (Q && Q.back) || '#/latihan'; render(); },
  export() { const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([JSON.stringify(S)], { type:'application/json' })); a.download = `nihongo-michi-${dayKey()}.json`; a.click(); },
  install() { if (deferred) { deferred.prompt(); deferred.userChoice.then(c => { if (c.outcome === 'accepted') toast('Michi dipasang'); }); deferred = null; } else if (installed()) toast('Michi sudah terpasang di perangkat ini'); else { if (!location.hash.startsWith('#/pasang')) location.hash = '#/pasang'; toast('Ikuti langkah di halaman ini'); } },
  reset() { if (confirm('Hapus semua progres? Tindakan ini tidak bisa dibatalkan.')) { localStorage.removeItem(KEY); S = Object.assign({}, def, { days:{}, srs:{}, tests:[], gram:{}, talk:{}, acc:{}, wrong:{}, vids:[], custom:[], daily:{ dl:{}, rp:{} }, official:[] }); save(); C = null; applyTheme(); render(); toast('Progres dihapus'); } }
};
document.addEventListener('click', e => { const nv = e.target.closest('#nav a,#tabbar a,.brand,.gear'); if (nv && nv.getAttribute('href') === (location.hash || '#/')) { clearTimer(); render(); } });
document.addEventListener('click', e => { const el = e.target.closest('[data-act]'); if (el && acts[el.dataset.act]) acts[el.dataset.act](el, e); });
document.addEventListener('input', e => {
  if (e.target.matches('[data-dsearch]')) {
    const q = e.target.value.toLowerCase().trim(), box = $('#dres'); if (!box) return;
    if (q.length < 2) { box.innerHTML = ''; return; }
    const hits = [];
    dTopics().forEach(t => t.phrases.forEach(p => { if ((p[0] + p[1] + p[2]).toLowerCase().includes(q)) hits.push([t, p]); }));
    box.innerHTML = `<div class="dres">${hits.length ? hits.slice(0, 30).map(h => `<div class="phr"><span class="jp">${h[1][0]}</span><small>${h[1][1] !== h[1][0] ? h[1][1] + ' · ' : ''}${cleanTr(h[1][2])} · <a href="#/harian/${h[0].id}" data-act="dtab" data-v="p">${h[0].title}</a></small>${sayBtn(h[1][0])}</div>`).join('') : '<div class="empty">Tidak ada frasa yang cocok.</div>'}</div>`;
  } if (e.target.matches('[data-filter]')) { const q = e.target.value.toLowerCase().trim(); document.querySelectorAll('.vrow').forEach(r => r.hidden = q && !r.dataset.s.includes(q)); } });
document.addEventListener('change', e => {
  const t = e.target;
  if (t.matches('[data-vs]')) { const v = S.vids.find(x => x.id === t.dataset.vs); if (v) { v.s = t.value; if (t.value === 'done') bump('watch', 1, 5); save(); } }
  if (t.matches('[data-vn]')) { const v = S.vids.find(x => x.id === t.dataset.vn); if (v) { v.n = t.value; save(); toast('Catatan tersimpan'); } }
  if (t.matches('[data-set]')) { S[t.dataset.set] = t.dataset.set === 'newPerDay' ? +t.value : t.value; save(); applyTheme(); }
  if (t.matches('[data-import]') && t.files[0]) { const f = new FileReader(); f.onload = () => { try { S = Object.assign({}, def, JSON.parse(f.result)); save(); applyTheme(); render(); toast('Progres diimpor'); } catch (x) { toast('Berkas tidak valid'); } }; f.readAsText(t.files[0]); }
});
document.addEventListener('keydown', e => {
  if (/INPUT|SELECT|TEXTAREA/.test(e.target.tagName)) return;
  if (C && C.q.length && C.i < C.q.length && /^#\/(kartu|aksel)/.test(location.hash)) {
    if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); acts.cflip(); }
    else if (C.flip && '1234'.includes(e.key)) acts.rate({ dataset:{ g:+e.key - 1 } });
  } else if (RP && !RP.done && location.hash.startsWith('#/harian') && ui.dtab === 'r') {
    if ('123'.includes(e.key)) acts.rpchoose({ dataset:{ k:+e.key - 1 } });
    else if (e.key === 'ArrowRight' && RP.pick != null) acts.rpnext();
  } else if (Q && !Q.fin) {
    if ('1234'.includes(e.key) && Q.qs[Q.i].o[+e.key - 1] != null) acts.pick({ dataset:{ k:+e.key - 1 } });
    else if (e.key === 'ArrowRight') { if (!(Q.mode === 'practice' && Q.ans[Q.i] == null)) acts.qnext(); }
  }
});

/* swipe pada slide frasa: kiri = berikutnya, kanan = sebelumnya */
let sx = null, sy = null;
document.addEventListener('touchstart', e => { const sl = e.target.closest('.pslide'); if (sl) { sx = e.touches[0].clientX; sy = e.touches[0].clientY; } else sx = null; }, { passive:true });
document.addEventListener('touchend', e => {
  if (sx == null) return;
  const dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy; sx = null;
  if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.3) { if (dx < 0) acts.pnext(); else acts.pprev(); }
}, { passive:true });
document.addEventListener('keydown', e => {
  if (/INPUT|SELECT|TEXTAREA/.test(e.target.tagName)) return;
  if (location.hash.startsWith('#/harian/') && ui.dtab === 'p' && !ui.plist && document.querySelector('.pslide')) {
    if (e.key === 'ArrowRight') acts.pnext(); else if (e.key === 'ArrowLeft') acts.pprev();
    else if (e.key === ' ') { e.preventDefault(); const t = dTopics().find(x => x.id === ui.ptopic); if (t) say(t.phrases[ui.pidx][0]); }
  }
});
/* ---------- akselerator 80/20 (data: data/akselerator.js, dibuat oleh tools/build_akselerator.py) ---------- */
const AX = D.ax || { cardsB:[], cardsK:[], grammar:[], families:[], radicals:[], twins:[], dialogs:[], colloc:[], affix:[], antonym:[], casual:[], decode:[], radar:[], kaiwa:[], program:[], dokkai:{ q:[], words:[] } };
const YO = AX.yomi || {};
const yo = (t, inl) => { const y = YO[t]; if (!y) return ''; return `<span class="yomi${inl ? ' inl' : ''}">${y[0] ? `<span class="yh">${y[0]}</span>` : ''}<span class="yr">${y[1]}</span></span>`; };
const axS = () => { if (!S.ax) S.ax = { start:dayIdx(), done:{}, notes:{}, newPerDay:10 }; S.ax.notes = S.ax.notes || {}; return S.ax; };
const axAll = () => { const b = AX.cardsB, k = AX.cardsK, out = []; for (let i = 0; i < Math.max(b.length, k.length); i++) { if (k[i]) out.push(k[i]); if (b[i]) out.push(b[i]); } return out; };
const axDue = () => axAll().filter(c => S.srs[c.id] && S.srs[c.id].d <= dayIdx());
const axNewLeft = () => Math.max(0, Math.min(axS().newPerDay - (today().axnew || 0), axAll().filter(c => !S.srs[c.id]).length));
const axDay = () => Math.max(1, dayIdx() - axS().start + 1);
const axProg = () => { const d = axDay(); return AX.program.find(p => d >= p[0] && d <= p[1]) || AX.program[AX.program.length - 1]; };
const axDone = k => !!(axS().done[dayKey()] || {})[k];
const axMark = (k, quiet) => { const s = axS(), dk = dayKey(); s.done[dk] = s.done[dk] || {}; if (!s.done[dk][k]) { s.done[dk][k] = 1; bump('ax', 1, 10); if (!quiet) toast('+10 poin'); } save(); };
const axGramFlat = () => [].concat.apply([], AX.grammar.map(c => c.items.map(g => Object.assign({ cl:c }, g))));
const axGramToday = () => { const f = axGramFlat(); return f[dayIdx() % f.length]; };
const axDlgToday = () => dayIdx() % AX.dialogs.length;
const blank = s => s.replace(/\[[^\]]*\]/, '<span class="axblank">（　　　）</span>');
const hl = s => s.replace(/\[([^\]]*)\]/g, '<b class="axhl">$1</b>');
const plain = s => s.replace(/[\[\]]/g, '');
const axFocus = () => {
  const d = axDay(), p = axProg();
  if (p[2] === 'radikal') { const h = d === 1 ? [0, 10] : [10, 20]; return { t:`Radikal ${h[0] + 1}–${h[1]}`, html:radHTML(AX.radicals.slice(h[0], h[1])) }; }
  if (p[2] === 'keluarga') { const i = (d - 3) * 2, fs = AX.families.slice(i, i + 2); return { t:fs.map(f => `Keluarga ${f.no} · ${f.fam}`).join(' & '), html:fs.map(famHTML).join('') }; }
  if (p[2] === 'kembar') return { t:'Kanji kembar', html:twinHTML() };
  if (p[2] === 'evaluasi') return { t:'Evaluasi: kuis kanji + dokkai mini', html:'<div class="modes"><button class="mode" data-act="axquiz" data-v="kanjiMix"><b>Kuis kanji campuran</b><span>15 soal: bunyi, arti, radikal, kembar</span></button><button class="mode" data-act="axquiz" data-v="reading"><b>Dokkai mini &amp; dialog</b><span>Pemahaman teks dan percakapan</span></button></div>' };
  const f = AX.families[dayIdx() % AX.families.length]; return { t:`Penyegaran · Keluarga ${f.no} · ${f.fam}`, html:famHTML(f) };
};
const axTasks = () => {
  const due = axDue().length, nl = axNewLeft(), g = axGramToday(), dl = AX.dialogs[axDlgToday()], f = axFocus();
  return [
    { k:'c', done:due + nl === 0, b:'Kartu ulang Akselerator', s:`${due} jatuh tempo · ${nl} kartu baru`, m:'5 mnt', act:'axcards', go:due + nl ? 'Mulai' : 'Beres' },
    { k:'g', done:axDone('g'), b:'Satu pola bunpou + 2 kalimat sendiri', s:`${g.p} · ${g.m}`, m:'5 mnt', act:'axgo', v:'g', go:'Buka' },
    { k:'k', done:axDone('k'), b:'Kanji hari ini', s:f.t, m:'5 mnt', act:'axgo', v:'k', go:'Buka' },
    { k:'d', done:axDone('d'), b:'Shadowing dialog kerja', s:dl.t, m:'5 mnt', act:'axdlg', v:axDlgToday(), go:'Buka' },
    { k:'q', done:axDone('q'), b:'Kuis kilat 10 soal', s:'Campuran kotoba, bunpou, choukai, kanji', m:'bonus', act:'axquiz', v:'mix', go:'Mulai' }
  ];
};
function radHTML(list) {
  return `<div class="axrad">${list.map(r => `<div class="kt"><div class="k">${r[0]}</div><div class="rd">${r[1]} · ${r[2]}</div>${yo('rn:' + r[0])}<div class="mn"><b>${r[3]}</b></div><div class="axmem">${r[4].map((e, ei) => `<button class="axk" data-act="wr" data-set="r${AX.radicals.indexOf(r)}" data-i="${ei}">${wCount(e[0]) ? `<em class="wc">✍${wCount(e[0])}</em>` : ''}<span class="jp">${e[0]}</span>${yo('r:' + e[0])}<small>${e[1]}</small></button>`).join('')}</div></div>`).join('')}</div>`;
}
function famHTML(f) {
  let wi = 0;
  return `<div class="card axfam"><h3>Keluarga ${f.no} · <span class="axon">${f.fam}</span></h3><button class="btn ghost wbtn" data-act="wr" data-set="f${f.no}">✍ Tulis keluarga ini</button>
  ${f.groups.map(g => `<div class="axgrp"><div class="axblk"><span class="jp">${g[0]}</span>${yo('b:' + g[0])}<small>${g[2]}</small></div><div class="axmem">${g[3].map(m => `<button class="axk" data-act="wr" data-set="f${f.no}" data-i="${wi++}">${wCount(m[0]) ? `<em class="wc">✍${wCount(m[0])}</em>` : ''}<span class="jp">${m[0]}</span>${yo('k:' + m[0])}<small>${m[2]}</small></button>`).join('')}</div></div>`).join('')}
  <div class="axjuku">${f.juku.map(j => `<div class="ex">${sayBtn(j[1])}<div><span class="jp">${j[0]}</span>${yo(j[0])}<small>${j[2]}</small></div></div>`).join('')}</div></div>`;
}
function twinHTML() {
  return `<button class="btn ghost wbtn" data-act="wr" data-set="tw">✍ Tulis kanji kembar</button><div class="tscroll"><table><thead><tr><th>Pasangan</th><th>Arti</th><th>Trik pembeda</th></tr></thead><tbody>${AX.twins.map(t => `<tr><td class="jp" style="font-size:1.6rem;white-space:nowrap">${t[0]} ／ ${t[3]}</td><td>${t[0]} ${yo('t:' + t[0], 1)} = ${t[2]}<br>${t[3]} ${yo('t:' + t[3], 1)} = ${t[5]}</td><td>${t[6]}</td></tr>`).join('')}</tbody></table></div>`;
}
function dlgHTML(i) {
  const d = AX.dialogs[i];
  return `<div class="chips" style="margin-bottom:14px">${AX.dialogs.map((x, k) => `<button class="chip ${k === i ? 'on' : ''}" data-act="axdlg" data-v="${k}">${k + 1}. ${x.t.split(':')[0]}</button>`).join('')}</div>
  <div class="card"><h3>${d.t}</h3><p class="muted" style="margin:4px 0 12px">${d.ctx}</p>
  <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:10px"><button class="btn ghost" data-act="axsayall" data-v="${i}">▶ Putar semua</button><button class="btn ghost" data-act="axtr">${ui.axtr === false ? 'Tampilkan' : 'Sembunyikan'} terjemahan</button></div>
  ${d.lines.map(l => `<div class="ex">${sayBtn(l[1])}<div><span class="tiny">${l[0]}</span> ${yo(l[0], 1)}<br><span class="jp">${l[1]}</span>${yo(l[1])}${ui.axtr === false ? '' : `<small>${l[2]}</small>`}</div></div>`).join('')}
  <h3 class="pcat">Bedah pola</h3>${d.notes.map(n => `<div class="rowl"><span><span class="jp">${n[0]}</span>${yo(n[0])}</span><span>${n[1]}</span></div>`).join('')}
  <p class="note" style="margin-top:14px">Cara shadowing: putar satu baris, jeda, ucapkan ulang dengan ritme yang sama. Perankan kedua tokoh. Ulangi sampai lancar tanpa melihat terjemahan.</p>
  <div style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn shu" data-act="axdlgdone">${axDone('d') ? 'Sudah dilatih hari ini ✓' : 'Selesai shadowing'}</button><button class="btn ghost" data-act="axquiz" data-v="reading">Uji pemahaman</button></div></div>`;
}
function vAksel() {
  if (C && C.lv === 'AX' && C.q.length && C.i < C.q.length) return cardView();
  const tab = ui.ax || 'hari';
  const tabs = [['hari', 'Hari ini'], ['kotoba', 'Kotoba'], ['bunpou', 'Bunpou'], ['choukai', 'Choukai'], ['kaiwa', 'Kaiwa & dialog'], ['kanji', 'Kanji'], ['kuis', 'Kuis']];
  let body = '';
  if (tab === 'hari') {
    const T = axTasks(), dn = T.slice(0, 4).filter(x => x.done).length, p = axProg(), g = axGramToday(), f = axFocus(), note = axS().notes[dayKey()] || '';
    const all = axAll(), seen = all.filter(c => S.srs[c.id]).length, mast = all.filter(c => (S.srs[c.id] || {}).i >= 14).length;
    body = `<div class="hero"><div class="card plan"><div class="plan-h"><h2>Rutinitas 20 menit</h2><span class="tiny">${dn}/4 selesai</span></div>
      ${T.map(x => `<button class="task ${x.done ? 'done' : ''}" data-act="${x.act}" ${x.v != null ? `data-v="${x.v}"` : ''} style="width:100%;text-align:left;background:none;border-left:0;border-right:0;border-top:0;font:inherit;color:inherit;cursor:pointer"><span class="check"></span><span><b>${x.b}</b> <span class="tiny">· ${x.m}</span><small class="jp">${x.s}</small></span><span class="go">${x.go} →</span></button>`).join('')}</div>
      <div class="stats"><div class="stat"><b class="num">${axDay()}</b><span>hari program</span></div><div class="stat"><b class="num">${seen}<small class="tiny">/${all.length}</small></b><span>kartu sudah dibuka</span></div>
      <div class="stat"><b class="num">${mast}</b><span>kartu dikuasai (≥14 hari)</span></div><div class="stat"><b class="num">${S.acc.AX && S.acc.AX.t ? Math.round(S.acc.AX.c / S.acc.AX.t * 100) + '%' : '—'}</b><span>akurasi kuis</span></div></div></div>
    <section id="ax-g"><div class="sec-h"><h2>Pola bunpou hari ini</h2><span class="tiny">${g.lv} · klaster ${g.cl.id}: ${g.cl.t}</span></div>
      <div class="card"><p style="margin:0"><span class="jp" style="font-size:1.5rem">${g.p}</span> <span class="tiny">${g.r}</span></p>${yo(g.p)}<p style="margin:6px 0 10px">${g.m}</p>
      <div class="ex">${sayBtn(plain(g.e[0]))}<div><span class="jp">${hl(g.e[0])}</span>${yo(plain(g.e[0]))}<small>${g.e[1]}</small></div></div>
      <p class="tiny" style="margin:14px 0 6px">Tulis 2 kalimat baru tentang aktivitasmu hari ini (lab, rumah, anak) memakai pola ini. Ucapkan keras-keras.</p>
      <textarea class="axnote jp" data-axnote rows="3" placeholder="例：…">${esc(note)}</textarea>
      <button class="btn ${axDone('g') ? 'ghost' : 'shu'}" data-act="axmark" data-v="g" style="margin-top:10px">${axDone('g') ? 'Selesai ✓' : 'Tandai selesai'}</button></div></section>
    <section id="ax-k"><div class="sec-h"><h2>Kanji hari ini · ${f.t}</h2><span class="tiny">${p[3]}</span></div>
      <p class="note">${p[4]} Ketuk kanji mana saja untuk latihan menulis dengan jari atau Apple Pencil.</p><p><button class="btn shu" data-act="wr" data-set="today">✍ Latihan menulis kanji hari ini (${wList('today').length} kanji × 3)</button></p>${f.html}
      <button class="btn ${axDone('k') ? 'ghost' : 'shu'}" data-act="axmark" data-v="k" style="margin-top:12px">${axDone('k') ? 'Selesai ✓' : 'Tandai selesai'}</button></section>
    <section><div class="sec-h"><h2>Program 14 hari (kanji)</h2><span class="tiny">15 menit per hari</span></div><div class="tscroll"><table><thead><tr><th>Hari</th><th>Fokus</th><th>Aktivitas</th></tr></thead><tbody>
      ${AX.program.map(r => `<tr class="${r === p ? 'axcur' : ''}"><td class="num">${r[0] === r[1] ? r[0] : r[1] > 999 ? r[0] + '+' : r[0] + '–' + r[1]}</td><td><b>${r[3]}</b></td><td>${r[4]}</td></tr>`).join('')}</tbody></table></div></section>
    <section><div class="sec-h"><h2>Setelan Akselerator</h2></div>
      <div class="set"><div><b>Kartu baru Akselerator per hari</b><br><span class="tiny">Terpisah dari kartu level ${S.level}</span></div><select data-axset="newPerDay">${[5, 10, 15, 20].map(n => `<option ${axS().newPerDay === n ? 'selected' : ''}>${n}</option>`).join('')}</select></div>
      <div class="set"><div><b>Ulangi program dari hari 1</b><br><span class="tiny">Progres kartu tidak dihapus</span></div><button class="btn ghost" data-act="axrestart">Mulai ulang</button></div>
      <p class="tiny">Ingin memakai Anki juga? File siap impor ada di folder <b>anki/</b>. Isi materinya sama dengan kartu di sini.</p></section>`;
  } else if (tab === 'kotoba') {
    body = `<p class="note">Jangan menghafal kata satu per satu. Satu kata kerja "dewa" membuka banyak kata, satu imbuhan membuka ratusan.</p>
    <h3 class="pcat">1. Collocation: 4 kata kerja serbaguna</h3>${AX.colloc.map(c => `<div class="card" style="margin-bottom:12px"><p style="margin:0 0 6px"><span class="jp" style="font-size:1.3rem">${c.v}</span> ${yo(c.v, 1)} <span class="tiny">${c.rv} · ${c.n}</span></p>${c.items.map(x => `<div class="vrow"><span class="w" style="font-size:1.1rem">${x[0]}${yo(x[0])}</span><span>${x[2]} <span class="tiny">${x[3]}</span></span>${sayBtn(x[1])}</div>`).join('')}</div>`).join('')}
    <h3 class="pcat">2. Imbuhan pengubah kelas kata</h3>${AX.affix.map(a => `<div class="card" style="margin-bottom:12px"><p style="margin:0 0 6px"><span class="jp" style="font-size:1.3rem">${a.a}</span> ${yo(a.a, 1)} <span class="tiny">= ${a.m}</span></p>${a.items.map(x => `<div class="vrow"><span class="w" style="font-size:1.1rem">${x[0]}${yo(x[0])}</span><span>${x[2]}</span>${sayBtn(x[1])}</div>`).join('')}</div>`).join('')}
    <h3 class="pcat">3. Antonim wajib (hafal 1 = dapat 2)</h3>${AX.antonym.map(x => `<div class="vrow"><span class="w" style="font-size:1.1rem">${x[0]} ↔ ${x[3]}${yo(x[0] + ' ↔ ' + x[3])}</span><span>${x[2]} ↔ ${x[5]}</span>${sayBtn(x[1] + '、' + x[4])}</div>`).join('')}`;
  } else if (tab === 'bunpou') {
    body = `<p class="note">Kelompokkan pola berdasarkan fungsi dan nuansa, bukan rumus. Ketuk pola untuk membuka contoh.</p>` + AX.grammar.map(c => `<h3 class="pcat">Klaster ${c.id}: ${c.t}</h3>` + c.items.map(g => `<details class="g"><summary><span class="gp">${g.p}${yo(g.p)}</span><span class="tiny">${g.lv}</span><span class="gm">${g.m}</span></summary><div class="gbody"><div class="ex">${sayBtn(plain(g.e[0]))}<div><span class="jp">${hl(g.e[0])}</span>${yo(plain(g.e[0]))}<small>${g.e[1]}</small></div></div><p class="tiny">${g.r}</p></div></details>`).join('')).join('') +
      `<div class="modes" style="margin-top:20px"><button class="mode" data-act="axquiz" data-v="gramFill"><b>Kuis isi pola</b><span>Pilih pola yang tepat untuk kalimat</span></button><button class="mode" data-act="axquiz" data-v="gramNuance"><b>Kuis nuansa</b><span>Arti/nuansa → pola</span></button></div>`;
  } else if (tab === 'choukai') {
    body = `<p class="note">Audio asli terasa cepat karena suku kata disingkat. Hafalkan tabel konversi ini, lalu latih telinga dengan tombol suara.</p>
    <div class="tscroll"><table><thead><tr><th>Bentuk buku</th><th>Bunyi asli</th><th>Fungsi</th><th>Contoh</th></tr></thead><tbody>${AX.casual.map(c => `<tr><td class="jp">${c[0]}${yo(c[0])}</td><td class="jp"><b>${c[1]}</b>${yo(c[1])}</td><td>${c[2]}</td><td><span class="jp">${hl(c[3])}</span> ${sayBtn(plain(c[3]))}${yo(plain(c[3]))}<span class="tiny">${c[4]}</span></td></tr>`).join('')}</tbody></table></div>
    <h3 class="pcat">3 radar soal choukai</h3>${AX.radar.map(r => `<div class="card" style="margin-bottom:10px"><b>${r[0]}</b> · <span class="jp">${r[1]}</span>${yo(r[1])}<p class="muted" style="margin:4px 0 0">${r[2]}</p></div>`).join('')}
    <h3 class="pcat">Drill dekoding (dengar dulu, lalu buka arti)</h3>${AX.decode.map(d => `<details class="g"><summary>${sayBtn(d[0])}<span class="jp">${d[0]}</span>${yo(d[0])}</summary><div class="gbody">${d[1]}</div></details>`).join('')}
    <div class="modes" style="margin-top:20px"><button class="mode feat" data-act="axquiz" data-v="listen"><b>Latihan dengar kasual</b><span>Suara otomatis → pilih artinya</span></button></div>`;
  } else if (tab === 'kaiwa') {
    const i = ui.axdlg != null ? ui.axdlg : axDlgToday();
    body = `<h3 class="pcat" style="margin-top:0">Dialog dunia kerja (N3–N2)</h3>${dlgHTML(i)}
    <h3 class="pcat">Kerangka plug-and-play</h3>${AX.kaiwa.map(k => `<div class="card" style="margin-bottom:12px"><b>${k.c}</b>${k.items.map(x => `<div class="ex">${sayBtn(x[1] || x[0])}<div><span class="jp">${x[0]}</span>${yo(x[0])}<small>${x[2]}</small></div></div>`).join('')}</div>`).join('')}
    <p class="note">Latihan bicara: rekam suaramu 1 menit menjawab satu pertanyaan acak (mis. 「最近、仕事はどうですか。」) memakai satu pembuka, satu filler, dan satu penutup halus di atas.</p>`;
  } else if (tab === 'kanji') {
    body = `<p class="note"><b>Dekoding 3 detik:</b> kanji = <b>blok makna</b> (radikal: "apa?") + <b>blok bunyi</b> ("dibaca apa?"). Contoh: 青 SEI → 晴 (日 + 青 = cerah, SEI) → 精 (米 + 青 = murni, SEI) → 請 (言 + 青 = memohon, SEI).</p>
    <p class="note"><b>Menulis tanpa menghafal goresan:</b> kiri → kanan (時 = 日 lalu 寺) · atas → bawah (花 = 艹 lalu 化) · kotak ditutup terakhir (国) · garis tengah yang menembus ditulis terakhir (中・半・事). Cukup tulis 3 kali sambil mengucapkan artinya.</p>
    <h3 class="pcat">20 radikal utama</h3>${radHTML(AX.radicals)}
    <h3 class="pcat">18 keluarga bunyi</h3><p class="tiny">Label level JLPT kanji hanya perkiraan; tidak ada daftar resmi sejak 2010.</p>
    ${AX.families.map(f => `<details class="g"><summary><span class="gp">Keluarga ${f.no}</span><span class="tiny">${f.no <= 9 ? 'N5–N3' : 'N3–N2'}</span><span class="gm jp">${f.fam} · ${f.groups.map(g => g[0]).join(' / ')}</span></summary><div class="gbody">${famHTML(f)}</div></details>`).join('')}
    <h3 class="pcat">Matriks anti-tertukar (kanji kembar)</h3>${twinHTML()}
    <h3 class="pcat">Dokkai mini</h3><div class="card"><p class="jp" style="font-size:1.1rem;line-height:1.9;margin-bottom:4px">${AX.dokkai.p}</p>${yo(AX.dokkai.p)}<details><summary class="tiny">Terjemahan</summary><p>${AX.dokkai.tr}</p></details>
      ${AX.dokkai.words.map(w => `<div class="vrow"><span class="w" style="font-size:1.1rem">${w[0]}${yo(w[0])}</span><span>${w[2]}</span>${sayBtn(w[1])}</div>`).join('')}</div>`;
  } else {
    const wr = (S.wrong.AX || []).length;
    body = `<div class="modes">
      <button class="mode feat" data-act="axquiz" data-v="mega"><b>Simulasi campuran 20 soal</b><span>Semua materi Akselerator, dengan pembahasan</span></button>
      <button class="mode" data-act="axquiz" data-v="colloc"><b>Collocation</b><span>計画を（　）→ かける / 立てる / とる</span></button>
      <button class="mode" data-act="axquiz" data-v="gramFill"><b>Bunpou: isi pola</b><span>Kalimat rumpang gaya JLPT</span></button>
      <button class="mode" data-act="axquiz" data-v="gramNuance"><b>Bunpou: nuansa</b><span>Pilih pola dari arti dan nuansanya</span></button>
      <button class="mode" data-act="axquiz" data-v="listen"><b>Choukai kasual (suara)</b><span>Dengar bentuk singkat → pilih arti</span></button>
      <button class="mode" data-act="axquiz" data-v="affix"><b>Imbuhan &amp; antonim</b><span>不・無・最・的・化・性 dan pasangan lawan kata</span></button>
      <button class="mode" data-act="axquiz" data-v="kanjiOn"><b>Kanji: bacaan On-yomi</b><span>Pakai blok bunyi untuk menebak bacaan</span></button>
      <button class="mode" data-act="axquiz" data-v="kanjiMean"><b>Kanji: arti</b><span>Kanji → arti inti</span></button>
      <button class="mode" data-act="axquiz" data-v="radical"><b>Radikal &amp; kanji kembar</b><span>Blok makna dan pasangan mirip</span></button>
      <button class="mode" data-act="axquiz" data-v="reading"><b>Dokkai &amp; dialog</b><span>Pemahaman teks dan percakapan kerja</span></button>
      <button class="mode" data-act="axquiz" data-v="wrong" ${wr ? '' : 'disabled'}><b>Buku kesalahan</b><span>${wr} soal yang pernah salah</span></button></div>`;
  }
  const fin = C && C.lv === 'AX' && C.done ? `<div class="card" style="margin-bottom:18px"><b>Sesi kartu selesai.</b> ${C.done} kartu ditinjau.</div>` : '';
  return `<header class="pagehead"><div><p class="eyebrow">Akselerator 80/20 · N5 → N2</p><h1>${tab === 'hari' ? `Hari ke-${axDay()}: ${axProg()[3]}` : 'Materi inti, effort minimal'}</h1>
    <p>Kotoba, bunpou, choukai, kaiwa dan kanji dari dua panduan Zero-Effort, dengan kartu ulang dan kuis sendiri.</p></div>
    <div class="chips" role="group" aria-label="Bacaan"><span class="tiny" style="align-self:center">Bacaan:</span><button class="chip ${axS().noH ? '' : 'on'}" data-act="axyomi" data-v="noH">ひらがな</button><button class="chip ${axS().noR ? '' : 'on'}" data-act="axyomi" data-v="noR">Romaji</button></div></header>${fin}
    <div class="tabs" role="tablist">${tabs.map(t => `<button role="tab" class="${tab === t[0] ? 'on' : ''}" data-act="axtab" data-v="${t[0]}">${t[1]}</button>`).join('')}</div><div class="${axS().noH ? 'no-yh' : ''} ${axS().noR ? 'no-yr' : ''}">${body}</div>`;
}

/* generator kuis akselerator */
const uniq = a => a.filter((x, i) => a.indexOf(x) === i);
const opts = (right, pool, n = 3) => [right].concat(pick(uniq(pool.filter(x => x !== right)), n));
const axQ = {
  colloc(n) { const V = ['かける', '立てる', 'とる']; const it = [].concat.apply([], AX.colloc.slice(0, 3).map((c, ci) => c.items.map(x => ({ x, ci }))));
    return pick(it, n).map(({ x, ci }) => ({ t:'vocab', q:`${x[0].split('を')[0]}を（　　　）<br><small>${x[2]}</small>`, o:V.concat('きる'), a:ci, x:`${x[0]}（${x[1]}）= ${x[2]}` })); },
  gramFill(n) { const F = axGramFlat(), ans = g => g.e[0].match(/\[([^\]]*)\]/)[1];
    return pick(F, n).map(g => ({ t:'grammar', q:`${blank(g.e[0])}<br><small>${g.e[1]}</small>`, o:opts(ans(g), F.filter(y => y.cl.id !== g.cl.id).map(ans)), a:0, x:`${plain(g.e[0])} · ${g.p} = ${g.m}` })); },
  gramNuance(n) { const F = axGramFlat(); return pick(F, n).map(g => ({ t:'grammar', q:`Pola mana yang berarti: <b>${g.m}</b>?`, o:opts(g.p, F.map(y => y.p)), a:0, x:`${g.p} (${g.r}) · contoh: ${plain(g.e[0])} = ${g.e[1]}` })); },
  listen(n) { const P = AX.decode.concat(AX.casual.map(c => [plain(c[3]), c[4]]));
    const P2 = P.filter((x, i) => P.findIndex(y => y[0] === x[0]) === i);
    const out = pick(P2, Math.ceil(n * .7)).map(d => ({ t:'listen', say:d[0], q:'Dengarkan, lalu pilih artinya.', o:opts(d[1], P2.map(y => y[1])), a:0, x:`${d[0]} = ${d[1]}` }));
    pick(AX.casual, n - out.length).forEach(c => out.push({ t:'listen', q:`Bentuk kasual dari <b>${c[0]}</b>?`, o:opts(c[1], AX.casual.map(y => y[1])), a:0, x:`${c[0]} → ${c[1]} · ${plain(c[3])} = ${c[4]}` }));
    return shuffle(out); },
  affix(n) { const W = [].concat.apply([], AX.affix.map(a => a.items.map(x => x.concat(a.a))));
    const out = pick(W, Math.ceil(n / 2)).map(x => ({ t:'vocab', q:`「${x[0]}」の いみは？`, o:opts(x[2], W.map(y => y[2])), a:0, x:`${x[0]}（${x[1]}）= ${x[2]} · imbuhan ${x[3]}` }));
    pick(AX.antonym, n - out.length).forEach(x => { const flip = Math.random() < .5, a = flip ? x[3] : x[0], b = flip ? x[0] : x[3];
      out.push({ t:'vocab', q:`Lawan kata 「${a}」?`, o:opts(b, [].concat.apply([], AX.antonym.map(y => [y[0], y[3]])).filter(y => y !== a)), a:0, x:`${x[0]} (${x[2]}) ↔ ${x[3]} (${x[5]})` }); });
    return shuffle(out); },
  mem() { return [].concat.apply([], AX.families.map(f => [].concat.apply([], f.groups.map(g => g[3].map(m => ({ k:m[0], on:m[1], m:m[2], blk:g[0], br:g[1], f })))))); },
  kanjiOn(n) { const M = axQ.mem(), tok = s => s.replace(/\(.*?\)/g, '').split('/').map(z => z.trim()).filter(Boolean);
    return pick(M, n).map(x => ({ t:'kanji', q:`「${x.k}」 (blok bunyi ${x.blk} = ${x.br}) dibaca?`, o:opts(x.on, M.filter(y => !tok(y.on).some(z => tok(x.on).includes(z))).map(y => y.on)), a:0, x:`${x.k} = ${x.on} · ${x.m} · keluarga ${x.f.no}` })); },
  kanjiMean(n) { const M = axQ.mem(), J = [].concat.apply([], AX.families.map(f => f.juku));
    const out = pick(M, Math.ceil(n * .6)).map(x => ({ t:'kanji', q:`「${x.k}」の いみは？`, o:opts(x.m, M.map(y => y.m)), a:0, x:`${x.k} (${x.on}) = ${x.m}` }));
    pick(J, n - out.length).forEach(j => out.push({ t:'kanji', q:`「${j[0]}」の よみかたは？`, o:opts(j[1], J.map(y => y[1])), a:0, x:`${j[0]}（${j[1]}）= ${j[2]}` }));
    return shuffle(out); },
  radical(n) { const R = AX.radicals, T = AX.twins;
    const out = pick(R, Math.ceil(n / 2)).map(r => ({ t:'kanji', q:`Radikal 「${r[0]}」 (${r[1]}) menandakan…`, o:opts(r[3], R.map(y => y[3])), a:0, x:`${r[0]} = ${r[3]} · contoh ${r[4].map(e => e[0]).join('・')}` }));
    pick(T, n - out.length).forEach(t => { const s = Math.random() < .5 ? [t[0], t[2]] : [t[3], t[5]];
      out.push({ t:'kanji', q:`Kanji mana yang berarti 「${s[1]}」?`, o:[s[0]].concat(pick([t[0], t[3]].filter(y => y !== s[0]).concat(pick([].concat.apply([], T.filter(y => y !== t).map(y => [y[0], y[3]])), 2)), 3)), a:0, x:t[6] }); });
    return shuffle(out); },
  reading() { const dk = AX.dokkai, out = dk.q.map(q => ({ t:'reading', p:dk.p, q:q[0], o:[q[1]].concat(q[2]), a:0, x:dk.tr }));
    AX.dialogs.forEach(d => out.push({ t:'reading', p:d.lines.map(l => `${l[0]}：${l[1]}`).join('<br>'), q:d.q[0], o:[d.q[1]].concat(d.q[2]), a:0, x:d.lines.map(l => l[2]).join(' ') }));
    return out; },
  kanjiMix(n) { return shuffle([].concat(axQ.kanjiOn(5), axQ.kanjiMean(5), axQ.radical(5))).slice(0, n); },
  mix(n) { return shuffle([].concat(axQ.colloc(2), axQ.gramFill(2), axQ.gramNuance(1), axQ.listen(2), axQ.kanjiOn(2), axQ.kanjiMean(1))).slice(0, n); },
  mega() { return shuffle([].concat(axQ.colloc(2), axQ.gramFill(4), axQ.gramNuance(2), axQ.listen(3), axQ.affix(2), axQ.kanjiOn(3), axQ.kanjiMean(2), axQ.radical(2))); }
};
const AXT = { colloc:'Collocation', gramFill:'Bunpou: isi pola', gramNuance:'Bunpou: nuansa', listen:'Choukai kasual', affix:'Imbuhan & antonim', kanjiOn:'Kanji: On-yomi', kanjiMean:'Kanji: arti & bacaan', radical:'Radikal & kanji kembar', reading:'Dokkai & dialog', kanjiMix:'Kuis kanji campuran', mix:'Kuis kilat Akselerator', mega:'Simulasi Akselerator' };
Object.assign(acts, {
  axtab(el) { ui.ax = el.dataset.v; render(); },
  axyomi(el) { const s = axS(), k = el.dataset.v; s[k] = !s[k]; save(); const y = window.scrollY; render(); window.scrollTo(0, y); },
  axgo(el) { ui.ax = 'hari'; render(); const t = document.getElementById('ax-' + el.dataset.v); if (t) t.scrollIntoView({ behavior:'smooth', block:'start' }); },
  axmark(el) { axMark(el.dataset.v); const y = window.scrollY; render(); window.scrollTo(0, y); },
  axdlg(el) { ui.ax = 'kaiwa'; ui.axdlg = +el.dataset.v; render(); },
  axdlgdone() { axMark('d'); const y = window.scrollY; render(); window.scrollTo(0, y); },
  axtr() { ui.axtr = ui.axtr === false; const y = window.scrollY; render(); window.scrollTo(0, y); },
  axsayall(el) { if (!window.speechSynthesis) return toast('Perangkat tidak mendukung suara'); speechSynthesis.cancel(); AX.dialogs[+el.dataset.v].lines.forEach(l => speechSynthesis.speak(mk(l[1]))); },
  axcards() { const all = axAll(), di = dayIdx(), left = axNewLeft();
    const due = shuffle(all.filter(c => S.srs[c.id] && S.srs[c.id].d <= di)), nw = all.filter(c => !S.srs[c.id]).slice(0, left);
    if (!due.length && !nw.length) return toast('Kartu Akselerator beres untuk hari ini');
    C = { lv:'AX', q:due.concat(nw), i:0, flip:false, done:0 }; location.hash = '#/aksel'; render(); },
  axquiz(el) { const v = el.dataset.v;
    if (v === 'wrong') return startQuiz({ title:'Buku kesalahan Akselerator', qs:shuffle((S.wrong.AX || []).slice(0, 15)), mode:'practice', lv:'AX', review:true, back:'#/aksel' });
    const qs = axQ[v](v === 'mega' ? 20 : 10); startQuiz({ title:AXT[v], qs, mode:'practice', lv:'AX', back:'#/aksel' }); },
  axrestart() { if (confirm('Mulai ulang program 14 hari dari hari 1? Progres kartu tetap.')) { axS().start = dayIdx(); save(); render(); } }
});
document.addEventListener('input', e => { if (e.target.matches('[data-axnote]')) { axS().notes[dayKey()] = e.target.value; save(); } });
document.addEventListener('change', e => { if (e.target.matches('[data-axset]')) { axS()[e.target.dataset.axset] = +e.target.value; save(); toast('Tersimpan'); } });


/* ---------- papan tulis kanji (jari / Apple Pencil / mouse) ---------- */
let W = null;
const wFam = no => { const f = AX.families.find(x => x.no === no); return [].concat.apply([], f.groups.map(g => g[3].map(m => ({ k:m[0], m:m[2], y:'k:' + m[0] })))); };
const wRad = ri => AX.radicals[ri][4].map(e => ({ k:e[0], m:e[1], y:'r:' + e[0] }));
const wTw = () => [].concat.apply([], AX.twins.map(t => [{ k:t[0], m:t[2], y:'t:' + t[0] }, { k:t[3], m:t[5], y:'t:' + t[3] }]));
function wList(set) {
  if (set === 'tw') return wTw();
  if (set[0] === 'f') return wFam(+set.slice(1));
  if (set[0] === 'r') return wRad(+set.slice(1));
  const d = axDay(), p = axProg();
  if (p[2] === 'radikal') { const h = d === 1 ? [0, 10] : [10, 20]; let out = []; for (let i = h[0]; i < h[1]; i++) out = out.concat(wRad(i)); return out; }
  if (p[2] === 'keluarga') { const i = (d - 3) * 2; return AX.families.slice(i, i + 2).reduce((a, f) => a.concat(wFam(f.no)), []); }
  if (p[2] === 'kembar') return wTw();
  return wFam(AX.families[dayIdx() % AX.families.length].no);
}
const wCount = k => ((axS().wr || {})[k] || 0);
function wOpen(set, i) {
  W = { set, list:wList(set), i:i || 0, n:0, strokes:[], cur:null, show:true, cmp:false };
  document.body.insertAdjacentHTML('beforeend', '<div class="wpad" id="wpad" role="dialog" aria-modal="true" aria-label="Latihan menulis kanji"><div class="wbox" id="wbox"></div></div>');
  document.documentElement.classList.add('wlock');
  wRender();
}
function wClose() { const e = $('#wpad'); if (e) e.remove(); document.documentElement.classList.remove('wlock'); W = null; if (/^#\/aksel/.test(location.hash)) { const y = window.scrollY; render(); window.scrollTo(0, y); } }
function wRender() {
  const it = W.list[W.i], box = $('#wbox'), sz = Math.min(window.innerWidth - 40, window.innerHeight - 330, 360);
  W.sz = Math.max(220, sz); W.show = W.n < 2; W.cmp = false; W.strokes = [];
  box.innerHTML = `<div class="whead"><button class="link" data-act="wclose">✕ Tutup</button><span class="num">${W.i + 1}/${W.list.length}</span>
      <span><button class="btn ghost" data-act="wnav" data-v="-1" ${W.i ? '' : 'disabled'}>←</button> <button class="btn ghost" data-act="wnav" data-v="1" ${W.i < W.list.length - 1 ? '' : 'disabled'}>→</button></span></div>
    <div class="winfo"><span class="jp wk">${it.k}</span><div>${yo(it.y)}<b>${it.m}</b><br><span class="tiny">sudah ditulis ${wCount(it.k)}×</span></div>${sayBtn(it.k)}</div>
    <div class="wstage" style="width:${W.sz}px;height:${W.sz}px"><div class="wmodel" id="wmodel" style="font-size:${Math.round(W.sz * .78)}px">${it.k}</div><canvas id="wcv"></canvas></div>
    <div class="wdots">${[0, 1, 2].map(j => `<i class="${j < W.n ? 'on' : ''}"></i>`).join('')}</div>
    <p class="whint" id="whint">${W.n < 2 ? `Tulisan ${W.n + 1}/3: ikuti contoh samar. Ucapkan artinya keras-keras.` : 'Tulisan 3/3: dari ingatan. Tekan Bandingkan setelah selesai.'}</p>
    <div class="wbtns"><button class="btn ghost" data-act="wundo">↶ Urungkan</button><button class="btn ghost" data-act="wclear">Hapus</button>
      <button class="btn ghost" data-act="wcmp">${W.show ? 'Sembunyikan contoh' : 'Bandingkan'}</button><button class="btn shu" data-act="wdone">Selesai ✓</button></div>`;
  wSetup();
}
function wSetup() {
  const cv = $('#wcv'), dpr = window.devicePixelRatio || 1, s = W.sz;
  cv.width = s * dpr; cv.height = s * dpr; cv.style.width = cv.style.height = s + 'px';
  const ctx = cv.getContext('2d'); ctx.scale(dpr, dpr); W.ctx = ctx;
  $('#wmodel').style.opacity = W.show ? '.16' : '0';
  const pt = e => { const r = cv.getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top, e.pointerType === 'pen' && e.pressure ? e.pressure : .5]; };
  cv.onpointerdown = e => { e.preventDefault(); try { cv.setPointerCapture(e.pointerId); } catch (x) {} W.cur = [pt(e)]; W.strokes.push(W.cur); wDraw(); };
  cv.onpointermove = e => { if (!W.cur) return; e.preventDefault(); let cs = e.getCoalescedEvents ? e.getCoalescedEvents() : []; if (!cs.length) cs = [e]; cs.forEach(c => W.cur.push(pt(c))); wDraw(); };
  cv.onpointerup = cv.onpointercancel = () => { W.cur = null; };
  wDraw();
}
function wDraw() {
  const c = W.ctx, s = W.sz, cs = getComputedStyle(document.documentElement);
  c.clearRect(0, 0, s, s);
  c.strokeStyle = cs.getPropertyValue('--line').trim() || '#ccc'; c.lineWidth = 1; c.setLineDash([5, 5]);
  c.beginPath(); c.moveTo(s / 2, 0); c.lineTo(s / 2, s); c.moveTo(0, s / 2); c.lineTo(s, s / 2); c.stroke(); c.setLineDash([]);
  c.strokeStyle = cs.getPropertyValue('--ink').trim() || '#222'; c.lineCap = c.lineJoin = 'round';
  const base = s / 30;
  W.strokes.forEach(st => {
    if (st.length === 1) { c.beginPath(); c.arc(st[0][0], st[0][1], base * (.5 + st[0][2]) / 2, 0, 7); c.fillStyle = c.strokeStyle; c.fill(); return; }
    for (let i = 1; i < st.length; i++) { const a = st[i - 1], b = st[i]; c.lineWidth = base * (.5 + (a[2] + b[2]) / 2); c.beginPath(); c.moveTo(a[0], a[1]); c.lineTo(b[0], b[1]); c.stroke(); }
  });
  const h = $('#whint'); if (h && W.strokes.length) h.dataset.n = W.strokes.length + ' goresan';
}
Object.assign(acts, {
  wr(el, e) { e.preventDefault(); e.stopPropagation(); wOpen(el.dataset.set, +(el.dataset.i || 0)); },
  wclose() { wClose(); },
  wnav(el) { const j = W.i + +el.dataset.v; if (j >= 0 && j < W.list.length) { W.i = j; W.n = 0; wRender(); } },
  wundo() { W.strokes.pop(); wDraw(); },
  wclear() { W.strokes = []; wDraw(); },
  wcmp(el) { W.show = !W.show; $('#wmodel').style.opacity = W.show ? (W.n >= 2 ? '.45' : '.16') : '0'; el.textContent = W.show ? 'Sembunyikan contoh' : 'Bandingkan'; },
  wdone() {
    if (!W.strokes.length) return toast('Tulis dulu kanjinya');
    const k = W.list[W.i].k, s = axS(); s.wr = s.wr || {}; s.wr[k] = (s.wr[k] || 0) + 1; bump('write', 1, 1); W.n++;
    if (W.n < 3) return wRender();
    if (W.i < W.list.length - 1) { toast(`${k} selesai 3× · lanjut`); W.i++; W.n = 0; return wRender(); }
    if (W.set === 'today') axMark('k', true);
    toast('Semua kanji di daftar ini sudah ditulis 3×'); wClose();
  }
});
document.addEventListener('keydown', e => { if (W && e.key === 'Escape') wClose(); });

/* ---------- ujian & latihan bergaya aplikasi JLPT (ujian penuh/mini, skor 0–180, rencana belajar) ---------- */
const PASS = { N1:100, N2:90, N3:95, N4:90, N5:80 };
const small = lv => lv === 'N4' || lv === 'N5';
const SECS = lv => small(lv) ? [['K', '言語知識・読解', 120, 38], ['L', '聴解', 60, 19]] : [['K', '言語知識', 60, 19], ['R', '読解', 60, 19], ['L', '聴解', 60, 19]];
const secOf = (lv, q) => q.t === 'listen' ? 'L' : small(lv) ? 'K' : q.t === 'reading' ? 'R' : 'K';
const qkey = q => q.q + (q.p || '') + (q.say || '');
const typStat = (lv, s) => ((S.typ || {})[lv] || {})[s];
function recordStats(lv, qs, ans) {
  if (!LV.includes(lv)) return;
  S.typ = S.typ || {}; const T = S.typ[lv] = S.typ[lv] || {};
  qs.forEach((q, i) => { if (!q.s || ans[i] == null) return; const r = T[q.s] = T[q.s] || { c:0, t:0 }; r.t++; if (ans[i] === q.a) r.c++; });
}
function addWrong(lv, qs, ans) {
  S.wrong[lv] = S.wrong[lv] || [];
  qs.forEach((q, i) => { if (ans[i] != null && ans[i] !== q.a && !S.wrong[lv].some(w => qkey(w) === qkey(q))) S.wrong[lv].push(q); });
  S.wrong[lv] = S.wrong[lv].slice(-80);
}
const fmtItems = lv => [].concat.apply([], ((D.format[lv] || {}).sections || []).map(s => s.items));
function weakTypes(lv, n) {
  const cnt = {}; D[lv].questions.forEach(q => { if (q.s) cnt[q.s] = (cnt[q.s] || 0) + 1; });
  return fmtItems(lv).filter(it => cnt[it[3]]).map(it => { const st = typStat(lv, it[3]); return { s:it[3], name:it[1], pct:st && st.t >= 3 ? st.c / st.t : -1, t:st ? st.t : 0 }; })
    .sort((a, b) => a.pct - b.pct).slice(0, n);
}
const isBm = (lv, q) => ((S.bm || {})[lv] || []).some(x => qkey(x) === qkey(q));

/* ---- susunan ujian mengikuti format resmi (jumlah ± dari data/format.js) ---- */
const itemN = it => { const m = /±(\d+)/.exec(it[2]); return m ? +m[1] : 5; };
function examPick(all, s, n) {
  const pool = all.filter(q => q.s === s); if (!pool.length || n <= 0) return [];
  if (!pool.some(q => q.p)) return pick(pool, n);
  const g = {}; pool.forEach(q => { const k = q.p || q.q; (g[k] = g[k] || []).push(q); });
  const out = []; for (const grp of shuffle(Object.values(g))) { if (out.length >= n) break; out.push(...grp); }
  return out;
}
function buildExam(lv, mini) {
  const f = D.format[lv], all = D[lv].questions, big = lv === 'N1' || lv === 'N2', ss = [];
  f.sections.forEach(sec => {
    const listen = sec.n.indexOf('聴解') >= 0;
    let qs = [], full = 0;
    sec.items.forEach(it => { const n = itemN(it); full += n; qs = qs.concat(examPick(all, it[3], mini ? Math.max(1, Math.ceil(n / 3)) : n)); });
    if (big && !listen) {
      let s0 = ss.find(x => x.joint); if (!s0) { s0 = { n:'言語知識（文字・語彙・文法）・読解', min:f.total - (f.sections.find(x => x.n.indexOf('聴解') >= 0) || { min:0 }).min, qs:[], full:0, joint:true }; ss.push(s0); }
      s0.qs = s0.qs.concat(qs); s0.full += full;
    } else ss.push({ n:sec.n, min:sec.min, qs, full });
  });
  ss.forEach(s => { s.min = mini ? Math.max(4, Math.ceil(s.min * s.qs.length / Math.max(1, s.full))) : s.min; });
  return ss.filter(s => s.qs.length);
}

/* ---- alur ujian: intro → bagian (timer sendiri) → jeda → hasil ---- */
let E = null;
function examStart(mini) { const lv = S.level; E = { lv, mini:!!mini, ss:buildExam(lv, !!mini), si:0, res:[] }; examIntro(); }
function examIntro() {
  const s = E.ss[E.si], first = E.si === 0;
  view.innerHTML = `<section class="quiz exintro"><p class="eyebrow">${E.mini ? 'Ujian mini' : 'Ujian penuh'} · ${E.lv} · bagian ${E.si + 1} dari ${E.ss.length}</p>
    <h1 class="jp">${s.n}</h1><div class="stats" style="margin:18px 0"><div class="stat"><b class="num">${s.qs.length}</b><span>soal</span></div><div class="stat"><b class="num">${s.min}</b><span>menit</span></div></div>
    ${first ? `<ul class="exrules"><li>Waktu tiap bagian berjalan sendiri. Saat habis, bagian otomatis dikumpulkan.</li><li>Boleh lompat soal lewat <b>Daftar soal</b>, dan tandai soal yang ragu.</li><li>Pembahasan baru muncul setelah semua bagian selesai.</li><li>Tidak ada pengurangan nilai, jadi jangan biarkan soal kosong.</li></ul>` : '<p class="muted">Istirahat sebentar, lalu lanjutkan.</p>'}
    ${s.n.indexOf('聴解') >= 0 ? '<p class="note">聴解 memakai suara otomatis perangkat. Pakai headphone. Suara diputar otomatis sekali; tombol putar ulang tetap ada, tetapi di ujian asli audio hanya sekali.</p>' : ''}
    <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:18px"><button class="btn shu" data-act="exgo">${first ? 'Mulai ujian' : 'Lanjut ke bagian ini'}</button><button class="btn ghost" data-act="exquit">Batalkan</button></div></section>`;
  window.scrollTo(0, 0);
}
function examResult() {
  const lv = E.lv, secs = SECS(lv); let qs = [], ans = [];
  E.res.forEach(r => { qs = qs.concat(r.qs); ans = ans.concat(r.ans); });
  const tally = {}; qs.forEach((q, i) => { const k = secOf(lv, q); tally[k] = tally[k] || [0, 0]; tally[k][1]++; if (ans[i] === q.a) tally[k][0]++; });
  const sc = secs.map(s => { const t = tally[s[0]] || [0, 0]; return { k:s[0], n:s[1], v:t[1] ? Math.round(t[0] / t[1] * s[2]) : 0, max:s[2], min:s[3], c:t[0], t:t[1] }; });
  const total = sc.reduce((a, s) => a + s.v, 0), passTot = total >= PASS[lv], passSec = sc.every(s => s.v >= s.min), pass = passTot && passSec;
  const ok = qs.filter((q, i) => ans[i] === q.a).length;
  S.exams = S.exams || []; S.exams.push({ d:dayKey(), lv, mini:E.mini, total, pass, sc:sc.map(s => s.v), c:ok, n:qs.length }); S.exams = S.exams.slice(-60);
  S.tests.push({ d:dayKey(), lv, pct:Math.round(ok / qs.length * 100), n:qs.length, c:ok }); S.tests = S.tests.slice(-40);
  S.acc[lv] = S.acc[lv] || { c:0, t:0 }; S.acc[lv].c += ok; S.acc[lv].t += qs.length;
  bump('quiz', 1, ok * 2 + (E.mini ? 20 : 50)); save();
  const sub = {}; qs.forEach((q, i) => { if (!q.s) return; sub[q.s] = sub[q.s] || [0, 0]; sub[q.s][1]++; if (ans[i] === q.a) sub[q.s][0]++; });
  const weak = Object.keys(sub).map(k => [k, sub[k][0] / sub[k][1]]).sort((a, b) => a[1] - b[1]).slice(0, 3).filter(x => x[1] < .8);
  const mini = E.mini; E = null;
  Q = { fin:true, qs, ans, lv, wrong:qs.filter((q, i) => ans[i] !== q.a), back:'#/ujian' };
  view.innerHTML = `<section class="quiz"><p class="eyebrow">Hasil ${mini ? 'ujian mini' : 'ujian penuh'} · ${lv}</p>
  <div class="exscore ${pass ? 'pass' : 'fail'}"><div><b class="num">${total}</b><small>/180</small></div><div><span class="badge">${pass ? 'LULUS (perkiraan)' : 'BELUM LULUS (perkiraan)'}</span>
    <p class="muted" style="margin:6px 0 0">Batas lulus ${lv}: ${PASS[lv]} poin dan setiap bagian ≥ batas minimal.${!passSec && passTot ? ' Total cukup, tetapi ada bagian di bawah batas minimal.' : ''}</p></div></div>
  <div class="secbars">${sc.map(s => `<div class="secbar"><div class="sb-h"><span class="jp">${s.n}</span><b class="num">${s.v}<small>/${s.max}</small></b></div><div class="sb-track"><i style="width:${s.v / s.max * 100}%" class="${s.v >= s.min ? 'ok' : 'low'}"></i><em style="left:${s.min / s.max * 100}%" title="batas minimal ${s.min}"></em></div><small class="tiny">${s.c}/${s.t} benar · batas minimal ${s.min}</small></div>`).join('')}</div>
  <p class="tiny">Skor di sini dihitung kasar dari persentase benar. JLPT asli memakai skor berskala (penyetaraan antar-tes), jadi anggap ini perkiraan.</p>
  ${weak.length ? `<h3 class="pcat">Perlu diperkuat</h3><div class="chips">${weak.map(w => `<button class="chip" data-act="qtype" data-s="${w[0]}">${SUBN[w[0]] || w[0]} · ${Math.round(w[1] * 100)}% → latih</button>`).join('')}</div>` : ''}
  <h3 class="pcat">Per tipe soal</h3>${Object.keys(sub).map(k => `<div class="rowl"><span class="jp">${SUBN[k] || k}</span><b class="num">${sub[k][0]}/${sub[k][1]}</b></div>`).join('')}
  <div style="display:flex;gap:10px;flex-wrap:wrap;margin:20px 0 32px">${Q.wrong.length ? '<button class="btn shu" data-act="qredo">Ulangi yang salah</button>' : ''}<a class="btn ghost" href="#/ujian">Kembali ke Ujian</a></div>
  <h2>Pembahasan</h2>${qs.map((q, i) => { const g = ans[i] === q.a; return `<div class="rev"><span class="tag ${g ? 'ok' : 'bad'}">${g ? 'Benar' : ans[i] == null ? 'Kosong' : 'Salah'}</span> <span class="tiny jp">${SUBN[q.s] || SEC[q.t] || ''}</span>${q.p ? `<p class="jp muted" style="font-size:.9rem;margin:8px 0 0">${q.p}</p>` : ''}${q.say ? `<p class="jp muted" style="font-size:.85rem;margin:6px 0 0">🔊 ${q.say}</p>` : ''}<p class="jp" style="margin:6px 0">${q.q}</p>
    <p class="tiny" style="margin:0">Jawabanmu: ${ans[i] != null ? q.o[ans[i]] : '(kosong)'} · Benar: <b>${q.o[q.a]}</b></p><p class="muted" style="font-size:.9rem;margin:4px 0 0">${q.x}</p></div>`; }).join('')}</section>`;
  window.scrollTo(0, 0);
}

/* ---- halaman Ujian ---- */
function scoreChart(H, lv) {
  if (H.length < 2) return '';
  const w = 320, h = 110, xs = i => 10 + i * (w - 20) / (H.length - 1), ys = v => h - 10 - v / 180 * (h - 20);
  const pts = H.map((x, i) => `${xs(i).toFixed(1)},${ys(x.total).toFixed(1)}`).join(' ');
  return `<svg class="exchart" viewBox="0 0 ${w} ${h}" role="img" aria-label="Perkembangan skor"><line x1="0" x2="${w}" y1="${ys(PASS[lv])}" y2="${ys(PASS[lv])}" class="pl"/><text x="4" y="${ys(PASS[lv]) - 4}" class="tl">batas ${PASS[lv]}</text><polyline points="${pts}" class="ln"/>${H.map((x, i) => `<circle cx="${xs(i)}" cy="${ys(x.total)}" r="3.5" class="${x.pass ? 'ok' : 'low'}"/>`).join('')}</svg>`;
}
function vExam() {
  const lv = S.level, full = buildExam(lv, false), mini = buildExam(lv, true);
  const nq = s => s.reduce((a, x) => a + x.qs.length, 0), mn = s => s.reduce((a, x) => a + x.min, 0);
  const H = (S.exams || []).filter(x => x.lv === lv), last = H[H.length - 1], off = S.official.filter(x => x.lv === lv).slice(-5).reverse();
  return `<header class="pagehead"><div><p class="eyebrow">Ujian</p><h1>Simulasi JLPT ${lv}</h1><p>${examLine()}</p></div>${lvChips(lv)}</header>
  <div class="modes">
    <button class="mode feat" data-act="exstart" data-v="full"><b>Ujian penuh ${lv}</b><span>${nq(full)} soal · ${mn(full)} menit · ${full.length} bagian dengan waktu sendiri · skor 0–180 dan perkiraan lulus</span></button>
    <button class="mode" data-act="exstart" data-v="mini"><b>Ujian mini</b><span>${nq(mini)} soal · ±${mn(mini)} menit · semua tipe soal, versi pendek</span></button>
    <a class="mode" href="#/format"><b>Format &amp; skor kelulusan</b><span>Bagian, waktu, tipe soal (問題), batas lulus ${PASS[lv]}/180</span></a>
  </div>
  <section><div class="sec-h"><h2>Perkiraan skor</h2><span class="tiny">${H.length} ujian ${lv}</span></div>
    ${last ? `<div class="card exlast"><div class="exscore ${last.pass ? 'pass' : 'fail'} compact"><div><b class="num">${last.total}</b><small>/180</small></div><div><span class="badge">${last.pass ? 'Lulus (perkiraan)' : 'Belum lulus'}</span><p class="tiny" style="margin:4px 0 0">${last.d} · ${last.mini ? 'mini' : 'penuh'} · ${SECS(lv).map((s, i) => `${s[1]} ${last.sc[i]}/${s[2]}`).join(' · ')}</p></div></div>${scoreChart(H.slice(-12), lv)}</div>
    ${H.slice(-6).reverse().map(x => `<div class="rowl"><span class="num">${x.d}</span><span>${x.mini ? 'Mini' : 'Penuh'} · ${x.c}/${x.n} benar</span><b class="num ${x.pass ? 'okc' : ''}">${x.total}</b></div>`).join('')}`
    : '<div class="empty">Belum ada ujian. Mulai dengan ujian mini untuk melihat posisimu.</div>'}</section>
  <section class="card" style="margin-top:28px"><h3>Catat skor soal resmi</h3><p class="muted" style="margin:6px 0 12px;font-size:.92rem">Soal ujian asli tidak tersedia di aplikasi ini karena hak cipta. Kerjakan <a class="link" href="https://www.jlpt.jp/e/samples/forlearners.html" target="_blank" rel="noopener">contoh soal resmi</a> atau buku soal resmi, lalu catat hasilnya di sini.</p>
    <form class="vform" onsubmit="return false"><select id="osrc" aria-label="Sumber"><option>Contoh soal resmi (jlpt.jp)</option><option>Buku soal resmi (Official Workbook)</option><option>Buku soal lain</option></select>
    <div style="display:flex;gap:8px"><input id="og" type="number" min="0" inputmode="numeric" class="search" placeholder="Benar" aria-label="Jumlah benar"><input id="ot" type="number" min="1" inputmode="numeric" class="search" placeholder="Total soal" aria-label="Total soal"></div>
    <button class="btn" data-act="oadd" type="button">Simpan skor</button></form>
    ${off.length ? `<div style="margin-top:14px">${off.map(x => `<div class="rowl"><span class="num">${x.d}</span><span>${esc(x.src)} · ${x.g}/${x.t}</span><b class="num">${Math.round(x.g / x.t * 100)}%</b></div>`).join('')}</div>` : ''}</section>`;
}

/* ---- halaman Latihan: per bagian & tipe soal (問題) dengan progres ---- */
function vPractice() {
  const lv = S.level, f = D.format[lv], qs = D[lv].questions, cnt = {};
  qs.forEach(q => { if (q.s) cnt[q.s] = (cnt[q.s] || 0) + 1; });
  const wr = (S.wrong[lv] || []).length, bm = ((S.bm || {})[lv] || []).length;
  const row = it => { const s = it[3], st = typStat(lv, s), pct = st && st.t ? Math.round(st.c / st.t * 100) : null;
    return cnt[s] ? `<button class="prow" data-act="qtype" data-s="${s}"><span class="pm jp">${it[0]}</span><span class="pb"><b class="jp">${it[1]}</b><small>${it[2].replace(/\s*\(±\d+\)/, '')} · ${cnt[s]} soal</small><span class="pbar"><i style="width:${pct || 0}%" class="${pct == null ? '' : pct >= 70 ? 'ok' : pct >= 50 ? 'mid' : 'low'}"></i></span></span><span class="pv num">${pct == null ? '<span class="tiny">baru</span>' : pct + '%'}<small>${st ? st.t : 0} dijawab</small></span></button>` : ''; };
  return `<header class="pagehead"><div><p class="eyebrow">Latihan</p><h1>Latihan per tipe soal · ${lv}</h1><p>Pilih 問題 sesuai format JLPT. Pembahasan muncul langsung setelah menjawab. Persentase = akurasimu di tipe itu.</p></div>${lvChips(lv)}</header>
  <div class="quickrow">
    <button class="qk" data-act="qpractice" data-type="all"><b>Campuran</b><small>15 soal + 1 teks</small></button>
    <button class="qk" data-act="qwrong" ${wr ? '' : 'disabled'}><b>Buku kesalahan</b><small>${wr} soal</small></button>
    <button class="qk" data-act="qbmlist" ${bm ? '' : 'disabled'}><b>Soal tersimpan</b><small>${bm} soal ☆</small></button>
    <a class="qk" href="#/ujian"><b>Ujian</b><small>penuh / mini</small></a>
  </div>
  ${f.sections.map(sec => `<section><div class="sec-h"><h2 class="jp">${sec.n}</h2>${sec.min ? `<span class="tiny">${sec.min} menit di ujian</span>` : ''}</div><div class="plist">${sec.items.map(row).join('')}</div></section>`).join('')}
  <section><div class="sec-h"><h2>Latihan cepat</h2></div><div class="modes">
    <button class="mode" data-act="qquick" data-type="vocab"><b>Kuis kilat kosakata</b><span>10 soal acak dari ${D[lv].vocab.length} kata</span></button>
    <button class="mode" data-act="qquick" data-type="kanji"><b>Kuis kilat kanji</b><span>10 soal acak baca dan arti</span></button>
    <button class="mode" data-act="qlisten"><b>Latihan mendengar (聴解)</b><span>Soal dengar bergaya JLPT + kalimat</span></button>
    <button class="mode" data-act="qkana"><b>Kuis kana</b><span>Hiragana &amp; katakana, 15 soal acak</span></button>
  </div></section>`;
}

/* ---- Rencana belajar (roadmap) menuju tanggal ujian ---- */
function vPlan() {
  const lv = S.examLv || S.level, P = S.plan = S.plan || { start:dayIdx() };
  const left = S.exam ? Math.round((new Date(S.exam + 'T00:00:00Z') - new Date(dayKey() + 'T00:00:00Z')) / 864e5) : null;
  const L = left != null && left >= 0 ? left : 120, end = dayIdx() + L, span = Math.max(1, end - P.start), frac = Math.min(1, Math.max(0, (dayIdx() - P.start) / span));
  const phase = frac < .6 ? 0 : frac < .85 ? 1 : 2, PH = [['Fondasi', 'Kosakata, kanji, tata bahasa baru setiap hari + latihan ringan per tipe soal'], ['Latihan per tipe', 'Materi baru berkurang; fokus 問題 terlemah + ujian mini tiap pekan'], ['Simulasi', 'Ujian penuh tiap pekan, ulangi kesalahan, jaga kartu ulang']];
  const cs = cardsOf(lv, false), seen = cs.filter(c => S.srs[c.id]).length, g = D[lv].grammar, gd = g.filter(x => S.gram[gk(lv, x)]).length;
  const foundLeft = Math.max(7, Math.round(span * .6) - (dayIdx() - P.start));
  const needNew = Math.min(40, Math.max(5, Math.ceil((cs.length - seen) / foundLeft))), needGram = Math.max(1, Math.ceil((g.length - gd) / Math.max(1, foundLeft / 7)));
  const wd = (new Date(dayKey()).getUTCDay() + 6) % 7, wk = []; for (let i = dayIdx() - wd; i <= dayIdx(); i++) wk.push(S.days[dayKey(i)] || {});
  const sum = f => wk.reduce((a, d) => a + (d[f] || 0), 0), wkStart = dayKey(dayIdx() - wd);
  const ex = (S.exams || []).filter(x => x.lv === lv && x.d >= wkStart), exMini = ex.filter(x => x.mini).length, exFull = ex.filter(x => !x.mini).length;
  const T = [
    ['Kartu baru', sum('new'), phase === 2 ? 0 : needNew * 7, '#/kartu'], ['Pola tata bahasa', sum('gram'), phase === 2 ? 0 : needGram, '#/belajar'],
    ['Sesi latihan / kuis', sum('quiz'), [5, 10, 7][phase], '#/latihan'], ['Ujian mini', exMini, [0, 1, 1][phase], '#/ujian'], ['Ujian penuh', exFull, [0, 0, 1][phase], '#/ujian']
  ].filter(x => x[2] > 0);
  const weak = weakTypes(lv, 3);
  return `<header class="pagehead"><div><p class="eyebrow">Rencana belajar</p><h1>Menuju JLPT ${lv}</h1><p>${left != null && left >= 0 ? `<b>${left} hari lagi</b> · ` : 'Tanggal ujian belum diatur, jadi rencana memakai 120 hari. '}fase sekarang: <b>${PH[phase][0]}</b></p></div></header>
  <div class="card"><div class="phase">${PH.map((p, i) => `<div class="ph ${i === phase ? 'on' : i < phase ? 'past' : ''}" style="flex:${[60, 25, 15][i]}"><b>${i + 1}. ${p[0]}</b><small>${p[1]}</small></div>`).join('')}<em style="left:${frac * 100}%"></em></div></div>
  <section><div class="sec-h"><h2>Target pekan ini</h2><span class="tiny">Senin–Minggu</span></div>
    ${T.map(t => { const p = Math.min(100, Math.round(t[1] / t[2] * 100)); return `<a class="prow" href="${t[3]}"><span class="pb"><b>${t[0]}</b><span class="pbar"><i style="width:${p}%" class="${p >= 100 ? 'ok' : p >= 50 ? 'mid' : 'low'}"></i></span></span><span class="pv num">${t[1]}<small>/ ${t[2]}</small></span></a>`; }).join('')}
  </section>
  <section><div class="sec-h"><h2>Kebutuhan materi ${lv}</h2></div>
    <div class="stats"><div class="stat"><b class="num">${seen}<small class="tiny">/${cs.length}</small></b><span>kata &amp; kanji sudah dibuka</span></div><div class="stat"><b class="num">${gd}<small class="tiny">/${g.length}</small></b><span>pola tata bahasa paham</span></div>
    <div class="stat"><b class="num">${needNew}</b><span>kartu baru per hari yang dibutuhkan (sekarang ${S.newPerDay})</span></div><div class="stat"><b class="num">${needGram}</b><span>pola per pekan yang dibutuhkan</span></div></div>
    ${needNew !== S.newPerDay && phase < 2 ? `<button class="btn shu" data-act="planapply" data-v="${needNew}" style="margin-top:12px">Pakai ${needNew} kartu baru per hari</button>` : ''}
    ${S.level !== lv ? `<p class="note" style="margin-top:12px">Level yang sedang dibuka di aplikasi: ${S.level}. Target ujian: ${lv}. <button class="link" data-act="lv" data-v="${lv}">Pindah ke ${lv}</button></p>` : ''}</section>
  <section><div class="sec-h"><h2>Tipe soal yang perlu diperkuat</h2></div>
    ${weak.length ? `<div class="chips">${weak.map(w => `<button class="chip" data-act="qtype" data-s="${w.s}" data-lv="${lv}">${w.name} · ${w.pct < 0 ? 'belum dicoba' : Math.round(w.pct * 100) + '%'}</button>`).join('')}</div>` : '<div class="empty">Belum ada data.</div>'}</section>
  <section><div class="sec-h"><h2>Atur rencana</h2></div>
    <div class="set"><div><b>Level ujian</b></div><select data-pset="examLv">${LV.map(l => `<option ${lv === l ? 'selected' : ''}>${l}</option>`).join('')}</select></div>
    <div class="set"><div><b>Tanggal ujian</b><br><span class="tiny">JLPT diadakan Juli dan Desember</span></div><input type="date" data-pset="exam" value="${S.exam}" style="font:inherit;padding:6px 8px;background:var(--card);color:var(--ink);border:1px solid var(--line);border-radius:6px"></div>
    <div class="set"><div><b>Mulai ulang rencana dari hari ini</b><br><span class="tiny">Fase dihitung dari tanggal mulai</span></div><button class="btn ghost" data-act="planreset">Mulai ulang</button></div></section>`;
}

/* ---- Menu (ponsel) ---- */
function vMenu() {
  const L = [['#/rencana', 'Rencana belajar', 'Fase, target pekan ini, tipe soal terlemah'], ['#/kartu', 'Kartu ulang', 'Kosakata & kanji dengan pengulangan berjarak'], ['#/aksel', 'Akselerator 80/20', 'Rutinitas 20 menit, kanji, papan tulis'],
    ['#/harian', 'Sehari-hari', 'Frasa & roleplay situasi nyata'], ['#/bicara', 'Dialog per level', 'Percakapan dengan suara'], ['#/tonton', 'Tonton', 'Daftar video belajar'], ['#/format', 'Format ujian', 'Struktur, waktu, batas lulus'], ['#/lainnya', 'Panduan & setelan', 'Tema, cadangan progres'], ['#/pasang', 'Pasang aplikasi', 'Tautan untuk Android, iPhone, iPad']];
  return `<header class="pagehead"><div><p class="eyebrow">Menu</p><h1>Semua fitur</h1></div></header><div class="mgrid">${L.map(x => `<a href="${x[0]}"><b>${x[1]}</b><small>${x[2]}</small></a>`).join('')}</div>`;
}

Object.assign(acts, {
  exstart(el) { examStart(el.dataset.v === 'mini'); },
  exgo() { const s = E.ss[E.si]; startQuiz({ title:`${E.mini ? 'Mini' : 'Ujian'} ${E.lv} · ${s.n}`, qs:s.qs, mode:'mock', lv:E.lv, minutes:s.min, exam:true }); },
  exquit() { if (confirm('Batalkan ujian ini?')) { E = null; location.hash = '#/ujian'; render(); } },
  qflag() { if (!Q) return; Q.flags[Q.i] = !Q.flags[Q.i]; qRender(); },
  qgrid() { if (!Q) return; Q.grid = !Q.grid; qRender(); },
  qjump(el) { if (!Q) return; Q.i = +el.dataset.k; Q.grid = false; qRender(); window.scrollTo(0, 0); },
  qsubmit() { if (!Q) return; const empty = Q.qs.filter((_, i) => Q.ans[i] == null).length, fl = Object.values(Q.flags).filter(Boolean).length;
    if (confirm(`Kumpulkan bagian ini?${empty ? `\n${empty} soal belum dijawab.` : ''}${fl ? `\n${fl} soal ditandai ragu.` : ''}`)) qFinish(); },
  qbm(el, e) { e.preventDefault(); const q = Q && Q.qs[Q.i]; if (!q) return; const lv = LV.includes(Q.lv) ? Q.lv : S.level; S.bm = S.bm || {}; const L = S.bm[lv] = S.bm[lv] || [];
    const j = L.findIndex(x => qkey(x) === qkey(q)); if (j >= 0) { L.splice(j, 1); toast('Dihapus dari soal tersimpan'); } else { L.push(q); toast('Disimpan ☆'); } save(); qRender(); },
  qbmlist() { const lv = S.level; startQuiz({ title:'Soal tersimpan', qs:shuffle(((S.bm || {})[lv] || []).slice(0, 20)), mode:'practice', lv }); },
  planapply(el) { S.newPerDay = +el.dataset.v; save(); render(); toast('Kartu baru per hari diperbarui'); },
  planreset() { S.plan = { start:dayIdx() }; save(); render(); }
});
document.addEventListener('change', e => { if (e.target.matches('[data-pset]')) { S[e.target.dataset.pset] = e.target.value; save(); render(); } });

function dashExam(lv) {
  const H = (S.exams || []).filter(x => x.lv === lv), last = H[H.length - 1], w = weakTypes(lv, 1)[0];
  return `<section class="two"><div><div class="sec-h"><h2>Perkiraan skor ${lv}</h2><a class="link" href="#/ujian">Ujian →</a></div>${last ? `<div class="exscore ${last.pass ? 'pass' : 'fail'} compact"><div><b class="num">${last.total}</b><small>/180</small></div><div><span class="badge">${last.pass ? 'Lulus (perkiraan)' : 'Belum lulus'}</span><p class="tiny" style="margin:4px 0 0">${last.d} · ${last.mini ? 'mini' : 'penuh'} · batas ${PASS[lv]}</p></div></div>` : `<div class="empty">Belum ada skor. <a class="link" href="#/ujian">Coba ujian mini</a> untuk melihat posisimu.</div>`}</div>
  <div><div class="sec-h"><h2>Rencana belajar</h2><a class="link" href="#/rencana">Buka →</a></div><div class="card" style="padding:14px 16px">${w ? `Tipe soal terlemah: <b class="jp">${w.name}</b> ${w.pct < 0 ? '(belum dicoba)' : '(' + Math.round(w.pct * 100) + '%)'}<br><button class="btn ghost" style="margin-top:8px" data-act="qtype" data-s="${w.s}">Latih sekarang</button>` : 'Atur tanggal ujian untuk mendapat target pekanan.'}</div></div></section>`;
}

/* ---------- halaman Pasang aplikasi (Android / iPhone / iPad / komputer) ---------- */
const APP_URL = 'https://snrd-git.github.io/michi/';
const devKind = () => {
  const ua = navigator.userAgent || '', iOS = /iPhone|iPad|iPod/.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1);
  if (iOS) return { os:'ios', safari:/Safari/.test(ua) && !/CriOS|FxiOS|EdgiOS|GSA|Instagram|FBAN|Line\//.test(ua) };
  if (/Android/.test(ua)) return { os:'android' };
  return { os:'desktop' };
};
const installed = () => (window.matchMedia && matchMedia('(display-mode: standalone)').matches) || navigator.standalone === true;
const SHARE_ICON = '<svg class="ishare" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12M8 7l4-4 4 4"/><path d="M6 11H5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-1"/></svg>';
const ADD_ICON = '<svg class="ishare" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="3" width="18" height="18" rx="4"/><path d="M12 8v8M8 12h8"/></svg>';
function vInstall() {
  const d = devKind(), on = installed();
  const step = (n, t, s) => `<div class="istep"><span class="inum">${n}</span><div><b>${t}</b>${s ? `<small>${s}</small>` : ''}</div></div>`;
  const ios = `<div class="card ibox"><h3> iPhone &amp; iPad</h3>
    ${d.os === 'ios' && !d.safari ? '<p class="note" style="margin:8px 0">Kamu sedang membuka lewat aplikasi lain. Buka tautan ini di <b>Safari</b> dulu (ketuk ••• atau ikon kompas → Buka di Safari).</p>' : ''}
    ${step(1, `Ketuk tombol Bagikan ${SHARE_ICON}`, 'Di bawah layar (iPhone) atau kanan atas (iPad), di Safari.')}
    ${step(2, `Pilih “Tambahkan ke Layar Utama” ${ADD_ICON}`, 'Gulir daftar ke bawah bila belum terlihat. Di iOS 26: ••• → Bagikan → Tambahkan ke Layar Utama.')}
    ${step(3, 'Ketuk “Tambah”', 'Ikon 道 Michi muncul di layar utama. Buka dari ikon itu: tampil layar penuh dan bisa offline.')}</div>`;
  const android = `<div class="card ibox"><h3>Android</h3>
    <button class="btn ibtn" data-act="install" ${deferred ? '' : 'data-fallback="1"'}>Pasang aplikasi</button>
    <p class="tiny" style="margin:8px 0 12px">Bila tombol tidak memunculkan jendela pasang:</p>
    ${step(1, 'Buka di Chrome', 'Atau Edge / Samsung Internet.')}
    ${step(2, 'Ketuk menu ⋮ kanan atas', '')}
    ${step(3, 'Pilih “Instal aplikasi” atau “Tambahkan ke layar utama”', 'Ikon Michi masuk ke laci aplikasi dan bisa offline.')}</div>`;
  const desk = `<div class="card ibox"><h3>Komputer (Chrome / Edge)</h3>
    <button class="btn ibtn" data-act="install">Pasang di komputer ini</button>
    <p class="tiny" style="margin:8px 0 0">Atau klik ikon pasang ⊕ di ujung kanan kolom alamat.</p></div>`;
  const order = d.os === 'ios' ? [ios, android] : d.os === 'android' ? [android, ios] : [desk, ios, android];
  return `<header class="pagehead"><div><p class="eyebrow">Pasang aplikasi</p><h1>Michi di ponselmu</h1><p>Gratis, tanpa App Store atau Play Store. Setelah dipasang, Michi terbuka layar penuh dari ikon di layar utama dan tetap jalan tanpa internet.</p></div></header>
  ${on ? '<div class="card ibox iok"><b>✓ Sudah terpasang</b><small>Kamu sedang membuka Michi sebagai aplikasi.</small></div>' : ''}
  <div class="card ibox iqrbox"><img class="iqr" src="icons/qr-pasang.svg" width="160" height="160" alt="Kode QR menuju halaman Pasang aplikasi"><div><b>Pindai dengan kamera ponsel</b><small>Arahkan kamera iPhone atau Android ke kode ini, lalu ketuk tautan yang muncul. Halaman ini akan terbuka di ponsel dengan langkah pasangnya.</small></div></div>
  <div class="card ibox ilink"><div><span class="tiny">Tautan untuk dibagikan</span><b class="iurl">${APP_URL.replace('https://', '')}</b></div>
    <div class="ibtns"><button class="btn ghost" data-act="icopy">Salin</button>${navigator.share ? '<button class="btn ghost" data-act="ishare">Bagikan</button>' : ''}</div></div>
  ${order.join('')}
  <section><div class="sec-h"><h2>Pindah perangkat</h2></div><div class="card ibox">
    ${step(1, 'Progres tersimpan di masing-masing perangkat', 'Tidak tersinkron otomatis antara ponsel, iPad, dan komputer.')}
    ${step(2, 'Perangkat lama: Panduan &amp; setelan → Ekspor', 'Kirim berkas .json itu ke perangkat baru (AirDrop, email, Drive).')}
    ${step(3, 'Perangkat baru: Panduan &amp; setelan → Impor', '')}
    <a class="btn ghost" href="#/lainnya" style="margin-top:10px;display:inline-block">Buka Panduan &amp; setelan</a></div></section>`;
}
Object.assign(acts, {
  icopy() { const done = () => toast('Tautan disalin'); if (navigator.clipboard) navigator.clipboard.writeText(APP_URL).then(done, () => prompt('Salin tautan ini:', APP_URL)); else prompt('Salin tautan ini:', APP_URL); },
  ishare() { navigator.share({ title:'Nihongo Michi', text:'Belajar bahasa Jepang N5–N1, bisa offline', url:APP_URL }).catch(() => {}); }
});

/* swipe pada kartu: kanan = Baik, kiri = Lagi (setelah dibalik) */
let tx = null;
document.addEventListener('touchstart', e => { tx = e.target.closest('.flash') ? e.touches[0].clientX : null; }, { passive:true });
document.addEventListener('touchend', e => {
  if (tx == null || !C || !C.flip) { tx = null; return; }
  const dx = e.changedTouches[0].clientX - tx; tx = null;
  if (Math.abs(dx) > 70) acts.rate({ dataset:{ g:dx > 0 ? 2 : 0 } });
}, { passive:true });

/* ---------- boot ---------- */
const net = () => { $('#netdot2').classList.toggle('off', !navigator.onLine); $('#netdot').classList.toggle('off', !navigator.onLine); $('#nettxt').textContent = navigator.onLine ? 'online · tersimpan offline' : 'mode offline'; };
window.addEventListener('online', net); window.addEventListener('offline', net); net();
if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol)) navigator.serviceWorker.register('sw.js').catch(() => {});
render();
})();
