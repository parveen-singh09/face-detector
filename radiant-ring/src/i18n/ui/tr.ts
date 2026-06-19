import { type UIStrings } from "./en";

export const tr: UIStrings = {
  nav: {
    logoText: "Yüz Şekli Analizcisi",
    logoAria: "AI Face Shape Analyzer — ana sayfa",
    primaryAria: "Birincil",
    links: {
      shapes: "Yüz şekilleri",
      about: "Hakkında",
      contact: "İletişim",
      privacy: "Gizlilik",
      terms: "Şartlar",
    },
    themeToggleAria: "Karanlık modu aç/kapat",
    themeToggleTitle: "Temayı değiştir",
    menuOpenAria: "Menüyü aç",
    menuCloseAria: "Menüyü kapat",
    langLabel: "Dil",
  },

  footer: {
    logoAria: "AI Face Shape Analyzer — ana sayfa",
    brandName: "Yüz Şekli Analizcisi",
    tagline:
      "Yüz şeklinizi saniyeler içinde bulun — ücretsiz ve doğru, altı şeklin tamamına dair eksiksiz bir döküm ile.",
    productEyebrow: "Ürün",
    productLinks: {
      analyze: "Yüzümü analiz et",
      how: "Nasıl çalışır",
      shapes: "Yüz şekilleri",
    },
    aboutEyebrow: "Hakkında",
    aboutLinks: {
      aboutTool: "Araç hakkında",
      faq: "SSS",
    },
    companyEyebrow: "Şirket",
    companyLinks: {
      about: "Hakkımızda",
      contact: "Bize ulaşın",
      privacy: "Gizlilik politikası",
      terms: "Şartlar ve koşullar",
    },
    mono: "Altı şekil · 478 noktalı yüz örgüsü",
    disclaimer:
      "Sorumluluk reddi: yüz şekli kesin bir ölçüm değil, öznel bir etikettir. Sonuçlar fotoğrafınızdan üretilen bir tahmindir ve açı, ışık, ifade, saç, gözlük ve kamera lensine göre değişebilir. Birçok yüz iki şeklin karışımıdır — bunu kesin veya profesyonel bir tavsiye olarak değil, stil için bir rehber olarak kullanın.",
  },

  hero: {
    titleBefore: "Ücretsiz Yapay Zekâ ",
    titleAccent: "Yüz Şekli",
    titleAfter: " Analizcisi",
    sub: "Doğru bir yüz şekli analizi için bir fotoğraf yükleyin veya kameranızı kullanın — altı şeklin tamamına dair eksiksiz bir döküm ile.",
    ctaPrimary: "Yüzümü analiz et",
    ctaSecondary: "Nasıl çalışır",
    trust: {
      free: "Sonsuza dek ücretsiz",
      mesh: "Canlı yüz örgüsü",
      ranked: "Altı şekil sıralanır",
    },
  },

  howItWorks: {
    eyebrow: "Nasıl çalışır",
    heading: "Yüz şeklinize üç adım.",
  },
  steps: [
    {
      n: "01",
      title: "Yükleyin veya kameranızı açın",
      body: "Net, öne dönük bir fotoğraf seçin (10MB'a kadar) veya canlı bir okuma için kameranızı kullanın.",
    },
    {
      n: "02",
      title: "478 yüz noktasını haritalandırırız",
      body: "Cihaz üzerinde çalışan bir model yüz örgünüzü çizer ve çene, elmacık kemiği, alın ve uzunluk oranlarını ölçer.",
    },
    {
      n: "03",
      title: "Eksiksiz bir döküm alın",
      body: "En uygun şeklinizi, bir güven puanını ve altı şeklin tamamına dair sıralı bir yüzde dökümünü görün.",
    },
  ],

  shapesSection: {
    eyebrow: "Referans",
    heading: "Altı yüz şekli.",
    sub: "Her sonuç bu altı profile göre puanlanır. Çoğu insan, başka bir şeklin özelliklerini taşıyan birine yakındır — bu yüzden tüm karışımı gösteriyoruz.",
    exampleAlt: "{shape} yüz şeklinin örneği",
  },
  shapeLabels: {
    oval: "Oval",
    round: "Yuvarlak",
    square: "Kare",
    rectangle: "Dikdörtgen",
    heart: "Kalp",
    diamond: "Elmas",
  },
  shapeDescriptions: {
    oval: "Genişliğinden daha uzun bir yüz boyu ve hafifçe yuvarlatılmış bir çene ile dengeli oranlar. Yaygın olarak en çok yönlü şekil kabul edilir.",
    round:
      "Yüz uzunluğu ve genişliği birbirine yakın, daha dolgun yanaklar ve yuvarlatılmış bir çene hattı ile yumuşak açılar.",
    square:
      "Alın, elmacık kemikleri ve çenenin neredeyse aynı genişlikte olduğu güçlü, köşeli bir çene — gözü pek, yapılandırılmış bir şekil.",
    rectangle:
      "Kare gibi ama daha uzun — yüz uzunluğu genişliği belirgin şekilde aşar, alın, elmacık kemikleri ve çene neredeyse paralel ilerler.",
    heart:
      "Daha geniş bir alın ve elmacık kemikleri, daha dar, genellikle sivri bir çeneye doğru incelir — klasik kalp silüeti.",
    diamond:
      "Elmacık kemikleri en geniş noktadır, daha dar bir alın ve çene ile belirgin, sivri bir çene vardır.",
  },

  analyzer: {
    eyebrow: "Analizci",
    heading: "Yüz şeklinizi tespit edin",
    sub: "Net, öne dönük bir fotoğraf yükleyin veya kameranızı kullanın.",
    tablistAria: "Giriş yöntemi",
    tabUpload: "Fotoğraf yükle",
    tabCamera: "Kamerayı kullan",
    fileInputAria: "Analiz edilecek bir fotoğraf seçin",
    dropzoneTitle: "Bir fotoğraf bırakın veya göz atmak için tıklayın",
    dropzoneHint: "JPG, PNG veya WebP · 10MB'a kadar",
    previewImgAlt: "Yüklediğiniz fotoğraf",
    cameraPreviewAria: "Kamera önizlemesi",
    loadingModel: "Cihaz üzerindeki model yükleniyor…",
    btnAnalyze: "Yüzümü analiz et",
    btnCapture: "Yakala ve analiz et",
    btnReset: "Başka bir tane analiz et",
    uploadTipsAria: "Doğru bir okuma için ipuçları",
    uploadTips: [
      "Net, keskin bir fotoğraf kullanın — iyi aydınlatılmış, net ve doğrudan kameraya dönük.",
      "Yalnızca yüzünüz öne çıksın diye arka planı sade ve dağınık olmayan tutun.",
      "Hazırlanın — saçlar yüzünüzden uzakta, gözlük çıkarılmış ve nötr bir ifade.",
    ],
    camTipsAria: "Doğru bir okuma için ipuçları",
    camTips: [
      "Gözlüğünüzü çıkarın — çerçeveler yanak ve kaş kenarlarını gizler.",
      "Saçınız yüzünüzden uzakta, doğrudan kameraya dönük durun.",
      "5 okuma yakalamak için tıklayın — doğruluk için bunların ortalamasını alıyoruz.",
    ],
    resultEyebrow: "Yüz şekliniz",
    breakdownTitle: "Eksiksiz döküm",
    resultDisclaimer:
      "Dikkat: yüz şekli kesin bir bilim değil, öznel bir etikettir. Sonuçlar bir tahmindir ve fotoğraf açınıza, ışığa, ifadeye, yüzü kapatan saça, gözlüğe ve kamera lensine göre değişebilir. Birçok yüz iki şeklin doğal bir karışımıdır — bunu kesin bir karar olarak değil, yardımcı bir rehber olarak değerlendirin.",
    idleTitle: "Ne elde edeceksiniz",
    idleItems: [
      "Bir güven puanıyla birlikte en uygun şekliniz",
      "Altı yüz şeklinin tamamına dair sıralı bir yüzde",
      "Yüzünüz iki şeklin karışımı olduğunda bir not",
    ],
    msg: {
      analyzing: "Analiz ediliyor…",
      rateLimited:
        "Saatlik sınıra ulaştınız. Lütfen {retryAfter} tekrar deneyin.",
      fileType: "Lütfen bir JPG, PNG veya WebP görseli seçin.",
      fileTooLarge: "Bu görsel 10MB'ı aşıyor. Lütfen daha küçük bir dosya seçin.",
      readError:
        "Bu görsel okunamadı. iPhone HEIC fotoğrafları desteklenmiyor — lütfen JPG, PNG veya WebP kullanın.",
      noFace: "Yüz algılanmadı. Daha net, öne dönük bir fotoğraf deneyin.",
      analyzeError:
        "Bu görsel analiz edilirken bir şeyler ters gitti. Lütfen tekrar deneyin.",
      noCameraSupport: "Tarayıcınız kamera erişimini desteklemiyor.",
      cameraError:
        "Kameraya erişilemedi. İzinleri kontrol edin veya bunun yerine fotoğraf yüklemeyi kullanın.",
      noFaceYet:
        "Henüz yüz algılanmadı. Yüzünüzü ortalayın, ardından yakalamak için tıklayın.",
      captureError: "Yakalama sırasında bir şeyler ters gitti. Lütfen tekrar deneyin.",
      captureReading: "Okuma yakalanıyor - [{n}/{total}]",
      confidence: "%{pct} güven",
      blendDesc: "Çoğunlukla {top}, {runnerUp} özellikleriyle. {desc}",
    },
  },

  seo: {
    eyebrow: "Araç hakkında",
    heading: "Ücretsiz yapay zekâ yüz şekli analizcisi, çevrimiçi.",
    html: `
      <p>
        <strong>Yapay zekâ yüz şekli analizcimiz</strong>, yüz şeklinizi
        saniyeler içinde söyleyen ücretsiz, çevrimiçi bir araçtır — kayıt
        gerekmez ve indirme gerekmez. Daha önce hiç
        <em>“yüz şeklim ne?”</em> diye sorup nasıl yanıt vereceğinizden emin
        olamadıysanız, bunu öğrenmenin hızlı yolu budur. Net, öne dönük bir
        fotoğraf yükleyin veya kameranızı açın, gerisini
        <strong>yüz şekli yapay zekâ analizcisi</strong> halleder: 478 yüz
        işaret noktasını haritalandırır, yüzünüzün geometrisini ölçer ve
        sonucu yaygın altı şeklin tamamı arasında sıralar.
      </p>
      <h3>En iyi yapay zekâ yüz şekli analizcisini ne yapar</h3>
      <p>
        Çoğu araç size tek bir etiket verir ve doğru olmasını umar. Bunun
        yerine tüm resmi göstererek, bizce
        <strong>en iyi yapay zekâ yüz şekli analizcisini</strong> oluşturduk.
        Birleşik bir <strong>yapay zekâ yüz şekli dedektörü ve yüz
        analizcisi</strong> olarak, oval, yuvarlak, kare, dikdörtgen, kalp ve
        elmas için bir güven puanı ile sıralı bir yüzde dökümü döndürür — çünkü
        gerçek yüzler genellikle tek bir mükemmel eşleşme değil, iki şeklin
        karışımıdır. Canlı bir yüz örgüsü katmanı, modelin çalışırken tam
        olarak neyi okuduğunu gösterir, böylece analiz hiçbir zaman bir kara
        kutu gibi hissettirmez.
      </p>
      <h3>Yüz şeklinizi nasıl belirlersiniz</h3>
      <p>
        Bir ayna ve mezura olmadan
        <strong>yüz şeklini nasıl belirleyeceğinizi</strong> mi merak
        ediyorsunuz? Klasik yöntem dört ölçümü karşılaştırır — alın genişliği,
        elmacık kemiği genişliği, çene hattı genişliği ve yüz uzunluğu — ve
        bunları birbirine karşı tartar. Bu
        <strong>yüz şekli hesaplayıcısının</strong> otomatikleştirdiği şey tam
        olarak budur. Manuel bir <strong>yüz analizcisi</strong> tahmine yer
        bırakırken, <strong>yüz şekli analizci yapay zekâmız</strong> hassas
        antropometrik oranları ve çene köşeliliğini doğrudan işaret
        noktalarından okur, böylece her seferinde tutarlı bir yanıt alırsınız.
        En doğru okuma için saçınızı yüzünüzden uzaklaştırın, gözlüğü çıkarın,
        nötr bir ifade koruyun ve eşit, önden bir aydınlatma kullanın.
      </p>
      <h3>Kullanımı ücretsiz, çevrimiçi</h3>
      <p>
        Bu <strong>çevrimiçi ücretsiz yapay zekâ yüz şekli analizcisi</strong>
        aracı çevrimiçi çalışır ve kurulacak hiçbir şey yoktur. Telefonda veya
        masaüstünde aynı şekilde çalışır ve gerçekten de normal kullanım için
        kullanım sınırı olmayan, <strong>ücretsiz bir yapay zekâ yüz şekli
        analizcisidir</strong>.
      </p>
      <h3>Yüz şekillerinden yakışan seçimlere</h3>
      <p>
        <strong>Yüz şeklinizi</strong> bilmek, daha iyi günlük seçimler için
        başlangıç noktasıdır. İnsanlar bunu saç kesimleri ve saç modelleri
        seçmek, oranlarını tamamlayan gözlük ve güneş gözlüğü çerçeveleri
        seçmek, kaş şekillendirmek ve makyaj veya sakal şekillendirme çerçevesi
        oluşturmak için kullanır. Bazı insanlar bir
        <strong>yüz çekiciliği analizcisi</strong> arasa da, güzellik özneldir
        ve yüz şekli bir puan değildir — altı <strong>yüz şeklinin</strong> her
        birinin kendi güçlü yanları vardır ve buradaki amaç yüzleri sıralamak
        değil, kendinize güvenerek stil oluşturmanıza yardımcı olmaktır. Sonucu
        bir karar değil, yardımcı bir rehber olarak değerlendirin.
      </p>
      <p>
        Tahmin etmeyi bırakmaya hazır mısınız? Yukarıdaki
        <a href="#analyzer">analizciye</a> kaydırın, bir fotoğraf ekleyin veya
        kameranızı açın ve <strong>yüz şekli analizci yapay zekânın</strong>
        eksiksiz dökümünüzü saniyeler içinde göstermesine izin verin —
        tamamen ücretsiz.
      </p>
    `,
  },

  faqSection: {
    eyebrow: "SSS",
    heading: "Sık sorulan sorular.",
  },
  faqs: [
    {
      q: "Yüz şekli analizcisi nedir?",
      a: "Yüz şekli analizcisi, yüzünüzün oranlarına — alın, elmacık kemikleri, çene hattı ve uzunluk — bakan ve hangi şekle en yakın olduğunuzu söyleyen bir araçtır. Yapay zekâ yüz şekli analizcimiz bunu, bir fotoğraftan veya kameranızdan 478 yüz işaret noktasını haritalandırarak ve ardından eşleşmenizi altı şeklin tamamı arasında sıralayarak otomatik olarak yapar.",
    },
    {
      q: "Yüz şeklimi nasıl belirlerim?",
      a: "Yüz şeklinizi belirlemek için dört şeyi karşılaştırın: alnınızın, elmacık kemiklerinizin ve çenenizin genişliği, ayrıca yüzünüzün genel uzunluğu. Oranları sizinkiyle eşleşen şekil sizin yüz şeklinizdir. Bu analizci bu oranları sizin için otomatik olarak ölçer, bu yüzden tahmine veya mezuraya gerek yoktur.",
    },
    {
      q: "Hangi yüz şekline sahibim?",
      a: "Büyük olasılıkla altı yaygın yüz şeklinden birine sahipsiniz: oval, yuvarlak, kare, dikdörtgen, kalp veya elmas. Net, öne dönük bir fotoğraf yükleyin veya kameranızı açın, analizci hangisine sahip olduğunuzu bir güven puanı ve eksiksiz bir yüzde dökümüyle birlikte söyleyecektir.",
    },
    {
      q: "Yüz şeklim ne?",
      a: "Yüz şekliniz, alnınızın, elmacık kemiklerinizin ve çenenizin yüz uzunluğunuza göre ne kadar geniş olduğuyla tanımlanan, yüzünüzün genel hatlarıdır. Bunu öğrenmenin en hızlı yolu yukarıdaki analizciden bir fotoğraf geçirmektir — gerçek yüz geometrinizi okur ve en yakın eşleşmenizi saniyeler içinde gösterir.",
    },
    {
      q: "Yüzüm hangi şekilde?",
      a: "Yüzünüzün şekli, en geniş noktasına ve uzunluğuna bağlıdır. Yüzünüz genişliğinden belirgin şekilde uzunsa oval veya dikdörtgen olabilir; genişlik ve uzunluk benzerse yuvarlak veya kare; alnınız en geniş kısımsa kalp veya elmas. Analizci bunu ölçümlerinizden tam olarak belirler.",
    },
    {
      q: "Yüz şeklimi nasıl belirleyebilirim?",
      a: "En kolay yol bunu yapay zekâya bırakmaktır: saçınızı arkaya toplayın, doğrudan kameraya dönün ve bir fotoğraf yükleyin veya canlı kamerayı kullanın. Araç çene, elmacık kemiği, alın ve uzunluk oranlarınızı ölçer ve yüz şeklinizi anında döndürür — aynada göz kararı belirlemekten çok daha tutarlıdır.",
    },
    {
      q: "Yüz şeklimi nasıl anlayabilirim?",
      a: "Yüzünüzün en geniş özelliğini bularak ve yüzünüzün genişliğinden uzun olup olmadığını kontrol ederek yüz şeklinizi anlayabilirsiniz. Bir aynada hatlarınızı çizmek yerine, bu analizci yüz şeklinizi tek bir fotoğraftan, manuel ölçüm yapmadan sizin için söyler.",
    },
    {
      q: "Hangi yüz şekline sahip olduğumu nasıl anlarım?",
      a: "Üç işarete bakın: yüzünüzün en geniş olduğu yer, çenenizin ne kadar köşeli veya yumuşak olduğu ve yüzünüzün uzun mu yoksa dengeli mi olduğu. Analizci her üçünü de 478 işaret noktasından okur ve tam olarak hangi yüz şekline sahip olduğunuzu, ayrıca ikinci sıradaki şekillerle ne kadar güçlü eşleştiğinizi söyler.",
    },
    {
      q: "Yüz şeklim nedir?",
      a: "Yüz şekliniz ne olursa olsun, analizci bunu saniyeler içinde adlandırabilir. Yukarıya bir fotoğraf ekleyin veya kameranızı açın, en uygun şeklinizi, bir güven yüzdesini ve oval, yuvarlak, kare, dikdörtgen, kalp ve elmas arasında sıralı bir dökümü alacaksınız.",
    },
    {
      q: "Yüz şeklimi nasıl öğrenebilirim?",
      a: "Yüz şeklinizi tam burada ücretsiz öğrenebilirsiniz — kayıt yok ve indirme yok. Öne dönük bir fotoğraf yükleyin veya kameranızı kullanın, yapay zekâ yüz oranlarınızı ölçer ve sonucunuzu saniyeler içinde gösterir.",
    },
    {
      q: "Yüz şeklimi nasıl bulurum?",
      a: "Yüz şeklinizi bulmak için saçınız yüzünüzden uzakta ve gözlüğünüz çıkarılmış net, iyi aydınlatılmış bir fotoğraf kullanın, ardından bunu analizciden geçirin. Ölçülen oranlarınızı altı şekil profilinin tamamıyla karşılaştırır ve en yakın eşleşmeyi sizin için otomatik olarak bulur.",
    },
    {
      q: "Yüz şeklimi nasıl tanımlarım?",
      a: "Yüz şeklinizi tanımlamak, alın, elmacık kemiği ve çene genişliklerinizi ve yüz uzunluğunuzu altı standart profilden biriyle eşleştirmek anlamına gelir. Analizci bunu yüz işaret noktası geometrisini kullanarak tam olarak tanımlar, böylece öznel bir tahmin yerine nesnel bir yanıt alırsınız.",
    },
  ],

  contentPage: {
    lastUpdated: "Son güncelleme:",
  },
  mtNotice:
    "Bu sayfa makine tarafından çevrilmiştir. İngilizce sürüm bağlayıcıdır; herhangi bir uyuşmazlık durumunda <a href=\"{enHref}\">İngilizce orijinal</a> geçerlidir.",

  error: {
    eyebrow: "Hata {code}",
    ctaHome: "Ana sayfaya dön",
    ctaAnalyze: "Yüzümü analiz et",
  },

  pages: {
    home: {
      title: "Ücretsiz Çevrimiçi Yapay Zekâ Yüz Şekli Analizcisi — Yüz Şeklinizi Tespit Edin",
      description:
        "Ücretsiz çevrimiçi yapay zekâ yüz şekli analizcisi — bir fotoğraf yükleyin veya kameranızı kullanın, yüz şeklinizi 6 şeklin tamamına dair eksiksiz bir dökümle anında bulun. Kayıt yok.",
    },
    about: {
      title: "Hakkımızda — AI Face Shape Analyzer",
      description:
        "AI Face Shape Analyzer hakkında bilgi edinin — yüz şeklinizi bir fotoğraftan veya canlı kameradan, altı şeklin tamamına dair eksiksiz bir dökümle tespit eden ücretsiz, hızlı bir araç.",
      keywords:
        "ai face shape analyzer hakkında, yüz şekli analizcisi, yüz şekli analizcisini kim yaptı",
      eyebrow: "Hakkında",
      heading: "AI Face Shape Analyzer Hakkında",
      lead: "Size yalnızca tek kelimelik bir etiket değil, tüm resmi sunan ücretsiz, doğru bir yüz şekli analizcisi oluşturduk.",
      html: `
        <p>
          <strong>AI Face Shape Analyzer</strong>, yüz şeklinizi bir fotoğraftan
          veya canlı kameranızdan tespit eden ücretsiz çevrimiçi bir araçtır. Size
          tek bir tahmin sunmak yerine 478 yüz işaret noktasını haritalandırır,
          yüzünüzün gerçek geometrisini ölçer ve sonucunuzu yaygın altı şeklin
          tamamı arasında sıralar — oval, yuvarlak, kare, dikdörtgen, kalp ve
          elmas.
        </p>
        <h2>Neden oluşturduk</h2>
        <p>
          “Yüz şeklim ne?” bir saç kesimi, bir çift gözlük ya da yeni bir makyaj
          veya bakım stili seçmeden önce insanların sorduğu en yaygın sorulardan
          biridir. Çoğu araç bunu tek bir etiketle yanıtlar ve o yanıtın gerçekte
          ne kadar güvenilir olduğunu merak etmenize neden olur. Biz daha dürüst
          bir şey istedik: tüm dökümü gösteren bir araç, çünkü gerçek yüzler
          genellikle tek bir mükemmel eşleşme değil, iki şeklin karışımıdır.
        </p>
        <h2>Onu farklı kılan ne</h2>
        <ul>
          <li>
            <strong>Canlı bir yüz örgüsü.</strong> Gerçek zamanlı bir katman,
            modelin çalışırken tam olarak neyi okuduğunu gösterir, böylece analiz
            hiçbir zaman bir kara kutu gibi hissettirmez.
          </li>
          <li>
            <strong>Eksiksiz bir olasılık dökümü.</strong> En uygun bir şekil, bir
            güven puanı ve altı şeklin tamamına dair sıralı bir yüzde alırsınız —
            ayrıca iki şeklin karışımı tespiti.
          </li>
          <li>
            <strong>Ücretsiz ve sorunsuz.</strong> Kayıt yok, indirme yok ve normal
            kullanım için kullanım sınırı yok. Telefonda veya masaüstünde aynı
            şekilde çalışır.
          </li>
          <li>
            <strong>Herkes için tasarlandı.</strong> Arayüz, klavye desteği, net
            odak durumları ve azaltılmış hareket desteğiyle tasarımı gereği
            erişilebilirdir.
          </li>
        </ul>
        <h2>Nasıl çalışır</h2>
        <p>
          Bir fotoğraf yüklediğinizde veya kameranızı açtığınızda, tarayıcı içi
          bir model yüzünüzü çizer ve çene, elmacık kemiği, alın ve uzunluk
          oranlarını, ayrıca çene köşeliliğini ölçer. Bu ölçümler, en yakın
          eşleşmenizi bulmak için altı şekil profiliyle karşılaştırılır. Sonuç,
          yüz oranlarınızın tutarlı, nesnel bir okumasıdır — aynada göz kararı
          belirlemekten çok daha sağlamdır.
        </p>
        <h2>Doğruluk hakkında dürüst bir not</h2>
        <p>
          Yüz şekli kesin bir ölçüm değil, öznel bir etikettir ve sınırdaki
          yüzler gerçekten belirsizdir. Sonuçlar fotoğraf açısı, ışık, ifade, saç
          ve gözlükle değişebilir. Analizi bir karar değil, yardımcı bir stil
          rehberi olarak değerlendiriyoruz — ve altı şeklin her birinin kendi
          güçlü yanları vardır.
        </p>
        <h2>İletişime geçin</h2>
        <p>
          Geri bildiriminiz, bir özellik fikriniz veya bir sorunuz mu var? Sizden
          haber almayı çok isteriz — <a href="/contact">iletişim sayfamıza</a>
          gidin veya
          <a href="mailto:hello@aifaceshapeanalyzer.com">hello@aifaceshapeanalyzer.com</a>
          adresine e-posta gönderin.
        </p>
        <p>
          Denemeye hazır mısınız? <a href="/#analyzer">Yüzünüzü analiz edin</a> ve
          eksiksiz dökümünüzü saniyeler içinde görün — tamamen ücretsiz.
        </p>
      `,
    },
    contact: {
      title: "Bize Ulaşın — AI Face Shape Analyzer",
      description:
        "AI Face Shape Analyzer ekibiyle iletişime geçin. Geri bildirim, özellik fikirleri, gizlilik talepleri veya destek sorularını e-posta ile gönderin.",
      keywords:
        "ai face shape analyzer iletişim, yüz şekli analizcisi destek, yüz şekli analizcisi geri bildirim",
      eyebrow: "İletişim",
      heading: "Bize Ulaşın",
      lead: "Sorular, geri bildirim veya bir özellik fikri mi? Sizden haber almayı çok isteriz. Bize ulaşmanın en hızlı yolu e-postadır.",
      emailHeading: "Bize e-posta gönderin",
      emailGeneralLabel: "Genel ve geri bildirim:",
      emailPrivacyLabel: "Gizlilik talepleri:",
      emailIntro:
        "Her mesajı okuyoruz ve birkaç iş günü içinde yanıt vermeyi hedefliyoruz. Gizlilik soruları için {privacyLink} sayfamıza, kullanım soruları için {termsLink} sayfamıza bakın.",
      privacyLinkText: "Gizlilik Politikası",
      termsLinkText: "Şartlar ve Koşullar",
      formHeading: "Bir mesaj gönderin",
      formIntro:
        "Aşağıdaki alanları doldurun, e-posta uygulamanızda önceden doldurulmuş bir e-posta açacağız — sadece gönder'e basın.",
      labelName: "Ad",
      labelEmail: "E-posta adresiniz",
      labelMessage: "Mesaj",
      submit: "Göndermek için e-postayı aç",
      fallback: "Doğrudan yazmayı mı tercih edersiniz? {email} adresine e-posta gönderin.",
      errMissing: "Lütfen adınızı, e-postanızı ve mesajınızı doldurun.",
      errEmail: "Lütfen geçerli bir e-posta adresi girin.",
      mailSubject: "{name} kişisinden iletişim",
    },
    privacy: {
      title: "Gizlilik Politikası — AI Face Shape Analyzer",
      description:
        "AI Face Shape Analyzer fotoğraflarınızı ve verilerinizi nasıl ele alıyor. Yüz analizi tarayıcınızda çalışır; neyi topladığımızı, nasıl kullandığımızı ve seçeneklerinizi öğrenin.",
      keywords:
        "ai face shape analyzer gizlilik politikası, yüz şekli analizcisi veri, yüz analizcisi gizlilik",
      eyebrow: "Yasal",
      heading: "Gizlilik Politikası",
      lead: "Bu politika, AI Face Shape Analyzer'ın hangi bilgileri topladığını, fotoğraflarınızın nasıl işlendiğini ve sahip olduğunuz seçenekleri açıklar.",
      updated: "19 Haziran 2026",
      html: `
        <p>
          AI Face Shape Analyzer (“biz”, “bize”, “bizim”) aifaceshapeanalyzer.com
          adresindeki web sitesini (“Hizmet”) işletir. Bu Gizlilik Politikası,
          Hizmeti kullandığınızda bilgileri nasıl ele aldığımızı açıklar. Hizmeti
          kullanarak burada açıklanan uygulamaları kabul etmiş olursunuz.
        </p>
        <h2>Fotoğraflarınız ve kameranız</h2>
        <p>
          Yüz şekli analizi tarayıcınızda çalışır. Bir fotoğraf yüklediğinizde
          veya kameranızı kullandığınızda, görsel yüz oranlarını ölçmek için
          tarayıcı içi model tarafından kendi cihazınızda işlenir. Bir hesap
          oluşturmanızı zorunlu kılmıyoruz ve görsellerinizi satmıyoruz.
        </p>
        <p>
          Kamera erişimini tarayıcınız aracılığıyla verip vermeyeceğinizi siz
          kontrol edersiniz ve bu izni tarayıcı ayarlarınızdan istediğiniz zaman
          iptal edebilirsiniz.
        </p>
        <h2>Topladığımız bilgiler</h2>
        <p>Mümkün olduğunca az veri toplamayı amaçlıyoruz. Hizmeti nasıl kullandığınıza bağlı olarak bu şunları içerebilir:</p>
        <ul>
          <li>
            <strong>Kullanım ve cihaz verileri.</strong> Hizmetin çalışır halde
            tutulması ve toplu kullanımın anlaşılması için toplanan tarayıcı türü,
            cihaz türü, ekran boyutu, yönlendiren sayfa ve genel bölge gibi
            standart teknik bilgiler.
          </li>
          <li>
            <strong>Yerel depolama.</strong> Tarayıcınızda küçük değerleri (örneğin
            açık/koyu tema tercihiniz ve yumuşak bir kullanım sayacı) cihazınızda
            saklarız. Bu veriler bize bir kullanıcı profili olarak gönderilmez.
          </li>
          <li>
            <strong>Bize gönderdiğiniz mesajlar.</strong> Bizimle e-posta yoluyla
            iletişime geçerseniz, e-posta adresiniz ve mesajınızın içeriği gibi
            paylaşmayı seçtiğiniz bilgileri alırız.
          </li>
        </ul>
        <h2>Çerezler ve analizler</h2>
        <p>
          Toplu trafiği ölçmek ve Hizmeti iyileştirmek için, gizliliğe saygılı
          analizler dahil olmak üzere çerezler veya benzer teknolojiler
          kullanabiliriz. Çerezleri tarayıcı ayarlarınız aracılığıyla kontrol
          edebilirsiniz. Bunları devre dışı bırakmak, çekirdek analizcinin
          çalışmasını engellememelidir.
        </p>
        <h2>Bilgileri nasıl kullanırız</h2>
        <ul>
          <li>Hizmeti sağlamak, sürdürmek ve iyileştirmek için.</li>
          <li>Teknik sorunları teşhis etmek ve kötüye kullanımı önlemek için.</li>
          <li>Sorularınıza ve destek taleplerinize yanıt vermek için.</li>
          <li>Yasal yükümlülüklere uymak için.</li>
        </ul>
        <h2>Üçüncü taraf hizmetleri</h2>
        <p>
          Barındırma, içerik dağıtımı ve analizler için üçüncü taraf
          sağlayıcılara güvenebiliriz. Bu sağlayıcılar bizim adımıza sınırlı
          teknik verileri işler ve bunları korumaları beklenir. Hizmet ayrıca
          kendi gizlilik politikalarına tabi olan harici sitelere bağlantı
          verebilir.
        </p>
        <h2>Veri saklama</h2>
        <p>
          Teknik ve analiz verilerini yalnızca yukarıda açıklanan amaçlar için
          gereken süre boyunca saklar, ardından siler veya anonimleştiririz.
          E-posta yazışmaları, talebinizi ele almak için gerektiği sürece ve makul
          kayıt tutma amacıyla saklanır.
        </p>
        <h2>Çocukların gizliliği</h2>
        <p>
          Hizmet 13 yaşın altındaki (veya yargı bölgenizdeki asgari yaşın
          altındaki) çocuklara yönelik değildir ve onlardan bilerek kişisel bilgi
          toplamayız. Bir çocuğun bize bilgi verdiğini düşünüyorsanız bizimle
          iletişime geçin, bunu kaldırmak için uygun adımları atacağız.
        </p>
        <h2>Haklarınız</h2>
        <p>
          Yaşadığınız yere bağlı olarak, hakkınızda tuttuğumuz kişisel bilgilere
          erişme, bunları düzeltme veya silme ya da belirli işlemlere itiraz etme
          haklarınız olabilir. Bir talepte bulunmak için aşağıdaki adresten bize
          e-posta gönderin. Geçerli yasalara uygun olarak yanıt vereceğiz.
        </p>
        <h2>Bu politikadaki değişiklikler</h2>
        <p>
          Bu Gizlilik Politikasını zaman zaman güncelleyebiliriz. Bunu
          yaptığımızda, yukarıdaki “Son güncelleme” tarihini revize edeceğiz.
          Önemli değişiklikler Hizmette vurgulanabilir.
        </p>
        <h2>Bize ulaşın</h2>
        <p>
          Bu politika hakkında sorularınız mı var?
          <a href="mailto:privacy@aifaceshapeanalyzer.com">privacy@aifaceshapeanalyzer.com</a>
          adresine e-posta gönderin veya <a href="/contact">iletişim sayfamızı</a>
          ziyaret edin.
        </p>
        <hr />
        <p>
          Bu belge genel bilgilendirme amaçlı sunulmuştur ve hukuki bir tavsiye
          değildir. Lütfen kendi özel koşullarınıza uygun olduğundan emin olmak
          için nitelikli bir uzmanla gözden geçirin.
        </p>
      `,
    },
    terms: {
      title: "Şartlar ve Koşullar — AI Face Shape Analyzer",
      description:
        "AI Face Shape Analyzer kullanımınızı yöneten şartlar; kabul edilebilir kullanım, sorumluluk reddi ve sorumluluk sınırlamaları dahil.",
      keywords:
        "ai face shape analyzer şartlar, yüz şekli analizcisi şartlar ve koşullar, hizmet şartları",
      eyebrow: "Yasal",
      heading: "Şartlar ve Koşullar",
      lead: "Bu şartlar, AI Face Shape Analyzer kullanımınızı yönetir. Hizmeti kullanmadan önce lütfen dikkatlice okuyun.",
      updated: "19 Haziran 2026",
      html: `
        <p>
          Bu Şartlar ve Koşullar (“Şartlar”), aifaceshapeanalyzer.com adresindeki
          web sitesini (“Hizmet”) kullanımınızla ilgili olarak sizinle
          AI Face Shape Analyzer (“biz”, “bize”, “bizim”) arasında bir anlaşma
          oluşturur. Hizmete erişerek veya onu kullanarak bu Şartlarla bağlı
          olmayı kabul edersiniz. Kabul etmiyorsanız Hizmeti kullanmayın.
        </p>
        <h2>Hizmetin kullanımı</h2>
        <p>
          Hizmet, yüz şeklinizi tahmin etmek için bir fotoğrafı veya canlı kamera
          akışını analiz etmenizi sağlar. Kişisel, bilgilendirme ve eğlence
          amaçlı sunulur. Hizmeti kullanmak için en az 13 yaşında (veya yargı
          bölgenizdeki asgari yaşta) olmalısınız.
        </p>
        <h2>Kabul edilebilir kullanım</h2>
        <p>Şunları yapmamayı kabul edersiniz:</p>
        <ul>
          <li>Kullanma hakkınız olmayan görselleri veya başka kişilerin rızası olmadan onların görsellerini yüklemek.</li>
          <li>Hizmeti yasa dışı, taciz edici veya zararlı amaçlarla kullanmak.</li>
          <li>Hizmeti veya sistemlerini bozmaya, aşırı yüklemeye, tersine mühendislik yapmaya veya yetkisiz erişim sağlamaya çalışmak.</li>
          <li>Yazılı iznimiz olmadan Hizmeti veya içeriğini taramak, yeniden satmak veya ticari olarak istismar etmek.</li>
        </ul>
        <h2>Profesyonel tavsiye yoktur</h2>
        <p>
          Yüz şekli kesin bir ölçüm değil, öznel bir etikettir. Sonuçlar
          görselinizden üretilen bir tahmindir ve açı, ışık, ifade, saç, gözlük
          ve kamera lensine göre değişebilir. Hizmet tıbbi, psikolojik, kozmetik
          veya profesyonel tavsiye sağlamaz ve buna böyle güvenmemelisiniz.
          Sonuçları yalnızca genel bir stil rehberi olarak kullanın.
        </p>
        <h2>Fikri mülkiyet</h2>
        <p>
          Tasarımı, metni, grafikleri ve temel yazılımı dahil olmak üzere Hizmet,
          bize veya lisans verenlerimize aittir ve geçerli yasalarla korunur. Size
          Hizmeti amaçlanan amacı için kullanmanız adına sınırlı, münhasır
          olmayan, devredilemez bir lisans veriyoruz. Sağladığınız görsellerde
          sahip olduğunuz hakları elinizde tutarsınız; bunların mülkiyetini iddia
          etmiyoruz.
        </p>
        <h2>Garantilerin reddi</h2>
        <p>
          Hizmet, ticari elverişlilik, belirli bir amaca uygunluk, doğruluk ve
          ihlal etmeme dahil ancak bunlarla sınırlı olmamak üzere açık veya zımni
          hiçbir garanti olmaksızın “olduğu gibi” ve “mevcut olduğu şekliyle”
          sunulur. Hizmetin kesintisiz, hatasız olacağını veya sonuçların doğru ya
          da güvenilir olacağını garanti etmiyoruz.
        </p>
        <h2>Sorumluluğun sınırlandırılması</h2>
        <p>
          Yasaların izin verdiği azami ölçüde, Hizmeti kullanmanızdan veya
          kullanamamanızdan kaynaklanan herhangi bir dolaylı, arızi, özel, sonuçsal
          veya cezai zarardan ya da herhangi bir veri, kâr veya itibar kaybından
          sorumlu olmayacağız. Sorumluluğun hariç tutulamadığı durumlarda, yasaların
          izin verdiği azami ölçüyle sınırlıdır.
        </p>
        <h2>Üçüncü taraf bağlantıları</h2>
        <p>
          Hizmet, üçüncü taraf web sitelerine veya kaynaklarına bağlantılar
          içerebilir. Bu sitelerin içeriğinden, politikalarından veya
          uygulamalarından sorumlu değiliz ve bu bağlantıları yalnızca kolaylık
          için sağlıyoruz.
        </p>
        <h2>Hizmet ve Şartlardaki değişiklikler</h2>
        <p>
          Hizmeti istediğimiz zaman değiştirebilir veya sonlandırabilir ya da bu
          Şartları güncelleyebiliriz. Şartları güncellediğimizde, yukarıdaki “Son
          güncelleme” tarihini revize edeceğiz. Değişiklikler yürürlüğe girdikten
          sonra Hizmeti kullanmaya devam etmeniz, revize edilen Şartları kabul
          ettiğiniz anlamına gelir.
        </p>
        <h2>Geçerli hukuk</h2>
        <p>
          Bu Şartlar, kanunlar ihtilafı ilkelerine bakılmaksızın, asıl faaliyet
          yerimizde geçerli olan yasalara tabidir. Zorunlu yerel yasalar aksini
          gerektirmedikçe, herhangi bir anlaşmazlık oradaki yetkili mahkemelere
          tabi olacaktır.
        </p>
        <h2>Bize ulaşın</h2>
        <p>
          Bu Şartlar hakkında sorularınız mı var?
          <a href="mailto:hello@aifaceshapeanalyzer.com">hello@aifaceshapeanalyzer.com</a>
          adresine e-posta gönderin veya <a href="/contact">iletişim sayfamızı</a>
          ziyaret edin.
        </p>
        <hr />
        <p>
          Bu belge genel bilgilendirme amaçlı sunulmuştur ve hukuki bir tavsiye
          değildir. Lütfen kendi özel koşullarınıza uygun olduğundan emin olmak
          için nitelikli bir uzmanla gözden geçirin.
        </p>
      `,
    },
    notFound: {
      title: "Sayfa bulunamadı (404) — AI Face Shape Analyzer",
      description:
        "Aradığınız sayfa mevcut değil. Yüz şeklinizi saniyeler içinde bulmak için ana sayfaya geri dönün.",
      code: "404",
      heading: "O sayfayı bulamadık.",
      message:
        "Bağlantı bozuk olabilir veya sayfa taşınmış olabilir. Yüz şekli analiziniz hâlâ bıraktığınız yerde.",
    },
    serverError: {
      title: "Bir şeyler ters gitti (500) — AI Face Shape Analyzer",
      description:
        "Beklenmedik bir hata oluştu. Tekrar deneyin veya yüz şeklinizi saniyeler içinde bulmak için ana sayfaya geri dönün.",
      code: "500",
      heading: "Bizim tarafımızda bir şeyler ters gitti.",
      message:
        "Beklenmedik bir hata bu sayfanın yüklenmesini engelledi. Birazdan tekrar deneyin veya yüz şeklinizi bulmak için ana sayfaya geri dönün.",
    },
  },

  keywords:
    "ai face shape analyzer, en iyi ai yüz şekli analizcisi, ücretsiz ai yüz şekli analizcisi, çevrimiçi ai yüz şekli analizcisi, çevrimiçi ücretsiz ai yüz şekli analizcisi, ai yüz şekli dedektörü, yüz şekli ai analizcisi, yüz şekli analizci ai, yüz şekilleri, yüz şekli, yüz şeklim ne, yüz şekli nasıl belirlenir, yüz analizcisi, yüz şekli hesaplayıcısı, yüz çekiciliği analizcisi",
};
