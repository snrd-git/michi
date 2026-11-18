(function(){
  const d = window.DATA.N4;
  const p2 = "田中さんは 毎朝 六時に 起きて、公園を 走ります。走った あとで、シャワーを あびて、朝ごはんを 食べます。最近 少し 体が 強く なりました。でも、雨の 日は 走りません。";
  const p3 = "ミナさんは 先週、友達と 山へ 行きました。朝は 天気が よかったですが、昼ごろから 雲が 出て、雨が 降り始めました。かさを 持って いなかったので、とても ぬれました。ミナさんは 「次は 天気を 調べて から 行こう」と 思いました。";
  const p4 = "駅の 前に 新しい パン屋が できました。パンが 安くて おいしいので、いつも お客さんが 並んで います。朝は 七時から 開いて いますが、夕方には ほとんど 売れて しまいます。買いたい 人は 早く 行った ほうが いいです。";

  d.vocab.push(
    // Kerja
    ["会社員","かいしゃいん","karyawan"],["仕事","しごと","pekerjaan"],["働く","はたらく","bekerja"],["残業","ざんぎょう","lembur"],
    ["給料","きゅうりょう","gaji"],["会議","かいぎ","rapat"],["出張","しゅっちょう","perjalanan dinas"],["休憩","きゅうけい","istirahat"],
    ["上司","じょうし","atasan"],["同僚","どうりょう","rekan kerja"],["履歴書","りれきしょ","CV / riwayat hidup"],["面接","めんせつ","wawancara"],
    ["資料","しりょう","dokumen / materi"],["締め切り","しめきり","tenggat waktu"],["転勤","てんきん","dipindahtugaskan"],
    // Sekolah
    ["授業","じゅぎょう","pelajaran / kelas"],["宿題","しゅくだい","PR"],["試験","しけん","ujian"],["成績","せいせき","nilai / prestasi"],
    ["卒業","そつぎょう","lulus"],["入学","にゅうがく","masuk sekolah"],["留学","りゅうがく","belajar di luar negeri"],["教室","きょうしつ","ruang kelas"],
    ["辞書","じしょ","kamus"],["作文","さくぶん","karangan"],["質問","しつもん","pertanyaan"],["復習","ふくしゅう","mengulang pelajaran"],
    ["予習","よしゅう","menyiapkan pelajaran"],["練習","れんしゅう","latihan"],
    // Kesehatan
    ["病気","びょうき","sakit / penyakit"],["病院","びょういん","rumah sakit"],["熱","ねつ","demam"],["咳","せき","batuk"],
    ["怪我","けが","luka / cedera"],["痛い","いたい","sakit (nyeri)"],["注射","ちゅうしゃ","suntikan"],["薬局","やっきょく","apotek"],
    ["治る","なおる","sembuh"],["入院","にゅういん","rawat inap"],["元気(な)","げんき","sehat / bersemangat"],["健康","けんこう","kesehatan"],
    ["体","からだ","tubuh"],["具合","ぐあい","kondisi (badan)"],
    // Perasaan
    ["嬉しい","うれしい","senang"],["悲しい","かなしい","sedih"],["寂しい","さびしい","kesepian"],["楽しい","たのしい","menyenangkan"],
    ["怖い","こわい","takut / menakutkan"],["恥ずかしい","はずかしい","malu"],["心配","しんぱい","khawatir"],["安心","あんしん","lega / tenang"],
    ["緊張","きんちょう","gugup / tegang"],["残念(な)","ざんねん","sayang sekali"],["驚く","おどろく","terkejut"],["怒る","おこる","marah"],
    // Alam
    ["空","そら","langit"],["海","うみ","laut"],["山","やま","gunung"],["川","かわ","sungai"],
    ["森","もり","hutan"],["島","しま","pulau"],["雲","くも","awan"],["星","ほし","bintang"],
    ["地震","じしん","gempa bumi"],["台風","たいふう","topan"],["雪","ゆき","salju"],["景色","けしき","pemandangan"],
    // Belanja
    ["値段","ねだん","harga"],["割引","わりびき","diskon"],["財布","さいふ","dompet"],["袋","ふくろ","kantong / tas plastik"],
    ["現金","げんきん","uang tunai"],["お釣り","おつり","uang kembalian"],["領収書","りょうしゅうしょ","kuitansi"],["売り場","うりば","bagian penjualan"],
    ["品物","しなもの","barang"],["安売り","やすうり","obral"],
    // Transportasi
    ["切符","きっぷ","tiket"],["改札","かいさつ","gerbang tiket"],["乗り換える","のりかえる","berganti kereta / transit"],["終電","しゅうでん","kereta terakhir"],
    ["特急","とっきゅう","kereta ekspres khusus"],["運転","うんてん","mengemudi"],["信号","しんごう","lampu lalu lintas"],["交通","こうつう","lalu lintas"],
    ["渋滞","じゅうたい","kemacetan"],["遅れる","おくれる","terlambat"],["通る","とおる","lewat"],
    // Transitif / intransitif
    ["開ける","あける","membuka (transitif)"],["開く","あく","terbuka (intransitif)"],["閉める","しめる","menutup (transitif)"],["閉まる","しまる","tertutup (intransitif)"],
    ["付ける","つける","menyalakan / memasang"],["付く","つく","menyala / menempel"],["消す","けす","mematikan / menghapus"],["消える","きえる","padam / hilang"],
    ["始める","はじめる","memulai (transitif)"],["始まる","はじまる","dimulai (intransitif)"],["落とす","おとす","menjatuhkan"],["落ちる","おちる","jatuh"],
    ["壊す","こわす","merusak"],["壊れる","こわれる","rusak"],["入れる","いれる","memasukkan"],["入る","はいる","masuk"],
    ["出す","だす","mengeluarkan"],["出る","でる","keluar"],["見つける","みつける","menemukan"],["見つかる","みつかる","ketemu / ditemukan"],
    ["変える","かえる","mengubah"],["変わる","かわる","berubah"],["直す","なおす","memperbaiki"],["直る","なおる","diperbaiki"],
    ["並べる","ならべる","menyusun berjajar"],["並ぶ","ならぶ","berbaris"],["集める","あつめる","mengumpulkan"],["止める","とめる","menghentikan / memarkir"],
    // Kata sifat
    ["重い","おもい","berat"],["軽い","かるい","ringan"],["甘い","あまい","manis"],["辛い","からい","pedas"],
    ["汚い","きたない","kotor"],["細い","ほそい","kurus / tipis (ramping)"],["太い","ふとい","gemuk / tebal (besar)"],["眠い","ねむい","mengantuk"],
    ["厳しい","きびしい","ketat / keras"],["珍しい","めずらしい","langka / jarang"],["静か(な)","しずか","tenang"],["賑やか(な)","にぎやか","ramai"],
    ["暇(な)","ひま","senggang"],["複雑(な)","ふくざつ","rumit"],
    // Kata keterangan
    ["とても","とても","sangat"],["多分","たぶん","mungkin / barangkali"],["きっと","きっと","pasti (dugaan kuat)"],["あまり","あまり","tidak begitu (+ negatif)"],
    ["ほとんど","ほとんど","hampir semua / hampir tidak"],["ちょうど","ちょうど","tepat / pas"],["すぐ","すぐ","segera"],["急に","きゅうに","tiba-tiba"],
    ["やっと","やっと","akhirnya (setelah lama)"],["初めて","はじめて","pertama kali"],["結局","けっきょく","pada akhirnya"],["最近","さいきん","akhir-akhir ini"],
    // Onomatope
    ["わくわく","わくわく","berdebar senang"],["どきどき","どきどき","jantung berdebar"],["ぺらぺら","ぺらぺら","fasih"],["ぴかぴか","ぴかぴか","berkilau"],
    ["ふわふわ","ふわふわ","empuk / lembut"],["ぐっすり","ぐっすり","(tidur) nyenyak"],["ゆっくり","ゆっくり","pelan-pelan / santai"],["にこにこ","にこにこ","tersenyum ramah"]
  );

  d.grammar.push(
    {p:"〜てあげる／〜てもらう／〜てくれる",m:"melakukan sesuatu untuk orang (memberi/menerima jasa)",e:[["友達に 日本語を 教えて あげました。","Saya mengajari teman bahasa Jepang."],["先生に 作文を 直して もらいました。","Saya dibantu guru memperbaiki karangan."],["友達が 荷物を 持って くれました。","Teman membawakan barang saya."]],n:"あげる: aku → orang lain. もらう: terima jasa (pelaku ditandai に/から). くれる: orang lain → aku (pelaku ditandai が)."},
    {p:"〜ことができる",m:"bisa / dapat melakukan ~",e:[["わたしは 泳ぐ ことが できます。","Saya bisa berenang."],["ここで 切符を 買う ことが できます。","Tiket bisa dibeli di sini."]],n:"Kata kerja bentuk kamus + ことができる. Sama dengan bentuk potensial, tetapi lebih formal."},
    {p:"〜かもしれない",m:"mungkin ~ / bisa jadi ~",e:[["あしたは 雨が 降るかもしれません。","Besok mungkin hujan."],["彼は もう 帰ったかもしれません。","Dia mungkin sudah pulang."]],n:"Bentuk biasa + かもしれない. な-adj / kata benda tanpa だ. Tingkat keyakinan rendah."},
    {p:"〜でしょう／〜だろう",m:"mungkin ~ / ~ kan?",e:[["あしたは 晴れるでしょう。","Besok mungkin cerah."],["これは 高いでしょう？","Ini mahal, kan?"]],n:"Dugaan (ramalan cuaca). Dengan intonasi naik = meminta persetujuan. だろう lebih kasual/tulis."},
    {p:"〜みたい／〜ようだ",m:"seperti ~ / tampaknya ~",e:[["あの 人は 先生みたいです。","Orang itu seperti guru."],["だれか 来たようです。","Sepertinya ada yang datang."]],n:"みたい lebih lisan. Kata benda: 〜のようだ／〜みたいだ. Berdasarkan penilaian dari yang dilihat/didengar."},
    {p:"〜ていく／〜てくる",m:"~ pergi / ~ datang; berlanjut / berubah",e:[["コンビニで 飲み物を 買って きます。","Saya beli minuman di minimarket (lalu kembali)."],["だんだん 寒く なって きました。","Lama-kelamaan jadi dingin."],["これからも 日本語を 勉強して いきます。","Ke depannya saya akan terus belajar bahasa Jepang."]],n:"てくる: pergi lalu kembali / perubahan mendekati sekarang. ていく: pergi menjauh / perubahan berlanjut ke masa depan."},
    {p:"〜てしまう",m:"terlanjur / sampai selesai ~",e:[["財布を 忘れて しまいました。","Saya terlanjur lupa dompet."],["宿題は もう 全部 やって しまいました。","PR sudah saya selesaikan semua."]],n:"Menyatakan penyesalan atau selesainya aksi. Lisan: 〜ちゃう／〜じゃう."},
    {p:"〜ておく",m:"~ dulu (persiapan)",e:[["旅行の 前に、ホテルを 予約して おきます。","Sebelum bepergian, saya pesan hotel dulu."],["ドアを 開けて おいて ください。","Tolong biarkan pintu terbuka."]],n:"Persiapan sebelumnya atau membiarkan dalam kondisi tertentu. Lisan: 〜とく."},
    {p:"〜ように",m:"agar ~ / supaya ~; tolong usahakan ~",e:[["忘れないように、メモを 書きます。","Saya menulis catatan agar tidak lupa."],["もっと ゆっくり 話すように 言いました。","Saya meminta agar bicara lebih pelan."]],n:"Tujuan dengan kata kerja bentuk kamus / ない (yang tidak disengaja atau potensial). Juga: 〜ように言う／お願いする."},
    {p:"〜られる (pasif dasar)",m:"di~ (kalimat pasif)",e:[["先生に ほめられました。","Saya dipuji guru."],["電車で 足を 踏まれました。","Kaki saya terinjak di kereta."]],n:"Grup 1: 〜aれる (書かれる). Grup 2: 〜られる (食べられる). する → される. くる → こられる. Pelaku ditandai に."},
    {p:"〜させる (kausatif dasar)",m:"menyuruh / membiarkan ~",e:[["母は 子どもに 野菜を 食べさせます。","Ibu menyuruh anaknya makan sayur."],["先生は 学生に 作文を 書かせました。","Guru menyuruh siswa menulis karangan."]],n:"Grup 1: 〜aせる (書かせる). Grup 2: 〜させる (食べさせる). する → させる. くる → こさせる."},
    {p:"〜と (kondisional)",m:"kalau ~ maka (pasti) ~",e:[["春に なると、花が さきます。","Kalau musim semi tiba, bunga mekar."],["このボタンを 押すと、ドアが 開きます。","Kalau tombol ini ditekan, pintu terbuka."]],n:"Hasil alami / otomatis / kebiasaan. Tidak untuk perintah atau permintaan di bagian akhir."},
    {p:"〜という",m:"yang bernama ~ / yang disebut ~",e:[["「さくら」という 花を 知って いますか。","Tahukah Anda bunga yang bernama 'sakura'?"],["山田さんという 人から 電話が ありました。","Ada telepon dari orang bernama Yamada."]],n:"Nama + という + kata benda. Juga: 〜という意味 (artinya ~)."},
    {p:"〜ほうがいい",m:"sebaiknya ~",e:[["早く 寝た ほうが いいですよ。","Sebaiknya cepat tidur."],["冷たい ものは 飲まない ほうが いいです。","Sebaiknya jangan minum yang dingin."]],n:"Saran: kata kerja bentuk た + ほうがいい. Larangan saran: bentuk ない + ほうがいい."},
    {p:"〜とき",m:"ketika ~",e:[["日本へ 行く とき、この かばんを 買いました。","Saat hendak pergi ke Jepang, saya membeli tas ini."],["ひまな とき、よく 映画を 見ます。","Saat senggang, saya sering menonton film."]],n:"Bentuk kamus = aksi belum/ sedang berlangsung; bentuk た = sudah selesai. な-adj: 〜な とき. Kata benda: 〜の とき."},
    {p:"〜たり〜たりする",m:"kadang ~ kadang ~ / seperti ~ dan ~",e:[["日曜日は 本を 読んだり、映画を 見たり します。","Hari Minggu saya membaca buku, menonton film, dan sebagainya."],["雨が 降ったり やんだり して います。","Hujan turun berhenti silih berganti."]],n:"Bentuk た + り. Contoh aktivitas, tidak mendaftar semuanya. Diakhiri dengan する."},
    {p:"〜はじめる／〜おわる",m:"mulai ~ / selesai ~",e:[["雨が 降り始めました。","Hujan mulai turun."],["この 本を 読み終わりました。","Saya selesai membaca buku ini."]],n:"Akar kata kerja + はじめる／おわる. Tidak untuk kata kerja non-aksi (ある dsb.)."},
    {p:"〜のに",m:"padahal ~ / meskipun ~",e:[["勉強したのに、試験に 落ちました。","Padahal sudah belajar, saya gagal ujian."],["春なのに、まだ 寒いです。","Padahal musim semi, masih dingin."]],n:"Menyatakan hasil tak terduga disertai kekecewaan. な-adj / kata benda: 〜なのに."},
    {p:"敬語 (いらっしゃる／召し上がる)",m:"bentuk hormat: pergi/datang/ada; makan/minum",e:[["先生は もう いらっしゃいました。","Guru sudah datang."],["どうぞ 召し上がって ください。","Silakan dimakan / diminum."]],n:"Sonkeigo (menghormati lawan bicara): いる/行く/来る → いらっしゃる; 食べる/飲む → 召し上がる; 言う → おっしゃる. Jangan dipakai untuk diri sendiri."}
  );

  d.kanji.push(
    ["駅","エキ","stasiun"],["電","デン","listrik"],["聞","ブン／きく","mendengar / bertanya"],["読","ドク／よむ","membaca"],["飲","イン／のむ","minum"],
    ["病","ビョウ／やまい","sakit"],["運","ウン／はこぶ","mengangkut / nasib"],["動","ドウ／うごく","bergerak"],["持","ジ／もつ","membawa / memegang"],["待","タイ／まつ","menunggu"],
    ["開","カイ／あける・ひらく","membuka"],["閉","ヘイ／しめる・とじる","menutup"],["教","キョウ／おしえる","mengajar"],["習","シュウ／ならう","belajar / berlatih"],["試","シ／ためす","mencoba"],
    ["験","ケン","pengujian"],["屋","オク／や","atap / toko"],["室","シツ","ruangan"],["働","ドウ／はたらく","bekerja"],["同","ドウ／おなじ","sama"],
    ["歌","カ／うた","lagu / menyanyi"],["業","ギョウ","pekerjaan / usaha"],["洗","セン／あらう","mencuci"],["住","ジュウ／すむ","tinggal"],["泳","エイ／およぐ","berenang"],
    ["暑","ショ／あつい","panas (cuaca)"],["寒","カン／さむい","dingin (cuaca)"],["品","ヒン／しな","barang / kualitas"],["紙","シ／かみ","kertas"],["答","トウ／こたえ","jawaban"]
  );

  d.questions.push(
    {t:"kanji",q:"「駅」の よみかたは？",o:["いき","えん","えき","ゆき"],a:2,x:"駅 = えき (stasiun)."},
    {t:"kanji",q:"「飲む」の よみかたは？",o:["のむ","よむ","かむ","とむ"],a:0,x:"飲む = のむ (minum). 読む = よむ (membaca)."},
    {t:"kanji",q:"「病気」の よみかたは？",o:["へいき","ひょうき","びよき","びょうき"],a:3,x:"病気 = びょうき (sakit)."},
    {t:"kanji",q:"「働く」の よみかたは？",o:["うごく","はたらく","はたく","はだらく"],a:1,x:"働く = はたらく (bekerja). 動く = うごく."},
    {t:"kanji",q:"「教室」の よみかたは？",o:["きょしつ","きょうしつ","きょうじつ","ぎょうしつ"],a:1,x:"教室 = きょうしつ (ruang kelas)."},
    {t:"kanji",q:"「閉める」の よみかたは？",o:["とめる","あける","とじる","しめる"],a:3,x:"閉める = しめる (menutup). とめる = 止める."},
    {t:"kanji",q:"「でんしゃ」を かんじで かくと？",o:["電車","雷車","電事","電草"],a:0,x:"電車 = でんしゃ (kereta listrik)."},
    {t:"kanji",q:"「持つ」の よみかたは？",o:["まつ","かつ","もつ","うつ"],a:2,x:"持つ = もつ (membawa). 待つ = まつ (menunggu)."},
    {t:"vocab",q:"「渋滞」の いみは？",o:["kecelakaan","lampu lalu lintas","tiket","kemacetan"],a:3,x:"渋滞（じゅうたい）= kemacetan. 信号 = lampu lalu lintas."},
    {t:"vocab",q:"「割引」の いみは？",o:["uang kembalian","diskon","harga","kuitansi"],a:1,x:"割引（わりびき）= diskon. 値段 = harga, お釣り = kembalian."},
    {t:"vocab",q:"「残業」の いみは？",o:["rapat","gaji","lembur","istirahat"],a:2,x:"残業（ざんぎょう）= lembur. 会議 = rapat, 給料 = gaji, 休憩 = istirahat."},
    {t:"vocab",q:"電気が ＿＿ いますから、消して ください。",o:["ついて","つけて","つく","つける"],a:0,x:"Intransitif (が): 電気が ついて います = lampu menyala. つける butuh を."},
    {t:"vocab",q:"「寂しい」の いみは？",o:["kesepian","malu","takut","lega"],a:0,x:"寂しい（さびしい）= kesepian. 恥ずかしい = malu, 怖い = takut, 安心 = lega."},
    {t:"vocab",q:"きのうの 夜は つかれて いたので、＿＿ 寝ました。",o:["わくわく","ぴかぴか","ぐっすり","ぺらぺら"],a:2,x:"ぐっすり = (tidur) nyenyak. わくわく = berdebar senang, ぴかぴか = berkilau, ぺらぺら = fasih."},
    {t:"grammar",q:"友達が 引っ越しを 手伝って ＿＿。",o:["あげました","くれました","もらいました","やりました"],a:1,x:"Teman melakukan untuk saya (pelaku が) → てくれる. もらう butuh に (友達に〜もらいました)."},
    {t:"grammar",q:"空が 暗いですね。午後は 雨が 降る ＿＿。",o:["ようにしません","ことがあります","ために","かもしれません"],a:3,x:"Dugaan: 〜かもしれません (mungkin). Pilihan lain tidak cocok maknanya."},
    {t:"grammar",q:"大切な かさを 電車に 忘れ＿＿。",o:["ておきました","てみました","てしまいました","てあげました"],a:2,x:"〜てしまう = terlanjur (penyesalan). 忘れる tidak disengaja, jadi bukan ておく/てみる."},
    {t:"grammar",q:"「ケーキを 買って おきます」の いみは？",o:["Sudah terlanjur membeli kue","Mencoba membeli kue","Membelikan kue untuk orang lain","Membeli kue lebih dulu (persiapan)"],a:3,x:"〜ておく = melakukan lebih dulu sebagai persiapan."},
    {t:"grammar",q:"この ボタンを 押す＿＿、ドアが 開きます。",o:["のに","と","ために","ながら"],a:1,x:"〜と = kalau ~ maka (hasil otomatis). のに = padahal, ために = untuk, ながら = sambil."},
    {t:"grammar",q:"わたしは 先生に ほめ＿＿ うれしかったです。",o:["られて","させて","ないで","たくて"],a:0,x:"Pasif: 先生にほめられて = dipuji guru. ほめる (grup 2) → ほめられる."},
    {t:"grammar",q:"先生は 学生に 作文を 書か＿＿。",o:["きました","せました","たいです","ました"],a:1,x:"Kausatif: 書く → 書かせる → 書かせました (menyuruh menulis)."},
    {t:"grammar",q:"「さくら」＿＿ 花を 知って いますか。",o:["という","とは","のは","ので"],a:0,x:"Nama + という + kata benda = yang bernama ~."},
    {t:"grammar",q:"おなかが 痛いので、冷たい ものは 飲ま＿＿ ほうが いいです。",o:["た","ます","て","ない"],a:3,x:"Saran larangan: bentuk ない + ほうがいい. 飲まない ほうが いい = sebaiknya jangan minum."},
    {t:"grammar",q:"社長は もう 会社に ＿＿ か。",o:["まいりました","いただきました","いらっしゃいました","申しました"],a:2,x:"Untuk atasan dipakai sonkeigo いらっしゃる. まいる/申す/いただく adalah kenjōgo (merendah)."},
    {t:"reading",p:p2,q:"田中さんは 走った あとで 何を しますか。",o:["公園で 休みます","会社へ 行きます","新聞を 読みます","シャワーを あびます"],a:3,x:"Teks: 「走ったあとで、シャワーをあびて」."},
    {t:"reading",p:p2,q:"雨の 日は どう しますか。",o:["公園へ 行きます","七時に 起きます","走りません","ジムへ 行きます"],a:2,x:"Teks: 「雨の日は走りません」."},
    {t:"reading",p:p3,q:"ミナさんは どうして ぬれましたか。",o:["かさを 持って いなかったから","川に 落ちたから","朝から 雨だったから","雪が 降ったから"],a:0,x:"Teks: 「かさを持っていなかったので、とてもぬれました」."},
    {t:"reading",p:p3,q:"ミナさんは 次は どう したいですか。",o:["山へ 行かない","天気を 調べて から 行く","友達と 行かない","昼ごろ 帰る"],a:1,x:"Teks: 「次は天気を調べてから行こう」."},
    {t:"reading",p:p4,q:"この パン屋は どんな 店ですか。",o:["パンが 高いが おいしい","いつも すいている","パンが 安くて おいしい","夜まで 開いている"],a:2,x:"Teks: 「パンが安くておいしいので、いつもお客さんが並んでいます」."},
    {t:"reading",p:p4,q:"パンを 買いたい 人は どう したら いいですか。",o:["夕方に 行く","早く 行く","電話で 予約する","並ばないで 待つ"],a:1,x:"Teks: 「買いたい人は早く行ったほうがいいです」."}
  );

  d.convo.push(
    {id:"n4-4",title:"Di kantor pos",topic:"Layanan",lines:[
      ["客","すみません、この 荷物を インドネシアへ 送りたいんですが。","Permisi, saya ingin mengirim paket ini ke Indonesia."],
      ["局員","航空便ですか、船便ですか。","Lewat udara atau lewat laut?"],
      ["客","どちらが 早いですか。","Mana yang lebih cepat?"],
      ["局員","航空便なら 一週間ぐらいです。船便は 一か月ぐらい かかります。","Lewat udara sekitar satu minggu. Lewat laut sekitar satu bulan."],
      ["客","じゃあ、航空便で お願いします。いくらですか。","Kalau begitu lewat udara. Berapa biayanya?"],
      ["局員","三千二百円です。この 紙に 住所を 書いて ください。","3.200 yen. Tolong tulis alamat di kertas ini."],
      ["客","はい。……書きました。これで いいですか。","Baik. ...Sudah saya tulis. Begini sudah benar?"],
      ["局員","はい、けっこうです。ありがとうございました。","Ya, sudah benar. Terima kasih."]]},
    {id:"n4-5",title:"Mencari kamar sewa",topic:"Tempat tinggal",lines:[
      ["客","部屋を 探して いるんですが。","Saya sedang mencari kamar."],
      ["店員","どんな 部屋が いいですか。","Kamar seperti apa yang Anda inginkan?"],
      ["客","駅から 近くて、家賃が 六万円ぐらいの 部屋を お願いします。","Yang dekat dari stasiun dengan sewa sekitar 60.000 yen."],
      ["店員","それなら、この 部屋は どうですか。駅から 歩いて 五分です。","Kalau begitu, kamar ini bagaimana? Jalan kaki 5 menit dari stasiun."],
      ["客","ちょっと 見て みたいんですが、今日 見る ことが できますか。","Saya ingin melihatnya; bisakah hari ini?"],
      ["店員","はい、これから ご案内します。","Bisa, sekarang saya antar."],
      ["客","お願いします。ペットを 飼っても いいですか。","Tolong. Boleh memelihara hewan?"],
      ["店員","いいえ、この アパートは ペットは だめなんです。","Tidak, apartemen ini tidak boleh hewan peliharaan."]]},
    {id:"n4-6",title:"Konsultasi dengan guru",topic:"Sekolah",lines:[
      ["学生","先生、少し 相談しても よろしいですか。","Sensei, boleh saya konsultasi sebentar?"],
      ["先生","ええ、どうぞ。どうしたんですか。","Ya, silakan. Ada apa?"],
      ["学生","実は、日本語の 勉強が なかなか 進まなくて、困って います。","Sebenarnya belajar bahasa Jepang saya tidak maju-maju, jadi bingung."],
      ["先生","毎日 どのくらい 勉強して いますか。","Berapa lama belajar tiap hari?"],
      ["学生","一時間ぐらいですが、漢字が なかなか 覚えられません。","Sekitar satu jam, tapi sulit sekali menghafal kanji."],
      ["先生","漢字は 書きながら 覚えると いいですよ。毎日 少しずつ 復習する ことも 大切です。","Kanji lebih baik dihafal sambil menulis. Mengulang sedikit demi sedikit tiap hari juga penting."],
      ["学生","わかりました。やって みます。","Baik. Saya coba."],
      ["先生","わからない ことが あったら、いつでも 聞いて ください。","Kalau ada yang tidak paham, tanyakan kapan saja."]]},
    {id:"n4-7",title:"Telepon membatalkan reservasi",topic:"Telepon",lines:[
      ["客","もしもし、来週の 金曜日に 予約した 田中ですが。","Halo, saya Tanaka yang reservasi untuk Jumat depan."],
      ["店員","田中さまですね。どう なさいましたか。","Tuan Tanaka ya. Ada apa?"],
      ["客","実は、急に 出張が 入って しまって、行けなく なりました。","Sebenarnya mendadak ada perjalanan dinas, jadi tidak bisa datang."],
      ["店員","そうですか。それでは、キャンセルですね。","Begitu. Jadi dibatalkan ya."],
      ["客","はい、申し訳ありません。日を 変える ことは できますか。","Ya, mohon maaf. Bisakah mengganti hari?"],
      ["店員","はい、来月なら まだ 空いて います。","Bisa, bulan depan masih kosong."],
      ["客","では、来月の 第一金曜日に お願いします。","Kalau begitu, Jumat pertama bulan depan."],
      ["店員","かしこまりました。お待ちして おります。","Baik. Kami tunggu."]]}
  );
})();
