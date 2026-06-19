import { type UIStrings } from "./en";

export const fr: UIStrings = {
  // ── Navigation ──────────────────────────────────────────────────────────
  nav: {
    logoText: "Analyseur de forme de visage",
    logoAria: "AI Face Shape Analyzer — accueil",
    primaryAria: "Principal",
    links: {
      shapes: "Formes de visage",
      about: "À propos",
      contact: "Contact",
      privacy: "Confidentialité",
      terms: "CGU",
    },
    themeToggleAria: "Basculer le mode sombre",
    themeToggleTitle: "Changer de thème",
    menuOpenAria: "Ouvrir le menu",
    menuCloseAria: "Fermer le menu",
    langLabel: "Langue",
  },

  // ── Footer ──────────────────────────────────────────────────────────────
  footer: {
    logoAria: "AI Face Shape Analyzer — accueil",
    brandName: "Analyseur de forme de visage",
    tagline:
      "Trouvez la forme de votre visage en quelques secondes — gratuitement et avec précision, avec une analyse complète des six formes.",
    productEyebrow: "Produit",
    productLinks: {
      analyze: "Analyser mon visage",
      how: "Comment ça marche",
      shapes: "Formes de visage",
    },
    aboutEyebrow: "À propos",
    aboutLinks: {
      aboutTool: "À propos de l’outil",
      faq: "FAQ",
    },
    companyEyebrow: "Société",
    companyLinks: {
      about: "Qui sommes-nous",
      contact: "Nous contacter",
      privacy: "Politique de confidentialité",
      terms: "Conditions générales",
    },
    mono: "Six formes · maillage facial à 478 points",
    disclaimer:
      "Avertissement : la forme du visage est une appréciation subjective, et non une mesure exacte. Les résultats sont une estimation générée à partir de votre photo et peuvent varier selon l’angle, l’éclairage, l’expression, les cheveux, les lunettes et l’objectif de l’appareil. De nombreux visages sont un mélange de deux formes — utilisez ceci comme un repère pour votre style, et non comme un avis définitif ou professionnel.",
  },

  // ── Hero ────────────────────────────────────────────────────────────────
  hero: {
    // The headline is split so "Face Shape" can carry the gradient accent.
    titleBefore: "Analyseur IA gratuit de ",
    titleAccent: "forme de visage",
    titleAfter: "",
    sub: "Téléchargez une photo ou utilisez votre caméra pour une analyse précise de la forme de votre visage — avec une analyse complète des six formes.",
    ctaPrimary: "Analyser mon visage",
    ctaSecondary: "Comment ça marche",
    trust: {
      free: "Gratuit pour toujours",
      mesh: "Maillage facial en direct",
      ranked: "Six formes classées",
    },
  },

  // ── How it works ──────────────────────────────────────────────────────────
  howItWorks: {
    eyebrow: "Comment ça marche",
    heading: "Trois étapes vers la forme de votre visage.",
  },
  steps: [
    {
      n: "01",
      title: "Téléchargez une photo ou ouvrez votre caméra",
      body: "Choisissez une photo nette, de face (jusqu’à 10MB), ou utilisez votre caméra pour une lecture en direct.",
    },
    {
      n: "02",
      title: "Nous cartographions 478 points du visage",
      body: "Un modèle exécuté sur votre appareil trace le maillage de votre visage et mesure les rapports entre la mâchoire, les pommettes, le front et la longueur.",
    },
    {
      n: "03",
      title: "Obtenez une analyse complète",
      body: "Découvrez la forme qui vous correspond le mieux, un score de confiance et un classement en pourcentage des six formes.",
    },
  ],

  // ── Face shapes (labels + descriptions; consumed by faceShape lookups) ────
  shapesSection: {
    eyebrow: "Référence",
    heading: "Les six formes de visage.",
    sub: "Chaque résultat est évalué par rapport à ces six profils. La plupart des gens penchent vers l’un d’eux tout en présentant des traits d’un autre — c’est pourquoi nous montrons le mélange complet.",
    exampleAlt: "Exemple d’une forme de visage {shape}",
  },
  shapeLabels: {
    oval: "Ovale",
    round: "Rond",
    square: "Carré",
    rectangle: "Rectangle",
    heart: "Cœur",
    diamond: "Diamant",
  },
  shapeDescriptions: {
    oval: "Des proportions équilibrées avec une longueur de visage supérieure à sa largeur et une mâchoire doucement arrondie. Largement considérée comme la forme la plus polyvalente.",
    round:
      "Des angles doux avec une longueur et une largeur de visage presque égales, des joues pleines et une mâchoire et un menton arrondis.",
    square:
      "Une mâchoire forte et anguleuse avec un front, des pommettes et une mâchoire de largeur quasi identique — une forme affirmée et structurée.",
    rectangle:
      "Comme le carré mais plus long — la longueur du visage dépasse nettement la largeur, avec un front, des pommettes et une mâchoire presque parallèles.",
    heart:
      "Un front et des pommettes plus larges qui s’effilent vers un menton plus étroit, souvent pointu — la silhouette classique en cœur.",
    diamond:
      "Les pommettes sont le point le plus large, avec un front et une mâchoire plus étroits et un menton défini et pointu.",
  },

  // ── Analyzer ──────────────────────────────────────────────────────────────
  analyzer: {
    eyebrow: "Analyseur",
    heading: "Détectez la forme de votre visage",
    sub: "Téléchargez une photo nette, de face, ou utilisez votre caméra.",
    tablistAria: "Méthode de saisie",
    tabUpload: "Télécharger une photo",
    tabCamera: "Utiliser la caméra",
    fileInputAria: "Choisissez une photo à analyser",
    dropzoneTitle: "Déposez une photo ou cliquez pour parcourir",
    dropzoneHint: "JPG, PNG ou WebP · jusqu’à 10MB",
    previewImgAlt: "Votre photo téléchargée",
    cameraPreviewAria: "Aperçu de la caméra",
    loadingModel: "Chargement du modèle sur l’appareil…",
    btnAnalyze: "Analyser mon visage",
    btnCapture: "Capturer et analyser",
    btnReset: "Analyser une autre",
    uploadTipsAria: "Conseils pour une lecture précise",
    uploadTips: [
      "Utilisez une photo nette et précise — bien éclairée, mise au point et face à la caméra.",
      "Gardez un arrière-plan simple et épuré afin que seul votre visage ressorte.",
      "Soignez-vous — cheveux dégagés du visage, lunettes retirées et expression neutre.",
    ],
    camTipsAria: "Conseils pour une lecture précise",
    camTips: [
      "Retirez vos lunettes — les montures masquent les contours des joues et des sourcils.",
      "Faites face à la caméra, les cheveux dégagés du visage.",
      "Cliquez pour capturer 5 lectures — nous les moyennons pour plus de précision.",
    ],
    resultEyebrow: "Votre forme de visage",
    breakdownTitle: "Analyse complète",
    resultDisclaimer:
      "Attention : la forme du visage est une appréciation subjective, et non une science exacte. Les résultats sont une estimation et peuvent varier selon l’angle de votre photo, l’éclairage, l’expression, les cheveux couvrant le visage, les lunettes et l’objectif de l’appareil. De nombreux visages sont un mélange naturel de deux formes — considérez ceci comme un repère utile, et non comme un verdict définitif.",
    idleTitle: "Ce que vous obtiendrez",
    idleItems: [
      "La forme qui vous correspond le mieux avec un score de confiance",
      "Un classement en pourcentage des six formes de visage",
      "Une note lorsque votre visage est un mélange de deux formes",
    ],
    // Strings used by the client script. {placeholders} are filled at runtime —
    // keep them verbatim and in place.
    msg: {
      analyzing: "Analyse en cours…",
      rateLimited:
        "Vous avez atteint la limite horaire. Veuillez réessayer {retryAfter}.",
      fileType: "Veuillez choisir une image JPG, PNG ou WebP.",
      fileTooLarge: "Cette image dépasse 10MB. Veuillez choisir un fichier plus petit.",
      readError:
        "Impossible de lire cette image. Les photos HEIC d’iPhone ne sont pas prises en charge — veuillez utiliser JPG, PNG ou WebP.",
      noFace: "Aucun visage détecté. Essayez une photo plus nette, de face.",
      analyzeError:
        "Une erreur s’est produite lors de l’analyse de cette image. Veuillez réessayer.",
      noCameraSupport: "Votre navigateur ne prend pas en charge l’accès à la caméra.",
      cameraError:
        "Impossible d’accéder à la caméra. Vérifiez les autorisations, ou utilisez plutôt le téléchargement de photo.",
      noFaceYet:
        "Aucun visage détecté pour l’instant. Centrez votre visage, puis cliquez pour capturer.",
      captureError: "Une erreur s’est produite pendant la capture. Veuillez réessayer.",
      // {n} = current reading number, {total} = CAPTURE_FRAMES.
      captureReading: "Lecture de capture - [{n}/{total}]",
      // {pct} = confidence percentage.
      confidence: "{pct}% de confiance",
      // {top} = winning shape label, {runnerUp} = second shape, {desc} = top description.
      blendDesc: "Principalement {top} avec des traits {runnerUp}. {desc}",
    },
  },

  // ── Long-form SEO section (#about on the homepage) ────────────────────────
  seo: {
    eyebrow: "À propos de l’outil",
    heading: "L’analyseur IA gratuit de forme de visage, en ligne.",
    // Rendered with set:html. Translate the text, keep tags + the #analyzer link.
    html: `
      <p>
        Notre <strong>analyseur IA de forme de visage</strong> est un outil
        gratuit, en ligne, qui vous indique la forme de votre visage en quelques
        secondes — sans inscription ni téléchargement requis. Si vous vous êtes
        déjà demandé
        <em>« quelle est la forme de mon visage ? »</em> sans savoir comment y
        répondre, voici le moyen rapide de le découvrir. Il suffit de télécharger
        une photo nette, de face, ou d’ouvrir votre caméra, et l’<strong>IA
        analyseur de forme de visage</strong> fait le reste : elle cartographie
        478 points de repère faciaux, mesure la géométrie de votre visage et
        classe chaque résultat parmi les six formes courantes.
      </p>
      <h3>Ce qui fait le meilleur analyseur IA de forme de visage</h3>
      <p>
        La plupart des outils vous donnent une seule étiquette en espérant qu’elle
        soit juste. Nous avons conçu ce que nous estimons être le <strong>meilleur
        analyseur IA de forme de visage</strong> en montrant plutôt le tableau
        complet. En tant que <strong>détecteur IA de forme de visage et analyseur
        facial</strong> combinés, il renvoie un score de confiance ainsi qu’une
        répartition classée en pourcentage pour les formes ovale, ronde, carrée,
        rectangle, cœur et diamant — car les vrais visages sont souvent un mélange
        de deux formes plutôt qu’une correspondance parfaite. Un maillage facial
        en direct montre exactement ce que le modèle lit pendant qu’il travaille,
        de sorte que l’analyse ne ressemble jamais à une boîte noire.
      </p>
      <h3>Comment déterminer la forme de votre visage</h3>
      <p>
        Vous vous demandez <strong>comment déterminer la forme du visage</strong>
        sans miroir ni mètre ruban ? La méthode classique compare quatre
        mesures — la largeur du front, la largeur des pommettes, la largeur de la
        mâchoire et la longueur du visage — et les pondère les unes par rapport
        aux autres. C’est exactement ce que ce
        <strong>calculateur de forme de visage</strong> automatise. Là où un
        <strong>analyseur facial</strong> manuel laisse place à l’approximation,
        notre <strong>IA analyseur de forme de visage</strong> lit des rapports
        anthropométriques précis et l’angularité de la mâchoire directement à
        partir des points de repère, pour une réponse cohérente à chaque fois.
        Pour la lecture la plus précise, dégagez vos cheveux du visage, retirez
        vos lunettes, gardez une expression neutre et utilisez un éclairage
        uniforme, de face.
      </p>
      <h3>Gratuit, en ligne</h3>
      <p>
        Cet <strong>analyseur IA de forme de visage en ligne gratuit</strong>
        fonctionne en ligne, sans rien à installer. Il fonctionne de la même
        manière sur téléphone ou ordinateur, et c’est véritablement un
        <strong>analyseur IA de forme de visage gratuit</strong>, sans plafond
        d’utilisation pour un usage normal.
      </p>
      <h3>Des formes de visage aux choix avantageux</h3>
      <p>
        Connaître la <strong>forme de votre visage</strong> est le point de départ
        de meilleurs choix au quotidien. On l’utilise pour choisir des coupes et
        des coiffures, sélectionner des lunettes et des montures de soleil qui
        complètent ses proportions, dessiner les sourcils, et orienter le
        maquillage ou la taille de la barbe. Si certaines personnes recherchent un
        <strong>analyseur d’attractivité du visage</strong>, la beauté est
        subjective et la forme du visage n’est pas une note — chacune des six
        <strong>formes de visage</strong> a ses propres atouts, et l’objectif ici
        est de vous aider à vous habiller avec confiance, pas de classer les
        visages. Considérez le résultat comme un repère utile plutôt qu’un verdict.
      </p>
      <p>
        Prêt à ne plus deviner ? Remontez jusqu’à l’<a href="#analyzer">analyseur</a>,
        ajoutez une photo ou ouvrez votre caméra, et laissez l’<strong>IA
        analyseur de forme de visage</strong> vous présenter votre analyse
        complète en quelques secondes — entièrement gratuitement.
      </p>
    `,
  },

  // ── FAQ ───────────────────────────────────────────────────────────────────
  faqSection: {
    eyebrow: "FAQ",
    heading: "Questions fréquentes.",
  },
  faqs: [
    {
      q: "Qu’est-ce qu’un analyseur de forme de visage ?",
      a: "Un analyseur de forme de visage est un outil qui examine les proportions de votre visage — front, pommettes, mâchoire et longueur — et vous indique la forme dont vous êtes le plus proche. Notre analyseur IA de forme de visage le fait automatiquement en cartographiant 478 points de repère faciaux à partir d’une photo ou de votre caméra, puis en classant votre correspondance parmi les six formes.",
    },
    {
      q: "Comment déterminer la forme de mon visage ?",
      a: "Pour déterminer la forme de votre visage, comparez quatre éléments : la largeur de votre front, de vos pommettes et de votre mâchoire, ainsi que la longueur globale de votre visage. La forme dont les proportions correspondent aux vôtres est celle de votre visage. Cet analyseur mesure ces rapports pour vous automatiquement, sans approximation ni mètre ruban nécessaires.",
    },
    {
      q: "Quelle est la forme de mon visage ?",
      a: "Vous avez très probablement l’une des six formes de visage courantes : ovale, ronde, carrée, rectangle, cœur ou diamant. Téléchargez une photo nette, de face, ou ouvrez votre caméra, et l’analyseur vous indiquera laquelle vous correspond, accompagnée d’un score de confiance et d’une répartition complète en pourcentage.",
    },
    {
      q: "Quelle forme a mon visage ?",
      a: "La forme de votre visage est le contour global de votre visage, défini par la largeur de votre front, de vos pommettes et de votre mâchoire par rapport à la longueur de votre visage. Le moyen le plus rapide de le savoir est de passer une photo dans l’analyseur ci-dessus — il lit votre véritable géométrie faciale et affiche votre correspondance la plus proche en quelques secondes.",
    },
    {
      q: "De quelle forme est mon visage ?",
      a: "La forme de votre visage dépend de son point le plus large et de sa longueur. Si votre visage est nettement plus long que large, il peut être ovale ou rectangle ; si la largeur et la longueur sont semblables, rond ou carré ; si votre front est la partie la plus large, cœur ou diamant. L’analyseur la détermine précisément à partir de vos mesures.",
    },
    {
      q: "Comment puis-je déterminer la forme de mon visage ?",
      a: "Le plus simple est de laisser l’IA s’en charger : dégagez vos cheveux, faites face à la caméra et téléchargez une photo ou utilisez la caméra en direct. L’outil mesure les rapports de votre mâchoire, de vos pommettes, de votre front et de la longueur, puis renvoie la forme de votre visage instantanément — bien plus cohérent que de l’estimer dans un miroir.",
    },
    {
      q: "Comment savoir quelle est la forme de mon visage ?",
      a: "Vous pouvez connaître la forme de votre visage en repérant son trait le plus large et en vérifiant si votre visage est plus long que large. Plutôt que de tracer votre contour sur un miroir, cet analyseur identifie pour vous la forme de votre visage à partir d’une seule photo, sans mesure manuelle.",
    },
    {
      q: "Comment savoir quelle forme de visage j’ai ?",
      a: "Observez trois signaux : l’endroit où votre visage est le plus large, le caractère anguleux ou doux de votre mâchoire, et si votre visage est long ou équilibré. L’analyseur lit les trois à partir de 478 points de repère et vous indique exactement quelle forme de visage vous avez, ainsi que la force avec laquelle vous correspondez aux formes suivantes.",
    },
    {
      q: "C’est quoi la forme de mon visage ?",
      a: "Quelle que soit la forme de votre visage, l’analyseur peut la nommer en quelques secondes. Ajoutez une photo ou ouvrez votre caméra ci-dessus et vous obtiendrez la forme qui vous correspond le mieux, un pourcentage de confiance et une répartition classée parmi les formes ovale, ronde, carrée, rectangle, cœur et diamant.",
    },
    {
      q: "Comment découvrir la forme de mon visage ?",
      a: "Vous pouvez découvrir la forme de votre visage gratuitement ici même — sans inscription ni téléchargement. Téléchargez une photo de face ou utilisez votre caméra, et l’IA mesure vos proportions faciales et affiche votre résultat en quelques secondes.",
    },
    {
      q: "Comment trouver la forme de mon visage ?",
      a: "Pour trouver la forme de votre visage, utilisez une photo nette et bien éclairée, cheveux dégagés du visage et lunettes retirées, puis passez-la dans l’analyseur. Il compare vos rapports mesurés aux six profils de forme et trouve automatiquement la correspondance la plus proche.",
    },
    {
      q: "Comment identifier la forme de mon visage ?",
      a: "Identifier la forme de votre visage consiste à faire correspondre les largeurs de votre front, de vos pommettes et de votre mâchoire, ainsi que la longueur de votre visage, à l’un des six profils standards. L’analyseur l’identifie avec précision grâce à la géométrie des points de repère faciaux, pour une réponse objective plutôt qu’une estimation subjective.",
    },
  ],

  // ── Shared content-page chrome ────────────────────────────────────────────
  contentPage: {
    lastUpdated: "Dernière mise à jour :",
  },
  // Machine-translation notice shown on translated legal/about pages (set:html).
  mtNotice:
    "Cette page a été traduite automatiquement. La version anglaise fait foi ; en cas de divergence, l’<a href=\"{enHref}\">original anglais</a> prévaut.",

  // ── Error pages ─────────────────────────────────────────────────────────
  error: {
    eyebrow: "Erreur {code}",
    ctaHome: "Retour à l’accueil",
    ctaAnalyze: "Analyser mon visage",
  },

  // ── Per-page SEO meta + content-page copy ─────────────────────────────────
  pages: {
    home: {
      title: "Analyseur IA gratuit de forme de visage en ligne — Détectez votre forme de visage",
      description:
        "Analyseur IA gratuit de forme de visage en ligne — téléchargez une photo ou utilisez votre caméra pour trouver instantanément la forme de votre visage avec une analyse complète des 6 formes. Sans inscription.",
    },
    about: {
      title: "Qui sommes-nous — AI Face Shape Analyzer",
      description:
        "Découvrez l’AI Face Shape Analyzer — un outil gratuit et rapide qui détecte la forme de votre visage à partir d’une photo ou d’une caméra en direct, avec une analyse complète des six formes.",
      keywords:
        "à propos analyseur ia de forme de visage, analyseur de forme de visage, qui a créé l’analyseur de forme de visage",
      eyebrow: "À propos",
      heading: "À propos d’AI Face Shape Analyzer",
      lead: "Nous avons conçu un analyseur de forme de visage gratuit et précis qui vous donne le tableau complet — pas seulement une étiquette en un mot.",
      html: `
        <p>
          <strong>AI Face Shape Analyzer</strong> est un outil en ligne gratuit qui
          détecte la forme de votre visage à partir d’une photo ou de votre caméra
          en direct. Au lieu de vous donner une simple estimation, il cartographie
          478 points de repère faciaux, mesure la véritable géométrie de votre
          visage et classe votre résultat parmi les six formes courantes — ovale,
          ronde, carrée, rectangle, cœur et diamant.
        </p>
        <h2>Pourquoi nous l’avons créé</h2>
        <p>
          « Quelle est la forme de mon visage ? » est l’une des questions les plus
          fréquentes que l’on se pose avant de choisir une coupe de cheveux, une
          paire de lunettes ou un nouveau style de maquillage ou de soin. La plupart
          des outils y répondent par une seule étiquette et vous laissent vous
          demander à quel point cette réponse est fiable. Nous voulions quelque
          chose de plus honnête : un outil qui montre l’analyse complète, car les
          vrais visages sont souvent un mélange de deux formes plutôt qu’une
          correspondance parfaite.
        </p>
        <h2>Ce qui le distingue</h2>
        <ul>
          <li>
            <strong>Un maillage facial en direct.</strong> Une superposition en
            temps réel montre exactement ce que le modèle lit pendant qu’il
            travaille, de sorte que l’analyse ne ressemble jamais à une boîte noire.
          </li>
          <li>
            <strong>Une répartition complète des probabilités.</strong> Vous
            obtenez la forme qui vous correspond le mieux, un score de confiance et
            un classement en pourcentage des six formes — ainsi que la détection
            d’un mélange de deux formes.
          </li>
          <li>
            <strong>Gratuit et sans friction.</strong> Sans inscription, sans
            téléchargement et sans plafond d’utilisation pour un usage normal. Il
            fonctionne de la même manière sur téléphone ou ordinateur.
          </li>
          <li>
            <strong>Conçu pour tous.</strong> L’interface est accessible par
            conception, avec prise en charge du clavier, des états de focus clairs
            et la prise en charge du mouvement réduit.
          </li>
        </ul>
        <h2>Comment ça marche</h2>
        <p>
          Lorsque vous téléchargez une photo ou ouvrez votre caméra, un modèle
          exécuté dans le navigateur trace votre visage et mesure les rapports de la
          mâchoire, des pommettes, du front et de la longueur, ainsi que
          l’angularité de la mâchoire. Ces mesures sont comparées à six profils de
          forme afin de trouver votre correspondance la plus proche. Le résultat est
          une lecture cohérente et objective de vos proportions faciales — bien plus
          stable que de l’estimer dans un miroir.
        </p>
        <h2>Une note honnête sur la précision</h2>
        <p>
          La forme du visage est une appréciation subjective, et non une mesure
          exacte, et les visages limites sont réellement ambigus. Les résultats
          peuvent varier selon l’angle de la photo, l’éclairage, l’expression, les
          cheveux et les lunettes. Nous considérons l’analyse comme un repère utile
          pour le style, et non comme un verdict — et chacune des six formes a ses
          propres atouts.
        </p>
        <h2>Contactez-nous</h2>
        <p>
          Un retour, une idée de fonctionnalité ou une question ? Nous serions ravis
          d’avoir de vos nouvelles — rendez-vous sur notre
          <a href="/contact">page de contact</a> ou écrivez à
          <a href="mailto:hello@aifaceshapeanalyzer.com">hello@aifaceshapeanalyzer.com</a>.
        </p>
        <p>
          Prêt à l’essayer ? <a href="/#analyzer">Analysez votre visage</a> et
          découvrez votre analyse complète en quelques secondes — entièrement
          gratuitement.
        </p>
      `,
    },
    contact: {
      title: "Nous contacter — AI Face Shape Analyzer",
      description:
        "Contactez l’équipe d’AI Face Shape Analyzer. Envoyez vos retours, idées de fonctionnalités, demandes de confidentialité ou questions d’assistance par e-mail.",
      keywords:
        "contacter analyseur ia de forme de visage, assistance analyseur de forme de visage, retour analyseur de forme de visage",
      eyebrow: "Contact",
      heading: "Nous contacter",
      lead: "Des questions, des retours ou une idée de fonctionnalité ? Nous serions ravis d’avoir de vos nouvelles. Le moyen le plus rapide de nous joindre est par e-mail.",
      emailHeading: "Écrivez-nous",
      emailGeneralLabel: "Général et retours :",
      emailPrivacyLabel: "Demandes de confidentialité :",
      emailIntro:
        "Nous lisons chaque message et visons à répondre sous quelques jours ouvrés. Pour les questions de confidentialité, consultez notre {privacyLink} ; pour les questions d’utilisation, nos {termsLink}.",
      privacyLinkText: "Politique de confidentialité",
      termsLinkText: "Conditions générales",
      formHeading: "Envoyer un message",
      formIntro:
        "Remplissez les champs ci-dessous et nous ouvrirons un e-mail pré-rempli dans votre application de messagerie — il ne vous restera qu’à l’envoyer.",
      labelName: "Nom",
      labelEmail: "Votre e-mail",
      labelMessage: "Message",
      submit: "Ouvrir l’e-mail pour envoyer",
      fallback: "Vous préférez écrire directement ? Écrivez à {email}.",
      errMissing: "Veuillez renseigner votre nom, votre e-mail et votre message.",
      errEmail: "Veuillez saisir une adresse e-mail valide.",
      // {name} fills both; the email body keeps the em dash + parenthesised email.
      mailSubject: "Message de {name}",
    },
    privacy: {
      title: "Politique de confidentialité — AI Face Shape Analyzer",
      description:
        "Comment l’AI Face Shape Analyzer traite vos photos et vos données. L’analyse du visage s’exécute dans votre navigateur ; découvrez ce que nous collectons, comment nous l’utilisons et vos choix.",
      keywords:
        "politique de confidentialité analyseur ia de forme de visage, données analyseur de forme de visage, confidentialité analyseur facial",
      eyebrow: "Mentions légales",
      heading: "Politique de confidentialité",
      lead: "Cette politique explique quelles informations l’AI Face Shape Analyzer collecte, comment vos photos sont traitées et les choix dont vous disposez.",
      updated: "19 juin 2026",
      html: `
        <p>
          AI Face Shape Analyzer (« nous », « notre ») exploite le site web
          aifaceshapeanalyzer.com (le « Service »). La présente Politique de
          confidentialité décrit la manière dont nous traitons les informations
          lorsque vous utilisez le Service. En utilisant le Service, vous acceptez
          les pratiques décrites ici.
        </p>
        <h2>Vos photos et votre caméra</h2>
        <p>
          L’analyse de la forme du visage s’exécute dans votre navigateur. Lorsque
          vous téléchargez une photo ou utilisez votre caméra, l’image est traitée
          sur votre propre appareil par le modèle exécuté dans le navigateur afin de
          mesurer les proportions faciales. Nous ne vous demandons pas de créer un
          compte, et nous ne vendons pas vos images.
        </p>
        <p>
          Vous contrôlez l’autorisation d’accès à la caméra via votre navigateur, et
          vous pouvez révoquer cette autorisation à tout moment dans les paramètres
          de votre navigateur.
        </p>
        <h2>Informations que nous collectons</h2>
        <p>Nous cherchons à collecter le moins possible. Selon votre utilisation du Service, cela peut inclure :</p>
        <ul>
          <li>
            <strong>Données d’utilisation et d’appareil.</strong> Des informations
            techniques standard telles que le type de navigateur, le type
            d’appareil, la taille d’écran, la page de référence et la région
            générale, collectées pour assurer le fonctionnement du Service et
            comprendre l’utilisation globale.
          </li>
          <li>
            <strong>Stockage local.</strong> Nous stockons de petites valeurs dans
            votre navigateur (par exemple, votre préférence de thème clair/sombre et
            un compteur d’utilisation souple) sur votre appareil. Ces données ne
            nous sont pas envoyées sous forme de profil utilisateur.
          </li>
          <li>
            <strong>Messages que vous nous envoyez.</strong> Si vous nous contactez
            par e-mail, nous recevons les informations que vous choisissez de
            partager, telles que votre adresse e-mail et le contenu de votre message.
          </li>
        </ul>
        <h2>Cookies et analyse d’audience</h2>
        <p>
          Nous pouvons utiliser des cookies ou des technologies similaires, y
          compris des outils d’analyse respectueux de la vie privée, pour mesurer le
          trafic global et améliorer le Service. Vous pouvez contrôler les cookies
          via les paramètres de votre navigateur. Les désactiver ne devrait pas
          empêcher le fonctionnement de l’analyseur principal.
        </p>
        <h2>Comment nous utilisons les informations</h2>
        <ul>
          <li>Pour fournir, maintenir et améliorer le Service.</li>
          <li>Pour diagnostiquer les problèmes techniques et prévenir les abus.</li>
          <li>Pour répondre à vos questions et demandes d’assistance.</li>
          <li>Pour respecter nos obligations légales.</li>
        </ul>
        <h2>Services tiers</h2>
        <p>
          Nous pouvons recourir à des prestataires tiers pour l’hébergement, la
          diffusion de contenu et l’analyse d’audience. Ces prestataires traitent
          des données techniques limitées pour notre compte et sont tenus de les
          protéger. Le Service peut également renvoyer vers des sites externes régis
          par leurs propres politiques de confidentialité.
        </p>
        <h2>Conservation des données</h2>
        <p>
          Nous conservons les données techniques et d’analyse uniquement le temps
          nécessaire aux finalités décrites ci-dessus, puis nous les supprimons ou
          les anonymisons. La correspondance par e-mail est conservée aussi
          longtemps que nécessaire pour traiter votre demande et à des fins
          raisonnables de tenue de registres.
        </p>
        <h2>Confidentialité des enfants</h2>
        <p>
          Le Service ne s’adresse pas aux enfants de moins de 13 ans (ou l’âge
          minimum dans votre juridiction), et nous ne collectons pas sciemment
          d’informations personnelles les concernant. Si vous pensez qu’un enfant
          nous a fourni des informations, contactez-nous et nous prendrons les
          mesures appropriées pour les supprimer.
        </p>
        <h2>Vos droits</h2>
        <p>
          Selon votre lieu de résidence, vous pouvez disposer du droit d’accéder aux
          informations personnelles que nous détenons à votre sujet, de les
          corriger ou de les supprimer, ou de vous opposer à certains traitements.
          Pour formuler une demande, écrivez-nous à l’adresse ci-dessous. Nous y
          répondrons conformément à la loi applicable.
        </p>
        <h2>Modifications de cette politique</h2>
        <p>
          Nous pouvons mettre à jour cette Politique de confidentialité de temps à
          autre. Lorsque nous le faisons, nous révisons la date de « Dernière mise à
          jour » ci-dessus. Les changements importants peuvent être signalés sur le
          Service.
        </p>
        <h2>Contactez-nous</h2>
        <p>
          Des questions sur cette politique ? Écrivez à
          <a href="mailto:privacy@aifaceshapeanalyzer.com">privacy@aifaceshapeanalyzer.com</a>
          ou consultez notre <a href="/contact">page de contact</a>.
        </p>
        <hr />
        <p>
          Ce document est fourni à titre d’information générale et ne constitue pas
          un avis juridique. Veuillez le faire examiner par un professionnel
          qualifié pour vous assurer qu’il correspond à votre situation particulière.
        </p>
      `,
    },
    terms: {
      title: "Conditions générales — AI Face Shape Analyzer",
      description:
        "Les conditions régissant votre utilisation de l’AI Face Shape Analyzer, y compris l’utilisation acceptable, les avertissements et les limitations de responsabilité.",
      keywords:
        "conditions analyseur ia de forme de visage, conditions générales analyseur de forme de visage, conditions d’utilisation",
      eyebrow: "Mentions légales",
      heading: "Conditions générales",
      lead: "Ces conditions régissent votre utilisation de l’AI Face Shape Analyzer. Veuillez les lire attentivement avant d’utiliser le Service.",
      updated: "19 juin 2026",
      html: `
        <p>
          Les présentes Conditions générales (« Conditions ») constituent un accord
          entre vous et AI Face Shape Analyzer (« nous », « notre ») concernant
          votre utilisation du site web aifaceshapeanalyzer.com (le « Service »). En
          accédant au Service ou en l’utilisant, vous acceptez d’être lié par ces
          Conditions. Si vous n’êtes pas d’accord, n’utilisez pas le Service.
        </p>
        <h2>Utilisation du Service</h2>
        <p>
          Le Service vous permet d’analyser une photo ou un flux de caméra en direct
          pour estimer la forme de votre visage. Il est fourni à des fins
          personnelles, informatives et de divertissement. Vous devez avoir au moins
          13 ans (ou l’âge minimum dans votre juridiction) pour utiliser le Service.
        </p>
        <h2>Utilisation acceptable</h2>
        <p>Vous acceptez de ne pas :</p>
        <ul>
          <li>Télécharger des images que vous n’avez pas le droit d’utiliser, ou des images d’autres personnes sans leur consentement.</li>
          <li>Utiliser le Service à des fins illégales, de harcèlement ou nuisibles.</li>
          <li>Tenter de perturber, de surcharger, de désosser ou d’obtenir un accès non autorisé au Service ou à ses systèmes.</li>
          <li>Extraire, revendre ou exploiter commercialement le Service ou son contenu sans notre autorisation écrite.</li>
        </ul>
        <h2>Aucun avis professionnel</h2>
        <p>
          La forme du visage est une appréciation subjective, et non une mesure
          exacte. Les résultats sont une estimation générée à partir de votre image
          et peuvent varier selon l’angle, l’éclairage, l’expression, les cheveux,
          les lunettes et l’objectif de l’appareil. Le Service ne fournit pas d’avis
          médical, psychologique, cosmétique ou professionnel, et vous ne devez pas
          vous y fier comme tel. Utilisez les résultats uniquement comme un repère
          général pour votre style.
        </p>
        <h2>Propriété intellectuelle</h2>
        <p>
          Le Service, y compris sa conception, ses textes, ses graphismes et le
          logiciel sous-jacent, nous appartient ou appartient à nos concédants de
          licence et est protégé par les lois applicables. Nous vous accordons une
          licence limitée, non exclusive et non transférable d’utilisation du
          Service aux fins prévues. Vous conservez tous les droits que vous détenez
          sur les images que vous fournissez ; nous n’en revendiquons pas la
          propriété.
        </p>
        <h2>Exclusion de garanties</h2>
        <p>
          Le Service est fourni « en l’état » et « selon disponibilité », sans
          garantie d’aucune sorte, expresse ou implicite, y compris, sans s’y
          limiter, la qualité marchande, l’adéquation à un usage particulier, la
          précision et l’absence de contrefaçon. Nous ne garantissons pas que le
          Service sera ininterrompu, exempt d’erreurs, ni que les résultats seront
          précis ou fiables.
        </p>
        <h2>Limitation de responsabilité</h2>
        <p>
          Dans toute la mesure permise par la loi, nous ne serons pas responsables
          des dommages indirects, accessoires, particuliers, consécutifs ou
          punitifs, ni de toute perte de données, de bénéfices ou de clientèle,
          résultant de votre utilisation ou de votre incapacité à utiliser le
          Service. Lorsque la responsabilité ne peut être exclue, elle est limitée
          dans toute la mesure permise par la loi.
        </p>
        <h2>Liens vers des tiers</h2>
        <p>
          Le Service peut contenir des liens vers des sites web ou des ressources de
          tiers. Nous ne sommes pas responsables du contenu, des politiques ou des
          pratiques de ces sites et fournissons ces liens uniquement par commodité.
        </p>
        <h2>Modifications du Service et des Conditions</h2>
        <p>
          Nous pouvons modifier ou interrompre le Service, ou mettre à jour ces
          Conditions, à tout moment. Lorsque nous mettons à jour les Conditions,
          nous révisons la date de « Dernière mise à jour » ci-dessus. La poursuite
          de votre utilisation du Service après l’entrée en vigueur des changements
          constitue une acceptation des Conditions révisées.
        </p>
        <h2>Droit applicable</h2>
        <p>
          Les présentes Conditions sont régies par les lois applicables dans notre
          principal lieu d’activité, sans tenir compte des principes de conflit de
          lois. Tout litige sera soumis aux tribunaux compétents de ce lieu, sauf
          disposition contraire d’une loi locale impérative.
        </p>
        <h2>Contactez-nous</h2>
        <p>
          Des questions sur ces Conditions ? Écrivez à
          <a href="mailto:hello@aifaceshapeanalyzer.com">hello@aifaceshapeanalyzer.com</a>
          ou consultez notre <a href="/contact">page de contact</a>.
        </p>
        <hr />
        <p>
          Ce document est fourni à titre d’information générale et ne constitue pas
          un avis juridique. Veuillez le faire examiner par un professionnel
          qualifié pour vous assurer qu’il correspond à votre situation particulière.
        </p>
      `,
    },
    notFound: {
      title: "Page introuvable (404) — AI Face Shape Analyzer",
      description:
        "La page que vous recherchez n’existe pas. Retournez à l’accueil pour trouver la forme de votre visage en quelques secondes.",
      code: "404",
      heading: "Nous n’avons pas trouvé cette page.",
      message:
        "Le lien est peut-être rompu ou la page a peut-être été déplacée. Votre analyse de forme de visage est toujours là où vous l’avez laissée.",
    },
    serverError: {
      title: "Une erreur s’est produite (500) — AI Face Shape Analyzer",
      description:
        "Une erreur inattendue s’est produite. Réessayez ou retournez à l’accueil pour trouver la forme de votre visage en quelques secondes.",
      code: "500",
      heading: "Une erreur s’est produite de notre côté.",
      message:
        "Une erreur inattendue a empêché le chargement de cette page. Réessayez dans un instant, ou retournez à l’accueil pour trouver la forme de votre visage.",
    },
  },

  // Shared keyword meta (home + default). Locale files may localize lightly.
  keywords:
    "analyseur ia de forme de visage, meilleur analyseur ia de forme de visage, analyseur ia de forme de visage gratuit, analyseur ia de forme de visage en ligne, analyseur ia de forme de visage en ligne gratuit, détecteur ia de forme de visage, ia analyseur de forme de visage, analyseur de forme de visage ia, formes de visage, forme de visage, quelle est la forme de mon visage, comment déterminer la forme du visage, analyseur facial, calculateur de forme de visage, analyseur d’attractivité du visage",
};
