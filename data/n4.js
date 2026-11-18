(window.DATA = window.DATA || {}).N4 = (() => {
  const p1 = "来週の土曜日は友達の誕生日です。わたしはプレゼントに本を買うつもりです。友達は本が好きですから、きっとよろこびます。";
  return {
    vocab: [
      ["経験","けいけん","pengalaman"],["準備","じゅんび","persiapan"],["予約","よやく","reservasi"],["連絡","れんらく","menghubungi"],
      ["約束","やくそく","janji"],["続ける","つづける","melanjutkan"],["決める","きめる","memutuskan"],["集まる","あつまる","berkumpul"],
      ["忘れる","わすれる","lupa"],["覚える","おぼえる","menghafal / mengingat"],["教える","おしえる","mengajar / memberi tahu"],["借りる","かりる","meminjam"],
      ["貸す","かす","meminjamkan"],["届ける","とどける","mengantar / menyampaikan"],["急ぐ","いそぐ","bergegas"],["止まる","とまる","berhenti"],
      ["乗る","のる","naik"],["降りる","おりる","turun"],["違う","ちがう","berbeda / salah"],["危ない","あぶない","berbahaya"],
      ["苦い","にがい","pahit"],["弱い","よわい","lemah"],["強い","つよい","kuat"],["丈夫(な)","じょうぶ","kokoh / awet"],
      ["有名(な)","ゆうめい","terkenal"],["親切(な)","しんせつ","baik hati"],["便利(な)","べんり","praktis"],["大切(な)","たいせつ","penting / berharga"],
      ["自由(な)","じゆう","bebas"],["特に","とくに","terutama"],["もうすぐ","もうすぐ","sebentar lagi"],["だんだん","だんだん","lama-kelamaan"],
      ["ずっと","ずっと","terus-menerus / jauh lebih"],["必ず","かならず","pasti"],["お客さん","おきゃくさん","tamu / pelanggan"],["自転車","じてんしゃ","sepeda"],
      ["空港","くうこう","bandara"],["旅行","りょこう","perjalanan"],["季節","きせつ","musim"],["興味","きょうみ","minat"],
      ["意見","いけん","pendapat"],["理由","りゆう","alasan"],["場所","ばしょ","tempat"],["お見舞い","おみまい","menjenguk orang sakit"],
      ["引っ越す","ひっこす","pindah rumah"],["風邪","かぜ","flu / masuk angin"]
    ],
    grammar: [
      {p:"〜たことがある",m:"pernah melakukan ~",e:[["日本に行ったことがあります。","Saya pernah ke Jepang."],["寿司を食べたことがありません。","Saya belum pernah makan sushi."]],n:"Bentuk た + ことがある."},
      {p:"〜なければならない",m:"harus melakukan ~",e:[["宿題をしなければなりません。","Harus mengerjakan PR."],["明日は早く起きなければなりません。","Besok harus bangun pagi."]],n:"Variasi lisan: 〜なきゃ／〜ないと."},
      {p:"〜てもいい",m:"boleh melakukan ~",e:[["ここで写真を撮ってもいいですか。","Boleh foto di sini?"],["座ってもいいですよ。","Silakan duduk."]],n:"Meminta izin: 〜てもいいですか."},
      {p:"〜てはいけない",m:"dilarang melakukan ~",e:[["ここでたばこを吸ってはいけません。","Dilarang merokok di sini."]],n:"Lebih tegas dari 〜ないでください."},
      {p:"〜(よ)うと思う",m:"berencana / bermaksud ~",e:[["来年、日本に留学しようと思っています。","Tahun depan saya berencana belajar ke Jepang."]],n:"Bentuk volisional + と思う."},
      {p:"〜そうだ (tampak)",m:"kelihatannya ~",e:[["このケーキはおいしそうです。","Kue ini kelihatannya enak."],["雨が降りそうです。","Sepertinya akan hujan."]],n:"Akar kata kerja / sifat tanpa い + そう. いい → よさそう."},
      {p:"〜ので",m:"karena ~ (sopan, objektif)",e:[["雨なので、行きません。","Karena hujan, saya tidak pergi."],["忙しいので、行けません。","Karena sibuk, tidak bisa pergi."]],n:"な-adj / kata benda memakai なので."},
      {p:"〜ば／〜たら",m:"jika ~",e:[["安ければ買います。","Kalau murah, saya beli."],["駅に着いたら、電話してください。","Setelah tiba di stasiun, tolong telepon."]],n:"たら paling fleksibel; ば lebih untuk kondisi umum."},
      {p:"可能形 (bentuk potensial)",m:"bisa melakukan ~",e:[["日本語が話せます。","Bisa berbahasa Jepang."],["漢字が読めます。","Bisa membaca kanji."]],n:"Grup 1: u → eru. Grup 2: 〜られる. する → できる."},
      {p:"〜すぎる",m:"terlalu ~",e:[["食べすぎました。","Makan terlalu banyak."],["この部屋は広すぎます。","Ruangan ini terlalu luas."]],n:"Akar kata kerja / sifat tanpa い + すぎる."},
      {p:"〜ながら",m:"sambil ~",e:[["音楽を聞きながら勉強します。","Belajar sambil mendengarkan musik."]],n:"Aksi utama ada di akhir kalimat."},
      {p:"〜ために",m:"untuk ~ (tujuan)",e:[["日本語を勉強するために、日本へ行きます。","Pergi ke Jepang untuk belajar bahasa Jepang."]],n:"Kata kerja bentuk kamus + ために."}
    ],
    kanji: [
      ["買","バイ／かう","membeli"],["売","バイ／うる","menjual"],["知","チ／しる","tahu"],["思","シ／おもう","berpikir"],["歩","ホ／あるく","berjalan kaki"],
      ["走","ソウ／はしる","berlari"],["院","イン","institusi"],["薬","ヤク／くすり","obat"],["旅","リョ／たび","perjalanan"],["意","イ","maksud"],
      ["味","ミ／あじ","rasa"],["銀","ギン","perak"],["理","リ","logika, aturan"],["夏","カ／なつ","musim panas"],["冬","トウ／ふゆ","musim dingin"]
    ],
    questions: [
      {t:"kanji",q:"「薬」の よみかたは？",o:["くすり","くすれ","やく","さけ"],a:0,x:"薬 = くすり (obat)."},
      {t:"kanji",q:"「旅行」の よみかたは？",o:["りょこう","りょうこう","たびこう","りょこ"],a:0,x:"旅行 = りょこう."},
      {t:"kanji",q:"「歩く」の よみかたは？",o:["はしる","あるく","のる","おりる"],a:1,x:"歩く = あるく."},
      {t:"vocab",q:"「予約」の いみは？",o:["janji","reservasi","persiapan","pengalaman"],a:1,x:"予約（よやく）= reservasi. 約束 = janji."},
      {t:"grammar",q:"日本へ 行った ＿＿ が あります。",o:["こと","もの","ため","よう"],a:0,x:"〜たことがある = pernah."},
      {t:"grammar",q:"明日は 早く 起き＿＿ なりません。",o:["なければ","ないで","なくて","ないと"],a:0,x:"〜なければなりません = harus."},
      {t:"grammar",q:"ここで 写真を 撮っ＿＿ いいですか。",o:["ても","でも","たら","ので"],a:0,x:"撮る → 撮って + も = 撮ってもいいですか (boleh?)."},
      {t:"grammar",q:"雨＿＿、今日は 出かけません。",o:["なので","ので","だので","のに"],a:0,x:"Kata benda + なので. のに berarti 'padahal' sehingga tidak logis."},
      {t:"grammar",q:"食べ＿＿ て、おなかが 痛いです。",o:["すぎ","すぎる","すぎた","すぎて"],a:0,x:"Akar kata kerja + すぎて: 食べすぎて."},
      {t:"grammar",q:"この ケーキは おいし＿＿ ですね。",o:["そう","よう","らしい","みたい"],a:0,x:"おいしそう = kelihatannya enak (dari penampilan)."},
      {t:"reading",p:p1,q:"わたしは 何を 買いますか。",o:["ケーキ","本","くつ","かばん"],a:1,x:"Teks: 「プレゼントに本を買うつもり」."},
      {t:"reading",p:p1,q:"どうして その プレゼントに しましたか。",o:["本が 安いから","友達が 本が 好きだから","本が 重いから","自分も 読みたいから"],a:1,x:"Teks: 「友達は本が好きですから」."}
    ],
    convo: [
      {id:"n4-1",title:"Di rumah sakit",topic:"Kesehatan",lines:[
        ["医者","どうしましたか。","Ada keluhan apa?"],
        ["患者","きのうから 頭が 痛くて、熱も あります。","Sejak kemarin kepala sakit dan demam."],
        ["医者","ちょっと 見せてください。……かぜですね。","Coba saya periksa. ...Ini flu."],
        ["患者","ひどいですか。","Parahkah?"],
        ["医者","いいえ、それほど ひどくないです。薬を 出しますから、一日三回、食事の あとに 飲んでください。","Tidak terlalu parah. Saya beri obat, minum 3 kali sehari setelah makan."],
        ["患者","わかりました。おふろに 入っても いいですか。","Baik. Bolehkah saya mandi berendam?"],
        ["医者","熱が 下がるまで、やめたほうが いいですよ。おだいじに。","Sebaiknya jangan sampai demam turun. Semoga lekas sembuh."]]},
      {id:"n4-2",title:"Reservasi restoran lewat telepon",topic:"Makan",lines:[
        ["店員","はい、さくらレストランです。","Ya, Restoran Sakura."],
        ["客","あしたの 夜、四人で 予約したいんですが。","Saya mau reservasi untuk empat orang besok malam."],
        ["店員","何時ごろが よろしいですか。","Kira-kira jam berapa?"],
        ["客","七時ごろは どうですか。","Bagaimana kalau sekitar jam 7?"],
        ["店員","申し訳ありません、七時は いっぱいです。七時半なら 大丈夫です。","Mohon maaf, jam 7 penuh. Jam 7.30 bisa."],
        ["客","じゃあ、七時半で お願いします。名前は ヤマダです。","Kalau begitu jam 7.30. Nama saya Yamada."],
        ["店員","ヤマダさま、四名さま、七時半ですね。お待ちしています。","Tuan Yamada, empat orang, jam 7.30. Kami tunggu."]]},
      {id:"n4-3",title:"Mengajak teman (bahasa santai)",topic:"Pergaulan",lines:[
        ["A","今度の 日曜日、ひま？","Minggu ini kamu senggang?"],
        ["B","うん、特に 予定は ないけど。どうして？","Iya, nggak ada rencana khusus. Kenapa?"],
        ["A","新しい 映画を 見に 行かない？","Nonton film baru, yuk?"],
        ["B","いいね！何時から？","Boleh! Mulai jam berapa?"],
        ["A","二時から だよ。駅で 一時半に 会おう。","Mulai jam 2. Ketemu di stasiun jam 1.30."],
        ["B","わかった。じゃあ、日曜日に ね。","Oke. Sampai Minggu ya."]]}
    ]
  };
})();
