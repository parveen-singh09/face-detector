import { type UIStrings } from "./en";

export const it: UIStrings = {
  nav: {
    logoText: "Analizzatore della Forma del Viso",
    logoAria: "AI Face Shape Analyzer — home",
    primaryAria: "Principale",
    links: {
      shapes: "Forme del viso",
      about: "Informazioni",
      contact: "Contatti",
      privacy: "Privacy",
      terms: "T&C",
    },
    themeToggleAria: "Attiva/disattiva la modalità scura",
    themeToggleTitle: "Cambia tema",
    menuOpenAria: "Apri menu",
    menuCloseAria: "Chiudi menu",
    langLabel: "Lingua",
  },

  footer: {
    logoAria: "AI Face Shape Analyzer — home",
    brandName: "Analizzatore della Forma del Viso",
    tagline:
      "Scopri la forma del tuo viso in pochi secondi — gratis e accurato, con un'analisi completa di tutte e sei le forme.",
    productEyebrow: "Prodotto",
    productLinks: {
      analyze: "Analizza il mio viso",
      how: "Come funziona",
      shapes: "Forme del viso",
    },
    aboutEyebrow: "Informazioni",
    aboutLinks: {
      aboutTool: "Informazioni sullo strumento",
      faq: "FAQ",
    },
    companyEyebrow: "Azienda",
    companyLinks: {
      about: "Chi siamo",
      contact: "Contattaci",
      privacy: "Informativa sulla privacy",
      terms: "Termini e condizioni",
    },
    mono: "Sei forme · mesh facciale a 478 punti",
    disclaimer:
      "Avvertenza: la forma del viso è un'etichetta soggettiva, non una misurazione esatta. I risultati sono una stima generata dalla tua foto e possono variare in base ad angolazione, illuminazione, espressione, capelli, occhiali e obiettivo della fotocamera. Molti visi sono un mix di due forme — usa questo strumento come guida per lo styling, non come consiglio definitivo o professionale.",
  },

  hero: {
    titleBefore: "Analizzatore AI ",
    titleAccent: "della Forma",
    titleAfter: " del Viso",
    sub: "Carica una foto o usa la fotocamera per un'analisi accurata della forma del viso — con un'analisi completa di tutte e sei le forme.",
    ctaPrimary: "Analizza il mio viso",
    ctaSecondary: "Come funziona",
    trust: {
      free: "Analizzatore manuale",
      mesh: "Mesh facciale in tempo reale",
      ranked: "Sei forme classificate",
    },
  },

  howItWorks: {
    eyebrow: "Come funziona",
    heading: "Tre passi per scoprire la forma del tuo viso.",
  },
  steps: [
    {
      n: "01",
      title: "Carica una foto o apri la fotocamera",
      body: "Scegli una foto nitida e frontale (fino a 10MB) o usa la fotocamera per una lettura in tempo reale.",
    },
    {
      n: "02",
      title: "Mappiamo 478 punti facciali",
      body: "Un modello sul dispositivo traccia la mesh del tuo viso e misura le proporzioni di mascella, zigomi, fronte e lunghezza.",
    },
    {
      n: "03",
      title: "Ottieni un'analisi completa",
      body: "Vedi la forma più affine, un punteggio di affidabilità e una percentuale classificata su tutte e sei le forme.",
    },
  ],

  shapesSection: {
    eyebrow: "Riferimento",
    heading: "Le sei forme del viso.",
    sub: "Ogni risultato viene confrontato con questi sei profili. La maggior parte delle persone tende verso uno con tratti di un altro — ecco perché mostriamo il mix completo.",
    exampleAlt: "Esempio di una forma del viso {shape}",
  },
  shapeLabels: {
    oval: "Ovale",
    round: "Rotondo",
    square: "Quadrato",
    rectangle: "Rettangolare",
    heart: "A cuore",
    diamond: "A diamante",
  },
  shapeDescriptions: {
    oval: "Proporzioni equilibrate con una lunghezza del viso maggiore della larghezza e una mascella leggermente arrotondata. Ampiamente considerata la forma più versatile.",
    round:
      "Angoli morbidi con lunghezza e larghezza del viso quasi uguali, guance più piene e una linea della mascella e un mento arrotondati.",
    square:
      "Una mascella forte e squadrata con fronte, zigomi e mascella di larghezza quasi uguale — una forma decisa e strutturata.",
    rectangle:
      "Come la quadrata ma più lunga — la lunghezza del viso supera nettamente la larghezza, con fronte, zigomi e mascella quasi paralleli.",
    heart:
      "Una fronte e zigomi più larghi che si restringono verso un mento più stretto, spesso appuntito — la classica silhouette a cuore.",
    diamond:
      "Gli zigomi sono il punto più largo, con una fronte e una mascella più strette e un mento definito e appuntito.",
  },

  analyzer: {
    eyebrow: "Analizzatore",
    heading: "Rileva la forma del tuo viso",
    sub: "Carica una foto nitida e frontale o usa la fotocamera.",
    tablistAria: "Metodo di input",
    tabUpload: "Carica foto",
    tabCamera: "Usa fotocamera",
    fileInputAria: "Scegli una foto da analizzare",
    dropzoneTitle: "Trascina una foto o clicca per sfogliare",
    dropzoneHint: "JPG, PNG o WebP · fino a 10MB",
    previewImgAlt: "La tua foto caricata",
    cameraPreviewAria: "Anteprima fotocamera",
    loadingModel: "Caricamento del modello sul dispositivo…",
    btnAnalyze: "Analizza il mio viso",
    btnCapture: "Acquisisci e analizza",
    btnReset: "Analizza un'altra",
    uploadTipsAria: "Consigli per una lettura accurata",
    uploadTips: [
      "Usa una foto nitida e definita — ben illuminata, a fuoco e con il viso rivolto dritto verso la fotocamera.",
      "Mantieni lo sfondo semplice e ordinato in modo che risalti solo il tuo viso.",
      "Sistemati — capelli lontani dal viso, occhiali tolti ed espressione neutra.",
    ],
    camTipsAria: "Consigli per una lettura accurata",
    camTips: [
      "Togli gli occhiali — le montature nascondono i bordi delle guance e delle sopracciglia.",
      "Rivolgi il viso dritto verso la fotocamera, con i capelli lontani dal viso.",
      "Clicca per acquisire 5 letture — le mediamo per maggiore accuratezza.",
    ],
    resultEyebrow: "La forma del tuo viso",
    breakdownTitle: "Analisi completa",
    resultDisclaimer:
      "Attenzione: la forma del viso è un'etichetta soggettiva, non una scienza esatta. I risultati sono una stima e possono variare in base ad angolazione della foto, illuminazione, espressione, capelli che coprono il viso, occhiali e obiettivo della fotocamera. Molti visi sono un mix naturale di due forme — considera questo come una guida utile, non come un verdetto definitivo.",
    idleTitle: "Cosa otterrai",
    idleItems: [
      "La forma più affine con un punteggio di affidabilità",
      "Una percentuale classificata su tutte e sei le forme del viso",
      "Una nota quando il tuo viso è un mix di due forme",
    ],
    msg: {
      analyzing: "Analisi in corso…",
      rateLimited:
        "Hai raggiunto il limite orario. Riprova {retryAfter}.",
      fileType: "Scegli un'immagine JPG, PNG o WebP.",
      fileTooLarge: "Quell'immagine supera i 10MB. Scegli un file più piccolo.",
      readError:
        "Impossibile leggere quell'immagine. Le foto HEIC dell'iPhone non sono supportate — usa JPG, PNG o WebP.",
      noFace: "Nessun viso rilevato. Prova con una foto più nitida e frontale.",
      analyzeError:
        "Si è verificato un problema durante l'analisi di quell'immagine. Riprova.",
      noCameraSupport: "Il tuo browser non supporta l'accesso alla fotocamera.",
      cameraError:
        "Impossibile accedere alla fotocamera. Controlla i permessi, oppure carica una foto.",
      noFaceYet:
        "Nessun viso ancora rilevato. Centra il tuo viso, poi clicca per acquisire.",
      captureError: "Si è verificato un problema durante l'acquisizione. Riprova.",
      captureReading: "Acquisizione lettura - [{n}/{total}]",
      confidence: "{pct}% di affidabilità",
      blendDesc: "Prevalentemente {top} con tratti {runnerUp}. {desc}",
    },
  },

  manualCalc: {
    eyebrow: "Calcolatore manuale",
    heading: "Conosci le tue misure? Calcolala direttamente",
    sub: "Nessuna foto necessaria. Misura le quattro distanze qui sotto da una foto frontale o da uno specchio, inseriscile in una qualsiasi unità (cm, mm o pollici) e calcoleremo la forma del tuo viso a partire dalle proporzioni.",
    imageAlt:
      "Guida alla misurazione del viso che mostra le misure di fronte, zigomi, lunghezza del viso e mascella su un ritratto frontale.",
    fields: {
      foreheadWidth: {
        label: "Larghezza della fronte",
        hint: "Distanza tra il punto sinistro e quello destro della fronte.",
      },
      cheekboneWidth: {
        label: "Larghezza degli zigomi",
        hint: "Distanza tra il punto sinistro e quello destro degli zigomi.",
      },
      faceLength: {
        label: "Lunghezza del viso",
        hint: "Dal centro dell'attaccatura dei capelli alla base del mento.",
      },
      jawWidth: {
        label: "Larghezza della mascella",
        hint: "Da un angolo della mascella all'angolo opposto.",
      },
    },
    btnCalculate: "Calcola la forma del viso",
    btnReset: "Reimposta",
    previewShape: "Forma del viso",
    previewDesc:
      "Inserisci le tue quattro misure qui sopra e calcoleremo la forma del tuo viso a partire dalle proporzioni.",
    invalidInput:
      "Inserisci un numero positivo per tutte e quattro le misure.",
  },

  seo: {
    eyebrow: "Informazioni sullo strumento",
    heading: "L'analizzatore AI gratuito della forma del viso, online.",
    html: `
      <p>
        Il nostro <strong>analizzatore AI della forma del viso</strong> è uno strumento gratuito e
        online che ti indica la forma del tuo viso in pochi secondi — senza registrazione e senza
        download. Se ti sei mai chiesto
        <em>«qual è la forma del mio viso?»</em> e non sapevi come rispondere, questo
        è il modo più rapido per scoprirlo. Basta caricare una foto nitida e frontale
        o aprire la fotocamera, e l'<strong>analizzatore AI della forma del viso</strong>
        fa il resto: mappa 478 punti di riferimento facciali, misura la geometria del
        tuo viso e classifica ogni risultato su tutte e sei le forme più comuni.
      </p>
      <h3>Cosa rende il miglior analizzatore AI della forma del viso</h3>
      <p>
        La maggior parte degli strumenti ti consegna una singola etichetta sperando che sia giusta. Abbiamo costruito quello che
        riteniamo sia il <strong>miglior analizzatore AI della forma del viso</strong> mostrando invece il
        quadro completo. Come <strong>rilevatore AI della forma del viso e
        analizzatore del viso</strong> combinato, restituisce un punteggio di affidabilità più una
        ripartizione percentuale classificata per ovale, rotondo, quadrato, rettangolare, a cuore e
        a diamante — perché i visi reali sono spesso un mix di due forme piuttosto che
        una corrispondenza perfetta. Una sovrapposizione della mesh facciale in tempo reale mostra esattamente ciò che il modello
        sta leggendo mentre lavora, così l'analisi non sembra mai una scatola nera.
      </p>
      <h3>Come determinare la forma del tuo viso</h3>
      <p>
        Ti chiedi <strong>come determinare la forma del viso</strong> senza uno specchio
        e un metro? Il metodo classico confronta quattro misure —
        larghezza della fronte, larghezza degli zigomi, larghezza della mascella e lunghezza del viso — e
        le pondera l'una contro l'altra. È esattamente ciò che questo
        <strong>calcolatore della forma del viso</strong> automatizza. Dove un
        <strong>analizzatore del viso</strong> manuale lascia spazio alle congetture, il nostro
        <strong>analizzatore AI della forma del viso</strong> legge precise
        proporzioni antropometriche e l'angolosità della mascella direttamente dai punti di riferimento, così ottieni una
        risposta coerente ogni volta. Per la lettura più accurata, tira indietro i capelli
        dal viso, togli gli occhiali, mantieni un'espressione neutra e usa un'illuminazione uniforme
        e frontale.
      </p>
      <h3>Gratuito da usare, online</h3>
      <p>
        Questo strumento <strong>analizzatore AI della forma del viso online gratuito</strong> funziona
        online senza nulla da installare. Funziona allo stesso modo su telefono o desktop,
        ed è davvero un <strong>analizzatore AI della forma del viso gratuito</strong>,
        senza limiti di utilizzo per un uso normale.
      </p>
      <h3>Dalle forme del viso a scelte che ti valorizzano</h3>
      <p>
        Conoscere la <strong>forma del tuo viso</strong> è il punto di partenza per scelte quotidiane
        migliori. Le persone la usano per scegliere tagli e acconciature, scegliere
        montature di occhiali e occhiali da sole che completano le loro proporzioni, dare forma
        alle sopracciglia e definire il trucco o lo styling della barba. Mentre alcune persone cercano
        un <strong>analizzatore di attrattiva del viso</strong>, la bellezza è soggettiva e
        la forma del viso non è un punteggio — ognuna delle sei
        <strong>forme del viso</strong> ha i propri punti di forza, e l'obiettivo qui è
        aiutarti a definire il tuo stile con sicurezza, non a classificare i visi. Considera il risultato come
        una guida utile piuttosto che un verdetto.
      </p>
      <p>
        Pronto a smettere di tirare a indovinare? Scorri verso l'alto fino all'
        <a href="#analyzer">analizzatore</a>, aggiungi una foto o apri la fotocamera, e lascia che
        l'<strong>analizzatore AI della forma del viso</strong> ti mostri la tua analisi completa
        in pochi secondi — completamente gratis.
      </p>
    `,
  },

  faqSection: {
    eyebrow: "FAQ",
    heading: "Domande frequenti.",
  },
  faqs: [
    {
      q: "Cos'è un analizzatore della forma del viso?",
      a: "Un analizzatore della forma del viso è uno strumento che osserva le proporzioni del tuo viso — fronte, zigomi, linea della mascella e lunghezza — e ti dice a quale forma sei più vicino. Il nostro analizzatore AI della forma del viso lo fa automaticamente mappando 478 punti di riferimento facciali da una foto o dalla tua fotocamera, poi classificando la tua corrispondenza su tutte e sei le forme.",
    },
    {
      q: "Come determino la forma del mio viso?",
      a: "Per determinare la forma del tuo viso, confronta quattro cose: la larghezza della fronte, degli zigomi e della mascella, più la lunghezza complessiva del viso. La forma le cui proporzioni corrispondono alle tue è la forma del tuo viso. Questo analizzatore misura quelle proporzioni per te automaticamente, quindi non servono congetture né metri.",
    },
    {
      q: "Che forma del viso ho?",
      a: "Molto probabilmente hai una delle sei forme del viso più comuni: ovale, rotonda, quadrata, rettangolare, a cuore o a diamante. Carica una foto nitida e frontale o apri la fotocamera e l'analizzatore ti dirà quale hai, insieme a un punteggio di affidabilità e a un'analisi percentuale completa.",
    },
    {
      q: "Qual è la forma del mio viso?",
      a: "La forma del tuo viso è il contorno complessivo del tuo viso, definito da quanto sono larghi la fronte, gli zigomi e la mascella rispetto alla lunghezza del viso. Il modo più rapido per scoprirlo è passare una foto attraverso l'analizzatore qui sopra — legge la tua reale geometria facciale e mostra la tua corrispondenza più affine in pochi secondi.",
    },
    {
      q: "Che forma ha il mio viso?",
      a: "La forma del tuo viso dipende dal suo punto più largo e dalla sua lunghezza. Se il tuo viso è chiaramente più lungo che largo, potrebbe essere ovale o rettangolare; se larghezza e lunghezza sono simili, rotondo o quadrato; se la fronte è la parte più larga, a cuore o a diamante. L'analizzatore lo individua con precisione dalle tue misure.",
    },
    {
      q: "Come posso determinare la forma del mio viso?",
      a: "Il modo più semplice è lasciare che lo faccia l'AI: tira indietro i capelli, rivolgi il viso dritto verso la fotocamera e carica una foto o usa la fotocamera in tempo reale. Lo strumento misura le proporzioni di mascella, zigomi, fronte e lunghezza e restituisce la forma del tuo viso istantaneamente — molto più coerente che valutarla a occhio allo specchio.",
    },
    {
      q: "Come posso capire la forma del mio viso?",
      a: "Puoi capire la forma del tuo viso individuando il tratto più largo del viso e verificando se il tuo viso è più lungo che largo. Invece di tracciare il tuo contorno su uno specchio, questo analizzatore ti indica la forma del tuo viso da una sola foto, senza misurazioni manuali.",
    },
    {
      q: "Come faccio a capire che forma del viso ho?",
      a: "Osserva tre segnali: dove il tuo viso è più largo, quanto è squadrata o morbida la tua mascella e se il tuo viso è lungo o equilibrato. L'analizzatore legge tutti e tre da 478 punti di riferimento e ti dice esattamente che forma del viso hai, oltre a quanto fortemente corrispondi alle forme classificate dopo.",
    },
    {
      q: "Qual è la forma del mio viso?",
      a: "Qualunque sia la forma del tuo viso, l'analizzatore può nominarla in pochi secondi. Aggiungi una foto o apri la fotocamera qui sopra e otterrai la forma più affine, una percentuale di affidabilità e un'analisi classificata tra ovale, rotonda, quadrata, rettangolare, a cuore e a diamante.",
    },
    {
      q: "Come posso scoprire la forma del mio viso?",
      a: "Puoi scoprire la forma del tuo viso gratis proprio qui — senza registrazione e senza download. Carica una foto frontale o usa la fotocamera, e l'AI misura le tue proporzioni facciali e mostra il tuo risultato in pochi secondi.",
    },
    {
      q: "Come trovo la forma del mio viso?",
      a: "Per trovare la forma del tuo viso, usa una foto nitida e ben illuminata con i capelli lontani dal viso e gli occhiali tolti, poi passala attraverso l'analizzatore. Confronta le tue proporzioni misurate con tutti e sei i profili delle forme e trova la corrispondenza più affine per te automaticamente.",
    },
    {
      q: "Come identifico la forma del mio viso?",
      a: "Identificare la forma del tuo viso significa abbinare le larghezze di fronte, zigomi e mascella e la lunghezza del viso a uno dei sei profili standard. L'analizzatore la identifica con precisione usando la geometria dei punti di riferimento facciali, così ottieni una risposta oggettiva invece di una congettura soggettiva.",
    },
  ],

  contentPage: {
    lastUpdated: "Ultimo aggiornamento:",
  },
  mtNotice:
    "Questa pagina è stata tradotta automaticamente. La versione inglese fa fede; in caso di discrepanza, prevale l'<a href=\"{enHref}\">originale inglese</a>.",

  error: {
    eyebrow: "Errore {code}",
    ctaHome: "Torna alla home",
    ctaAnalyze: "Analizza il mio viso",
  },

  pages: {
    home: {
      title: "Analizzatore AI Gratuito della Forma del Viso Online — Rileva la Forma del Tuo Viso",
      description:
        "Analizzatore AI gratuito della forma del viso online — carica una foto o usa la fotocamera per scoprire la forma del tuo viso istantaneamente con un'analisi completa di tutte e 6 le forme. Senza registrazione.",
    },
    about: {
      title: "Chi siamo — AI Face Shape Analyzer",
      description:
        "Scopri di più sull'AI Face Shape Analyzer — uno strumento gratuito e veloce che rileva la forma del tuo viso da una foto o dalla fotocamera in tempo reale con un'analisi completa di tutte e sei le forme.",
      keywords:
        "informazioni analizzatore ai forma del viso, analizzatore forma del viso, chi ha creato l'analizzatore della forma del viso",
      eyebrow: "Informazioni",
      heading: "Informazioni su AI Face Shape Analyzer",
      lead: "Abbiamo creato un analizzatore della forma del viso gratuito e accurato che ti offre il quadro completo — non solo un'etichetta di una parola.",
      html: `
        <p>
          <strong>AI Face Shape Analyzer</strong> è uno strumento online gratuito che rileva
          la forma del tuo viso da una foto o dalla tua fotocamera in tempo reale. Invece di consegnarti
          una singola congettura, mappa 478 punti di riferimento facciali, misura la reale geometria del
          tuo viso e classifica il tuo risultato su tutte e sei le forme più comuni — ovale,
          rotonda, quadrata, rettangolare, a cuore e a diamante.
        </p>
        <h2>Perché l'abbiamo creato</h2>
        <p>
          «Qual è la forma del mio viso?» è una delle domande più comuni che le persone si pongono
          prima di scegliere un taglio di capelli, un paio di occhiali o un nuovo trucco o stile di cura
          della barba. La maggior parte degli strumenti risponde con una singola etichetta e ti lascia chiedendoti quanto
          sia davvero affidabile quella risposta. Volevamo qualcosa di più onesto: uno strumento
          che mostra l'analisi completa, perché i visi reali sono spesso un mix di due
          forme piuttosto che una corrispondenza perfetta.
        </p>
        <h2>Cosa lo rende diverso</h2>
        <ul>
          <li>
            <strong>Una mesh facciale in tempo reale.</strong> Una sovrapposizione in tempo reale mostra esattamente ciò che
            il modello sta leggendo mentre lavora, così l'analisi non sembra mai una
            scatola nera.
          </li>
          <li>
            <strong>Un'analisi probabilistica completa.</strong> Ottieni una forma più
            affine, un punteggio di affidabilità e una percentuale classificata su tutte e sei le forme
            — più il rilevamento del mix di due forme.
          </li>
          <li>
            <strong>Gratuito e senza attriti.</strong> Senza registrazione, senza download e senza
            limiti di utilizzo per un uso normale. Funziona allo stesso modo su telefono o desktop.
          </li>
          <li>
            <strong>Pensato per tutti.</strong> L'interfaccia è accessibile per
            progettazione, con supporto da tastiera, stati di focus chiari e
            supporto per il movimento ridotto.
          </li>
        </ul>
        <h2>Come funziona</h2>
        <p>
          Quando carichi una foto o apri la fotocamera, un modello nel browser traccia
          il tuo viso e misura le proporzioni di mascella, zigomi, fronte e lunghezza, insieme
          all'angolosità della mascella. Quelle misure vengono confrontate con sei profili di forma
          per trovare la tua corrispondenza più affine. Il risultato è una lettura coerente e oggettiva
          delle tue proporzioni facciali — molto più stabile che valutarla a occhio allo
          specchio.
        </p>
        <h2>Una nota onesta sull'accuratezza</h2>
        <p>
          La forma del viso è un'etichetta soggettiva, non una misurazione esatta, e i visi al limite
          sono genuinamente ambigui. I risultati possono variare in base ad angolazione della foto,
          illuminazione, espressione, capelli e occhiali. Consideriamo l'analisi come una guida utile
          allo styling, non come un verdetto — e ognuna delle sei forme ha i propri
          punti di forza.
        </p>
        <h2>Mettiti in contatto</h2>
        <p>
          Hai un feedback, un'idea per una funzionalità o una domanda? Ci farebbe piacere sentirti —
          vai alla nostra <a href="/contact">pagina dei contatti</a> o scrivi a
          <a href="mailto:hello@aifaceshapeanalyzer.com">hello@aifaceshapeanalyzer.com</a>.
        </p>
        <p>
          Pronto a provarlo? <a href="/#analyzer">Analizza il tuo viso</a> e guarda la tua
          analisi completa in pochi secondi — completamente gratis.
        </p>
      `,
    },
    contact: {
      title: "Contattaci — AI Face Shape Analyzer",
      description:
        "Mettiti in contatto con il team di AI Face Shape Analyzer. Invia feedback, idee per funzionalità, richieste sulla privacy o domande di supporto via email.",
      keywords:
        "contatta analizzatore ai forma del viso, supporto analizzatore forma del viso, feedback analizzatore forma del viso",
      eyebrow: "Contatti",
      heading: "Contattaci",
      lead: "Domande, feedback o un'idea per una funzionalità? Ci farebbe piacere sentirti. Il modo più rapido per raggiungerci è via email.",
      emailHeading: "Scrivici",
      emailGeneralLabel: "Generale e feedback:",
      emailPrivacyLabel: "Richieste sulla privacy:",
      emailIntro:
        "Leggiamo ogni messaggio e cerchiamo di rispondere entro pochi giorni lavorativi. Per domande sulla privacy, consulta la nostra {privacyLink}; per domande sull'utilizzo, i nostri {termsLink}.",
      privacyLinkText: "Informativa sulla privacy",
      termsLinkText: "Termini e condizioni",
      formHeading: "Invia un messaggio",
      formIntro:
        "Compila i campi sottostanti e apriremo un'email precompilata nella tua app di posta — basta premere invia.",
      labelName: "Nome",
      labelEmail: "La tua email",
      labelMessage: "Messaggio",
      submit: "Apri l'email per inviare",
      fallback: "Preferisci scrivere direttamente? Scrivi a {email}.",
      errMissing: "Inserisci nome, email e messaggio.",
      errEmail: "Inserisci un indirizzo email valido.",
      mailSubject: "Contatto da {name}",
    },
    privacy: {
      title: "Informativa sulla privacy — AI Face Shape Analyzer",
      description:
        "Come l'AI Face Shape Analyzer gestisce le tue foto e i tuoi dati. L'analisi del viso avviene nel tuo browser; scopri cosa raccogliamo, come lo usiamo e le tue scelte.",
      keywords:
        "informativa privacy analizzatore ai forma del viso, dati analizzatore forma del viso, privacy analizzatore del viso",
      eyebrow: "Note legali",
      heading: "Informativa sulla privacy",
      lead: "Questa informativa spiega quali informazioni raccoglie l'AI Face Shape Analyzer, come vengono elaborate le tue foto e le scelte che hai a disposizione.",
      updated: "19 giugno 2026",
      html: `
        <p>
          AI Face Shape Analyzer («noi», «nostro») gestisce il sito web all'indirizzo
          aifaceshapeanalyzer.com (il «Servizio»). Questa Informativa sulla privacy descrive come
          gestiamo le informazioni quando usi il Servizio. Utilizzando il Servizio, accetti
          le pratiche qui descritte.
        </p>
        <h2>Le tue foto e la fotocamera</h2>
        <p>
          L'analisi della forma del viso avviene nel tuo browser. Quando carichi una foto o
          usi la fotocamera, l'immagine viene elaborata sul tuo stesso dispositivo dal
          modello nel browser per misurare le proporzioni facciali. Non ti richiediamo di
          creare un account e non vendiamo le tue immagini.
        </p>
        <p>
          Controlli tu se concedere l'accesso alla fotocamera tramite il tuo browser, e puoi
          revocare quel permesso in qualsiasi momento nelle impostazioni del tuo browser.
        </p>
        <h2>Informazioni che raccogliamo</h2>
        <p>Cerchiamo di raccogliere il meno possibile. A seconda di come usi il Servizio, questo può includere:</p>
        <ul>
          <li>
            <strong>Dati di utilizzo e del dispositivo.</strong> Informazioni tecniche standard
            come tipo di browser, tipo di dispositivo, dimensioni dello schermo, pagina di provenienza e
            regione generale, raccolte per mantenere il Servizio funzionante e per comprendere
            l'utilizzo aggregato.
          </li>
          <li>
            <strong>Archiviazione locale.</strong> Memorizziamo piccoli valori nel tuo browser
            (ad esempio, la tua preferenza di tema chiaro/scuro e un contatore di utilizzo non vincolante)
            sul tuo dispositivo. Questi dati non ci vengono inviati come profilo utente.
          </li>
          <li>
            <strong>Messaggi che ci invii.</strong> Se ci contatti via email, riceviamo
            le informazioni che scegli di condividere, come il tuo indirizzo email
            e il contenuto del tuo messaggio.
          </li>
        </ul>
        <h2>Cookie e analisi</h2>
        <p>
          Potremmo usare cookie o tecnologie simili, comprese analisi
          rispettose della privacy, per misurare il traffico aggregato e migliorare il Servizio. Puoi
          controllare i cookie tramite le impostazioni del tuo browser. Disattivarli non dovrebbe
          impedire all'analizzatore principale di funzionare.
        </p>
        <h2>Come usiamo le informazioni</h2>
        <ul>
          <li>Per fornire, mantenere e migliorare il Servizio.</li>
          <li>Per diagnosticare problemi tecnici e prevenire abusi.</li>
          <li>Per rispondere alle tue domande e richieste di supporto.</li>
          <li>Per rispettare gli obblighi di legge.</li>
        </ul>
        <h2>Servizi di terze parti</h2>
        <p>
          Potremmo affidarci a fornitori terzi per hosting, distribuzione dei contenuti e
          analisi. Questi fornitori elaborano dati tecnici limitati per nostro conto
          e si prevede che li proteggano. Il Servizio può anche rimandare a siti
          esterni regolati dalle proprie informative sulla privacy.
        </p>
        <h2>Conservazione dei dati</h2>
        <p>
          Conserviamo i dati tecnici e di analisi solo per il tempo necessario agli
          scopi descritti sopra, poi li eliminiamo o li anonimizziamo. La corrispondenza via email
          viene conservata per il tempo necessario a gestire la tua richiesta e per una ragionevole
          archiviazione.
        </p>
        <h2>Privacy dei minori</h2>
        <p>
          Il Servizio non è rivolto a minori di 13 anni (o all'età minima nella
          tua giurisdizione), e non raccogliamo consapevolmente informazioni personali
          da loro. Se ritieni che un minore ci abbia fornito informazioni, contattaci
          e adotteremo le misure appropriate per rimuoverle.
        </p>
        <h2>I tuoi diritti</h2>
        <p>
          A seconda di dove vivi, potresti avere il diritto di accedere, correggere o
          eliminare le informazioni personali che deteniamo su di te, o di opporti a determinati
          trattamenti. Per inoltrare una richiesta, scrivici all'indirizzo qui sotto. Risponderemo
          in conformità alla legge applicabile.
        </p>
        <h2>Modifiche a questa informativa</h2>
        <p>
          Potremmo aggiornare questa Informativa sulla privacy di tanto in tanto. Quando lo facciamo,
          aggiorneremo la data di «Ultimo aggiornamento» qui sopra. Le modifiche significative possono essere
          evidenziate sul Servizio.
        </p>
        <h2>Contattaci</h2>
        <p>
          Domande su questa informativa? Scrivi a
          <a href="mailto:privacy@aifaceshapeanalyzer.com">privacy@aifaceshapeanalyzer.com</a>
          o visita la nostra <a href="/contact">pagina dei contatti</a>.
        </p>
        <hr />
        <p>
          Questo documento è fornito a scopo informativo generale e non costituisce consulenza legale.
          Ti invitiamo a esaminarlo con un professionista qualificato per assicurarti che si adatti alle tue
          circostanze specifiche.
        </p>
      `,
    },
    terms: {
      title: "Termini e condizioni — AI Face Shape Analyzer",
      description:
        "I termini che regolano l'uso dell'AI Face Shape Analyzer, comprese le condizioni d'uso accettabili, le avvertenze e le limitazioni di responsabilità.",
      keywords:
        "termini analizzatore ai forma del viso, termini e condizioni analizzatore forma del viso, termini di servizio",
      eyebrow: "Note legali",
      heading: "Termini e condizioni",
      lead: "Questi termini regolano l'uso dell'AI Face Shape Analyzer. Leggili attentamente prima di usare il Servizio.",
      updated: "19 giugno 2026",
      html: `
        <p>
          Questi Termini e condizioni («Termini») costituiscono un accordo tra te e
          AI Face Shape Analyzer («noi», «nostro») riguardo all'uso del
          sito web all'indirizzo aifaceshapeanalyzer.com (il «Servizio»). Accedendo o utilizzando
          il Servizio, accetti di essere vincolato da questi Termini. Se non sei d'accordo, non
          usare il Servizio.
        </p>
        <h2>Uso del Servizio</h2>
        <p>
          Il Servizio ti consente di analizzare una foto o un flusso video della fotocamera in tempo reale per stimare la forma
          del tuo viso. È fornito per scopi personali, informativi e di intrattenimento.
          Devi avere almeno 13 anni (o l'età minima nella tua
          giurisdizione) per usare il Servizio.
        </p>
        <h2>Condizioni d'uso accettabili</h2>
        <p>Accetti di non:</p>
        <ul>
          <li>Caricare immagini che non hai il diritto di usare, o immagini di altre persone senza il loro consenso.</li>
          <li>Usare il Servizio per scopi illegali, molesti o dannosi.</li>
          <li>Tentare di disturbare, sovraccaricare, decompilare o ottenere accesso non autorizzato al Servizio o ai suoi sistemi.</li>
          <li>Estrarre, rivendere o sfruttare commercialmente il Servizio o i suoi contenuti senza il nostro permesso scritto.</li>
        </ul>
        <h2>Nessuna consulenza professionale</h2>
        <p>
          La forma del viso è un'etichetta soggettiva, non una misurazione esatta. I risultati sono una
          stima generata dalla tua immagine e possono variare in base ad angolazione, illuminazione,
          espressione, capelli, occhiali e obiettivo della fotocamera. Il Servizio non fornisce
          consulenza medica, psicologica, estetica o professionale, e non dovresti
          farvi affidamento come tale. Usa i risultati solo come guida generale allo styling.
        </p>
        <h2>Proprietà intellettuale</h2>
        <p>
          Il Servizio, comprese la sua progettazione, i testi, la grafica e il software sottostante,
          è di nostra proprietà o dei nostri licenzianti ed è protetto dalle leggi applicabili. Ti
          concediamo una licenza limitata, non esclusiva e non trasferibile per usare il
          Servizio per lo scopo previsto. Conservi tutti i diritti che hai sulle
          immagini che fornisci; non rivendichiamo alcuna proprietà su di esse.
        </p>
        <h2>Esclusione di garanzie</h2>
        <p>
          Il Servizio è fornito «così com'è» e «come disponibile» senza garanzie di
          alcun tipo, espresse o implicite, comprese ma non limitate a
          commerciabilità, idoneità a uno scopo particolare, accuratezza e
          non violazione. Non garantiamo che il Servizio sarà ininterrotto,
          privo di errori, o che i risultati saranno accurati o affidabili.
        </p>
        <h2>Limitazione di responsabilità</h2>
        <p>
          Nella misura massima consentita dalla legge, non saremo responsabili per eventuali
          danni indiretti, incidentali, speciali, consequenziali o punitivi, o per qualsiasi
          perdita di dati, profitti o avviamento, derivanti dal tuo uso o dall'impossibilità
          di usare il Servizio. Laddove la responsabilità non possa essere esclusa, è limitata
          nella misura massima consentita dalla legge.
        </p>
        <h2>Link a terze parti</h2>
        <p>
          Il Servizio può contenere link a siti web o risorse di terze parti. Non siamo
          responsabili dei contenuti, delle politiche o delle pratiche di tali siti e
          forniamo tali link solo per comodità.
        </p>
        <h2>Modifiche al Servizio e ai Termini</h2>
        <p>
          Possiamo modificare o interrompere il Servizio, o aggiornare questi Termini, in qualsiasi
          momento. Quando aggiorniamo i Termini, aggiorneremo la data di «Ultimo aggiornamento»
          qui sopra. L'uso continuato del Servizio dopo l'entrata in vigore delle modifiche
          costituisce accettazione dei Termini rivisti.
        </p>
        <h2>Legge applicabile</h2>
        <p>
          Questi Termini sono regolati dalle leggi applicabili nel nostro principale luogo di
          attività, senza riguardo ai principi sui conflitti di legge. Eventuali controversie saranno
          soggette ai tribunali aventi giurisdizione in tale sede, salvo diversamente
          richiesto dalla legge locale imperativa.
        </p>
        <h2>Contattaci</h2>
        <p>
          Domande su questi Termini? Scrivi a
          <a href="mailto:hello@aifaceshapeanalyzer.com">hello@aifaceshapeanalyzer.com</a>
          o visita la nostra <a href="/contact">pagina dei contatti</a>.
        </p>
        <hr />
        <p>
          Questo documento è fornito a scopo informativo generale e non costituisce consulenza legale.
          Ti invitiamo a esaminarlo con un professionista qualificato per assicurarti che si adatti alle tue
          circostanze specifiche.
        </p>
      `,
    },
    notFound: {
      title: "Pagina non trovata (404) — AI Face Shape Analyzer",
      description:
        "La pagina che stai cercando non esiste. Torna alla home per scoprire la forma del tuo viso in pochi secondi.",
      code: "404",
      heading: "Non siamo riusciti a trovare quella pagina.",
      message:
        "Il link potrebbe essere rotto o la pagina potrebbe essere stata spostata. La tua analisi della forma del viso è ancora esattamente dove l'hai lasciata.",
    },
    serverError: {
      title: "Qualcosa è andato storto (500) — AI Face Shape Analyzer",
      description:
        "Si è verificato un errore imprevisto. Riprova o torna alla home per scoprire la forma del tuo viso in pochi secondi.",
      code: "500",
      heading: "Qualcosa è andato storto dalla nostra parte.",
      message:
        "Un errore imprevisto ha impedito il caricamento di questa pagina. Riprova tra un momento, o torna alla home per scoprire la forma del tuo viso.",
    },
  },

  keywords:
    "analizzatore ai forma del viso, miglior analizzatore ai forma del viso, analizzatore ai forma del viso gratuito, analizzatore ai forma del viso online, analizzatore ai forma del viso online gratuito, rilevatore ai forma del viso, analizzatore ai del viso, analizzatore della forma del viso ai, forme del viso, forma del viso, qual è la forma del mio viso, come determinare la forma del viso, analizzatore del viso, calcolatore della forma del viso, analizzatore di attrattiva del viso",
};
