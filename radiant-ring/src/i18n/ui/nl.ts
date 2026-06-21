import { type UIStrings } from "./en";

export const nl: UIStrings = {
  nav: {
    logoText: "Gezichtsvorm-analyse",
    logoAria: "AI Face Shape Analyzer — home",
    primaryAria: "Primair",
    links: {
      shapes: "Gezichtsvormen",
      about: "Over ons",
      contact: "Contact",
      privacy: "Privacy",
      terms: "AV",
    },
    themeToggleAria: "Donkere modus wisselen",
    themeToggleTitle: "Thema wisselen",
    menuOpenAria: "Menu openen",
    menuCloseAria: "Menu sluiten",
    langLabel: "Taal",
  },

  footer: {
    logoAria: "AI Face Shape Analyzer — home",
    brandName: "Gezichtsvorm-analyse",
    tagline:
      "Ontdek je gezichtsvorm in seconden — gratis en nauwkeurig, met een volledige uitsplitsing over alle zes vormen.",
    productEyebrow: "Product",
    productLinks: {
      analyze: "Analyseer mijn gezicht",
      how: "Hoe het werkt",
      shapes: "Gezichtsvormen",
    },
    aboutEyebrow: "Info",
    aboutLinks: {
      aboutTool: "Over de tool",
      faq: "Veelgestelde vragen",
    },
    companyEyebrow: "Bedrijf",
    companyLinks: {
      about: "Over ons",
      contact: "Neem contact op",
      privacy: "Privacybeleid",
      terms: "Algemene voorwaarden",
    },
    mono: "Zes vormen · 478-punts gezichtsmesh",
    disclaimer:
      "Disclaimer: gezichtsvorm is een subjectief label, geen exacte meting. De resultaten zijn een schatting op basis van je foto en kunnen variëren met hoek, belichting, expressie, haar, bril en cameralens. Veel gezichten zijn een mix van twee vormen — gebruik dit als leidraad voor styling, niet als definitief of professioneel advies.",
  },

  hero: {
    titleBefore: "Gratis AI ",
    titleAccent: "Gezichtsvorm",
    titleAfter: "-analyse",
    sub: "Upload een foto of gebruik je camera voor een nauwkeurige gezichtsvormanalyse — met een volledige uitsplitsing over alle zes vormen.",
    ctaPrimary: "Analyseer mijn gezicht",
    ctaSecondary: "Hoe het werkt",
    trust: {
      free: "Handmatige analyse",
      mesh: "Live gezichtsmesh",
      ranked: "Zes vormen gerangschikt",
    },
  },

  howItWorks: {
    eyebrow: "Hoe het werkt",
    heading: "Drie stappen naar je gezichtsvorm.",
  },
  steps: [
    {
      n: "01",
      title: "Upload of open je camera",
      body: "Kies een scherpe foto recht van voren (tot 10MB) of gebruik je camera voor een live meting.",
    },
    {
      n: "02",
      title: "We brengen 478 gezichtspunten in kaart",
      body: "Een model op je apparaat traceert je gezichtsmesh en meet de verhoudingen van kaak, jukbeen, voorhoofd en lengte.",
    },
    {
      n: "03",
      title: "Krijg een volledige uitsplitsing",
      body: "Bekijk je best passende vorm, een betrouwbaarheidsscore en een gerangschikt percentage over alle zes vormen.",
    },
  ],

  shapesSection: {
    eyebrow: "Referentie",
    heading: "De zes gezichtsvormen.",
    sub: "Elk resultaat wordt afgezet tegen deze zes profielen. De meeste mensen neigen naar één vorm met kenmerken van een andere — daarom tonen we de volledige mix.",
    exampleAlt: "Voorbeeld van een {shape} gezichtsvorm",
  },
  shapeLabels: {
    oval: "Ovaal",
    round: "Rond",
    square: "Vierkant",
    rectangle: "Rechthoekig",
    heart: "Hartvormig",
    diamond: "Ruitvormig",
  },
  shapeDescriptions: {
    oval: "Evenwichtige verhoudingen met een gezichtslengte die groter is dan de breedte en een licht afgeronde kaak. Wordt algemeen beschouwd als de meest veelzijdige vorm.",
    round:
      "Zachte hoeken met een vrijwel gelijke gezichtslengte en -breedte, vollere wangen en een afgeronde kaaklijn en kin.",
    square:
      "Een sterke, hoekige kaak met voorhoofd, jukbeenderen en kaak die ongeveer even breed zijn — een gedurfde, gestructureerde vorm.",
    rectangle:
      "Als een vierkant maar langer — de gezichtslengte is duidelijk groter dan de breedte, met voorhoofd, jukbeenderen en kaak die vrijwel parallel lopen.",
    heart:
      "Een breder voorhoofd en jukbeenderen die taps toelopen naar een smallere, vaak puntige kin — het klassieke hartsilhouet.",
    diamond:
      "De jukbeenderen vormen het breedste punt, met een smaller voorhoofd en kaak en een uitgesproken, puntige kin.",
  },

  analyzer: {
    eyebrow: "Analyzer",
    heading: "Detecteer je gezichtsvorm",
    sub: "Upload een scherpe foto recht van voren of gebruik je camera.",
    tablistAria: "Invoermethode",
    tabUpload: "Foto uploaden",
    tabCamera: "Camera gebruiken",
    fileInputAria: "Kies een foto om te analyseren",
    dropzoneTitle: "Sleep een foto hierheen of klik om te bladeren",
    dropzoneHint: "JPG, PNG of WebP · tot 10MB",
    previewImgAlt: "Je geüploade foto",
    cameraPreviewAria: "Camerapreview",
    loadingModel: "Het model op je apparaat wordt geladen…",
    btnAnalyze: "Analyseer mijn gezicht",
    btnCapture: "Vastleggen & analyseren",
    btnReset: "Nog een analyseren",
    uploadTipsAria: "Tips voor een nauwkeurige meting",
    uploadTips: [
      "Gebruik een scherpe, heldere foto — goed verlicht, scherp en recht in de camera kijkend.",
      "Houd de achtergrond effen en rustig zodat alleen je gezicht eruit springt.",
      "Maak je op — haar uit het gezicht, bril af en een neutrale uitdrukking.",
    ],
    camTipsAria: "Tips voor een nauwkeurige meting",
    camTips: [
      "Zet je bril af — montuur verbergt de randen van wangen en wenkbrauwen.",
      "Kijk recht in de camera, met je haar uit je gezicht.",
      "Klik om 5 metingen vast te leggen — we middelen ze voor nauwkeurigheid.",
    ],
    resultEyebrow: "Jouw gezichtsvorm",
    breakdownTitle: "Volledige uitsplitsing",
    resultDisclaimer:
      "Let op: gezichtsvorm is een subjectief label, geen exacte wetenschap. De resultaten zijn een schatting en kunnen variëren met de hoek van je foto, belichting, expressie, haar dat het gezicht bedekt, bril en cameralens. Veel gezichten zijn een natuurlijke mix van twee vormen — beschouw dit als een handige leidraad, niet als een definitief oordeel.",
    idleTitle: "Wat je krijgt",
    idleItems: [
      "Je best passende vorm met een betrouwbaarheidsscore",
      "Een gerangschikt percentage over alle zes gezichtsvormen",
      "Een notitie wanneer je gezicht een mix van twee vormen is",
    ],
    msg: {
      analyzing: "Bezig met analyseren…",
      rateLimited:
        "Je hebt de limiet per uur bereikt. Probeer het opnieuw {retryAfter}.",
      fileType: "Kies een JPG-, PNG- of WebP-afbeelding.",
      fileTooLarge: "Die afbeelding is groter dan 10MB. Kies een kleiner bestand.",
      readError:
        "Kon die afbeelding niet lezen. HEIC-foto’s van de iPhone worden niet ondersteund — gebruik JPG, PNG of WebP.",
      noFace: "Geen gezicht gedetecteerd. Probeer een scherpere foto recht van voren.",
      analyzeError:
        "Er ging iets mis bij het analyseren van die afbeelding. Probeer het opnieuw.",
      noCameraSupport: "Je browser ondersteunt geen cameratoegang.",
      cameraError:
        "Kon geen toegang tot de camera krijgen. Controleer de toestemmingen of gebruik in plaats daarvan een foto-upload.",
      noFaceYet:
        "Nog geen gezicht gedetecteerd. Centreer je gezicht en klik dan om vast te leggen.",
      captureError: "Er ging iets mis tijdens het vastleggen. Probeer het opnieuw.",
      captureReading: "Meting vastleggen - [{n}/{total}]",
      confidence: "{pct}% betrouwbaarheid",
      blendDesc: "Voornamelijk {top} met kenmerken van {runnerUp}. {desc}",
    },
  },

  manualCalc: {
    eyebrow: "Handmatige calculator",
    heading: "Ken je je metingen? Bereken het direct",
    sub: "Geen foto nodig. Meet de vier afstanden hieronder op een foto recht van voren of in een spiegel, voer ze in één enkele eenheid in (cm, mm of inches), en we berekenen je gezichtsvorm aan de hand van de verhoudingen.",
    imageAlt:
      "Meetgids voor het gezicht met de metingen van voorhoofd, jukbeen, gezichtslengte en kaak op een portret recht van voren.",
    fields: {
      foreheadWidth: {
        label: "Breedte van het voorhoofd",
        hint: "Afstand tussen de linker- en rechterpunten van het voorhoofd.",
      },
      cheekboneWidth: {
        label: "Breedte van de jukbeenderen",
        hint: "Afstand tussen de linker- en rechterpunten van de jukbeenderen.",
      },
      faceLength: {
        label: "Gezichtslengte",
        hint: "Van het midden van de haarlijn tot de onderkant van de kin.",
      },
      jawWidth: {
        label: "Breedte van de kaak",
        hint: "Van de ene kaakhoek tot de tegenoverliggende kaakhoek.",
      },
    },
    btnCalculate: "Bereken gezichtsvorm",
    btnReset: "Opnieuw instellen",
    previewShape: "Gezichtsvorm",
    previewDesc:
      "Voer hierboven je vier metingen in en we berekenen je gezichtsvorm aan de hand van de verhoudingen.",
    invalidInput:
      "Voer voor alle vier de metingen een positief getal in.",
  },

  seo: {
    eyebrow: "Over de tool",
    heading: "De gratis AI-gezichtsvormanalyse, online.",
    html: `
      <p>
        Onze <strong>AI-gezichtsvormanalyse</strong> is een gratis, online tool die
        je in seconden je gezichtsvorm vertelt — zonder registratie en zonder
        download. Als je je ooit hebt afgevraagd
        <em>“wat is mijn gezichtsvorm?”</em> en niet zeker wist hoe je dat moest beantwoorden, is dit
        de snelle manier om erachter te komen. Upload gewoon een scherpe foto recht van
        voren of open je camera, en de <strong>AI-gezichtsvormanalyse</strong>
        doet de rest: ze brengt 478 gezichtspunten in kaart, meet de geometrie van
        je gezicht en rangschikt elk resultaat over alle zes gangbare vormen.
      </p>
      <h3>Wat de beste AI-gezichtsvormanalyse maakt</h3>
      <p>
        De meeste tools geven je één label en hopen dat het klopt. We hebben gebouwd wat we
        denken dat de <strong>beste AI-gezichtsvormanalyse</strong> is door in plaats daarvan het
        volledige plaatje te tonen. Als gecombineerde <strong>AI-gezichtsvormdetector en
        gezichtsanalysator</strong> levert ze een betrouwbaarheidsscore plus een gerangschikte
        percentage-uitsplitsing voor ovaal, rond, vierkant, rechthoekig, hartvormig en
        ruitvormig — omdat echte gezichten vaak een mix van twee vormen zijn in plaats van
        één perfecte match. Een live gezichtsmesh-overlay toont precies wat het model
        afleest terwijl het werkt, zodat de analyse nooit als een black box voelt.
      </p>
      <h3>Hoe je je gezichtsvorm bepaalt</h3>
      <p>
        Vraag je je af <strong>hoe je je gezichtsvorm bepaalt</strong> zonder een spiegel
        en een meetlint? De klassieke methode vergelijkt vier metingen —
        breedte van het voorhoofd, breedte van de jukbeenderen, breedte van de kaaklijn en gezichtslengte — en
        weegt ze tegen elkaar af. Dat is precies wat deze
        <strong>gezichtsvormcalculator</strong> automatiseert. Waar een handmatige
        <strong>gezichtsanalysator</strong> ruimte laat voor giswerk, leest onze
        <strong>AI-gezichtsvormanalyse</strong> precieze antropometrische
        verhoudingen en kaakhoekigheid rechtstreeks van de punten af, zodat je elke keer een
        consistent antwoord krijgt. Voor de meest nauwkeurige meting trek je je haar
        uit je gezicht, zet je je bril af, houd je een neutrale uitdrukking aan en gebruik je gelijkmatige,
        frontale belichting.
      </p>
      <h3>Gratis te gebruiken, online</h3>
      <p>
        Deze <strong>AI-gezichtsvormanalyse online gratis</strong> tool draait
        online zonder iets te installeren. Ze werkt hetzelfde op telefoon of desktop,
        en het is werkelijk een <strong>AI-gezichtsvormanalyse gratis</strong>,
        zonder gebruikslimieten bij normaal gebruik.
      </p>
      <h3>Van gezichtsvormen naar flatterende keuzes</h3>
      <p>
        Je <strong>gezichtsvorm</strong> kennen is het startpunt voor betere
        dagelijkse keuzes. Mensen gebruiken het om kapsels te kiezen, brillen
        en zonnebrilmonturen te selecteren die hun verhoudingen aanvullen,
        wenkbrauwen vorm te geven en make-up of baardstyling te bepalen. Sommige mensen zoeken naar
        een <strong>gezichtsaantrekkelijkheidsanalysator</strong>, maar schoonheid is subjectief en
        gezichtsvorm is geen score — elk van de zes
        <strong>gezichtsvormen</strong> heeft zijn eigen sterke punten, en het doel hier is
        je te helpen met zelfvertrouwen te stylen, niet om gezichten te rangschikken. Beschouw het resultaat als
        een handige leidraad in plaats van een oordeel.
      </p>
      <p>
        Klaar om te stoppen met gissen? Scroll omhoog naar de
        <a href="#analyzer">analyzer</a>, voeg een foto toe of open je camera, en laat
        de <strong>AI-gezichtsvormanalyse</strong> je in seconden je volledige uitsplitsing
        tonen — helemaal gratis.
      </p>
    `,
  },

  faqSection: {
    eyebrow: "Veelgestelde vragen",
    heading: "Veelgestelde vragen.",
  },
  faqs: [
    {
      q: "Wat is een gezichtsvormanalyse?",
      a: "Een gezichtsvormanalyse is een tool die naar de verhoudingen van je gezicht kijkt — voorhoofd, jukbeenderen, kaaklijn en lengte — en je vertelt welke vorm je het dichtst benadert. Onze AI-gezichtsvormanalyse doet dit automatisch door 478 gezichtspunten in kaart te brengen vanaf een foto of je camera, en rangschikt vervolgens je match over alle zes vormen.",
    },
    {
      q: "Hoe bepaal ik mijn gezichtsvorm?",
      a: "Om je gezichtsvorm te bepalen, vergelijk je vier dingen: de breedte van je voorhoofd, je jukbeenderen en je kaak, plus de totale lengte van je gezicht. De vorm waarvan de verhoudingen overeenkomen met die van jou is je gezichtsvorm. Deze analyse meet die verhoudingen automatisch voor je, dus er is geen giswerk of meetlint nodig.",
    },
    {
      q: "Welke gezichtsvorm heb ik?",
      a: "Je hebt waarschijnlijk een van de zes gangbare gezichtsvormen: ovaal, rond, vierkant, rechthoekig, hartvormig of ruitvormig. Upload een scherpe foto recht van voren of open je camera en de analyse vertelt je welke je hebt, samen met een betrouwbaarheidsscore en een volledige percentage-uitsplitsing.",
    },
    {
      q: "Wat is mijn gezichtsvorm?",
      a: "Je gezichtsvorm is de algehele contour van je gezicht, bepaald door hoe breed je voorhoofd, jukbeenderen en kaak zijn ten opzichte van je gezichtslengte. De snelste manier om erachter te komen is een foto door de analyse hierboven te halen — ze leest je echte gezichtsgeometrie en toont je dichtstbijzijnde match in seconden.",
    },
    {
      q: "Welke vorm heeft mijn gezicht?",
      a: "De vorm van je gezicht hangt af van het breedste punt en de lengte. Als je gezicht duidelijk langer is dan breed, is het mogelijk ovaal of rechthoekig; als breedte en lengte vergelijkbaar zijn, rond of vierkant; als je voorhoofd het breedste deel is, hartvormig of ruitvormig. De analyse bepaalt het precies aan de hand van je metingen.",
    },
    {
      q: "Hoe kan ik mijn gezichtsvorm bepalen?",
      a: "De makkelijkste manier is de AI het laten doen: trek je haar naar achteren, kijk recht in de camera en upload een foto of gebruik de live camera. De tool meet de verhoudingen van je kaak, jukbeen, voorhoofd en lengte en geeft direct je gezichtsvorm terug — veel consistenter dan het inschatten in een spiegel.",
    },
    {
      q: "Hoe kan ik mijn gezichtsvorm herkennen?",
      a: "Je kunt je gezichtsvorm herkennen door het breedste kenmerk van je gezicht te vinden en te controleren of je gezicht langer is dan breed. In plaats van je contour op een spiegel te tekenen, vertelt deze analyse je gezichtsvorm voor je vanaf één foto, zonder handmatig meten.",
    },
    {
      q: "Hoe weet ik welke gezichtsvorm ik heb?",
      a: "Kijk naar drie signalen: waar je gezicht het breedst is, hoe hoekig of zacht je kaak is, en of je gezicht lang of evenwichtig is. De analyse leest alle drie af van 478 punten en vertelt je precies welke gezichtsvorm je hebt, plus hoe sterk je overeenkomt met de tweede vormen.",
    },
    {
      q: "Wat is mijn gezichtsvorm?",
      a: "Wat je gezichtsvorm ook is, de analyse kan hem in seconden benoemen. Voeg hierboven een foto toe of open je camera en je krijgt je best passende vorm, een betrouwbaarheidspercentage en een gerangschikte uitsplitsing over ovaal, rond, vierkant, rechthoekig, hartvormig en ruitvormig.",
    },
    {
      q: "Hoe kom ik achter mijn gezichtsvorm?",
      a: "Je kunt hier gratis achter je gezichtsvorm komen — zonder registratie en zonder download. Upload een foto recht van voren of gebruik je camera, en de AI meet de verhoudingen van je gezicht en toont je resultaat in seconden.",
    },
    {
      q: "Hoe vind ik mijn gezichtsvorm?",
      a: "Om je gezichtsvorm te vinden, gebruik je een scherpe, goed verlichte foto met je haar uit je gezicht en je bril af, en haal je die vervolgens door de analyse. Ze vergelijkt je gemeten verhoudingen met alle zes vormprofielen en vindt automatisch de dichtstbijzijnde match voor je.",
    },
    {
      q: "Hoe identificeer ik mijn gezichtsvorm?",
      a: "Je gezichtsvorm identificeren betekent dat je de breedtes van je voorhoofd, jukbeen en kaak en je gezichtslengte koppelt aan een van de zes standaardprofielen. De analyse identificeert hem precies met behulp van de geometrie van gezichtspunten, zodat je een objectief antwoord krijgt in plaats van een subjectieve gok.",
    },
  ],

  contentPage: {
    lastUpdated: "Laatst bijgewerkt:",
  },
  mtNotice:
    "Deze pagina is machinaal vertaald. De Engelse versie is leidend; bij eventuele discrepanties prevaleert het <a href=\"{enHref}\">Engelse origineel</a>.",

  error: {
    eyebrow: "Fout {code}",
    ctaHome: "Terug naar home",
    ctaAnalyze: "Analyseer mijn gezicht",
  },

  pages: {
    home: {
      title: "Gratis AI-gezichtsvormanalyse online — Detecteer je gezichtsvorm",
      description:
        "Gratis AI-gezichtsvormanalyse online — upload een foto of gebruik je camera om direct je gezichtsvorm te vinden met een volledige uitsplitsing over alle 6 vormen. Geen registratie.",
    },
    about: {
      title: "Over ons — AI Face Shape Analyzer",
      description:
        "Lees meer over de AI Face Shape Analyzer — een gratis, snelle tool die je gezichtsvorm detecteert vanaf een foto of live camera met een volledige uitsplitsing over alle zes vormen.",
      keywords:
        "over ai-gezichtsvormanalyse, gezichtsvormanalyse, wie maakte gezichtsvormanalyse",
      eyebrow: "Over ons",
      heading: "Over AI Face Shape Analyzer",
      lead: "We hebben een gratis, nauwkeurige gezichtsvormanalyse gebouwd die je het volledige plaatje geeft — niet alleen een label van één woord.",
      html: `
        <p>
          <strong>AI Face Shape Analyzer</strong> is een gratis online tool die
          je gezichtsvorm detecteert vanaf een foto of je live camera. In plaats van je een
          enkele gok te geven, brengt ze 478 gezichtspunten in kaart, meet ze de echte geometrie van
          je gezicht en rangschikt ze je resultaat over alle zes gangbare vormen — ovaal,
          rond, vierkant, rechthoekig, hartvormig en ruitvormig.
        </p>
        <h2>Waarom we het hebben gebouwd</h2>
        <p>
          “Wat is mijn gezichtsvorm?” is een van de meest gestelde vragen die mensen stellen
          voordat ze een kapsel, een bril of een nieuwe make-up- of verzorgingsstijl
          kiezen. De meeste tools beantwoorden het met één label en laten je in het ongewisse over hoe
          zeker dat antwoord werkelijk is. We wilden iets eerlijkers: een tool
          die de volledige uitsplitsing toont, omdat echte gezichten vaak een mix van twee
          vormen zijn in plaats van één perfecte match.
        </p>
        <h2>Wat het anders maakt</h2>
        <ul>
          <li>
            <strong>Een live gezichtsmesh.</strong> Een realtime overlay toont precies wat
            het model afleest terwijl het werkt, zodat de analyse nooit als een
            black box voelt.
          </li>
          <li>
            <strong>Een volledige waarschijnlijkheidsuitsplitsing.</strong> Je krijgt een best passende
            vorm, een betrouwbaarheidsscore en een gerangschikt percentage over alle zes vormen
            — plus detectie van een mix van twee vormen.
          </li>
          <li>
            <strong>Gratis en moeiteloos.</strong> Geen registratie, geen download en geen
            gebruikslimieten bij normaal gebruik. Het werkt hetzelfde op telefoon of desktop.
          </li>
          <li>
            <strong>Gebouwd voor iedereen.</strong> De interface is toegankelijk van
            ontwerp, met toetsenbordondersteuning, duidelijke focusstatussen en ondersteuning voor
            beperkte beweging.
          </li>
        </ul>
        <h2>Hoe het werkt</h2>
        <p>
          Wanneer je een foto uploadt of je camera opent, traceert een model in de browser
          je gezicht en meet het de verhoudingen van kaak, jukbeen, voorhoofd en lengte, samen
          met de kaakhoekigheid. Die metingen worden vergeleken met zes vormprofielen
          om je dichtstbijzijnde match te vinden. Het resultaat is een consistente, objectieve
          aflezing van je gezichtsverhoudingen — veel stabieler dan het inschatten in een
          spiegel.
        </p>
        <h2>Een eerlijke noot over nauwkeurigheid</h2>
        <p>
          Gezichtsvorm is een subjectief label, geen exacte meting, en grensgevallen
          zijn werkelijk dubbelzinnig. Resultaten kunnen verschuiven met de fotohoek,
          belichting, expressie, haar en bril. We beschouwen de analyse als een handige
          stylingleidraad, geen oordeel — en elk van de zes vormen heeft zijn eigen
          sterke punten.
        </p>
        <h2>Neem contact op</h2>
        <p>
          Heb je feedback, een idee voor een functie of een vraag? We horen graag van je —
          ga naar onze <a href="/contact">contactpagina</a> of e-mail
          <a href="mailto:hello@aifaceshapeanalyzer.com">hello@aifaceshapeanalyzer.com</a>.
        </p>
        <p>
          Klaar om het te proberen? <a href="/#analyzer">Analyseer je gezicht</a> en bekijk je
          volledige uitsplitsing in seconden — helemaal gratis.
        </p>
      `,
    },
    contact: {
      title: "Neem contact op — AI Face Shape Analyzer",
      description:
        "Neem contact op met het team van AI Face Shape Analyzer. Stuur feedback, ideeën voor functies, privacyverzoeken of supportvragen per e-mail.",
      keywords:
        "contact ai-gezichtsvormanalyse, gezichtsvormanalyse support, gezichtsvormanalyse feedback",
      eyebrow: "Contact",
      heading: "Neem contact op",
      lead: "Vragen, feedback of een idee voor een functie? We horen graag van je. De snelste manier om ons te bereiken is per e-mail.",
      emailHeading: "Mail ons",
      emailGeneralLabel: "Algemeen & feedback:",
      emailPrivacyLabel: "Privacyverzoeken:",
      emailIntro:
        "We lezen elk bericht en streven ernaar binnen enkele werkdagen te reageren. Voor privacyvragen, zie onze {privacyLink}; voor gebruiksvragen, onze {termsLink}.",
      privacyLinkText: "Privacybeleid",
      termsLinkText: "Algemene voorwaarden",
      formHeading: "Stuur een bericht",
      formIntro:
        "Vul de onderstaande velden in en we openen een vooraf ingevulde e-mail in je mailapp — druk gewoon op verzenden.",
      labelName: "Naam",
      labelEmail: "Je e-mail",
      labelMessage: "Bericht",
      submit: "E-mail openen om te verzenden",
      fallback: "Liever rechtstreeks schrijven? E-mail {email}.",
      errMissing: "Vul je naam, e-mail en bericht in.",
      errEmail: "Voer een geldig e-mailadres in.",
      mailSubject: "Contact van {name}",
    },
    privacy: {
      title: "Privacybeleid — AI Face Shape Analyzer",
      description:
        "Hoe de AI Face Shape Analyzer omgaat met je foto’s en gegevens. De gezichtsanalyse draait in je browser; lees wat we verzamelen, hoe we het gebruiken en je keuzes.",
      keywords:
        "ai-gezichtsvormanalyse privacybeleid, gezichtsvormanalyse gegevens, gezichtsanalyse privacy",
      eyebrow: "Juridisch",
      heading: "Privacybeleid",
      lead: "Dit beleid legt uit welke informatie de AI Face Shape Analyzer verzamelt, hoe je foto’s worden verwerkt en welke keuzes je hebt.",
      updated: "19 juni 2026",
      html: `
        <p>
          AI Face Shape Analyzer (“wij”, “ons”, “onze”) exploiteert de website op
          aifaceshapeanalyzer.com (de “Service”). Dit Privacybeleid beschrijft hoe
          we omgaan met informatie wanneer je de Service gebruikt. Door de Service te gebruiken, ga je
          akkoord met de hier beschreven praktijken.
        </p>
        <h2>Je foto’s en camera</h2>
        <p>
          De gezichtsvormanalyse draait in je browser. Wanneer je een foto uploadt of
          je camera gebruikt, wordt de afbeelding op je eigen apparaat verwerkt door het
          model in de browser om de gezichtsverhoudingen te meten. We vereisen niet dat je
          een account aanmaakt, en we verkopen je afbeeldingen niet.
        </p>
        <p>
          Jij bepaalt of je via je browser cameratoegang verleent, en je
          kunt die toestemming op elk moment intrekken in je browserinstellingen.
        </p>
        <h2>Informatie die we verzamelen</h2>
        <p>We streven ernaar zo weinig mogelijk te verzamelen. Afhankelijk van hoe je de Service gebruikt, kan dit het volgende omvatten:</p>
        <ul>
          <li>
            <strong>Gebruiks- en apparaatgegevens.</strong> Standaard technische informatie
            zoals browsertype, apparaattype, schermgrootte, verwijzende pagina en
            algemene regio, verzameld om de Service werkend te houden en om het
            geaggregeerde gebruik te begrijpen.
          </li>
          <li>
            <strong>Lokale opslag.</strong> We slaan kleine waarden op in je browser
            (bijvoorbeeld je voorkeur voor licht/donker thema en een zachte gebruiksteller)
            op je apparaat. Deze gegevens worden niet als gebruikersprofiel naar ons verzonden.
          </li>
          <li>
            <strong>Berichten die je ons stuurt.</strong> Als je per e-mail contact met ons opneemt,
            ontvangen we de informatie die je deelt, zoals je e-mailadres
            en de inhoud van je bericht.
          </li>
        </ul>
        <h2>Cookies en analyse</h2>
        <p>
          We kunnen cookies of vergelijkbare technologieën gebruiken, waaronder privacyvriendelijke
          analyse, om het geaggregeerde verkeer te meten en de Service te verbeteren. Je kunt
          cookies beheren via je browserinstellingen. Het uitschakelen ervan zou
          de kernanalyse niet mogen verhinderen.
        </p>
        <h2>Hoe we informatie gebruiken</h2>
        <ul>
          <li>Om de Service te leveren, te onderhouden en te verbeteren.</li>
          <li>Om technische problemen te diagnosticeren en misbruik te voorkomen.</li>
          <li>Om je vragen en supportverzoeken te beantwoorden.</li>
          <li>Om te voldoen aan wettelijke verplichtingen.</li>
        </ul>
        <h2>Diensten van derden</h2>
        <p>
          We kunnen vertrouwen op externe leveranciers voor hosting, contentlevering en
          analyse. Deze leveranciers verwerken beperkte technische gegevens namens ons
          en worden geacht deze te beschermen. De Service kan ook linken naar externe
          sites die onder hun eigen privacybeleid vallen.
        </p>
        <h2>Gegevensbewaring</h2>
        <p>
          We bewaren technische en analysegegevens alleen zo lang als nodig is voor de
          hierboven beschreven doeleinden, en verwijderen of anonimiseren ze daarna. E-mailcorrespondentie
          wordt bewaard zolang als nodig is om je verzoek af te handelen en voor redelijke
          administratie.
        </p>
        <h2>Privacy van kinderen</h2>
        <p>
          De Service is niet gericht op kinderen jonger dan 13 jaar (of de minimumleeftijd in
          jouw rechtsgebied), en we verzamelen niet bewust persoonlijke informatie
          van hen. Als je denkt dat een kind ons informatie heeft verstrekt, neem dan contact met ons op
          en we zullen passende stappen ondernemen om deze te verwijderen.
        </p>
        <h2>Je rechten</h2>
        <p>
          Afhankelijk van waar je woont, heb je mogelijk het recht om persoonlijke informatie die we
          over je bewaren in te zien, te corrigeren of te verwijderen, of om bezwaar te maken tegen bepaalde
          verwerking. Om een verzoek in te dienen, mail ons via het onderstaande adres. We zullen
          reageren in overeenstemming met de toepasselijke wetgeving.
        </p>
        <h2>Wijzigingen in dit beleid</h2>
        <p>
          We kunnen dit Privacybeleid van tijd tot tijd bijwerken. Wanneer we dat doen, zullen we
          de datum “Laatst bijgewerkt” hierboven herzien. Belangrijke wijzigingen kunnen worden
          uitgelicht op de Service.
        </p>
        <h2>Neem contact op</h2>
        <p>
          Vragen over dit beleid? E-mail
          <a href="mailto:privacy@aifaceshapeanalyzer.com">privacy@aifaceshapeanalyzer.com</a>
          of bezoek onze <a href="/contact">contactpagina</a>.
        </p>
        <hr />
        <p>
          Dit document wordt verstrekt voor algemene informatie en is geen juridisch advies.
          Bekijk het met een gekwalificeerde professional om er zeker van te zijn dat het past bij je
          specifieke omstandigheden.
        </p>
      `,
    },
    terms: {
      title: "Algemene voorwaarden — AI Face Shape Analyzer",
      description:
        "De voorwaarden die je gebruik van de AI Face Shape Analyzer regelen, waaronder aanvaardbaar gebruik, disclaimers en aansprakelijkheidsbeperkingen.",
      keywords:
        "ai-gezichtsvormanalyse voorwaarden, gezichtsvormanalyse algemene voorwaarden, gebruiksvoorwaarden",
      eyebrow: "Juridisch",
      heading: "Algemene voorwaarden",
      lead: "Deze voorwaarden regelen je gebruik van de AI Face Shape Analyzer. Lees ze zorgvuldig voordat je de Service gebruikt.",
      updated: "19 juni 2026",
      html: `
        <p>
          Deze Algemene voorwaarden (“Voorwaarden”) vormen een overeenkomst tussen jou en
          AI Face Shape Analyzer (“wij”, “ons”, “onze”) betreffende je gebruik van de
          website op aifaceshapeanalyzer.com (de “Service”). Door de Service te openen of te gebruiken,
          ga je ermee akkoord gebonden te zijn aan deze Voorwaarden. Als je niet akkoord gaat,
          gebruik de Service dan niet.
        </p>
        <h2>Gebruik van de Service</h2>
        <p>
          Met de Service kun je een foto of live camerabeeld analyseren om je
          gezichtsvorm te schatten. Ze wordt geleverd voor persoonlijke, informatieve en amusements-
          doeleinden. Je moet minstens 13 jaar oud zijn (of de minimumleeftijd in jouw
          rechtsgebied) om de Service te gebruiken.
        </p>
        <h2>Aanvaardbaar gebruik</h2>
        <p>Je gaat ermee akkoord om niet:</p>
        <ul>
          <li>Afbeeldingen te uploaden die je niet het recht hebt te gebruiken, of afbeeldingen van andere mensen zonder hun toestemming.</li>
          <li>De Service te gebruiken voor onwettige, intimiderende of schadelijke doeleinden.</li>
          <li>Te proberen de Service of haar systemen te verstoren, te overbelasten, te reverse-engineeren of er ongeoorloofde toegang toe te krijgen.</li>
          <li>De Service of haar inhoud te scrapen, door te verkopen of commercieel te exploiteren zonder onze schriftelijke toestemming.</li>
        </ul>
        <h2>Geen professioneel advies</h2>
        <p>
          Gezichtsvorm is een subjectief label, geen exacte meting. De resultaten zijn een
          schatting op basis van je afbeelding en kunnen variëren met hoek, belichting,
          expressie, haar, bril en cameralens. De Service biedt geen
          medisch, psychologisch, cosmetisch of professioneel advies, en je zou
          er niet als zodanig op moeten vertrouwen. Gebruik de resultaten alleen als algemene stylingleidraad.
        </p>
        <h2>Intellectueel eigendom</h2>
        <p>
          De Service, inclusief het ontwerp, de tekst, de afbeeldingen en de onderliggende software,
          is eigendom van ons of onze licentiegevers en wordt beschermd door de toepasselijke wetgeving. We
          verlenen je een beperkte, niet-exclusieve, niet-overdraagbare licentie om de
          Service te gebruiken voor het beoogde doel. Je behoudt alle rechten die je hebt op de
          afbeeldingen die je aanlevert; we claimen geen eigendom ervan.
        </p>
        <h2>Afwijzing van garanties</h2>
        <p>
          De Service wordt geleverd “zoals ze is” en “zoals beschikbaar” zonder garanties van
          welke aard dan ook, expliciet of impliciet, met inbegrip van maar niet beperkt tot
          verkoopbaarheid, geschiktheid voor een bepaald doel, nauwkeurigheid en
          niet-inbreuk. We garanderen niet dat de Service ononderbroken,
          foutloos zal zijn of dat de resultaten nauwkeurig of betrouwbaar zullen zijn.
        </p>
        <h2>Beperking van aansprakelijkheid</h2>
        <p>
          Voor zover maximaal toegestaan door de wet, zijn we niet aansprakelijk voor enige
          indirecte, incidentele, bijzondere, gevolg- of bestraffende schade, of enig
          verlies van gegevens, winst of goodwill, voortvloeiend uit je gebruik van of onvermogen
          om de Service te gebruiken. Waar aansprakelijkheid niet kan worden uitgesloten, is deze beperkt tot
          de maximale omvang die door de wet is toegestaan.
        </p>
        <h2>Links van derden</h2>
        <p>
          De Service kan links naar websites of bronnen van derden bevatten. We zijn
          niet verantwoordelijk voor de inhoud, het beleid of de praktijken van die sites en
          bieden dergelijke links alleen voor het gemak.
        </p>
        <h2>Wijzigingen in de Service en Voorwaarden</h2>
        <p>
          We kunnen de Service wijzigen of stopzetten, of deze Voorwaarden bijwerken, op elk
          moment. Wanneer we de Voorwaarden bijwerken, zullen we de datum “Laatst bijgewerkt”
          hierboven herzien. Je voortgezette gebruik van de Service nadat wijzigingen van kracht worden
          vormt aanvaarding van de herziene Voorwaarden.
        </p>
        <h2>Toepasselijk recht</h2>
        <p>
          Deze Voorwaarden worden beheerst door de wetten die van toepassing zijn op onze hoofdvestiging,
          zonder rekening te houden met beginselen van wetsconflicten. Eventuele geschillen zullen
          worden voorgelegd aan de rechtbanken die daar bevoegd zijn, tenzij anders
          vereist door dwingend lokaal recht.
        </p>
        <h2>Neem contact op</h2>
        <p>
          Vragen over deze Voorwaarden? E-mail
          <a href="mailto:hello@aifaceshapeanalyzer.com">hello@aifaceshapeanalyzer.com</a>
          of bezoek onze <a href="/contact">contactpagina</a>.
        </p>
        <hr />
        <p>
          Dit document wordt verstrekt voor algemene informatie en is geen juridisch advies.
          Bekijk het met een gekwalificeerde professional om er zeker van te zijn dat het past bij je
          specifieke omstandigheden.
        </p>
      `,
    },
    notFound: {
      title: "Pagina niet gevonden (404) — AI Face Shape Analyzer",
      description:
        "De pagina die je zoekt bestaat niet. Ga terug naar home om in seconden je gezichtsvorm te vinden.",
      code: "404",
      heading: "We konden die pagina niet vinden.",
      message:
        "De link is mogelijk verbroken of de pagina is mogelijk verplaatst. Je gezichtsvormanalyse staat nog precies waar je hem hebt achtergelaten.",
    },
    serverError: {
      title: "Er ging iets mis (500) — AI Face Shape Analyzer",
      description:
        "Er is een onverwachte fout opgetreden. Probeer het opnieuw of ga terug naar home om in seconden je gezichtsvorm te vinden.",
      code: "500",
      heading: "Er ging iets mis aan onze kant.",
      message:
        "Een onverwachte fout heeft het laden van deze pagina verhinderd. Probeer het zo opnieuw of ga terug naar home om je gezichtsvorm te vinden.",
    },
  },

  keywords:
    "ai-gezichtsvormanalyse, beste ai-gezichtsvormanalyse, ai-gezichtsvormanalyse gratis, ai-gezichtsvormanalyse online, ai-gezichtsvormanalyse online gratis, ai-gezichtsvormdetector, gezichtsvorm ai-analyse, gezichtsvormanalyse ai, gezichtsvormen, gezichtsvorm, wat is mijn gezichtsvorm, hoe gezichtsvorm bepalen, gezichtsanalysator, gezichtsvormcalculator, gezichtsaantrekkelijkheidsanalysator",
};
