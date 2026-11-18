(function(){
  const d = window.DATA.N3;
  const r1 = "私は先月、新しいマンションに引っ越しました。引っ越したその日に、隣の部屋の人にあいさつに行きました。最近は近所づきあいをしない人が増えていると聞いていたので、少し心配でした。しかし、隣の田中さんはとても親切で、ごみの出し方や近くの安いスーパーのことを教えてくれました。そのおかげで、新しい生活にも早く慣れることができました。あいさつは小さなことですが、人と人との関係を作る大切な第一歩だと思います。";
  const r2 = "睡眠不足は、体の調子だけでなく、仕事や勉強の成績にも影響すると言われている。ある研究によると、毎日六時間より短くしか寝ない人は、七時間以上寝る人に比べて、ミスをする割合が高かったそうだ。忙しいと、つい寝る時間を減らして働いたり勉強したりしてしまう。しかし、十分に寝たほうが集中できるので、結局は効率がよくなる。大切なのは、長く起きていることではなく、よく眠って頭をしっかり働かせることだ。";
  const r3 = "【お知らせ】来週の月曜日から、社員食堂の利用時間が変わります。これまでは午前十一時三十分から午後二時まででしたが、混雑をさけるため、午前十一時から午後二時三十分までになります。なお、お弁当を持ってきた人も、食堂の席を使うことができます。ただし、混んでいるときは、食堂で食事をする人を先にしてください。ご不明な点は、総務課の山本まで連絡してください。";

  d.vocab.push(
    // kerja
    ["給料","きゅうりょう","gaji"],["転職","てんしょく","pindah kerja"],["採用","さいよう","perekrutan / penerimaan"],["面接","めんせつ","wawancara"],
    ["履歴書","りれきしょ","CV / riwayat hidup"],["出張","しゅっちょう","perjalanan dinas"],["契約","けいやく","kontrak"],["取引先","とりひきさき","mitra bisnis / klien"],
    ["上司","じょうし","atasan"],["同僚","どうりょう","rekan kerja"],["部下","ぶか","bawahan"],["締め切り","しめきり","tenggat waktu"],
    ["担当","たんとう","penanggung jawab"],["報告","ほうこく","laporan / melapor"],["営業","えいぎょう","penjualan / bisnis buka"],["昇進","しょうしん","promosi jabatan"],
    ["退職","たいしょく","berhenti bekerja"],["休憩","きゅうけい","istirahat"],["欠勤","けっきん","tidak masuk kerja"],["打ち合わせ","うちあわせ","pertemuan / rapat singkat"],
    // pendidikan
    ["授業","じゅぎょう","pelajaran / kelas"],["試験","しけん","ujian"],["卒業","そつぎょう","lulus"],["入学","にゅうがく","masuk sekolah"],
    ["専門","せんもん","bidang keahlian"],["研究","けんきゅう","penelitian"],["論文","ろんぶん","makalah / skripsi"],["奨学金","しょうがくきん","beasiswa"],
    ["単位","たんい","satuan kredit (SKS)"],["講義","こうぎ","kuliah"],["留学","りゅうがく","belajar ke luar negeri"],["成績","せいせき","nilai / prestasi"],
    ["教授","きょうじゅ","profesor"],["復習","ふくしゅう","mengulang pelajaran"],["予習","よしゅう","menyiapkan pelajaran"],
    // media
    ["報道","ほうどう","pemberitaan"],["放送","ほうそう","siaran"],["番組","ばんぐみ","acara (TV/radio)"],["記事","きじ","artikel berita"],
    ["広告","こうこく","iklan"],["宣伝","せんでん","promosi / publikasi"],["話題","わだい","topik pembicaraan"],["世論","よろん","opini publik"],
    ["取材","しゅざい","liputan / wawancara jurnalis"],["投稿","とうこう","mengunggah / kiriman"],["検索","けんさく","pencarian"],["画面","がめん","layar"],
    // sosial
    ["近所","きんじょ","lingkungan sekitar / tetangga"],["付き合い","つきあい","pergaulan"],["挨拶","あいさつ","salam"],["約束","やくそく","janji"],
    ["招待","しょうたい","undangan"],["協力","きょうりょく","kerja sama"],["親戚","しんせき","kerabat"],["世話","せわ","mengurus / merawat"],
    ["噂","うわさ","gosip / kabar burung"],["誤解","ごかい","salah paham"],["尊敬","そんけい","menghormati"],["態度","たいど","sikap"],
    // kesehatan
    ["症状","しょうじょう","gejala"],["診察","しんさつ","pemeriksaan dokter"],["治療","ちりょう","pengobatan"],["入院","にゅういん","rawat inap"],
    ["退院","たいいん","keluar dari rumah sakit"],["予防","よぼう","pencegahan"],["健康","けんこう","kesehatan"],["睡眠","すいみん","tidur"],
    ["栄養","えいよう","gizi"],["体調","たいちょう","kondisi badan"],["怪我","けが","luka / cedera"],["注射","ちゅうしゃ","suntikan"],
    ["痛み","いたみ","rasa sakit"],
    // emosi
    ["不安(な)","ふあん","cemas / tidak tenang"],["安心","あんしん","lega"],["緊張","きんちょう","tegang / gugup"],["感動","かんどう","terharu / tergugah"],
    ["後悔","こうかい","penyesalan"],["興奮","こうふん","bersemangat / terangsang"],["残念(な)","ざんねん","disayangkan"],["満足","まんぞく","puas"],
    ["心配","しんぱい","khawatir"],["驚く","おどろく","terkejut"],["悔しい","くやしい","kesal / penasaran (karena kalah)"],["寂しい","さびしい","kesepian"],
    ["恥ずかしい","はずかしい","malu"],
    // kata kerja majemuk
    ["取り入れる","とりいれる","mengadopsi / memasukkan"],["見直す","みなおす","meninjau ulang"],["書き直す","かきなおす","menulis ulang"],["思い出す","おもいだす","teringat"],
    ["話し合う","はなしあう","berdiskusi"],["付け加える","つけくわえる","menambahkan"],["受け取る","うけとる","menerima"],["引き受ける","ひきうける","menyanggupi"],
    ["乗り換える","のりかえる","berpindah (kendaraan)"],["見送る","みおくる","mengantar kepergian"],["立ち止まる","たちどまる","berhenti melangkah"],["追いつく","おいつく","menyusul"],
    ["使いこなす","つかいこなす","menguasai pemakaian"],["通りかかる","とおりかかる","kebetulan lewat"],["言い出す","いいだす","mulai mengatakan / mengusulkan"],
    // kata sifat-na
    ["地味(な)","じみ","sederhana / tidak mencolok"],["派手(な)","はで","mencolok / meriah"],["退屈(な)","たいくつ","membosankan"],["平気(な)","へいき","tidak apa-apa / tenang"],
    ["勝手(な)","かって","seenaknya"],["余計(な)","よけい","berlebihan / tidak perlu"],["頑固(な)","がんこ","keras kepala"],["素直(な)","すなお","jujur / penurut"],
    ["贅沢(な)","ぜいたく","mewah / boros"],["不便(な)","ふべん","tidak praktis"],["丁寧(な)","ていねい","sopan / teliti"],["面倒(な)","めんどう","merepotkan"],
    // kata keterangan
    ["次第に","しだいに","lambat laun"],["徐々に","じょじょに","sedikit demi sedikit"],["思わず","おもわず","tanpa sadar"],["突然","とつぜん","mendadak"],
    ["相変わらず","あいかわらず","seperti biasa"],["偶然","ぐうぜん","kebetulan"],["当然","とうぜん","tentu saja"],["例えば","たとえば","misalnya"],
    ["一応","いちおう","untuk jaga-jaga / sekadarnya"],["何とか","なんとか","entah bagaimana / sebisa mungkin"],["せっかく","せっかく","sudah susah payah / sayang kalau tidak"],["わざわざ","わざわざ","dengan sengaja repot-repot"],
    ["とにかく","とにかく","pokoknya / bagaimanapun"],["ついに","ついに","akhirnya"],["決して","けっして","sama sekali tidak (dengan negatif)"],
    // katakana
    ["スケジュール","スケジュール","jadwal"],["ストレス","ストレス","stres"],["プレッシャー","プレッシャー","tekanan"],["ルール","ルール","aturan"],
    ["マナー","マナー","tata krama"],["サービス","サービス","layanan"],["ミス","ミス","kesalahan"],["アイデア","アイデア","gagasan"],
    ["チャンス","チャンス","kesempatan"],["トラブル","トラブル","masalah / kesulitan"],["コミュニケーション","コミュニケーション","komunikasi"],["リラックス","リラックス","bersantai"],
    // ungkapan
    ["お疲れ様です","おつかれさまです","terima kasih atas kerja kerasnya"],["お先に失礼します","おさきにしつれいします","permisi, saya pulang duluan"],["お大事に","おだいじに","semoga lekas sembuh"],["気になる","きになる","jadi penasaran / mengganjal"],
    ["気が合う","きがあう","cocok (karakter)"],["頭にくる","あたまにくる","jengkel / naik pitam"],["手がかかる","てがかかる","merepotkan / butuh perhatian"],["役に立つ","やくにたつ","berguna"],
    ["目立つ","めだつ","menonjol"],["気がつく","きがつく","menyadari"],["手続き","てつづき","prosedur / urusan administrasi"]
  );

  d.grammar.push(
    {p:"〜について",m:"mengenai ~ / tentang ~",e:[["この問題について、みんなで話し合いましょう。","Mari kita diskusikan bersama mengenai masalah ini."],["日本の文化について調べています。","Saya sedang meneliti tentang budaya Jepang."]],n:"Menyatakan topik pembicaraan / pemikiran. Bentuk sopan: 〜につきまして. Sebelum kata benda: 〜についての＋N."},
    {p:"〜として",m:"sebagai ~",e:[["彼は留学生として、この大学で学んでいます。","Dia belajar di universitas ini sebagai mahasiswa asing."],["この町は観光地として有名です。","Kota ini terkenal sebagai tempat wisata."]],n:"Menyatakan kedudukan / peran / kualifikasi. Sebelum kata benda: 〜としての＋N."},
    {p:"〜によって",m:"tergantung ~ / oleh ~ / dengan ~",e:[["国によって、習慣が違います。","Kebiasaan berbeda tergantung negaranya."],["この絵はピカソによって描かれた。","Lukisan ini dilukis oleh Picasso."]],n:"(1) tergantung (A によって B が違う), (2) pelaku dalam kalimat pasif, (3) cara / sarana. Sebelum kata benda: 〜による＋N."},
    {p:"〜わけだ",m:"jadi ~ / pantas saja ~ (kesimpulan logis)",e:[["毎日三時間も練習したのだから、上手なわけだ。","Latihan tiga jam tiap hari, pantas saja dia mahir."],["十時間かかるのか。それは疲れるわけだ。","Butuh sepuluh jam ya. Pantas saja capek."]],n:"Menyatakan kesimpulan wajar dari fakta sebelumnya atau alasan yang baru dipahami. Negatif: 〜わけがない = mustahil; 〜わけではない = bukan berarti."},
    {p:"〜ものだ",m:"memang ~ / seharusnya ~ (hal umum)",e:[["年をとると、体力が落ちるものだ。","Kalau bertambah usia, tenaga memang menurun."],["子どもは親の言うことを聞くものだ。","Anak itu seharusnya menurut pada orang tua."]],n:"Menyatakan kebenaran umum / kewajaran, atau nasihat moral. Bentuk lain: 〜たものだ = dulu sering ~ (kenangan)."},
    {p:"〜ことはない",m:"tidak perlu ~",e:[["まだ時間があるから、急ぐことはありません。","Masih ada waktu, jadi tidak perlu terburu-buru."],["そんなに心配することはない。","Tidak perlu sekhawatir itu."]],n:"Kata kerja bentuk kamus + ことはない = tidak perlu. Berbeda dengan 〜たことがない (belum pernah)."},
    {p:"〜ようがない",m:"tidak ada cara untuk ~",e:[["住所がわからないので、手紙を出しようがない。","Karena tidak tahu alamatnya, tidak ada cara untuk mengirim surat."],["こんなに壊れていては、直しようがない。","Kalau rusak separah ini, tidak mungkin diperbaiki."]],n:"Kata kerja bentuk ます (tanpa ます) + ようがない. Mengatakan secara objektif bahwa tidak ada cara, bukan karena tidak mau."},
    {p:"〜かどうか",m:"apakah ~ atau tidak",e:[["試験に合格したかどうか、まだわかりません。","Belum tahu apakah lulus ujian atau tidak."],["彼が来るかどうか、聞いてみます。","Saya akan tanya apakah dia datang atau tidak."]],n:"Anak kalimat pertanyaan ya/tidak yang disisipkan dalam kalimat. Jika ada kata tanya: 〜か (tanpa どうか), mis. 何時に来るか."},
    {p:"〜ばかりでなく〜も",m:"tidak hanya ~ tetapi juga ~",e:[["先生は優しいばかりでなく、教え方も上手だ。","Guru tidak hanya baik hati, tetapi juga pandai mengajar."],["彼は英語ばかりでなく、中国語も話せる。","Dia tidak hanya bisa bahasa Inggris, tetapi juga bahasa Mandarin."]],n:"Sinonim: 〜だけでなく〜も / 〜のみならず (formal). Sebelum kata sifat-na: 〜なばかりでなく."},
    {p:"〜おかげで／〜せいで",m:"berkat ~ / gara-gara ~",e:[["友達が手伝ってくれたおかげで、早く終わった。","Berkat teman yang membantu, selesai lebih cepat."],["雨のせいで、試合が中止になった。","Gara-gara hujan, pertandingan dibatalkan."]],n:"おかげで = penyebab hasil baik (rasa syukur); せいで = penyebab hasil buruk (menyalahkan). Sebelum benda: Nの / kata kerja bentuk biasa."},
    {p:"〜ついでに",m:"sekalian ~ / sambil lewat",e:[["駅へ行くついでに、この手紙を出してきてくれない？","Sekalian ke stasiun, bisa tolong kirimkan surat ini?"],["買い物のついでに、図書館にも寄った。","Sekalian belanja, saya mampir ke perpustakaan juga."]],n:"Memanfaatkan kesempatan suatu kegiatan utama untuk melakukan hal lain. Kata kerja kamus/た / Nの + ついでに."},
    {p:"〜たとたん(に)",m:"begitu ~ langsung ~",e:[["ドアを開けたとたん、猫が飛び出してきた。","Begitu pintu dibuka, kucing langsung melompat keluar."],["立ち上がったとたんに、めまいがした。","Begitu berdiri, langsung pusing."]],n:"Kata kerja bentuk た + とたん. Diikuti kejadian tak terduga; tidak dipakai untuk kehendak/perintah pembicara."},
    {p:"〜てほしい",m:"ingin (orang lain) ~",e:[["母にもっと早く帰ってきてほしいと言われた。","Saya diminta ibu supaya pulang lebih cepat."],["もう少し静かにしてほしいです。","Saya ingin Anda sedikit lebih tenang."]],n:"Kata kerja bentuk て + ほしい = keinginan agar orang lain melakukan sesuatu. Negatif: 〜ないでほしい. Keinginan diri sendiri: 〜たい."},
    {p:"〜かわりに",m:"sebagai ganti ~ / tapi di sisi lain ~",e:[["今日は私が料理を作るかわりに、あなたは皿を洗ってね。","Hari ini aku masak, sebagai gantinya kamu cuci piring ya."],["この部屋は広いかわりに、駅から遠い。","Kamar ini luas, tapi sebagai gantinya jauh dari stasiun."]],n:"(1) pengganti: Nの／V + かわりに; (2) timbal balik / sisi lain: bentuk biasa + かわりに."}
  );

  d.kanji.push(
    ["採","サイ／とる","memetik, merekrut"],["職","ショク","pekerjaan"],["契","ケイ／ちぎる","berjanji, kontrak"],["約","ヤク","janji, ringkas"],["締","テイ／しめる","mengikat, menutup"],
    ["担","タン／かつぐ・になう","memikul"],["昇","ショウ／のぼる","naik"],["退","タイ／しりぞく","mundur"],["欠","ケツ／かける","kurang, absen"],["授","ジュ／さずける","memberi, mengajarkan"],
    ["卒","ソツ","lulus, akhir"],["専","セン／もっぱら","khusus"],["研","ケン／とぐ","mengasah, meneliti"],["究","キュウ／きわめる","menyelidiki"],["奨","ショウ","menganjurkan"],
    ["講","コウ","kuliah, ceramah"],["留","リュウ／とめる・とまる","menetap, menahan"],["績","セキ","prestasi"],["症","ショウ","gejala penyakit"],["療","リョウ","mengobati"],
    ["院","イン","institusi, rumah sakit"],["予","ヨ","sebelumnya"],["防","ボウ／ふせぐ","mencegah"],["睡","スイ","tidur"],["養","ヨウ／やしなう","memelihara"],
    ["怪","カイ／あやしい","aneh, mencurigakan"],["緊","キン","tegang, ketat"],["張","チョウ／はる","merentang"],["誤","ゴ／あやまる","salah"],["態","タイ","keadaan, sikap"]
  );

  d.questions.push(
    // kanji (7)
    {t:"kanji",q:"「給料」の よみかたは？",o:["きゅうりょう","きゅうりょ","きゅりょう","ぎゅうりょう"],a:0,x:"給料 = きゅうりょう (gaji)."},
    {t:"kanji",q:"「転職」の よみかたは？",o:["でんしょく","てんじょく","てんしょく","てんそく"],a:2,x:"転職 = てんしょく (pindah kerja)."},
    {t:"kanji",q:"「奨学金」の よみかたは？",o:["しょがくきん","しょうがくきん","じょうがくきん","しょうがっきん"],a:1,x:"奨学金 = しょうがくきん (beasiswa)."},
    {t:"kanji",q:"「睡眠」の よみかたは？",o:["ずいみん","すいめん","すいびん","すいみん"],a:3,x:"睡眠 = すいみん (tidur)."},
    {t:"kanji",q:"「怪我」の よみかたは？",o:["けが","けか","げが","かいが"],a:0,x:"怪我 = けが (luka). Bacaan khusus (jukujikun)."},
    {t:"kanji",q:"「緊張」の よみかたは？",o:["きんじょう","ぎんちょう","きんちょう","きんちょ"],a:2,x:"緊張 = きんちょう (tegang)."},
    {t:"kanji",q:"「態度」の よみかたは？",o:["たいと","たいど","だいど","たいどう"],a:1,x:"態度 = たいど (sikap)."},
    // vocab (7)
    {t:"vocab",q:"レポートの ＿＿ は 金曜日の 五時です。",o:["締め切り","昇進","退職","休憩"],a:0,x:"締め切り = tenggat waktu."},
    {t:"vocab",q:"熱が 高かったので、病院で 医者の ＿＿ を 受けました。",o:["契約","報道","診察","宣伝"],a:2,x:"診察を受ける = diperiksa dokter."},
    {t:"vocab",q:"三月に 大学を ＿＿ して、四月から 銀行で 働きます。",o:["入学","卒業","留学","退院"],a:1,x:"大学を卒業する = lulus dari universitas. 入学 memakai partikel に."},
    {t:"vocab",q:"試合に 負けて、とても ＿＿ です。",o:["楽しい","おいしい","忙しい","悔しい"],a:3,x:"悔しい = kesal/penasaran karena kalah."},
    {t:"vocab",q:"友達の 話が おもしろくて、＿＿ 笑って しまいました。",o:["わざわざ","思わず","次第に","相変わらず"],a:1,x:"思わず = tanpa sadar (spontan)."},
    {t:"vocab",q:"山田さんは まじめで、＿＿ 遅刻した ことが ありません。",o:["突然","偶然","決して","次第に"],a:2,x:"決して + negatif = sama sekali tidak."},
    {t:"vocab",q:"仕事が 忙しくて ＿＿ が たまり、夜も よく 眠れない。",o:["マナー","ルール","アイデア","ストレス"],a:3,x:"ストレスがたまる = stres menumpuk."},
    // grammar (10)
    {t:"grammar",q:"この 問題 ＿＿、みんなで 話し合いましょう。",o:["について","として","によって","かわりに"],a:0,x:"〜について = mengenai."},
    {t:"grammar",q:"彼は 留学生 ＿＿、この 大学で 学んで います。",o:["について","によって","として","ついでに"],a:2,x:"〜として = sebagai (status)."},
    {t:"grammar",q:"国 ＿＿ 習慣が 違います。",o:["として","について","おかげで","によって"],a:3,x:"〜によって違う = berbeda tergantung."},
    {t:"grammar",q:"毎日 三時間も 練習したのだから、上手な ＿＿ だ。",o:["わけ","ことはない","ようがない","かどうか"],a:0,x:"〜わけだ = pantas saja / kesimpulan logis."},
    {t:"grammar",q:"住所が わからないので、手紙を 出し ＿＿。",o:["ことはない","ばかりでなく","ようがない","かわりに"],a:2,x:"〜ようがない = tidak ada cara untuk."},
    {t:"grammar",q:"試験に 合格した ＿＿ わかりませんが、全力を 尽くしました。",o:["ばかりでなく","かどうか","ついでに","とたん"],a:1,x:"〜かどうか = apakah ~ atau tidak."},
    {t:"grammar",q:"先生は 優しい ＿＿、教え方も 上手です。",o:["おかげで","ついでに","ばかりでなく","とたん"],a:2,x:"〜ばかりでなく〜も = tidak hanya ~ tetapi juga ~."},
    {t:"grammar",q:"友達が 手伝って くれた ＿＿、早く 終わりました。",o:["せいで","おかげで","とたん","ことはない"],a:1,x:"Hasil baik: おかげで. せいで untuk hasil buruk."},
    {t:"grammar",q:"駅へ 行く ＿＿、この 手紙を 出して きて くれませんか。",o:["とたん","かわりに","ばかりでなく","ついでに"],a:3,x:"〜ついでに = sekalian."},
    {t:"grammar",q:"ドアを 開けた ＿＿、猫が 飛び出して きました。",o:["とたん","ついでに","わけ","ことはない"],a:0,x:"V-た + とたん = begitu ~ langsung (kejadian tak terduga)."},
    // reading (6)
    {t:"reading",p:r1,q:"筆者は 引っ越した日に 何を しましたか。",o:["近くの スーパーに 行った","ごみの 出し方を 調べた","隣の 部屋の 人に あいさつに 行った","田中さんと 食事を した"],a:2,x:"Kalimat kedua: 隣の部屋の人にあいさつに行きました."},
    {t:"reading",p:r1,q:"筆者の 考えに 合う ものは どれですか。",o:["近所づきあいは しないほうが 楽だ","あいさつは 人間関係を 作る 大切な 第一歩だ","引っ越しは 新しい 生活に 慣れるのが 難しい","スーパーは 安い ところを 選ぶべきだ"],a:1,x:"Kalimat terakhir: あいさつは…大切な第一歩だと思います."},
    {t:"reading",p:r2,q:"研究によると、ミスを する 割合が 高かったのは どんな 人ですか。",o:["七時間以上 寝る 人","毎日 六時間より 短くしか 寝ない 人","夜 遅くまで 勉強する 人","朝 早く 起きる 人"],a:1,x:"Disebutkan: 毎日六時間より短くしか寝ない人は ミスをする割合が高かった."},
    {t:"reading",p:r2,q:"筆者の 意見は どれですか。",o:["忙しい ときは 寝る 時間を 減らすべきだ","十分に 寝る ほうが、結局は 効率が よくなる","長く 起きて いる ことが 大切だ","七時間以上 寝ると 体調が 悪くなる"],a:1,x:"「十分に寝たほうが…結局は効率がよくなる」."},
    {t:"reading",p:r3,q:"来週の 月曜日から、社員食堂は どう なりますか。",o:["場所が 変わる","お弁当は 使えなくなる","午後二時に 閉まる","利用できる 時間が 前より 長くなる"],a:3,x:"Dulu 11:30-14:00 (2,5 jam), sekarang 11:00-14:30 (3,5 jam)."},
    {t:"reading",p:r3,q:"お弁当を 持ってきた 人に ついて、正しい ものは どれですか。",o:["食堂の 席は 使えない","混んで いるときも 自由に 使える","食堂の 席を 使えるが、混んで いるときは 食堂で 食事を する 人が 先だ","使う 前に 総務課に 申し込む"],a:2,x:"Boleh pakai kursi, tetapi saat ramai orang yang makan di kantin didahulukan."}
  );

  d.convo.push(
    {id:"n3-4",title:"Mengajukan cuti kepada atasan",topic:"Kantor",lines:[
      ["社員","課長、今、少々よろしいでしょうか。","Kepala seksi, apakah Anda ada waktu sebentar?"],
      ["課長","ああ、いいよ。どうしたの？","Ya, boleh. Ada apa?"],
      ["社員","実は、来月の十日から十二日まで、休みを取らせていただきたいのですが。","Sebenarnya, saya ingin mengambil cuti dari tanggal 10 sampai 12 bulan depan."],
      ["課長","三日間か。何か 予定でも あるの？","Tiga hari ya. Ada acara?"],
      ["社員","はい、故郷の妹が結婚するので、式に出席するために帰りたいんです。","Ya, adik saya di kampung halaman akan menikah, saya ingin pulang untuk menghadiri upacaranya."],
      ["課長","それはおめでとう。仕事のほうは、大丈夫かな？","Selamat ya. Soal pekerjaan, apakah aman?"],
      ["社員","はい、その週に出す資料は、休みに入る前に仕上げておきます。","Ya, dokumen yang harus dikirim minggu itu akan saya selesaikan sebelum cuti."],
      ["課長","わかった。じゃあ、あとで休暇届を出してください。","Baik. Kalau begitu, nanti serahkan formulir cuti."],
      ["社員","ありがとうございます。今日中に提出いたします。","Terima kasih. Akan saya serahkan hari ini juga."]]},
    {id:"n3-5",title:"Mengeluh soal suara ke tetangga",topic:"Tetangga",lines:[
      ["山本","こんばんは。上の階の山本ですが、少しお話ししてもよろしいですか。","Selamat malam. Saya Yamamoto dari lantai atas, boleh saya bicara sebentar?"],
      ["佐藤","あ、はい。どうかしましたか。","Oh, ya. Ada apa?"],
      ["山本","実は、最近、夜遅くに音楽の音が聞こえて、なかなか眠れないんです。","Sebenarnya akhir-akhir ini suara musik terdengar larut malam, sehingga saya sulit tidur."],
      ["佐藤","えっ、そうでしたか。気がつかなくて、申し訳ありません。","Eh, begitu ya. Maaf, saya tidak menyadarinya."],
      ["山本","いえ、お仕事で遅く帰られるのは分かっているんですが。","Tidak apa-apa. Saya tahu Anda pulang kerja malam."],
      ["佐藤","夜十時を過ぎたら、ヘッドホンを使うようにします。","Setelah jam 10 malam, saya akan berusaha memakai headphone."],
      ["山本","そうしていただけると、助かります。","Kalau begitu, saya sangat terbantu."],
      ["佐藤","これからは気をつけますので、また何かあれば、遠慮なく言ってください。","Mulai sekarang saya akan hati-hati, jadi kalau ada apa-apa lagi, katakan saja jangan sungkan."]]},
    {id:"n3-6",title:"Membuka rekening di bank",topic:"Bank",lines:[
      ["客","すみません、口座を開設したいのですが。","Permisi, saya ingin membuka rekening."],
      ["行員","かしこまりました。本人確認書類はお持ちでしょうか。","Baik. Apakah Anda membawa dokumen identitas?"],
      ["客","はい、在留カードと、住民票を持ってきました。","Ya, saya membawa kartu izin tinggal dan surat keterangan domisili."],
      ["行員","ありがとうございます。では、こちらの用紙に、お名前とご住所をご記入ください。","Terima kasih. Silakan isi nama dan alamat pada formulir ini."],
      ["客","はい。あの、印鑑は必要ですか。","Baik. Apakah saya perlu stempel pribadi?"],
      ["行員","サインでも大丈夫ですので、印鑑がなくても作れます。","Tanda tangan pun cukup, jadi bisa dibuat tanpa stempel."],
      ["客","よかった。キャッシュカードは、いつ届きますか。","Syukurlah. Kapan kartu ATM-nya sampai?"],
      ["行員","一週間ほどで、ご自宅に郵送いたします。","Sekitar satu minggu, akan kami kirim ke rumah Anda."],
      ["客","わかりました。ありがとうございました。","Mengerti. Terima kasih banyak."]]},
    {id:"n3-7",title:"Menjenguk teman di rumah sakit",topic:"Kesehatan",lines:[
      ["健太","遅くなってごめん。具合はどう？","Maaf aku terlambat. Bagaimana keadaanmu?"],
      ["大輔","来てくれてありがとう。だいぶよくなったよ。","Terima kasih sudah datang. Sudah jauh lebih baik."],
      ["健太","自転車で転んだと聞いて、びっくりしたよ。","Aku kaget dengar kamu jatuh dari sepeda."],
      ["大輔","うん、足の骨を折ってしまって、二週間も入院することになったんだ。","Ya, kakiku patah, jadi harus dirawat dua minggu."],
      ["健太","それは大変だったね。痛みは、もうないの？","Berat sekali ya. Apakah sudah tidak sakit?"],
      ["大輔","薬のおかげで、今はそれほど痛くないよ。でも、毎日退屈で。","Berkat obat, sekarang tidak terlalu sakit. Tapi tiap hari membosankan."],
      ["健太","じゃあ、これ。おもしろそうな本を持ってきたよ。","Kalau begitu, ini. Aku bawakan buku yang kelihatannya seru."],
      ["大輔","ありがとう。助かるよ。","Terima kasih. Sangat membantu."],
      ["健太","無理しないで、ゆっくり休んでね。また来るから。","Jangan memaksakan diri, istirahatlah dengan tenang. Aku akan datang lagi."]]}
  );
})();
