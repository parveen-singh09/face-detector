import { type UIStrings } from "./en";

export const pt: UIStrings = {
  nav: {
    logoText: "Analisador de Formato de Rosto",
    logoAria: "AI Face Shape Analyzer — início",
    primaryAria: "Principal",
    links: {
      shapes: "Formatos de rosto",
      about: "Sobre",
      contact: "Contato",
      privacy: "Privacidade",
      terms: "T&C",
    },
    themeToggleAria: "Alternar modo escuro",
    themeToggleTitle: "Alternar tema",
    menuOpenAria: "Abrir menu",
    menuCloseAria: "Fechar menu",
    langLabel: "Idioma",
  },

  footer: {
    logoAria: "AI Face Shape Analyzer — início",
    brandName: "Analisador de Formato de Rosto",
    tagline:
      "Descubra o formato do seu rosto em segundos — grátis e preciso, com uma análise completa entre os seis formatos.",
    productEyebrow: "Produto",
    productLinks: {
      analyze: "Analisar meu rosto",
      how: "Como funciona",
      shapes: "Formatos de rosto",
    },
    aboutEyebrow: "Sobre",
    aboutLinks: {
      aboutTool: "Sobre a ferramenta",
      faq: "Perguntas frequentes",
    },
    companyEyebrow: "Empresa",
    companyLinks: {
      about: "Sobre nós",
      contact: "Fale conosco",
      privacy: "Política de privacidade",
      terms: "Termos e condições",
    },
    mono: "Seis formatos · malha facial de 478 pontos",
    disclaimer:
      "Aviso: o formato do rosto é um rótulo subjetivo, não uma medida exata. Os resultados são uma estimativa gerada a partir da sua foto e podem variar conforme o ângulo, a iluminação, a expressão, o cabelo, os óculos e a lente da câmera. Muitos rostos são uma mistura de dois formatos — use isto como um guia de estilo, não como conselho definitivo ou profissional.",
  },

  hero: {
    titleBefore: "Analisador de ",
    titleAccent: "Formato de Rosto",
    titleAfter: " com IA grátis",
    sub: "Envie uma foto ou use sua câmera para uma análise precisa do formato do rosto — com uma análise completa entre os seis formatos.",
    ctaPrimary: "Analisar meu rosto",
    ctaSecondary: "Como funciona",
    trust: {
      free: "Grátis para sempre",
      mesh: "Malha facial ao vivo",
      ranked: "Seis formatos classificados",
    },
  },

  howItWorks: {
    eyebrow: "Como funciona",
    heading: "Três passos para o formato do seu rosto.",
  },
  steps: [
    {
      n: "01",
      title: "Envie uma foto ou abra a câmera",
      body: "Escolha uma foto nítida e de frente (até 10MB) ou use sua câmera para uma leitura ao vivo.",
    },
    {
      n: "02",
      title: "Mapeamos 478 pontos faciais",
      body: "Um modelo no próprio dispositivo traça a malha do seu rosto e mede as proporções de mandíbula, maçãs do rosto, testa e comprimento.",
    },
    {
      n: "03",
      title: "Receba uma análise completa",
      body: "Veja o formato que mais combina com você, uma pontuação de confiança e uma porcentagem classificada entre os seis formatos.",
    },
  ],

  shapesSection: {
    eyebrow: "Referência",
    heading: "Os seis formatos de rosto.",
    sub: "Cada resultado é pontuado em relação a esses seis perfis. A maioria das pessoas se inclina para um, com traços de outro — por isso mostramos a mistura completa.",
    exampleAlt: "Exemplo de um rosto com formato {shape}",
  },
  shapeLabels: {
    oval: "Oval",
    round: "Redondo",
    square: "Quadrado",
    rectangle: "Retangular",
    heart: "Coração",
    diamond: "Diamante",
  },
  shapeDescriptions: {
    oval: "Proporções equilibradas, com comprimento do rosto maior que a largura e uma mandíbula suavemente arredondada. Amplamente considerado o formato mais versátil.",
    round:
      "Ângulos suaves, com comprimento e largura do rosto próximos, bochechas mais cheias e mandíbula e queixo arredondados.",
    square:
      "Uma mandíbula forte e angular, com testa, maçãs do rosto e mandíbula de larguras próximas — um formato marcante e estruturado.",
    rectangle:
      "Como o quadrado, mas mais longo — o comprimento do rosto supera claramente a largura, com testa, maçãs do rosto e mandíbula quase paralelas.",
    heart:
      "Uma testa e maçãs do rosto mais largas que se afinam em direção a um queixo mais estreito, muitas vezes pontudo — a clássica silhueta de coração.",
    diamond:
      "As maçãs do rosto são o ponto mais largo, com testa e mandíbula mais estreitas e um queixo definido e pontudo.",
  },

  analyzer: {
    eyebrow: "Analisador",
    heading: "Detecte o formato do seu rosto",
    sub: "Envie uma foto nítida e de frente ou use sua câmera.",
    tablistAria: "Método de entrada",
    tabUpload: "Enviar foto",
    tabCamera: "Usar câmera",
    fileInputAria: "Escolha uma foto para analisar",
    dropzoneTitle: "Solte uma foto ou clique para procurar",
    dropzoneHint: "JPG, PNG ou WebP · até 10MB",
    previewImgAlt: "Sua foto enviada",
    cameraPreviewAria: "Pré-visualização da câmera",
    loadingModel: "Carregando o modelo no dispositivo…",
    btnAnalyze: "Analisar meu rosto",
    btnCapture: "Capturar e analisar",
    btnReset: "Analisar outra",
    uploadTipsAria: "Dicas para uma leitura precisa",
    uploadTips: [
      "Use uma foto nítida e definida — bem iluminada, em foco e olhando diretamente para a câmera.",
      "Mantenha o fundo simples e sem distrações para que apenas o seu rosto se destaque.",
      "Capriche — cabelo fora do rosto, óculos removidos e uma expressão neutra.",
    ],
    camTipsAria: "Dicas para uma leitura precisa",
    camTips: [
      "Tire os óculos — as armações escondem as bordas das bochechas e das sobrancelhas.",
      "Olhe diretamente para a câmera, com o cabelo fora do rosto.",
      "Clique para capturar 5 leituras — fazemos a média delas para mais precisão.",
    ],
    resultEyebrow: "O formato do seu rosto",
    breakdownTitle: "Análise completa",
    resultDisclaimer:
      "Atenção: o formato do rosto é um rótulo subjetivo, não uma ciência exata. Os resultados são uma estimativa e podem variar conforme o ângulo da foto, a iluminação, a expressão, o cabelo cobrindo o rosto, os óculos e a lente da câmera. Muitos rostos são uma mistura natural de dois formatos — trate isto como um guia útil, não como um veredito definitivo.",
    idleTitle: "O que você vai receber",
    idleItems: [
      "O formato que mais combina com você, com uma pontuação de confiança",
      "Uma porcentagem classificada entre todos os seis formatos de rosto",
      "Uma observação quando seu rosto é uma mistura de dois formatos",
    ],
    msg: {
      analyzing: "Analisando…",
      rateLimited:
        "Você atingiu o limite por hora. Tente novamente {retryAfter}.",
      fileType: "Escolha uma imagem JPG, PNG ou WebP.",
      fileTooLarge: "Essa imagem tem mais de 10MB. Escolha um arquivo menor.",
      readError:
        "Não foi possível ler essa imagem. Fotos HEIC do iPhone não são suportadas — use JPG, PNG ou WebP.",
      noFace: "Nenhum rosto detectado. Tente uma foto mais nítida e de frente.",
      analyzeError:
        "Algo deu errado ao analisar essa imagem. Tente novamente.",
      noCameraSupport: "Seu navegador não suporta acesso à câmera.",
      cameraError:
        "Não foi possível acessar a câmera. Verifique as permissões ou use o envio de foto.",
      noFaceYet:
        "Nenhum rosto detectado ainda. Centralize o rosto e clique para capturar.",
      captureError: "Algo deu errado durante a captura. Tente novamente.",
      captureReading: "Leitura de captura - [{n}/{total}]",
      confidence: "{pct}% de confiança",
      blendDesc: "Predominantemente {top} com traços de {runnerUp}. {desc}",
    },
  },

  seo: {
    eyebrow: "Sobre a ferramenta",
    heading: "O analisador de formato de rosto com IA grátis, online.",
    html: `
      <p>
        Nosso <strong>analisador de formato de rosto com IA</strong> é uma ferramenta
        gratuita e online que diz qual é o formato do seu rosto em segundos — sem
        cadastro e sem download
        necessário. Se você já se perguntou
        <em>“qual é o formato do meu rosto?”</em> e não soube como responder, esta
        é a forma rápida de descobrir. Basta enviar uma foto nítida e de
        frente ou abrir sua câmera, e o <strong>analisador de rosto com IA</strong>
        faz o resto: ele mapeia 478 pontos faciais, mede a geometria do
        seu rosto e classifica cada resultado entre os seis formatos comuns.
      </p>
      <h3>O que torna o melhor analisador de formato de rosto com IA</h3>
      <p>
        A maioria das ferramentas entrega um único rótulo e torce para que esteja
        certo. Construímos o que acreditamos ser o <strong>melhor analisador de
        formato de rosto com IA</strong> mostrando o quadro completo. Como um
        <strong>detector e analisador de formato de rosto com IA</strong> combinado,
        ele retorna uma pontuação de confiança e uma porcentagem classificada
        para oval, redondo, quadrado, retangular, coração e
        diamante — porque rostos reais costumam ser uma mistura de dois formatos, em vez de
        uma combinação perfeita. Uma sobreposição de malha facial ao vivo mostra exatamente o que o modelo
        está lendo enquanto trabalha, para que a análise nunca pareça uma caixa-preta.
      </p>
      <h3>Como determinar o formato do seu rosto</h3>
      <p>
        Querendo saber <strong>como determinar o formato do rosto</strong> sem um espelho
        e uma fita métrica? O método clássico compara quatro medidas —
        largura da testa, largura das maçãs do rosto, largura da mandíbula e comprimento do rosto — e
        as pondera entre si. É exatamente isso que esta
        <strong>calculadora de formato de rosto</strong> automatiza. Onde um
        <strong>analisador de rosto</strong> manual deixa espaço para adivinhação, nosso
        <strong>analisador de formato de rosto com IA</strong> lê proporções antropométricas
        precisas e a angularidade da mandíbula diretamente dos pontos faciais, para que você obtenha uma
        resposta consistente todas as vezes. Para a leitura mais precisa, prenda o cabelo
        para longe do rosto, remova os óculos, mantenha uma expressão neutra e use uma iluminação uniforme e
        de frente.
      </p>
      <h3>Grátis para usar, online</h3>
      <p>
        Esta ferramenta de <strong>analisador de formato de rosto com IA online grátis</strong>
        roda online sem nada para instalar. Funciona da mesma forma no celular ou no computador,
        e é genuinamente um <strong>analisador de formato de rosto com IA gratuito</strong>,
        sem limites de uso para uso normal.
      </p>
      <h3>De formatos de rosto a escolhas que valorizam</h3>
      <p>
        Conhecer o <strong>formato do seu rosto</strong> é o ponto de partida para melhores
        escolhas no dia a dia. As pessoas o usam para escolher cortes e penteados, escolher
        armações de óculos e óculos de sol que complementem suas proporções, modelar
        sobrancelhas e definir a maquiagem ou o estilo da barba. Embora algumas pessoas pesquisem
        um <strong>analisador de atratividade facial</strong>, a beleza é subjetiva e
        o formato do rosto não é uma nota — cada um dos seis
        <strong>formatos de rosto</strong> tem seus próprios pontos fortes, e o objetivo aqui é
        ajudar você a se vestir com confiança, não classificar rostos. Trate o resultado como
        um guia útil, e não como um veredito.
      </p>
      <p>
        Pronto para parar de adivinhar? Role para cima até o
        <a href="#analyzer">analisador</a>, adicione uma foto ou abra sua câmera e deixe
        o <strong>analisador de formato de rosto com IA</strong> mostrar sua análise completa
        em segundos — totalmente grátis.
      </p>
    `,
  },

  faqSection: {
    eyebrow: "Perguntas frequentes",
    heading: "Perguntas comuns.",
  },
  faqs: [
    {
      q: "O que é um analisador de formato de rosto?",
      a: "Um analisador de formato de rosto é uma ferramenta que examina as proporções do seu rosto — testa, maçãs do rosto, mandíbula e comprimento — e diz de qual formato você está mais próximo. Nosso analisador de formato de rosto com IA faz isso automaticamente mapeando 478 pontos faciais a partir de uma foto ou da sua câmera e, em seguida, classificando sua correspondência entre todos os seis formatos.",
    },
    {
      q: "Como eu determino o formato do meu rosto?",
      a: "Para determinar o formato do seu rosto, compare quatro coisas: a largura da sua testa, das suas maçãs do rosto e da sua mandíbula, além do comprimento total do rosto. O formato cujas proporções combinam com as suas é o formato do seu rosto. Este analisador mede essas proporções para você automaticamente, então não há necessidade de adivinhação nem de fita métrica.",
    },
    {
      q: "Qual formato de rosto eu tenho?",
      a: "Você provavelmente tem um dos seis formatos de rosto comuns: oval, redondo, quadrado, retangular, coração ou diamante. Envie uma foto nítida e de frente ou abra sua câmera, e o analisador dirá qual deles você tem, junto com uma pontuação de confiança e uma análise completa em porcentagem.",
    },
    {
      q: "Qual é o formato do meu rosto?",
      a: "O formato do seu rosto é o contorno geral do seu rosto, definido pela largura da sua testa, maçãs do rosto e mandíbula em relação ao comprimento do rosto. A forma mais rápida de descobrir é passar uma foto pelo analisador acima — ele lê a geometria real do seu rosto e mostra a correspondência mais próxima em segundos.",
    },
    {
      q: "Que formato tem o meu rosto?",
      a: "O formato do seu rosto se resume ao seu ponto mais largo e ao seu comprimento. Se o seu rosto for claramente mais longo do que largo, ele pode ser oval ou retangular; se largura e comprimento forem semelhantes, redondo ou quadrado; se a sua testa for a parte mais larga, coração ou diamante. O analisador o identifica com precisão a partir das suas medidas.",
    },
    {
      q: "Como posso determinar o formato do meu rosto?",
      a: "A maneira mais fácil é deixar a IA fazer isso: prenda o cabelo para trás, olhe diretamente para a câmera e envie uma foto ou use a câmera ao vivo. A ferramenta mede as proporções da sua mandíbula, maçãs do rosto, testa e comprimento e retorna o formato do seu rosto instantaneamente — muito mais consistente do que avaliar no espelho.",
    },
    {
      q: "Como posso saber o formato do meu rosto?",
      a: "Você pode saber o formato do seu rosto encontrando a característica mais larga dele e verificando se o seu rosto é mais longo do que largo. Em vez de traçar o seu contorno em um espelho, este analisador diz o formato do seu rosto a partir de uma única foto, sem medições manuais.",
    },
    {
      q: "Como sei qual formato de rosto eu tenho?",
      a: "Observe três sinais: onde o seu rosto é mais largo, quão angular ou suave é a sua mandíbula e se o seu rosto é longo ou equilibrado. O analisador lê os três a partir de 478 pontos faciais e diz exatamente qual formato de rosto você tem, além de o quanto você corresponde aos formatos seguintes.",
    },
    {
      q: "Qual é o meu formato de rosto?",
      a: "Seja qual for o formato do seu rosto, o analisador pode nomeá-lo em segundos. Adicione uma foto ou abra sua câmera acima e você receberá o formato que mais combina com você, uma porcentagem de confiança e uma análise classificada entre oval, redondo, quadrado, retangular, coração e diamante.",
    },
    {
      q: "Como posso descobrir o formato do meu rosto?",
      a: "Você pode descobrir o formato do seu rosto gratuitamente aqui mesmo — sem cadastro e sem download. Envie uma foto de frente ou use sua câmera, e a IA mede as proporções do seu rosto e mostra o resultado em segundos.",
    },
    {
      q: "Como encontro o formato do meu rosto?",
      a: "Para encontrar o formato do seu rosto, use uma foto nítida e bem iluminada, com o cabelo fora do rosto e os óculos removidos, e então passe-a pelo analisador. Ele compara as proporções medidas com todos os seis perfis de formato e encontra a correspondência mais próxima para você automaticamente.",
    },
    {
      q: "Como identifico o formato do meu rosto?",
      a: "Identificar o formato do seu rosto significa relacionar as larguras da sua testa, maçãs do rosto e mandíbula e o comprimento do seu rosto a um dos seis perfis padrão. O analisador o identifica com precisão usando a geometria dos pontos faciais, para que você obtenha uma resposta objetiva em vez de um palpite subjetivo.",
    },
  ],

  contentPage: {
    lastUpdated: "Última atualização:",
  },
  mtNotice:
    "Esta página foi traduzida automaticamente. A versão em inglês é a oficial; em caso de qualquer divergência, prevalece o <a href=\"{enHref}\">original em inglês</a>.",

  error: {
    eyebrow: "Erro {code}",
    ctaHome: "Voltar ao início",
    ctaAnalyze: "Analisar meu rosto",
  },

  pages: {
    home: {
      title: "Analisador de Formato de Rosto com IA Grátis Online — Detecte o Formato do Seu Rosto",
      description:
        "Analisador de formato de rosto com IA grátis online — envie uma foto ou use sua câmera para descobrir o formato do seu rosto instantaneamente, com uma análise completa entre os 6 formatos. Sem cadastro.",
    },
    about: {
      title: "Sobre Nós — AI Face Shape Analyzer",
      description:
        "Conheça o AI Face Shape Analyzer — uma ferramenta gratuita e rápida que detecta o formato do seu rosto a partir de uma foto ou câmera ao vivo, com uma análise completa entre os seis formatos.",
      keywords:
        "sobre o analisador de formato de rosto com ia, analisador de formato de rosto, quem criou o analisador de formato de rosto",
      eyebrow: "Sobre",
      heading: "Sobre o AI Face Shape Analyzer",
      lead: "Criamos um analisador de formato de rosto gratuito e preciso que mostra o quadro completo — não apenas um rótulo de uma palavra.",
      html: `
        <p>
          O <strong>AI Face Shape Analyzer</strong> é uma ferramenta online gratuita que detecta
          o formato do seu rosto a partir de uma foto ou da sua câmera ao vivo. Em vez de entregar
          um único palpite, ele mapeia 478 pontos faciais, mede a geometria real do
          seu rosto e classifica o seu resultado entre todos os seis formatos comuns — oval,
          redondo, quadrado, retangular, coração e diamante.
        </p>
        <h2>Por que criamos isto</h2>
        <p>
          “Qual é o formato do meu rosto?” é uma das perguntas mais comuns que as pessoas fazem
          antes de escolher um corte de cabelo, um par de óculos ou um novo estilo de maquiagem ou
          de cuidados pessoais. A maioria das ferramentas responde com um único rótulo e deixa você se perguntando o quão
          confiável essa resposta realmente é. Queríamos algo mais honesto: uma ferramenta
          que mostra a análise completa, porque rostos reais costumam ser uma mistura de dois
          formatos, em vez de uma combinação perfeita.
        </p>
        <h2>O que o torna diferente</h2>
        <ul>
          <li>
            <strong>Uma malha facial ao vivo.</strong> Uma sobreposição em tempo real mostra exatamente o que
            o modelo está lendo enquanto trabalha, para que a análise nunca pareça uma
            caixa-preta.
          </li>
          <li>
            <strong>Uma análise completa de probabilidade.</strong> Você obtém o formato que mais combina
            com você, uma pontuação de confiança e uma porcentagem classificada entre todos os seis formatos
            — além da detecção de mistura de dois formatos.
          </li>
          <li>
            <strong>Gratuito e sem atritos.</strong> Sem cadastro, sem download e sem
            limites de uso para uso normal. Funciona da mesma forma no celular ou no computador.
          </li>
          <li>
            <strong>Feito para todos.</strong> A interface é acessível por
            design, com suporte a teclado, estados de foco claros e
            suporte a movimento reduzido.
          </li>
        </ul>
        <h2>Como funciona</h2>
        <p>
          Quando você envia uma foto ou abre sua câmera, um modelo no navegador traça
          o seu rosto e mede as proporções de mandíbula, maçãs do rosto, testa e comprimento, junto
          com a angularidade da mandíbula. Essas medidas são comparadas com seis perfis de formato
          para encontrar a sua correspondência mais próxima. O resultado é uma leitura consistente e objetiva
          das proporções do seu rosto — muito mais estável do que avaliar em um
          espelho.
        </p>
        <h2>Uma observação honesta sobre a precisão</h2>
        <p>
          O formato do rosto é um rótulo subjetivo, não uma medida exata, e rostos no
          limite são genuinamente ambíguos. Os resultados podem mudar conforme o ângulo da foto, a
          iluminação, a expressão, o cabelo e os óculos. Tratamos a análise como um guia útil
          de estilo, não como um veredito — e cada um dos seis formatos tem seus próprios
          pontos fortes.
        </p>
        <h2>Entre em contato</h2>
        <p>
          Tem comentários, uma ideia de funcionalidade ou uma dúvida? Adoraríamos saber de você —
          acesse nossa <a href="/contact">página de contato</a> ou envie um e-mail para
          <a href="mailto:hello@aifaceshapeanalyzer.com">hello@aifaceshapeanalyzer.com</a>.
        </p>
        <p>
          Pronto para experimentar? <a href="/#analyzer">Analise seu rosto</a> e veja sua
          análise completa em segundos — totalmente grátis.
        </p>
      `,
    },
    contact: {
      title: "Fale Conosco — AI Face Shape Analyzer",
      description:
        "Entre em contato com a equipe do AI Face Shape Analyzer. Envie comentários, ideias de funcionalidades, solicitações de privacidade ou dúvidas de suporte por e-mail.",
      keywords:
        "contato analisador de formato de rosto com ia, suporte analisador de formato de rosto, comentários analisador de formato de rosto",
      eyebrow: "Contato",
      heading: "Fale Conosco",
      lead: "Dúvidas, comentários ou uma ideia de funcionalidade? Adoraríamos saber de você. A forma mais rápida de nos contatar é por e-mail.",
      emailHeading: "Envie-nos um e-mail",
      emailGeneralLabel: "Geral e comentários:",
      emailPrivacyLabel: "Solicitações de privacidade:",
      emailIntro:
        "Lemos todas as mensagens e procuramos responder em alguns dias úteis. Para dúvidas de privacidade, consulte nossa {privacyLink}; para dúvidas de uso, nossos {termsLink}.",
      privacyLinkText: "Política de Privacidade",
      termsLinkText: "Termos e Condições",
      formHeading: "Enviar uma mensagem",
      formIntro:
        "Preencha os campos abaixo e abriremos um e-mail pré-preenchido no seu aplicativo de e-mail — basta apertar enviar.",
      labelName: "Nome",
      labelEmail: "Seu e-mail",
      labelMessage: "Mensagem",
      submit: "Abrir e-mail para enviar",
      fallback: "Prefere escrever diretamente? Envie um e-mail para {email}.",
      errMissing: "Preencha seu nome, e-mail e mensagem.",
      errEmail: "Insira um endereço de e-mail válido.",
      mailSubject: "Contato de {name}",
    },
    privacy: {
      title: "Política de Privacidade — AI Face Shape Analyzer",
      description:
        "Como o AI Face Shape Analyzer trata suas fotos e dados. A análise facial roda no seu navegador; saiba o que coletamos, como usamos e quais são as suas opções.",
      keywords:
        "política de privacidade do analisador de formato de rosto com ia, dados do analisador de formato de rosto, privacidade do analisador de rosto",
      eyebrow: "Jurídico",
      heading: "Política de Privacidade",
      lead: "Esta política explica quais informações o AI Face Shape Analyzer coleta, como suas fotos são processadas e quais opções você tem.",
      updated: "19 de junho de 2026",
      html: `
        <p>
          O AI Face Shape Analyzer (“nós”, “nos”, “nosso”) opera o site em
          aifaceshapeanalyzer.com (o “Serviço”). Esta Política de Privacidade descreve como
          tratamos as informações quando você usa o Serviço. Ao usar o Serviço, você
          concorda com as práticas descritas aqui.
        </p>
        <h2>Suas fotos e câmera</h2>
        <p>
          A análise do formato do rosto roda no seu navegador. Quando você envia uma foto ou
          usa sua câmera, a imagem é processada no seu próprio dispositivo pelo
          modelo no navegador para medir as proporções faciais. Não exigimos que você
          crie uma conta e não vendemos suas imagens.
        </p>
        <p>
          Você controla se concede acesso à câmera por meio do seu navegador, e pode
          revogar essa permissão a qualquer momento nas configurações do seu navegador.
        </p>
        <h2>Informações que coletamos</h2>
        <p>Procuramos coletar o mínimo possível. Dependendo de como você usa o Serviço, isso pode incluir:</p>
        <ul>
          <li>
            <strong>Dados de uso e do dispositivo.</strong> Informações técnicas padrão,
            como tipo de navegador, tipo de dispositivo, tamanho da tela, página de origem e
            região geral, coletadas para manter o Serviço funcionando e para entender
            o uso agregado.
          </li>
          <li>
            <strong>Armazenamento local.</strong> Armazenamos pequenos valores no seu navegador
            (por exemplo, sua preferência de tema claro/escuro e um contador de uso flexível)
            no seu dispositivo. Esses dados não são enviados a nós como um perfil de usuário.
          </li>
          <li>
            <strong>Mensagens que você nos envia.</strong> Se você nos contatar por e-mail,
            recebemos as informações que você escolhe compartilhar, como seu endereço de e-mail
            e o conteúdo da sua mensagem.
          </li>
        </ul>
        <h2>Cookies e análises</h2>
        <p>
          Podemos usar cookies ou tecnologias semelhantes, incluindo análises
          que respeitam a privacidade, para medir o tráfego agregado e melhorar o Serviço. Você pode
          controlar os cookies nas configurações do seu navegador. Desativá-los não deve
          impedir o funcionamento do analisador principal.
        </p>
        <h2>Como usamos as informações</h2>
        <ul>
          <li>Para fornecer, manter e melhorar o Serviço.</li>
          <li>Para diagnosticar problemas técnicos e prevenir abusos.</li>
          <li>Para responder às suas dúvidas e solicitações de suporte.</li>
          <li>Para cumprir obrigações legais.</li>
        </ul>
        <h2>Serviços de terceiros</h2>
        <p>
          Podemos contar com provedores terceiros para hospedagem, entrega de conteúdo e
          análises. Esses provedores processam dados técnicos limitados em nosso nome
          e devem protegê-los. O Serviço também pode conter links para sites
          externos regidos por suas próprias políticas de privacidade.
        </p>
        <h2>Retenção de dados</h2>
        <p>
          Retemos dados técnicos e de análise apenas pelo tempo necessário para os
          propósitos descritos acima, e então os excluímos ou anonimizamos. A correspondência por e-mail
          é mantida pelo tempo necessário para atender à sua solicitação e por uma manutenção razoável
          de registros.
        </p>
        <h2>Privacidade das crianças</h2>
        <p>
          O Serviço não é direcionado a crianças menores de 13 anos (ou a idade mínima na
          sua jurisdição), e não coletamos intencionalmente informações pessoais
          delas. Se você acredita que uma criança nos forneceu informações, entre em contato
          e tomaremos as medidas apropriadas para removê-las.
        </p>
        <h2>Seus direitos</h2>
        <p>
          Dependendo de onde você mora, você pode ter o direito de acessar, corrigir ou
          excluir informações pessoais que mantemos sobre você, ou de se opor a certo
          processamento. Para fazer uma solicitação, envie-nos um e-mail usando o endereço abaixo. Nós
          responderemos de acordo com a legislação aplicável.
        </p>
        <h2>Alterações nesta política</h2>
        <p>
          Podemos atualizar esta Política de Privacidade de tempos em tempos. Quando o fizermos, nós
          revisaremos a data de “Última atualização” acima. Alterações significativas podem ser
          destacadas no Serviço.
        </p>
        <h2>Fale conosco</h2>
        <p>
          Dúvidas sobre esta política? Envie um e-mail para
          <a href="mailto:privacy@aifaceshapeanalyzer.com">privacy@aifaceshapeanalyzer.com</a>
          ou visite nossa <a href="/contact">página de contato</a>.
        </p>
        <hr />
        <p>
          Este documento é fornecido para informação geral e não constitui aconselhamento jurídico.
          Por favor, revise-o com um profissional qualificado para garantir que se adeque às suas
          circunstâncias específicas.
        </p>
      `,
    },
    terms: {
      title: "Termos e Condições — AI Face Shape Analyzer",
      description:
        "Os termos que regem o seu uso do AI Face Shape Analyzer, incluindo uso aceitável, isenções de responsabilidade e limitações de responsabilidade.",
      keywords:
        "termos do analisador de formato de rosto com ia, termos e condições do analisador de formato de rosto, termos de serviço",
      eyebrow: "Jurídico",
      heading: "Termos e Condições",
      lead: "Estes termos regem o seu uso do AI Face Shape Analyzer. Por favor, leia-os com atenção antes de usar o Serviço.",
      updated: "19 de junho de 2026",
      html: `
        <p>
          Estes Termos e Condições (“Termos”) formam um acordo entre você e o
          AI Face Shape Analyzer (“nós”, “nos”, “nosso”) relativo ao seu uso do
          site em aifaceshapeanalyzer.com (o “Serviço”). Ao acessar ou usar
          o Serviço, você concorda em ficar vinculado a estes Termos. Se você não concordar, não
          use o Serviço.
        </p>
        <h2>Uso do Serviço</h2>
        <p>
          O Serviço permite que você analise uma foto ou um feed de câmera ao vivo para estimar o formato
          do seu rosto. Ele é fornecido para fins pessoais, informativos e de entretenimento.
          Você deve ter pelo menos 13 anos de idade (ou a idade mínima na sua
          jurisdição) para usar o Serviço.
        </p>
        <h2>Uso aceitável</h2>
        <p>Você concorda em não:</p>
        <ul>
          <li>Enviar imagens que você não tem o direito de usar, ou imagens de outras pessoas sem o consentimento delas.</li>
          <li>Usar o Serviço para fins ilegais, de assédio ou prejudiciais.</li>
          <li>Tentar interromper, sobrecarregar, fazer engenharia reversa ou obter acesso não autorizado ao Serviço ou aos seus sistemas.</li>
          <li>Extrair, revender ou explorar comercialmente o Serviço ou seu conteúdo sem nossa permissão por escrito.</li>
        </ul>
        <h2>Sem aconselhamento profissional</h2>
        <p>
          O formato do rosto é um rótulo subjetivo, não uma medida exata. Os resultados são uma
          estimativa gerada a partir da sua imagem e podem variar conforme o ângulo, a iluminação,
          a expressão, o cabelo, os óculos e a lente da câmera. O Serviço não fornece
          aconselhamento médico, psicológico, cosmético ou profissional, e você não deve
          confiar nele como tal. Use os resultados apenas como um guia geral de estilo.
        </p>
        <h2>Propriedade intelectual</h2>
        <p>
          O Serviço, incluindo seu design, texto, gráficos e software subjacente,
          é de nossa propriedade ou de nossos licenciadores e é protegido pelas leis aplicáveis. Nós
          concedemos a você uma licença limitada, não exclusiva e intransferível para usar o
          Serviço para a sua finalidade pretendida. Você mantém todos os direitos que tiver sobre as
          imagens que fornecer; não reivindicamos a propriedade delas.
        </p>
        <h2>Isenção de garantias</h2>
        <p>
          O Serviço é fornecido “como está” e “conforme disponível”, sem garantias de
          qualquer tipo, sejam expressas ou implícitas, incluindo, mas não se limitando a,
          comerciabilidade, adequação a uma finalidade específica, exatidão e
          não violação. Não garantimos que o Serviço será ininterrupto,
          livre de erros, ou que os resultados serão precisos ou confiáveis.
        </p>
        <h2>Limitação de responsabilidade</h2>
        <p>
          Na máxima extensão permitida por lei, não seremos responsáveis por quaisquer
          danos indiretos, incidentais, especiais, consequenciais ou punitivos, ou por qualquer
          perda de dados, lucros ou reputação, decorrentes do seu uso ou da impossibilidade
          de usar o Serviço. Onde a responsabilidade não puder ser excluída, ela é limitada à
          máxima extensão permitida por lei.
        </p>
        <h2>Links de terceiros</h2>
        <p>
          O Serviço pode conter links para sites ou recursos de terceiros. Nós não somos
          responsáveis pelo conteúdo, pelas políticas ou pelas práticas desses sites e
          fornecemos tais links apenas por conveniência.
        </p>
        <h2>Alterações no Serviço e nos Termos</h2>
        <p>
          Podemos modificar ou descontinuar o Serviço, ou atualizar estes Termos, a qualquer
          momento. Quando atualizarmos os Termos, revisaremos a data de “Última atualização”
          acima. O seu uso contínuo do Serviço após as alterações entrarem em vigor
          constitui aceitação dos Termos revisados.
        </p>
        <h2>Lei aplicável</h2>
        <p>
          Estes Termos são regidos pelas leis aplicáveis no nosso principal local de
          operação, sem consideração aos princípios de conflito de leis. Quaisquer disputas serão
          submetidas aos tribunais com jurisdição naquele local, salvo se de outra forma
          exigido por lei local obrigatória.
        </p>
        <h2>Fale conosco</h2>
        <p>
          Dúvidas sobre estes Termos? Envie um e-mail para
          <a href="mailto:hello@aifaceshapeanalyzer.com">hello@aifaceshapeanalyzer.com</a>
          ou visite nossa <a href="/contact">página de contato</a>.
        </p>
        <hr />
        <p>
          Este documento é fornecido para informação geral e não constitui aconselhamento jurídico.
          Por favor, revise-o com um profissional qualificado para garantir que se adeque às suas
          circunstâncias específicas.
        </p>
      `,
    },
    notFound: {
      title: "Página não encontrada (404) — AI Face Shape Analyzer",
      description:
        "A página que você procura não existe. Volte para o início para descobrir o formato do seu rosto em segundos.",
      code: "404",
      heading: "Não conseguimos encontrar essa página.",
      message:
        "O link pode estar quebrado ou a página pode ter sido movida. Sua análise de formato de rosto continua exatamente onde você a deixou.",
    },
    serverError: {
      title: "Algo deu errado (500) — AI Face Shape Analyzer",
      description:
        "Ocorreu um erro inesperado. Tente novamente ou volte para o início para descobrir o formato do seu rosto em segundos.",
      code: "500",
      heading: "Algo deu errado do nosso lado.",
      message:
        "Um erro inesperado impediu o carregamento desta página. Tente novamente em um instante ou volte para o início para descobrir o formato do seu rosto.",
    },
  },

  keywords:
    "analisador de formato de rosto com ia, melhor analisador de formato de rosto com ia, analisador de formato de rosto com ia grátis, analisador de formato de rosto com ia online, analisador de formato de rosto com ia online grátis, detector de formato de rosto com ia, analisador de rosto com ia, formato de rosto com ia, formatos de rosto, formato de rosto, qual é o formato do meu rosto, como determinar o formato do rosto, analisador de rosto, calculadora de formato de rosto, analisador de atratividade facial",
};
