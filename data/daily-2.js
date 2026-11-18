(window.DATA = window.DATA || {}).daily = (window.DATA.daily || []).concat([
{
 "id": "kesehatan",
 "title": "Kesehatan, klinik & apotek",
 "desc": "Kamu sakit di Jepang dan perlu mendaftar di klinik, menjelaskan gejala kepada dokter, lalu menebus obat di apotek.",
 "tips": [
  "Bawa kartu asuransi kesehatan (保険証) dan kartu identitas ke klinik; resepsi biasanya memintanya saat pendaftaran. Bentuk kartu bisa berubah, jadi tanyakan resepsi jika ragu.",
  "Pasien baru biasanya mengisi formulir pemeriksaan awal (問診票). Tulis gejala, sejak kapan, alergi obat, dan obat yang sedang diminum; minta bantuan staf jika ada kanji yang tidak dipahami.",
  "Resep dari dokter ditebus di apotek (薬局). Dengarkan aturan minum (食前 sebelum makan, 食後 sesudah makan), dan tanyakan jika belum jelas. Surat keterangan dokter (診断書) biasanya perlu diminta terpisah dan bisa dikenakan biaya, jadi tanyakan di resepsi."
 ],
 "phrases": [
  [
   "熱があります。",
   "ねつがあります。",
   "Saya demam.",
   "N5"
  ],
  [
   "頭が痛いです。",
   "あたまがいたいです。",
   "Kepala saya sakit.",
   "N5"
  ],
  [
   "喉が痛くて、咳が出ます。",
   "のどがいたくて、せきがでます。",
   "Tenggorokan saya sakit dan saya batuk.",
   "N4"
  ],
  [
   "おなかの調子が悪いです。",
   "おなかのちょうしがわるいです。",
   "Perut saya kurang enak (bermasalah).",
   "N4"
  ],
  [
   "保険証はお持ちですか。",
   "ほけんしょうはおもちですか。",
   "（dengar）Apakah Anda membawa kartu asuransi kesehatan?",
   "N4"
  ],
  [
   "初めてなんですが、どうすればいいですか。",
   "はじめてなんですが、どうすればいいですか。",
   "Ini pertama kalinya saya datang; apa yang harus saya lakukan?",
   "N4"
  ],
  [
   "こちらの問診票にご記入ください。",
   "こちらのもんしんひょうにごきにゅうください。",
   "（dengar）Silakan isi formulir pemeriksaan awal ini.",
   "N3"
  ],
  [
   "薬にアレルギーがあります。",
   "くすりにアレルギーがあります。",
   "Saya alergi terhadap obat.",
   "N4"
  ],
  [
   "いつから具合が悪いですか。",
   "いつからぐあいがわるいですか。",
   "（dengar）Sejak kapan Anda merasa tidak enak badan?",
   "N4"
  ],
  [
   "一日三回、食後に飲んでください。",
   "いちにちさんかい、しょくごにのんでください。",
   "（dengar）Minumlah tiga kali sehari setelah makan.",
   "N4"
  ],
  [
   "これは食前に飲む薬ですか。",
   "これはしょくぜんにのむくすりですか。",
   "Apakah ini obat yang diminum sebelum makan?",
   "N4"
  ],
  [
   "眠くなる薬ですか。",
   "ねむくなるくすりですか。",
   "Apakah obat ini membuat mengantuk?",
   "N4"
  ],
  [
   "診断書をお願いできますか。",
   "しんだんしょをおねがいできますか。",
   "Bisakah saya minta surat keterangan dokter?",
   "N3"
  ],
  [
   "お大事に。",
   "おだいじに。",
   "（dengar）Semoga lekas sembuh.",
   "N4"
  ]
 ],
 "dialogs": [
  {
   "id": "kesehatan-1",
   "title": "Mendaftar di resepsi klinik",
   "lines": [
    [
     "私",
     "すみません、診察をお願いします。",
     "すみません、しんさつをおねがいします。",
     "Permisi, saya mau berobat."
    ],
    [
     "受付",
     "初めてですか。保険証はお持ちですか。",
     "はじめてですか。ほけんしょうはおもちですか。",
     "Apakah ini pertama kali? Apakah Anda membawa kartu asuransi?"
    ],
    [
     "私",
     "はい、初めてです。保険証はこちらです。",
     "はい、はじめてです。ほけんしょうはこちらです。",
     "Ya, pertama kali. Ini kartu asuransi saya."
    ],
    [
     "受付",
     "ありがとうございます。こちらの問診票にご記入ください。",
     "ありがとうございます。こちらのもんしんひょうにごきにゅうください。",
     "Terima kasih. Silakan isi formulir pemeriksaan awal ini."
    ],
    [
     "私",
     "薬のアレルギーがあるんですが、どこに書けばいいですか。",
     "くすりのアレルギーがあるんですが、どこにかけばいいですか。",
     "Saya alergi obat; di mana saya harus menuliskannya?"
    ],
    [
     "受付",
     "ここにお書きください。",
     "ここにおかきください。",
     "Silakan tulis di sini."
    ],
    [
     "私",
     "わかりました。書きました。",
     "わかりました。かきました。",
     "Baik. Sudah saya tulis."
    ],
    [
     "受付",
     "ありがとうございます。座ってお待ちください。お名前をお呼びします。",
     "ありがとうございます。すわっておまちください。おなまえをおよびします。",
     "Terima kasih. Silakan duduk dan tunggu. Nama Anda akan dipanggil."
    ],
    [
     "私",
     "はい、お願いします。",
     "はい、おねがいします。",
     "Baik, terima kasih."
    ]
   ]
  },
  {
   "id": "kesehatan-2",
   "title": "Bertemu dokter lalu ke apotek",
   "lines": [
    [
     "医者",
     "どうしましたか。",
     "どうしましたか。",
     "Ada keluhan apa?"
    ],
    [
     "私",
     "昨日から熱があって、喉も痛いです。",
     "きのうからねつがあって、のどもいたいです。",
     "Sejak kemarin saya demam dan tenggorokan juga sakit."
    ],
    [
     "医者",
     "咳は出ますか。",
     "せきはでますか。",
     "Apakah Anda batuk?"
    ],
    [
     "私",
     "はい、少し出ます。",
     "はい、すこしでます。",
     "Ya, sedikit."
    ],
    [
     "医者",
     "喉が赤いですね。薬を出しておきます。",
     "のどがあかいですね。くすりをだしておきます。",
     "Tenggorokannya merah. Saya resepkan obat."
    ],
    [
     "私",
     "仕事を休むので、診断書をお願いできますか。",
     "しごとをやすむので、しんだんしょをおねがいできますか。",
     "Karena saya tidak masuk kerja, bisakah saya minta surat keterangan dokter?"
    ],
    [
     "医者",
     "わかりました。受付でお渡しします。お大事に。",
     "わかりました。うけつけでおわたしします。おだいじに。",
     "Baik. Akan diberikan di resepsi. Semoga lekas sembuh."
    ],
    [
     "薬剤師",
     "この薬は、一日三回、食後に飲んでください。",
     "このくすりは、いちにちさんかい、しょくごにのんでください。",
     "Obat ini diminum tiga kali sehari setelah makan."
    ],
    [
     "私",
     "眠くなる薬ですか。",
     "ねむくなるくすりですか。",
     "Apakah obat ini membuat mengantuk?"
    ],
    [
     "薬剤師",
     "少し眠くなることがあります。運転はしないでください。",
     "すこしねむくなることがあります。うんてんはしないでください。",
     "Kadang agak mengantuk. Jangan mengemudi."
    ]
   ]
  }
 ],
 "roleplay": {
  "title": "Berobat dari resepsi sampai apotek",
  "intro": "Kamu pasien yang datang ke klinik karena demam, lalu menebus obat di apotek.",
  "steps": [
   {
    "npc": "今日はどうされましたか。",
    "npcTr": "Hari ini ada keluhan apa?",
    "choices": [
     {
      "jp": "保険証です。",
      "tr": "Ini kartu asuransi.",
      "ok": false,
      "fb": "Tidak menjawab pertanyaan; yang ditanya gejala."
     },
     {
      "jp": "昨日から熱があります。",
      "tr": "Sejak kemarin saya demam.",
      "ok": true,
      "fb": "Tepat: menyebut gejala dan sejak kapan."
     },
     {
      "jp": "早く薬をください。",
      "tr": "Cepat berikan saya obat.",
      "ok": false,
      "fb": "Terlalu memaksa dan kasar; dokter perlu memeriksa dulu."
     }
    ]
   },
   {
    "npc": "保険証はお持ちですか。",
    "npcTr": "Apakah Anda membawa kartu asuransi kesehatan?",
    "choices": [
     {
      "jp": "ないよ。",
      "tr": "Tidak ada.",
      "ok": false,
      "fb": "Terlalu santai (bentuk kasual) kepada staf klinik."
     },
     {
      "jp": "家に忘れました。でも大丈夫です。",
      "tr": "Tertinggal di rumah. Tapi tidak apa-apa.",
      "ok": false,
      "fb": "Tidak berlaku begitu saja; sebaiknya jelaskan dan tanyakan cara pembayarannya."
     },
     {
      "jp": "はい、持っています。こちらです。",
      "tr": "Ya, saya bawa. Ini dia.",
      "ok": true,
      "fb": "Sopan dan jelas."
     }
    ]
   },
   {
    "npc": "薬のアレルギーはありますか。",
    "npcTr": "Apakah Anda punya alergi obat?",
    "choices": [
     {
      "jp": "いいえ、ありません。",
      "tr": "Tidak, tidak ada.",
      "ok": true,
      "fb": "Jawaban langsung atas pertanyaan."
     },
     {
      "jp": "ええと、頭も痛いです。",
      "tr": "Eh, kepala saya juga sakit.",
      "ok": false,
      "fb": "Menambah gejala, tetapi tidak menjawab soal alergi."
     },
     {
      "jp": "はい、熱があります。",
      "tr": "Ya, saya demam.",
      "ok": false,
      "fb": "Salah menjawab: pertanyaannya tentang alergi, bukan demam."
     }
    ]
   },
   {
    "npc": "薬を出しておきますね。ほかに何かありますか。",
    "npcTr": "Saya resepkan obatnya ya. Ada hal lain?",
    "choices": [
     {
      "jp": "会社に出す診断書をお願いできますか。",
      "tr": "Bisakah saya minta surat keterangan dokter untuk kantor?",
      "ok": true,
      "fb": "Permintaan sopan dan jelas alasannya."
     },
     {
      "jp": "診断書をよこしてください。",
      "tr": "Berikan saya surat dokter.",
      "ok": false,
      "fb": "Kata 「よこす」 kasar; gunakan permintaan sopan."
     },
     {
      "jp": "いいえ、診察は嫌いです。",
      "tr": "Tidak, saya tidak suka diperiksa.",
      "ok": false,
      "fb": "Tidak sesuai konteks dan tidak membantu."
     }
    ]
   },
   {
    "npc": "この薬は、一日三回、食後に飲んでください。",
    "npcTr": "Obat ini diminum tiga kali sehari setelah makan.",
    "choices": [
     {
      "jp": "はい、食前に三回ですね。",
      "tr": "Ya, tiga kali sebelum makan, ya.",
      "ok": false,
      "fb": "Salah paham: 食後 itu sesudah makan, bukan 食前."
     },
     {
      "jp": "はい、食後ですね。わかりました。",
      "tr": "Ya, setelah makan, ya. Saya mengerti.",
      "ok": true,
      "fb": "Mengulang untuk memastikan; bagus."
     },
     {
      "jp": "いいえ、結構です。",
      "tr": "Tidak, terima kasih.",
      "ok": false,
      "fb": "Menolak instruksi obat tidak pada tempatnya."
     }
    ]
   }
  ]
 }
},
{
 "id": "rumah",
 "title": "Tempat tinggal & tetangga",
 "desc": "Kamu baru pindah ke apartemen di Jepang dan perlu berkenalan dengan tetangga, memahami aturan sampah, serta melapor jika ada masalah di rumah.",
 "tips": [
  "Memperkenalkan diri ke tetangga sebelah dengan salam singkat (ご挨拶) dan hadiah kecil sering dianggap sopan saat baru pindah, tetapi tidak wajib.",
  "Aturan pemilahan dan jadwal sampah berbeda di tiap kota. Lihat kalender atau panduan sampah (ごみカレンダー) dari kantor kota, dan keluarkan sampah di tempat serta hari yang ditentukan.",
  "Jika ada masalah listrik, air, gas, atau perabot, hubungi perusahaan pengelola (管理会社) atau pemilik. Untuk paket yang tidak diterima, kertas pemberitahuan (不在票) memuat cara meminta pengiriman ulang (再配達). Jaga suara terutama pada malam hari."
 ],
 "phrases": [
  [
   "隣に引っ越してきたアリです。",
   "となりにひっこしてきたアリです。",
   "Saya Ali, yang baru pindah ke sebelah.",
   "N4"
  ],
  [
   "つまらないものですが、どうぞ。",
   "つまらないものですが、どうぞ。",
   "Ini hanya hadiah kecil, silakan diterima.",
   "N3"
  ],
  [
   "ごみの収集日はいつですか。",
   "ごみのしゅうしゅうびはいつですか。",
   "Kapan hari pengambilan sampah?",
   "N4"
  ],
  [
   "こちらこそ、よろしくお願いします。",
   "こちらこそ、よろしくおねがいします。",
   "（dengar）Saya juga, mohon bantuannya.",
   "N4"
  ],
  [
   "これは燃えるごみですか、燃えないごみですか。",
   "これはもえるごみですか、もえないごみですか。",
   "Apakah ini sampah yang bisa dibakar atau tidak?",
   "N4"
  ],
  [
   "ごみの分別は、地域のルールに従ってください。",
   "ごみのぶんべつは、ちいきのルールにしたがってください。",
   "（dengar）Pilah sampah sesuai aturan daerah.",
   "N3"
  ],
  [
   "うるさくて申し訳ありません。",
   "うるさくてもうしわけありません。",
   "Maaf, berisik sekali.",
   "N4"
  ],
  [
   "夜は音が気になるので、少し静かにしていただけませんか。",
   "よるはおとがきになるので、すこししずかにしていただけませんか。",
   "Karena suara terdengar mengganggu pada malam hari, bisakah Anda sedikit lebih tenang?",
   "N3"
  ],
  [
   "電気がつかないんですが。",
   "でんきがつかないんですが。",
   "Listriknya tidak menyala.",
   "N4"
  ],
  [
   "お湯が出ません。",
   "おゆがでません。",
   "Air panas tidak keluar.",
   "N4"
  ],
  [
   "ガスの調子が悪いようです。確認していただけますか。",
   "ガスのちょうしがわるいようです。かくにんしていただけますか。",
   "Sepertinya gasnya bermasalah. Bisakah Anda memeriksanya?",
   "N3"
  ],
  [
   "管理会社の連絡先を教えてください。",
   "かんりがいしゃのれんらくさきをおしえてください。",
   "Tolong beri tahu kontak perusahaan pengelola.",
   "N4"
  ],
  [
   "不在票を見ました。再配達をお願いします。",
   "ふざいひょうをみました。さいはいたつをおねがいします。",
   "Saya sudah melihat pemberitahuan tidak ada di tempat. Mohon kirim ulang paketnya.",
   "N3"
  ],
  [
   "宅配便です。サインをお願いします。",
   "たくはいびんです。サインをおねがいします。",
   "（dengar）Paket kiriman. Mohon tanda tangan.",
   "N4"
  ]
 ],
 "dialogs": [
  {
   "id": "rumah-1",
   "title": "Berkenalan dengan tetangga",
   "lines": [
    [
     "私",
     "ごめんください。隣に引っ越してきたアリと申します。",
     "ごめんください。となりにひっこしてきたアリともうします。",
     "Permisi. Saya Ali, yang baru pindah ke sebelah."
    ],
    [
     "隣人",
     "はい、どちらさまですか。",
     "はい、どちらさまですか。",
     "Ya, siapa ya?"
    ],
    [
     "私",
     "隣の部屋に引っ越してきたアリです。つまらないものですが、どうぞ。",
     "となりのへやにひっこしてきたアリです。つまらないものですが、どうぞ。",
     "Saya Ali, pindah ke kamar sebelah. Ini hanya hadiah kecil, silakan."
    ],
    [
     "隣人",
     "ご丁寧にありがとうございます。こちらこそ、よろしくお願いします。",
     "ごていねいにありがとうございます。こちらこそ、よろしくおねがいします。",
     "Terima kasih atas kesopanan Anda. Saya juga, mohon bantuannya."
    ],
    [
     "私",
     "分からないことが多いので、教えてください。ごみは、いつ出せばいいですか。",
     "わからないことがおおいので、おしえてください。ごみは、いつだせばいいですか。",
     "Banyak yang belum saya ketahui, jadi mohon bimbingannya. Kapan saya harus membuang sampah?"
    ],
    [
     "隣人",
     "燃えるごみは月曜日と木曜日です。朝、決められた場所に出してください。",
     "もえるごみはげつようびともくようびです。あさ、きめられたばしょにだしてください。",
     "Sampah bakar hari Senin dan Kamis. Keluarkan pagi hari di tempat yang ditentukan."
    ],
    [
     "私",
     "分別のルールは、どこで分かりますか。",
     "ぶんべつのルールは、どこでわかりますか。",
     "Di mana saya bisa tahu aturan pemilahannya?"
    ],
    [
     "隣人",
     "市のごみカレンダーに書いてありますよ。管理会社でもらえると思います。",
     "しのごみカレンダーにかいてありますよ。かんりがいしゃでもらえるとおもいます。",
     "Tertulis di kalender sampah kota. Kurasa bisa didapat dari perusahaan pengelola."
    ],
    [
     "私",
     "ありがとうございます。助かります。",
     "ありがとうございます。たすかります。",
     "Terima kasih. Sangat membantu."
    ]
   ]
  },
  {
   "id": "rumah-2",
   "title": "Menelepon perusahaan pengelola karena air panas mati",
   "lines": [
    [
     "管理会社",
     "はい、さくら管理でございます。",
     "はい、さくらかんりでございます。",
     "Ya, ini Sakura Kanri (perusahaan pengelola)."
    ],
    [
     "私",
     "もしもし、三〇二号室のアリです。お湯が出なくて困っています。",
     "もしもし、さんまるにごうしつのアリです。おゆがでなくてこまっています。",
     "Halo, saya Ali dari kamar 302. Air panas tidak keluar dan saya kesulitan."
    ],
    [
     "管理会社",
     "いつからですか。",
     "いつからですか。",
     "Sejak kapan?"
    ],
    [
     "私",
     "今朝からです。給湯器のリモコンも見ましたが、だめでした。",
     "けさからです。きゅうとうきのリモコンもみましたが、だめでした。",
     "Sejak pagi ini. Saya juga sudah memeriksa remote pemanas air, tapi tidak berhasil."
    ],
    [
     "管理会社",
     "承知しました。業者に連絡して、折り返しお電話します。",
     "しょうちしました。ぎょうしゃにれんらくして、おりかえしおでんわします。",
     "Baik. Saya hubungi teknisi lalu menelepon balik."
    ],
    [
     "私",
     "ありがとうございます。今日は夕方まで部屋にいます。",
     "ありがとうございます。きょうはゆうがたまでへやにいます。",
     "Terima kasih. Hari ini saya ada di kamar sampai sore."
    ],
    [
     "管理会社",
     "業者の訪問は、ご都合のいい時間がありますか。",
     "ぎょうしゃのほうもんは、ごつごうのいいじかんがありますか。",
     "Untuk kunjungan teknisi, apakah ada waktu yang cocok bagi Anda?"
    ],
    [
     "私",
     "午後なら大丈夫です。",
     "ごごならだいじょうぶです。",
     "Kalau sore hari tidak masalah."
    ],
    [
     "管理会社",
     "かしこまりました。後ほどご連絡いたします。",
     "かしこまりました。のちほどごれんらくいたします。",
     "Baik. Saya akan menghubungi Anda nanti."
    ],
    [
     "私",
     "よろしくお願いします。失礼します。",
     "よろしくおねがいします。しつれいします。",
     "Mohon bantuannya. Permisi (saya tutup)."
    ]
   ]
  }
 ],
 "roleplay": {
  "title": "Tetangga datang soal kebisingan",
  "intro": "Kamu penghuni baru; tetangga sebelah mendatangi pintumu karena suara di malam hari.",
  "steps": [
   {
    "npc": "すみません、隣の者ですが、夜に少し音が聞こえて…。",
    "npcTr": "Maaf, saya tetangga sebelah; malam hari terdengar sedikit suara...",
    "choices": [
     {
      "jp": "普通の音ですよ。",
      "tr": "Itu suara biasa saja.",
      "ok": false,
      "fb": "Terkesan membela diri dan tidak peduli."
     },
     {
      "jp": "え、何ですか。知りません。",
      "tr": "Eh, apa? Saya tidak tahu.",
      "ok": false,
      "fb": "Menolak tanpa mendengarkan; kurang sopan."
     },
     {
      "jp": "申し訳ありません。気をつけます。",
      "tr": "Mohon maaf. Saya akan berhati-hati.",
      "ok": true,
      "fb": "Minta maaf dan berjanji memperbaiki; tepat."
     }
    ]
   },
   {
    "npc": "夜遅くに洗濯機を使っていらっしゃいますか。",
    "npcTr": "Apakah Anda memakai mesin cuci larut malam?",
    "choices": [
     {
      "jp": "夜しか時間がないので、これからも使います。",
      "tr": "Saya hanya punya waktu malam hari, jadi akan tetap memakainya.",
      "ok": false,
      "fb": "Tidak berempati terhadap tetangga."
     },
     {
      "jp": "はい、おやすみなさい。",
      "tr": "Ya, selamat tidur.",
      "ok": false,
      "fb": "Tidak menjawab dan memutus pembicaraan."
     },
     {
      "jp": "はい、夜に使っていました。これからは早い時間にします。",
      "tr": "Ya, saya memakainya malam hari. Mulai sekarang saya pakai di waktu lebih awal.",
      "ok": true,
      "fb": "Mengakui dan menawarkan solusi."
     }
    ]
   },
   {
    "npc": "いえいえ、お互いさまですから。新しく来られたんですよね。",
    "npcTr": "Tidak apa-apa, kita sama-sama. Anda penghuni baru, ya?",
    "choices": [
     {
      "jp": "いいえ、前から住んでいます。",
      "tr": "Bukan, saya sudah tinggal sejak dulu.",
      "ok": false,
      "fb": "Tidak sesuai kenyataan dalam skenario."
     },
     {
      "jp": "はい、先月引っ越してきたアリです。よろしくお願いします。",
      "tr": "Ya, saya Ali yang pindah bulan lalu. Mohon bantuannya.",
      "ok": true,
      "fb": "Memperkenalkan diri dengan sopan."
     },
     {
      "jp": "はい、引っ越してきたよ。よろしく。",
      "tr": "Ya, saya pindah. Salam kenal.",
      "ok": false,
      "fb": "Bentuk kasual terlalu santai kepada tetangga."
     }
    ]
   },
   {
    "npc": "分からないことがあれば、聞いてくださいね。",
    "npcTr": "Kalau ada yang tidak dimengerti, tanyakan saja ya.",
    "choices": [
     {
      "jp": "ありがとうございます。燃えないごみは何曜日か教えていただけますか。",
      "tr": "Terima kasih. Bolehkah saya tahu hari berapa sampah tidak bakar dibuang?",
      "ok": true,
      "fb": "Memanfaatkan tawaran dengan sopan."
     },
     {
      "jp": "ごみは、どこでもいいので道に置きます。",
      "tr": "Sampah saya taruh saja di jalan, di mana pun boleh.",
      "ok": false,
      "fb": "Salah; sampah harus dikeluarkan di tempat yang ditentukan."
     },
     {
      "jp": "ごみのことは自分で調べます。",
      "tr": "Soal sampah akan saya cari tahu sendiri.",
      "ok": false,
      "fb": "Menolak tawaran bantuan dengan dingin."
     }
    ]
   },
   {
    "npc": "地域によって違うので、市のごみカレンダーを見てくださいね。",
    "npcTr": "Berbeda tiap daerah, jadi lihat kalender sampah kota ya.",
    "choices": [
     {
      "jp": "ありがとうございます。カレンダーを確認します。",
      "tr": "Terima kasih. Saya akan memeriksa kalendernya.",
      "ok": true,
      "fb": "Berterima kasih dan menyatakan tindakan."
     },
     {
      "jp": "いつでも出せますよね。",
      "tr": "Bisa dibuang kapan saja, kan?",
      "ok": false,
      "fb": "Salah paham; ada hari dan aturan yang ditentukan."
     },
     {
      "jp": "カレンダーはいりません。",
      "tr": "Saya tidak butuh kalender.",
      "ok": false,
      "fb": "Mengabaikan saran dan terdengar kasar."
     }
    ]
   }
  ]
 }
},
{
 "id": "telepon",
 "title": "Telepon, janji & pesan",
 "desc": "Kamu perlu menelepon dengan sopan, mengubah atau membatalkan janji, meninggalkan pesan, dan menulis pesan singkat yang santun.",
 "tips": [
  "Dalam telepon formal, sebutkan nama dulu (〜と申します) dan sering dibuka dengan お世話になっております; akhiri dengan 失礼いたします.",
  "Jika perlu mengubah atau membatalkan janji, hubungi sedini mungkin dengan cara yang ditentukan tempat itu dan minta maaf dengan singkat.",
  "Jika kurang menangkap, minta orangnya mengulang dengan pelan (もう一度ゆっくりお願いします). Mengeja nama dengan katakana membantu, dan pesan teks seperti LINE kepada orang yang belum akrab sebaiknya memakai bentuk sopan (です・ます)."
 ],
 "phrases": [
  [
   "もしもし、アリと申します。",
   "もしもし、アリともうします。",
   "Halo, nama saya Ali.",
   "N4"
  ],
  [
   "田中さんはいらっしゃいますか。",
   "たなかさんはいらっしゃいますか。",
   "Apakah Pak Tanaka ada?",
   "N4"
  ],
  [
   "少々お待ちください。",
   "しょうしょうおまちください。",
   "（dengar）Mohon tunggu sebentar.",
   "N4"
  ],
  [
   "ただいま席を外しております。",
   "ただいませきをはずしております。",
   "（dengar）Beliau sedang tidak di tempat duduknya.",
   "N3"
  ],
  [
   "折り返しお電話をいただけますか。",
   "おりかえしおでんわをいただけますか。",
   "Bisakah Anda menelepon balik?",
   "N3"
  ],
  [
   "伝言をお願いできますか。",
   "でんごんをおねがいできますか。",
   "Bisakah saya meninggalkan pesan?",
   "N3"
  ],
  [
   "予約を変更したいのですが。",
   "よやくをへんこうしたいのですが。",
   "Saya ingin mengubah reservasi.",
   "N4"
  ],
  [
   "予約をキャンセルしたいのですが。",
   "よやくをキャンセルしたいのですが。",
   "Saya ingin membatalkan reservasi.",
   "N4"
  ],
  [
   "来週の水曜日に変えていただけませんか。",
   "らいしゅうのすいようびにかえていただけませんか。",
   "Bisakah diubah ke hari Rabu minggu depan?",
   "N4"
  ],
  [
   "番号をお間違えではないでしょうか。",
   "ばんごうをおまちがえではないでしょうか。",
   "（dengar）Mungkin Anda salah nomor?",
   "N3"
  ],
  [
   "すみません、間違えました。失礼します。",
   "すみません、まちがえました。しつれいします。",
   "Maaf, saya salah sambung. Permisi.",
   "N4"
  ],
  [
   "もう一度ゆっくり話していただけますか。",
   "もういちどゆっくりはなしていただけますか。",
   "Bisakah Anda berbicara sekali lagi dengan pelan?",
   "N4"
  ],
  [
   "ご連絡が遅くなり、申し訳ありません。",
   "ごれんらくがおそくなり、もうしわけありません。",
   "Mohon maaf kabar saya terlambat. (pesan)",
   "N3"
  ],
  [
   "明日の十時でお待ちしております。",
   "あしたのじゅうじでおまちしております。",
   "（dengar）Kami menunggu Anda besok pukul sepuluh.",
   "N3"
  ]
 ],
 "dialogs": [
  {
   "id": "telepon-1",
   "title": "Mencari orang dan meninggalkan pesan",
   "lines": [
    [
     "私",
     "もしもし、アリと申します。田中さんはいらっしゃいますか。",
     "もしもし、アリともうします。たなかさんはいらっしゃいますか。",
     "Halo, nama saya Ali. Apakah Pak Tanaka ada?"
    ],
    [
     "相手",
     "申し訳ありません。田中はただいま席を外しております。",
     "もうしわけありません。たなかはただいませきをはずしております。",
     "Mohon maaf. Tanaka sedang tidak di tempat."
    ],
    [
     "私",
     "そうですか。何時ごろお戻りですか。",
     "そうですか。なんじごろおもどりですか。",
     "Begitu ya. Kira-kira jam berapa beliau kembali?"
    ],
    [
     "相手",
     "一時間ほどで戻る予定です。",
     "いちじかんほどでもどるよていです。",
     "Rencananya kembali sekitar satu jam lagi."
    ],
    [
     "私",
     "では、折り返しお電話をいただけますか。",
     "では、おりかえしおでんわをいただけますか。",
     "Kalau begitu, bisakah beliau menelepon balik?"
    ],
    [
     "相手",
     "はい、お名前とお電話番号をお願いします。",
     "はい、おなまえとおでんわばんごうをおねがいします。",
     "Baik, mohon nama dan nomor telepon Anda."
    ],
    [
     "私",
     "アリです。電話番号は、〇九〇の一二三四の五六七八です。",
     "アリです。でんわばんごうは、ぜろきゅうぜろのいちにさんよんのごろくななはちです。",
     "Ali. Nomor telepon saya 090-1234-5678."
    ],
    [
     "相手",
     "アリ様、〇九〇の一二三四の五六七八ですね。田中に伝えます。",
     "アリさま、ぜろきゅうぜろのいちにさんよんのごろくななはちですね。たなかにつたえます。",
     "Pak Ali, 090-1234-5678, ya. Akan saya sampaikan ke Tanaka."
    ],
    [
     "私",
     "よろしくお願いします。失礼いたします。",
     "よろしくおねがいします。しつれいいたします。",
     "Mohon bantuannya. Permisi (saya tutup)."
    ],
    [
     "相手",
     "失礼いたします。",
     "しつれいいたします。",
     "Permisi (saya tutup)."
    ]
   ]
  },
  {
   "id": "telepon-2",
   "title": "Mengubah janji di klinik gigi",
   "lines": [
    [
     "受付",
     "はい、さくら歯科でございます。",
     "はい、さくらしかでございます。",
     "Ya, ini Klinik Gigi Sakura."
    ],
    [
     "私",
     "もしもし、アリと申します。明日の十時に予約しているのですが、変更をお願いしたいのですが。",
     "もしもし、アリともうします。あしたのじゅうじによやくしているのですが、へんこうをおねがいしたいのですが。",
     "Halo, nama saya Ali. Saya punya reservasi besok jam sepuluh dan ingin mengubahnya."
    ],
    [
     "受付",
     "アリ様ですね。いつがご希望ですか。",
     "アリさまですね。いつがごきぼうですか。",
     "Pak Ali, ya. Kapan Anda inginkan?"
    ],
    [
     "私",
     "急に仕事が入ってしまって。来週の水曜日は空いていますか。",
     "きゅうにしごとがはいってしまって。らいしゅうのすいようびはあいていますか。",
     "Mendadak ada pekerjaan. Apakah hari Rabu minggu depan kosong?"
    ],
    [
     "受付",
     "少々お待ちください。…水曜日の午後三時なら大丈夫です。",
     "しょうしょうおまちください。…すいようびのごごさんじならだいじょうぶです。",
     "Mohon tunggu sebentar. ... Rabu pukul tiga sore bisa."
    ],
    [
     "私",
     "では、その時間でお願いします。",
     "では、そのじかんでおねがいします。",
     "Kalau begitu, tolong di jam itu."
    ],
    [
     "受付",
     "水曜日の午後三時に変更しました。お待ちしております。",
     "すいようびのごごさんじにへんこうしました。おまちしております。",
     "Sudah diubah ke Rabu pukul tiga sore. Kami menunggu Anda."
    ],
    [
     "私",
     "ご迷惑をおかけして、申し訳ありません。",
     "ごめいわくをおかけして、もうしわけありません。",
     "Mohon maaf telah merepotkan."
    ],
    [
     "受付",
     "いいえ、大丈夫ですよ。では、失礼いたします。",
     "いいえ、だいじょうぶですよ。では、しつれいいたします。",
     "Tidak apa-apa. Kalau begitu, permisi."
    ],
    [
     "私",
     "失礼します。",
     "しつれいします。",
     "Permisi."
    ]
   ]
  }
 ],
 "roleplay": {
  "title": "Membatalkan janji di salon",
  "intro": "Kamu menelepon salon untuk membatalkan reservasi besok karena ada urusan mendadak.",
  "steps": [
   {
    "npc": "はい、ひまわり美容室でございます。",
    "npcTr": "Ya, ini Salon Himawari.",
    "choices": [
     {
      "jp": "もしもし、誰ですか。",
      "tr": "Halo, siapa ini?",
      "ok": false,
      "fb": "Salah: kamu yang menelepon, sebut nama dan keperluan."
     },
     {
      "jp": "あ、アリだよ。予約キャンセル。",
      "tr": "Ah, ini Ali. Batalin reservasi.",
      "ok": false,
      "fb": "Terlalu kasual dan kasar untuk telepon ke tempat usaha."
     },
     {
      "jp": "もしもし、アリと申します。予約のことでお電話しました。",
      "tr": "Halo, saya Ali. Saya menelepon soal reservasi.",
      "ok": true,
      "fb": "Menyebut nama dan keperluan dengan sopan."
     }
    ]
   },
   {
    "npc": "アリ様ですね。どのようなご用件でしょうか。",
    "npcTr": "Pak Ali, ya. Ada keperluan apa?",
    "choices": [
     {
      "jp": "予約を取りたいです。明日お願いします。",
      "tr": "Saya ingin membuat reservasi. Besok, tolong.",
      "ok": false,
      "fb": "Bertentangan dengan tujuanmu (membatalkan)."
     },
     {
      "jp": "明日の予約をキャンセルしたいのですが。",
      "tr": "Saya ingin membatalkan reservasi besok.",
      "ok": true,
      "fb": "Menyatakan tujuan dengan pola sopan."
     },
     {
      "jp": "キャンセルです。",
      "tr": "Batal.",
      "ok": false,
      "fb": "Terlalu singkat dan blak-blakan."
     }
    ]
   },
   {
    "npc": "かしこまりました。別の日に変更なさいますか。",
    "npcTr": "Baik. Apakah Anda ingin mengubah ke hari lain?",
    "choices": [
     {
      "jp": "はい、変更しますよ。でも日は決めません。",
      "tr": "Ya, saya ubah. Tapi harinya tidak saya tentukan.",
      "ok": false,
      "fb": "Tidak konsisten; permintaan menjadi tidak jelas."
     },
     {
      "jp": "いいえ、今回は結構です。また改めて連絡します。",
      "tr": "Tidak, kali ini tidak usah. Nanti saya hubungi lagi.",
      "ok": true,
      "fb": "Menolak dengan sopan dan jelas."
     },
     {
      "jp": "はい、昨日の午後に変更します。",
      "tr": "Ya, saya ubah ke sore kemarin.",
      "ok": false,
      "fb": "Mustahil: tidak bisa memilih waktu yang sudah lewat."
     }
    ]
   },
   {
    "npc": "承知しました。ご都合が悪くなったのですか。",
    "npcTr": "Baik. Apakah jadwal Anda menjadi tidak cocok?",
    "choices": [
     {
      "jp": "あなたには関係ありません。",
      "tr": "Itu bukan urusan Anda.",
      "ok": false,
      "fb": "Sangat kasar."
     },
     {
      "jp": "いいえ、行きたくなくなりました。",
      "tr": "Bukan, saya jadi tidak mau datang.",
      "ok": false,
      "fb": "Terlalu blak-blakan; lebih santun beri alasan halus."
     },
     {
      "jp": "はい、急に仕事が入ってしまって。申し訳ありません。",
      "tr": "Ya, mendadak ada pekerjaan. Mohon maaf.",
      "ok": true,
      "fb": "Memberi alasan singkat dan meminta maaf."
     }
    ]
   },
   {
    "npc": "いいえ、大丈夫ですよ。またのご予約をお待ちしております。",
    "npcTr": "Tidak apa-apa. Kami menanti reservasi Anda lagi.",
    "choices": [
     {
      "jp": "ありがとうございます。失礼いたします。",
      "tr": "Terima kasih. Permisi (saya tutup).",
      "ok": true,
      "fb": "Penutup telepon yang sopan."
     },
     {
      "jp": "はい、じゃあね。",
      "tr": "Ya, dadah.",
      "ok": false,
      "fb": "Terlalu kasual untuk menutup telepon dengan staf."
     },
     {
      "jp": "では、ごめんください。",
      "tr": "Kalau begitu, permisi (ごめんください).",
      "ok": false,
      "fb": "ごめんください dipakai saat bertamu, bukan menutup telepon."
     }
    ]
   }
  ]
 }
},
{
 "id": "layanan",
 "title": "Bank, pos, kantor kelurahan & ponsel",
 "desc": "Kamu mengurus keperluan di bank, kantor pos, kantor kelurahan, dan toko ponsel sambil menanyakan biaya dan dokumen yang dibutuhkan.",
 "tips": [
  "Bawa kartu residen (在留カード) dan paspor; dokumen yang diminta berbeda tiap bank, kantor, atau operator, jadi cek lewat telepon atau situs resminya sebelum datang.",
  "Di kantor kelurahan atau balai kota (区役所・市役所), ambil nomor antrean (番号札) dan tunggu dipanggil. Urusan pindah alamat memiliki batas waktu menurut aturan, jadi tanyakan di loket yang sesuai.",
  "Sebelum menandatangani formulir atau kontrak, pastikan Anda paham isinya. Tanyakan biaya, masa kontrak minimum, dan biaya pembatalan; minta penjelasan jika ada kata yang tidak dimengerti."
 ],
 "phrases": [
  [
   "口座を開きたいのですが。",
   "こうざをひらきたいのですが。",
   "Saya ingin membuka rekening.",
   "N4"
  ],
  [
   "在留カードとパスポートを持ってきました。",
   "ざいりゅうカードとパスポートをもってきました。",
   "Saya membawa kartu residen dan paspor.",
   "N4"
  ],
  [
   "こちらの用紙にご記入ください。",
   "こちらのようしにごきにゅうください。",
   "（dengar）Silakan isi formulir ini.",
   "N4"
  ],
  [
   "海外に送金したいのですが、手続きを教えてください。",
   "かいがいにそうきんしたいのですが、てつづきをおしえてください。",
   "Saya ingin mengirim uang ke luar negeri; tolong jelaskan prosedurnya.",
   "N3"
  ],
  [
   "この荷物をインドネシアまで送りたいです。",
   "このにもつをインドネシアまでおくりたいです。",
   "Saya ingin mengirim paket ini ke Indonesia.",
   "N4"
  ],
  [
   "送り方は何がありますか。料金はいくらですか。",
   "おくりかたはなにがありますか。りょうきんはいくらですか。",
   "Ada cara pengiriman apa saja? Berapa biayanya?",
   "N4"
  ],
  [
   "住民票の写しをお願いしたいのですが。",
   "じゅうみんひょうのうつしをおねがいしたいのですが。",
   "Saya ingin meminta salinan surat keterangan penduduk (jūminhyō).",
   "N3"
  ],
  [
   "引っ越しの届出をしたいのですが、どの窓口ですか。",
   "ひっこしのとどけでをしたいのですが、どのまどぐちですか。",
   "Saya ingin melapor pindah rumah; di loket mana?",
   "N3"
  ],
  [
   "番号札を取ってお待ちください。",
   "ばんごうふだをとっておまちください。",
   "（dengar）Silakan ambil nomor antrean dan tunggu.",
   "N4"
  ],
  [
   "在留カードをお預かりします。",
   "ざいりゅうカードをおあずかりします。",
   "（dengar）Kartu residen Anda saya terima (pinjam) sebentar.",
   "N3"
  ],
  [
   "SIMカードを契約したいのですが、料金プランを教えてください。",
   "シムカードをけいやくしたいのですが、りょうきんプランをおしえてください。",
   "Saya ingin berlangganan kartu SIM; tolong jelaskan paket tarifnya.",
   "N3"
  ],
  [
   "契約には何が必要ですか。",
   "けいやくにはなにがひつようですか。",
   "Apa yang dibutuhkan untuk berlangganan?",
   "N4"
  ],
  [
   "解約するときに費用がかかりますか。",
   "かいやくするときにひようがかかりますか。",
   "Apakah ada biaya saat berhenti berlangganan?",
   "N3"
  ],
  [
   "本人確認書類をご提示ください。",
   "ほんにんかくにんしょるいをごていじください。",
   "（dengar）Mohon tunjukkan dokumen identitas Anda.",
   "N3"
  ]
 ],
 "dialogs": [
  {
   "id": "layanan-1",
   "title": "Membuka rekening di bank",
   "lines": [
    [
     "私",
     "すみません、口座を開きたいのですが。",
     "すみません、こうざをひらきたいのですが。",
     "Permisi, saya ingin membuka rekening."
    ],
    [
     "行員",
     "ありがとうございます。在留カードはお持ちですか。",
     "ありがとうございます。ざいりゅうカードはおもちですか。",
     "Terima kasih. Apakah Anda membawa kartu residen?"
    ],
    [
     "私",
     "はい、在留カードとパスポートを持ってきました。",
     "はい、ざいりゅうカードとパスポートをもってきました。",
     "Ya, saya membawa kartu residen dan paspor."
    ],
    [
     "行員",
     "本人確認書類を拝見します。こちらの用紙にご記入ください。",
     "ほんにんかくにんしょるいをはいけんします。こちらのようしにごきにゅうください。",
     "Saya lihat dokumen identitas Anda. Silakan isi formulir ini."
    ],
    [
     "私",
     "漢字が分からないところは、どうすればいいですか。",
     "かんじがわからないところは、どうすればいいですか。",
     "Kalau ada kanji yang tidak saya mengerti, bagaimana?"
    ],
    [
     "行員",
     "分からないところは、お聞きください。",
     "わからないところは、おききください。",
     "Silakan tanyakan bagian yang tidak Anda pahami."
    ],
    [
     "私",
     "口座ができるまで、どのくらいかかりますか。",
     "こうざができるまで、どのくらいかかりますか。",
     "Berapa lama sampai rekening jadi?"
    ],
    [
     "行員",
     "銀行によって違いますので、確認いたします。少々お待ちください。",
     "ぎんこうによってちがいますので、かくにんいたします。しょうしょうおまちください。",
     "Berbeda tiap bank, jadi saya periksa dulu. Mohon tunggu sebentar."
    ],
    [
     "私",
     "はい、お願いします。",
     "はい、おねがいします。",
     "Baik, terima kasih."
    ]
   ]
  },
  {
   "id": "layanan-2",
   "title": "Meminta salinan surat keterangan penduduk",
   "lines": [
    [
     "私",
     "すみません、住民票の写しをお願いしたいのですが。",
     "すみません、じゅうみんひょうのうつしをおねがいしたいのですが。",
     "Permisi, saya ingin meminta salinan surat keterangan penduduk."
    ],
    [
     "職員",
     "こちらの申請書にご記入ください。本人確認書類はお持ちですか。",
     "こちらのしんせいしょにごきにゅうください。ほんにんかくにんしょるいはおもちですか。",
     "Silakan isi formulir permohonan ini. Apakah Anda membawa dokumen identitas?"
    ],
    [
     "私",
     "はい、在留カードです。",
     "はい、ざいりゅうカードです。",
     "Ya, ini kartu residen."
    ],
    [
     "職員",
     "ありがとうございます。何通必要ですか。",
     "ありがとうございます。なんつうひつようですか。",
     "Terima kasih. Berapa lembar yang dibutuhkan?"
    ],
    [
     "私",
     "二通お願いします。",
     "につうおねがいします。",
     "Dua lembar, tolong."
    ],
    [
     "職員",
     "手数料がかかりますが、よろしいですか。",
     "てすうりょうがかかりますが、よろしいですか。",
     "Ada biaya administrasi; apakah tidak masalah?"
    ],
    [
     "私",
     "はい、大丈夫です。どこで払えばいいですか。",
     "はい、だいじょうぶです。どこではらえばいいですか。",
     "Ya, tidak masalah. Di mana saya membayar?"
    ],
    [
     "職員",
     "あとで窓口でご案内します。番号札を取ってお待ちください。",
     "あとでまどぐちでごあんないします。ばんごうふだをとっておまちください。",
     "Nanti akan dijelaskan di loket. Silakan ambil nomor antrean dan tunggu."
    ],
    [
     "私",
     "わかりました。ありがとうございます。",
     "わかりました。ありがとうございます。",
     "Baik. Terima kasih."
    ]
   ]
  }
 ],
 "roleplay": {
  "title": "Berlangganan kartu SIM di toko ponsel",
  "intro": "Kamu pelanggan yang datang ke toko ponsel untuk berlangganan kartu SIM.",
  "steps": [
   {
    "npc": "いらっしゃいませ。本日はどのようなご用件でしょうか。",
    "npcTr": "Selamat datang. Ada keperluan apa hari ini?",
    "choices": [
     {
      "jp": "口座を開きたいのですが。",
      "tr": "Saya ingin membuka rekening.",
      "ok": false,
      "fb": "Salah tempat; itu urusan bank."
     },
     {
      "jp": "携帯をくれ。",
      "tr": "Kasih saya ponsel.",
      "ok": false,
      "fb": "Sangat kasar dan tidak jelas."
     },
     {
      "jp": "SIMカードの契約をしたいのですが。",
      "tr": "Saya ingin berlangganan kartu SIM.",
      "ok": true,
      "fb": "Menyebut keperluan dengan jelas dan sopan."
     }
    ]
   },
   {
    "npc": "本人確認書類はお持ちですか。",
    "npcTr": "Apakah Anda membawa dokumen identitas?",
    "choices": [
     {
      "jp": "持っていませんが、契約できますよね。",
      "tr": "Saya tidak bawa, tapi bisa berlangganan, kan?",
      "ok": false,
      "fb": "Terkesan memaksa; dokumen identitas biasanya diperlukan."
     },
     {
      "jp": "はい、在留カードとパスポートがあります。",
      "tr": "Ya, saya punya kartu residen dan paspor.",
      "ok": true,
      "fb": "Menjawab langsung dan sesuai."
     },
     {
      "jp": "いいえ、顔を見せればいいですよね。",
      "tr": "Tidak, cukup tunjukkan wajah, kan?",
      "ok": false,
      "fb": "Tidak masuk akal sebagai pengganti dokumen."
     }
    ]
   },
   {
    "npc": "ご利用になるデータ量やプランは決まっていますか。",
    "npcTr": "Apakah kuota data atau paket yang akan dipakai sudah ditentukan?",
    "choices": [
     {
      "jp": "まだ決めていません。おすすめを教えていただけますか。",
      "tr": "Belum. Bolehkah Anda sarankan?",
      "ok": true,
      "fb": "Jujur dan meminta saran dengan sopan."
     },
     {
      "jp": "全部ください。",
      "tr": "Beri saya semuanya.",
      "ok": false,
      "fb": "Tidak menjawab dan tidak jelas."
     },
     {
      "jp": "安ければ何でもいいです。説明は要りません。",
      "tr": "Yang murah saja. Tidak perlu penjelasan.",
      "ok": false,
      "fb": "Melewatkan penjelasan penting soal paket."
     }
    ]
   },
   {
    "npc": "最低利用期間があるプランもありますので、ご確認ください。",
    "npcTr": "Ada juga paket dengan masa pemakaian minimum, mohon diperiksa.",
    "choices": [
     {
      "jp": "解約するとき、費用がかかるかどうか教えてください。",
      "tr": "Tolong beri tahu apakah ada biaya saat berhenti berlangganan.",
      "ok": true,
      "fb": "Menanyakan hal penting sebelum kontrak."
     },
     {
      "jp": "費用は払いません。",
      "tr": "Saya tidak akan bayar biaya.",
      "ok": false,
      "fb": "Tidak masuk akal dan kasar."
     },
     {
      "jp": "期間は気にしないので、早くサインさせてください。",
      "tr": "Saya tidak peduli masa kontrak; biarkan saya tanda tangan cepat.",
      "ok": false,
      "fb": "Gegabah; masa kontrak perlu dipahami dulu."
     }
    ]
   },
   {
    "npc": "では、こちらの契約書をご確認の上、サインをお願いします。",
    "npcTr": "Kalau begitu, mohon periksa kontrak ini lalu tanda tangan.",
    "choices": [
     {
      "jp": "はい、全部分かりました。ありがとうございます。",
      "tr": "Ya, saya mengerti semuanya. Terima kasih.",
      "ok": false,
      "fb": "Mengaku paham tanpa membaca; berisiko."
     },
     {
      "jp": "サインは嫌いです。",
      "tr": "Saya tidak suka tanda tangan.",
      "ok": false,
      "fb": "Tidak relevan dan menghambat proses."
     },
     {
      "jp": "内容を読んで、分からないところは質問してもいいですか。",
      "tr": "Boleh saya baca isinya dan bertanya bagian yang tidak jelas?",
      "ok": true,
      "fb": "Aman: memahami kontrak sebelum menandatangani."
     }
    ]
   }
  ]
 }
}
]);
