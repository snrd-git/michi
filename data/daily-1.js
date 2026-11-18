(window.DATA = window.DATA || {}).daily = (window.DATA.daily || []).concat([
{
 id: "sapaan", title: "Perkenalan & sapaan", desc: "Menyapa tetangga, teman sekelas, dan orang baru, memperkenalkan diri sebagai orang Indonesia, serta meminta maaf dan berterima kasih.",
 tips: [
  "Saat bertemu, membungkuk ringan (ojigi) sudah cukup sopan. Jabat tangan tidak selalu lazim, jadi tunggu sampai lawan bicara mengulurkan tangan lebih dulu.",
  "Panggil orang lain dengan nama + さん, tetapi jangan pakai さん untuk nama diri sendiri. Kalau namamu hanya satu kata (umum di Indonesia), cukup sebut nama itu saat berkenalan.",
  "Jika agama atau pantangan makanan perlu disampaikan (misalnya tanpa babi dan alkohol), katakan singkat dan sopan sesuai kebutuhan. Orang Jepang biasanya tidak menanyakan agama, jadi kamu pun tidak perlu menanyakannya balik."
 ],
 phrases: [
  ["おはようございます。", "おはようございます。", "Selamat pagi (bentuk sopan).", "N5"],
  ["こんにちは。", "こんにちは。", "Selamat siang / halo.", "N5"],
  ["こんばんは。", "こんばんは。", "Selamat malam (sejak sore menjelang malam).", "N5"],
  ["はじめまして。インドネシアから来ました。", "はじめまして。インドネシアからきました。", "Salam kenal. Saya datang dari Indonesia.", "N5"],
  ["スリと申します。どうぞよろしくお願いします。", "スリともうします。どうぞよろしくおねがいします。", "Nama saya Sri. Mohon bantuannya (salam kenal).", "N4"],
  ["私はムスリムなので、豚肉は食べられません。", "わたしはムスリムなので、ぶたにくはたべられません。", "Karena saya Muslim, saya tidak bisa makan daging babi.", "N4"],
  ["ありがとうございます。", "ありがとうございます。", "Terima kasih.", "N5"],
  ["（dengar）いえいえ、どういたしまして。", "いえいえ、どういたしまして。", "（dengar）Tidak apa-apa, sama-sama.", "N5"],
  ["すみません、ちょっといいですか。", "すみません、ちょっといいですか。", "Permisi, boleh minta waktu sebentar?", "N4"],
  ["すみません、遅れてしまいました。", "すみません、おくれてしまいました。", "Maaf, saya terlambat.", "N4"],
  ["（dengar）お元気ですか。", "おげんきですか。", "（dengar）Apa kabar?", "N5"],
  ["（dengar）どこから来ましたか。", "どこからきましたか。", "（dengar）Anda berasal dari mana?", "N5"],
  ["（dengar）日本語がお上手ですね。", "にほんごがおじょうずですね。", "（dengar）Bahasa Jepang Anda bagus ya.", "N4"],
  ["日本語はまだ勉強中です。ゆっくり話してください。", "にほんごはまだべんきょうちゅうです。ゆっくりはなしてください。", "Saya masih belajar bahasa Jepang. Tolong bicara pelan-pelan.", "N4"]
 ],
 dialogs: [
  { id: "sapaan-1", title: "Berkenalan di kelas bahasa Jepang", lines: [
   ["田中", "はじめまして。田中です。よろしくお願いします。", "はじめまして。たなかです。よろしくおねがいします。", "Salam kenal. Saya Tanaka. Mohon bantuannya."],
   ["スリ", "はじめまして。スリと申します。インドネシアから来ました。", "はじめまして。スリともうします。インドネシアからきました。", "Salam kenal. Saya Sri. Saya datang dari Indonesia."],
   ["田中", "インドネシアですか。いいですね。日本に来て、どのくらいですか。", "インドネシアですか。いいですね。にほんにきて、どのくらいですか。", "Indonesia ya. Bagus sekali. Sudah berapa lama di Jepang?"],
   ["スリ", "まだ二週間です。日本語はまだ勉強中です。", "まだにしゅうかんです。にほんごはまだべんきょうちゅうです。", "Baru dua minggu. Saya masih belajar bahasa Jepang."],
   ["田中", "いえいえ、とてもお上手ですよ。", "いえいえ、とてもおじょうずですよ。", "Ah tidak, Anda sangat pandai kok."],
   ["スリ", "ありがとうございます。ゆっくり話していただけますか。", "ありがとうございます。ゆっくりはなしていただけますか。", "Terima kasih. Bisakah Anda berbicara pelan-pelan?"],
   ["田中", "はい、もちろん。わからないときは、いつでも聞いてくださいね。", "はい、もちろん。わからないときは、いつでもきいてくださいね。", "Tentu. Kalau ada yang tidak paham, tanyakan kapan saja ya."],
   ["スリ", "ありがとうございます。どうぞよろしくお願いします。", "ありがとうございます。どうぞよろしくおねがいします。", "Terima kasih. Mohon bantuannya."]
  ]},
  { id: "sapaan-2", title: "Bertemu teman di pagi hari (santai)", lines: [
   ["ゆり", "あ、アリ、おはよう！", "あ、アリ、おはよう！", "Oh, Ali, selamat pagi!"],
   ["アリ", "おはよう、ゆり。今日は早いね。", "おはよう、ゆり。きょうははやいね。", "Pagi, Yuri. Hari ini kamu datang awal ya."],
   ["ゆり", "うん、今日はテストがあるんだ。アリは元気？", "うん、きょうはテストがあるんだ。アリはげんき？", "Iya, hari ini ada ujian. Kamu sehat?"],
   ["アリ", "まあまあかな。昨日あまり寝られなくて。", "まあまあかな。きのうあまりねられなくて。", "Lumayan lah. Kemarin aku kurang bisa tidur."],
   ["ゆり", "そっか。あ、これ、よかったらどうぞ。コーヒー。", "そっか。あ、これ、よかったらどうぞ。コーヒー。", "Oh begitu. Nih, kalau mau silakan. Kopi."],
   ["アリ", "えっ、いいの？ありがとう！助かるよ。", "えっ、いいの？ありがとう！たすかるよ。", "Eh, boleh? Terima kasih! Sangat membantu."],
   ["ゆり", "どういたしまして。じゃあ、またあとでね。", "どういたしまして。じゃあ、またあとでね。", "Sama-sama. Sampai nanti ya."],
   ["アリ", "うん、またね。テスト、がんばって！", "うん、またね。テスト、がんばって！", "Ya, sampai jumpa. Semangat ujiannya!"]
  ]}
 ],
 roleplay: { title: "Menyapa tetangga baru", intro: "Kamu baru pindah ke apartemen di Jepang dan bertemu tetangga di lorong pada pagi hari.",
  steps: [
   { npc: "おはようございます。", npcTr: "Selamat pagi.", choices: [
    { jp: "おはようございます。", tr: "Selamat pagi.", ok: true, fb: "Tepat. Sapaan pagi yang sopan untuk tetangga." },
    { jp: "こんばんは。", tr: "Selamat malam.", ok: false, fb: "Salah waktu. こんばんは dipakai sore menjelang malam, bukan pagi." },
    { jp: "さようなら。", tr: "Selamat tinggal.", ok: false, fb: "さようなら adalah salam perpisahan, bukan salam bertemu." }
   ]},
   { npc: "新しく引っ越してきた方ですか。", npcTr: "Apakah Anda penghuni baru yang baru pindah?", choices: [
    { jp: "いいえ、私は何も知りません。", tr: "Tidak, saya tidak tahu apa-apa.", ok: false, fb: "Tidak nyambung dengan pertanyaan. Pertanyaannya soal apakah kamu baru pindah." },
    { jp: "はい、先週引っ越してきました。スリと申します。", tr: "Ya, saya pindah minggu lalu. Nama saya Sri.", ok: true, fb: "Tepat. Menjawab, lalu sekalian memperkenalkan diri dengan sopan." },
    { jp: "そうだよ。あなたはだれ？", tr: "Iya. Kamu siapa?", ok: false, fb: "Terlalu kasar dan santai untuk tetangga yang belum dikenal." }
   ]},
   { npc: "どちらの国から来ましたか。", npcTr: "Anda berasal dari negara mana?", choices: [
    { jp: "ありがとうございます、元気です。", tr: "Terima kasih, saya sehat.", ok: false, fb: "Tidak nyambung. Itu jawaban untuk 「お元気ですか」, bukan pertanyaan asal negara." },
    { jp: "日本から来ました。", tr: "Saya datang dari Jepang.", ok: false, fb: "Isinya keliru, kamu orang Indonesia. Lagipula kamu sedang tinggal di Jepang." },
    { jp: "インドネシアのジャカルタから来ました。", tr: "Saya datang dari Jakarta, Indonesia.", ok: true, fb: "Tepat. Menyebut negara dan kota membuat jawaban jelas." }
   ]},
   { npc: "日本語がお上手ですね。", npcTr: "Bahasa Jepang Anda bagus ya.", choices: [
    { jp: "はい、私は上手です。", tr: "Ya, saya pandai.", ok: false, fb: "Terdengar sombong. Orang Jepang biasanya merendah saat dipuji." },
    { jp: "どういたしまして。", tr: "Sama-sama.", ok: false, fb: "どういたしまして dipakai membalas ucapan terima kasih, bukan pujian." },
    { jp: "いえいえ、まだまだです。勉強中です。", tr: "Ah tidak, masih jauh. Saya masih belajar.", ok: true, fb: "Tepat. Merendah dengan sopan adalah respons yang wajar." }
   ]},
   { npc: "何かわからないことがあったら、言ってくださいね。", npcTr: "Kalau ada yang tidak Anda mengerti, bilang saja ya.", choices: [
    { jp: "すみません、遅れました。", tr: "Maaf, saya terlambat.", ok: false, fb: "Tidak sesuai konteks. Tidak ada hubungan dengan tawaran bantuan." },
    { jp: "ありがとうございます。よろしくお願いします。", tr: "Terima kasih. Mohon bantuannya.", ok: true, fb: "Tepat. Berterima kasih dan menutup dengan salam yang lazim." },
    { jp: "さようなら。", tr: "Selamat tinggal.", ok: false, fb: "Terlalu mendadak dan tidak menanggapi tawaran baik tetangga." }
   ]}
  ]}
},
{
 id: "belanja", title: "Belanja & minimarket", desc: "Membayar di kasir minimarket (konbini) atau supermarket: kantong, menghangatkan makanan, cara bayar, struk, dan kartu poin.",
 tips: [
  "Kantong plastik di kasir toko Jepang kini umumnya berbayar (sejak 2020), jadi bawa tas belanja sendiri. Jika perlu, bilang 「袋をお願いします」.",
  "Cek label bahan (原材料) untuk 豚 (babi), ポーク, ラード (lemak babi), ゼラチン, dan alkohol seperti みりん atau 料理酒. Label halal jarang ada di toko biasa, dan staf belum tentu tahu isi produk, jadi bawa catatan atau aplikasi penerjemah.",
  "Saat membayar tunai, taruh uang di nampan kecil di kasir, bukan langsung ke tangan petugas. Hindari makan sambil berjalan; makanlah di dekat toko atau di tempat makan yang tersedia."
 ],
 phrases: [
  ["袋をお願いします。", "ふくろをおねがいします。", "Tolong (beri) kantong.", "N4"],
  ["袋はいりません。", "ふくろはいりません。", "Saya tidak perlu kantong.", "N5"],
  ["（dengar）袋はご利用ですか。", "ふくろはごりようですか。", "（dengar）Apakah Anda memerlukan kantong?", "N3"],
  ["（dengar）温めますか。", "あたためますか。", "（dengar）Mau dihangatkan?", "N4"],
  ["はい、温めてください。", "はい、あたためてください。", "Ya, tolong dihangatkan.", "N4"],
  ["そのままで大丈夫です。", "そのままでだいじょうぶです。", "Begini saja tidak apa-apa (tidak usah dihangatkan).", "N4"],
  ["カードで払えますか。", "カードではらえますか。", "Apakah bisa bayar pakai kartu?", "N4"],
  ["QRコードで払えますか。", "キューアールコードではらえますか。", "Apakah bisa bayar pakai kode QR?", "N4"],
  ["現金でお願いします。", "げんきんでおねがいします。", "Saya bayar tunai.", "N4"],
  ["レシートをお願いします。", "レシートをおねがいします。", "Tolong struknya.", "N4"],
  ["（dengar）ポイントカードはお持ちですか。", "ポイントカードはおもちですか。", "（dengar）Apakah Anda punya kartu poin?", "N3"],
  ["（dengar）合計で540円です。", "ごうけいでごひゃくよんじゅうえんです。", "（dengar）Totalnya 540 yen.", "N4"],
  ["（dengar）お箸はお付けしますか。", "おはしはおつけしますか。", "（dengar）Perlu saya sertakan sumpit?", "N3"],
  ["これには豚肉やお酒は入っていますか。", "これにはぶたにくやおさけははいっていますか。", "Apakah ini mengandung daging babi atau alkohol?", "N4"]
 ],
 dialogs: [
  { id: "belanja-1", title: "Membayar bento di minimarket", lines: [
   ["店員", "いらっしゃいませ。お弁当は温めますか。", "いらっしゃいませ。おべんとうはあたためますか。", "Selamat datang. Bento-nya mau dihangatkan?"],
   ["客", "はい、お願いします。", "はい、おねがいします。", "Ya, tolong."],
   ["店員", "袋はご利用ですか。", "ふくろはごりようですか。", "Apakah Anda perlu kantong?"],
   ["客", "はい、お願いします。", "はい、おねがいします。", "Ya, tolong."],
   ["店員", "ポイントカードはお持ちですか。", "ポイントカードはおもちですか。", "Apakah Anda punya kartu poin?"],
   ["客", "いいえ、持っていません。", "いいえ、もっていません。", "Tidak, saya tidak punya."],
   ["店員", "合計で680円です。お支払いはどうなさいますか。", "ごうけいでろっぴゃくはちじゅうえんです。おしはらいはどうなさいますか。", "Totalnya 680 yen. Mau bayar bagaimana?"],
   ["客", "カードでお願いします。", "カードでおねがいします。", "Pakai kartu, ya."],
   ["店員", "かしこまりました。こちらでお願いします。", "かしこまりました。こちらでおねがいします。", "Baik. Silakan di sini."],
   ["店員", "レシートです。ありがとうございました。", "レシートです。ありがとうございました。", "Ini struknya. Terima kasih."]
  ]},
  { id: "belanja-2", title: "Menanyakan isi produk di supermarket", lines: [
   ["客", "すみません、牛乳はどこにありますか。", "すみません、ぎゅうにゅうはどこにありますか。", "Permisi, di mana susunya?"],
   ["店員", "牛乳は、あちらの奥の冷蔵コーナーにあります。", "ぎゅうにゅうは、あちらのおくのれいぞうコーナーにあります。", "Susu ada di bagian pendingin di sana, di sebelah dalam."],
   ["客", "ありがとうございます。あの、このソーセージには豚肉が入っていますか。", "ありがとうございます。あの、このソーセージにはぶたにくがはいっていますか。", "Terima kasih. Eh, apakah sosis ini mengandung daging babi?"],
   ["店員", "ええと、原材料を確認しますね。…はい、豚肉が入っています。", "ええと、げんざいりょうをかくにんしますね。…はい、ぶたにくがはいっています。", "Hmm, saya cek bahan-bahannya ya. ...Ya, mengandung daging babi."],
   ["客", "そうですか。私はムスリムなので、豚肉は食べられないんです。", "そうですか。わたしはムスリムなので、ぶたにくはたべられないんです。", "Begitu. Saya Muslim, jadi tidak bisa makan daging babi."],
   ["店員", "そうでしたか。こちらの鶏肉のものは、豚肉は使っていないようですよ。", "そうでしたか。こちらのとりにくのものは、ぶたにくはつかっていないようですよ。", "Oh begitu. Yang berbahan ayam ini sepertinya tidak memakai daging babi."],
   ["客", "助かります。じゃあ、これにします。", "たすかります。じゃあ、これにします。", "Sangat membantu. Kalau begitu saya ambil ini."],
   ["店員", "ありがとうございます。レジはあちらです。", "ありがとうございます。レジはあちらです。", "Terima kasih. Kasirnya di sebelah sana."]
  ]}
 ],
 roleplay: { title: "Membayar di kasir konbini", intro: "Kamu membeli sebuah bento di minimarket dan ingin membayar dengan kode QR.",
  steps: [
   { npc: "いらっしゃいませ。お弁当は温めますか。", npcTr: "Selamat datang. Bento-nya mau dihangatkan?", choices: [
    { jp: "袋はいりません。", tr: "Saya tidak perlu kantong.", ok: false, fb: "Tidak menjawab pertanyaan. Yang ditanyakan soal menghangatkan, bukan kantong." },
    { jp: "はい、お願いします。", tr: "Ya, tolong.", ok: true, fb: "Tepat. Jawaban singkat dan sopan." },
    { jp: "いただきます。", tr: "Selamat makan.", ok: false, fb: "Itu ucapan sebelum makan, tidak cocok sebagai jawaban di kasir." }
   ]},
   { npc: "袋はご利用ですか。", npcTr: "Apakah Anda perlu kantong?", choices: [
    { jp: "はい、お箸を二つください。", tr: "Ya, tolong dua sumpit.", ok: false, fb: "Tidak nyambung. Ditanya soal kantong, bukan sumpit." },
    { jp: "はい、温めてください。", tr: "Ya, tolong dihangatkan.", ok: false, fb: "Pertanyaan penghangatan sudah dijawab di langkah sebelumnya." },
    { jp: "いいえ、袋はいりません。エコバッグがあります。", tr: "Tidak, tidak perlu kantong. Saya punya tas belanja.", ok: true, fb: "Tepat. Menolak dengan jelas dan memberi alasan." }
   ]},
   { npc: "ポイントカードはお持ちですか。", npcTr: "Apakah Anda punya kartu poin?", choices: [
    { jp: "いいえ、持っていません。", tr: "Tidak, saya tidak punya.", ok: true, fb: "Tepat. Jawaban yang lazim jika tidak punya kartu poin." },
    { jp: "はい、現金で払います。", tr: "Ya, saya bayar tunai.", ok: false, fb: "Tidak nyambung. Itu soal cara bayar, bukan kartu poin." },
    { jp: "はい、カードで払えますか。", tr: "Ya, apa bisa bayar pakai kartu?", ok: false, fb: "Menjawab 「はい」 padahal tidak punya kartu poin, lalu pindah topik." }
   ]},
   { npc: "合計で780円です。お支払いはどうなさいますか。", npcTr: "Totalnya 780 yen. Mau bayar bagaimana?", choices: [
    { jp: "780円は高いですね。", tr: "780 yen mahal ya.", ok: false, fb: "Tidak menjawab dan terdengar kurang sopan. Kasir menanyakan cara bayar." },
    { jp: "QRコードで払えますか。", tr: "Apakah bisa bayar pakai kode QR?", ok: true, fb: "Tepat. Menyebut cara bayar yang kamu inginkan." },
    { jp: "はい、お願いします。", tr: "Ya, tolong.", ok: false, fb: "Pertanyaannya meminta pilihan cara bayar, bukan ya atau tidak." }
   ]},
   { npc: "レシートはお付けしますか。", npcTr: "Apakah perlu saya sertakan struknya?", choices: [
    { jp: "いいえ、ちょっと高いです。", tr: "Tidak, agak mahal.", ok: false, fb: "Tidak menjawab pertanyaan struk." },
    { jp: "お疲れ様でした。", tr: "Terima kasih atas kerja kerasnya.", ok: false, fb: "Ucapan ini lebih cocok antar rekan kerja, bukan balasan untuk pertanyaan struk." },
    { jp: "はい、お願いします。", tr: "Ya, tolong.", ok: true, fb: "Tepat. Jawaban singkat dan sopan." }
   ]}
  ]}
},
{
 id: "makan", title: "Restoran & kafe", desc: "Masuk restoran atau kafe di Jepang: menyebut jumlah orang, memilih tempat duduk, menanyakan menu tanpa babi dan alkohol, memesan, membungkus, dan membayar.",
 tips: [
  "Restoran halal ada tetapi terbatas. Di restoran biasa, tanyakan 豚肉 (babi), お酒 (alkohol), みりん, ラード, dan 出汁/スープ. Menu vegetarian atau ikan tidak otomatis bebas dari kaldu babi atau mirin, jadi tanyakan.",
  "Ucapkan いただきます sebelum makan dan ごちそうさまでした setelah makan. Jangan menancapkan sumpit tegak di nasi dan jangan memindahkan makanan dari sumpit ke sumpit orang lain.",
  "Di Jepang tidak ada tip. Pembayaran umumnya di kasir dekat pintu keluar, bukan di meja. Di izakaya sering ada お通し (hidangan pembuka berbayar) dan air putih biasanya gratis."
 ],
 phrases: [
  ["二人です。", "ふたりです。", "Berdua.", "N5"],
  ["（dengar）何名様ですか。", "なんめいさまですか。", "（dengar）Untuk berapa orang?", "N4"],
  ["ごちそうさまでした。", "ごちそうさまでした。", "Terima kasih atas makanannya (diucapkan setelah makan).", "N5"],
  ["（dengar）喫煙席と禁煙席、どちらになさいますか。", "きつえんせきときんえんせき、どちらになさいますか。", "（dengar）Mau tempat duduk merokok atau non-merokok?", "N3"],
  ["別々でお願いします。", "べつべつでおねがいします。", "Tolong bayar terpisah.", "N4"],
  ["豚肉とお酒を使っていない料理はありますか。", "ぶたにくとおさけをつかっていないりょうりはありますか。", "Apakah ada masakan yang tidak memakai daging babi dan alkohol?", "N4"],
  ["出汁やスープにも豚肉は入っていませんか。", "だしやスープにもぶたにくははいっていませんか。", "Apakah kaldu atau supnya juga tidak mengandung daging babi?", "N3"],
  ["卵アレルギーがあります。", "たまごアレルギーがあります。", "Saya alergi telur.", "N4"],
  ["辛くしないでください。", "からくしないでください。", "Tolong jangan dibuat pedas.", "N4"],
  ["（dengar）ご注文はお決まりですか。", "ごちゅうもんはおきまりですか。", "（dengar）Apakah pesanannya sudah diputuskan?", "N4"],
  ["これを一つと、あれを二つください。", "これをひとつと、あれをふたつください。", "Tolong yang ini satu dan yang itu dua.", "N5"],
  ["すみません、水をもう一杯お願いします。", "すみません、みずをもういっぱいおねがいします。", "Permisi, tolong tambah segelas air lagi.", "N4"],
  ["持ち帰りでお願いします。", "もちかえりでおねがいします。", "Tolong dibungkus untuk dibawa pulang.", "N4"],
  ["お会計をお願いします。", "おかいけいをおねがいします。", "Tolong bonnya (saya mau bayar).", "N4"]
 ],
 dialogs: [
  { id: "makan-1", title: "Masuk restoran dan menanyakan menu tanpa babi", lines: [
   ["店員", "いらっしゃいませ。何名様ですか。", "いらっしゃいませ。なんめいさまですか。", "Selamat datang. Untuk berapa orang?"],
   ["客", "二人です。", "ふたりです。", "Berdua."],
   ["店員", "喫煙席と禁煙席、どちらになさいますか。", "きつえんせきときんえんせき、どちらになさいますか。", "Mau tempat duduk merokok atau non-merokok?"],
   ["客", "禁煙席でお願いします。", "きんえんせきでおねがいします。", "Non-merokok, ya."],
   ["店員", "かしこまりました。こちらへどうぞ。メニューです。", "かしこまりました。こちらへどうぞ。メニューです。", "Baik. Silakan lewat sini. Ini menunya."],
   ["客", "ありがとうございます。あの、豚肉とお酒を使っていない料理はありますか。", "ありがとうございます。あの、ぶたにくとおさけをつかっていないりょうりはありますか。", "Terima kasih. Eh, apakah ada masakan yang tidak memakai daging babi dan alkohol?"],
   ["店員", "はい、こちらの焼き魚定食は、豚肉は使っていません。ただ、調味料にみりんが入っていますが、大丈夫でしょうか。", "はい、こちらのやきざかなていしょくは、ぶたにくはつかっていません。ただ、ちょうみりょうにみりんがはいっていますが、だいじょうぶでしょうか。", "Ya, paket ikan bakar ini tidak memakai daging babi. Hanya saja bumbunya mengandung mirin, apakah tidak masalah?"],
   ["客", "みりんも避けたいので、塩焼きにできますか。", "みりんもさけたいので、しおやきにできますか。", "Mirin pun ingin saya hindari, bisakah dibuat ikan bakar garam saja?"],
   ["店員", "塩焼きですね。料理人に確認いたします。少々お待ちください。", "しおやきですね。りょうりにんにかくにんいたします。しょうしょうおまちください。", "Ikan bakar garam ya. Saya konfirmasi dengan koki. Mohon tunggu sebentar."],
   ["客", "ありがとうございます。お願いします。", "ありがとうございます。おねがいします。", "Terima kasih. Mohon bantuannya."]
  ]},
  { id: "makan-2", title: "Memesan dan membayar di kafe", lines: [
   ["店員", "ご注文はお決まりですか。", "ごちゅうもんはおきまりですか。", "Apakah pesanannya sudah diputuskan?"],
   ["客", "カフェラテを一つと、チーズケーキを一つください。", "カフェラテをひとつと、チーズケーキをひとつください。", "Tolong satu kafe latte dan satu cheesecake."],
   ["店員", "カフェラテは、ホットとアイスがございますが、いかがなさいますか。", "カフェラテは、ホットとアイスがございますが、いかがなさいますか。", "Untuk kafe latte ada yang panas dan dingin, mau yang mana?"],
   ["客", "ホットでお願いします。ケーキは持ち帰りでお願いします。", "ホットでおねがいします。ケーキはもちかえりでおねがいします。", "Yang panas, ya. Kuenya tolong dibungkus untuk dibawa pulang."],
   ["店員", "かしこまりました。お飲み物は店内でお召し上がりですね。", "かしこまりました。おのみものはてんないでおめしあがりですね。", "Baik. Minumannya diminum di dalam toko ya."],
   ["客", "はい、そうです。", "はい、そうです。", "Ya, benar."],
   ["店員", "合計で900円です。", "ごうけいできゅうひゃくえんです。", "Totalnya 900 yen."],
   ["客", "じゃあ、現金でお願いします。", "じゃあ、げんきんでおねがいします。", "Kalau begitu, tunai ya."],
   ["店員", "1000円お預かりします。100円のお返しです。", "せんえんおあずかりします。ひゃくえんのおかえしです。", "Saya terima 1000 yen. Ini kembaliannya 100 yen."],
   ["客", "ありがとうございます。", "ありがとうございます。", "Terima kasih."]
  ]}
 ],
 roleplay: { title: "Makan bertiga lalu bayar terpisah", intro: "Kamu makan di restoran bersama dua teman, menghindari daging babi, dan ingin membayar sendiri-sendiri.",
  steps: [
   { npc: "いらっしゃいませ。何名様ですか。", npcTr: "Selamat datang. Untuk berapa orang?", choices: [
    { jp: "三つです。", tr: "Tiga (benda).", ok: false, fb: "Untuk orang dipakai 〜人 (さんにん), bukan penghitung benda 〜つ." },
    { jp: "三人です。", tr: "Bertiga.", ok: true, fb: "Tepat. 三人 (さんにん) untuk menghitung tiga orang." },
    { jp: "禁煙席です。", tr: "Non-merokok.", ok: false, fb: "Belum menjawab jumlah orang." }
   ]},
   { npc: "禁煙席と喫煙席がありますが、どちらになさいますか。", npcTr: "Ada tempat duduk non-merokok dan merokok, mau yang mana?", choices: [
    { jp: "禁煙席でお願いします。", tr: "Non-merokok, ya.", ok: true, fb: "Tepat. Pilihan yang jelas dan sopan." },
    { jp: "煙草はありますか。", tr: "Apakah ada rokok?", ok: false, fb: "Tidak nyambung. Restoran tidak menjual rokok untuk ditanyakan begitu." },
    { jp: "吸わないでください、あなたは。", tr: "Jangan merokok, kamu.", ok: false, fb: "Kasar dan menyalahpahami pertanyaan." }
   ]},
   { npc: "ご注文はお決まりですか。", npcTr: "Apakah pesanannya sudah diputuskan?", choices: [
    { jp: "豚肉をください。", tr: "Tolong beri daging babi.", ok: false, fb: "Bertentangan dengan tujuanmu menghindari babi." },
    { jp: "ご注文はいりません。", tr: "Pesanan tidak diperlukan.", ok: false, fb: "Kalimat janggal dan tidak jelas maksudnya untuk memesan." },
    { jp: "すみません、豚肉を使っていない料理はありますか。", tr: "Permisi, apakah ada masakan tanpa daging babi?", ok: true, fb: "Tepat. Langsung menanyakan menu yang sesuai." }
   ]},
   { npc: "こちらのチキンカレーは豚肉は使っていません。辛さはどうしますか。", npcTr: "Kari ayam ini tidak memakai daging babi. Mau sepedas apa?", choices: [
    { jp: "辛さは控えめでお願いします。", tr: "Tolong pedasnya dikurangi.", ok: true, fb: "Tepat. 控えめ berarti dikurangi atau secukupnya." },
    { jp: "はい、辛いです。", tr: "Ya, pedas.", ok: false, fb: "Tidak menjawab pertanyaan tingkat pedas." },
    { jp: "辛さはどうでもいいよ。", tr: "Pedasnya terserah deh.", ok: false, fb: "Terlalu santai untuk restoran dan tidak memberi jawaban yang jelas." }
   ]},
   { npc: "お会計は一緒でよろしいですか。", npcTr: "Apakah bonnya digabung saja?", choices: [
    { jp: "はい、持ち帰りでお願いします。", tr: "Ya, tolong dibungkus.", ok: false, fb: "Salah konteks. Ini tentang pembayaran, bukan membungkus." },
    { jp: "お会計はいりません。", tr: "Tidak perlu bayar.", ok: false, fb: "Tentu keliru. Kamu tetap harus membayar." },
    { jp: "別々でお願いします。", tr: "Tolong dipisah.", ok: true, fb: "Tepat. 別々 berarti masing-masing atau terpisah." }
   ]}
  ]}
},
{
 id: "transport", title: "Transportasi & tanya arah", desc: "Naik kereta, bus, dan taksi di Jepang: membeli tiket atau mengisi kartu IC, mencari peron, berpindah jalur, dan menanyakan arah.",
 tips: [
  "Kartu IC (misalnya Suica atau PASMO) berlaku di banyak kereta dan bus serta bisa dipakai belanja di banyak toko. Saldo bisa diisi di mesin tiket, dan biasanya ada pilihan bahasa Inggris.",
  "Di kereta, setel ponsel ke mode senyap, hindari menelepon, dan bicara pelan. Antrilah di garis peron, dan biarkan penumpang turun lebih dulu sebelum naik.",
  "Cara naik dan bayar bus berbeda menurut daerah dan perusahaan. Ada yang naik dari pintu belakang atau tengah dan bayar di depan saat turun, ada pula yang bayar saat naik, jadi perhatikan petunjuk. Pintu belakang taksi dibuka sopir secara otomatis, dan tidak ada tip."
 ],
 phrases: [
  ["切符はどこで買えますか。", "きっぷはどこでかえますか。", "Di mana saya bisa membeli tiket?", "N4"],
  ["ICカードにチャージしたいです。", "アイシーカードにチャージしたいです。", "Saya ingin mengisi saldo kartu IC.", "N4"],
  ["新宿まで、いくらですか。", "しんじゅくまで、いくらですか。", "Ke Shinjuku berapa tarifnya?", "N5"],
  ["新宿行きは何番線ですか。", "しんじゅくゆきはなんばんせんですか。", "Kereta tujuan Shinjuku di peron nomor berapa?", "N4"],
  ["この電車は渋谷に止まりますか。", "このでんしゃはしぶやにとまりますか。", "Apakah kereta ini berhenti di Shibuya?", "N4"],
  ["どこで乗り換えますか。", "どこでのりかえますか。", "Di mana saya harus pindah kereta?", "N4"],
  ["（dengar）次は新宿です。", "つぎはしんじゅくです。", "（dengar）Stasiun berikutnya Shinjuku.", "N5"],
  ["（dengar）まもなく、2番線に電車が参ります。白線の内側までお下がりください。", "まもなく、にばんせんにでんしゃがまいります。はくせんのうちがわまでおさがりください。", "（dengar）Sebentar lagi kereta tiba di peron 2. Mohon mundur di dalam garis putih.", "N3"],
  ["すみません、駅までどうやって行けばいいですか。", "すみません、えきまでどうやっていけばいいですか。", "Permisi, bagaimana cara ke stasiun?", "N4"],
  ["（dengar）まっすぐ行って、二つ目の角を右に曲がってください。", "まっすぐいって、ふたつめのかどをみぎにまがってください。", "（dengar）Jalan lurus, lalu belok kanan di sudut kedua.", "N4"],
  ["ここから歩いて行けますか。", "ここからあるいていけますか。", "Apakah dari sini bisa ditempuh dengan berjalan kaki?", "N4"],
  ["空港までお願いします。", "くうこうまでおねがいします。", "Tolong antar ke bandara (kepada sopir taksi).", "N5"],
  ["ここで止めてください。", "ここでとめてください。", "Tolong berhenti di sini.", "N4"],
  ["このバスは駅に行きますか。", "このバスはえきにいきますか。", "Apakah bus ini menuju stasiun?", "N4"]
 ],
 dialogs: [
  { id: "transport-1", title: "Bertanya tarif dan peron kepada petugas stasiun", lines: [
   ["客", "すみません、新宿まで行きたいんですが、いくらですか。", "すみません、しんじゅくまでいきたいんですが、いくらですか。", "Permisi, saya ingin ke Shinjuku, berapa tarifnya?"],
   ["駅員", "新宿までは、260円です。", "しんじゅくまでは、にひゃくろくじゅうえんです。", "Ke Shinjuku 260 yen."],
   ["客", "ICカードで乗れますか。", "アイシーカードでのれますか。", "Apakah bisa naik dengan kartu IC?"],
   ["駅員", "はい、乗れますよ。残高が足りない場合は、あちらの券売機でチャージできます。", "はい、のれますよ。ざんだかがたりないばあいは、あちらのけんばいきでチャージできます。", "Bisa. Kalau saldonya kurang, Anda bisa mengisi di mesin tiket sana."],
   ["客", "ありがとうございます。何番線から出ますか。", "ありがとうございます。なんばんせんからでますか。", "Terima kasih. Berangkat dari peron berapa?"],
   ["駅員", "新宿行きは、3番線です。階段を上がって、右側です。", "しんじゅくゆきは、さんばんせんです。かいだんをあがって、みぎがわです。", "Tujuan Shinjuku dari peron 3. Naik tangga, di sisi kanan."],
   ["客", "途中で乗り換えますか。", "とちゅうでのりかえますか。", "Apakah di tengah jalan perlu pindah kereta?"],
   ["駅員", "いいえ、乗り換えはありません。このまま乗ってください。", "いいえ、のりかえはありません。このままのってください。", "Tidak, tidak perlu pindah. Naik saja terus."],
   ["客", "わかりました。ありがとうございます。", "わかりました。ありがとうございます。", "Mengerti. Terima kasih."],
   ["駅員", "お気をつけて。", "おきをつけて。", "Hati-hati di jalan."]
  ]},
  { id: "transport-2", title: "Menanyakan arah ke balai kota", lines: [
   ["客", "すみません、市役所はどこですか。", "すみません、しやくしょはどこですか。", "Permisi, di mana balai kota?"],
   ["通行人", "市役所ですか。ここからまっすぐ行って、二つ目の角を左に曲がってください。", "しやくしょですか。ここからまっすぐいって、ふたつめのかどをひだりにまがってください。", "Balai kota ya. Dari sini jalan lurus, lalu belok kiri di sudut kedua."],
   ["客", "二つ目の角を左ですね。", "ふたつめのかどをひだりですね。", "Sudut kedua belok kiri ya."],
   ["通行人", "ええ。そのあと少し歩くと、右側に大きい白い建物があります。", "ええ。そのあとすこしあるくと、みぎがわにおおきいしろいたてものがあります。", "Ya. Setelah itu jalan sedikit, di sisi kanan ada gedung putih besar."],
   ["客", "ここから歩いて行けますか。", "ここからあるいていけますか。", "Apakah dari sini bisa jalan kaki?"],
   ["通行人", "はい、歩いて十分ぐらいです。", "はい、あるいてじゅっぷんぐらいです。", "Bisa, sekitar sepuluh menit berjalan kaki."],
   ["客", "わかりました。ありがとうございます。", "わかりました。ありがとうございます。", "Mengerti. Terima kasih."],
   ["通行人", "いえいえ。気をつけて。", "いえいえ。きをつけて。", "Sama-sama. Hati-hati."]
  ]}
 ],
 roleplay: { title: "Naik taksi ke hotel", intro: "Kamu naik taksi dari stasiun menuju hotel dan membayar dengan kartu.",
  steps: [
   { npc: "こんにちは。どちらまで行きますか。", npcTr: "Selamat siang. Mau ke mana?", choices: [
    { jp: "このホテルは高いですか。", tr: "Apakah hotel ini mahal?", ok: false, fb: "Tidak menjawab tujuan. Sopir bertanya ke mana kamu mau pergi." },
    { jp: "駅まで切符をください。", tr: "Tolong beri tiket ke stasiun.", ok: false, fb: "Tiket tidak dibeli dari sopir taksi, dan kamu sudah di luar stasiun." },
    { jp: "すみません、このホテルまでお願いします。", tr: "Permisi, tolong ke hotel ini.", ok: true, fb: "Tepat. Sebut tujuan, atau tunjukkan alamat atau nama hotel." }
   ]},
   { npc: "ここから15分ぐらいかかりますが、大丈夫ですか。", npcTr: "Dari sini sekitar 15 menit, tidak apa-apa?", choices: [
    { jp: "はい、大丈夫です。お願いします。", tr: "Ya, tidak apa-apa. Silakan.", ok: true, fb: "Tepat. Menyetujui dengan sopan." },
    { jp: "いいえ、ここで降ります。", tr: "Tidak, saya turun di sini.", ok: false, fb: "Tidak masuk akal, kamu baru naik dan masih jauh dari tujuan." },
    { jp: "十五分は遠いです。いやです。", tr: "Lima belas menit jauh. Saya tidak mau.", ok: false, fb: "Terlalu kasar dan tidak sesuai karena kamu memang ingin ke hotel." }
   ]},
   { npc: "もうすぐ着きますよ。どのあたりで止めましょうか。", npcTr: "Sebentar lagi sampai. Berhenti di bagian mana?", choices: [
    { jp: "ここで止めろ。", tr: "Berhenti di sini!", ok: false, fb: "Bentuk perintah kasar. Pakai 「止めてください」." },
    { jp: "あの角を右に曲がって、ホテルの前で止めてください。", tr: "Belok kanan di sudut itu, lalu berhenti di depan hotel.", ok: true, fb: "Tepat. Arah dan tempat berhenti jelas, dengan 〜てください yang sopan." },
    { jp: "あのバス停で乗ります。", tr: "Saya naik di halte bus itu.", ok: false, fb: "Tidak nyambung. Kamu sudah di taksi dan ingin turun di hotel." }
   ]},
   { npc: "着きました。1850円です。", npcTr: "Sudah sampai. 1850 yen.", choices: [
    { jp: "高いですね。まけてください。", tr: "Mahal ya. Tolong kasih diskon.", ok: false, fb: "Tarif taksi tetap dan tidak lazim ditawar di Jepang." },
    { jp: "ありがとうございました。", tr: "Terima kasih.", ok: false, fb: "Belum membayar. Pertanyaannya soal bayar, jadi tanyakan cara bayar dulu." },
    { jp: "カードで払えますか。", tr: "Apakah bisa bayar pakai kartu?", ok: true, fb: "Tepat. Memastikan kartu diterima sebelum membayar." }
   ]},
   { npc: "はい、使えますよ。ありがとうございました。お気をつけて。", npcTr: "Ya, bisa. Terima kasih. Hati-hati di jalan.", choices: [
    { jp: "どういたしまして。", tr: "Sama-sama.", ok: false, fb: "Keliru arah. Sopir yang berterima kasih padamu, bukan kamu yang dibantu." },
    { jp: "ごめんなさい、遅れました。", tr: "Maaf, saya terlambat.", ok: false, fb: "Tidak sesuai konteks, tidak ada yang terlambat." },
    { jp: "ありがとうございました。お世話になりました。", tr: "Terima kasih. Sudah merepotkan Anda.", ok: true, fb: "Tepat. Penutup yang sopan dan hangat." }
   ]}
  ]}
}
]);
