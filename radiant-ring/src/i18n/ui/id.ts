import { type UIStrings } from "./en";

export const id: UIStrings = {
  // ── Navigation ──────────────────────────────────────────────────────────
  nav: {
    logoText: "Penganalisis Bentuk Wajah",
    logoAria: "AI Face Shape Analyzer — beranda",
    primaryAria: "Utama",
    links: {
      shapes: "Bentuk wajah",
      about: "Tentang",
      contact: "Kontak",
      privacy: "Privasi",
      terms: "S&K",
    },
    themeToggleAria: "Alihkan mode gelap",
    themeToggleTitle: "Alihkan tema",
    menuOpenAria: "Buka menu",
    menuCloseAria: "Tutup menu",
    langLabel: "Bahasa",
  },

  // ── Footer ──────────────────────────────────────────────────────────────
  footer: {
    logoAria: "AI Face Shape Analyzer — beranda",
    brandName: "Penganalisis Bentuk Wajah",
    tagline:
      "Temukan bentuk wajah Anda dalam hitungan detik — gratis dan akurat, lengkap dengan rincian untuk keenam bentuk wajah.",
    productEyebrow: "Produk",
    productLinks: {
      analyze: "Analisis wajah saya",
      how: "Cara kerjanya",
      shapes: "Bentuk wajah",
    },
    aboutEyebrow: "Tentang",
    aboutLinks: {
      aboutTool: "Tentang alat ini",
      faq: "FAQ",
    },
    companyEyebrow: "Perusahaan",
    companyLinks: {
      about: "Tentang kami",
      contact: "Hubungi kami",
      privacy: "Kebijakan privasi",
      terms: "Syarat & ketentuan",
    },
    mono: "Enam bentuk · jaring wajah 478 titik",
    disclaimer:
      "Penafian: bentuk wajah adalah label subjektif, bukan pengukuran yang pasti. Hasilnya merupakan perkiraan yang dihasilkan dari foto Anda dan dapat berbeda tergantung sudut, pencahayaan, ekspresi, rambut, kacamata, dan lensa kamera. Banyak wajah merupakan perpaduan dua bentuk — gunakan ini sebagai panduan untuk penataan gaya, bukan sebagai saran yang pasti atau profesional.",
  },

  // ── Hero ────────────────────────────────────────────────────────────────
  hero: {
    // The headline is split so "Face Shape" can carry the gradient accent.
    titleBefore: "Penganalisis ",
    titleAccent: "Bentuk Wajah",
    titleAfter: " AI Gratis",
    sub: "Unggah foto atau gunakan kamera Anda untuk analisis bentuk wajah yang akurat — lengkap dengan rincian untuk keenam bentuk wajah.",
    ctaPrimary: "Analisis wajah saya",
    ctaSecondary: "Cara kerjanya",
    trust: {
      free: "Gratis selamanya",
      mesh: "Jaring wajah langsung",
      ranked: "Enam bentuk diperingkat",
    },
  },

  // ── How it works ──────────────────────────────────────────────────────────
  howItWorks: {
    eyebrow: "Cara kerjanya",
    heading: "Tiga langkah menuju bentuk wajah Anda.",
  },
  steps: [
    {
      n: "01",
      title: "Unggah atau buka kamera Anda",
      body: "Pilih foto yang jelas dan menghadap ke depan (hingga 10MB) atau gunakan kamera Anda untuk pembacaan langsung.",
    },
    {
      n: "02",
      title: "Kami memetakan 478 titik wajah",
      body: "Model yang berjalan di perangkat menelusuri jaring wajah Anda dan mengukur rahang, tulang pipi, dahi, serta rasio panjang.",
    },
    {
      n: "03",
      title: "Dapatkan rincian lengkap",
      body: "Lihat bentuk yang paling cocok, skor kepercayaan, dan persentase berperingkat untuk keenam bentuk wajah.",
    },
  ],

  // ── Face shapes (labels + descriptions; consumed by faceShape lookups) ────
  shapesSection: {
    eyebrow: "Referensi",
    heading: "Enam bentuk wajah.",
    sub: "Setiap hasil dinilai terhadap enam profil ini. Kebanyakan orang condong ke salah satunya dengan ciri-ciri bentuk lain — itulah mengapa kami menampilkan keseluruhan perpaduannya.",
    exampleAlt: "Contoh bentuk wajah {shape}",
  },
  shapeLabels: {
    oval: "Oval",
    round: "Bulat",
    square: "Persegi",
    rectangle: "Persegi panjang",
    heart: "Hati",
    diamond: "Berlian",
  },
  shapeDescriptions: {
    oval: "Proporsi seimbang dengan panjang wajah lebih besar dari lebarnya dan rahang yang membulat lembut. Banyak dianggap sebagai bentuk yang paling serbaguna.",
    round:
      "Sudut-sudut lembut dengan panjang dan lebar wajah yang hampir sama, pipi lebih penuh, serta garis rahang dan dagu yang membulat.",
    square:
      "Rahang kuat dan bersudut dengan dahi, tulang pipi, dan rahang yang lebarnya hampir sama — bentuk yang tegas dan berstruktur.",
    rectangle:
      "Seperti persegi tetapi lebih panjang — panjang wajah jelas melebihi lebarnya, dengan dahi, tulang pipi, dan rahang yang hampir sejajar.",
    heart:
      "Dahi dan tulang pipi yang lebih lebar yang mengerucut ke dagu yang lebih sempit dan sering kali runcing — siluet hati yang klasik.",
    diamond:
      "Tulang pipi merupakan titik terlebar, dengan dahi dan rahang yang lebih sempit serta dagu yang tegas dan runcing.",
  },

  // ── Analyzer ──────────────────────────────────────────────────────────────
  analyzer: {
    eyebrow: "Penganalisis",
    heading: "Deteksi bentuk wajah Anda",
    sub: "Unggah foto yang jelas dan menghadap ke depan atau gunakan kamera Anda.",
    tablistAria: "Metode masukan",
    tabUpload: "Unggah foto",
    tabCamera: "Gunakan kamera",
    fileInputAria: "Pilih foto untuk dianalisis",
    dropzoneTitle: "Letakkan foto atau klik untuk menelusuri",
    dropzoneHint: "JPG, PNG atau WebP · hingga 10MB",
    previewImgAlt: "Foto yang Anda unggah",
    cameraPreviewAria: "Pratinjau kamera",
    loadingModel: "Memuat model di perangkat…",
    btnAnalyze: "Analisis wajah saya",
    btnCapture: "Ambil & analisis",
    btnReset: "Analisis lainnya",
    uploadTipsAria: "Tips untuk pembacaan yang akurat",
    uploadTips: [
      "Gunakan foto yang jelas dan tajam — pencahayaan baik, fokus, dan menghadap kamera secara lurus.",
      "Jaga latar belakang tetap polos dan tidak berantakan sehingga hanya wajah Anda yang menonjol.",
      "Rapikan diri — rambut tidak menutupi wajah, lepas kacamata, dan pasang ekspresi netral.",
    ],
    camTipsAria: "Tips untuk pembacaan yang akurat",
    camTips: [
      "Lepaskan kacamata Anda — bingkai menyembunyikan tepi pipi dan alis.",
      "Hadapkan wajah lurus ke kamera, dengan rambut tidak menutupi wajah.",
      "Klik untuk mengambil 5 pembacaan — kami merata-ratakannya untuk akurasi.",
    ],
    resultEyebrow: "Bentuk wajah Anda",
    breakdownTitle: "Rincian lengkap",
    resultDisclaimer:
      "Perhatian: bentuk wajah adalah label subjektif, bukan ilmu pasti. Hasilnya merupakan perkiraan dan dapat berbeda tergantung sudut foto, pencahayaan, ekspresi, rambut yang menutupi wajah, kacamata, dan lensa kamera. Banyak wajah secara alami merupakan perpaduan dua bentuk — anggap ini sebagai panduan yang membantu, bukan keputusan yang pasti.",
    idleTitle: "Apa yang akan Anda dapatkan",
    idleItems: [
      "Bentuk yang paling cocok dengan skor kepercayaan",
      "Persentase berperingkat untuk keenam bentuk wajah",
      "Catatan ketika wajah Anda merupakan perpaduan dua bentuk",
    ],
    // Strings used by the client script. {placeholders} are filled at runtime —
    // keep them verbatim and in place.
    msg: {
      analyzing: "Menganalisis…",
      rateLimited:
        "Anda telah mencapai batas per jam. Silakan coba lagi {retryAfter}.",
      fileType: "Silakan pilih gambar JPG, PNG atau WebP.",
      fileTooLarge: "Gambar itu lebih dari 10MB. Silakan pilih file yang lebih kecil.",
      readError:
        "Tidak dapat membaca gambar itu. Foto HEIC iPhone tidak didukung — silakan gunakan JPG, PNG atau WebP.",
      noFace: "Tidak ada wajah terdeteksi. Coba foto yang lebih jelas dan menghadap ke depan.",
      analyzeError:
        "Terjadi kesalahan saat menganalisis gambar itu. Silakan coba lagi.",
      noCameraSupport: "Browser Anda tidak mendukung akses kamera.",
      cameraError:
        "Tidak dapat mengakses kamera. Periksa izin, atau gunakan unggah foto sebagai gantinya.",
      noFaceYet:
        "Belum ada wajah terdeteksi. Posisikan wajah Anda di tengah, lalu klik untuk mengambil.",
      captureError: "Terjadi kesalahan saat pengambilan. Silakan coba lagi.",
      // {n} = current reading number, {total} = CAPTURE_FRAMES.
      captureReading: "Pengambilan pembacaan - [{n}/{total}]",
      // {pct} = confidence percentage.
      confidence: "{pct}% kepercayaan",
      // {top} = winning shape label, {runnerUp} = second shape, {desc} = top description.
      blendDesc: "Sebagian besar {top} dengan ciri-ciri {runnerUp}. {desc}",
    },
  },

  // ── Long-form SEO section (#about on the homepage) ────────────────────────
  seo: {
    eyebrow: "Tentang alat ini",
    heading: "Penganalisis bentuk wajah AI gratis, online.",
    // Rendered with set:html. Translate the text, keep tags + the #analyzer link.
    html: `
      <p>
        <strong>Penganalisis bentuk wajah AI</strong> kami adalah alat online gratis yang
        memberi tahu bentuk wajah Anda dalam hitungan detik — tanpa pendaftaran dan tanpa
        unduhan apa pun. Jika Anda pernah bertanya
        <em>“apa bentuk wajah saya?”</em> dan tidak yakin bagaimana menjawabnya, inilah
        cara cepat untuk mengetahuinya. Cukup unggah foto yang jelas dan menghadap ke
        depan atau buka kamera Anda, dan <strong>penganalisis AI bentuk wajah</strong>
        akan melakukan sisanya: ia memetakan 478 titik penanda wajah, mengukur geometri
        wajah Anda, dan memberi peringkat setiap hasil untuk keenam bentuk umum.
      </p>
      <h3>Apa yang membuat penganalisis bentuk wajah AI terbaik</h3>
      <p>
        Kebanyakan alat memberi Anda satu label saja dan berharap label itu benar. Kami
        membangun apa yang kami anggap sebagai <strong>penganalisis bentuk wajah AI
        terbaik</strong> dengan menampilkan gambaran lengkap sebagai gantinya. Sebagai
        gabungan <strong>pendeteksi bentuk wajah AI dan penganalisis wajah</strong>, ia
        mengembalikan skor kepercayaan ditambah rincian persentase berperingkat untuk
        oval, bulat, persegi, persegi panjang, hati, dan berlian — karena wajah nyata
        sering kali merupakan perpaduan dua bentuk alih-alih satu kecocokan sempurna.
        Lapisan jaring wajah langsung menunjukkan dengan tepat apa yang dibaca model saat
        bekerja, sehingga analisisnya tidak pernah terasa seperti kotak hitam.
      </p>
      <h3>Cara menentukan bentuk wajah Anda</h3>
      <p>
        Bertanya-tanya <strong>cara menentukan bentuk wajah</strong> tanpa cermin
        dan pita pengukur? Metode klasik membandingkan empat pengukuran —
        lebar dahi, lebar tulang pipi, lebar garis rahang, dan panjang wajah — dan
        menimbangnya satu sama lain. Itulah yang diotomatiskan oleh
        <strong>kalkulator bentuk wajah</strong> ini. Jika <strong>penganalisis
        wajah</strong> manual menyisakan ruang untuk menebak-nebak, <strong>penganalisis
        bentuk wajah AI</strong> kami membaca rasio antropometrik yang presisi
        dan kebersudutan rahang langsung dari titik penanda, sehingga Anda mendapatkan
        jawaban yang konsisten setiap kali. Untuk pembacaan paling akurat, sisihkan rambut
        dari wajah Anda, lepas kacamata, pertahankan ekspresi netral, dan gunakan
        pencahayaan merata dari depan.
      </p>
      <h3>Gratis digunakan, online</h3>
      <p>
        Alat <strong>penganalisis bentuk wajah AI online gratis</strong> ini berjalan
        online tanpa ada yang perlu diinstal. Ia bekerja sama baiknya di ponsel maupun
        desktop, dan benar-benar merupakan <strong>penganalisis bentuk wajah AI tanpa
        biaya</strong>, tanpa batas penggunaan untuk pemakaian normal.
      </p>
      <h3>Dari bentuk wajah ke pilihan yang menawan</h3>
      <p>
        Mengetahui <strong>bentuk wajah</strong> Anda adalah titik awal untuk pilihan
        sehari-hari yang lebih baik. Orang menggunakannya untuk memilih potongan dan gaya
        rambut, memilih bingkai kacamata dan kacamata hitam yang melengkapi proporsi
        mereka, membentuk alis, serta membingkai riasan atau penataan janggut. Meskipun
        sebagian orang mencari <strong>penganalisis daya tarik wajah</strong>, kecantikan
        itu subjektif dan bentuk wajah bukanlah sebuah skor — setiap dari keenam
        <strong>bentuk wajah</strong> memiliki kelebihannya sendiri, dan tujuan di sini
        adalah membantu Anda bergaya dengan percaya diri, bukan untuk memberi peringkat
        wajah. Anggap hasilnya sebagai panduan yang membantu, bukan keputusan.
      </p>
      <p>
        Siap berhenti menebak-nebak? Gulir ke atas ke
        <a href="#analyzer">penganalisis</a>, tambahkan foto atau buka kamera Anda, dan
        biarkan <strong>penganalisis bentuk wajah AI</strong> menunjukkan rincian lengkap
        Anda dalam hitungan detik — sepenuhnya gratis.
      </p>
    `,
  },

  // ── FAQ ───────────────────────────────────────────────────────────────────
  faqSection: {
    eyebrow: "FAQ",
    heading: "Pertanyaan umum.",
  },
  faqs: [
    {
      q: "Apa itu penganalisis bentuk wajah?",
      a: "Penganalisis bentuk wajah adalah alat yang melihat proporsi wajah Anda — dahi, tulang pipi, garis rahang, dan panjang — lalu memberi tahu bentuk mana yang paling mendekati. Penganalisis bentuk wajah AI kami melakukannya secara otomatis dengan memetakan 478 titik penanda wajah dari foto atau kamera Anda, kemudian memberi peringkat kecocokan Anda untuk keenam bentuk.",
    },
    {
      q: "Bagaimana cara menentukan bentuk wajah saya?",
      a: "Untuk menentukan bentuk wajah Anda, bandingkan empat hal: lebar dahi, lebar tulang pipi, dan lebar rahang, ditambah panjang wajah secara keseluruhan. Bentuk yang proporsinya cocok dengan Anda adalah bentuk wajah Anda. Penganalisis ini mengukur rasio tersebut untuk Anda secara otomatis, sehingga tidak perlu menebak atau menggunakan pita pengukur.",
    },
    {
      q: "Bentuk wajah apa yang saya miliki?",
      a: "Anda kemungkinan besar memiliki salah satu dari enam bentuk wajah umum: oval, bulat, persegi, persegi panjang, hati, atau berlian. Unggah foto yang jelas dan menghadap ke depan atau buka kamera Anda dan penganalisis akan memberi tahu bentuk mana yang Anda miliki, beserta skor kepercayaan dan rincian persentase lengkap.",
    },
    {
      q: "Apa bentuk wajah saya?",
      a: "Bentuk wajah Anda adalah garis luar wajah Anda secara keseluruhan, ditentukan oleh seberapa lebar dahi, tulang pipi, dan rahang Anda dibandingkan dengan panjang wajah. Cara tercepat untuk mengetahuinya adalah dengan menjalankan foto melalui penganalisis di atas — ia membaca geometri wajah Anda yang sebenarnya dan menunjukkan kecocokan terdekat dalam hitungan detik.",
    },
    {
      q: "Berbentuk apa wajah saya?",
      a: "Bentuk wajah Anda ditentukan oleh titik terlebar dan panjangnya. Jika wajah Anda jelas lebih panjang daripada lebarnya, mungkin oval atau persegi panjang; jika lebar dan panjangnya serupa, bulat atau persegi; jika dahi adalah bagian terlebar, hati atau berlian. Penganalisis menentukannya secara presisi dari pengukuran Anda.",
    },
    {
      q: "Bagaimana saya bisa menentukan bentuk wajah saya?",
      a: "Cara termudah adalah membiarkan AI yang melakukannya: sisihkan rambut Anda, hadapkan wajah lurus ke kamera, lalu unggah foto atau gunakan kamera langsung. Alat ini mengukur rasio rahang, tulang pipi, dahi, dan panjang Anda lalu mengembalikan bentuk wajah Anda secara instan — jauh lebih konsisten daripada mengira-ngira di depan cermin.",
    },
    {
      q: "Bagaimana saya bisa mengenali bentuk wajah saya?",
      a: "Anda bisa mengenali bentuk wajah dengan menemukan fitur terlebar wajah Anda dan memeriksa apakah wajah Anda lebih panjang daripada lebarnya. Alih-alih menjiplak garis wajah Anda di cermin, penganalisis ini memberi tahu bentuk wajah Anda dari satu foto, tanpa pengukuran manual.",
    },
    {
      q: "Bagaimana cara mengetahui bentuk wajah yang saya miliki?",
      a: "Perhatikan tiga sinyal: di mana wajah Anda terlebar, seberapa bersudut atau lembut rahang Anda, dan apakah wajah Anda panjang atau seimbang. Penganalisis membaca ketiganya dari 478 titik penanda dan memberi tahu dengan tepat bentuk wajah yang Anda miliki, ditambah seberapa kuat Anda cocok dengan bentuk-bentuk peringkat kedua.",
    },
    {
      q: "Apa bentuk wajahku?",
      a: "Apa pun bentuk wajah Anda, penganalisis dapat menyebutkannya dalam hitungan detik. Tambahkan foto atau buka kamera Anda di atas dan Anda akan mendapatkan bentuk yang paling cocok, persentase kepercayaan, dan rincian berperingkat untuk oval, bulat, persegi, persegi panjang, hati, dan berlian.",
    },
    {
      q: "Bagaimana saya bisa mencari tahu bentuk wajah saya?",
      a: "Anda bisa mencari tahu bentuk wajah Anda secara gratis di sini — tanpa pendaftaran dan tanpa unduhan. Unggah foto yang menghadap ke depan atau gunakan kamera Anda, dan AI mengukur proporsi wajah Anda lalu menampilkan hasilnya dalam hitungan detik.",
    },
    {
      q: "Bagaimana saya menemukan bentuk wajah saya?",
      a: "Untuk menemukan bentuk wajah Anda, gunakan foto yang jelas dan terang dengan rambut tidak menutupi wajah dan kacamata dilepas, lalu jalankan melalui penganalisis. Ia membandingkan rasio yang diukur dengan keenam profil bentuk dan menemukan kecocokan terdekat untuk Anda secara otomatis.",
    },
    {
      q: "Bagaimana saya mengidentifikasi bentuk wajah saya?",
      a: "Mengidentifikasi bentuk wajah Anda berarti mencocokkan lebar dahi, tulang pipi, dan rahang serta panjang wajah Anda dengan salah satu dari enam profil standar. Penganalisis mengidentifikasinya secara presisi menggunakan geometri titik penanda wajah, sehingga Anda mendapatkan jawaban objektif alih-alih tebakan subjektif.",
    },
  ],

  // ── Shared content-page chrome ────────────────────────────────────────────
  contentPage: {
    lastUpdated: "Terakhir diperbarui:",
  },
  // Machine-translation notice shown on translated legal/about pages (set:html).
  mtNotice:
    "Halaman ini diterjemahkan secara mesin. Versi bahasa Inggris bersifat otoritatif; jika terjadi perbedaan, <a href=\"{enHref}\">naskah asli bahasa Inggris</a> yang berlaku.",

  // ── Error pages ─────────────────────────────────────────────────────────
  error: {
    eyebrow: "Kesalahan {code}",
    ctaHome: "Kembali ke beranda",
    ctaAnalyze: "Analisis wajah saya",
  },

  // ── Per-page SEO meta + content-page copy ─────────────────────────────────
  pages: {
    home: {
      title: "Penganalisis Bentuk Wajah AI Gratis Online — Deteksi Bentuk Wajah Anda",
      description:
        "Penganalisis bentuk wajah AI gratis online — unggah foto atau gunakan kamera Anda untuk menemukan bentuk wajah secara instan dengan rincian lengkap untuk keenam bentuk. Tanpa pendaftaran.",
    },
    about: {
      title: "Tentang Kami — AI Face Shape Analyzer",
      description:
        "Pelajari tentang AI Face Shape Analyzer — alat gratis dan cepat yang mendeteksi bentuk wajah Anda dari foto atau kamera langsung dengan rincian lengkap untuk keenam bentuk.",
      keywords:
        "tentang ai face shape analyzer, penganalisis bentuk wajah, siapa pembuat penganalisis bentuk wajah",
      eyebrow: "Tentang",
      heading: "Tentang AI Face Shape Analyzer",
      lead: "Kami membangun penganalisis bentuk wajah yang gratis dan akurat yang memberi Anda gambaran lengkap — bukan sekadar label satu kata.",
      html: `
        <p>
          <strong>AI Face Shape Analyzer</strong> adalah alat online gratis yang mendeteksi
          bentuk wajah Anda dari foto atau kamera langsung. Alih-alih memberi Anda
          satu tebakan saja, ia memetakan 478 titik penanda wajah, mengukur geometri nyata
          wajah Anda, dan memberi peringkat hasil Anda untuk keenam bentuk umum — oval,
          bulat, persegi, persegi panjang, hati, dan berlian.
        </p>
        <h2>Mengapa kami membangunnya</h2>
        <p>
          “Apa bentuk wajah saya?” adalah salah satu pertanyaan paling umum yang orang ajukan
          sebelum memilih potongan rambut, kacamata, atau gaya riasan atau perawatan diri
          yang baru. Kebanyakan alat menjawabnya dengan satu label dan membuat Anda
          bertanya-tanya seberapa yakin jawaban itu sebenarnya. Kami menginginkan sesuatu
          yang lebih jujur: alat yang menampilkan rincian lengkap, karena wajah nyata
          sering kali merupakan perpaduan dua bentuk alih-alih satu kecocokan sempurna.
        </p>
        <h2>Apa yang membuatnya berbeda</h2>
        <ul>
          <li>
            <strong>Jaring wajah langsung.</strong> Lapisan waktu nyata menunjukkan dengan
            tepat apa yang dibaca model saat bekerja, sehingga analisisnya tidak pernah terasa
            seperti kotak hitam.
          </li>
          <li>
            <strong>Rincian probabilitas lengkap.</strong> Anda mendapatkan bentuk yang
            paling cocok, skor kepercayaan, dan persentase berperingkat untuk keenam bentuk
            — ditambah deteksi perpaduan dua bentuk.
          </li>
          <li>
            <strong>Gratis dan tanpa hambatan.</strong> Tanpa pendaftaran, tanpa unduhan, dan
            tanpa batas penggunaan untuk pemakaian normal. Ia bekerja sama baiknya di ponsel
            maupun desktop.
          </li>
          <li>
            <strong>Dibangun untuk semua orang.</strong> Antarmukanya dapat diakses sejak
            dirancang, dengan dukungan keyboard, status fokus yang jelas, dan dukungan
            pengurangan gerakan.
          </li>
        </ul>
        <h2>Cara kerjanya</h2>
        <p>
          Saat Anda mengunggah foto atau membuka kamera, model di dalam browser menelusuri
          wajah Anda dan mengukur rasio rahang, tulang pipi, dahi, dan panjang, beserta
          kebersudutan rahang. Pengukuran tersebut dibandingkan dengan enam profil bentuk
          untuk menemukan kecocokan terdekat Anda. Hasilnya adalah pembacaan proporsi wajah
          Anda yang konsisten dan objektif — jauh lebih mantap daripada mengira-ngira di
          depan cermin.
        </p>
        <h2>Catatan jujur tentang akurasi</h2>
        <p>
          Bentuk wajah adalah label subjektif, bukan pengukuran yang pasti, dan wajah yang
          ambigu memang benar-benar tidak pasti. Hasil dapat berubah tergantung sudut foto,
          pencahayaan, ekspresi, rambut, dan kacamata. Kami memperlakukan analisis ini sebagai
          panduan penataan gaya yang membantu, bukan keputusan — dan setiap dari keenam bentuk
          memiliki kelebihannya sendiri.
        </p>
        <h2>Hubungi kami</h2>
        <p>
          Punya masukan, ide fitur, atau pertanyaan? Kami senang mendengarnya dari Anda —
          kunjungi <a href="/contact">halaman kontak</a> kami atau kirim email ke
          <a href="mailto:hello@aifaceshapeanalyzer.com">hello@aifaceshapeanalyzer.com</a>.
        </p>
        <p>
          Siap mencobanya? <a href="/#analyzer">Analisis wajah Anda</a> dan lihat rincian
          lengkap Anda dalam hitungan detik — sepenuhnya gratis.
        </p>
      `,
    },
    contact: {
      title: "Hubungi Kami — AI Face Shape Analyzer",
      description:
        "Hubungi tim AI Face Shape Analyzer. Kirim masukan, ide fitur, permintaan privasi, atau pertanyaan dukungan melalui email.",
      keywords:
        "hubungi ai face shape analyzer, dukungan penganalisis bentuk wajah, masukan penganalisis bentuk wajah",
      eyebrow: "Kontak",
      heading: "Hubungi Kami",
      lead: "Pertanyaan, masukan, atau ide fitur? Kami senang mendengarnya dari Anda. Cara tercepat untuk menghubungi kami adalah melalui email.",
      emailHeading: "Kirim email ke kami",
      emailGeneralLabel: "Umum & masukan:",
      emailPrivacyLabel: "Permintaan privasi:",
      emailIntro:
        "Kami membaca setiap pesan dan berupaya membalas dalam beberapa hari kerja. Untuk pertanyaan privasi, lihat {privacyLink} kami; untuk pertanyaan penggunaan, {termsLink} kami.",
      privacyLinkText: "Kebijakan Privasi",
      termsLinkText: "Syarat & Ketentuan",
      formHeading: "Kirim pesan",
      formIntro:
        "Isi kolom di bawah ini dan kami akan membuka email yang sudah terisi di aplikasi surel Anda — tinggal tekan kirim.",
      labelName: "Nama",
      labelEmail: "Email Anda",
      labelMessage: "Pesan",
      submit: "Buka email untuk mengirim",
      fallback: "Lebih suka menulis langsung? Kirim email ke {email}.",
      errMissing: "Silakan isi nama, email, dan pesan Anda.",
      errEmail: "Silakan masukkan alamat email yang valid.",
      // {name} fills both; the email body keeps the em dash + parenthesised email.
      mailSubject: "Kontak dari {name}",
    },
    privacy: {
      title: "Kebijakan Privasi — AI Face Shape Analyzer",
      description:
        "Bagaimana AI Face Shape Analyzer menangani foto dan data Anda. Analisis wajah berjalan di browser Anda; pelajari apa yang kami kumpulkan, cara kami menggunakannya, dan pilihan Anda.",
      keywords:
        "kebijakan privasi ai face shape analyzer, data penganalisis bentuk wajah, privasi penganalisis wajah",
      eyebrow: "Hukum",
      heading: "Kebijakan Privasi",
      lead: "Kebijakan ini menjelaskan informasi apa yang dikumpulkan AI Face Shape Analyzer, bagaimana foto Anda diproses, dan pilihan yang Anda miliki.",
      updated: "19 Juni 2026",
      html: `
        <p>
          AI Face Shape Analyzer (“kami”, “milik kami”) mengoperasikan situs web di
          aifaceshapeanalyzer.com (“Layanan”). Kebijakan Privasi ini menjelaskan bagaimana
          kami menangani informasi saat Anda menggunakan Layanan. Dengan menggunakan Layanan,
          Anda menyetujui praktik yang dijelaskan di sini.
        </p>
        <h2>Foto dan kamera Anda</h2>
        <p>
          Analisis bentuk wajah berjalan di browser Anda. Saat Anda mengunggah foto atau
          menggunakan kamera, gambar diproses di perangkat Anda sendiri oleh model di dalam
          browser untuk mengukur proporsi wajah. Kami tidak mewajibkan Anda untuk membuat
          akun, dan kami tidak menjual gambar Anda.
        </p>
        <p>
          Anda mengendalikan apakah akan memberikan akses kamera melalui browser Anda, dan
          Anda dapat mencabut izin tersebut kapan saja di pengaturan browser Anda.
        </p>
        <h2>Informasi yang kami kumpulkan</h2>
        <p>Kami berupaya mengumpulkan sesedikit mungkin. Bergantung pada cara Anda menggunakan Layanan, ini dapat mencakup:</p>
        <ul>
          <li>
            <strong>Data penggunaan dan perangkat.</strong> Informasi teknis standar seperti
            jenis browser, jenis perangkat, ukuran layar, halaman perujuk, dan wilayah umum,
            yang dikumpulkan untuk menjaga Layanan tetap berfungsi dan untuk memahami
            penggunaan secara agregat.
          </li>
          <li>
            <strong>Penyimpanan lokal.</strong> Kami menyimpan nilai-nilai kecil di browser
            Anda (misalnya, preferensi tema terang/gelap Anda dan penghitung penggunaan
            ringan) di perangkat Anda. Data ini tidak dikirim kepada kami sebagai profil
            pengguna.
          </li>
          <li>
            <strong>Pesan yang Anda kirim kepada kami.</strong> Jika Anda menghubungi kami
            melalui email, kami menerima informasi yang Anda pilih untuk dibagikan, seperti
            alamat email dan isi pesan Anda.
          </li>
        </ul>
        <h2>Cookie dan analitik</h2>
        <p>
          Kami dapat menggunakan cookie atau teknologi serupa, termasuk analitik yang
          menghormati privasi, untuk mengukur lalu lintas agregat dan meningkatkan Layanan.
          Anda dapat mengendalikan cookie melalui pengaturan browser Anda. Menonaktifkannya
          seharusnya tidak mencegah penganalisis inti berfungsi.
        </p>
        <h2>Bagaimana kami menggunakan informasi</h2>
        <ul>
          <li>Untuk menyediakan, memelihara, dan meningkatkan Layanan.</li>
          <li>Untuk mendiagnosis masalah teknis dan mencegah penyalahgunaan.</li>
          <li>Untuk menanggapi pertanyaan dan permintaan dukungan Anda.</li>
          <li>Untuk mematuhi kewajiban hukum.</li>
        </ul>
        <h2>Layanan pihak ketiga</h2>
        <p>
          Kami dapat mengandalkan penyedia pihak ketiga untuk hosting, pengiriman konten, dan
          analitik. Penyedia ini memproses data teknis terbatas atas nama kami dan diharapkan
          untuk menjaganya. Layanan juga dapat menautkan ke situs eksternal yang diatur oleh
          kebijakan privasi mereka sendiri.
        </p>
        <h2>Penyimpanan data</h2>
        <p>
          Kami menyimpan data teknis dan analitik hanya selama diperlukan untuk tujuan yang
          dijelaskan di atas, lalu menghapus atau menganonimkannya. Korespondensi email
          disimpan selama diperlukan untuk menangani permintaan Anda dan untuk pencatatan
          yang wajar.
        </p>
        <h2>Privasi anak-anak</h2>
        <p>
          Layanan ini tidak ditujukan untuk anak-anak di bawah usia 13 tahun (atau usia
          minimum di yurisdiksi Anda), dan kami tidak dengan sengaja mengumpulkan informasi
          pribadi dari mereka. Jika Anda yakin seorang anak telah memberikan informasi kepada
          kami, hubungi kami dan kami akan mengambil langkah-langkah yang sesuai untuk
          menghapusnya.
        </p>
        <h2>Hak-hak Anda</h2>
        <p>
          Bergantung pada tempat tinggal Anda, Anda mungkin memiliki hak untuk mengakses,
          memperbaiki, atau menghapus informasi pribadi yang kami simpan tentang Anda, atau
          untuk menolak pemrosesan tertentu. Untuk mengajukan permintaan, kirim email kepada
          kami menggunakan alamat di bawah ini. Kami akan menanggapi sesuai dengan hukum yang
          berlaku.
        </p>
        <h2>Perubahan pada kebijakan ini</h2>
        <p>
          Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Saat kami
          melakukannya, kami akan merevisi tanggal “Terakhir diperbarui” di atas. Perubahan
          signifikan dapat disorot pada Layanan.
        </p>
        <h2>Hubungi kami</h2>
        <p>
          Pertanyaan tentang kebijakan ini? Kirim email ke
          <a href="mailto:privacy@aifaceshapeanalyzer.com">privacy@aifaceshapeanalyzer.com</a>
          atau kunjungi <a href="/contact">halaman kontak</a> kami.
        </p>
        <hr />
        <p>
          Dokumen ini disediakan untuk informasi umum dan bukan merupakan nasihat hukum.
          Silakan tinjau bersama profesional yang berkualifikasi untuk memastikan dokumen ini
          sesuai dengan keadaan spesifik Anda.
        </p>
      `,
    },
    terms: {
      title: "Syarat & Ketentuan — AI Face Shape Analyzer",
      description:
        "Syarat yang mengatur penggunaan Anda atas AI Face Shape Analyzer, termasuk penggunaan yang dapat diterima, penafian, dan batasan tanggung jawab.",
      keywords:
        "syarat ai face shape analyzer, syarat dan ketentuan penganalisis bentuk wajah, ketentuan layanan",
      eyebrow: "Hukum",
      heading: "Syarat & Ketentuan",
      lead: "Syarat-syarat ini mengatur penggunaan Anda atas AI Face Shape Analyzer. Harap baca dengan saksama sebelum menggunakan Layanan.",
      updated: "19 Juni 2026",
      html: `
        <p>
          Syarat & Ketentuan ini (“Syarat”) membentuk perjanjian antara Anda dan
          AI Face Shape Analyzer (“kami”, “milik kami”) mengenai penggunaan Anda atas
          situs web di aifaceshapeanalyzer.com (“Layanan”). Dengan mengakses atau menggunakan
          Layanan, Anda setuju untuk terikat oleh Syarat ini. Jika Anda tidak setuju, jangan
          gunakan Layanan.
        </p>
        <h2>Penggunaan Layanan</h2>
        <p>
          Layanan memungkinkan Anda menganalisis foto atau umpan kamera langsung untuk
          memperkirakan bentuk wajah Anda. Layanan disediakan untuk tujuan pribadi,
          informasional, dan hiburan. Anda harus berusia minimal 13 tahun (atau usia minimum
          di yurisdiksi Anda) untuk menggunakan Layanan.
        </p>
        <h2>Penggunaan yang dapat diterima</h2>
        <p>Anda setuju untuk tidak:</p>
        <ul>
          <li>Mengunggah gambar yang tidak Anda miliki hak untuk menggunakannya, atau gambar orang lain tanpa persetujuan mereka.</li>
          <li>Menggunakan Layanan untuk tujuan yang melanggar hukum, melecehkan, atau merugikan.</li>
          <li>Berupaya mengganggu, membebani secara berlebihan, merekayasa balik, atau memperoleh akses tidak sah ke Layanan atau sistemnya.</li>
          <li>Mengikis, menjual kembali, atau mengeksploitasi secara komersial Layanan atau kontennya tanpa izin tertulis dari kami.</li>
        </ul>
        <h2>Bukan nasihat profesional</h2>
        <p>
          Bentuk wajah adalah label subjektif, bukan pengukuran yang pasti. Hasilnya merupakan
          perkiraan yang dihasilkan dari gambar Anda dan dapat berbeda tergantung sudut,
          pencahayaan, ekspresi, rambut, kacamata, dan lensa kamera. Layanan tidak memberikan
          nasihat medis, psikologis, kosmetik, atau profesional, dan Anda tidak boleh
          mengandalkannya sebagai hal tersebut. Gunakan hasilnya hanya sebagai panduan penataan
          gaya umum.
        </p>
        <h2>Kekayaan intelektual</h2>
        <p>
          Layanan, termasuk desain, teks, grafik, dan perangkat lunak yang mendasarinya,
          dimiliki oleh kami atau pemberi lisensi kami dan dilindungi oleh undang-undang yang
          berlaku. Kami memberi Anda lisensi terbatas, non-eksklusif, dan tidak dapat
          dialihkan untuk menggunakan Layanan sesuai tujuannya. Anda mempertahankan hak apa pun
          yang Anda miliki atas gambar yang Anda berikan; kami tidak mengklaim kepemilikan
          atasnya.
        </p>
        <h2>Penafian jaminan</h2>
        <p>
          Layanan disediakan “sebagaimana adanya” dan “sebagaimana tersedia” tanpa jaminan
          apa pun, baik tersurat maupun tersirat, termasuk tetapi tidak terbatas pada
          keterjualan, kelayakan untuk tujuan tertentu, akurasi, dan tidak melanggar.
          Kami tidak menjamin bahwa Layanan akan tidak terganggu, bebas kesalahan, atau bahwa
          hasilnya akan akurat atau dapat diandalkan.
        </p>
        <h2>Batasan tanggung jawab</h2>
        <p>
          Sejauh diizinkan oleh hukum, kami tidak akan bertanggung jawab atas kerugian tidak
          langsung, insidental, khusus, konsekuensial, atau hukuman apa pun, atau kehilangan
          data, keuntungan, atau itikad baik, yang timbul dari penggunaan Anda atau
          ketidakmampuan Anda menggunakan Layanan. Jika tanggung jawab tidak dapat dikecualikan,
          maka dibatasi sejauh diizinkan oleh hukum.
        </p>
        <h2>Tautan pihak ketiga</h2>
        <p>
          Layanan dapat berisi tautan ke situs web atau sumber daya pihak ketiga. Kami tidak
          bertanggung jawab atas konten, kebijakan, atau praktik situs-situs tersebut dan
          menyediakan tautan tersebut hanya untuk kemudahan.
        </p>
        <h2>Perubahan pada Layanan dan Syarat</h2>
        <p>
          Kami dapat mengubah atau menghentikan Layanan, atau memperbarui Syarat ini, kapan
          saja. Saat kami memperbarui Syarat, kami akan merevisi tanggal “Terakhir diperbarui”
          di atas. Penggunaan berkelanjutan Anda atas Layanan setelah perubahan berlaku
          merupakan penerimaan atas Syarat yang direvisi.
        </p>
        <h2>Hukum yang mengatur</h2>
        <p>
          Syarat ini diatur oleh hukum yang berlaku di tempat operasi utama kami, tanpa
          memperhatikan prinsip pertentangan hukum. Setiap perselisihan akan tunduk pada
          pengadilan yang memiliki yurisdiksi di sana, kecuali ditentukan lain oleh hukum
          lokal yang bersifat wajib.
        </p>
        <h2>Hubungi kami</h2>
        <p>
          Pertanyaan tentang Syarat ini? Kirim email ke
          <a href="mailto:hello@aifaceshapeanalyzer.com">hello@aifaceshapeanalyzer.com</a>
          atau kunjungi <a href="/contact">halaman kontak</a> kami.
        </p>
        <hr />
        <p>
          Dokumen ini disediakan untuk informasi umum dan bukan merupakan nasihat hukum.
          Silakan tinjau bersama profesional yang berkualifikasi untuk memastikan dokumen ini
          sesuai dengan keadaan spesifik Anda.
        </p>
      `,
    },
    notFound: {
      title: "Halaman tidak ditemukan (404) — AI Face Shape Analyzer",
      description:
        "Halaman yang Anda cari tidak ada. Kembali ke beranda untuk menemukan bentuk wajah Anda dalam hitungan detik.",
      code: "404",
      heading: "Kami tidak dapat menemukan halaman itu.",
      message:
        "Tautan mungkin rusak atau halaman mungkin telah dipindahkan. Analisis bentuk wajah Anda masih ada tepat di tempat Anda meninggalkannya.",
    },
    serverError: {
      title: "Terjadi kesalahan (500) — AI Face Shape Analyzer",
      description:
        "Terjadi kesalahan yang tidak terduga. Coba lagi atau kembali ke beranda untuk menemukan bentuk wajah Anda dalam hitungan detik.",
      code: "500",
      heading: "Terjadi kesalahan di pihak kami.",
      message:
        "Kesalahan tak terduga menghentikan halaman ini dari pemuatan. Coba lagi sebentar, atau kembali ke beranda untuk menemukan bentuk wajah Anda.",
    },
  },

  // Shared keyword meta (home + default). Locale files may localize lightly.
  keywords:
    "penganalisis bentuk wajah ai, penganalisis bentuk wajah ai terbaik, penganalisis bentuk wajah ai gratis, penganalisis bentuk wajah ai online, penganalisis bentuk wajah ai online gratis, pendeteksi bentuk wajah ai, penganalisis bentuk wajah ai, penganalisis bentuk wajah, bentuk wajah, apa bentuk wajah saya, cara menentukan bentuk wajah, penganalisis wajah, kalkulator bentuk wajah, penganalisis daya tarik wajah",
};
