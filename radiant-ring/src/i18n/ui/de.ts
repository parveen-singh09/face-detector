import { type UIStrings } from "./en";

export const de: UIStrings = {
  nav: {
    logoText: "Gesichtsform-Analyse",
    logoAria: "AI Face Shape Analyzer — Startseite",
    primaryAria: "Hauptnavigation",
    links: {
      shapes: "Gesichtsformen",
      about: "Über uns",
      contact: "Kontakt",
      privacy: "Datenschutz",
      terms: "AGB",
    },
    themeToggleAria: "Dunkelmodus umschalten",
    themeToggleTitle: "Design umschalten",
    menuOpenAria: "Menü öffnen",
    menuCloseAria: "Menü schließen",
    langLabel: "Sprache",
  },

  footer: {
    logoAria: "AI Face Shape Analyzer — Startseite",
    brandName: "Gesichtsform-Analyse",
    tagline:
      "Finde deine Gesichtsform in Sekunden — kostenlos und genau, mit einer vollständigen Aufschlüsselung über alle sechs Formen.",
    productEyebrow: "Produkt",
    productLinks: {
      analyze: "Mein Gesicht analysieren",
      how: "So funktioniert es",
      shapes: "Gesichtsformen",
    },
    aboutEyebrow: "Über uns",
    aboutLinks: {
      aboutTool: "Über das Tool",
      faq: "FAQ",
    },
    companyEyebrow: "Unternehmen",
    companyLinks: {
      about: "Über uns",
      contact: "Kontakt aufnehmen",
      privacy: "Datenschutzerklärung",
      terms: "Allgemeine Geschäftsbedingungen",
    },
    mono: "Sechs Formen · 478-Punkte-Gesichtsnetz",
    disclaimer:
      "Hinweis: Die Gesichtsform ist eine subjektive Bezeichnung, keine exakte Messung. Die Ergebnisse sind eine Schätzung auf Basis deines Fotos und können je nach Winkel, Beleuchtung, Mimik, Haaren, Brille und Kameraobjektiv variieren. Viele Gesichter sind eine Mischung aus zwei Formen — nutze dies als Orientierung für dein Styling, nicht als endgültigen oder professionellen Rat.",
  },

  hero: {
    titleBefore: "Kostenlose KI-",
    titleAccent: "Gesichtsform",
    titleAfter: "-Analyse",
    sub: "Lade ein Foto hoch oder nutze deine Kamera für eine genaue Gesichtsform-Analyse — mit einer vollständigen Aufschlüsselung über alle sechs Formen.",
    ctaPrimary: "Mein Gesicht analysieren",
    ctaSecondary: "So funktioniert es",
    trust: {
      free: "Manuelle Analyse",
      mesh: "Live-Gesichtsnetz",
      ranked: "Sechs Formen bewertet",
    },
  },

  howItWorks: {
    eyebrow: "So funktioniert es",
    heading: "In drei Schritten zu deiner Gesichtsform.",
  },
  steps: [
    {
      n: "01",
      title: "Foto hochladen oder Kamera öffnen",
      body: "Wähle ein klares, frontales Foto (bis zu 10MB) oder nutze deine Kamera für eine Live-Auswertung.",
    },
    {
      n: "02",
      title: "Wir erfassen 478 Gesichtspunkte",
      body: "Ein Modell auf deinem Gerät zeichnet dein Gesichtsnetz nach und misst Kiefer, Wangenknochen, Stirn und Längenverhältnisse.",
    },
    {
      n: "03",
      title: "Vollständige Aufschlüsselung erhalten",
      body: "Sieh deine am besten passende Form, einen Zuverlässigkeitswert und eine prozentuale Rangliste über alle sechs Formen.",
    },
  ],

  shapesSection: {
    eyebrow: "Referenz",
    heading: "Die sechs Gesichtsformen.",
    sub: "Jedes Ergebnis wird anhand dieser sechs Profile bewertet. Die meisten Menschen tendieren zu einer Form mit Zügen einer anderen — deshalb zeigen wir die vollständige Mischung.",
    exampleAlt: "Beispiel für eine {shape}-Gesichtsform",
  },
  shapeLabels: {
    oval: "Oval",
    round: "Rund",
    square: "Quadratisch",
    rectangle: "Rechteckig",
    heart: "Herzförmig",
    diamond: "Rautenförmig",
  },
  shapeDescriptions: {
    oval: "Ausgewogene Proportionen mit einer Gesichtslänge, die größer ist als die Breite, und einem sanft gerundeten Kiefer. Gilt weithin als die vielseitigste Form.",
    round:
      "Weiche Konturen mit nahezu gleicher Gesichtslänge und -breite, volleren Wangen sowie einer gerundeten Kieferlinie und einem gerundeten Kinn.",
    square:
      "Ein kräftiger, kantiger Kiefer mit nahezu gleich breiter Stirn, Wangenknochen und Kiefer — eine markante, klar strukturierte Form.",
    rectangle:
      "Wie ein Quadrat, nur länger — die Gesichtslänge übertrifft die Breite deutlich, wobei Stirn, Wangenknochen und Kiefer nahezu parallel verlaufen.",
    heart:
      "Eine breitere Stirn und Wangenknochen, die zu einem schmaleren, oft spitzen Kinn auslaufen — die klassische Herzsilhouette.",
    diamond:
      "Die Wangenknochen sind der breiteste Punkt, mit einer schmaleren Stirn und einem schmaleren Kiefer sowie einem ausgeprägten, spitzen Kinn.",
  },

  analyzer: {
    eyebrow: "Analyse",
    heading: "Erkenne deine Gesichtsform",
    sub: "Lade ein klares, frontales Foto hoch oder nutze deine Kamera.",
    tablistAria: "Eingabemethode",
    tabUpload: "Foto hochladen",
    tabCamera: "Kamera verwenden",
    fileInputAria: "Ein Foto zum Analysieren auswählen",
    dropzoneTitle: "Foto ablegen oder zum Durchsuchen klicken",
    dropzoneHint: "JPG, PNG oder WebP · bis zu 10MB",
    previewImgAlt: "Dein hochgeladenes Foto",
    cameraPreviewAria: "Kameravorschau",
    loadingModel: "Modell wird auf dem Gerät geladen…",
    btnAnalyze: "Mein Gesicht analysieren",
    btnCapture: "Aufnehmen & analysieren",
    btnReset: "Weiteres analysieren",
    uploadTipsAria: "Tipps für eine genaue Auswertung",
    uploadTips: [
      "Verwende ein klares, scharfes Foto — gut beleuchtet, im Fokus und frontal zur Kamera ausgerichtet.",
      "Halte den Hintergrund schlicht und aufgeräumt, damit nur dein Gesicht hervorsticht.",
      "Mach dich bereit — Haare aus dem Gesicht, Brille ab und eine neutrale Mimik.",
    ],
    camTipsAria: "Tipps für eine genaue Auswertung",
    camTips: [
      "Nimm deine Brille ab — Fassungen verdecken die Wangen- und Brauenkanten.",
      "Blicke frontal in die Kamera, mit Haaren aus dem Gesicht.",
      "Klicke, um 5 Messungen aufzunehmen — wir mitteln sie für mehr Genauigkeit.",
    ],
    resultEyebrow: "Deine Gesichtsform",
    breakdownTitle: "Vollständige Aufschlüsselung",
    resultDisclaimer:
      "Achtung: Die Gesichtsform ist eine subjektive Bezeichnung, keine exakte Wissenschaft. Die Ergebnisse sind eine Schätzung und können je nach Fotowinkel, Beleuchtung, Mimik, ins Gesicht fallenden Haaren, Brille und Kameraobjektiv variieren. Viele Gesichter sind eine natürliche Mischung aus zwei Formen — betrachte dies als hilfreiche Orientierung, nicht als endgültiges Urteil.",
    idleTitle: "Das erhältst du",
    idleItems: [
      "Deine am besten passende Form mit einem Zuverlässigkeitswert",
      "Eine prozentuale Rangliste über alle sechs Gesichtsformen",
      "Einen Hinweis, wenn dein Gesicht eine Mischung aus zwei Formen ist",
    ],
    msg: {
      analyzing: "Analysiere…",
      rateLimited:
        "Du hast das Stundenlimit erreicht. Bitte versuche es {retryAfter} erneut.",
      fileType: "Bitte wähle ein JPG-, PNG- oder WebP-Bild.",
      fileTooLarge: "Dieses Bild ist größer als 10MB. Bitte wähle eine kleinere Datei.",
      readError:
        "Dieses Bild konnte nicht gelesen werden. iPhone-HEIC-Fotos werden nicht unterstützt — bitte verwende JPG, PNG oder WebP.",
      noFace: "Kein Gesicht erkannt. Versuche ein klareres, frontales Foto.",
      analyzeError:
        "Bei der Analyse dieses Bildes ist etwas schiefgelaufen. Bitte versuche es erneut.",
      noCameraSupport: "Dein Browser unterstützt keinen Kamerazugriff.",
      cameraError:
        "Auf die Kamera konnte nicht zugegriffen werden. Prüfe die Berechtigungen oder lade stattdessen ein Foto hoch.",
      noFaceYet:
        "Noch kein Gesicht erkannt. Zentriere dein Gesicht und klicke dann zum Aufnehmen.",
      captureError: "Während der Aufnahme ist etwas schiefgelaufen. Bitte versuche es erneut.",
      captureReading: "Messung aufnehmen - [{n}/{total}]",
      confidence: "{pct}% Zuverlässigkeit",
      blendDesc: "Überwiegend {top} mit {runnerUp}-Zügen. {desc}",
    },
  },

  manualCalc: {
    eyebrow: "Manueller Rechner",
    heading: "Du kennst deine Maße? Berechne es direkt",
    sub: "Kein Foto nötig. Miss die vier Abstände unten anhand eines frontalen Fotos oder im Spiegel, gib sie in einer beliebigen Einheit ein (cm, mm oder Zoll), und wir ermitteln deine Gesichtsform aus den Proportionen.",
    imageAlt:
      "Anleitung zur Gesichtsvermessung mit Stirn-, Wangenknochen-, Gesichtslängen- und Kiefermaßen an einem frontalen Porträt.",
    fields: {
      foreheadWidth: {
        label: "Stirnbreite",
        hint: "Abstand zwischen dem linken und rechten Stirnpunkt.",
      },
      cheekboneWidth: {
        label: "Wangenknochenbreite",
        hint: "Abstand zwischen dem linken und rechten Wangenknochenpunkt.",
      },
      faceLength: {
        label: "Gesichtslänge",
        hint: "Von der Mitte des Haaransatzes bis zur Unterkante des Kinns.",
      },
      jawWidth: {
        label: "Kieferbreite",
        hint: "Von einem Kieferwinkel zum gegenüberliegenden Kieferwinkel.",
      },
    },
    btnCalculate: "Gesichtsform berechnen",
    btnReset: "Zurücksetzen",
    previewShape: "Gesichtsform",
    previewDesc:
      "Gib deine vier Maße oben ein, und wir berechnen deine Gesichtsform aus den Proportionen.",
    invalidInput:
      "Bitte gib für alle vier Maße eine positive Zahl ein.",
  },

  seo: {
    eyebrow: "Über das Tool",
    heading: "Die kostenlose KI-Gesichtsform-Analyse, online.",
    html: `
      <p>
        Unsere <strong>KI-Gesichtsform-Analyse</strong> ist ein kostenloses Online-Tool, das
        dir in Sekunden deine Gesichtsform verrät — ohne Anmeldung und ohne Download.
        Wenn du dich je gefragt hast
        <em>„Welche Gesichtsform habe ich?“</em> und nicht sicher warst, wie du das beantworten sollst, ist dies
        der schnelle Weg, es herauszufinden. Lade einfach ein klares, frontales
        Foto hoch oder öffne deine Kamera, und die <strong>KI-Gesichtsform-Erkennung</strong>
        erledigt den Rest: Sie erfasst 478 Gesichtspunkte, misst die Geometrie
        deines Gesichts und ordnet jedes Ergebnis über alle sechs gängigen Formen ein.
      </p>
      <h3>Was die beste KI-Gesichtsform-Analyse ausmacht</h3>
      <p>
        Die meisten Tools geben dir nur eine einzige Bezeichnung und hoffen, dass sie stimmt. Wir haben das, was wir
        für die <strong>beste KI-Gesichtsform-Analyse</strong> halten, gebaut, indem wir stattdessen das
        Gesamtbild zeigen. Als kombinierte <strong>KI-Gesichtsform-Erkennung und
        Gesichtsanalyse</strong> liefert sie einen Zuverlässigkeitswert sowie eine prozentuale
        Aufschlüsselung als Rangliste für Oval, Rund, Quadratisch, Rechteckig, Herzförmig und
        Rautenförmig — denn echte Gesichter sind oft eine Mischung aus zwei Formen statt
        einer perfekten Übereinstimmung. Eine Live-Überlagerung des Gesichtsnetzes zeigt genau, was das Modell
        gerade einliest, sodass sich die Analyse nie wie eine Blackbox anfühlt.
      </p>
      <h3>So bestimmst du deine Gesichtsform</h3>
      <p>
        Du fragst dich, <strong>wie man die Gesichtsform bestimmt</strong> ohne Spiegel
        und Maßband? Die klassische Methode vergleicht vier Maße —
        Stirnbreite, Wangenknochenbreite, Kieferbreite und Gesichtslänge — und
        wägt sie gegeneinander ab. Genau das automatisiert dieser
        <strong>Gesichtsform-Rechner</strong>. Wo eine manuelle
        <strong>Gesichtsanalyse</strong> Raum für Rätselraten lässt, liest unsere
        <strong>KI-Gesichtsform-Analyse</strong> präzise anthropometrische
        Verhältnisse und die Kantigkeit des Kiefers direkt aus den Gesichtspunkten ab, sodass du jedes Mal eine
        konsistente Antwort erhältst. Für die genaueste Auswertung streiche deine Haare
        aus dem Gesicht, nimm die Brille ab, behalte eine neutrale Mimik und sorge für gleichmäßiges,
        frontales Licht.
      </p>
      <h3>Kostenlos nutzbar, online</h3>
      <p>
        Dieses <strong>KI-Gesichtsform-Analyse-Tool online kostenlos</strong> läuft
        online, ohne dass etwas installiert werden muss. Es funktioniert auf Handy und Desktop gleichermaßen,
        und es ist tatsächlich eine <strong>kostenlose KI-Gesichtsform-Analyse</strong>,
        ohne Nutzungsgrenzen bei normaler Verwendung.
      </p>
      <h3>Von Gesichtsformen zu schmeichelhaften Entscheidungen</h3>
      <p>
        Deine <strong>Gesichtsform</strong> zu kennen, ist der Ausgangspunkt für bessere
        Alltagsentscheidungen. Menschen nutzen sie, um Haarschnitte und Frisuren auszuwählen, Brillen
        und Sonnenbrillenfassungen zu wählen, die ihre Proportionen ergänzen, Augenbrauen zu
        formen sowie Make-up oder Bartstyling abzustimmen. Manche Menschen suchen zwar nach
        einem <strong>Attraktivitäts-Analysetool für Gesichter</strong>, doch Schönheit ist subjektiv und
        die Gesichtsform ist keine Bewertung — jede der sechs
        <strong>Gesichtsformen</strong> hat ihre eigenen Stärken, und das Ziel ist hier,
        dir zu helfen, mit Selbstvertrauen zu stylen, nicht Gesichter zu bewerten. Betrachte das Ergebnis als
        hilfreiche Orientierung statt als Urteil.
      </p>
      <p>
        Bereit, nicht länger zu raten? Scrolle nach oben zur
        <a href="#analyzer">Analyse</a>, füge ein Foto hinzu oder öffne deine Kamera, und lass
        die <strong>KI-Gesichtsform-Analyse</strong> dir deine vollständige Aufschlüsselung
        in Sekunden zeigen — völlig kostenlos.
      </p>
    `,
  },

  faqSection: {
    eyebrow: "FAQ",
    heading: "Häufige Fragen.",
  },
  faqs: [
    {
      q: "Was ist ein Gesichtsform-Analysetool?",
      a: "Ein Gesichtsform-Analysetool betrachtet die Proportionen deines Gesichts — Stirn, Wangenknochen, Kieferlinie und Länge — und sagt dir, welcher Form du am nächsten kommst. Unsere KI-Gesichtsform-Analyse macht das automatisch, indem sie 478 Gesichtspunkte aus einem Foto oder von deiner Kamera erfasst und deine Übereinstimmung dann über alle sechs Formen einordnet.",
    },
    {
      q: "Wie bestimme ich meine Gesichtsform?",
      a: "Um deine Gesichtsform zu bestimmen, vergleiche vier Dinge: die Breite deiner Stirn, deiner Wangenknochen und deines Kiefers sowie die Gesamtlänge deines Gesichts. Die Form, deren Proportionen zu deinen passen, ist deine Gesichtsform. Dieses Tool misst diese Verhältnisse automatisch für dich, sodass kein Raten oder Maßband nötig ist.",
    },
    {
      q: "Welche Gesichtsform habe ich?",
      a: "Du hast höchstwahrscheinlich eine von sechs gängigen Gesichtsformen: oval, rund, quadratisch, rechteckig, herzförmig oder rautenförmig. Lade ein klares, frontales Foto hoch oder öffne deine Kamera, und das Tool sagt dir, welche du hast — samt Zuverlässigkeitswert und vollständiger prozentualer Aufschlüsselung.",
    },
    {
      q: "Was ist meine Gesichtsform?",
      a: "Deine Gesichtsform ist die Gesamtkontur deines Gesichts, definiert dadurch, wie breit deine Stirn, deine Wangenknochen und dein Kiefer im Verhältnis zur Gesichtslänge sind. Der schnellste Weg, es herauszufinden, ist, ein Foto durch das obige Tool laufen zu lassen — es liest deine echte Gesichtsgeometrie und zeigt in Sekunden deine nächste Übereinstimmung.",
    },
    {
      q: "Welche Form hat mein Gesicht?",
      a: "Die Form deines Gesichts hängt von seinem breitesten Punkt und seiner Länge ab. Ist dein Gesicht deutlich länger als breit, könnte es oval oder rechteckig sein; sind Breite und Länge ähnlich, rund oder quadratisch; ist deine Stirn der breiteste Teil, herzförmig oder rautenförmig. Das Tool bestimmt es präzise aus deinen Maßen.",
    },
    {
      q: "Wie kann ich meine Gesichtsform bestimmen?",
      a: "Am einfachsten lässt du es die KI machen: streiche deine Haare zurück, blicke frontal in die Kamera und lade ein Foto hoch oder nutze die Live-Kamera. Das Tool misst deine Kiefer-, Wangenknochen-, Stirn- und Längenverhältnisse und liefert deine Gesichtsform sofort — weitaus konsistenter als das Schätzen im Spiegel.",
    },
    {
      q: "Wie erkenne ich meine Gesichtsform?",
      a: "Du kannst deine Gesichtsform erkennen, indem du das breiteste Merkmal deines Gesichts findest und prüfst, ob dein Gesicht länger als breit ist. Statt deine Kontur auf einem Spiegel nachzuzeichnen, ermittelt dieses Tool deine Gesichtsform für dich aus einem einzigen Foto, ganz ohne manuelles Messen.",
    },
    {
      q: "Woran erkenne ich, welche Gesichtsform ich habe?",
      a: "Achte auf drei Signale: wo dein Gesicht am breitesten ist, wie kantig oder weich dein Kiefer ist und ob dein Gesicht lang oder ausgewogen ist. Das Tool liest alle drei aus 478 Gesichtspunkten und sagt dir genau, welche Gesichtsform du hast — und wie stark du mit den nachfolgenden Formen übereinstimmst.",
    },
    {
      q: "Was ist meine Gesichtsform?",
      a: "Welche Gesichtsform du auch hast, das Tool kann sie in Sekunden benennen. Füge oben ein Foto hinzu oder öffne deine Kamera, und du erhältst deine am besten passende Form, einen Zuverlässigkeitsprozentsatz und eine Rangliste über Oval, Rund, Quadratisch, Rechteckig, Herzförmig und Rautenförmig.",
    },
    {
      q: "Wie finde ich meine Gesichtsform heraus?",
      a: "Du kannst deine Gesichtsform genau hier kostenlos herausfinden — ohne Anmeldung und ohne Download. Lade ein frontales Foto hoch oder nutze deine Kamera, und die KI misst deine Gesichtsproportionen und zeigt dir dein Ergebnis in Sekunden.",
    },
    {
      q: "Wie finde ich meine Gesichtsform?",
      a: "Um deine Gesichtsform zu finden, verwende ein klares, gut beleuchtetes Foto mit Haaren aus dem Gesicht und abgenommener Brille und lass es durch das Tool laufen. Es vergleicht deine gemessenen Verhältnisse mit allen sechs Formprofilen und findet automatisch die nächste Übereinstimmung für dich.",
    },
    {
      q: "Wie identifiziere ich meine Gesichtsform?",
      a: "Deine Gesichtsform zu identifizieren bedeutet, deine Stirn-, Wangenknochen- und Kieferbreite sowie deine Gesichtslänge mit einem der sechs Standardprofile abzugleichen. Das Tool identifiziert sie präzise anhand der Geometrie der Gesichtspunkte, sodass du eine objektive Antwort statt einer subjektiven Vermutung erhältst.",
    },
  ],

  contentPage: {
    lastUpdated: "Zuletzt aktualisiert:",
  },
  mtNotice:
    "Diese Seite wurde maschinell übersetzt. Die englische Version ist maßgeblich; im Falle von Abweichungen hat das <a href=\"{enHref}\">englische Original</a> Vorrang.",

  error: {
    eyebrow: "Fehler {code}",
    ctaHome: "Zurück zur Startseite",
    ctaAnalyze: "Mein Gesicht analysieren",
  },

  pages: {
    home: {
      title: "Kostenlose KI-Gesichtsform-Analyse online — Erkenne deine Gesichtsform",
      description:
        "Kostenlose KI-Gesichtsform-Analyse online — lade ein Foto hoch oder nutze deine Kamera, um deine Gesichtsform sofort herauszufinden, mit einer vollständigen Aufschlüsselung über alle 6 Formen. Keine Anmeldung.",
    },
    about: {
      title: "Über uns — AI Face Shape Analyzer",
      description:
        "Erfahre mehr über den AI Face Shape Analyzer — ein kostenloses, schnelles Tool, das deine Gesichtsform aus einem Foto oder per Live-Kamera erkennt, mit einer vollständigen Aufschlüsselung über alle sechs Formen.",
      keywords:
        "über ki-gesichtsform-analyse, gesichtsform-analyse, wer hat die gesichtsform-analyse gemacht",
      eyebrow: "Über uns",
      heading: "Über den AI Face Shape Analyzer",
      lead: "Wir haben eine kostenlose, genaue Gesichtsform-Analyse entwickelt, die dir das Gesamtbild liefert — nicht nur eine Bezeichnung in einem Wort.",
      html: `
        <p>
          <strong>AI Face Shape Analyzer</strong> ist ein kostenloses Online-Tool, das
          deine Gesichtsform aus einem Foto oder von deiner Live-Kamera erkennt. Statt dir nur eine
          einzige Vermutung zu liefern, erfasst es 478 Gesichtspunkte, misst die echte Geometrie
          deines Gesichts und ordnet dein Ergebnis über alle sechs gängigen Formen ein — oval,
          rund, quadratisch, rechteckig, herzförmig und rautenförmig.
        </p>
        <h2>Warum wir es entwickelt haben</h2>
        <p>
          „Welche Gesichtsform habe ich?“ ist eine der häufigsten Fragen, die Menschen stellen,
          bevor sie sich für einen Haarschnitt, eine Brille oder einen neuen Make-up- oder Pflegestil
          entscheiden. Die meisten Tools beantworten sie mit einer einzigen Bezeichnung und lassen dich rätseln, wie
          sicher diese Antwort wirklich ist. Wir wollten etwas Ehrlicheres: ein Tool,
          das die vollständige Aufschlüsselung zeigt, denn echte Gesichter sind oft eine Mischung aus zwei
          Formen statt einer perfekten Übereinstimmung.
        </p>
        <h2>Was es anders macht</h2>
        <ul>
          <li>
            <strong>Ein Live-Gesichtsnetz.</strong> Eine Echtzeit-Überlagerung zeigt genau, was
            das Modell gerade einliest, sodass sich die Analyse nie wie eine
            Blackbox anfühlt.
          </li>
          <li>
            <strong>Eine vollständige Wahrscheinlichkeitsaufschlüsselung.</strong> Du erhältst eine am besten passende
            Form, einen Zuverlässigkeitswert und eine prozentuale Rangliste über alle sechs Formen
            — plus Erkennung einer Mischung aus zwei Formen.
          </li>
          <li>
            <strong>Kostenlos und reibungslos.</strong> Keine Anmeldung, kein Download und keine
            Nutzungsgrenzen bei normaler Verwendung. Es funktioniert auf Handy und Desktop gleichermaßen.
          </li>
          <li>
            <strong>Für alle gebaut.</strong> Die Oberfläche ist von Grund auf barrierefrei,
            mit Tastaturunterstützung, klaren Fokuszuständen und Unterstützung für reduzierte Bewegung.
          </li>
        </ul>
        <h2>So funktioniert es</h2>
        <p>
          Wenn du ein Foto hochlädst oder deine Kamera öffnest, zeichnet ein Modell im Browser
          dein Gesicht nach und misst Kiefer-, Wangenknochen-, Stirn- und Längenverhältnisse sowie
          die Kantigkeit des Kiefers. Diese Maße werden mit sechs Formprofilen
          verglichen, um deine nächste Übereinstimmung zu finden. Das Ergebnis ist eine konsistente, objektive
          Auswertung deiner Gesichtsproportionen — weitaus stabiler als das Schätzen im
          Spiegel.
        </p>
        <h2>Ein ehrlicher Hinweis zur Genauigkeit</h2>
        <p>
          Die Gesichtsform ist eine subjektive Bezeichnung, keine exakte Messung, und Gesichter im Grenzbereich
          sind echt mehrdeutig. Ergebnisse können sich je nach Fotowinkel,
          Beleuchtung, Mimik, Haaren und Brille verschieben. Wir betrachten die Analyse als hilfreiche
          Styling-Orientierung, nicht als Urteil — und jede der sechs Formen hat ihre eigenen
          Stärken.
        </p>
        <h2>Kontakt aufnehmen</h2>
        <p>
          Hast du Feedback, eine Funktionsidee oder eine Frage? Wir würden gerne von dir hören —
          besuche unsere <a href="/contact">Kontaktseite</a> oder schreibe eine E-Mail an
          <a href="mailto:hello@aifaceshapeanalyzer.com">hello@aifaceshapeanalyzer.com</a>.
        </p>
        <p>
          Bereit, es auszuprobieren? <a href="/#analyzer">Analysiere dein Gesicht</a> und sieh deine
          vollständige Aufschlüsselung in Sekunden — völlig kostenlos.
        </p>
      `,
    },
    contact: {
      title: "Kontakt — AI Face Shape Analyzer",
      description:
        "Nimm Kontakt zum Team des AI Face Shape Analyzer auf. Sende Feedback, Funktionsideen, Datenschutzanfragen oder Supportfragen per E-Mail.",
      keywords:
        "kontakt ki-gesichtsform-analyse, gesichtsform-analyse support, gesichtsform-analyse feedback",
      eyebrow: "Kontakt",
      heading: "Kontakt aufnehmen",
      lead: "Fragen, Feedback oder eine Funktionsidee? Wir würden gerne von dir hören. Am schnellsten erreichst du uns per E-Mail.",
      emailHeading: "Schreib uns eine E-Mail",
      emailGeneralLabel: "Allgemeines & Feedback:",
      emailPrivacyLabel: "Datenschutzanfragen:",
      emailIntro:
        "Wir lesen jede Nachricht und bemühen uns, innerhalb weniger Werktage zu antworten. Bei Datenschutzfragen siehe unsere {privacyLink}; bei Nutzungsfragen unsere {termsLink}.",
      privacyLinkText: "Datenschutzerklärung",
      termsLinkText: "Allgemeine Geschäftsbedingungen",
      formHeading: "Nachricht senden",
      formIntro:
        "Fülle die Felder unten aus, und wir öffnen eine vorausgefüllte E-Mail in deinem Mailprogramm — drücke einfach auf Senden.",
      labelName: "Name",
      labelEmail: "Deine E-Mail",
      labelMessage: "Nachricht",
      submit: "E-Mail zum Senden öffnen",
      fallback: "Schreibst du lieber direkt? E-Mail an {email}.",
      errMissing: "Bitte gib deinen Namen, deine E-Mail und deine Nachricht ein.",
      errEmail: "Bitte gib eine gültige E-Mail-Adresse ein.",
      mailSubject: "Kontakt von {name}",
    },
    privacy: {
      title: "Datenschutzerklärung — AI Face Shape Analyzer",
      description:
        "Wie der AI Face Shape Analyzer mit deinen Fotos und Daten umgeht. Die Gesichtsanalyse läuft in deinem Browser; erfahre, was wir erfassen, wie wir es nutzen und welche Wahlmöglichkeiten du hast.",
      keywords:
        "ki-gesichtsform-analyse datenschutzerklärung, gesichtsform-analyse daten, gesichtsanalyse datenschutz",
      eyebrow: "Rechtliches",
      heading: "Datenschutzerklärung",
      lead: "Diese Erklärung beschreibt, welche Informationen der AI Face Shape Analyzer erfasst, wie deine Fotos verarbeitet werden und welche Wahlmöglichkeiten du hast.",
      updated: "19. Juni 2026",
      html: `
        <p>
          AI Face Shape Analyzer („wir“, „uns“, „unser“) betreibt die Website unter
          aifaceshapeanalyzer.com (der „Dienst“). Diese Datenschutzerklärung beschreibt, wie
          wir mit Informationen umgehen, wenn du den Dienst nutzt. Durch die Nutzung des Dienstes
          stimmst du den hier beschriebenen Praktiken zu.
        </p>
        <h2>Deine Fotos und deine Kamera</h2>
        <p>
          Die Gesichtsform-Analyse läuft in deinem Browser. Wenn du ein Foto hochlädst oder
          deine Kamera nutzt, wird das Bild auf deinem eigenen Gerät vom
          Modell im Browser verarbeitet, um die Gesichtsproportionen zu messen. Wir verlangen nicht, dass du
          ein Konto erstellst, und wir verkaufen deine Bilder nicht.
        </p>
        <p>
          Du entscheidest, ob du über deinen Browser Kamerazugriff gewährst, und du
          kannst diese Berechtigung jederzeit in deinen Browsereinstellungen widerrufen.
        </p>
        <h2>Informationen, die wir erfassen</h2>
        <p>Wir bemühen uns, so wenig wie möglich zu erfassen. Je nachdem, wie du den Dienst nutzt, kann dies Folgendes umfassen:</p>
        <ul>
          <li>
            <strong>Nutzungs- und Gerätedaten.</strong> Übliche technische Informationen
            wie Browsertyp, Gerätetyp, Bildschirmgröße, verweisende Seite und
            allgemeine Region, erfasst, um den Dienst funktionsfähig zu halten und die
            aggregierte Nutzung zu verstehen.
          </li>
          <li>
            <strong>Lokaler Speicher.</strong> Wir speichern kleine Werte in deinem Browser
            (zum Beispiel deine Hell-/Dunkel-Design-Einstellung und einen weichen Nutzungszähler)
            auf deinem Gerät. Diese Daten werden nicht als Nutzerprofil an uns gesendet.
          </li>
          <li>
            <strong>Nachrichten, die du uns sendest.</strong> Wenn du uns per E-Mail kontaktierst,
            erhalten wir die Informationen, die du teilst, wie deine E-Mail-Adresse
            und den Inhalt deiner Nachricht.
          </li>
        </ul>
        <h2>Cookies und Analyse</h2>
        <p>
          Wir können Cookies oder ähnliche Technologien verwenden, einschließlich datenschutzfreundlicher
          Analyse, um den aggregierten Traffic zu messen und den Dienst zu verbessern. Du kannst
          Cookies über deine Browsereinstellungen steuern. Ihre Deaktivierung sollte
          die Kernfunktion des Tools nicht beeinträchtigen.
        </p>
        <h2>Wie wir Informationen nutzen</h2>
        <ul>
          <li>Um den Dienst bereitzustellen, zu warten und zu verbessern.</li>
          <li>Um technische Probleme zu diagnostizieren und Missbrauch zu verhindern.</li>
          <li>Um deine Fragen und Supportanfragen zu beantworten.</li>
          <li>Um gesetzliche Verpflichtungen zu erfüllen.</li>
        </ul>
        <h2>Drittanbieterdienste</h2>
        <p>
          Wir können uns auf Drittanbieter für Hosting, Content-Auslieferung und
          Analyse verlassen. Diese Anbieter verarbeiten begrenzte technische Daten in unserem Auftrag
          und sollen sie schützen. Der Dienst kann auch auf externe
          Seiten verlinken, die ihren eigenen Datenschutzrichtlinien unterliegen.
        </p>
        <h2>Datenspeicherung</h2>
        <p>
          Wir bewahren technische und Analysedaten nur so lange auf, wie es für die oben
          beschriebenen Zwecke erforderlich ist, und löschen oder anonymisieren sie dann. E-Mail-Korrespondenz
          wird so lange aufbewahrt, wie es zur Bearbeitung deiner Anfrage und für eine angemessene
          Dokumentation notwendig ist.
        </p>
        <h2>Datenschutz für Kinder</h2>
        <p>
          Der Dienst richtet sich nicht an Kinder unter 13 Jahren (oder dem Mindestalter in
          deiner Rechtsordnung), und wir erfassen wissentlich keine personenbezogenen Daten
          von ihnen. Wenn du glaubst, dass ein Kind uns Informationen übermittelt hat, kontaktiere uns,
          und wir werden geeignete Schritte unternehmen, um sie zu entfernen.
        </p>
        <h2>Deine Rechte</h2>
        <p>
          Je nachdem, wo du lebst, hast du möglicherweise das Recht, personenbezogene Daten, die wir über dich
          speichern, einzusehen, zu korrigieren oder zu löschen oder bestimmten
          Verarbeitungen zu widersprechen. Um eine Anfrage zu stellen, schreibe uns über die unten stehende Adresse. Wir werden
          im Einklang mit dem geltenden Recht antworten.
        </p>
        <h2>Änderungen dieser Erklärung</h2>
        <p>
          Wir können diese Datenschutzerklärung von Zeit zu Zeit aktualisieren. Wenn wir das tun, werden wir
          das oben stehende Datum „Zuletzt aktualisiert“ überarbeiten. Wesentliche Änderungen können
          im Dienst hervorgehoben werden.
        </p>
        <h2>Kontakt aufnehmen</h2>
        <p>
          Fragen zu dieser Erklärung? Schreibe eine E-Mail an
          <a href="mailto:privacy@aifaceshapeanalyzer.com">privacy@aifaceshapeanalyzer.com</a>
          oder besuche unsere <a href="/contact">Kontaktseite</a>.
        </p>
        <hr />
        <p>
          Dieses Dokument dient der allgemeinen Information und stellt keine Rechtsberatung dar.
          Bitte lass es von einer qualifizierten Fachkraft prüfen, um sicherzustellen, dass es zu deinen
          spezifischen Umständen passt.
        </p>
      `,
    },
    terms: {
      title: "Allgemeine Geschäftsbedingungen — AI Face Shape Analyzer",
      description:
        "Die Bedingungen, die deine Nutzung des AI Face Shape Analyzer regeln, einschließlich zulässiger Nutzung, Haftungsausschlüssen und Haftungsbeschränkungen.",
      keywords:
        "ki-gesichtsform-analyse bedingungen, gesichtsform-analyse agb, nutzungsbedingungen",
      eyebrow: "Rechtliches",
      heading: "Allgemeine Geschäftsbedingungen",
      lead: "Diese Bedingungen regeln deine Nutzung des AI Face Shape Analyzer. Bitte lies sie sorgfältig, bevor du den Dienst nutzt.",
      updated: "19. Juni 2026",
      html: `
        <p>
          Diese Allgemeinen Geschäftsbedingungen („Bedingungen“) bilden eine Vereinbarung zwischen dir und
          AI Face Shape Analyzer („wir“, „uns“, „unser“) bezüglich deiner Nutzung der
          Website unter aifaceshapeanalyzer.com (der „Dienst“). Durch den Zugriff auf oder die Nutzung
          des Dienstes erklärst du dich mit diesen Bedingungen einverstanden. Wenn du nicht einverstanden bist,
          nutze den Dienst nicht.
        </p>
        <h2>Nutzung des Dienstes</h2>
        <p>
          Der Dienst ermöglicht es dir, ein Foto oder einen Live-Kamerafeed zu analysieren, um deine
          Gesichtsform zu schätzen. Er wird für persönliche, informative und unterhaltende
          Zwecke bereitgestellt. Du musst mindestens 13 Jahre alt sein (oder das Mindestalter in deiner
          Rechtsordnung), um den Dienst zu nutzen.
        </p>
        <h2>Zulässige Nutzung</h2>
        <p>Du verpflichtest dich, Folgendes zu unterlassen:</p>
        <ul>
          <li>Bilder hochzuladen, für die du kein Nutzungsrecht hast, oder Bilder anderer Personen ohne deren Einwilligung.</li>
          <li>Den Dienst für rechtswidrige, belästigende oder schädliche Zwecke zu nutzen.</li>
          <li>Zu versuchen, den Dienst oder seine Systeme zu stören, zu überlasten, zurückzuentwickeln oder sich unbefugten Zugang zu verschaffen.</li>
          <li>Den Dienst oder seine Inhalte ohne unsere schriftliche Genehmigung zu scrapen, weiterzuverkaufen oder kommerziell zu verwerten.</li>
        </ul>
        <h2>Keine professionelle Beratung</h2>
        <p>
          Die Gesichtsform ist eine subjektive Bezeichnung, keine exakte Messung. Die Ergebnisse sind eine
          Schätzung auf Basis deines Bildes und können je nach Winkel, Beleuchtung,
          Mimik, Haaren, Brille und Kameraobjektiv variieren. Der Dienst bietet keine
          medizinische, psychologische, kosmetische oder professionelle Beratung, und du solltest
          dich nicht als solche darauf verlassen. Nutze die Ergebnisse nur als allgemeine Styling-Orientierung.
        </p>
        <h2>Geistiges Eigentum</h2>
        <p>
          Der Dienst, einschließlich seines Designs, seiner Texte, Grafiken und der zugrunde liegenden Software,
          ist unser Eigentum oder das unserer Lizenzgeber und durch geltende Gesetze geschützt. Wir
          gewähren dir eine begrenzte, nicht ausschließliche, nicht übertragbare Lizenz zur Nutzung des
          Dienstes für seinen vorgesehenen Zweck. Du behältst alle Rechte, die du an den
          von dir bereitgestellten Bildern hast; wir erheben keinen Eigentumsanspruch darauf.
        </p>
        <h2>Gewährleistungsausschluss</h2>
        <p>
          Der Dienst wird „wie besehen“ und „wie verfügbar“ ohne Gewährleistungen
          jeglicher Art bereitgestellt, weder ausdrücklich noch stillschweigend, einschließlich, aber nicht beschränkt auf
          Marktgängigkeit, Eignung für einen bestimmten Zweck, Genauigkeit und
          Nichtverletzung von Rechten. Wir gewährleisten nicht, dass der Dienst ununterbrochen,
          fehlerfrei oder dass die Ergebnisse genau oder zuverlässig sind.
        </p>
        <h2>Haftungsbeschränkung</h2>
        <p>
          Soweit gesetzlich zulässig, haften wir nicht für
          indirekte, zufällige, besondere, Folge- oder Strafschäden oder für
          Verluste von Daten, Gewinnen oder Geschäftswerten, die sich aus deiner Nutzung oder Unfähigkeit
          zur Nutzung des Dienstes ergeben. Wo die Haftung nicht ausgeschlossen werden kann, ist sie auf
          das gesetzlich zulässige Höchstmaß beschränkt.
        </p>
        <h2>Links zu Drittanbietern</h2>
        <p>
          Der Dienst kann Links zu Websites oder Ressourcen Dritter enthalten. Wir sind
          nicht verantwortlich für die Inhalte, Richtlinien oder Praktiken dieser Seiten und
          stellen solche Links nur zur Bequemlichkeit bereit.
        </p>
        <h2>Änderungen des Dienstes und der Bedingungen</h2>
        <p>
          Wir können den Dienst jederzeit ändern oder einstellen oder diese Bedingungen jederzeit
          aktualisieren. Wenn wir die Bedingungen aktualisieren, überarbeiten wir das oben stehende
          Datum „Zuletzt aktualisiert“. Deine fortgesetzte Nutzung des Dienstes nach Inkrafttreten der Änderungen
          gilt als Annahme der überarbeiteten Bedingungen.
        </p>
        <h2>Anwendbares Recht</h2>
        <p>
          Diese Bedingungen unterliegen den Gesetzen, die an unserem Hauptgeschäftssitz
          gelten, ohne Berücksichtigung kollisionsrechtlicher Grundsätze. Alle Streitigkeiten
          unterliegen den dort zuständigen Gerichten, sofern nicht zwingendes lokales
          Recht etwas anderes vorschreibt.
        </p>
        <h2>Kontakt aufnehmen</h2>
        <p>
          Fragen zu diesen Bedingungen? Schreibe eine E-Mail an
          <a href="mailto:hello@aifaceshapeanalyzer.com">hello@aifaceshapeanalyzer.com</a>
          oder besuche unsere <a href="/contact">Kontaktseite</a>.
        </p>
        <hr />
        <p>
          Dieses Dokument dient der allgemeinen Information und stellt keine Rechtsberatung dar.
          Bitte lass es von einer qualifizierten Fachkraft prüfen, um sicherzustellen, dass es zu deinen
          spezifischen Umständen passt.
        </p>
      `,
    },
    notFound: {
      title: "Seite nicht gefunden (404) — AI Face Shape Analyzer",
      description:
        "Die gesuchte Seite existiert nicht. Kehre zur Startseite zurück, um deine Gesichtsform in Sekunden zu finden.",
      code: "404",
      heading: "Diese Seite konnten wir nicht finden.",
      message:
        "Der Link ist möglicherweise defekt oder die Seite wurde verschoben. Deine Gesichtsform-Analyse ist noch genau dort, wo du sie hinterlassen hast.",
    },
    serverError: {
      title: "Etwas ist schiefgelaufen (500) — AI Face Shape Analyzer",
      description:
        "Ein unerwarteter Fehler ist aufgetreten. Versuche es erneut oder kehre zur Startseite zurück, um deine Gesichtsform in Sekunden zu finden.",
      code: "500",
      heading: "Auf unserer Seite ist etwas schiefgelaufen.",
      message:
        "Ein unerwarteter Fehler hat das Laden dieser Seite verhindert. Versuche es gleich erneut oder kehre zur Startseite zurück, um deine Gesichtsform zu finden.",
    },
  },

  keywords:
    "ki-gesichtsform-analyse, beste ki-gesichtsform-analyse, ki-gesichtsform-analyse kostenlos, ki-gesichtsform-analyse online, ki-gesichtsform-analyse online kostenlos, ki-gesichtsform-erkennung, gesichtsform-ki-analyse, gesichtsform-analyse ki, gesichtsformen, gesichtsform, welche gesichtsform habe ich, wie bestimme ich die gesichtsform, gesichtsanalyse, gesichtsform-rechner, attraktivitäts-analysetool für gesichter",
};
