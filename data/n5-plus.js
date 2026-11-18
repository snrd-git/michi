(function(){
  const d = window.DATA.N5;
  const pA = "わたしの かぞくは 四人です。ちちと ははと いもうとと わたしです。ちちは 会社員で、ははは 先生です。いもうとは じゅうにさいです。";
  const pB = "きのうは 日曜日でした。あさ、ともだちと こうえんへ いきました。それから、えいがを みました。ばんごはんは うちで たべました。とても たのしかったです。";
  const pC = "わたしは きのう デパートで くつを かいました。くつは 六千円でした。すこし たかかったですが、あおくて きれいです。きょう はいて きました。";
  const pD = "ゆうびんきょくは 月曜日から 金曜日まで あいています。午前九時から 午後五時までです。土曜日と 日曜日は やすみです。";

  d.vocab.push(
    // angka
    ["一","いち","satu"],["二","に","dua"],["三","さん","tiga"],["四","よん／し","empat"],["五","ご","lima"],
    ["六","ろく","enam"],["七","なな／しち","tujuh"],["八","はち","delapan"],["九","きゅう／く","sembilan"],
    ["十","じゅう","sepuluh (hitungan umum: とお)"],["百","ひゃく","seratus"],["千","せん","seribu"],["万","まん","sepuluh ribu"],
    // penghitung
    ["〜時","〜じ","jam ~ (四時 = jam 4)"],["〜分","〜ふん／ぷん","menit ~"],["〜円","〜えん","~ yen"],
    ["〜歳","〜さい","~ tahun (usia)"],["〜人","〜にん","~ orang"],["〜枚","〜まい","~ lembar (benda tipis)"],
    ["〜本","〜ほん","~ batang (benda panjang)"],["〜冊","〜さつ","~ eksemplar (buku)"],["〜台","〜だい","~ unit (mesin/kendaraan)"],
    ["〜個","〜こ","~ buah (benda kecil)"],["〜匹","〜ひき","~ ekor (hewan kecil)"],
    ["一つ","ひとつ","satu buah"],["二つ","ふたつ","dua buah"],["三つ","みっつ","tiga buah"],["四つ","よっつ","empat buah"],
    ["五つ","いつつ","lima buah"],["六つ","むっつ","enam buah"],["七つ","ななつ","tujuh buah"],["八つ","やっつ","delapan buah"],
    ["九つ","ここのつ","sembilan buah"],
    ["一人","ひとり","satu orang"],["二人","ふたり","dua orang"],["何時","なんじ","jam berapa"],["何人","なんにん","berapa orang"],
    // hari / bulan
    ["日曜日","にちようび","hari Minggu"],["月曜日","げつようび","hari Senin"],["火曜日","かようび","hari Selasa"],
    ["水曜日","すいようび","hari Rabu"],["木曜日","もくようび","hari Kamis"],["金曜日","きんようび","hari Jumat"],
    ["土曜日","どようび","hari Sabtu"],["何曜日","なんようび","hari apa"],["〜月","〜がつ","bulan ~"],["何月","なんがつ","bulan berapa"],
    ["何日","なんにち","tanggal berapa / berapa hari"],["誕生日","たんじょうび","hari ulang tahun"],
    ["今月","こんげつ","bulan ini"],["来月","らいげつ","bulan depan"],["先月","せんげつ","bulan lalu"],
    ["今年","ことし","tahun ini"],["来年","らいねん","tahun depan"],["去年","きょねん","tahun lalu"],
    ["今週","こんしゅう","minggu ini"],["来週","らいしゅう","minggu depan"],["先週","せんしゅう","minggu lalu"],
    ["午前","ごぜん","pagi (a.m.)"],["午後","ごご","siang/sore (p.m.)"],["今","いま","sekarang"],["夜","よる","malam"],["昼","ひる","siang"],
    // keluarga
    ["父","ちち","ayah saya"],["母","はは","ibu saya"],["お父さん","おとうさん","ayah (orang lain / sapaan)"],["お母さん","おかあさん","ibu (orang lain / sapaan)"],
    ["兄","あに","kakak laki-laki saya"],["姉","あね","kakak perempuan saya"],["弟","おとうと","adik laki-laki saya"],["妹","いもうと","adik perempuan saya"],
    ["兄弟","きょうだい","saudara kandung"],["子供","こども","anak"],["男","おとこ","laki-laki"],["女","おんな","perempuan"],
    // tubuh
    ["頭","あたま","kepala"],["顔","かお","wajah"],["目","め","mata"],["耳","みみ","telinga"],["口","くち","mulut"],
    ["手","て","tangan"],["足","あし","kaki"],["体","からだ","badan"],["歯","は","gigi"],["お腹","おなか","perut"],
    // warna
    ["赤い","あかい","merah"],["青い","あおい","biru"],["白い","しろい","putih"],["黒い","くろい","hitam"],["黄色","きいろ","kuning"],
    ["茶色","ちゃいろ","cokelat"],["色","いろ","warna"],
    // makanan
    ["牛乳","ぎゅうにゅう","susu sapi"],["卵","たまご","telur"],["朝ご飯","あさごはん","sarapan"],["昼ご飯","ひるごはん","makan siang"],
    ["晩ご飯","ばんごはん","makan malam"],["パン","パン","roti"],["コーヒー","コーヒー","kopi"],["飲み物","のみもの","minuman"],
    ["食べ物","たべもの","makanan"],["料理","りょうり","masakan / memasak"],
    // pakaian
    ["服","ふく","pakaian"],["靴","くつ","sepatu"],["靴下","くつした","kaus kaki"],["帽子","ぼうし","topi"],["眼鏡","めがね","kacamata"],
    ["シャツ","シャツ","kemeja"],["かばん","かばん","tas"],["着る","きる","memakai (baju)"],["履く","はく","memakai (sepatu/celana)"],
    // rumah
    ["家","いえ","rumah"],["部屋","へや","kamar"],["窓","まど","jendela"],["机","つくえ","meja"],["椅子","いす","kursi"],
    ["庭","にわ","kebun / halaman"],["台所","だいどころ","dapur"],["玄関","げんかん","pintu masuk (genkan)"],["傘","かさ","payung"],["トイレ","トイレ","toilet"],
    // kata kerja
    ["起きる","おきる","bangun"],["寝る","ねる","tidur"],["住む","すむ","tinggal"],["働く","はたらく","bekerja"],["休む","やすむ","istirahat / libur"],
    ["歩く","あるく","berjalan kaki"],["走る","はしる","berlari"],["乗る","のる","naik (kendaraan)"],["降りる","おりる","turun (dari kendaraan)"],
    ["会う","あう","bertemu"],["待つ","まつ","menunggu"],["持つ","もつ","membawa / memegang"],["使う","つかう","menggunakan"],
    ["作る","つくる","membuat"],["教える","おしえる","mengajar / memberi tahu"],["習う","ならう","belajar (dari guru)"],["知る","しる","tahu"],
    ["言う","いう","berkata"],["開ける","あける","membuka"],["閉める","しめる","menutup"],["入る","はいる","masuk"],["出る","でる","keluar"],
    ["立つ","たつ","berdiri"],["座る","すわる","duduk"],["泳ぐ","およぐ","berenang"],["歌う","うたう","menyanyi"],["洗う","あらう","mencuci"],
    ["着く","つく","tiba"],["遊ぶ","あそぶ","bermain"],
    // kata sifat
    ["長い","ながい","panjang"],["短い","みじかい","pendek"],["多い","おおい","banyak"],["少ない","すくない","sedikit"],
    ["早い","はやい","awal / pagi-pagi"],["遅い","おそい","lambat / terlambat"],["暑い","あつい","panas (cuaca)"],["寒い","さむい","dingin (cuaca)"],
    ["冷たい","つめたい","dingin (benda)"],["難しい","むずかしい","sulit"],["易しい","やさしい","mudah"],["楽しい","たのしい","menyenangkan"],
    ["面白い","おもしろい","menarik / lucu"],["明るい","あかるい","terang"],["暗い","くらい","gelap"],["近い","ちかい","dekat"],
    ["遠い","とおい","jauh"],["重い","おもい","berat"],["軽い","かるい","ringan"],["きれい(な)","きれい","cantik / bersih"],
    ["有名(な)","ゆうめい","terkenal"],["便利(な)","べんり","praktis"],["嫌い(な)","きらい","tidak suka"],["上手(な)","じょうず","pandai"],["下手(な)","へた","kurang pandai"],
    // tempat
    ["公園","こうえん","taman"],["図書館","としょかん","perpustakaan"],["郵便局","ゆうびんきょく","kantor pos"],["映画館","えいがかん","bioskop"],
    ["喫茶店","きっさてん","kafe"],["空港","くうこう","bandara"],["国","くに","negara"],["町","まち","kota kecil / kawasan"],["道","みち","jalan"],
    ["大学","だいがく","universitas"],["海","うみ","laut"],["教室","きょうしつ","ruang kelas"],["レストラン","レストラン","restoran"],
    ["デパート","デパート","toserba"],["スーパー","スーパー","supermarket"],["日本","にほん","Jepang"],["外国","がいこく","luar negeri"],
    // transportasi
    ["自転車","じてんしゃ","sepeda"],["バス","バス","bus"],["タクシー","タクシー","taksi"],["飛行機","ひこうき","pesawat"],
    ["地下鉄","ちかてつ","kereta bawah tanah"],["船","ふね","kapal"],["切符","きっぷ","tiket"],
    // kata tanya
    ["何","なに／なん","apa"],["誰","だれ","siapa"],["いつ","いつ","kapan"],["どこ","どこ","di mana"],["どれ","どれ","yang mana (benda)"],
    ["どの","どの","~ yang mana"],["どう","どう","bagaimana"],["どうして","どうして","mengapa"],["いくら","いくら","berapa harga"],
    ["いくつ","いくつ","berapa buah / berapa umur"],["どちら","どちら","yang mana (dua pilihan) / di mana (sopan)"],
    // kata keterangan
    ["とても","とても","sangat"],["たくさん","たくさん","banyak"],["ちょっと","ちょっと","sebentar / sedikit"],["少し","すこし","sedikit"],
    ["もう","もう","sudah / lagi"],["まだ","まだ","masih / belum"],["よく","よく","sering / dengan baik"],["いつも","いつも","selalu"],
    ["ときどき","ときどき","kadang-kadang"],["全然","ぜんぜん","sama sekali (+ negatif)"],["一緒に","いっしょに","bersama"],
    ["すぐ","すぐ","segera"],["もっと","もっと","lebih (banyak)"],["あまり","あまり","tidak begitu (+ negatif)"]
  );

  d.grammar.push(
    {p:"これ／それ／あれ／どれ",m:"ini / itu (dekat lawan bicara) / itu (jauh dari keduanya) / yang mana",e:[["これは わたしの かばんです。","Ini tas saya."],["それは なんですか。","Itu apa?"],["あれは えきです。","Itu (di sana) stasiun."],["あなたの かさは どれですか。","Payung Anda yang mana?"]],n:"Pengganti benda berdiri sendiri. Bila diikuti kata benda, pakai この／その／あの／どの: このかばん."},
    {p:"〜も",m:"juga / pun",e:[["わたしも 学生です。","Saya juga pelajar."],["コーヒーも 飲みます。","Saya juga minum kopi."]],n:"も menggantikan は／が／を dan tidak dipakai bersamaan dengannya: わたしは → わたしも."},
    {p:"AとB／AやB",m:"A dan B / A, B, dan lain-lain",e:[["パンと たまごを 買いました。","Saya membeli roti dan telur."],["つくえの 上に 本や ペンが あります。","Di atas meja ada buku, pena, dan sebagainya."]],n:"と menyebut semua yang ada (lengkap), や hanya contoh (tidak lengkap)."},
    {p:"〜ね／〜よ",m:"ya, kan (minta persetujuan) / lho, tahu (memberi info)",e:[["いい 天気ですね。","Cuacanya bagus ya."],["あしたは 休みですよ。","Besok libur lho."]],n:"ね mencari kesepakatan, よ menyampaikan hal yang belum diketahui lawan bicara."},
    {p:"〜でしょう",m:"mungkin / ~ kan? (perkiraan)",e:[["あしたは 雨でしょう。","Besok mungkin hujan."],["田中さんは 来るでしょう？","Tanaka datang, kan?"]],n:"Dengan intonasi naik berarti meminta konfirmasi."},
    {p:"AはBより〜です",m:"A lebih ~ daripada B",e:[["東京は 大阪より 大きいです。","Tokyo lebih besar daripada Osaka."],["わたしは 兄より 背が 低いです。","Saya lebih pendek daripada kakak."]],n:"より menandai pembanding (yang dikalahkan). Pertanyaan: AとBと どちらが 〜ですか。"},
    {p:"〜が好きです／嫌いです／上手です／下手です",m:"suka / tidak suka / pandai / kurang pandai pada ~",e:[["わたしは 魚が 好きです。","Saya suka ikan."],["姉は 歌が 上手です。","Kakak perempuan saya pandai menyanyi."]],n:"Objek perasaan dan kemampuan ditandai が, bukan を."},
    {p:"〜ましょうか",m:"bagaimana kalau saya ~ ? / mari kita ~ ?",e:[["荷物を 持ちましょうか。","Mau saya bawakan barangnya?"],["ちょっと 休みましょうか。","Bagaimana kalau kita istirahat sebentar?"]],n:"Dipakai untuk menawarkan bantuan atau mengajukan usul. Jawaban: はい、おねがいします／いいえ、けっこうです."},
    {p:"数え方（かぞえかた）",m:"cara menghitung dengan penghitung (counter)",e:[["りんごを 三つ ください。","Tolong tiga apel."],["本を 二冊 買いました。","Saya membeli dua buku."],["学生が 五人 います。","Ada lima pelajar."]],n:"Urutan: benda + を／が + jumlah + kata kerja. Penghitung: 〜つ (umum), 〜人, 〜枚, 〜本, 〜冊, 〜台, 〜個, 〜匹. Beberapa berubah bunyi: 一本 いっぽん, 三本 さんぼん, 六本 ろっぽん."},
    {p:"〜から（alasan）",m:"karena ~ , maka ...",e:[["あついですから、まどを あけます。","Karena panas, saya membuka jendela."],["おなかが いたいですから、病院へ 行きます。","Karena perut sakit, saya pergi ke rumah sakit."]],n:"Alasan dulu, hasil kemudian. Bentuk sopan + から: ですから／ますから. Jangan tertukar dengan 〜から (dari)."},
    {p:"V辞書形＋まえに",m:"sebelum melakukan ~",e:[["ねる まえに、はを みがきます。","Sebelum tidur, saya menyikat gigi."],["食事の まえに、手を あらいます。","Sebelum makan, saya mencuci tangan."]],n:"Kata kerja sebelum まえに memakai bentuk kamus. Bila kata benda: Nの まえに."},
    {p:"Vて＋から",m:"setelah melakukan ~ (baru ...)",e:[["ごはんを 食べてから、薬を のみます。","Setelah makan, saya minum obat."],["しゅくだいを してから、ねます。","Setelah mengerjakan PR, saya tidur."]],n:"Menekankan urutan: tindakan pertama selesai dulu, baru tindakan kedua."},
    {p:"Vないで＋ください",m:"tolong jangan ~",e:[["ここで しゃしんを とらないで ください。","Tolong jangan memotret di sini."],["あしたは おくれないで ください。","Tolong jangan terlambat besok."]],n:"Bentuk ない (たべる → たべない) + で + ください."}
  );

  d.kanji.push(
    ["一","イチ／ひとつ","satu"],["二","ニ／ふたつ","dua"],["三","サン／みっつ","tiga"],["四","シ／よん・よっつ","empat"],
    ["五","ゴ／いつつ","lima"],["六","ロク／むっつ","enam"],["七","シチ／なな・ななつ","tujuh"],["八","ハチ／やっつ","delapan"],
    ["九","キュウ・ク／ここのつ","sembilan"],["十","ジュウ／とお","sepuluh"],["百","ヒャク／―","seratus"],["千","セン／ち","seribu"],
    ["円","エン／まるい","yen, bulat"],["年","ネン／とし","tahun"],["口","コウ／くち","mulut"],["目","モク／め","mata"],
    ["手","シュ／て","tangan"],["足","ソク／あし","kaki"],["耳","ジ／みみ","telinga"],["白","ハク／しろい","putih"],
    ["天","テン／―","langit, surga"],["気","キ／―","semangat, udara"],["雨","ウ／あめ","hujan"],["上","ジョウ／うえ・あがる","atas"],
    ["下","カ・ゲ／した・さがる","bawah"],["中","チュウ／なか","dalam, tengah"],["左","サ／ひだり","kiri"],["右","ウ・ユウ／みぎ","kanan"],
    ["前","ゼン／まえ","depan, sebelum"],["後","ゴ・コウ／うしろ・あと","belakang, sesudah"],["名","メイ／な","nama"],["外","ガイ／そと","luar"],
    ["国","コク／くに","negara"],["語","ゴ／かたる","bahasa"],["話","ワ／はなす","bicara, cerita"],["書","ショ／かく","menulis"],
    ["読","ドク／よむ","membaca"],["聞","ブン／きく","mendengar, bertanya"],["来","ライ／くる","datang"],["出","シュツ／でる・だす","keluar"]
  );

  d.questions.push(
    // kanji
    {t:"kanji",q:"「手」の よみかたは？",o:["て","あし","くち","め"],a:0,x:"手 = て (tangan). 足 = あし, 口 = くち, 目 = め."},
    {t:"kanji",q:"「雨」の よみかたは？",o:["あめ","くも","ゆき","かぜ"],a:0,x:"雨 = あめ (hujan). 雪 = ゆき, 風 = かぜ."},
    {t:"kanji",q:"「右」の よみかたは？",o:["ひだり","みぎ","うえ","した"],a:1,x:"右 = みぎ (kanan). 左 = ひだり."},
    {t:"kanji",q:"「国」の よみかたは？",o:["まち","うみ","くに","むら"],a:2,x:"国 = くに (negara)."},
    {t:"kanji",q:"「七」の よみかたは？",o:["なな","ろく","はち","きゅう"],a:0,x:"七 = なな／しち. 六 = ろく, 八 = はち, 九 = きゅう."},
    {t:"kanji",q:"「出る」の よみかたは？",o:["はいる","でる","くる","いく"],a:1,x:"出る = でる (keluar). 入る = はいる."},
    {t:"kanji",q:"「め が いたいです」の「め」を かんじで かくと？",o:["日","白","自","目"],a:3,x:"め (mata) = 目. 日 = ひ, 白 = しろ."},
    // vocab
    {t:"vocab",q:"「牛乳」の いみは？",o:["susu","telur","roti","daging"],a:0,x:"牛乳（ぎゅうにゅう）= susu sapi."},
    {t:"vocab",q:"「兄」(あに) の いみは？",o:["kakak laki-laki","adik laki-laki","kakak perempuan","ayah"],a:0,x:"兄 = kakak laki-laki (milik sendiri). 弟 = adik laki-laki, 姉 = kakak perempuan."},
    {t:"vocab",q:"「眼鏡」の いみは？",o:["topi","sepatu","kacamata","tas"],a:2,x:"眼鏡（めがね）= kacamata."},
    {t:"vocab",q:"「何時」の よみかたは？",o:["なんじ","なにじ","なんがつ","なんにち"],a:0,x:"何時 = なんじ (jam berapa)."},
    {t:"vocab",q:"「近い」の はんたいの ことばは？",o:["重い","暗い","長い","遠い"],a:3,x:"近い (dekat) >< 遠い (jauh). 重い (berat) >< 軽い, 暗い (gelap) >< 明るい."},
    {t:"vocab",q:"「傘」の いみは？",o:["jendela","pintu","meja","payung"],a:3,x:"傘（かさ）= payung."},
    {t:"vocab",q:"「土曜日」の よみかたは？",o:["どようび","つちようび","どうようび","どよび"],a:0,x:"土曜日 = どようび (hari Sabtu)."},
    // grammar
    {t:"grammar",q:"Aさんは 学生です。Bさん＿＿ 学生です。(B juga pelajar)",o:["も","を","に","で"],a:0,x:"も = juga. Menggantikan は."},
    {t:"grammar",q:"パン＿＿ たまごを 買いました。",o:["と","で","に","へ"],a:0,x:"と menghubungkan benda: roti dan telur."},
    {t:"grammar",q:"東京は 大阪＿＿ 大きいです。",o:["より","から","まで","でも"],a:0,x:"AはBより〜です = A lebih ~ daripada B."},
    {t:"grammar",q:"わたしは すし＿＿ 好きです。",o:["が","へ","に","で"],a:0,x:"Objek 好き ditandai が."},
    {t:"grammar",q:"A:「にもつが 重いですね。」 B:「手伝い＿＿。」",o:["ましょうか","ました","ません","ましたか"],a:0,x:"〜ましょうか = menawarkan bantuan (Mau saya bantu?)."},
    {t:"grammar",q:"あしたは しけんです。＿＿、きょう 勉強します。",o:["ですから","でも","しかし","それから"],a:0,x:"ですから = karena itu (sebab → akibat). でも／しかし = tetapi."},
    {t:"grammar",q:"ねる ＿＿、はを みがきます。",o:["まえに","まえで","あとに","ところに"],a:0,x:"Vる + まえに = sebelum ~."},
    {t:"grammar",q:"ごはんを 食べ＿＿、くすりを のみます。",o:["てから","まえに","でも","ませんか"],a:0,x:"Vて + から = setelah ~. 食べてから = setelah makan."},
    {t:"grammar",q:"ここで しゃしんを とら＿＿ ください。",o:["ないで","なくて","ません","ないと"],a:0,x:"Vないで + ください = tolong jangan ~."},
    // reading
    {t:"reading",p:pA,q:"かぞくは なんにんですか。",o:["さんにん","よにん","ごにん","ろくにん"],a:1,x:"Teks: 「四人です」 (ayah, ibu, adik perempuan, saya)."},
    {t:"reading",p:pA,q:"おかあさんの しごとは なんですか。",o:["かいしゃいん","せんせい","がくせい","いしゃ"],a:1,x:"Teks: 「ははは 先生です」."},
    {t:"reading",p:pB,q:"あさ、ともだちと どこへ いきましたか。",o:["えき","がっこう","こうえん","びょういん"],a:2,x:"Teks: 「こうえんへ いきました」."},
    {t:"reading",p:pB,q:"ばんごはんは どこで たべましたか。",o:["うち","レストラン","こうえん","ともだちの いえ"],a:0,x:"Teks: 「ばんごはんは うちで たべました」."},
    {t:"reading",p:pC,q:"くつは いくらでしたか。",o:["ろくせんえん","ろっぴゃくえん","ごせんえん","ななせんえん"],a:0,x:"Teks: 「六千円」 = ろくせんえん. 600 yen = ろっぴゃくえん."},
    {t:"reading",p:pC,q:"くつは なにいろですか。",o:["あか","あお","しろ","くろ"],a:1,x:"Teks: 「あおくて きれいです」."},
    {t:"reading",p:pD,q:"ゆうびんきょくは なんじに しまりますか。",o:["午後四時","午後五時","午後六時","午前九時"],a:1,x:"Teks: 「午後五時までです」."},
    {t:"reading",p:pD,q:"ゆうびんきょくが やすみの ひは いつですか。",o:["月曜日と 火曜日","金曜日と 土曜日","土曜日と 日曜日","日曜日だけ"],a:2,x:"Teks: 「土曜日と 日曜日は やすみです」."}
  );

  d.convo.push(
    {id:"n5-5",title:"Belanja pakaian",topic:"Belanja",lines:[
      ["店員","いらっしゃいませ。","Selamat datang."],
      ["客","すみません、この シャツは いくらですか。","Permisi, kemeja ini berapa harganya?"],
      ["店員","三千円です。","3.000 yen."],
      ["客","もう すこし 大きい サイズは ありますか。","Apakah ada ukuran yang sedikit lebih besar?"],
      ["店員","はい、ございます。ちょっと 待ってください。……こちらです。","Ada. Mohon tunggu sebentar. ...Ini dia."],
      ["客","きても いいですか。","Boleh saya coba pakai?"],
      ["店員","はい、どうぞ。あちらが しちゃくしつです。","Silakan. Ruang ganti ada di sebelah sana."],
      ["客","ちょうど いいです。これを ください。","Pas sekali. Saya ambil yang ini."]]},
    {id:"n5-6",title:"Telepon teman",topic:"Telepon",lines:[
      ["A","もしもし、ミナさんですか。ゆうきです。","Halo, apakah ini Mina? Saya Yuki."],
      ["B","あ、ゆうきさん。こんにちは。","Oh, Yuki. Halo."],
      ["A","日曜日は ひまですか。","Apakah hari Minggu kamu senggang?"],
      ["B","はい、ひまです。どうして ですか。","Ya, senggang. Kenapa?"],
      ["A","いっしょに えいがを 見に 行きませんか。","Mau menonton film bersama?"],
      ["B","いいですね。なんじに あいますか。","Boleh. Jam berapa kita bertemu?"],
      ["A","一時に えきの まえで あいましょう。","Mari bertemu jam 1 di depan stasiun."],
      ["B","わかりました。じゃあ、日曜日に。","Mengerti. Sampai jumpa hari Minggu."]]},
    {id:"n5-7",title:"Di kantor pos",topic:"Pos dan bank",lines:[
      ["客","すみません、この にもつを インドネシアへ おくりたいです。","Permisi, saya ingin mengirim paket ini ke Indonesia."],
      ["局員","はい。ひこうきですか、ふねですか。","Baik. Lewat pesawat atau kapal?"],
      ["客","ひこうきで おねがいします。何日ぐらい かかりますか。","Pesawat, tolong. Kira-kira berapa hari?"],
      ["局員","一週間ぐらいです。ぜんぶで 四千五百円です。","Sekitar satu minggu. Totalnya 4.500 yen."],
      ["客","はい、どうぞ。","Ya, silakan."],
      ["局員","ここに じゅうしょと なまえを かいてください。","Tolong tulis alamat dan nama di sini."],
      ["客","はい。あの、ぎんこうは 何時までですか。","Baik. Oh ya, bank buka sampai jam berapa?"],
      ["局員","午後三時までです。","Sampai jam 3 sore."]]},
    {id:"n5-8",title:"Keluarga dan cuaca",topic:"Keluarga",lines:[
      ["A","たかしさんの かぞくは 何人ですか。","Keluarga Takashi ada berapa orang?"],
      ["B","五人です。ちちと ははと あにと いもうとと わたしです。","Lima orang. Ayah, ibu, kakak laki-laki, adik perempuan, dan saya."],
      ["A","いもうとさんは 何さいですか。","Adik perempuanmu umur berapa?"],
      ["B","じゅうさいです。まいにち 学校へ 行っています。","Sepuluh tahun. Setiap hari dia pergi ke sekolah."],
      ["A","そうですか。あ、きょうは 雨ですね。","Begitu ya. Oh, hari ini hujan ya."],
      ["B","ええ、さむいですから、かさを もって 行ってください。","Ya, karena dingin, bawalah payung."],
      ["A","はい、ありがとうございます。","Baik, terima kasih."]]}
  );
})();
