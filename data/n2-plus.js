(function(){
  const d = window.DATA.N2;
  const r1 = "日本では、まだ食べられるのに捨てられてしまう「食品ロス」が、年間で約五百万トンにのぼると言われている。その半分近くは家庭から出ており、買いすぎた食材を使い切れずに捨ててしまうことが主な原因だ。一方、飲食店やスーパーでも、賞味期限が近い商品が売れ残って廃棄される問題が起きている。こうした状況を改善するため、期限が近い商品を割引して販売する店が増えたほか、余った料理を安く買えるスマートフォンのアプリも登場した。消費者の側でも、買い物の前に冷蔵庫の中身を確認し、必要な分だけ買うよう心がける人が少しずつ増えている。ただし、食品ロスを大幅に減らすには、個人の努力だけでなく、企業や社会全体の仕組みづくりが欠かせないという指摘もある。";
  const r2 = "最近は、紙の本ではなく、スマートフォンやタブレットで読む電子書籍を利用する人が増えている。電子書籍の最大の利点は、何冊でも持ち歩けることだ。旅行や出張の際にも荷物が重くならず、気になった本をその場ですぐに購入できる。また、文字の大きさを自由に変えられるため、高齢の読者にも好評である。しかし、その一方で、紙の本を好む人も依然として多い。ページをめくる感触や、本棚に本が並んでいる様子を楽しめることが、その理由として挙げられる。さらに、画面を長時間見続けると目が疲れやすいという意見もある。実際、ある調査では、電子書籍を利用する人の約七割が、紙の本も併用していると答えた。つまり、二つは対立するものではなく、場面に応じて使い分けられているのである。";
  const r3 = "全国の商店街では、シャッターを下ろしたままの店が増えている。大型のショッピングセンターやインターネット通販が普及し、客が減ったことが大きな原因である。さらに、店主の高齢化も深刻で、後を継ぐ人がいないために廃業する店も少なくない。こうした中、ある町では、空き店舗を安く貸し出し、若い人が新しく店を開きやすいようにする取り組みを始めた。その結果、おしゃれなカフェや手作りの雑貨を売る店が次々とオープンし、遠くから訪れる観光客も現れた。商店街の活気を取り戻すためには、昔ながらの店を守るだけでなく、新しい人や考えを受け入れていく柔軟さが必要だと、この町の関係者は話している。大切なのは、地域の人々が自分たちの町の将来を真剣に考えることである。";

  d.vocab.push(
    ["契約","けいやく","kontrak"],["交渉","こうしょう","negosiasi"],["提携","ていけい","kerja sama / aliansi"],["請求","せいきゅう","penagihan / tuntutan"],
    ["納期","のうき","tenggat pengiriman"],["予算","よさん","anggaran"],["収益","しゅうえき","pendapatan / laba"],["赤字","あかじ","defisit / rugi"],
    ["黒字","くろじ","surplus / untung"],["株主","かぶぬし","pemegang saham"],["取引","とりひき","transaksi"],["宣伝","せんでん","promosi / iklan"],
    ["経費","けいひ","biaya operasional"],["昇進","しょうしん","kenaikan jabatan"],["転勤","てんきん","dipindahtugaskan"],["退職","たいしょく","berhenti kerja / pensiun"],
    ["採用","さいよう","merekrut / mengadopsi"],["残業","ざんぎょう","lembur"],["業績","ぎょうせき","kinerja usaha"],["打ち合わせ","うちあわせ","rapat singkat / pembahasan awal"],
    ["在庫","ざいこ","stok barang"],["設立","せつりつ","mendirikan"],["倒産","とうさん","bangkrut"],
    ["福祉","ふくし","kesejahteraan sosial"],["少子化","しょうしか","menurunnya angka kelahiran"],["高齢化","こうれいか","penuaan penduduk"],["格差","かくさ","kesenjangan"],
    ["差別","さべつ","diskriminasi"],["偏見","へんけん","prasangka"],["世論","よろん","opini publik"],["治安","ちあん","keamanan umum"],
    ["防災","ぼうさい","pencegahan bencana"],["災害","さいがい","bencana"],["被害","ひがい","kerugian / korban"],["支援","しえん","dukungan / bantuan"],
    ["貧困","ひんこん","kemiskinan"],["住民","じゅうみん","penduduk setempat"],
    ["規則","きそく","peraturan"],["違反","いはん","pelanggaran"],["義務","ぎむ","kewajiban"],["権利","けんり","hak"],
    ["裁判","さいばん","pengadilan / persidangan"],["訴える","うったえる","menggugat / mengeluhkan"],["証拠","しょうこ","bukti"],["逮捕","たいほ","penangkapan"],
    ["賠償","ばいしょう","ganti rugi"],["規制","きせい","regulasi / pembatasan"],
    ["実験","じっけん","eksperimen"],["仮説","かせつ","hipotesis"],["観察","かんさつ","pengamatan"],["資源","しげん","sumber daya"],
    ["温暖化","おんだんか","pemanasan (global)"],["遺伝","いでん","keturunan / genetik"],["細胞","さいぼう","sel"],["物質","ぶっしつ","zat / materi"],
    ["分析","ぶんせき","analisis"],
    ["報道","ほうどう","pemberitaan"],["取材","しゅざい","meliput / mencari bahan berita"],["記事","きじ","artikel / berita"],["視聴者","しちょうしゃ","pemirsa"],
    ["速報","そくほう","berita kilat"],["広告","こうこく","iklan"],["掲載","けいさい","memuat (di media)"],["評判","ひょうばん","reputasi / popularitas"],
    ["取り入れる","とりいれる","mengadopsi / memasukkan"],["見逃す","みのがす","terlewat / membiarkan"],["引き受ける","ひきうける","menerima (tugas)"],["受け入れる","うけいれる","menerima / menampung"],
    ["呼びかける","よびかける","menyerukan"],["申し込む","もうしこむ","mendaftar / mengajukan"],["持ち込む","もちこむ","membawa masuk"],["組み立てる","くみたてる","merakit / menyusun"],
    ["立ち直る","たちなおる","pulih / bangkit kembali"],["思いつく","おもいつく","terpikir / mendapat ide"],["取り組む","とりくむ","menggarap serius"],["乗り越える","のりこえる","mengatasi / melampaui"],
    ["問い合わせる","といあわせる","menanyakan / mengonfirmasi"],["張り切る","はりきる","bersemangat"],["携わる","たずさわる","terlibat dalam"],
    ["一石二鳥","いっせきにちょう","sekali dayung dua pulau terlampaui"],["自給自足","じきゅうじそく","swasembada"],["老若男女","ろうにゃくなんにょ","tua muda, pria wanita"],["十人十色","じゅうにんといろ","lain orang lain selera"],
    ["以心伝心","いしんでんしん","saling paham tanpa kata"],["臨機応変","りんきおうへん","menyesuaikan diri dengan keadaan"],["四苦八苦","しくはっく","kesusahan besar"],["五里霧中","ごりむちゅう","bingung tak tahu arah"],
    ["自画自賛","じがじさん","memuji diri sendiri"],["日進月歩","にっしんげっぽ","kemajuan pesat tiap hari"],["試行錯誤","しこうさくご","coba-coba (trial and error)"],
    ["少なくとも","すくなくとも","setidaknya"],["決して","けっして","sama sekali (tidak)"],["概して","がいして","pada umumnya"],["極めて","きわめて","sangat / amat"],
    ["間もなく","まもなく","sebentar lagi"],["絶えず","たえず","terus-menerus"],["次々","つぎつぎ","satu demi satu"],["相当","そうとう","cukup banyak / lumayan"],
    ["辛うじて","かろうじて","nyaris / dengan susah payah"],["むしろ","むしろ","malah / lebih baik"],["わざわざ","わざわざ","dengan sengaja repot-repot"],["早速","さっそく","segera / langsung"],
    ["いきなり","いきなり","tiba-tiba"],["ひとまず","ひとまず","untuk sementara"],["思わず","おもわず","tanpa sadar"],["依然","いぜん","masih tetap"],
    ["強引(な)","ごういん","memaksa / main kuasa"],["貴重(な)","きちょう","berharga / langka"],["莫大(な)","ばくだい","sangat besar (jumlah)"],["懸命(な)","けんめい","sungguh-sungguh"],
    ["率直(な)","そっちょく","terus terang"],["円滑(な)","えんかつ","lancar"],["巧妙(な)","こうみょう","cerdik / lihai"],["多彩(な)","たさい","beraneka ragam"],
    ["柔軟(な)","じゅうなん","luwes / fleksibel"],["厄介(な)","やっかい","merepotkan"],["中途半端(な)","ちゅうとはんぱ","setengah-setengah"],
    ["姿勢","しせい","sikap / postur"],["価値観","かちかん","nilai hidup / cara pandang"],["側面","そくめん","sisi / aspek"],["要因","よういん","faktor penyebab"],
    ["背景","はいけい","latar belakang"],["過程","かてい","proses"],["段階","だんかい","tahap"],["範囲","はんい","cakupan"],
    ["基準","きじゅん","standar / kriteria"],["風潮","ふうちょう","tren / arus zaman"],["本質","ほんしつ","hakikat"],["現象","げんしょう","fenomena"],
    ["矛盾","むじゅん","kontradiksi"]
  );

  d.grammar.push(
    {p:"〜をはじめ（として）",m:"mulai dari ~ (dan lain-lain) / termasuk ~ sebagai yang utama",e:[["社長をはじめ、社員全員が式典に参加した。","Mulai dari direktur utama, seluruh karyawan ikut hadir di upacara."],["この店は日本料理をはじめ、世界各国の料理が楽しめる。","Toko ini menyajikan masakan dari seluruh dunia, mulai dari masakan Jepang."]],n:"Menyebut contoh paling menonjol lalu menyiratkan yang lain. Pola: N をはじめ、N など."},
    {p:"〜を通じて／〜を通して",m:"melalui ~ / sepanjang ~",e:[["友人を通じて、彼と知り合った。","Saya berkenalan dengannya melalui teman."],["この地方は一年を通じて温暖だ。","Daerah ini hangat sepanjang tahun."]],n:"Bisa berarti perantara/sarana, atau rentang waktu 'sepanjang'."},
    {p:"〜をめぐって",m:"seputar ~ (perdebatan / pertentangan)",e:[["遺産をめぐって、兄弟が争っている。","Kakak-beradik bertengkar soal warisan."],["新しい制度をめぐり、議論が続いている。","Perdebatan terus berlangsung seputar sistem baru."]],n:"Biasanya diikuti kata seperti 争う, 議論, 対立. Bentuk ~をめぐる＋N."},
    {p:"〜に基づいて",m:"berdasarkan ~",e:[["調査の結果に基づいて、計画を立てた。","Kami menyusun rencana berdasarkan hasil survei."],["事実に基づく報道を心がけている。","Kami berusaha membuat pemberitaan yang berdasarkan fakta."]],n:"Sebelum kata benda: 〜に基づく＋N. Menekankan dasar/landasan."},
    {p:"〜にしたがって",m:"seiring ~ / sesuai ~",e:[["経験を積むにしたがって、仕事が楽しくなってきた。","Seiring bertambahnya pengalaman, pekerjaan terasa makin menyenangkan."],["係員の指示にしたがって行動してください。","Harap bertindak sesuai arahan petugas."]],n:"V辞書形＋にしたがって = perubahan paralel; N＋にしたがって = mengikuti/sesuai."},
    {p:"〜に応じて",m:"sesuai dengan ~ / menyesuaikan ~",e:[["収入に応じて、税金の額が決まる。","Jumlah pajak ditentukan sesuai penghasilan."],["客の要望に応じて、サービスを変える。","Layanan diubah sesuai permintaan pelanggan."]],n:"Sesuatu berubah mengikuti kondisi. Bentuk ~に応じた＋N."},
    {p:"〜にかかわらず",m:"tanpa memandang ~",e:[["天気にかかわらず、試合は行われる。","Pertandingan tetap diadakan apa pun cuacanya."],["経験の有無にかかわらず、誰でも応募できる。","Siapa pun boleh melamar, ada atau tidak ada pengalaman."]],n:"Sering dengan pasangan berlawanan (有無, 大小, 晴雨). Mirip 〜にかかわりなく."},
    {p:"〜からといって",m:"meskipun ~ (belum tentu ~)",e:[["高いからといって、品質がいいとは限らない。","Walau mahal, belum tentu kualitasnya bagus."],["日本人だからといって、全員が漢字を書けるわけではない。","Meski orang Jepang, tidak semuanya bisa menulis kanji."]],n:"Biasanya diikuti 〜とは限らない／〜わけではない／〜てはいけない."},
    {p:"〜ものの",m:"memang ~, tetapi ~",e:[["資格は取ったものの、仕事はまだ見つからない。","Sertifikat memang sudah didapat, tetapi pekerjaan belum ketemu."],["新しい靴を買ったものの、まだ一度もはいていない。","Sepatu baru memang sudah dibeli, tetapi belum pernah dipakai."]],n:"Hasil di belakang tidak sesuai harapan dari bagian depan. Bentuk biasa + ものの."},
    {p:"〜にもかかわらず",m:"meskipun ~",e:[["雨にもかかわらず、大勢の人が集まった。","Meskipun hujan, banyak orang berkumpul."],["忙しいにもかかわらず、手伝ってくれた。","Meskipun sibuk, dia membantu saya."]],n:"Bentuk formal dari のに. Na-adj／N: 〜であるにもかかわらず."},
    {p:"〜どころか",m:"jangankan ~, malah ~",e:[["貯金どころか、借金がある。","Jangankan tabungan, malah ada utang."],["彼は泳ぐどころか、水に入ることもできない。","Jangankan berenang, masuk ke air pun dia tidak bisa."]],n:"Bagian belakang menyatakan kebalikan atau yang lebih ekstrem dari dugaan."},
    {p:"〜わけがない",m:"mustahil ~ / tidak mungkin ~",e:[["あの人がそんなことをするわけがない。","Mustahil orang itu melakukan hal seperti itu."],["練習していないのに、勝てるわけがない。","Padahal tidak berlatih, mustahil bisa menang."]],n:"Lebih kuat dari はずがない. Na-adj: 〜なわけがない."},
    {p:"〜ないではいられない",m:"tidak bisa tidak ~ / tak tahan untuk ~",e:[["悲しい映画を見て、泣かないではいられなかった。","Menonton film sedih, saya tidak bisa menahan tangis."],["困っている人を見ると、助けないではいられない。","Melihat orang kesusahan, saya tidak bisa tidak menolong."]],n:"Dorongan perasaan yang tak tertahan. Setara 〜ずにはいられない (する → せずにはいられない)."},
    {p:"〜得る（うる／える）",m:"mungkin terjadi / bisa ~",e:[["誰にでも起こり得る問題だ。","Ini masalah yang bisa terjadi pada siapa saja."],["そんなことはあり得ない。","Hal seperti itu mustahil terjadi."]],n:"V ます語幹＋得る. Bentuk negatif: 〜得ない (えない). Biasanya untuk kemungkinan, bukan kemampuan orang."}
  );

  d.kanji.push(
    ["契","ケイ／ちぎる","janji, kontrak"],["渉","ショウ","berunding, menyeberang"],["提","テイ／さげる","mengajukan, menenteng"],["携","ケイ／たずさえる・たずさわる","membawa, terlibat"],
    ["請","セイ／こう・うける","meminta"],["賠","バイ","mengganti rugi"],["償","ショウ／つぐなう","menebus"],["訴","ソ／うったえる","menggugat, mengadu"],
    ["逮","タイ","menangkap, mengejar"],["捕","ホ／とらえる・つかまえる","menangkap"],["規","キ","aturan"],["違","イ／ちがう","berbeda, melanggar"],
    ["響","キョウ／ひびく","bergema, berpengaruh"],["偏","ヘン／かたよる","berat sebelah"],["紛","フン／まぎれる・まぎらわしい","kacau, membingungkan"],["招","ショウ／まねく","mengundang"],
    ["避","ヒ／さける","menghindari"],["雇","コ／やとう","mempekerjakan"],["縮","シュク／ちぢむ","mengerut, mengecil"],["抑","ヨク／おさえる","menahan"],
    ["福","フク","keberuntungan"],["祉","シ","kebahagiaan, kesejahteraan"],["義","ギ","keadilan, makna"],["緩","カン／ゆるい・ゆるやか","longgar, lunak"],
    ["拡","カク","memperluas"]
  );

  d.questions.push(
    {t:"kanji",q:"「契約」の よみかたは？",o:["けいやく","げいやく","せいやく","けやく"],a:0,x:"契約 = けいやく (kontrak)."},
    {t:"kanji",q:"「賠償」の よみかたは？",o:["ばいしょう","ばいじょう","はいしょう","ばいそう"],a:0,x:"賠償 = ばいしょう (ganti rugi)."},
    {t:"kanji",q:"「提携」の よみかたは？",o:["ていけい","ていきょう","でいけい","ていかい"],a:0,x:"提携 = ていけい (kerja sama). 提供 = ていきょう, jangan tertukar."},
    {t:"kanji",q:"「逮捕」の よみかたは？",o:["たいほ","だいほ","たいぼ","たいふ"],a:0,x:"逮捕 = たいほ (penangkapan)."},
    {t:"kanji",q:"「偏見」の よみかたは？",o:["へんけん","へんげん","ひんけん","へんかん"],a:0,x:"偏見 = へんけん (prasangka)."},
    {t:"kanji",q:"「ぼうさい」を 漢字で かくと？",o:["防災","妨災","防才","坊災"],a:0,x:"防災 = pencegahan bencana. 防 = mencegah, 災 = bencana."},

    {t:"vocab",q:"彼女は 長年、環境問題の 研究に ＿＿ いる。",o:["携わって","見逃して","引き止めて","追い越して"],a:0,x:"〜に携わる = terlibat dalam (bidang/pekerjaan)."},
    {t:"vocab",q:"部長は 部下の 新しい 提案を 快く ＿＿。",o:["受け入れた","乗り越えた","追い越した","張り切った"],a:0,x:"提案を受け入れる = menerima usulan."},
    {t:"vocab",q:"今月は 売り上げが 伸びず、とうとう ＿＿ に なって しまった。",o:["赤字","黒字","株主","納期"],a:0,x:"売り上げが伸びず → 赤字 (defisit). 黒字 = surplus, bertolak belakang."},
    {t:"vocab",q:"納期に 間に合わせる ため、毎晩 ＿＿ を している。",o:["残業","昇進","退職","採用"],a:0,x:"納期に間に合わせるため夜まで働く = 残業 (lembur)."},
    {t:"vocab",q:"田中さんは まじめな 人で、＿＿ うそを つかない。",o:["決して","たちまち","辛うじて","間もなく"],a:0,x:"決して〜ない = sama sekali tidak. Opsi lain tidak cocok dengan makna kalimat."},
    {t:"vocab",q:"新しい 販売方法を ＿＿ しながら 探している。",o:["試行錯誤","自給自足","以心伝心","老若男女"],a:0,x:"試行錯誤 = coba-coba untuk menemukan cara."},
    {t:"vocab",q:"彼は 人の 話を 聞かず、いつも ＿＿ に 物事を 進める。",o:["強引","貴重","莫大","円滑"],a:0,x:"強引に = dengan memaksa. 円滑 (lancar) tidak cocok dengan 'tidak mendengar orang lain'."},
    {t:"vocab",q:"医療技術は ＿＿ で 進歩している。",o:["日進月歩","十人十色","自画自賛","五里霧中"],a:0,x:"日進月歩 = kemajuan pesat dari hari ke hari."},

    {t:"grammar",q:"社長 ＿＿、社員全員が 式典に 参加した。",o:["をはじめ","をめぐって","にしたがって","にもかかわらず"],a:0,x:"社長をはじめ、〜 = mulai dari direktur utama (dan lainnya)."},
    {t:"grammar",q:"彼は インターネット ＿＿ 世界中の 人と 友達に なった。",o:["を通じて","をはじめ","にかかわらず","ものの"],a:0,x:"〜を通じて = melalui (sarana)."},
    {t:"grammar",q:"新しい 空港の 建設 ＿＿、住民の 間で 意見が 分かれている。",o:["をめぐって","に応じて","にしたがって","からといって"],a:0,x:"〜をめぐって = seputar (isu yang diperdebatkan)."},
    {t:"grammar",q:"この 映画は 実際に あった 事件 ＿＿ 作られた。",o:["に基づいて","にかかわらず","どころか","ないではいられない"],a:0,x:"〜に基づいて = berdasarkan."},
    {t:"grammar",q:"収入 ＿＿ 税金の 額が 変わる。",o:["に応じて","をめぐって","からといって","ものの"],a:0,x:"収入に応じて = menyesuaikan dengan penghasilan."},
    {t:"grammar",q:"年齢や 経験 ＿＿、やる気の ある 人を 募集します。",o:["にかかわらず","に基づいて","をめぐって","に応じて"],a:0,x:"〜にかかわらず = tanpa memandang."},
    {t:"grammar",q:"いくら 安い ＿＿、買いすぎるのは よくない。",o:["からといって","どころか","わけがない","をめぐって"],a:0,x:"いくら〜からといって = sekalipun ~. Diikuti penilaian negatif."},
    {t:"grammar",q:"新しい 靴を 買った ＿＿、まだ 一度も はいていない。",o:["ものの","どころか","わけがない","ないではいられない"],a:0,x:"〜ものの = memang ~ tetapi (hasil tidak sesuai harapan)."},
    {t:"grammar",q:"彼は 料理が 上手 ＿＿、卵も ゆでられない。",o:["どころか","わけがない","ないではいられない","にしたがって"],a:0,x:"上手どころか = jangankan pandai, ... (malah kebalikannya)."},
    {t:"grammar",q:"全く 練習して いない 彼が 優勝できる ＿＿。",o:["わけがない","ざるを得ない","ないではいられない","にほかならない"],a:0,x:"できるわけがない = mustahil bisa. Opsi lain tidak bisa menyambung langsung dengan できる."},

    {t:"reading",p:r1,q:"家庭で 食品ロスが 出る 主な 原因は 何ですか。",o:["買いすぎた 食材を 使い切れずに 捨てること","賞味期限が 近い 商品が 売れ残ること","料理が まずくて 食べられないこと","冷蔵庫が 小さすぎること"],a:0,x:"Teks: 買いすぎた食材を使い切れずに捨ててしまうことが主な原因."},
    {t:"reading",p:r1,q:"この 文章の 内容に 合うものは どれですか。",o:["食品ロスは 個人の 努力だけで すぐに なくなる","食品ロスを 減らすには 個人の 努力に 加えて 社会の 仕組みも 必要だ","割引販売は 食品ロスを 増やしている","アプリは 家庭の 食品ロスの 原因である"],a:1,x:"Teks akhir: 個人の努力だけでなく、企業や社会全体の仕組みづくりが欠かせない."},
    {t:"reading",p:r2,q:"電子書籍の 利点として 文章に 書かれて いないものは どれですか。",o:["何冊でも 持ち歩ける","文字の 大きさを 変えられる","気に なった 本を すぐに 買える","紙の 本より 値段が 安い"],a:3,x:"Harga tidak disebut dalam teks. Tiga lainnya disebut."},
    {t:"reading",p:r2,q:"筆者は 電子書籍と 紙の 本の 関係を どう 見て いますか。",o:["電子書籍が 紙の 本を なくす","場面に 応じて 使い分けられている","紙の 本を 読む 人は いなくなる","電子書籍の ほうが 目に よい"],a:1,x:"Teks akhir: 二つは対立するものではなく、場面に応じて使い分けられている."},
    {t:"reading",p:r3,q:"閉まる 店が 増えている 原因の 一つとして 文章に 書かれて いるのは どれですか。",o:["大型店や 通販の 普及で 客が 減ったから","家賃が 高く なりすぎたから","若い 人が 町から 出て 行ったから","観光客が 来なく なったから"],a:0,x:"Teks: 大型のショッピングセンターやインターネット通販が普及し、客が減った."},
    {t:"reading",p:r3,q:"ある 町の 取り組みの 結果は どう なりましたか。",o:["空き店舗が さらに 増えた","新しい 店が 開き、観光客も 来るように なった","昔ながらの 店が すべて なくなった","店の 家賃が 上がった"],a:1,x:"Teks: カフェや雑貨の店が次々とオープンし、観光客も現れた."}
  );

  d.convo.push(
    {id:"n2-4",title:"Rapat proyek",topic:"Kantor",lines:[
      ["部長","それでは、新商品の 発売に 向けた 進捗会議を 始めます。まず、田中さん、開発の 状況を 報告して ください。","Baik, mari mulai rapat perkembangan menuju peluncuran produk baru. Pertama, Tanaka-san, tolong laporkan kondisi pengembangan."],
      ["田中","はい。試作品は 予定どおり 完成いたしました。ただ、一部の 部品の 納期が 遅れる 見込みでして、発売日に 影響が 出る 恐れが ございます。","Ya. Prototipe selesai sesuai jadwal. Hanya saja, pengiriman sebagian komponen diperkirakan terlambat, sehingga dikhawatirkan berdampak pada tanggal rilis."],
      ["部長","それは 困りますね。佐藤さん、営業の 立場からは いかがですか。","Itu merepotkan. Sato-san, bagaimana dari sisi penjualan?"],
      ["佐藤","発売日を 延ばすと、競合他社に 先を 越される 可能性が あります。できれば 予定どおりに 進めたいと 考えております。","Jika rilis diundur, ada kemungkinan didahului pesaing. Jika bisa, saya ingin tetap sesuai jadwal."],
      ["田中","では、別の 業者にも 見積もりを 依頼して みます。ただし、費用が 増える 点は ご了承 いただきたいのですが。","Kalau begitu saya akan minta penawaran dari pemasok lain. Namun mohon dimaklumi bahwa biaya akan bertambah."],
      ["部長","予算の 範囲内であれば 構いません。いつまでに 結果が わかりますか。","Selama dalam anggaran tidak masalah. Kapan hasilnya bisa diketahui?"],
      ["田中","明後日までに ご報告いたします。","Akan saya laporkan paling lambat lusa."],
      ["部長","わかりました。では、その 結果を 受けて、来週の 会議で 最終的に 決めましょう。本日は 以上です。","Baik. Berdasarkan hasil itu, kita putuskan akhir di rapat minggu depan. Sekian untuk hari ini."]]},
    {id:"n2-5",title:"Presentasi dan tanya jawab",topic:"Kantor",lines:[
      ["司会","以上で 発表は 終わりです。ご質問の ある 方は いらっしゃいますか。","Presentasi selesai. Adakah yang ingin bertanya?"],
      ["参加者","貴重な ご発表を ありがとうございました。一点 お伺いしたいのですが、調査の 対象は 何名 だったのでしょうか。","Terima kasih atas presentasi yang berharga. Satu hal ingin saya tanyakan, berapa orang yang menjadi sasaran survei?"],
      ["発表者","ご質問 ありがとうございます。対象は 二十代から 六十代までの 男女 五百名でございます。","Terima kasih atas pertanyaannya. Sasaran adalah 500 pria dan wanita usia 20-an hingga 60-an."],
      ["参加者","年代による 違いは ございましたか。","Apakah ada perbedaan menurut kelompok usia?"],
      ["発表者","はい。若い 世代ほど 結果に ばらつきが 見られました。ただ、サンプル数が 十分とは 言えないため、今後 さらに 調べる 必要が あると 考えております。","Ya. Semakin muda generasi, hasil semakin bervariasi. Namun karena jumlah sampel belum bisa dibilang cukup, saya rasa perlu penelitian lebih lanjut."],
      ["参加者","なるほど。この 結果は 実際の 商品開発に どのように 活かせると お考えですか。","Begitu. Bagaimana menurut Anda hasil ini dapat dimanfaatkan dalam pengembangan produk nyata?"],
      ["発表者","申し訳ございません、その 点につきましては、まだ 具体的な 案が まとまっておりません。ですが、顧客の ニーズを 把握する 手がかりには なると 存じます。","Mohon maaf, untuk hal itu belum ada rencana konkret. Namun saya kira ini bisa jadi petunjuk memahami kebutuhan pelanggan."],
      ["司会","ありがとうございました。時間の 都合上、質疑は ここまでと させて いただきます。","Terima kasih. Karena keterbatasan waktu, sesi tanya jawab kita akhiri di sini."]]},
    {id:"n2-6",title:"Negosiasi jadwal dengan klien",topic:"Kantor",lines:[
      ["営業","お世話になっております。先日の お見積もりの 件で、納品日について ご相談したく、お電話いたしました。","Terima kasih atas kerja samanya. Saya menelepon untuk membicarakan tanggal pengiriman terkait penawaran kemarin."],
      ["客","ああ、お世話になっております。来月五日までに お願いしたいと 申し上げた 件ですね。","Oh, terima kasih juga. Soal yang saya minta sebelum tanggal 5 bulan depan ya."],
      ["営業","はい。それが、工場の 都合で、十日ごろに なってしまう 見込みでして。誠に 申し訳ございません。","Benar. Namun karena kondisi pabrik, diperkirakan jadi sekitar tanggal 10. Mohon maaf sekali."],
      ["客","十日ですか。こちらも 五日に 間に合わないと、展示会の 準備に 差し支えが 出るんですよ。","Tanggal 10? Kami pun, jika tidak sempat tanggal 5, persiapan pameran akan terganggu."],
      ["営業","おっしゃる とおりです。では、全体を 一度に ではなく、半分だけでも 五日に お届けする という のは いかがでしょうか。","Benar sekali. Bagaimana kalau tidak sekaligus, tetapi setengahnya saja dikirim tanggal 5?"],
      ["客","なるほど。残りは 十日で 構いません。ただ、送料は どう なりますか。","Begitu. Sisanya tanggal 10 tidak masalah. Tapi bagaimana dengan ongkos kirim?"],
      ["営業","分けて お送りする 分の 送料は、当社が 負担いたします。","Ongkos kirim untuk pengiriman terpisah kami yang menanggung."],
      ["客","それなら 助かります。では、その 方向で お願いします。","Kalau begitu sangat membantu. Mari lanjutkan dengan cara itu."],
      ["営業","ありがとうございます。後ほど あらためて 書面で ご確認 いただけるよう、送らせて いただきます。","Terima kasih. Nanti akan kami kirimkan secara tertulis untuk Anda konfirmasi lagi."]]},
    {id:"n2-7",title:"Menolak permintaan dengan sopan",topic:"Sosial",lines:[
      ["会長","田中さん、実は 来年度の 自治会の 役員を お願いできないかと 思いまして。","Tanaka-san, sebenarnya saya ingin meminta Anda menjadi pengurus lingkungan tahun depan."],
      ["田中","私に ですか。お声がけ いただいて 光栄ですが、ちょっと 難しいかもしれません。","Saya? Merupakan kehormatan diajak, tetapi mungkin agak sulit."],
      ["会長","何か ご事情でも おありですか。","Apakah ada keadaan tertentu?"],
      ["田中","実は、来年から 仕事が 忙しくなり、出張も 増える 予定なんです。役員の 仕事を 十分に 果たせないと 思うと、お引き受けする わけには いかなくて。","Sebenarnya mulai tahun depan pekerjaan makin sibuk dan dinas luar bertambah. Jika tak bisa menjalankan tugas pengurus dengan baik, saya tidak bisa menerimanya."],
      ["会長","そうですか。それは 残念ですが、無理を お願いする わけにも いきませんね。","Begitu. Sayang sekali, tapi saya pun tak bisa memaksa."],
      ["田中","せっかく お誘い いただいたのに、申し訳ありません。","Maaf, padahal sudah diajak."],
      ["会長","いえいえ。では、行事の お手伝いだけでも お願いできますか。","Tidak apa-apa. Kalau begitu, bolehkah membantu acara-acaranya saja?"],
      ["田中","それでしたら、都合が つく 範囲で 喜んで 協力させて いただきます。","Kalau itu, dengan senang hati saya bantu sejauh jadwal memungkinkan."]]}
  );
})();
