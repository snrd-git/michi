(function(){
  const d = window.DATA.N1;
  const pA = "近年、多くの企業でテレワークが定着しつつある。通勤時間が不要になり、育児や介護と仕事を両立しやすくなったという利点は大きい。一方で、社員同士が顔を合わせる機会が減ったために、細かな意思疎通が難しくなったり、新入社員が仕事の進め方を学ぶ機会が失われたりするといった課題も指摘されている。ある調査では、週に二、三日の出社と在宅勤務を組み合わせる形態が、満足度と生産性の両面で最も高い評価を得た。もちろん、接客や製造のように、出社が欠かせない職種も少なくない。この結果は、どの働き方が優れているかを単純に論じるのではなく、業務の内容や個人の事情に応じて柔軟に選べる仕組みこそが重要であることを示唆している。";
  const pB = "方言は、かつては「恥ずかしいもの」として矯正の対象とされた時代があった。学校では標準語を使うことが奨励され、地方の言葉は教育の妨げになるとさえ考えられていたのである。しかし、近年、その評価は大きく変わりつつある。方言には、その土地の風土や人々の暮らしの知恵が凝縮されており、単なる言い方の違いにとどまらない文化的価値があるという認識が広まってきたからだ。実際、各地で方言を教材にした授業や、高齢者から若者へ言葉を伝える取り組みが始まっている。とはいえ、話し手の高齢化により、消滅の危機にある方言が少なくないのも事実である。言葉は人が使い続けて初めて生きるものであり、記録に残すだけでは十分とは言えない。日常の中で使われる場をどう確保するかが、これからの課題となるだろう。";
  const pC = "「ふるさと納税」は、自分が選んだ自治体に寄付をすると、その額に応じて税金が控除される制度である。寄付先の自治体から地域の特産品が届くことも人気の理由となり、利用者は年々増加してきた。この制度は、都市部に集中しがちな税収を地方にも分散させる効果が期待されている。ところが、返礼品の競争が過熱するにつれ、本来の目的から外れた問題が目立つようになった。寄付を募ることよりも豪華な返礼品を用意することに力を注ぐ自治体が現れ、集めた寄付金の相当な部分が経費に消えるケースも出てきたのである。そこで国は、返礼品の価格に上限を設けるなど、規制を強化した。制度の趣旨を踏まえるなら、重要なのは返礼品の豪華さではなく、寄付金がどのように地域の課題解決に役立てられているかを、寄付者に分かりやすく示すことだろう。";

  d.vocab.push(
    // 学術
    ["仮説","かせつ","hipotesis"],["検証","けんしょう","verifikasi / pembuktian"],["考察","こうさつ","telaah / kajian"],["論拠","ろんきょ","dasar argumen"],
    ["提唱","ていしょう","mengemukakan (gagasan)"],["体系","たいけい","sistem / tatanan"],["普遍的(な)","ふへんてき","universal"],["相関","そうかん","korelasi"],
    ["帰納","きのう","induksi"],["演繹","えんえき","deduksi"],["示唆","しさ","isyarat / mengisyaratkan"],["裏付ける","うらづける","menguatkan dengan bukti"],
    ["論じる","ろんじる","membahas / berargumen"],["文献","ぶんけん","literatur"],["要因","よういん","faktor penyebab"],["帰結","きけつ","konsekuensi logis"],["趣旨","しゅし","maksud / inti tujuan"],
    // 法律
    ["条項","じょうこう","pasal / klausul"],["施行","しこう","pemberlakuan (hukum)"],["摘発","てきはつ","pengungkapan pelanggaran"],["時効","じこう","kedaluwarsa"],
    ["賠償","ばいしょう","ganti rugi"],["告発","こくはつ","pelaporan / tuntutan"],["訴訟","そしょう","gugatan / perkara"],["罰則","ばっそく","sanksi"],
    ["却下","きゃっか","penolakan (permohonan)"],["控訴","こうそ","banding"],["供述","きょうじゅつ","keterangan (di hadapan penyidik)"],["免除","めんじょ","pembebasan"],
    ["履行","りこう","pelaksanaan kewajiban"],["遵守","じゅんしゅ","ketaatan"],["抵触","ていしょく","bertentangan (dengan aturan)"],
    // 経済
    ["不況","ふきょう","resesi"],["需給","じゅきゅう","permintaan dan penawaran"],["高騰","こうとう","melonjak (harga)"],["暴落","ぼうらく","anjlok"],
    ["融資","ゆうし","pembiayaan / pinjaman"],["財政","ざいせい","keuangan negara"],["緩和","かんわ","pelonggaran"],["低迷","ていめい","stagnasi / lesu"],
    ["補填","ほてん","menutup kekurangan"],["利潤","りじゅん","laba"],["破綻","はたん","kegagalan / bangkrut"],["参入","さんにゅう","masuk ke (pasar)"],
    ["撤退","てったい","penarikan diri"],["提携","ていけい","kerja sama / aliansi"],
    // 文学
    ["情緒","じょうちょ","nuansa perasaan"],["趣","おもむき","cita rasa / suasana indah"],["風情","ふぜい","pesona / keindahan"],["余韻","よいん","kesan yang tertinggal"],
    ["儚い","はかない","fana"],["切ない","せつない","pilu / menyesakkan"],["詠む","よむ","menggubah (puisi)"],["嘆く","なげく","meratap"],
    ["佇む","たたずむ","berdiri termangu"],["憂い","うれい","kemurungan / kecemasan"],["面影","おもかげ","bayangan / jejak wajah"],
    // 格式ある動詞
    ["承る","うけたまわる","mendengar / menerima (kenjōgo)"],["賜る","たまわる","menerima (dari atasan)"],["遂げる","とげる","mencapai / menuntaskan"],["費やす","ついやす","menghabiskan (waktu/biaya)"],
    ["培う","つちかう","memupuk"],["慈しむ","いつくしむ","menyayangi"],["労う","ねぎらう","menghargai jerih payah"],["戒める","いましめる","memperingatkan"],
    ["諭す","さとす","menasihati"],["偽る","いつわる","berbohong / memalsukan"],["欺く","あざむく","menipu"],["拒む","こばむ","menolak"],
    ["嘲る","あざける","mengejek"],["蝕む","むしばむ","menggerogoti"],["遮る","さえぎる","menyela / menghalangi"],["弁える","わきまえる","memahami batas / tahu diri"],
    ["担う","になう","memikul"],["称える","たたえる","memuji"],["慎む","つつしむ","menahan diri"],
    // 四字熟語
    ["臨機応変","りんきおうへん","bertindak sesuai situasi"],["試行錯誤","しこうさくご","coba-coba"],["取捨選択","しゅしゃせんたく","memilah (mana dibuang/dipakai)"],["疑心暗鬼","ぎしんあんき","curiga berlebihan"],
    ["傍若無人","ぼうじゃくぶじん","bersikap semaunya"],["千載一遇","せんざいいちぐう","kesempatan sekali seumur hidup"],["針小棒大","しんしょうぼうだい","membesar-besarkan"],["責任転嫁","せきにんてんか","melempar tanggung jawab"],
    ["前代未聞","ぜんだいみもん","belum pernah terjadi"],["自画自賛","じがじさん","memuji diri sendiri"],["四苦八苦","しくはっく","kesusahan besar"],["付和雷同","ふわらいどう","ikut-ikutan"],
    ["紆余曲折","うよきょくせつ","liku-liku"],["一朝一夕","いっちょういっせき","dalam sehari semalam"],["当意即妙","とういそくみょう","tangkas menanggapi"],
    // 慣用表現
    ["腑に落ちない","ふにおちない","tidak masuk akal / tak meyakinkan"],["歯止めがかかる","はどめがかかる","terkendali / terhenti"],["水に流す","みずにながす","melupakan perselisihan"],["揚げ足を取る","あげあしをとる","mencari-cari kesalahan ucapan"],
    ["口火を切る","くちびをきる","memulai (pembicaraan)"],["一矢を報いる","いっしをむくいる","membalas sedikit"],["棚に上げる","たなにあげる","mengabaikan (kesalahan sendiri)"],["茶を濁す","ちゃをにごす","berkelit / mengelak"],
    ["板挟み","いたばさみ","terjepit di antara dua pihak"],["的を射る","まとをいる","tepat sasaran"],["取り付く島もない","とりつくしまもない","tak ada celah untuk didekati"],["身につまされる","みにつまされる","ikut merasakan pahitnya"],
    ["肩入れ","かたいれ","memihak / mendukung"],["口が堅い","くちがかたい","pandai menjaga rahasia"],
    // 副詞
    ["逐一","ちくいち","satu per satu / terperinci"],["概ね","おおむね","pada garis besarnya"],["一概に","いちがいに","secara pukul rata"],["甚だ","はなはだ","sangat"],
    ["極めて","きわめて","amat"],["依然","いぜん","masih tetap"],["随時","ずいじ","sewaktu-waktu"],["早急に","さっきゅうに","segera"],
    ["無闇に","むやみに","sembarangan"],["殊に","ことに","terutama"],["強いて","しいて","kalau terpaksa / memaksakan"],["到底","とうてい","sama sekali (tidak)"],["何気なく","なにげなく","tanpa maksud / sambil lalu"],
    // ニュアンスのある形容詞
    ["厳か(な)","おごそか","khidmat"],["健気(な)","けなげ","tabah dan gigih (menyentuh hati)"],["華々しい","はなばなしい","gemilang"],["著しい","いちじるしい","sangat mencolok"],
    ["煩わしい","わずらわしい","merepotkan"],["疎い","うとい","kurang paham"],["賢明(な)","けんめい","bijaksana"],["狡い","ずるい","licik"],
    ["慎ましい","つつましい","sederhana / bersahaja"],["図々しい","ずうずうしい","tak tahu malu"],["呆気ない","あっけない","terlalu cepat berakhir"],["清々しい","すがすがしい","menyegarkan"],
    // 擬態語・擬音語
    ["ぎくしゃく","ぎくしゃく","kaku / tidak harmonis"],["ひしひし","ひしひし","terasa sekali"],["じわじわ","じわじわ","perlahan tapi pasti"],["がらり","がらり","berubah drastis"],
    ["ちらほら","ちらほら","sesekali / di sana-sini"],["てきぱき","てきぱき","cekatan"],["しみじみ","しみじみ","dengan penuh perasaan"],["うずうず","うずうず","gatal ingin (melakukan)"]
  );

  d.grammar.push(
    {p:"〜を禁じ得ない",m:"tak dapat menahan ~ (perasaan)",e:[["彼の苦難の人生を知り、同情を禁じ得なかった。","Mengetahui hidupnya yang penuh derita, saya tak dapat menahan rasa iba."]],n:"Dipakai dengan perasaan: 涙, 怒り, 同情, 驚き. Tulisan formal."},
    {p:"〜ともなると",m:"kalau sudah sampai ~ / begitu menjadi ~",e:[["部長ともなると、責任も一段と重くなる。","Kalau sudah menjadi kepala departemen, tanggung jawab pun jauh lebih berat."]],n:"Untuk status/tingkat tinggi atau waktu tertentu; hal yang wajar terjadi. Juga ともなれば."},
    {p:"〜ながらも",m:"meskipun ~ (tetap ~)",e:[["狭いながらも、居心地のよい部屋だ。","Meski sempit, kamarnya nyaman."]],n:"Melekat pada bentuk masu-stem, kata sifat-i, kata benda. Dua hal yang tampak bertentangan."},
    {p:"〜をものともせず",m:"tak gentar menghadapi ~",e:[["彼女は周囲の反対をものともせず、留学を決めた。","Dia tak gentar pada penentangan sekitar dan memutuskan belajar ke luar negeri."]],n:"Untuk rintangan/kesulitan; nada memuji."},
    {p:"〜にひきかえ",m:"berbeda dengan ~ / sebaliknya dari ~",e:[["勤勉な兄にひきかえ、弟は毎日遊んでばかりいる。","Berbeda dari kakaknya yang rajin, sang adik hanya bermain setiap hari."]],n:"Membandingkan dua pihak yang kontras; biasanya ada penilaian pembicara."},
    {p:"〜ようでは",m:"kalau sampai ~ (maka tidak baik)",e:[["この程度で諦めるようでは、成功はおぼつかない。","Kalau menyerah hanya karena sejauh ini, keberhasilan meragukan."]],n:"Diikuti penilaian negatif / peringatan."},
    {p:"〜てやまない",m:"terus ~ dengan sepenuh hati",e:[["皆様のご健康とご活躍を願ってやみません。","Kami terus berharap kesehatan dan keberhasilan Anda semua."]],n:"Dengan kata kerja perasaan: 願う, 期待する, 愛する, 尊敬する."},
    {p:"〜に至っては",m:"adapun ~ (contoh paling ekstrem)",e:[["部屋は散らかり放題で、台所に至っては足の踏み場もない。","Kamar berantakan, dan dapurnya malah tak ada tempat untuk menginjak."]],n:"Mengangkat contoh terburuk/terekstrem dari beberapa hal yang disebut."},
    {p:"〜にあるまじき",m:"yang tak pantas bagi ~",e:[["政治家にあるまじき発言に、批判が集まった。","Pernyataan yang tak pantas bagi seorang politisi menuai kritik."]],n:"Kata benda status/peran + にあるまじき + kata benda. Celaan keras."},
    {p:"〜べく",m:"agar dapat ~ (tujuan, formal)",e:[["目標を達成すべく、全力を尽くす。","Demi mencapai target, kami mengerahkan segenap tenaga."]],n:"Kata kerja bentuk kamus + べく; する → すべく. Bagian belakang berupa tindakan berkehendak."},
    {p:"〜んがため(に)",m:"demi ~ (dengan tekad kuat)",e:[["生きんがために、彼はどんな仕事でもした。","Demi bertahan hidup, dia mengerjakan pekerjaan apa pun."]],n:"Bentuk nai tanpa ない + んがため; する → せんがため. Sangat kaku."},
    {p:"〜といえども",m:"sekalipun ~",e:[["専門家といえども、間違いを犯すことはある。","Sekalipun ahli, kadang bisa berbuat salah."]],n:"Konsesif formal; hal yang diduga mustahil tetap terjadi."},
    {p:"〜が早いか",m:"begitu ~ langsung ~",e:[["ベルが鳴るが早いか、生徒たちは教室を飛び出した。","Begitu bel berbunyi, para murid langsung berhamburan keluar kelas."]],n:"Kata kerja kamus/ta + が早いか; dua aksi nyaris serentak. Kalimat belakang bukan kehendak."},
    {p:"〜に堪えない",m:"tak tahan ~ / sangat ~",e:[["あの映画の暴力描写は、見るに堪えない。","Adegan kekerasan film itu tak tahan untuk dilihat."],["多大なご支援に、感謝の念に堪えません。","Rasa syukur atas dukungan besar ini tak terkira."]],n:"見る/聞く + に堪えない = tak layak/tak tahan; 感謝・遺憾 + に堪えない = perasaan tak terbendung."}
  );

  d.kanji.push(
    ["賄","ワイ／まかなう","menyediakan, menanggung"],["妨","ボウ／さまたげる","menghalangi"],["怠","タイ／おこたる・なまける","lalai, malas"],["偏","ヘン／かたよる","condong, berat sebelah"],
    ["潔","ケツ／いさぎよい","bersih, ksatria"],["脆","ゼイ／もろい","rapuh"],["損","ソン／そこなう","rugi, merusak"],["顧","コ／かえりみる","menengok ke belakang"],
    ["摘","テキ／つむ・つまむ","memetik, menunjuk"],["賠","バイ","mengganti rugi"],["償","ショウ／つぐなう","menebus"],["訴","ソ／うったえる","menggugat, mengadu"],
    ["却","キャク","menolak, mundur"],["罰","バツ・バチ","hukuman"],["融","ユウ","melebur, mencair"],["撤","テツ","menarik mundur"],
    ["憂","ユウ／うれえる・うい","cemas, murung"],["嘆","タン／なげく","meratap"],["蝕","ショク／むしばむ","menggerogoti"],["遮","シャ／さえぎる","menyela, menghalangi"],
    ["諭","ユ／さとす","menasihati"],["戒","カイ／いましめる","memperingatkan"],["欺","ギ／あざむく","menipu"],["拒","キョ／こばむ","menolak"],["詠","エイ／よむ","menggubah puisi"]
  );

  d.questions.push(
    // kanji
    {t:"kanji",q:"「帰結」の よみかたは？",o:["きっけつ","きけつ","かえけつ","きげつ"],a:1,x:"帰結 = きけつ (konsekuensi logis)."},
    {t:"kanji",q:"「示唆」の よみかたは？",o:["じさ","しざ","しさ","しさく"],a:2,x:"示唆 = しさ (mengisyaratkan)."},
    {t:"kanji",q:"「履行」の よみかたは？",o:["りぎょう","りっこう","りへい","りこう"],a:3,x:"履行 = りこう (melaksanakan kewajiban)."},
    {t:"kanji",q:"「遵守」の よみかたは？",o:["じゅんしゅ","じゅんす","そんしゅ","しゅんしゅ"],a:0,x:"遵守 = じゅんしゅ (menaati aturan)."},
    {t:"kanji",q:"「蝕む」の よみかたは？",o:["ついやす","むしばむ","つちかう","さえぎる"],a:1,x:"蝕む = むしばむ (menggerogoti). Lainnya: 費やす, 培う, 遮る."},
    {t:"kanji",q:"「佇む」の よみかたは？",o:["たたむ","たたかう","たたずむ","なげく"],a:2,x:"佇む = たたずむ (berdiri termangu)."},
    // vocab
    {t:"vocab",q:"新薬の 効果を ＿＿ ために、大規模な 臨床試験が 行われた。",o:["遵守する","撤退する","検証する","嘆く"],a:2,x:"検証する = membuktikan/memverifikasi efek. Pilihan lain tidak cocok dengan 効果を."},
    {t:"vocab",q:"景気の ＿＿ が 続き、企業は 設備投資を 控えている。",o:["参入","低迷","履行","提唱"],a:1,x:"景気の低迷 = ekonomi lesu, sehingga investasi ditahan."},
    {t:"vocab",q:"記者の 鋭い 質問に 対し、大臣は 具体的な 説明を 避け、曖昧な 言葉で ＿＿。",o:["水に流した","口火を切った","的を射た","茶を濁した"],a:3,x:"茶を濁す = berkelit dengan jawaban asal-asalan, sesuai dengan menghindari penjelasan konkret."},
    {t:"vocab",q:"円安の 影響で、輸入品の 価格が ＿＿ している。",o:["高騰","暴落","参入","提携"],a:0,x:"円安 membuat harga impor melonjak (高騰). 暴落 (anjlok) berlawanan."},
    {t:"vocab",q:"新製品の 発売が 決まり、その 企業は 海外市場への ＿＿ を 急いでいる。",o:["撤退","参入","破綻","却下"],a:1,x:"市場への参入 = masuk ke pasar. 撤退 (mundur) berlawanan dengan konteks peluncuran produk."},
    {t:"vocab",q:"この 会社は、わずか 十年で 急速な 成長を ＿＿。",o:["嘆いた","拒んだ","遂げた","欺いた"],a:2,x:"成長を遂げる = mencapai pertumbuhan (kolokasi tetap)."},
    {t:"vocab",q:"幼い 弟の 面倒を 見る 彼女の ＿＿ 姿に、周りの 人は 胸を 打たれた。",o:["図々しい","狡い","煩わしい","健気な"],a:3,x:"健気な = tabah dan gigih sehingga menyentuh hati. Pilihan lain bernuansa negatif."},
    {t:"vocab",q:"この 計画は、現在の 予算では ＿＿ 実現できそうにない。",o:["到底","随時","甚だ","逐一"],a:0,x:"到底〜ない = sama sekali tidak (selalu dengan bentuk negatif)."},
    // grammar
    {t:"grammar",q:"彼の 不幸な 身の上を 聞き、同情の 念を ＿＿。",o:["禁じざるを得ない","禁じ得ない","禁じるに違いない","禁じる一方だ"],a:1,x:"〜を禁じ得ない = tak dapat menahan (perasaan). Bentuk lain tidak membentuk ungkapan yang benar."},
    {t:"grammar",q:"社長 ＿＿、一言一句に 責任が 伴う。",o:["にひきかえ","が早いか","ともなると","べく"],a:2,x:"社長ともなると = kalau sudah sampai tingkat direktur utama, ..."},
    {t:"grammar",q:"彼は 経験が 浅い ＿＿、立派に 責任を 果たした。",o:["ともなると","ようでは","んがため","ながらも"],a:3,x:"〜ながらも = meskipun ~ (tetap ~)."},
    {t:"grammar",q:"選手たちは 激しい 雨 ＿＿、最後まで 走り抜いた。",o:["をものともせず","にひきかえ","を禁じ得ず","にたえず"],a:0,x:"〜をものともせず = tak gentar pada rintangan."},
    {t:"grammar",q:"勤勉な 兄 ＿＿、弟は 毎日 遊んでばかりいる。",o:["ながらも","にひきかえ","が早いか","てやまない"],a:1,x:"〜にひきかえ = berbeda dengan ~ (kontras dua pihak)."},
    {t:"grammar",q:"この 程度の 仕事で 弱音を 吐く ＿＿、一人前とは 言えない。",o:["ながらも","が早いか","ようでは","まじき"],a:2,x:"〜ようでは = kalau sampai ~, (tidak baik). Diikuti penilaian negatif."},
    {t:"grammar",q:"ご両親は、娘さんの 幸せを 願って ＿＿。",o:["たえない","かねない","きれない","やまない"],a:3,x:"願ってやまない = terus berharap sepenuh hati."},
    {t:"grammar",q:"その 会社は 残業が 常態化しており、休日出勤 ＿＿、月に 十日を 超える。",o:["に至っては","ながらも","をものともせず","んがため"],a:0,x:"〜に至っては = adapun ~ (contoh paling ekstrem)."},
    {t:"grammar",q:"生徒に 暴力を 振るうとは、教師 ＿＿ 行為だ。",o:["ならではの","にあるまじき","をおいての","とあっての"],a:1,x:"教師にあるまじき行為 = perbuatan yang tak pantas bagi guru. ならでは dipakai untuk pujian."},
    {t:"grammar",q:"彼は 志望校に 合格する ＿＿、毎日 十時間 勉強した。",o:["といえども","ながらも","べく","にたえず"],a:2,x:"Kata kerja kamus + べく = agar dapat ~ (tujuan)."},
    // reading
    {t:"reading",p:pA,q:"筆者が 最も 言いたいことは どれですか。",o:["テレワークは 全面的に 廃止するべきだ","業務や 個人の 事情に 応じて 柔軟に 選べる 仕組みが 重要だ","出社と 在宅を 組み合わせると 必ず 生産性が 下がる","新入社員は 在宅勤務を 避けるべきだ"],a:1,x:"Kalimat akhir: 「柔軟に選べる仕組みこそが重要」. Pilihan lain tidak ada dalam teks."},
    {t:"reading",p:pA,q:"テレワークの 利点として 挙げられているものは どれですか。",o:["新入社員が 仕事を 学びやすくなること","意思疎通が 円滑になること","接客の 仕事も 在宅でできるようになること","通勤時間が 不要になること"],a:3,x:"Teks menyebut 「通勤時間が不要になり」 sebagai keuntungan."},
    {t:"reading",p:pB,q:"現在の 方言に 対する 見方として、本文に 合うものは どれですか。",o:["文化的価値の あるものとして 見直されている","教育の 妨げだと 考えられている","標準語に 統一するべきだと 考えられている","高齢者だけが 使うものとして 軽視されている"],a:0,x:"Teks: 「文化的価値があるという認識が広まってきた」."},
    {t:"reading",p:pB,q:"方言の 保存について、筆者は どう 述べていますか。",o:["記録に 残せば 十分である","話し手が 減っているので 消滅は 避けられない","日常の 中で 使われる 場を 確保することが 課題だ","学校教育から 方言を 排除するべきだ"],a:2,x:"Teks: 「使われる場をどう確保するかが課題」; 記録だけでは不十分."},
    {t:"reading",p:pC,q:"本文で 述べられている 問題は どれですか。",o:["寄付者が 年々 減少していること","都市部の 税収が 増えすぎたこと","自治体が 寄付を 受け取らなくなったこと","返礼品の 競争が 過熱し、本来の 目的から 外れたこと"],a:3,x:"Teks: 「返礼品の競争が過熱…本来の目的から外れた問題」."},
    {t:"reading",p:pC,q:"筆者の 主張に 最も 近いものは どれですか。",o:["返礼品の 価格上限を 廃止するべきだ","寄付金の 使い道を 寄付者に 分かりやすく 示すことが 重要だ","返礼品を より 豪華にして 寄付を 増やすべきだ","制度そのものを やめるべきだ"],a:1,x:"Kalimat akhir: yang penting adalah menunjukkan penggunaan dana secara jelas, bukan kemewahan hadiah."}
  );

  d.convo.push(
    {id:"n1-4",title:"Sambutan upacara 50 tahun",topic:"Upacara",lines:[
      ["司会","ただいまより、創立五十周年記念式典を開会いたします。まず、代表取締役社長の田中より、ご挨拶を申し上げます。","Sekarang upacara peringatan 50 tahun berdirinya perusahaan dibuka. Pertama, sambutan dari Direktur Utama Tanaka."],
      ["社長","本日は、ご多用の中、このように多数の方々にご列席いただき、誠にありがとうございます。","Terima kasih banyak atas kehadiran begitu banyak hadirin di tengah kesibukan Anda hari ini."],
      ["社長","創業以来五十年、当社が歩んでこられたのは、ひとえにお取引先の皆様のご支援と、社員一同の努力の賜物と、深く感謝申し上げます。","Selama 50 tahun sejak berdiri, perusahaan dapat melangkah semata-mata berkat dukungan mitra dan jerih payah seluruh karyawan; saya sangat berterima kasih."],
      ["社長","この間、決して平坦な道のりではございませんでした。しかし、困難に直面するたびに、全員が力を合わせて乗り越えてまいりました。","Jalan selama ini sama sekali tidak mulus. Namun setiap menghadapi kesulitan, kami semua bersatu mengatasinya."],
      ["社長","今後も、これまでの伝統を大切にしつつ、新たな分野への挑戦を続けてまいる所存でございます。","Ke depan pun, sambil menjaga tradisi, kami berniat terus menantang bidang baru."],
      ["社長","皆様の変わらぬご指導とご鞭撻を、心よりお願い申し上げます。","Kami mohon bimbingan dan dorongan Anda yang tak berubah."],
      ["司会","ありがとうございました。続きまして、ご来賓を代表して、山田商工会議所会頭より祝辞を頂戴いたします。","Terima kasih. Selanjutnya, mewakili tamu kehormatan, kami menerima ucapan selamat dari Ketua Kamar Dagang Yamada."],
      ["来賓","ご紹介にあずかりました山田でございます。貴社の五十周年を心よりお祝い申し上げますとともに、今後のさらなるご発展を祈念いたします。","Saya Yamada yang baru diperkenalkan. Saya mengucapkan selamat dari hati atas 50 tahun perusahaan Anda dan berdoa untuk perkembangan lebih lanjut."]]},
    {id:"n1-5",title:"Rapat direksi",topic:"Bisnis",lines:[
      ["議長","定刻となりましたので、ただいまより取締役会を開催いたします。本日の議題は、海外拠点の新設についてでございます。","Karena sudah waktunya, rapat direksi dibuka. Agenda hari ini adalah pendirian basis luar negeri baru."],
      ["専務","事前にお配りした資料のとおり、現地の市場調査では、今後五年間で年率八パーセントの成長が見込まれております。","Sesuai materi yang dibagikan sebelumnya, survei pasar setempat memproyeksikan pertumbuhan tahunan 8 persen dalam lima tahun ke depan."],
      ["取締役","成長性については異論ございませんが、初期投資の規模を考えますと、リスクの見極めが不可欠かと存じます。","Soal potensi pertumbuhan tidak ada keberatan, namun mengingat besarnya investasi awal, saya kira penilaian risiko mutlak diperlukan."],
      ["専務","ご指摘のとおりでございます。為替変動と現地の規制変更への対応策を、あらためてまとめさせていただきました。","Benar seperti yang Bapak tunjukkan. Kami telah menyusun ulang langkah menghadapi fluktuasi kurs dan perubahan regulasi setempat."],
      ["社外取締役","一点、確認させてください。撤退基準は、どのように設定されているのでしょうか。","Satu hal, izinkan saya konfirmasi. Bagaimana kriteria penarikan diri ditetapkan?"],
      ["専務","三期連続で赤字が続いた場合には、撤退を含めて再検討する旨、計画書に明記しております。","Jika rugi berlanjut tiga periode berturut-turut, rencana mencantumkan bahwa akan ditinjau ulang termasuk penarikan diri."],
      ["議長","承知いたしました。他にご意見がなければ、本件は条件付きで承認ということで、お諮りしたいと存じます。","Dimengerti. Jika tak ada pendapat lain, saya ingin meminta persetujuan agar hal ini disetujui dengan syarat."],
      ["一同","異議なし。","Tidak ada keberatan."]]},
    {id:"n1-6",title:"Wawancara media",topic:"Media",lines:[
      ["記者","本日は、お忙しい中、お時間を頂戴し、ありがとうございます。まず、今回の新製品開発の経緯について、お聞かせいただけますか。","Terima kasih atas waktunya di tengah kesibukan. Pertama, bisa ceritakan latar belakang pengembangan produk baru ini?"],
      ["開発責任者","はい。きっかけは、高齢のお客様から、既存の製品が使いにくいというお声を数多くいただいたことでした。","Ya. Pemicunya adalah banyaknya suara pelanggan lansia bahwa produk lama sulit dipakai."],
      ["記者","開発の過程で、最も苦労された点は何でしょうか。","Apa yang paling menyulitkan dalam proses pengembangan?"],
      ["開発責任者","機能を絞り込む作業です。あれもこれもと盛り込みたくなるのを抑え、本当に必要なものだけを残すのは、容易ではございませんでした。","Pekerjaan menyaring fitur. Menahan keinginan memasukkan segala hal dan hanya menyisakan yang benar-benar perlu tidaklah mudah."],
      ["記者","競合他社も同様の製品を投入していますが、御社ならではの強みはどこにあるとお考えですか。","Pesaing juga merilis produk serupa; apa menurut Anda keunggulan khas perusahaan Anda?"],
      ["開発責任者","私どもの強みは、利用者の声を設計に直接反映させる体制にあると自負しております。","Kami bangga bahwa kekuatan kami ada pada sistem yang langsung mencerminkan suara pengguna dalam desain."],
      ["記者","最後に、今後の展望について、一言お願いいたします。","Terakhir, mohon sepatah kata tentang prospek ke depan."],
      ["開発責任者","今後は、海外のお客様にも使っていただけるよう、改良を重ねてまいります。本日はありがとうございました。","Ke depan kami akan terus menyempurnakan agar pelanggan luar negeri pun dapat memakainya. Terima kasih untuk hari ini."]]},
    {id:"n1-7",title:"Mediasi tetangga",topic:"Mediasi",lines:[
      ["調停委員","本日は、お二人のお話を伺い、双方にとって納得のいく解決を探ってまいりたいと存じます。まず、申立人の方からお願いいたします。","Hari ini kami akan mendengar kedua pihak dan mencari penyelesaian yang dapat diterima keduanya. Mulai dari pemohon."],
      ["申立人","上の階の足音が夜遅くまで響いて、眠れない日が続いております。何度かお願いしたのですが、改善が見られません。","Langkah kaki dari lantai atas bergema hingga larut dan hari tanpa tidur berlanjut. Sudah beberapa kali saya minta, tapi tak ada perbaikan."],
      ["調停委員","お気持ちはよく分かります。では、相手方のご事情もお聞かせ願えますか。","Saya mengerti perasaan Anda. Bagaimana dengan keadaan pihak termohon?"],
      ["相手方","ご迷惑をおかけしているのでしたら、申し訳ありません。ただ、小さな子どもがおりまして、完全に音を抑えるのは難しいのが実情でございます。","Bila saya merepotkan, mohon maaf. Hanya saja ada anak kecil, sehingga menahan suara sepenuhnya sulit."],
      ["調停委員","お子さんがいらっしゃる以上、音をゼロにするのは現実的ではないかもしれません。一方で、夜間は配慮が必要という点も否めません。","Karena ada anak, membuat suara nol mungkin tak realistis. Di sisi lain, tak dapat disangkal perlunya pertimbangan di malam hari."],
      ["申立人","夜十時以降だけでも静かにしていただけるのであれば、私は構いません。","Asal setidaknya setelah jam 10 malam tenang, saya tak keberatan."],
      ["相手方","それでしたら、マットを敷くなど、できる限りの対策を講じます。","Kalau begitu, saya akan mengambil langkah semampunya, misalnya memasang matras."],
      ["調停委員","ありがとうございます。では、その内容を調停調書にまとめ、後日、お二人にご確認いただきます。","Terima kasih. Kami akan merangkumnya dalam berita acara mediasi dan mengonfirmasi ke Anda berdua nanti."]]}
  );
})();
