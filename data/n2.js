(window.DATA = window.DATA || {}).N2 = (() => {
  const p1 = "近年、都市部を中心に在宅勤務を導入する企業が増えている。通勤時間が不要になる点は大きな利点だが、同僚との意思疎通が難しくなるという課題も指摘されている。そのため、週に数日は出社する「ハイブリッド型」を採用する企業も少なくない。";
  return {
    vocab: [
      ["把握","はあく","memahami / menguasai"],["維持","いじ","mempertahankan"],["獲得","かくとく","memperoleh"],["普及","ふきゅう","menyebar luas"],
      ["傾向","けいこう","kecenderungan"],["課題","かだい","tugas / isu"],["効率","こうりつ","efisiensi"],["根拠","こんきょ","dasar / bukti"],
      ["是非","ぜひ","tentu saja"],["徐々に","じょじょに","perlahan-lahan"],["著しい","いちじるしい","mencolok"],["明らか(な)","あきらか","jelas"],
      ["妥当(な)","だとう","wajar / tepat"],["深刻(な)","しんこく","serius"],["慎重(な)","しんちょう","hati-hati"],["適切(な)","てきせつ","tepat"],
      ["従来","じゅうらい","selama ini / konvensional"],["相次ぐ","あいつぐ","berturut-turut"],["上回る","うわまわる","melampaui"],["下回る","したまわる","berada di bawah"],
      ["見込み","みこみ","prospek / perkiraan"],["補う","おぎなう","melengkapi"],["及ぶ","およぶ","mencapai / meluas"],["怠る","おこたる","lalai"],
      ["逃す","のがす","melewatkan"],["控える","ひかえる","membatasi / menahan diri"],["尊重","そんちょう","menghormati"],["貢献","こうけん","kontribusi"],
      ["批判","ひはん","kritik"],["見直す","みなおす","meninjau ulang"],["取り扱う","とりあつかう","menangani"],["差し支え","さしつかえ","halangan"],
      ["相応","そうおう","sesuai"],["あいにく","あいにく","sayangnya"],["せめて","せめて","paling tidak"],["たちまち","たちまち","seketika"],
      ["おそらく","おそらく","kemungkinan besar"],["一旦","いったん","sekali / sementara"],["案外","あんがい","di luar dugaan"],["一応","いちおう","untuk jaga-jaga"]
    ],
    grammar: [
      {p:"〜に対して",m:"terhadap ~ / berbeda dengan ~",e:[["お客様に対して、失礼なことを言ってはいけない。","Tidak boleh berkata kasar terhadap pelanggan."],["兄に対して、弟は静かだ。","Berbeda dengan kakak, adiknya pendiam."]],n:"Bisa untuk objek tindakan maupun kontras."},
      {p:"〜に関して／〜について",m:"mengenai ~",e:[["環境問題に関して、調査を行った。","Telah dilakukan survei mengenai masalah lingkungan."]],n:"に関して lebih formal dari について."},
      {p:"〜において",m:"di ~ / dalam ~ (formal)",e:[["会議は東京において行われる。","Rapat diadakan di Tokyo."]],n:"Gaya tulisan dan pidato resmi."},
      {p:"〜に違いない",m:"pasti ~",e:[["彼女は忙しいに違いない。","Dia pasti sibuk."]],n:"Keyakinan subjektif kuat."},
      {p:"〜わけにはいかない",m:"tidak bisa ~ (karena situasi)",e:[["明日試験があるので、遊んでいるわけにはいかない。","Besok ada ujian, jadi tidak bisa main-main."]],n:"Bukan 'tidak mampu', melainkan 'tidak pantas / tidak boleh'."},
      {p:"〜ざるを得ない",m:"terpaksa ~",e:[["雨が降ってきたので、中止せざるを得ない。","Karena hujan turun, terpaksa dibatalkan."]],n:"する → せざるを得ない."},
      {p:"〜に限らず",m:"tidak terbatas pada ~",e:[["若者に限らず、お年寄りもスマホを使う。","Tak hanya anak muda, lansia pun memakai ponsel pintar."]],n:"Sering diikuti も."},
      {p:"〜かねない",m:"bisa-bisa ~ (hal buruk)",e:[["このままでは大きな事故になりかねない。","Kalau begini terus, bisa-bisa jadi kecelakaan besar."]],n:"Hanya untuk kemungkinan negatif. Lawan: 〜かねる (sulit untuk)."},
      {p:"〜に伴い",m:"seiring dengan ~",e:[["人口の減少に伴い、学校の数も減っている。","Seiring penurunan penduduk, jumlah sekolah ikut berkurang."]],n:"Perubahan yang berjalan bersamaan."},
      {p:"〜つつある",m:"sedang dalam proses ~",e:[["経済は回復しつつある。","Ekonomi sedang dalam proses pulih."]],n:"Perubahan bertahap, gaya tulis."}
    ],
    kanji: [
      ["維","イ","mengikat, menjaga"],["獲","カク／える","memperoleh"],["傾","ケイ／かたむく","miring"],["課","カ","bagian, pelajaran"],
      ["効","コウ／きく","manjur"],["率","リツ／ソツ","rasio"],["根","コン／ね","akar"],["拠","キョ／コ","dasar"],
      ["尊","ソン／とうとい","mulia"],["献","ケン／コン","mempersembahkan"],["批","ヒ","mengkritik"],["妥","ダ","sesuai, kompromi"]
    ],
    questions: [
      {t:"kanji",q:"「傾向」の よみかたは？",o:["けいこう","けいごう","きょうこう","けいきょう"],a:0,x:"傾向 = けいこう."},
      {t:"kanji",q:"「把握」の よみかたは？",o:["はあく","はわく","ばあく","はにぎり"],a:0,x:"把握 = はあく."},
      {t:"kanji",q:"「貢献」の よみかたは？",o:["こうけん","こうげん","くうけん","こうせん"],a:0,x:"貢献 = こうけん."},
      {t:"vocab",q:"新製品は 予想を ＿＿ 大ヒットと なった。",o:["上回る","補う","逃す","控える"],a:0,x:"予想を上回る = melampaui perkiraan."},
      {t:"vocab",q:"医者に、塩分を ＿＿ ように 言われた。",o:["控える","怠る","逃す","補う"],a:0,x:"塩分を控える = membatasi garam."},
      {t:"grammar",q:"お客様 ＿＿ 失礼な 態度を とっては いけない。",o:["に対して","について","によって","にとって"],a:0,x:"〜に対して = terhadap (sasaran sikap)."},
      {t:"grammar",q:"雨が 降ってきたので、試合は 中止 ＿＿。",o:["せざるを得ない","しつつある","に違いない","に限らない"],a:0,x:"中止せざるを得ない = terpaksa dibatalkan."},
      {t:"grammar",q:"このままでは、大きな 事故に なり ＿＿。",o:["かねない","かねる","えない","つつある"],a:0,x:"〜かねない = bisa-bisa (hal buruk)."},
      {t:"grammar",q:"彼は 毎日 夜遅くまで 働いている。疲れている ＿＿。",o:["に違いない","わけにはいかない","ざるを得ない","かねない"],a:0,x:"疲れているに違いない = pasti lelah."},
      {t:"grammar",q:"人口の 減少 ＿＿、学校の 数も 減っている。",o:["に伴い","にわたり","につき","をめぐり"],a:0,x:"〜に伴い = seiring dengan."},
      {t:"grammar",q:"明日 試験が あるから、今日は 遊んでいる ＿＿。",o:["わけにはいかない","に違いない","つつある","かねない"],a:0,x:"遊んでいるわけにはいかない = tidak bisa santai-santai."},
      {t:"reading",p:p1,q:"「ハイブリッド型」とは、どのような 働き方ですか。",o:["毎日 会社に 行く 働き方","在宅勤務と 出社を 組み合わせる 働き方","夜だけ 働く 働き方","地方で 働く 働き方"],a:1,x:"Teks: 「週に数日は出社する」 + 在宅勤務 = kombinasi."}
    ],
    convo: [
      {id:"n2-1",title:"Wawancara kerja",topic:"Kantor",lines:[
        ["面接官","当社を 志望された 理由を お聞かせ ください。","Mohon sampaikan alasan Anda melamar ke perusahaan kami."],
        ["応募者","御社が 環境分野で 先進的な 取り組みを されている 点に 強く 惹かれました。","Saya sangat tertarik karena perusahaan Bapak/Ibu melakukan upaya maju di bidang lingkungan."],
        ["面接官","前職での 経験は どのように 活かせると お考えですか。","Bagaimana pengalaman kerja sebelumnya bisa dimanfaatkan?"],
        ["応募者","お客様の 課題を 把握し、解決策を 提案する 力は、御社の 業務にも 通じると 考えております。","Kemampuan memahami masalah pelanggan dan mengusulkan solusi menurut saya juga berlaku di pekerjaan di sini."],
        ["面接官","入社後に 挑戦したい ことは ありますか。","Apa yang ingin Anda tantang setelah bergabung?"],
        ["応募者","まずは 業務を 一日も 早く 習得し、いずれは 新規事業の 企画にも 参加したいです。","Pertama menguasai pekerjaan secepat mungkin, kelak ikut merencanakan bisnis baru."]]},
      {id:"n2-2",title:"Telepon bisnis",topic:"Kantor",lines:[
        ["社員","お電話ありがとうございます。山田商事でございます。","Terima kasih telah menelepon. Yamada Shoji."],
        ["客","私、ABC商事の 佐藤と 申しますが、営業部の 鈴木様は いらっしゃいますでしょうか。","Saya Sato dari ABC Shoji, apakah Bapak Suzuki dari bagian penjualan ada?"],
        ["社員","あいにく 鈴木は 外出しておりまして、午後三時ごろ 戻る 予定です。","Sayang sekali Suzuki sedang keluar, rencananya kembali sekitar jam 3 sore."],
        ["客","さようでございますか。では、戻られましたら お電話を いただけますでしょうか。","Begitu. Kalau begitu, mohon telepon saya jika beliau kembali."],
        ["社員","かしこまりました。念のため、お電話番号を お願いできますか。","Baik. Untuk berjaga-jaga, boleh minta nomor telepon Anda?"],
        ["客","03-1234-5678です。","03-1234-5678."],
        ["社員","承りました。鈴木が 戻り次第、お伝えいたします。","Baik, kami terima. Begitu Suzuki kembali, akan kami sampaikan."]]},
      {id:"n2-3",title:"Mengajukan penukaran barang",topic:"Layanan",lines:[
        ["客","先週 購入した この 掃除機なんですが、数日で 動かなくなってしまって。","Penyedot debu yang saya beli minggu lalu ini, dalam beberapa hari tidak bisa menyala."],
        ["店員","申し訳ございません。レシートを 拝見できますか。","Mohon maaf. Boleh saya lihat struknya?"],
        ["客","はい、こちらです。","Ya, ini."],
        ["店員","ありがとうございます。保証期間内ですので、修理か 交換が 可能です。","Terima kasih. Karena masih dalam masa garansi, bisa diperbaiki atau ditukar."],
        ["客","できれば 交換を お願いしたいのですが。","Kalau bisa, saya ingin ditukar."],
        ["店員","かしこまりました。ただいま 在庫を 確認いたしますので、少々 お待ち ください。","Baik. Kami cek stok dulu, mohon tunggu sebentar."]]}
    ]
  };
})();
