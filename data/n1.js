(window.DATA = window.DATA || {}).N1 = (() => {
  const p1 = "伝統工芸の担い手が減少している背景には、後継者不足だけでなく、需要の縮小がある。しかし、近年は海外での評価が高まり、従来の技法を守りつつ現代の生活に合う製品を開発する動きも見られる。伝統とは、単に守るものではなく、時代とともに更新されるものだと言えよう。";
  return {
    vocab: [
      ["顕著","けんちょ","mencolok"],["概念","がいねん","konsep"],["抽象的(な)","ちゅうしょうてき","abstrak"],["曖昧(な)","あいまい","samar / ambigu"],
      ["懸念","けねん","kekhawatiran"],["脅かす","おびやかす","mengancam"],["覆す","くつがえす","membalikkan"],["賄う","まかなう","menanggung / menyediakan"],
      ["促す","うながす","mendorong"],["阻む","はばむ","menghalangi"],["滞る","とどこおる","tertunda / macet"],["携わる","たずさわる","terlibat dalam"],
      ["踏まえる","ふまえる","berpijak pada"],["見据える","みすえる","menatap ke depan"],["顧みる","かえりみる","menengok / merenungkan"],["潔い","いさぎよい","ksatria / lapang dada"],
      ["脆い","もろい","rapuh"],["おびただしい","おびただしい","sangat banyak"],["些細(な)","ささい","sepele"],["不可欠(な)","ふかけつ","esensial"],
      ["絶大(な)","ぜつだい","sangat besar"],["画期的(な)","かっきてき","terobosan"],["偏る","かたよる","condong / berat sebelah"],["妨げる","さまたげる","menghalangi"],
      ["損なう","そこなう","merusak"],["怠慢","たいまん","kelalaian"],["余儀ない","よぎない","tak terelakkan"],["とりわけ","とりわけ","terutama"],
      ["あくまで","あくまで","sebatas / sampai akhir"],["もはや","もはや","sudah tidak lagi"],["ひいては","ひいては","bahkan sampai"],["かろうじて","かろうじて","nyaris saja"],
      ["ことごとく","ことごとく","semuanya tanpa kecuali"],["総じて","そうじて","secara umum"],["概して","がいして","pada umumnya"],["もっぱら","もっぱら","semata-mata"],
      ["いわば","いわば","bisa dikatakan"],["あえて","あえて","dengan sengaja"]
    ],
    grammar: [
      {p:"〜をもって",m:"dengan ~ / pada ~ (batas waktu, formal)",e:[["本日をもって、当店は営業を終了いたします。","Terhitung hari ini, toko kami menghentikan operasi."]],n:"Gaya pengumuman resmi."},
      {p:"〜を余儀なくされる",m:"terpaksa ~ (di luar kehendak)",e:[["台風のため、旅行の中止を余儀なくされた。","Karena topan, perjalanan terpaksa dibatalkan."]],n:"Subjek tidak punya pilihan."},
      {p:"〜ならでは",m:"khas ~ (hanya ~ yang bisa)",e:[["この味は老舗ならではのものだ。","Rasa ini khas toko legendaris."]],n:"Pujian."},
      {p:"〜をおいて",m:"selain ~ (tidak ada)",e:[["彼をおいて、適任者はいない。","Selain dia, tidak ada yang cocok."]],n:"Diikuti negasi."},
      {p:"〜ずにはいられない",m:"tidak bisa tidak ~",e:[["その話を聞いて、笑わずにはいられなかった。","Mendengar cerita itu, saya tak bisa menahan tawa."]],n:"する → せずにはいられない."},
      {p:"〜とあって",m:"karena ~ (situasi khusus)",e:[["連休とあって、観光地は大変な人出だ。","Karena libur panjang, tempat wisata sangat ramai."]],n:"Alasan situasi yang luar biasa."},
      {p:"〜たりとも〜ない",m:"sedikit pun tidak ~",e:[["一円たりとも無駄にできない。","Satu yen pun tak boleh disia-siakan."]],n:"Dengan satuan terkecil (一秒, 一円)."},
      {p:"〜をよそに",m:"tak menghiraukan ~",e:[["周囲の心配をよそに、彼は一人で出発した。","Tak menghiraukan kekhawatiran orang sekitar, dia berangkat sendirian."]],n:"Mengabaikan kekhawatiran / harapan orang lain."},
      {p:"〜極まりない",m:"sangat ~ sekali",e:[["失礼極まりない態度に、全員が怒った。","Semua marah pada sikap yang amat tidak sopan."]],n:"Untuk sifat bernada negatif."}
    ],
    kanji: [
      ["懸","ケン／かける","menggantung, khawatir"],["概","ガイ","garis besar"],["抽","チュウ","menarik keluar"],["曖","アイ","samar"],
      ["昧","マイ","gelap, samar"],["脅","キョウ／おどす","mengancam"],["覆","フク／くつがえす","menutupi, membalik"],["促","ソク／うながす","mendorong"],
      ["阻","ソ／はばむ","menghalangi"],["滞","タイ／とどこおる","tertahan"],["携","ケイ／たずさえる","membawa"],["踏","トウ／ふむ","menginjak"]
    ],
    questions: [
      {t:"kanji",q:"「顕著」の よみかたは？",o:["けんちょ","けんしょ","けんちょう","げんちょ"],a:0,x:"顕著 = けんちょ."},
      {t:"kanji",q:"「懸念」の よみかたは？",o:["けねん","けんねん","かねん","けいねん"],a:0,x:"懸念 = けねん (kekhawatiran)."},
      {t:"kanji",q:"「滞る」の よみかたは？",o:["とどこおる","さまたげる","たずさわる","ふまえる"],a:0,x:"滞る = とどこおる."},
      {t:"kanji",q:"「携わる」の よみかたは？",o:["たずさわる","たずねる","とどこおる","かえりみる"],a:0,x:"携わる = たずさわる."},
      {t:"vocab",q:"新しい 技術の 導入は、業界全体を 変えるほどの ＿＿ 影響を 与えた。",o:["絶大な","脆い","些細な","潔い"],a:0,x:"絶大な影響 = pengaruh sangat besar. 些細 (sepele) bertentangan dengan 'mengubah seluruh industri'."},
      {t:"vocab",q:"彼の 発言は ＿＿ で、真意が つかめなかった。",o:["曖昧","画期的","不可欠","潔い"],a:0,x:"曖昧 = samar, sehingga maksud tak tertangkap."},
      {t:"vocab",q:"契約内容の 説明は ＿＿ 参考情報であり、法的効力は ない。",o:["あくまで","もはや","かろうじて","ことごとく"],a:0,x:"あくまで〜 = hanya sebatas ~."},
      {t:"grammar",q:"本日 ＿＿、当店は 営業を 終了いたします。",o:["をもって","をよそに","をおいて","ならでは"],a:0,x:"〜をもって = terhitung pada (batas waktu formal)."},
      {t:"grammar",q:"この 味は 老舗 ＿＿ ものだ。",o:["ならでは","をもって","をよそに","とあって"],a:0,x:"〜ならではの = khas yang hanya dimiliki ~."},
      {t:"grammar",q:"周囲の 反対 ＿＿、彼は 会社を 辞めた。",o:["をよそに","をもって","ならでは","とあって"],a:0,x:"〜をよそに = tak menghiraukan."},
      {t:"grammar",q:"失礼 ＿＿ 態度に、全員が 怒った。",o:["極まりない","ならでは","をもって","をおいて"],a:0,x:"失礼極まりない = sungguh tidak sopan."},
      {t:"reading",p:p1,q:"筆者の 考えに 最も 近いものは どれですか。",o:["伝統工芸は 需要が ないので 消えるべきだ","伝統は 変えずに 守ることが 最も 重要だ","伝統は 時代に 合わせて 更新されていくものだ","海外では 伝統工芸の 評価が 低い"],a:2,x:"Kalimat akhir: 「時代とともに更新されるもの」. Pilihan lain bertentangan dengan teks."}
    ],
    convo: [
      {id:"n1-1",title:"Negosiasi harga",topic:"Bisnis",lines:[
        ["A","今回の ご提案ですが、価格面で もう少し 譲歩して いただけないでしょうか。","Soal proposal kali ini, bisakah Anda mengalah sedikit di sisi harga?"],
        ["B","ご期待に 沿いたいのは 山々ですが、原材料費の 高騰を 踏まえますと、これ以上の 値引きは 難しいのが 実情です。","Sebenarnya saya ingin memenuhi harapan Anda, tetapi mengingat naiknya harga bahan baku, diskon lebih jauh sulit."],
        ["A","おっしゃる 事情は 理解いたします。ただ、長期契約を 前提と させて いただければ、御社にとっても 安定した 受注に つながるかと 存じます。","Saya paham situasinya. Namun jika kita mengasumsikan kontrak jangka panjang, itu juga membawa pesanan stabil bagi Anda."],
        ["B","なるほど。その 点を 加味すれば、条件次第で 再検討する 余地は ありそうです。社内で 検討の上、来週中に ご回答いたします。","Begitu. Dengan itu, tergantung syarat, ada ruang untuk dipertimbangkan ulang. Kami bahas internal dan jawab minggu depan."],
        ["A","ご検討の ほど、よろしく お願い申し上げます。","Mohon pertimbangannya."]]},
      {id:"n1-2",title:"Diskusi akademik",topic:"Akademik",lines:[
        ["A","先生の ご指摘は ごもっともですが、この 結果を 一般化するのは 時期尚早では ないでしょうか。","Poin Bapak benar, tetapi bukankah terlalu dini menggeneralisasi hasil ini?"],
        ["B","と いうと？","Maksudnya?"],
        ["A","標本数が 限られている 以上、因果関係を 断定するには 慎重で あるべきだと 考えます。","Selama jumlah sampel terbatas, menyimpulkan sebab-akibat sebaiknya dilakukan hati-hati."],
        ["B","確かに。ただ、傾向が 一貫している 点は 無視できません。追加調査を 行った 上で 結論を 出すのが 妥当でしょう。","Benar. Tapi konsistensi kecenderungannya tak bisa diabaikan. Wajar menarik kesimpulan setelah survei tambahan."],
        ["A","同感です。調査計画を 見直したいと 思います。","Setuju. Saya ingin meninjau ulang rencana penelitian."]]},
      {id:"n1-3",title:"Aturan buang sampah lingkungan",topic:"Tetangga",lines:[
        ["A","突然 申し訳ございません。先日 越してきた 者ですが、ごみ出しの ルールに ついて 教えて いただけますか。","Maaf mengganggu. Saya yang baru pindah, boleh diajari aturan membuang sampah?"],
        ["B","ああ、ご丁寧に。燃えるごみは 月曜日と 木曜日の 朝八時までに 出して ください。","Oh, sopan sekali. Sampah terbakar dikeluarkan Senin dan Kamis sebelum jam 8 pagi."],
        ["A","分別が 厳しいと 伺いましたが……","Katanya pemilahannya ketat..."],
        ["B","ペットボトルは ラベルと キャップを 外して、洗ってから 出す 決まりです。","Botol plastik harus dilepas label dan tutupnya, dicuci dulu sebelum dikeluarkan."],
        ["A","ご親切に ありがとうございます。助かります。","Terima kasih atas kebaikannya. Sangat membantu."],
        ["B","困った ことが あれば、遠慮なく 声を かけて ください。","Kalau ada kesulitan, jangan sungkan memanggil saya."]]}
    ]
  };
})();
