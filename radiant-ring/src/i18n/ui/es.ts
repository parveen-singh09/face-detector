import { type UIStrings } from "./en";

export const es: UIStrings = {
  nav: {
    logoText: "Analizador de forma de rostro",
    logoAria: "AI Face Shape Analyzer — inicio",
    primaryAria: "Principal",
    links: {
      shapes: "Formas de rostro",
      about: "Acerca de",
      contact: "Contacto",
      privacy: "Privacidad",
      terms: "T&C",
    },
    themeToggleAria: "Alternar modo oscuro",
    themeToggleTitle: "Alternar tema",
    menuOpenAria: "Abrir menú",
    menuCloseAria: "Cerrar menú",
    langLabel: "Idioma",
  },

  footer: {
    logoAria: "AI Face Shape Analyzer — inicio",
    brandName: "Analizador de forma de rostro",
    tagline:
      "Descubre la forma de tu rostro en segundos — gratis y preciso, con un desglose completo de las seis formas.",
    productEyebrow: "Producto",
    productLinks: {
      analyze: "Analizar mi rostro",
      how: "Cómo funciona",
      shapes: "Formas de rostro",
    },
    aboutEyebrow: "Acerca de",
    aboutLinks: {
      aboutTool: "Sobre la herramienta",
      faq: "Preguntas frecuentes",
    },
    companyEyebrow: "Empresa",
    companyLinks: {
      about: "Quiénes somos",
      contact: "Contáctanos",
      privacy: "Política de privacidad",
      terms: "Términos y condiciones",
    },
    mono: "Seis formas · malla facial de 478 puntos",
    disclaimer:
      "Aviso: la forma del rostro es una etiqueta subjetiva, no una medición exacta. Los resultados son una estimación generada a partir de tu foto y pueden variar según el ángulo, la iluminación, la expresión, el cabello, las gafas y la lente de la cámara. Muchos rostros son una mezcla de dos formas — utilízalo como una guía de estilo, no como un consejo definitivo o profesional.",
  },

  hero: {
    titleBefore: "Analizador de ",
    titleAccent: "forma de rostro",
    titleAfter: " con IA gratis",
    sub: "Sube una foto o usa tu cámara para un análisis preciso de la forma de tu rostro — con un desglose completo de las seis formas.",
    ctaPrimary: "Analizar mi rostro",
    ctaSecondary: "Cómo funciona",
    trust: {
      free: "Analizador manual",
      mesh: "Malla facial en vivo",
      ranked: "Seis formas clasificadas",
    },
  },

  howItWorks: {
    eyebrow: "Cómo funciona",
    heading: "Tres pasos para conocer la forma de tu rostro.",
  },
  steps: [
    {
      n: "01",
      title: "Sube una foto o abre tu cámara",
      body: "Elige una foto nítida y de frente (hasta 10MB) o usa tu cámara para una lectura en vivo.",
    },
    {
      n: "02",
      title: "Mapeamos 478 puntos faciales",
      body: "Un modelo en tu dispositivo traza la malla de tu rostro y mide la mandíbula, los pómulos, la frente y las proporciones de longitud.",
    },
    {
      n: "03",
      title: "Obtén un desglose completo",
      body: "Consulta tu forma más coincidente, una puntuación de confianza y un porcentaje clasificado de las seis formas.",
    },
  ],

  shapesSection: {
    eyebrow: "Referencia",
    heading: "Las seis formas de rostro.",
    sub: "Cada resultado se compara con estos seis perfiles. La mayoría de las personas se inclina hacia uno con rasgos de otro — por eso mostramos la mezcla completa.",
    exampleAlt: "Ejemplo de una forma de rostro {shape}",
  },
  shapeLabels: {
    oval: "Ovalado",
    round: "Redondo",
    square: "Cuadrado",
    rectangle: "Rectangular",
    heart: "Corazón",
    diamond: "Diamante",
  },
  shapeDescriptions: {
    oval: "Proporciones equilibradas con una longitud de rostro mayor que su anchura y una mandíbula suavemente redondeada. Ampliamente considerada la forma más versátil.",
    round:
      "Ángulos suaves con una longitud y anchura del rostro casi iguales, mejillas más llenas y una mandíbula y barbilla redondeadas.",
    square:
      "Una mandíbula fuerte y angular con la frente, los pómulos y la mandíbula de anchura casi igual — una forma marcada y estructurada.",
    rectangle:
      "Como el cuadrado pero más largo — la longitud del rostro supera claramente su anchura, con la frente, los pómulos y la mandíbula casi paralelos.",
    heart:
      "Una frente y unos pómulos más anchos que se estrechan hacia una barbilla más estrecha, a menudo puntiaguda — la clásica silueta de corazón.",
    diamond:
      "Los pómulos son el punto más ancho, con una frente y mandíbula más estrechas y una barbilla definida y puntiaguda.",
  },

  analyzer: {
    eyebrow: "Analizador",
    heading: "Detecta la forma de tu rostro",
    sub: "Sube una foto nítida y de frente o usa tu cámara.",
    tablistAria: "Método de entrada",
    tabUpload: "Subir foto",
    tabCamera: "Usar cámara",
    fileInputAria: "Elige una foto para analizar",
    dropzoneTitle: "Suelta una foto o haz clic para explorar",
    dropzoneHint: "JPG, PNG o WebP · hasta 10MB",
    previewImgAlt: "Tu foto subida",
    cameraPreviewAria: "Vista previa de la cámara",
    loadingModel: "Cargando el modelo en el dispositivo…",
    btnAnalyze: "Analizar mi rostro",
    btnCapture: "Capturar y analizar",
    btnReset: "Analizar otra",
    uploadTipsAria: "Consejos para una lectura precisa",
    uploadTips: [
      "Usa una foto nítida y clara — bien iluminada, enfocada y mirando directamente a la cámara.",
      "Mantén el fondo simple y despejado para que solo destaque tu rostro.",
      "Arréglate — el cabello fuera del rostro, sin gafas y con una expresión neutra.",
    ],
    camTipsAria: "Consejos para una lectura precisa",
    camTips: [
      "Quítate las gafas — las monturas ocultan los bordes de las mejillas y las cejas.",
      "Mira directamente a la cámara, con el cabello fuera del rostro.",
      "Haz clic para capturar 5 lecturas — las promediamos para mayor precisión.",
    ],
    resultEyebrow: "La forma de tu rostro",
    breakdownTitle: "Desglose completo",
    resultDisclaimer:
      "Atención: la forma del rostro es una etiqueta subjetiva, no una ciencia exacta. Los resultados son una estimación y pueden variar según el ángulo de tu foto, la iluminación, la expresión, el cabello que cubre el rostro, las gafas y la lente de la cámara. Muchos rostros son una mezcla natural de dos formas — tómalo como una guía útil, no como un veredicto definitivo.",
    idleTitle: "Lo que obtendrás",
    idleItems: [
      "Tu forma más coincidente con una puntuación de confianza",
      "Un porcentaje clasificado de las seis formas de rostro",
      "Una nota cuando tu rostro es una mezcla de dos formas",
    ],
    msg: {
      analyzing: "Analizando…",
      rateLimited:
        "Has alcanzado el límite por hora. Inténtalo de nuevo {retryAfter}.",
      fileType: "Por favor, elige una imagen JPG, PNG o WebP.",
      fileTooLarge: "Esa imagen supera los 10MB. Por favor, elige un archivo más pequeño.",
      readError:
        "No se pudo leer esa imagen. Las fotos HEIC de iPhone no son compatibles — por favor, usa JPG, PNG o WebP.",
      noFace: "No se detectó ningún rostro. Prueba con una foto más clara y de frente.",
      analyzeError:
        "Algo salió mal al analizar esa imagen. Por favor, inténtalo de nuevo.",
      noCameraSupport: "Tu navegador no admite el acceso a la cámara.",
      cameraError:
        "No se pudo acceder a la cámara. Comprueba los permisos o usa la subida de foto en su lugar.",
      noFaceYet:
        "Aún no se detecta ningún rostro. Centra tu rostro y luego haz clic para capturar.",
      captureError: "Algo salió mal durante la captura. Por favor, inténtalo de nuevo.",
      captureReading: "Lectura de captura - [{n}/{total}]",
      confidence: "{pct}% de confianza",
      blendDesc: "Principalmente {top} con rasgos de {runnerUp}. {desc}",
    },
  },

  manualCalc: {
    eyebrow: "Calculadora manual",
    heading: "¿Conoces tus medidas? Calcúlalo directamente",
    sub: "No necesitas foto. Mide las cuatro distancias de abajo a partir de una foto de frente o de un espejo, introdúcelas en una sola unidad (cm, mm o pulgadas) y calcularemos la forma de tu rostro a partir de las proporciones.",
    imageAlt:
      "Guía de medición del rostro que muestra las medidas de la frente, los pómulos, la longitud del rostro y la mandíbula en un retrato de frente.",
    fields: {
      foreheadWidth: {
        label: "Ancho de la frente",
        hint: "Distancia entre los puntos izquierdo y derecho de la frente.",
      },
      cheekboneWidth: {
        label: "Ancho de los pómulos",
        hint: "Distancia entre los puntos izquierdo y derecho de los pómulos.",
      },
      faceLength: {
        label: "Longitud del rostro",
        hint: "Desde el centro del nacimiento del cabello hasta la parte inferior del mentón.",
      },
      jawWidth: {
        label: "Ancho de la mandíbula",
        hint: "Desde un ángulo de la mandíbula hasta el ángulo opuesto.",
      },
    },
    btnCalculate: "Calcular forma del rostro",
    btnReset: "Restablecer",
    previewShape: "Forma del rostro",
    previewDesc:
      "Introduce tus cuatro medidas arriba y calcularemos la forma de tu rostro a partir de las proporciones.",
    invalidInput:
      "Introduce un número positivo para las cuatro medidas.",
  },

  seo: {
    eyebrow: "Sobre la herramienta",
    heading: "El analizador de forma de rostro con IA gratis, en línea.",
    html: `
      <p>
        Nuestro <strong>analizador de forma de rostro con IA</strong> es una
        herramienta gratuita y en línea que te dice la forma de tu rostro en
        segundos — sin registro y sin descarga. Si alguna vez te has preguntado
        <em>«¿cuál es la forma de mi rostro?»</em> y no sabías cómo responder,
        esta es la forma rápida de averiguarlo. Solo sube una foto nítida y de
        frente o abre tu cámara, y el <strong>analizador de rostro con IA</strong>
        hace el resto: mapea 478 puntos faciales, mide la geometría de tu rostro
        y clasifica cada resultado entre las seis formas comunes.
      </p>
      <h3>Qué hace al mejor analizador de forma de rostro con IA</h3>
      <p>
        La mayoría de las herramientas te dan una sola etiqueta y esperan que sea
        la correcta. Construimos lo que creemos que es el <strong>mejor
        analizador de forma de rostro con IA</strong> mostrando, en cambio, el
        panorama completo. Como <strong>detector de forma de rostro y analizador
        facial con IA</strong> combinado, devuelve una puntuación de confianza más
        un desglose porcentual clasificado para ovalado, redondo, cuadrado,
        rectangular, corazón y diamante — porque los rostros reales suelen ser una
        mezcla de dos formas en lugar de una coincidencia perfecta. Una
        superposición de malla facial en vivo muestra exactamente lo que el modelo
        está leyendo mientras trabaja, por lo que el análisis nunca parece una caja
        negra.
      </p>
      <h3>Cómo determinar la forma de tu rostro</h3>
      <p>
        ¿Te preguntas <strong>cómo determinar la forma del rostro</strong> sin un
        espejo y una cinta métrica? El método clásico compara cuatro medidas — la
        anchura de la frente, la anchura de los pómulos, la anchura de la mandíbula
        y la longitud del rostro — y las pondera entre sí. Eso es exactamente lo
        que automatiza esta <strong>calculadora de forma de rostro</strong>. Donde
        un <strong>analizador facial</strong> manual deja margen para las
        conjeturas, nuestro <strong>analizador de forma de rostro con IA</strong>
        lee proporciones antropométricas precisas y la angularidad de la mandíbula
        directamente de los puntos faciales, para que obtengas una respuesta
        coherente cada vez. Para la lectura más precisa, aparta el cabello de tu
        rostro, quítate las gafas, mantén una expresión neutra y usa una
        iluminación uniforme y frontal.
      </p>
      <h3>Gratis, en línea</h3>
      <p>
        Esta herramienta <strong>analizador de forma de rostro con IA en línea
        gratis</strong> funciona en línea sin nada que instalar. Funciona igual en
        móvil o escritorio, y es genuinamente un <strong>analizador de forma de
        rostro con IA gratis</strong>, sin límites de uso para un uso normal.
      </p>
      <h3>De las formas de rostro a las elecciones favorecedoras</h3>
      <p>
        Conocer la <strong>forma de tu rostro</strong> es el punto de partida para
        mejores elecciones cotidianas. La gente lo usa para elegir cortes y
        peinados, seleccionar gafas y monturas de gafas de sol que complementen sus
        proporciones, dar forma a las cejas y enmarcar el maquillaje o el estilo de
        barba. Aunque algunas personas buscan un <strong>analizador de atractivo
        facial</strong>, la belleza es subjetiva y la forma del rostro no es una
        puntuación — cada una de las seis <strong>formas de rostro</strong> tiene
        sus propias virtudes, y el objetivo aquí es ayudarte a darte estilo con
        confianza, no clasificar rostros. Toma el resultado como una guía útil en
        lugar de un veredicto.
      </p>
      <p>
        ¿Listo para dejar de adivinar? Desplázate hacia arriba hasta el
        <a href="#analyzer">analizador</a>, añade una foto o abre tu cámara, y deja
        que el <strong>analizador de forma de rostro con IA</strong> te muestre tu
        desglose completo en segundos — completamente gratis.
      </p>
    `,
  },

  faqSection: {
    eyebrow: "Preguntas frecuentes",
    heading: "Preguntas comunes.",
  },
  faqs: [
    {
      q: "¿Qué es un analizador de forma de rostro?",
      a: "Un analizador de forma de rostro es una herramienta que examina las proporciones de tu rostro — frente, pómulos, mandíbula y longitud — y te dice a qué forma te acercas más. Nuestro analizador de forma de rostro con IA lo hace automáticamente mapeando 478 puntos faciales a partir de una foto o de tu cámara, y luego clasifica tu coincidencia entre las seis formas.",
    },
    {
      q: "¿Cómo determino la forma de mi rostro?",
      a: "Para determinar la forma de tu rostro, compara cuatro cosas: la anchura de tu frente, tus pómulos y tu mandíbula, además de la longitud total de tu rostro. La forma cuyas proporciones coinciden con las tuyas es la forma de tu rostro. Este analizador mide esas proporciones por ti automáticamente, así que no hace falta adivinar ni usar una cinta métrica.",
    },
    {
      q: "¿Qué forma de rostro tengo?",
      a: "Lo más probable es que tengas una de las seis formas de rostro comunes: ovalado, redondo, cuadrado, rectangular, corazón o diamante. Sube una foto nítida y de frente o abre tu cámara y el analizador te dirá cuál tienes, junto con una puntuación de confianza y un desglose porcentual completo.",
    },
    {
      q: "¿Cuál es la forma de mi rostro?",
      a: "La forma de tu rostro es el contorno general de tu cara, definido por lo anchas que son tu frente, tus pómulos y tu mandíbula en relación con la longitud de tu rostro. La forma más rápida de averiguarlo es pasar una foto por el analizador de arriba — lee la geometría real de tu rostro y muestra tu coincidencia más cercana en segundos.",
    },
    {
      q: "¿Qué forma tiene mi rostro?",
      a: "La forma de tu rostro se reduce a su punto más ancho y a su longitud. Si tu rostro es claramente más largo que ancho, puede ser ovalado o rectangular; si la anchura y la longitud son similares, redondo o cuadrado; si tu frente es la parte más ancha, corazón o diamante. El analizador lo determina con precisión a partir de tus medidas.",
    },
    {
      q: "¿Cómo puedo determinar la forma de mi rostro?",
      a: "La forma más fácil es dejar que lo haga la IA: recógete el cabello, mira directamente a la cámara y sube una foto o usa la cámara en vivo. La herramienta mide las proporciones de tu mandíbula, pómulos, frente y longitud y devuelve la forma de tu rostro al instante — mucho más coherente que calcularlo a ojo en un espejo.",
    },
    {
      q: "¿Cómo puedo saber la forma de mi rostro?",
      a: "Puedes saber la forma de tu rostro identificando el rasgo más ancho de tu cara y comprobando si tu rostro es más largo que ancho. En lugar de trazar tu contorno en un espejo, este analizador determina la forma de tu rostro por ti a partir de una sola foto, sin mediciones manuales.",
    },
    {
      q: "¿Cómo sé qué forma de rostro tengo?",
      a: "Fíjate en tres señales: dónde es más ancho tu rostro, cuán angular o suave es tu mandíbula, y si tu rostro es largo o equilibrado. El analizador lee las tres a partir de 478 puntos faciales y te dice exactamente qué forma de rostro tienes, además de con qué intensidad coincides con las formas subcampeonas.",
    },
    {
      q: "¿Cuál es la forma de mi rostro?",
      a: "Sea cual sea la forma de tu rostro, el analizador puede nombrarla en segundos. Añade una foto o abre tu cámara arriba y obtendrás tu forma más coincidente, un porcentaje de confianza y un desglose clasificado entre ovalado, redondo, cuadrado, rectangular, corazón y diamante.",
    },
    {
      q: "¿Cómo puedo averiguar la forma de mi rostro?",
      a: "Puedes averiguar la forma de tu rostro gratis aquí mismo — sin registro y sin descarga. Sube una foto de frente o usa tu cámara, y la IA mide las proporciones de tu rostro y muestra tu resultado en segundos.",
    },
    {
      q: "¿Cómo encuentro la forma de mi rostro?",
      a: "Para encontrar la forma de tu rostro, usa una foto nítida y bien iluminada con el cabello fuera del rostro y sin gafas, y luego pásala por el analizador. Compara las proporciones medidas con los seis perfiles de forma y encuentra la coincidencia más cercana por ti automáticamente.",
    },
    {
      q: "¿Cómo identifico la forma de mi rostro?",
      a: "Identificar la forma de tu rostro significa hacer coincidir las anchuras de tu frente, pómulos y mandíbula y la longitud de tu rostro con uno de los seis perfiles estándar. El analizador la identifica con precisión usando la geometría de los puntos faciales, así que obtienes una respuesta objetiva en lugar de una conjetura subjetiva.",
    },
  ],

  contentPage: {
    lastUpdated: "Última actualización:",
  },
  mtNotice:
    "Esta página se ha traducido automáticamente. La versión en inglés es la autorizada; en caso de cualquier discrepancia, prevalece el <a href=\"{enHref}\">original en inglés</a>.",

  error: {
    eyebrow: "Error {code}",
    ctaHome: "Volver al inicio",
    ctaAnalyze: "Analizar mi rostro",
  },

  pages: {
    home: {
      title: "Analizador de forma de rostro con IA gratis en línea — Detecta tu forma de rostro",
      description:
        "Analizador de forma de rostro con IA gratis en línea — sube una foto o usa tu cámara para descubrir la forma de tu rostro al instante con un desglose completo de las 6 formas. Sin registro.",
    },
    about: {
      title: "Quiénes somos — AI Face Shape Analyzer",
      description:
        "Conoce el AI Face Shape Analyzer — una herramienta gratuita y rápida que detecta la forma de tu rostro a partir de una foto o cámara en vivo con un desglose completo de las seis formas.",
      keywords:
        "acerca del analizador de forma de rostro con ia, analizador de forma de rostro, quién creó el analizador de forma de rostro",
      eyebrow: "Acerca de",
      heading: "Acerca de AI Face Shape Analyzer",
      lead: "Hemos creado un analizador de forma de rostro gratuito y preciso que te ofrece el panorama completo — no solo una etiqueta de una palabra.",
      html: `
        <p>
          <strong>AI Face Shape Analyzer</strong> es una herramienta gratuita en
          línea que detecta la forma de tu rostro a partir de una foto o de tu
          cámara en vivo. En lugar de darte una sola conjetura, mapea 478 puntos
          faciales, mide la geometría real de tu rostro y clasifica tu resultado
          entre las seis formas comunes — ovalado, redondo, cuadrado, rectangular,
          corazón y diamante.
        </p>
        <h2>Por qué lo creamos</h2>
        <p>
          «¿Cuál es la forma de mi rostro?» es una de las preguntas más comunes que
          la gente se hace antes de elegir un corte de pelo, unas gafas o un nuevo
          estilo de maquillaje o arreglo personal. La mayoría de las herramientas la
          responden con una sola etiqueta y te dejan preguntándote cuán fiable es
          realmente esa respuesta. Queríamos algo más honesto: una herramienta que
          muestre el desglose completo, porque los rostros reales suelen ser una
          mezcla de dos formas en lugar de una coincidencia perfecta.
        </p>
        <h2>Qué lo hace diferente</h2>
        <ul>
          <li>
            <strong>Una malla facial en vivo.</strong> Una superposición en tiempo
            real muestra exactamente lo que el modelo está leyendo mientras trabaja,
            por lo que el análisis nunca parece una caja negra.
          </li>
          <li>
            <strong>Un desglose completo de probabilidades.</strong> Obtienes una
            forma más coincidente, una puntuación de confianza y un porcentaje
            clasificado de las seis formas — además de la detección de mezcla de dos
            formas.
          </li>
          <li>
            <strong>Gratis y sin fricciones.</strong> Sin registro, sin descarga y
            sin límites de uso para un uso normal. Funciona igual en móvil o
            escritorio.
          </li>
          <li>
            <strong>Diseñado para todos.</strong> La interfaz es accesible por
            diseño, con soporte de teclado, estados de foco claros y soporte para
            movimiento reducido.
          </li>
        </ul>
        <h2>Cómo funciona</h2>
        <p>
          Cuando subes una foto o abres tu cámara, un modelo en el navegador traza
          tu rostro y mide las proporciones de mandíbula, pómulos, frente y
          longitud, junto con la angularidad de la mandíbula. Esas medidas se
          comparan con seis perfiles de forma para encontrar tu coincidencia más
          cercana. El resultado es una lectura coherente y objetiva de las
          proporciones de tu rostro — mucho más estable que calcularlo a ojo en un
          espejo.
        </p>
        <h2>Una nota honesta sobre la precisión</h2>
        <p>
          La forma del rostro es una etiqueta subjetiva, no una medición exacta, y
          los rostros límite son genuinamente ambiguos. Los resultados pueden
          cambiar según el ángulo de la foto, la iluminación, la expresión, el
          cabello y las gafas. Tratamos el análisis como una guía de estilo útil, no
          como un veredicto — y cada una de las seis formas tiene sus propias
          virtudes.
        </p>
        <h2>Ponte en contacto</h2>
        <p>
          ¿Tienes comentarios, una idea de función o una pregunta? Nos encantaría
          saber de ti — visita nuestra <a href="/contact">página de contacto</a> o
          escribe a
          <a href="mailto:hello@aifaceshapeanalyzer.com">hello@aifaceshapeanalyzer.com</a>.
        </p>
        <p>
          ¿Listo para probarlo? <a href="/#analyzer">Analiza tu rostro</a> y consulta
          tu desglose completo en segundos — completamente gratis.
        </p>
      `,
    },
    contact: {
      title: "Contáctanos — AI Face Shape Analyzer",
      description:
        "Ponte en contacto con el equipo de AI Face Shape Analyzer. Envía comentarios, ideas de funciones, solicitudes de privacidad o preguntas de soporte por correo electrónico.",
      keywords:
        "contactar analizador de forma de rostro con ia, soporte analizador de forma de rostro, comentarios analizador de forma de rostro",
      eyebrow: "Contacto",
      heading: "Contáctanos",
      lead: "¿Preguntas, comentarios o una idea de función? Nos encantaría saber de ti. La forma más rápida de contactarnos es por correo electrónico.",
      emailHeading: "Escríbenos",
      emailGeneralLabel: "General y comentarios:",
      emailPrivacyLabel: "Solicitudes de privacidad:",
      emailIntro:
        "Leemos cada mensaje y procuramos responder en unos pocos días hábiles. Para preguntas de privacidad, consulta nuestra {privacyLink}; para preguntas de uso, nuestros {termsLink}.",
      privacyLinkText: "Política de Privacidad",
      termsLinkText: "Términos y Condiciones",
      formHeading: "Envía un mensaje",
      formIntro:
        "Rellena los campos a continuación y abriremos un correo electrónico precompletado en tu aplicación de correo — solo dale a enviar.",
      labelName: "Nombre",
      labelEmail: "Tu correo electrónico",
      labelMessage: "Mensaje",
      submit: "Abrir correo para enviar",
      fallback: "¿Prefieres escribir directamente? Escribe a {email}.",
      errMissing: "Por favor, completa tu nombre, correo electrónico y mensaje.",
      errEmail: "Por favor, introduce una dirección de correo electrónico válida.",
      mailSubject: "Contacto de {name}",
    },
    privacy: {
      title: "Política de Privacidad — AI Face Shape Analyzer",
      description:
        "Cómo AI Face Shape Analyzer maneja tus fotos y datos. El análisis facial se ejecuta en tu navegador; descubre qué recopilamos, cómo lo usamos y tus opciones.",
      keywords:
        "política de privacidad del analizador de forma de rostro con ia, datos analizador de forma de rostro, privacidad analizador facial",
      eyebrow: "Legal",
      heading: "Política de Privacidad",
      lead: "Esta política explica qué información recopila AI Face Shape Analyzer, cómo se procesan tus fotos y las opciones que tienes.",
      updated: "19 de junio de 2026",
      html: `
        <p>
          AI Face Shape Analyzer («nosotros», «nos», «nuestro») opera el sitio web
          en aifaceshapeanalyzer.com (el «Servicio»). Esta Política de Privacidad
          describe cómo manejamos la información cuando usas el Servicio. Al usar el
          Servicio, aceptas las prácticas descritas aquí.
        </p>
        <h2>Tus fotos y tu cámara</h2>
        <p>
          El análisis de la forma del rostro se ejecuta en tu navegador. Cuando subes
          una foto o usas tu cámara, la imagen se procesa en tu propio dispositivo
          mediante el modelo en el navegador para medir las proporciones faciales. No
          requerimos que crees una cuenta, y no vendemos tus imágenes.
        </p>
        <p>
          Tú controlas si concedes acceso a la cámara a través de tu navegador, y
          puedes revocar ese permiso en cualquier momento en la configuración de tu
          navegador.
        </p>
        <h2>Información que recopilamos</h2>
        <p>Procuramos recopilar lo menos posible. Según cómo uses el Servicio, esto puede incluir:</p>
        <ul>
          <li>
            <strong>Datos de uso y del dispositivo.</strong> Información técnica
            estándar como el tipo de navegador, el tipo de dispositivo, el tamaño de
            pantalla, la página de referencia y la región general, recopilada para
            mantener el Servicio en funcionamiento y comprender el uso agregado.
          </li>
          <li>
            <strong>Almacenamiento local.</strong> Almacenamos pequeños valores en tu
            navegador (por ejemplo, tu preferencia de tema claro/oscuro y un contador
            de uso flexible) en tu dispositivo. Estos datos no se nos envían como un
            perfil de usuario.
          </li>
          <li>
            <strong>Mensajes que nos envías.</strong> Si nos contactas por correo
            electrónico, recibimos la información que decides compartir, como tu
            dirección de correo electrónico y el contenido de tu mensaje.
          </li>
        </ul>
        <h2>Cookies y analíticas</h2>
        <p>
          Podemos usar cookies o tecnologías similares, incluidas analíticas
          respetuosas con la privacidad, para medir el tráfico agregado y mejorar el
          Servicio. Puedes controlar las cookies a través de la configuración de tu
          navegador. Desactivarlas no debería impedir que el analizador principal
          funcione.
        </p>
        <h2>Cómo usamos la información</h2>
        <ul>
          <li>Para proporcionar, mantener y mejorar el Servicio.</li>
          <li>Para diagnosticar problemas técnicos y prevenir el abuso.</li>
          <li>Para responder a tus preguntas y solicitudes de soporte.</li>
          <li>Para cumplir con las obligaciones legales.</li>
        </ul>
        <h2>Servicios de terceros</h2>
        <p>
          Podemos apoyarnos en proveedores externos para el alojamiento, la entrega
          de contenido y las analíticas. Estos proveedores procesan datos técnicos
          limitados en nuestro nombre y se espera que los protejan. El Servicio
          también puede enlazar a sitios externos que se rigen por sus propias
          políticas de privacidad.
        </p>
        <h2>Conservación de datos</h2>
        <p>
          Conservamos los datos técnicos y analíticos solo durante el tiempo
          necesario para los fines descritos anteriormente, y luego los eliminamos o
          anonimizamos. La correspondencia por correo electrónico se conserva durante
          el tiempo necesario para atender tu solicitud y para un registro razonable.
        </p>
        <h2>Privacidad de los menores</h2>
        <p>
          El Servicio no está dirigido a menores de 13 años (o la edad mínima en tu
          jurisdicción), y no recopilamos conscientemente información personal de
          ellos. Si crees que un menor nos ha proporcionado información, contáctanos y
          tomaremos las medidas adecuadas para eliminarla.
        </p>
        <h2>Tus derechos</h2>
        <p>
          Según dónde vivas, puedes tener derechos para acceder, corregir o eliminar
          la información personal que tenemos sobre ti, o para oponerte a cierto
          procesamiento. Para hacer una solicitud, escríbenos usando la dirección de
          abajo. Responderemos conforme a la ley aplicable.
        </p>
        <h2>Cambios en esta política</h2>
        <p>
          Podemos actualizar esta Política de Privacidad de vez en cuando. Cuando lo
          hagamos, revisaremos la fecha de «Última actualización» de arriba. Los
          cambios significativos pueden destacarse en el Servicio.
        </p>
        <h2>Contáctanos</h2>
        <p>
          ¿Preguntas sobre esta política? Escribe a
          <a href="mailto:privacy@aifaceshapeanalyzer.com">privacy@aifaceshapeanalyzer.com</a>
          o visita nuestra <a href="/contact">página de contacto</a>.
        </p>
        <hr />
        <p>
          Este documento se proporciona con fines informativos generales y no
          constituye asesoramiento legal. Revísalo con un profesional cualificado
          para asegurarte de que se ajusta a tus circunstancias específicas.
        </p>
      `,
    },
    terms: {
      title: "Términos y Condiciones — AI Face Shape Analyzer",
      description:
        "Los términos que rigen tu uso de AI Face Shape Analyzer, incluido el uso aceptable, las exenciones de responsabilidad y las limitaciones de responsabilidad.",
      keywords:
        "términos del analizador de forma de rostro con ia, términos y condiciones del analizador de forma de rostro, términos de servicio",
      eyebrow: "Legal",
      heading: "Términos y Condiciones",
      lead: "Estos términos rigen tu uso de AI Face Shape Analyzer. Por favor, léelos atentamente antes de usar el Servicio.",
      updated: "19 de junio de 2026",
      html: `
        <p>
          Estos Términos y Condiciones («Términos») forman un acuerdo entre tú y
          AI Face Shape Analyzer («nosotros», «nos», «nuestro») con respecto a tu uso
          del sitio web en aifaceshapeanalyzer.com (el «Servicio»). Al acceder o usar
          el Servicio, aceptas quedar vinculado por estos Términos. Si no estás de
          acuerdo, no uses el Servicio.
        </p>
        <h2>Uso del Servicio</h2>
        <p>
          El Servicio te permite analizar una foto o una transmisión de cámara en
          vivo para estimar la forma de tu rostro. Se proporciona con fines
          personales, informativos y de entretenimiento. Debes tener al menos 13 años
          (o la edad mínima en tu jurisdicción) para usar el Servicio.
        </p>
        <h2>Uso aceptable</h2>
        <p>Aceptas no:</p>
        <ul>
          <li>Subir imágenes que no tengas derecho a usar, o imágenes de otras personas sin su consentimiento.</li>
          <li>Usar el Servicio con fines ilegales, de acoso o dañinos.</li>
          <li>Intentar interrumpir, sobrecargar, aplicar ingeniería inversa u obtener acceso no autorizado al Servicio o a sus sistemas.</li>
          <li>Extraer, revender o explotar comercialmente el Servicio o su contenido sin nuestro permiso por escrito.</li>
        </ul>
        <h2>Sin asesoramiento profesional</h2>
        <p>
          La forma del rostro es una etiqueta subjetiva, no una medición exacta. Los
          resultados son una estimación generada a partir de tu imagen y pueden
          variar según el ángulo, la iluminación, la expresión, el cabello, las gafas
          y la lente de la cámara. El Servicio no proporciona asesoramiento médico,
          psicológico, cosmético o profesional, y no debes confiar en él como tal. Usa
          los resultados únicamente como una guía de estilo general.
        </p>
        <h2>Propiedad intelectual</h2>
        <p>
          El Servicio, incluido su diseño, texto, gráficos y software subyacente, es
          propiedad nuestra o de nuestros licenciantes y está protegido por las leyes
          aplicables. Te concedemos una licencia limitada, no exclusiva e
          intransferible para usar el Servicio con su finalidad prevista. Conservas
          cualquier derecho que tengas sobre las imágenes que proporcionas; no
          reclamamos su propiedad.
        </p>
        <h2>Exención de garantías</h2>
        <p>
          El Servicio se proporciona «tal cual» y «según disponibilidad» sin garantías
          de ningún tipo, ya sean expresas o implícitas, incluidas, entre otras, la
          comerciabilidad, la idoneidad para un fin determinado, la precisión y la no
          infracción. No garantizamos que el Servicio sea ininterrumpido, libre de
          errores, ni que los resultados sean precisos o fiables.
        </p>
        <h2>Limitación de responsabilidad</h2>
        <p>
          En la máxima medida permitida por la ley, no seremos responsables de ningún
          daño indirecto, incidental, especial, consecuente o punitivo, ni de ninguna
          pérdida de datos, beneficios o reputación, derivados de tu uso o
          incapacidad de usar el Servicio. Cuando la responsabilidad no pueda
          excluirse, se limita a la máxima medida permitida por la ley.
        </p>
        <h2>Enlaces de terceros</h2>
        <p>
          El Servicio puede contener enlaces a sitios web o recursos de terceros. No
          somos responsables del contenido, las políticas o las prácticas de esos
          sitios y proporcionamos dichos enlaces solo por comodidad.
        </p>
        <h2>Cambios en el Servicio y los Términos</h2>
        <p>
          Podemos modificar o discontinuar el Servicio, o actualizar estos Términos,
          en cualquier momento. Cuando actualicemos los Términos, revisaremos la fecha
          de «Última actualización» de arriba. Tu uso continuado del Servicio después
          de que los cambios entren en vigor constituye la aceptación de los Términos
          revisados.
        </p>
        <h2>Ley aplicable</h2>
        <p>
          Estos Términos se rigen por las leyes aplicables en nuestro principal lugar
          de operación, sin tener en cuenta los principios de conflicto de leyes.
          Cualquier disputa estará sujeta a los tribunales con jurisdicción allí, a
          menos que la ley local imperativa exija lo contrario.
        </p>
        <h2>Contáctanos</h2>
        <p>
          ¿Preguntas sobre estos Términos? Escribe a
          <a href="mailto:hello@aifaceshapeanalyzer.com">hello@aifaceshapeanalyzer.com</a>
          o visita nuestra <a href="/contact">página de contacto</a>.
        </p>
        <hr />
        <p>
          Este documento se proporciona con fines informativos generales y no
          constituye asesoramiento legal. Revísalo con un profesional cualificado
          para asegurarte de que se ajusta a tus circunstancias específicas.
        </p>
      `,
    },
    notFound: {
      title: "Página no encontrada (404) — AI Face Shape Analyzer",
      description:
        "La página que buscas no existe. Vuelve al inicio para descubrir la forma de tu rostro en segundos.",
      code: "404",
      heading: "No pudimos encontrar esa página.",
      message:
        "Puede que el enlace esté roto o que la página se haya movido. Tu análisis de forma de rostro sigue justo donde lo dejaste.",
    },
    serverError: {
      title: "Algo salió mal (500) — AI Face Shape Analyzer",
      description:
        "Se produjo un error inesperado. Inténtalo de nuevo o vuelve al inicio para descubrir la forma de tu rostro en segundos.",
      code: "500",
      heading: "Algo salió mal de nuestro lado.",
      message:
        "Un error inesperado impidió que esta página se cargara. Inténtalo de nuevo en un momento, o vuelve al inicio para descubrir la forma de tu rostro.",
    },
  },

  keywords:
    "analizador de forma de rostro con ia, mejor analizador de forma de rostro con ia, analizador de forma de rostro con ia gratis, analizador de forma de rostro con ia en línea, analizador de forma de rostro con ia en línea gratis, detector de forma de rostro con ia, analizador de rostro con ia, analizador de forma de rostro ia, formas de rostro, forma de rostro, cuál es mi forma de rostro, cómo determinar la forma del rostro, analizador facial, calculadora de forma de rostro, analizador de atractivo facial",
};
