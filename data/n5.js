(window.DATA = window.DATA || {}).N5 = (() => {
  const p1 = "わたしは まいあさ しちじに おきます。それから、パンを たべて、コーヒーを のみます。はちじに いえを でて、でんしゃで かいしゃへ いきます。";
  return {
    vocab: [
      ["私","わたし","saya"],["あなた","あなた","kamu / Anda"],["先生","せんせい","guru / dosen"],["学生","がくせい","pelajar / mahasiswa"],
      ["友達","ともだち","teman"],["家族","かぞく","keluarga"],["水","みず","air"],["お茶","おちゃ","teh (hijau)"],
      ["ご飯","ごはん","nasi / makan"],["魚","さかな","ikan"],["肉","にく","daging"],["野菜","やさい","sayuran"],
      ["果物","くだもの","buah"],["駅","えき","stasiun"],["電車","でんしゃ","kereta listrik"],["学校","がっこう","sekolah"],
      ["会社","かいしゃ","perusahaan"],["病院","びょういん","rumah sakit"],["銀行","ぎんこう","bank"],["店","みせ","toko"],
      ["今日","きょう","hari ini"],["明日","あした","besok"],["昨日","きのう","kemarin"],["毎日","まいにち","setiap hari"],
      ["朝","あさ","pagi"],["晩","ばん","malam"],["時間","じかん","waktu / jam"],["食べる","たべる","makan"],
      ["飲む","のむ","minum"],["見る","みる","melihat"],["聞く","きく","mendengar / bertanya"],["読む","よむ","membaca"],
      ["書く","かく","menulis"],["行く","いく","pergi"],["来る","くる","datang"],["帰る","かえる","pulang"],
      ["買う","かう","membeli"],["話す","はなす","berbicara"],["勉強する","べんきょうする","belajar"],["大きい","おおきい","besar"],
      ["小さい","ちいさい","kecil"],["高い","たかい","tinggi / mahal"],["安い","やすい","murah"],["新しい","あたらしい","baru"],
      ["古い","ふるい","lama / tua"],["おいしい","おいしい","enak"],["忙しい","いそがしい","sibuk"],["静か(な)","しずか","tenang"],
      ["元気(な)","げんき","sehat / bersemangat"],["好き(な)","すき","suka"],["上","うえ","atas"],["下","した","bawah"],
      ["中","なか","dalam"],["前","まえ","depan / sebelum"],["後ろ","うしろ","belakang"],["右","みぎ","kanan"],
      ["左","ひだり","kiri"],["天気","てんき","cuaca"],["雨","あめ","hujan"],["電話","でんわ","telepon"],["本","ほん","buku"]
    ],
    grammar: [
      {p:"XはYです",m:"X adalah Y",e:[["わたしは学生です。","Saya adalah pelajar."],["これは本です。","Ini adalah buku."]],n:"は dibaca 'wa' sebagai penanda topik."},
      {p:"〜ですか",m:"pertanyaan sopan",e:[["これは何ですか。","Ini apa?"],["お名前は何ですか。","Siapa namamu?"]],n:"Cukup tambahkan か di akhir kalimat; tanda tanya tidak wajib."},
      {p:"AのB",m:"B milik A / B yang berkaitan dengan A",e:[["わたしの本","buku saya"],["日本語の先生","guru bahasa Jepang"]],n:"の menyambung dua kata benda."},
      {p:"〜を〜ます",m:"penanda objek",e:[["パンを食べます。","Saya makan roti."],["本を読みます。","Saya membaca buku."]],n:"を dibaca 'o'."},
      {p:"〜に／へ 行きます",m:"pergi ke (tujuan)",e:[["学校に行きます。","Pergi ke sekolah."],["明日、東京へ行きます。","Besok pergi ke Tokyo."]],n:"へ dibaca 'e'. に dan へ bisa dipertukarkan untuk tujuan."},
      {p:"〜で",m:"di (tempat aksi) / dengan (alat)",e:[["図書館で勉強します。","Belajar di perpustakaan."],["バスで行きます。","Pergi naik bus."]],n:"に = tempat keberadaan, で = tempat melakukan aksi."},
      {p:"〜ます／ません／ました／ませんでした",m:"bentuk sopan kata kerja",e:[["毎日、水を飲みます。","Setiap hari minum air."],["昨日は勉強しませんでした。","Kemarin tidak belajar."]],n:"Sekarang/masa depan: ます・ません. Lampau: ました・ませんでした."},
      {p:"〜があります／います",m:"ada (benda mati / makhluk hidup)",e:[["机の上に本があります。","Di atas meja ada buku."],["庭に猫がいます。","Di kebun ada kucing."]],n:"あります untuk benda, います untuk orang dan hewan."},
      {p:"〜たいです",m:"ingin melakukan ~",e:[["水が飲みたいです。","Saya ingin minum air."],["日本へ行きたいです。","Saya ingin pergi ke Jepang."]],n:"Ganti ます dengan たい: 飲みます → 飲みたい."},
      {p:"〜てください",m:"tolong lakukan ~",e:[["ちょっと待ってください。","Tolong tunggu sebentar."],["ここに名前を書いてください。","Tolong tulis nama di sini."]],n:"Bentuk て wajib dihafal sejak awal."},
      {p:"〜ています",m:"sedang melakukan ~",e:[["今、ご飯を食べています。","Sekarang sedang makan."],["先生は電話をしています。","Guru sedang menelepon."]],n:"Juga untuk keadaan berlanjut: 結婚しています (sudah menikah)."},
      {p:"い形容詞／な形容詞",m:"kata sifat dan negasinya",e:[["この店は高くないです。","Toko ini tidak mahal."],["ここは静かじゃないです。","Tempat ini tidak tenang."]],n:"い-adj: 〜くない. な-adj: 〜じゃない／ではない."},
      {p:"〜から〜まで",m:"dari ~ sampai ~",e:[["九時から五時まで働きます。","Bekerja dari jam 9 sampai jam 5."],["東京から大阪まで三時間です。","Tokyo ke Osaka 3 jam."]],n:"Bisa untuk waktu maupun tempat."},
      {p:"〜ましょう／〜ませんか",m:"ayo ~ / maukah ~",e:[["一緒に行きましょう。","Ayo pergi bersama."],["コーヒーを飲みませんか。","Mau minum kopi?"]],n:"ませんか lebih halus untuk mengajak."}
    ],
    kanji: [
      ["日","ニチ／ひ","hari, matahari"],["月","ゲツ／つき","bulan"],["火","カ／ひ","api"],["水","スイ／みず","air"],
      ["木","モク／き","pohon"],["金","キン／かね","emas, uang"],["土","ド／つち","tanah"],["人","ジン／ひと","orang"],
      ["大","ダイ／おおきい","besar"],["小","ショウ／ちいさい","kecil"],["山","サン／やま","gunung"],["川","セン／かわ","sungai"],
      ["本","ホン／もと","buku, asal"],["学","ガク／まなぶ","belajar"],["先","セン／さき","lebih dulu"],["生","セイ／いきる","hidup, lahir"],
      ["車","シャ／くるま","mobil"],["食","ショク／たべる","makan"],["見","ケン／みる","melihat"],["行","コウ／いく","pergi"]
    ],
    questions: [
      {t:"kanji",q:"「水」の よみかたは？",o:["みず","ひ","き","かわ"],a:0,x:"水 = みず (air). 火 = ひ, 木 = き, 川 = かわ."},
      {t:"kanji",q:"「山」の よみかたは？",o:["かわ","やま","もり","そら"],a:1,x:"山 = やま (gunung)."},
      {t:"vocab",q:"「駅」の いみは？",o:["stasiun","bank","sekolah","toko"],a:0,x:"駅（えき）= stasiun."},
      {t:"vocab",q:"「おいしい」の いみは？",o:["mahal","enak","sibuk","besar"],a:1,x:"おいしい = enak."},
      {t:"grammar",q:"わたしは まいにち 学校＿＿ 行きます。",o:["を","に","で","と"],a:1,x:"Tujuan perjalanan ditandai に (atau へ)."},
      {t:"grammar",q:"図書館＿＿ 本を 読みます。",o:["に","で","を","は"],a:1,x:"Tempat melakukan aksi memakai で."},
      {t:"grammar",q:"つくえの 上に ねこ＿＿ います。",o:["が","を","で","から"],a:0,x:"Pola 〜に〜がいます: subjek keberadaan ditandai が."},
      {t:"grammar",q:"水が ＿＿ です。",o:["飲み","飲みたい","飲む","飲んで"],a:1,x:"〜たいです = ingin. 飲みます → 飲みたいです."},
      {t:"grammar",q:"ちょっと ＿＿ ください。",o:["待つ","待ち","待って","待った"],a:2,x:"〜てください memakai bentuk て: 待つ → 待って."},
      {t:"reading",p:p1,q:"この人は なにで 会社へ いきますか。",o:["バス","でんしゃ","くるま","じてんしゃ"],a:1,x:"Teks: 「でんしゃで かいしゃへ いきます」."},
      {t:"reading",p:p1,q:"この人は なんじに いえを でますか。",o:["七時","七時半","八時","九時"],a:2,x:"Teks: 「はちじに いえを でて」. 七時 adalah jam bangun."}
    ],
    convo: [
      {id:"n5-1",title:"Perkenalan diri",topic:"Perkenalan",lines:[
        ["A","はじめまして。わたしは さくらです。","Perkenalkan, saya Sakura."],
        ["B","はじめまして。アリです。インドネシアから 来ました。","Perkenalkan, saya Ali. Saya datang dari Indonesia."],
        ["A","インドネシアですか。いい ところですね。","Indonesia ya? Tempat yang bagus."],
        ["B","ありがとうございます。わたしは 学生です。さくらさんは？","Terima kasih. Saya pelajar. Kalau Sakura?"],
        ["A","わたしは 会社員です。どうぞ よろしく おねがいします。","Saya karyawan. Mohon kerja samanya."],
        ["B","こちらこそ、よろしく おねがいします。","Saya juga, mohon kerja samanya."]]},
      {id:"n5-2",title:"Di minimarket (konbini)",topic:"Belanja",lines:[
        ["店員","いらっしゃいませ。","Selamat datang."],
        ["客","すみません、おにぎりを ふたつと、おちゃを ください。","Permisi, tolong dua onigiri dan satu teh."],
        ["店員","はい。ぜんぶで 三百五十円です。","Baik. Totalnya 350 yen."],
        ["客","カードで はらえますか。","Bisa bayar pakai kartu?"],
        ["店員","はい、だいじょうぶです。","Ya, bisa."],
        ["客","じゃあ、これで おねがいします。","Kalau begitu, pakai ini."],
        ["店員","ありがとうございました。","Terima kasih banyak."]]},
      {id:"n5-3",title:"Bertanya arah",topic:"Transportasi",lines:[
        ["A","すみません、えきは どこですか。","Permisi, stasiun di mana?"],
        ["B","まっすぐ 行って、二つめの かどを 右に まがってください。","Jalan lurus, belok kanan di tikungan kedua."],
        ["A","二つめの かどを 右ですね。ここから 何分ぐらいですか。","Tikungan kedua belok kanan ya. Dari sini kira-kira berapa menit?"],
        ["B","あるいて 五分ぐらいです。","Jalan kaki sekitar lima menit."],
        ["A","ありがとうございます。","Terima kasih."],
        ["B","どういたしまして。","Sama-sama."]]},
      {id:"n5-4",title:"Di restoran",topic:"Makan",lines:[
        ["店員","ごちゅうもんは？","Mau pesan apa?"],
        ["客","ラーメンを ひとつ おねがいします。","Tolong satu ramen."],
        ["店員","おのみものは？","Minumannya?"],
        ["客","みずを ください。","Tolong air putih."],
        ["店員","おまたせしました。ラーメンです。","Maaf menunggu. Ini ramennya."],
        ["客","いただきます。……おいしいです！","Selamat makan. ...Enak!"],
        ["客","すみません、おかんじょうを おねがいします。","Permisi, tolong tagihannya."]]}
    ]
  };
})();
