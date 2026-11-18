(window.DATA = window.DATA || {}).format = {
  // Ringkasan struktur ujian JLPT (dari panduan publik penyelenggara). Jumlah soal bersifat perkiraan dan dapat berubah; cek ulang di jlpt.jp.
  note: 'Jumlah soal per bagian adalah perkiraan (±) dan bisa berubah. Waktu dan skor kelulusan juga dapat disesuaikan penyelenggara. Periksa ulang di situs resmi sebelum mendaftar.',
  links: [
    ['Struktur & waktu ujian (resmi)', 'https://www.jlpt.jp/e/guideline/testsections.html'],
    ['Sistem penilaian (resmi)', 'https://www.jlpt.jp/e/guideline/results.html'],
    ['Ringkasan kemampuan per level (resmi)', 'https://www.jlpt.jp/e/about/levelsummary.html'],
    ['Contoh soal resmi', 'https://www.jlpt.jp/e/samples/forlearners.html']
  ],
  N5: {
    total: 105, scale: 'Skala 0–180. 言語知識・読解 0–120 (minimal 38) + 聴解 0–60 (minimal 19). Nilai lulus total sekitar 80.',
    sections: [
      { n:'言語知識（文字・語彙）', min:25, items:[['問題1','漢字読み','Pilih bacaan kanji (±12)','yomi'],['問題2','表記','Pilih kanji untuk kata kana (±8)','hyouki'],['問題3','文脈規定','Pilih kata yang cocok di kalimat (±10)','bunmyaku'],['問題4','言い換え類義','Pilih kalimat yang artinya sama (±5)','iikae']] },
      { n:'言語知識（文法）・読解', min:50, items:[['問題1','文法形式の判断','Pilih bentuk/partikel yang tepat (±16)','bunpou'],['問題2','文の組み立て','Susun kalimat, cari ★ (±5)','kumitate'],['問題3','文章の文法','Isian di dalam teks pendek (±5)','bunsho'],['問題4','内容理解（短文）','Teks pendek (±3)','tan'],['問題5','内容理解（中文）','Teks menengah (±2)','chuu'],['問題6','情報検索','Cari informasi di iklan/jadwal (±1)','jouhou']] },
      { n:'聴解', min:30, items:[['問題1','課題理解','Apa yang harus dilakukan (±7)','kadai'],['問題2','ポイント理解','Alasan/detail penting (±6)','point'],['問題3','発話表現','Ucapan yang tepat untuk situasi (±5)','hatsuwa'],['問題4','即時応答','Balasan cepat (±6)','sokuji']] }
    ],
    tips: ['Kerjakan 文字・語彙 cepat; targetkan selesai dalam ±15 menit supaya sisa waktu bisa dipakai di bagian lain.', 'Di 聴解, baca gambar dan opsi sebelum audio dimulai. Audio hanya diputar sekali pada banyak soal.', 'Semua soal pilihan ganda dan tidak ada pengurangan nilai untuk jawaban salah; jangan biarkan kosong.']
  },
  N4: {
    total: 125, scale: 'Skala 0–180. 言語知識・読解 0–120 (minimal 38) + 聴解 0–60 (minimal 19). Nilai lulus total sekitar 90.',
    sections: [
      { n:'言語知識（文字・語彙）', min:30, items:[['問題1','漢字読み','Pilih bacaan kanji (±9)','yomi'],['問題2','表記','Pilih kanji untuk kata kana (±6)','hyouki'],['問題3','文脈規定','Pilih kata yang cocok (±10)','bunmyaku'],['問題4','言い換え類義','Kalimat bermakna sama (±5)','iikae'],['問題5','用法','Kalimat dengan penggunaan kata yang benar (±5)','youhou']] },
      { n:'言語知識（文法）・読解', min:60, items:[['問題1','文法形式の判断','Bentuk tata bahasa yang tepat (±15)','bunpou'],['問題2','文の組み立て','Susun kalimat, cari ★ (±5)','kumitate'],['問題3','文章の文法','Isian di dalam teks (±5)','bunsho'],['問題4','内容理解（短文）','Teks pendek (±4)','tan'],['問題5','内容理解（中文）','Teks menengah (±4)','chuu'],['問題6','情報検索','Cari informasi (±2)','jouhou']] },
      { n:'聴解', min:35, items:[['問題1','課題理解','Apa yang harus dilakukan (±8)','kadai'],['問題2','ポイント理解','Alasan/detail penting (±7)','point'],['問題3','発話表現','Ucapan yang tepat (±5)','hatsuwa'],['問題4','即時応答','Balasan cepat (±8)','sokuji']] }
    ],
    tips: ['Latih 用法 secara khusus: soal ini menguji kata yang dipakai di konteks yang benar, bukan sekadar arti.', 'Teks 中文 sering memuat alasan dan perubahan keadaan; garis bawahi kata sambung seperti だから, しかし, それで.', 'Di 情報検索, cocokkan kondisi soal satu per satu dengan tabel/iklan; jangan mengandalkan ingatan.']
  },
  N3: {
    total: 140, scale: 'Skala 0–180, tiga bagian masing-masing 0–60 (言語知識（文字・語彙・文法）, 読解, 聴解), minimal 19 per bagian. Nilai lulus total sekitar 95.',
    sections: [
      { n:'言語知識（文字・語彙）', min:30, items:[['問題1','漢字読み','Pilih bacaan kanji (±8)','yomi'],['問題2','表記','Pilih kanji untuk kata kana (±6)','hyouki'],['問題3','文脈規定','Pilih kata yang cocok (±11)','bunmyaku'],['問題4','言い換え類義','Kalimat bermakna sama (±5)','iikae'],['問題5','用法','Penggunaan kata yang benar (±5)','youhou']] },
      { n:'言語知識（文法）・読解', min:70, items:[['問題1','文法形式の判断','Bentuk tata bahasa yang tepat (±13)','bunpou'],['問題2','文の組み立て','Susun kalimat, cari ★ (±5)','kumitate'],['問題3','文章の文法','Isian di dalam teks (±5)','bunsho'],['問題4','内容理解（短文）','Teks pendek (±4)','tan'],['問題5','内容理解（中文）','Teks menengah (±6)','chuu'],['問題6','内容理解（長文）','Teks panjang (±4)','chou'],['問題7','情報検索','Cari informasi (±2)','jouhou']] },
      { n:'聴解', min:40, items:[['問題1','課題理解','Apa yang harus dilakukan (±6)','kadai'],['問題2','ポイント理解','Alasan/detail penting (±6)','point'],['問題3','概要理解','Inti pembicaraan (±3)','gaiyou'],['問題4','発話表現','Ucapan yang tepat (±4)','hatsuwa'],['問題5','即時応答','Balasan cepat (±9)','sokuji']] }
    ],
    tips: ['Total 70 menit untuk tata bahasa dan membaca: sisihkan ±20 menit untuk tata bahasa, sisanya untuk 読解.', 'Ada skor minimal per bagian (19). Bagian yang lemah bisa menggagalkan walau total tinggi, jadi seimbangkan latihan.', 'Untuk 長文, baca pertanyaan dulu, lalu cari jawaban di teks; hindari membaca tanpa tujuan.']
  },
  N2: {
    total: 155, scale: 'Skala 0–180, tiga bagian masing-masing 0–60 (言語知識（文字・語彙・文法）, 読解, 聴解), minimal 19 per bagian. Nilai lulus total sekitar 90. Bagian 言語知識 dan 読解 dikerjakan dalam satu sesi 105 menit.',
    sections: [
      { n:'言語知識（文字・語彙）', min:0, items:[['問題1','漢字読み','Pilih bacaan kanji (±5)','yomi'],['問題2','表記','Pilih kanji untuk kata kana (±5)','hyouki'],['問題3','語形成','Pilih imbuhan/unsur pembentuk kata (±5)','gokei'],['問題4','文脈規定','Pilih kata yang cocok (±7)','bunmyaku'],['問題5','言い換え類義','Kalimat bermakna sama (±5)','iikae'],['問題6','用法','Penggunaan kata yang benar (±5)','youhou']] },
      { n:'言語知識（文法）', min:0, items:[['問題7','文法形式の判断','Bentuk tata bahasa yang tepat (±12)','bunpou'],['問題8','文の組み立て','Susun kalimat, cari ★ (±5)','kumitate'],['問題9','文章の文法','Isian di dalam teks (±5)','bunsho']] },
      { n:'読解', min:0, items:[['問題10','内容理解（短文）','Teks pendek (±5)','tan'],['問題11','内容理解（中文）','Teks menengah (±9)','chuu'],['問題12','統合理解','Membandingkan dua teks A dan B (±3)','tougou'],['問題13','主張理解（長文）','Inti pendapat penulis, teks panjang (±3)','shuchou'],['問題14','情報検索','Cari informasi dengan beberapa syarat (±2)','jouhou']] },
      { n:'聴解', min:50, items:[['問題1','課題理解','Apa yang harus dilakukan (±5)','kadai'],['問題2','ポイント理解','Alasan/detail penting (±6)','point'],['問題3','概要理解','Inti pembicaraan (±5)','gaiyou'],['問題4','即時応答','Balasan cepat (±12)','sokuji'],['問題5','統合理解','Membandingkan beberapa pendapat (±4)','ltougou']] }
    ],
    note2: 'Tiga bagian pertama (文字・語彙, 文法, 読解) berbagi satu sesi 105 menit.',
    tips: ['Manajemen waktu paling menentukan: 105 menit mencakup kosakata, tata bahasa, dan membaca sekaligus. Kerjakan 文字・語彙 dan 文法 dalam ±35 menit.', 'Latih 統合理解 (membandingkan dua teks) dan 主張理解 (inti pendapat penulis); keduanya jarang dilatih tapi bernilai besar.', '語形成 menguji imbuhan seperti 〜的, 〜性, 〜化, 無〜, 不〜; kenali pola umumnya.']
  },
  N1: {
    total: 170, scale: 'Skala 0–180, tiga bagian masing-masing 0–60, minimal 19 per bagian. Nilai lulus total sekitar 100. Bagian 言語知識 dan 読解 dikerjakan dalam satu sesi 110 menit.',
    sections: [
      { n:'言語知識（文字・語彙）', min:0, items:[['問題1','漢字読み','Pilih bacaan kanji (±6)','yomi'],['問題2','文脈規定','Pilih kata yang cocok (±7)','bunmyaku'],['問題3','言い換え類義','Kalimat bermakna sama (±6)','iikae'],['問題4','用法','Penggunaan kata yang benar (±6)','youhou']] },
      { n:'言語知識（文法）', min:0, items:[['問題5','文法形式の判断','Bentuk tata bahasa yang tepat (±10)','bunpou'],['問題6','文の組み立て','Susun kalimat, cari ★ (±5)','kumitate'],['問題7','文章の文法','Isian di dalam teks (±5)','bunsho']] },
      { n:'読解', min:0, items:[['問題8','内容理解（短文）','Teks pendek (±4)','tan'],['問題9','内容理解（中文）','Teks menengah (±9)','chuu'],['問題10','内容理解（長文）','Teks panjang (±4)','chou'],['問題11','統合理解','Membandingkan dua teks A dan B (±2)','tougou'],['問題12','主張理解（長文）','Inti pendapat penulis, teks panjang (±3)','shuchou'],['問題13','情報検索','Cari informasi dengan beberapa syarat (±2)','jouhou']] },
      { n:'聴解', min:60, items:[['問題1','課題理解','Apa yang harus dilakukan (±6)','kadai'],['問題2','ポイント理解','Alasan/detail penting (±7)','point'],['問題3','概要理解','Inti pembicaraan (±6)','gaiyou'],['問題4','即時応答','Balasan cepat (±14)','sokuji'],['問題5','統合理解','Membandingkan beberapa pendapat (±4)','ltougou']] }
    ],
    note2: 'Tiga bagian pertama (文字・語彙, 文法, 読解) berbagi satu sesi 110 menit.',
    tips: ['Teks panjang dan abstrak mendominasi waktu; latih membaca cepat untuk menangkap argumen utama dan struktur (pendapat, alasan, kontras).', 'Soal 聴解 N1 berbicara dengan kecepatan natural dan sering mengandung perubahan pendapat di tengah; catat kata penanda seperti ただ, とはいえ, やはり.', 'Sisakan waktu untuk 情報検索: kondisinya banyak, periksa satu per satu.']
  },
  subtypeNames: {
    yomi:'漢字読み', hyouki:'表記', bunmyaku:'文脈規定', iikae:'言い換え類義', youhou:'用法',
    bunpou:'文法形式の判断', kumitate:'文の組み立て (★)', bunsho:'文章の文法',
    tan:'内容理解（短文）', chuu:'内容理解（中文）', chou:'内容理解（長文）', jouhou:'情報検索',
    kadai:'課題理解', point:'ポイント理解', gaiyou:'概要理解', hatsuwa:'発話表現', sokuji:'即時応答',
    gokei:'語形成', tougou:'統合理解（読解）', shuchou:'主張理解（長文）', ltougou:'統合理解（聴解）'
  }
};
