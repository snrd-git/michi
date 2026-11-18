(window.DATA = window.DATA || {}).N3 = (() => {
  const p1 = "最近、電車の中でスマートフォンを見ている人が増えている。便利な反面、周りの人に気づかず、ぶつかったり、迷惑をかけたりする人もいる。駅や電車では、周りに気をつけて使うことが大切だ。";
  return {
    vocab: [
      ["状況","じょうきょう","situasi"],["環境","かんきょう","lingkungan"],["経済","けいざい","ekonomi"],["社会","しゃかい","masyarakat"],
      ["文化","ぶんか","budaya"],["習慣","しゅうかん","kebiasaan"],["関係","かんけい","hubungan"],["影響","えいきょう","pengaruh"],
      ["原因","げんいん","penyebab"],["結果","けっか","hasil"],["目的","もくてき","tujuan"],["条件","じょうけん","syarat"],
      ["責任","せきにん","tanggung jawab"],["情報","じょうほう","informasi"],["技術","ぎじゅつ","teknologi / keterampilan"],["資料","しりょう","materi / dokumen"],
      ["会議","かいぎ","rapat"],["相談","そうだん","konsultasi"],["確認","かくにん","konfirmasi"],["提出","ていしゅつ","menyerahkan"],
      ["参加","さんか","partisipasi"],["利用","りよう","menggunakan"],["増える","ふえる","bertambah"],["減る","へる","berkurang"],
      ["伝える","つたえる","menyampaikan"],["比べる","くらべる","membandingkan"],["見つかる","みつかる","ditemukan"],["続く","つづく","berlanjut"],
      ["苦労","くろう","kesulitan / jerih payah"],["我慢","がまん","menahan diri"],["遠慮","えんりょ","sungkan / menahan diri"],["迷惑","めいわく","gangguan"],
      ["複雑(な)","ふくざつ","rumit"],["正確(な)","せいかく","akurat"],["積極的(な)","せっきょくてき","proaktif"],["十分(な)","じゅうぶん","cukup"],
      ["特別(な)","とくべつ","khusus"],["実は","じつは","sebenarnya"],["結局","けっきょく","pada akhirnya"],["やはり","やはり","tetap saja / sudah kuduga"],
      ["たまに","たまに","sesekali"],["急に","きゅうに","tiba-tiba"],["ほとんど","ほとんど","hampir semua"],["少なくとも","すくなくとも","setidaknya"],
      ["地震","じしん","gempa bumi"],["通勤","つうきん","pulang-pergi kerja"],["残業","ざんぎょう","lembur"]
    ],
    grammar: [
      {p:"〜ことにする／〜ことになる",m:"memutuskan ~ / diputuskan (bahwa) ~",e:[["毎日運動することにしました。","Saya memutuskan berolahraga setiap hari."],["来月、大阪へ転勤することになりました。","Diputuskan bahwa bulan depan saya dipindah ke Osaka."]],n:"することにする = keputusan sendiri; することになる = keputusan dari luar / hasil kesepakatan."},
      {p:"〜ようにする",m:"berusaha agar ~",e:[["野菜を食べるようにしています。","Saya berusaha makan sayur."]],n:"Usaha atau kebiasaan yang dijaga."},
      {p:"〜ようになる",m:"menjadi bisa / mulai ~",e:[["日本語が話せるようになりました。","Saya sudah jadi bisa berbahasa Jepang."]],n:"Perubahan keadaan. Lawannya: 〜なくなる."},
      {p:"〜わけではない",m:"bukan berarti ~",e:[["嫌いなわけではありませんが、あまり食べません。","Bukan berarti tidak suka, tapi jarang makan."]],n:"Menyangkal kesimpulan yang mungkin muncul."},
      {p:"〜はずだ",m:"seharusnya ~ (dugaan kuat)",e:[["彼はもう家を出たから、そろそろ着くはずです。","Dia sudah berangkat, jadi seharusnya sebentar lagi tiba."]],n:"Dasar logis. Negatif: 〜はずがない (mustahil)."},
      {p:"〜らしい",m:"katanya / tampaknya ~",e:[["彼は試験に合格したらしい。","Katanya dia lulus ujian."]],n:"Berdasarkan informasi yang didengar atau bukti tidak langsung."},
      {p:"〜ばかり",m:"hanya ~ / melulu",e:[["弟はゲームばかりしている。","Adik main game melulu."],["食べたばかりです。","Baru saja makan."]],n:"Kata kerja bentuk た + ばかり = baru saja."},
      {p:"使役・受身 (kausatif & pasif)",m:"disuruh ~ / dikenai ~",e:[["母は私に野菜を食べさせた。","Ibu menyuruh saya makan sayur."],["先生にほめられた。","Saya dipuji guru."]],n:"させる = menyuruh/membiarkan; られる = dikenai tindakan."},
      {p:"〜によると",m:"menurut ~",e:[["天気予報によると、明日は雨が降るそうです。","Menurut prakiraan cuaca, besok hujan."]],n:"Sering dipasangkan dengan そうだ／らしい."},
      {p:"〜ところだ",m:"tepat saat ~",e:[["今、出かけるところです。","Sekarang saya hendak pergi."],["会議が始まったところです。","Rapat baru saja dimulai."]],n:"Kamus + ところ = akan; ている + ところ = sedang; た + ところ = baru saja."},
      {p:"〜うちに",m:"selagi ~",e:[["若いうちに、いろいろな経験をしたほうがいい。","Selagi muda, sebaiknya banyak mencoba pengalaman."]],n:"Melakukan sesuatu sebelum kondisi berubah."}
    ],
    kanji: [
      ["環","カン","lingkaran, lingkungan"],["境","キョウ／さかい","batas, keadaan"],["経","ケイ／へる","melewati"],["済","サイ／すむ","selesai, ekonomi"],["影","エイ／かげ","bayangan"],
      ["響","キョウ／ひびく","bergema"],["責","セキ／せめる","tanggung jawab"],["任","ニン／まかせる","menugaskan"],["習","シュウ／ならう","belajar"],["慣","カン／なれる","terbiasa"],
      ["情","ジョウ／なさけ","perasaan"],["報","ホウ／むくいる","laporan"],["技","ギ／わざ","keterampilan"],["術","ジュツ／すべ","teknik"],["確","カク／たしか","pasti"]
    ],
    questions: [
      {t:"kanji",q:"「環境」の よみかたは？",o:["かんきょう","かんけい","えんきょう","かんぎょう"],a:0,x:"環境 = かんきょう."},
      {t:"kanji",q:"「影響」の よみかたは？",o:["えいきょう","えいごう","ようきょう","えいけい"],a:0,x:"影響 = えいきょう."},
      {t:"kanji",q:"「経済」の よみかたは？",o:["けいざい","けいさい","きょうざい","けいせい"],a:0,x:"経済 = けいざい."},
      {t:"vocab",q:"この 部屋では たばこを 吸うのは ＿＿ ください。",o:["遠慮して","我慢して","迷惑して","苦労して"],a:0,x:"ご遠慮ください = mohon tidak (secara sopan)."},
      {t:"vocab",q:"昨日は 夜遅くまで ＿＿ して、疲れた。",o:["残業","通勤","参加","提出"],a:0,x:"残業 = lembur."},
      {t:"grammar",q:"来月から 大阪支店で 働く ＿＿ に なりました。",o:["こと","よう","ところ","わけ"],a:0,x:"〜ことになる = diputuskan (oleh pihak luar)."},
      {t:"grammar",q:"毎日 少しずつ 日本語を 話せる ＿＿ なって きた。",o:["ように","ことに","ために","ところに"],a:0,x:"〜ようになる = menjadi bisa."},
      {t:"grammar",q:"天気予報 ＿＿、明日は 雨が 降るそうです。",o:["によると","について","にとって","に対して"],a:0,x:"〜によると = menurut (sumber)."},
      {t:"grammar",q:"彼は もう 家を 出たから、そろそろ 着く ＿＿ です。",o:["はず","ばかり","うち","くらい"],a:0,x:"〜はずです = seharusnya (dugaan beralasan)."},
      {t:"grammar",q:"今、会議が 始まった ＿＿ です。",o:["ところ","はず","わけ","ため"],a:0,x:"〜たところ = baru saja."},
      {t:"reading",p:p1,q:"筆者が 言いたいことは 何ですか。",o:["電車で スマートフォンを 使っては いけない","周りに 気をつけて 使うことが 大切だ","スマートフォンは 便利ではない","電車に 乗る人が 増えている"],a:1,x:"Kalimat terakhir: 「周りに気をつけて使うことが大切だ」 adalah inti teks."}
    ],
    convo: [
      {id:"n3-1",title:"Berkonsultasi soal lembur",topic:"Kantor",lines:[
        ["部長","田中さん、この資料、明日の会議までに 直せますか。","Tanaka, bisa merevisi dokumen ini sebelum rapat besok?"],
        ["田中","今日は 予定が あるのですが、少し 残業すれば 間に合うと 思います。","Hari ini saya ada rencana, tapi kalau lembur sedikit rasanya sempat."],
        ["部長","無理を 言って すまないね。","Maaf memaksa."],
        ["田中","いいえ。ただ、確認して いただきたい 点が あるので、後で 相談しても よろしいでしょうか。","Tidak apa-apa. Hanya saja ada hal yang ingin saya minta konfirmasi, boleh saya konsultasi nanti?"],
        ["部長","ええ、三時ごろなら 時間が あります。","Ya, sekitar jam 3 saya ada waktu."],
        ["田中","ありがとうございます。それまでに できるだけ 進めておきます。","Terima kasih. Sampai saat itu saya kerjakan sebanyak mungkin."]]},
      {id:"n3-2",title:"Penjadwalan ulang paket",topic:"Layanan",lines:[
        ["客","もしもし、先日 不在票を 入れて いただいた 者ですが、再配達を お願いしたいのですが。","Halo, saya yang kemarin dapat kartu pemberitahuan tidak di tempat, ingin minta pengantaran ulang."],
        ["配達員","はい、お荷物の 伝票番号を 教えて いただけますか。","Baik, boleh tahu nomor resi paketnya?"],
        ["客","番号は 1234の 5678です。","Nomornya 1234-5678."],
        ["配達員","確認いたしました。ご希望の 日時は ございますか。","Sudah saya cek. Ada waktu yang Anda inginkan?"],
        ["客","明日の 夜、七時から 九時の間に お願いできますか。","Besok malam antara jam 7 sampai 9, bisa?"],
        ["配達員","かしこまりました。明日の 十九時から 二十一時の間に お届けします。","Baik. Besok antara jam 19.00–21.00 kami antar."]]},
      {id:"n3-3",title:"Mencari apartemen",topic:"Tempat tinggal",lines:[
        ["客","駅から 近くて、家賃が 七万円以下の 部屋を 探しているんですが。","Saya cari kamar dekat stasiun dengan sewa maksimal 70.000 yen."],
        ["店員","ご予算の 範囲でしたら、こちらの 二件が おすすめです。","Dalam anggaran itu, dua unit ini yang kami rekomendasikan."],
        ["客","築年数は どのくらいですか。","Usia bangunannya berapa lama?"],
        ["店員","こちらは 築十年、もう 一つは 築二十年ですが、リフォーム済みです。","Yang ini 10 tahun, yang satu 20 tahun tapi sudah direnovasi."],
        ["客","初期費用は どのくらい かかりますか。","Biaya awalnya kira-kira berapa?"],
        ["店員","敷金と 礼金が 各一か月分、それに 仲介手数料などが かかります。","Uang jaminan dan uang terima kasih masing-masing satu bulan, ditambah biaya perantara dan lainnya."],
        ["客","そうですか。まず 見学してから 決めたいです。","Begitu ya. Saya mau lihat dulu baru memutuskan."]]}
    ]
  };
})();
