(function(){
  const d = window.DATA.N4;
  d.kanji.push(
    ["主", "シュ・ス／おも・ぬし", "utama, tuan (主人)"],
    ["事", "ジ／こと", "perkara, hal, urusan"],
    ["仕", "シ・ジ／つかえる", "melayani; bekerja (仕事)"],
    ["借", "シャク／かりる", "meminjam"],
    ["員", "イン／―", "anggota, petugas, pegawai"],
    ["回", "カイ・エ／まわる・まわす", "kali (hitungan); berputar"],
    ["堂", "ドウ／―", "aula, gedung besar (食堂)"],
    ["市", "シ／いち", "kota; pasar"],
    ["度", "ド・タク／たび", "kali, derajat, tingkat"],
    ["映", "エイ／うつる・うつす・はえる", "memantul; menayangkan (映画)"],
    ["死", "シ／しぬ", "mati"],
    ["田", "デン／た", "sawah"],
    ["画", "ガ・カク／―", "gambar, lukisan; goresan"],
    ["発", "ハツ・ホツ／―", "berangkat; memancarkan, mengeluarkan"],
    ["真", "シン／ま", "benar, sungguh-sungguh"],
    ["門", "モン／かど", "gerbang, pintu gerbang"],
    ["飛", "ヒ／とぶ・とばす", "terbang, melompat"],
    ["集", "シュウ／あつまる・あつめる", "berkumpul; mengumpulkan"],
    ["彼", "ヒ／かれ・かの", "dia (laki-laki); itu"],
    ["達", "タツ／―", "mencapai; penanda jamak (友達)"]
  );
  d.grammar.push(
    {"p": "〜んです／〜のです", "m": "(pengantar) penjelasan / alasan / meminta penjelasan", "e": [["どうしたんですか。", "Ada apa? (Kenapa?)"], ["かぜをひいたので、今日は休むんです。", "Soalnya saya masuk angin, jadi hari ini saya libur."], ["おなかが痛いんです。", "Perut saya sakit (itu alasannya)."]], "n": "Bentuk biasa + んです (kata benda/na-adj: 〜なんです; lampau: 〜たんです). Dipakai untuk menjelaskan alasan atau menanyakan sebabnya; nuansanya lebih lembut dan lebih akrab daripada 〜ます. Bentuk sopan: 〜のです, bentuk ucapan: 〜んだ."},
    {"p": "〜なくてはいけない／〜なくてはならない／〜なきゃ", "m": "harus ~ (kewajiban)", "e": [["明日は早く起きなくてはいけません。", "Besok saya harus bangun pagi."], ["薬を飲まなくてはなりません。", "Saya harus minum obat."], ["もう帰らなきゃ。", "Aku harus pulang sekarang."]], "n": "Bentuk ない → buang い + くては + いけない／ならない. Setara 〜なければならない, tetapi 〜なくては lebih sering dipakai dalam percakapan. Bentuk santai: 〜なくちゃ／〜なきゃ."},
    {"p": "〜とか〜とか", "m": "~ dan ~ dan sebagainya (contoh, percakapan)", "e": [["休みの日は、映画を見るとか、本を読むとかしています。", "Pada hari libur saya melakukan hal seperti menonton film atau membaca buku."], ["果物は、りんごとかバナナとかが好きです。", "Buah, saya suka seperti apel, pisang, dan sebagainya."], ["昼ごはんは、うどんとかそばとかを食べることが多い。", "Makan siang, saya sering makan semacam udon atau soba."]], "n": "Menyebut beberapa contoh secara santai (mirip 〜たり〜たり dan 〜や〜など). Bisa dipasang pada kata benda maupun kata kerja bentuk biasa. Lebih lisan daripada 〜や〜など."},
    {"p": "〜てくださる／〜ていただく／〜てさしあげる", "m": "(orang lain) berbaik hati ~ untuk saya / saya ~ untuk (orang yang dihormati)", "e": [["先生が日本語を教えてくださいました。", "Guru mengajari saya bahasa Jepang (dengan baik hati)."], ["先生に作文を直していただきました。", "Saya dikoreksi karangannya oleh guru (saya mendapat bantuan)."], ["お客様に道を教えてさしあげました。", "Saya menunjukkan jalan kepada tamu."]], "n": "Versi sopan dari 〜てくれる／〜てもらう／〜てあげる. 〜てくださる: pemberi = orang yang dihormati (subjek). 〜ていただく: penerima = saya (subjek). 〜てさしあげる: dipakai dengan hati-hati karena bisa terdengar menggurui; sering diganti 〜ましょうか."},
    {"p": "〜がする", "m": "terasa / tercium / terdengar ~ (indra dan perasaan)", "e": [["いい匂いがしますね。", "Wangi sekali ya."], ["外で大きな音がしました。", "Terdengar suara keras di luar."], ["朝から頭が痛くて、寒気がします。", "Sejak pagi kepala saya sakit dan merasa menggigil."]], "n": "Kata benda indra + がする: 音がする (ada suara), 匂い／においがする (ada bau), 味がする (ada rasa), 気がする (merasa), 寒気がする (menggigil), めまいがする (pusing)."},
    {"p": "〜に見える／〜く見える／〜に聞こえる", "m": "tampak ~ / terdengar ~", "e": [["彼は二十歳には見えません。", "Dia tidak tampak berumur dua puluh tahun."], ["その服を着ると、とても若く見えますね。", "Kalau memakai baju itu, Anda tampak sangat muda."], ["あの人の話は、うそのように聞こえます。", "Cerita orang itu terdengar seperti bohong."]], "n": "い形容詞: 〜く見える; な形容詞/名詞: 〜に見える; 名詞のように聞こえる. Menyatakan kesan dari penampilan atau pendengaran. Beda dengan 〜そうだ (tampaknya akan ~): 〜に見える lebih umum dan bisa memakai kata benda."},
    {"p": "〜こと (nominalisasi／aturan)", "m": "hal ~ ; (di akhir kalimat) harus ~ (aturan tertulis)", "e": [["私の趣味は、写真を撮ることです。", "Hobi saya memotret."], ["約束を忘れることがあります。", "Ada kalanya saya lupa janji."], ["教室では日本語を話すこと。", "Di kelas harus berbicara bahasa Jepang. (aturan)"]], "n": "Bentuk biasa kata kerja + こと mengubahnya menjadi kata benda (mirip 〜の, tetapi untuk hal yang lebih abstrak, misalnya 趣味は〜ことです／〜ことができる／〜ことがある). Di akhir kalimat tertulis (peraturan, pengumuman) berarti perintah: 〜こと。"},
    {"p": "疑問詞＋か (だれか／何か／どこか／いつか)", "m": "seseorang / sesuatu / suatu tempat / suatu saat", "e": [["だれか手伝ってくれませんか。", "Adakah yang mau membantu saya?"], ["冷蔵庫に何か飲み物がありますか。", "Apakah ada minuman di kulkas?"], ["いつかまた日本に行きたいです。", "Suatu hari saya ingin pergi ke Jepang lagi."]], "n": "Kata tanya + か = 'sesuatu yang tidak ditentukan'. Partikel が／を biasanya dihilangkan setelahnya (だれかが→だれか), sedangkan に／で／へ boleh tetap dipakai (どこかへ行く／どこかに行く)."},
    {"p": "疑問詞＋でも (だれでも／いつでも／どこでも／何でも)", "m": "siapa pun / kapan pun / di mana pun / apa pun", "e": [["この店には、だれでも入れます。", "Siapa pun boleh masuk toko ini."], ["いつでも電話してください。", "Silakan telepon kapan saja."], ["何でも好きなものを注文してください。", "Silakan pesan apa pun yang Anda suka."]], "n": "Kata tanya + でも = tanpa terkecuali (kalimat positif). Berbeda dengan 疑問詞＋も＋ない (tidak ada sama sekali). Partikel に／で／と dapat ditempatkan sebelum でも: どこにでも、だれとでも。"},
    {"p": "尊敬語 (おっしゃる／なさる／くださる／ご覧になる)", "m": "kata kerja hormat: mengatakan / melakukan / memberi / melihat", "e": [["先生は何とおっしゃいましたか。", "Apa yang guru katakan?"], ["社長は毎朝ジョギングをなさいます。", "Direktur melakukan jogging setiap pagi."], ["この資料をご覧になりましたか。", "Apakah Bapak sudah melihat dokumen ini?"]], "n": "言う→おっしゃる, する→なさる, くれる→くださる, 見る→ご覧になる, 行く／来る／いる→いらっしゃる, 食べる／飲む→召し上がる, 知っている→ご存じだ. Bentuk ます: いらっしゃいます／おっしゃいます／なさいます／くださいます (い bukan り). Dipakai untuk tindakan orang yang dihormati, bukan diri sendiri."},
    {"p": "〜てよかった", "m": "syukurlah ~ / senang karena ~", "e": [["この店に来てよかったです。", "Syukurlah saya datang ke toko ini."], ["みんなに会えてよかったね。", "Senang ya bisa bertemu semuanya."], ["傘を持って行ってよかった。", "Syukurlah saya membawa payung."]], "n": "Bentuk て + よかった: perasaan lega atau senang atas hasil suatu hal yang sudah terjadi. Beda dengan 〜ばよかった (menyesal: 'seandainya ~'): 〜てよかった = bersyukur, 〜ばよかった = menyesal."},
    {"p": "接続詞 (それで／だから／それに／ところで／しかし)", "m": "kata hubung antarkalimat", "e": [["雨が降っています。だから、今日は出かけません。", "Sedang hujan. Karena itu hari ini saya tidak keluar."], ["この店は安いです。それに、おいしいです。", "Toko ini murah. Lagi pula enak."], ["ところで、あしたの会議は何時からですか。", "Ngomong-ngomong, rapat besok mulai jam berapa?"]], "n": "だから／ですから: sebab → akibat (alasan pembicara). それで: akibat dari hal yang dibicarakan. それに／そして: tambahan. しかし／でも／けれども: pertentangan (でも lebih santai). ところで: pergantian topik. それから: urutan. Awal kalimat, diikuti koma."},
    {"p": "〜たら、〜た (penemuan)", "m": "setelah ~, ternyata ~ (menemukan fakta)", "e": [["家に帰ったら、友達が待っていました。", "Begitu pulang ke rumah, ternyata teman sudah menunggu."], ["窓を開けたら、雪が降っていました。", "Saat membuka jendela, ternyata salju turun."], ["箱を開けると、中は空でした。", "Ketika kotak dibuka, isinya kosong."]], "n": "Bentuk たら／と + kalimat lampau. Bagian belakang menyatakan hal yang tak disangka atau baru disadari, bukan kehendak pembicara. Bagian belakang tidak boleh berupa ajakan, perintah, atau niat."},
    {"p": "〜といい／〜たらいい", "m": "semoga ~ / sebaiknya ~ (harapan atau saran)", "e": [["あした、天気がいいといいですね。", "Semoga besok cuacanya bagus ya."], ["わからなかったら、先生に聞いたらいいですよ。", "Kalau tidak mengerti, sebaiknya tanya guru."], ["早く元気になるといいですね。", "Semoga cepat sehat."]], "n": "〜といい／〜ばいい／〜たらいい: harapan atau saran ringan. 〜といいですね = semoga, 〜たらいいですよ = lebih baik/lakukan saja. Kalau ingin menyuruh dengan tegas, pakai 〜たほうがいい."},
    {"p": "〜てすみません／〜てありがとう", "m": "maaf karena ~ / terima kasih karena ~", "e": [["遅れてすみません。", "Maaf saya terlambat."], ["手伝ってくれてありがとう。", "Terima kasih sudah membantu."], ["待たせてしまって、すみませんでした。", "Maaf telah membuat Anda menunggu."]], "n": "Bentuk て + すみません／ありがとう menyebutkan alasan permintaan maaf atau terima kasih. Lebih sopan: 〜てくださって、ありがとうございます／〜てしまって申し訳ありません. Bentuk negatif: 〜なくてすみません／〜ないでくれてありがとう."}
  );
})();
