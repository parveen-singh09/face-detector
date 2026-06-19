/**
 * en.ts — the English UI dictionary and the SOURCE OF TRUTH for every locale.
 *
 * The exported `UIStrings` type is derived from this object, so every other
 * locale file (`./es.ts`, `./fr.ts`, …) must provide the exact same key shape;
 * a missing or mistyped key is a compile error. Translators replace the string
 * VALUES only — never the keys, the HTML tag structure, the `{placeholders}`,
 * or the hrefs inside prose.
 *
 * Prose-heavy content (the homepage SEO section and the legal/about pages) is
 * stored as HTML strings rendered with `set:html`. Keep the markup identical
 * across locales — translate the text nodes, leave tags/links/attributes alone.
 */

export const en = {
  // ── Navigation ──────────────────────────────────────────────────────────
  nav: {
    logoText: "Face Shape Analyzer",
    logoAria: "AI Face Shape Analyzer — home",
    primaryAria: "Primary",
    links: {
      shapes: "Face shapes",
      about: "About",
      contact: "Contact",
      privacy: "Privacy",
      terms: "T&C",
    },
    themeToggleAria: "Toggle dark mode",
    themeToggleTitle: "Toggle theme",
    menuOpenAria: "Open menu",
    menuCloseAria: "Close menu",
    langLabel: "Language",
  },

  // ── Footer ──────────────────────────────────────────────────────────────
  footer: {
    logoAria: "AI Face Shape Analyzer — home",
    brandName: "Face Shape Analyzer",
    tagline:
      "Find your face shape in seconds — free and accurate, with a full breakdown across all six shapes.",
    productEyebrow: "Product",
    productLinks: {
      analyze: "Analyze my face",
      how: "How it works",
      shapes: "Face shapes",
    },
    aboutEyebrow: "About",
    aboutLinks: {
      aboutTool: "About the tool",
      faq: "FAQ",
    },
    companyEyebrow: "Company",
    companyLinks: {
      about: "About us",
      contact: "Contact us",
      privacy: "Privacy policy",
      terms: "Terms & conditions",
    },
    mono: "Six shapes · 478-point face mesh",
    disclaimer:
      "Disclaimer: face shape is a subjective label, not an exact measurement. Results are an estimate generated from your photo and can vary with angle, lighting, expression, hair, glasses, and camera lens. Many faces are a blend of two shapes — use this as a guide for styling, not as definitive or professional advice.",
  },

  // ── Hero ────────────────────────────────────────────────────────────────
  hero: {
    // The headline is split so "Face Shape" can carry the gradient accent.
    titleBefore: "Free AI ",
    titleAccent: "Face Shape",
    titleAfter: " Analyzer",
    sub: "Upload a photo or use your camera for an accurate face shape analysis — with a full breakdown across all six shapes.",
    ctaPrimary: "Analyze my face",
    ctaSecondary: "How it works",
    trust: {
      free: "Free forever",
      mesh: "Live face mesh",
      ranked: "Six shapes ranked",
    },
  },

  // ── How it works ──────────────────────────────────────────────────────────
  howItWorks: {
    eyebrow: "How it works",
    heading: "Three steps to your face shape.",
  },
  steps: [
    {
      n: "01",
      title: "Upload or open your camera",
      body: "Pick a clear, front-facing photo (up to 10MB) or use your camera for a live read.",
    },
    {
      n: "02",
      title: "We map 478 facial points",
      body: "An on-device model traces your face mesh and measures jaw, cheekbone, forehead, and length ratios.",
    },
    {
      n: "03",
      title: "Get a full breakdown",
      body: "See your best-match shape, a confidence score, and a ranked percentage across all six shapes.",
    },
  ],

  // ── Face shapes (labels + descriptions; consumed by faceShape lookups) ────
  shapesSection: {
    eyebrow: "Reference",
    heading: "The six face shapes.",
    sub: "Every result is scored against these six profiles. Most people lean toward one with traits of another — that’s why we show the full mix.",
    exampleAlt: "Example of a {shape} face shape",
  },
  shapeLabels: {
    oval: "Oval",
    round: "Round",
    square: "Square",
    rectangle: "Rectangle",
    heart: "Heart",
    diamond: "Diamond",
  },
  shapeDescriptions: {
    oval: "Balanced proportions with a face length greater than its width and a gently rounded jaw. Widely considered the most versatile shape.",
    round:
      "Soft angles with face length and width close to equal, fuller cheeks, and a rounded jawline and chin.",
    square:
      "A strong, angular jaw with forehead, cheekbones, and jaw close to the same width — a bold, structured shape.",
    rectangle:
      "Like a square but longer — face length clearly exceeds width, with forehead, cheekbones, and jaw running close to parallel.",
    heart:
      "A wider forehead and cheekbones that taper to a narrower, often pointed chin — the classic heart silhouette.",
    diamond:
      "Cheekbones are the widest point, with a narrower forehead and jaw and a defined, pointed chin.",
  },

  // ── Analyzer ──────────────────────────────────────────────────────────────
  analyzer: {
    eyebrow: "Analyzer",
    heading: "Detect your face shape",
    sub: "Upload a clear, front-facing photo or use your camera.",
    tablistAria: "Input method",
    tabUpload: "Upload photo",
    tabCamera: "Use camera",
    fileInputAria: "Choose a photo to analyze",
    dropzoneTitle: "Drop a photo or click to browse",
    dropzoneHint: "JPG, PNG or WebP · up to 10MB",
    previewImgAlt: "Your uploaded photo",
    cameraPreviewAria: "Camera preview",
    loadingModel: "Loading the on-device model…",
    btnAnalyze: "Analyze my face",
    btnCapture: "Capture & analyze",
    btnReset: "Analyze another",
    uploadTipsAria: "Tips for an accurate read",
    uploadTips: [
      "Use a clear, sharp photo — well-lit, in focus, and facing the camera straight on.",
      "Keep the background plain and uncluttered so only your face stands out.",
      "Groom up — hair off your face, glasses off, and a neutral expression.",
    ],
    camTipsAria: "Tips for an accurate read",
    camTips: [
      "Take your glasses off — frames hide the cheek and brow edges.",
      "Face the camera straight on, with your hair off your face.",
      "Click to capture 5 readings — we average them for accuracy.",
    ],
    resultEyebrow: "Your face shape",
    breakdownTitle: "Full breakdown",
    resultDisclaimer:
      "Heads up: face shape is a subjective label, not an exact science. Results are an estimate and can vary with your photo angle, lighting, expression, hair covering the face, glasses, and camera lens. Many faces are a natural blend of two shapes — treat this as a helpful guide, not a definitive verdict.",
    idleTitle: "What you’ll get",
    idleItems: [
      "Your best-match shape with a confidence score",
      "A ranked percentage across all six face shapes",
      "A note when your face is a blend of two shapes",
    ],
    // Strings used by the client script. {placeholders} are filled at runtime —
    // keep them verbatim and in place.
    msg: {
      analyzing: "Analyzing…",
      rateLimited:
        "You’ve reached the hourly limit. Please try again {retryAfter}.",
      fileType: "Please choose a JPG, PNG or WebP image.",
      fileTooLarge: "That image is over 10MB. Please choose a smaller file.",
      readError:
        "Couldn’t read that image. iPhone HEIC photos aren’t supported — please use JPG, PNG or WebP.",
      noFace: "No face detected. Try a clearer, front-facing photo.",
      analyzeError:
        "Something went wrong analyzing that image. Please try again.",
      noCameraSupport: "Your browser doesn’t support camera access.",
      cameraError:
        "Couldn’t access the camera. Check permissions, or use photo upload instead.",
      noFaceYet:
        "No face detected yet. Center your face, then click to capture.",
      captureError: "Something went wrong during capture. Please try again.",
      // {n} = current reading number, {total} = CAPTURE_FRAMES.
      captureReading: "Capture reading - [{n}/{total}]",
      // {pct} = confidence percentage.
      confidence: "{pct}% confidence",
      // {top} = winning shape label, {runnerUp} = second shape, {desc} = top description.
      blendDesc: "Mostly {top} with {runnerUp} traits. {desc}",
    },
  },

  // ── Long-form SEO section (#about on the homepage) ────────────────────────
  seo: {
    eyebrow: "About the tool",
    heading: "The free AI face shape analyzer, online.",
    // Rendered with set:html. Translate the text, keep tags + the #analyzer link.
    html: `
      <p>
        Our <strong>AI face shape analyzer</strong> is a free, online tool that
        tells you your face shape in seconds — no sign-up and no download
        required. If you have ever asked
        <em>“what’s my face shape?”</em> and weren’t sure how to answer it, this
        is the fast way to find out. Just upload a clear, front-facing
        photo or open your camera, and the <strong>face shape AI analyzer</strong>
        does the rest: it maps 478 facial landmarks, measures the geometry of
        your face, and ranks every result across all six common shapes.
      </p>
      <h3>What makes the best AI face shape analyzer</h3>
      <p>
        Most tools hand you a single label and hope it’s right. We built what we
        think is the <strong>best AI face shape analyzer</strong> by showing the
        full picture instead. As a combined <strong>AI face shape detector and
        face analyzer</strong>, it returns a confidence score plus a ranked
        percentage breakdown for oval, round, square, rectangle, heart, and
        diamond — because real faces are often a blend of two shapes rather than
        one perfect match. A live face mesh overlay shows exactly what the model
        is reading as it works, so the analysis never feels like a black box.
      </p>
      <h3>How to determine your face shape</h3>
      <p>
        Wondering <strong>how to determine face shape</strong> without a mirror
        and a measuring tape? The classic method compares four measurements —
        forehead width, cheekbone width, jawline width, and face length — and
        weighs them against each other. That’s exactly what this
        <strong>face shape calculator</strong> automates. Where a manual
        <strong>face analyzer</strong> leaves room for guesswork, our
        <strong>face shape analyzer AI</strong> reads precise anthropometric
        ratios and jaw angularity directly from the landmarks, so you get a
        consistent answer every time. For the most accurate read, pull your hair
        off your face, remove glasses, keep a neutral expression, and use even,
        front-on lighting.
      </p>
      <h3>Free to use, online</h3>
      <p>
        This <strong>AI face shape analyzer online free</strong> tool runs
        online with nothing to install. It works the same on phone or desktop,
        and it’s genuinely an <strong>AI face shape analyzer free</strong> of
        charge, with no usage caps for normal use.
      </p>
      <h3>From face shapes to flattering choices</h3>
      <p>
        Knowing your <strong>face shape</strong> is the starting point for better
        everyday choices. People use it to pick haircuts and hairstyles, choose
        glasses and sunglasses frames that complement their proportions, shape
        eyebrows, and frame makeup or beard styling. While some people search for
        a <strong>face attractiveness analyzer</strong>, beauty is subjective and
        face shape isn’t a score — every one of the six
        <strong>face shapes</strong> has its own strengths, and the goal here is
        to help you style with confidence, not to rank faces. Treat the result as
        a helpful guide rather than a verdict.
      </p>
      <p>
        Ready to stop guessing? Scroll up to the
        <a href="#analyzer">analyzer</a>, add a photo or open your camera, and let
        the <strong>face shape analyzer AI</strong> show you your full breakdown
        in seconds — completely free.
      </p>
    `,
  },

  // ── FAQ ───────────────────────────────────────────────────────────────────
  faqSection: {
    eyebrow: "FAQ",
    heading: "Common questions.",
  },
  faqs: [
    {
      q: "What is a face shape analyzer?",
      a: "A face shape analyzer is a tool that looks at the proportions of your face — forehead, cheekbones, jawline, and length — and tells you which shape you’re closest to. Our AI face shape analyzer does this automatically by mapping 478 facial landmarks from a photo or your camera, then ranking your match across all six shapes.",
    },
    {
      q: "How do I determine my face shape?",
      a: "To determine your face shape, compare four things: the width of your forehead, your cheekbones, and your jaw, plus the overall length of your face. The shape whose proportions match yours is your face shape. This analyzer measures those ratios for you automatically, so there’s no guessing or measuring tape needed.",
    },
    {
      q: "What face shape do I have?",
      a: "You most likely have one of six common face shapes: oval, round, square, rectangle, heart, or diamond. Upload a clear, front-facing photo or open your camera and the analyzer will tell you which one you have, along with a confidence score and a full percentage breakdown.",
    },
    {
      q: "What is my face shape?",
      a: "Your face shape is the overall outline of your face, defined by how wide your forehead, cheekbones, and jaw are relative to your face length. The fastest way to find out is to run a photo through the analyzer above — it reads your real facial geometry and shows your closest match in seconds.",
    },
    {
      q: "What shape is my face?",
      a: "The shape of your face comes down to its widest point and its length. If your face is clearly longer than it is wide, it may be oval or rectangle; if width and length are similar, round or square; if your forehead is the widest part, heart or diamond. The analyzer pinpoints it precisely from your measurements.",
    },
    {
      q: "How can I determine my face shape?",
      a: "The easiest way is to let the AI do it: pull your hair back, face the camera straight on, and upload a photo or use live camera. The tool measures your jaw, cheekbone, forehead, and length ratios and returns your face shape instantly — far more consistent than eyeballing it in a mirror.",
    },
    {
      q: "How can I tell my face shape?",
      a: "You can tell your face shape by finding your face’s widest feature and checking whether your face is longer than it is wide. Rather than tracing your outline on a mirror, this analyzer tells your face shape for you from a single photo, with no manual measuring.",
    },
    {
      q: "How do I tell what face shape I have?",
      a: "Look at three signals: where your face is widest, how angular or soft your jaw is, and whether your face is long or balanced. The analyzer reads all three from 478 landmarks and tells you exactly what face shape you have, plus how strongly you match the runner-up shapes.",
    },
    {
      q: "What's my face shape?",
      a: "Whatever your face shape is, the analyzer can name it in seconds. Add a photo or open your camera above and you’ll get your best-match shape, a confidence percentage, and a ranked breakdown across oval, round, square, rectangle, heart, and diamond.",
    },
    {
      q: "How can I find out my face shape?",
      a: "You can find out your face shape for free right here — no sign-up and no download. Upload a front-facing photo or use your camera, and the AI measures your facial proportions and shows your result in seconds.",
    },
    {
      q: "How do I find my face shape?",
      a: "To find your face shape, use a clear, well-lit photo with your hair off your face and glasses removed, then run it through the analyzer. It compares your measured ratios against all six shape profiles and finds the closest match for you automatically.",
    },
    {
      q: "How do I identify my face shape?",
      a: "Identifying your face shape means matching your forehead, cheekbone, and jaw widths and your face length to one of the six standard profiles. The analyzer identifies it precisely using facial-landmark geometry, so you get an objective answer instead of a subjective guess.",
    },
  ],

  // ── Shared content-page chrome ────────────────────────────────────────────
  contentPage: {
    lastUpdated: "Last updated:",
  },
  // Machine-translation notice shown on translated legal/about pages (set:html).
  mtNotice:
    "This page was machine-translated. The English version is authoritative; in case of any discrepancy, the <a href=\"{enHref}\">English original</a> prevails.",

  // ── Error pages ─────────────────────────────────────────────────────────
  error: {
    eyebrow: "Error {code}",
    ctaHome: "Back to home",
    ctaAnalyze: "Analyze my face",
  },

  // ── Per-page SEO meta + content-page copy ─────────────────────────────────
  pages: {
    home: {
      title: "Free AI Face Shape Analyzer Online — Detect Your Face Shape",
      description:
        "Free AI face shape analyzer online — upload a photo or use your camera to find your face shape instantly with a full breakdown across all 6 shapes. No sign-up.",
    },
    about: {
      title: "About Us — AI Face Shape Analyzer",
      description:
        "Learn about the AI Face Shape Analyzer — a free, fast tool that detects your face shape from a photo or live camera with a full breakdown across all six shapes.",
      keywords:
        "about ai face shape analyzer, face shape analyzer, who made face shape analyzer",
      eyebrow: "About",
      heading: "About AI Face Shape Analyzer",
      lead: "We built a free, accurate face shape analyzer that gives you the full picture — not just a one-word label.",
      html: `
        <p>
          <strong>AI Face Shape Analyzer</strong> is a free online tool that detects
          your face shape from a photo or your live camera. Instead of handing you a
          single guess, it maps 478 facial landmarks, measures the real geometry of
          your face, and ranks your result across all six common shapes — oval,
          round, square, rectangle, heart, and diamond.
        </p>
        <h2>Why we built it</h2>
        <p>
          “What’s my face shape?” is one of the most common questions people ask
          before choosing a haircut, a pair of glasses, or a new makeup or grooming
          style. Most tools answer it with a single label and leave you wondering how
          confident that answer really is. We wanted something more honest: a tool
          that shows the full breakdown, because real faces are often a blend of two
          shapes rather than one perfect match.
        </p>
        <h2>What makes it different</h2>
        <ul>
          <li>
            <strong>A live face mesh.</strong> A real-time overlay shows exactly what
            the model is reading as it works, so the analysis never feels like a
            black box.
          </li>
          <li>
            <strong>A full probability breakdown.</strong> You get a best-match
            shape, a confidence score, and a ranked percentage across all six shapes
            — plus blend-of-two-shapes detection.
          </li>
          <li>
            <strong>Free and frictionless.</strong> No sign-up, no download, and no
            usage caps for normal use. It works the same on phone or desktop.
          </li>
          <li>
            <strong>Built for everyone.</strong> The interface is accessible by
            design, with keyboard support, clear focus states, and reduced-motion
            support.
          </li>
        </ul>
        <h2>How it works</h2>
        <p>
          When you upload a photo or open your camera, an in-browser model traces
          your face and measures jaw, cheekbone, forehead, and length ratios, along
          with jaw angularity. Those measurements are compared against six shape
          profiles to find your closest match. The result is a consistent, objective
          read of your facial proportions — far steadier than eyeballing it in a
          mirror.
        </p>
        <h2>An honest note on accuracy</h2>
        <p>
          Face shape is a subjective label, not an exact measurement, and borderline
          faces are genuinely ambiguous. Results can shift with photo angle,
          lighting, expression, hair, and glasses. We treat the analysis as a helpful
          styling guide, not a verdict — and every one of the six shapes has its own
          strengths.
        </p>
        <h2>Get in touch</h2>
        <p>
          Have feedback, a feature idea, or a question? We’d love to hear from you —
          head to our <a href="/contact">contact page</a> or email
          <a href="mailto:hello@aifaceshapeanalyzer.com">hello@aifaceshapeanalyzer.com</a>.
        </p>
        <p>
          Ready to try it? <a href="/#analyzer">Analyze your face</a> and see your
          full breakdown in seconds — completely free.
        </p>
      `,
    },
    contact: {
      title: "Contact Us — AI Face Shape Analyzer",
      description:
        "Get in touch with the AI Face Shape Analyzer team. Send feedback, feature ideas, privacy requests, or support questions by email.",
      keywords:
        "contact ai face shape analyzer, face shape analyzer support, face shape analyzer feedback",
      eyebrow: "Contact",
      heading: "Contact Us",
      lead: "Questions, feedback, or a feature idea? We’d love to hear from you. The fastest way to reach us is by email.",
      emailHeading: "Email us",
      emailGeneralLabel: "General & feedback:",
      emailPrivacyLabel: "Privacy requests:",
      emailIntro:
        "We read every message and aim to reply within a few business days. For privacy questions, see our {privacyLink}; for usage questions, our {termsLink}.",
      privacyLinkText: "Privacy Policy",
      termsLinkText: "Terms & Conditions",
      formHeading: "Send a message",
      formIntro:
        "Fill in the fields below and we’ll open a pre-filled email in your mail app — just hit send.",
      labelName: "Name",
      labelEmail: "Your email",
      labelMessage: "Message",
      submit: "Open email to send",
      fallback: "Prefer to write directly? Email {email}.",
      errMissing: "Please fill in your name, email, and message.",
      errEmail: "Please enter a valid email address.",
      // {name} fills both; the email body keeps the em dash + parenthesised email.
      mailSubject: "Contact from {name}",
    },
    privacy: {
      title: "Privacy Policy — AI Face Shape Analyzer",
      description:
        "How the AI Face Shape Analyzer handles your photos and data. Face analysis runs in your browser; learn what we collect, how we use it, and your choices.",
      keywords:
        "ai face shape analyzer privacy policy, face shape analyzer data, face analyzer privacy",
      eyebrow: "Legal",
      heading: "Privacy Policy",
      lead: "This policy explains what information the AI Face Shape Analyzer collects, how your photos are processed, and the choices you have.",
      updated: "June 19, 2026",
      html: `
        <p>
          AI Face Shape Analyzer (“we”, “us”, “our”) operates the website at
          aifaceshapeanalyzer.com (the “Service”). This Privacy Policy describes how
          we handle information when you use the Service. By using the Service, you
          agree to the practices described here.
        </p>
        <h2>Your photos and camera</h2>
        <p>
          The face shape analysis runs in your browser. When you upload a photo or
          use your camera, the image is processed on your own device by the
          in-browser model to measure facial proportions. We do not require you to
          create an account, and we do not sell your images.
        </p>
        <p>
          You control whether to grant camera access through your browser, and you
          can revoke that permission at any time in your browser settings.
        </p>
        <h2>Information we collect</h2>
        <p>We aim to collect as little as possible. Depending on how you use the Service, this may include:</p>
        <ul>
          <li>
            <strong>Usage and device data.</strong> Standard technical information
            such as browser type, device type, screen size, referring page, and
            general region, collected to keep the Service working and to understand
            aggregate usage.
          </li>
          <li>
            <strong>Local storage.</strong> We store small values in your browser
            (for example, your light/dark theme preference and a soft usage counter)
            on your device. This data is not sent to us as a user profile.
          </li>
          <li>
            <strong>Messages you send us.</strong> If you contact us by email, we
            receive the information you choose to share, such as your email address
            and the contents of your message.
          </li>
        </ul>
        <h2>Cookies and analytics</h2>
        <p>
          We may use cookies or similar technologies, including privacy-respecting
          analytics, to measure aggregate traffic and improve the Service. You can
          control cookies through your browser settings. Disabling them should not
          prevent the core analyzer from working.
        </p>
        <h2>How we use information</h2>
        <ul>
          <li>To provide, maintain, and improve the Service.</li>
          <li>To diagnose technical problems and prevent abuse.</li>
          <li>To respond to your questions and support requests.</li>
          <li>To comply with legal obligations.</li>
        </ul>
        <h2>Third-party services</h2>
        <p>
          We may rely on third-party providers for hosting, content delivery, and
          analytics. These providers process limited technical data on our behalf
          and are expected to safeguard it. The Service may also link to external
          sites that are governed by their own privacy policies.
        </p>
        <h2>Data retention</h2>
        <p>
          We retain technical and analytics data only as long as needed for the
          purposes described above, then delete or anonymize it. Email correspondence
          is kept as long as necessary to handle your request and for reasonable
          record-keeping.
        </p>
        <h2>Children’s privacy</h2>
        <p>
          The Service is not directed to children under 13 (or the minimum age in
          your jurisdiction), and we do not knowingly collect personal information
          from them. If you believe a child has provided us information, contact us
          and we will take appropriate steps to remove it.
        </p>
        <h2>Your rights</h2>
        <p>
          Depending on where you live, you may have rights to access, correct, or
          delete personal information we hold about you, or to object to certain
          processing. To make a request, email us using the address below. We will
          respond consistent with applicable law.
        </p>
        <h2>Changes to this policy</h2>
        <p>
          We may update this Privacy Policy from time to time. When we do, we will
          revise the “Last updated” date above. Significant changes may be
          highlighted on the Service.
        </p>
        <h2>Contact us</h2>
        <p>
          Questions about this policy? Email
          <a href="mailto:privacy@aifaceshapeanalyzer.com">privacy@aifaceshapeanalyzer.com</a>
          or visit our <a href="/contact">contact page</a>.
        </p>
        <hr />
        <p>
          This document is provided for general information and is not legal advice.
          Please review it with a qualified professional to ensure it fits your
          specific circumstances.
        </p>
      `,
    },
    terms: {
      title: "Terms & Conditions — AI Face Shape Analyzer",
      description:
        "The terms that govern your use of the AI Face Shape Analyzer, including acceptable use, disclaimers, and limitations of liability.",
      keywords:
        "ai face shape analyzer terms, face shape analyzer terms and conditions, terms of service",
      eyebrow: "Legal",
      heading: "Terms & Conditions",
      lead: "These terms govern your use of the AI Face Shape Analyzer. Please read them carefully before using the Service.",
      updated: "June 19, 2026",
      html: `
        <p>
          These Terms & Conditions (“Terms”) form an agreement between you and
          AI Face Shape Analyzer (“we”, “us”, “our”) regarding your use of the
          website at aifaceshapeanalyzer.com (the “Service”). By accessing or using
          the Service, you agree to be bound by these Terms. If you do not agree, do
          not use the Service.
        </p>
        <h2>Use of the Service</h2>
        <p>
          The Service lets you analyze a photo or live camera feed to estimate your
          face shape. It is provided for personal, informational, and entertainment
          purposes. You must be at least 13 years old (or the minimum age in your
          jurisdiction) to use the Service.
        </p>
        <h2>Acceptable use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Upload images you do not have the right to use, or images of other people without their consent.</li>
          <li>Use the Service for unlawful, harassing, or harmful purposes.</li>
          <li>Attempt to disrupt, overload, reverse engineer, or gain unauthorized access to the Service or its systems.</li>
          <li>Scrape, resell, or commercially exploit the Service or its content without our written permission.</li>
        </ul>
        <h2>No professional advice</h2>
        <p>
          Face shape is a subjective label, not an exact measurement. Results are an
          estimate generated from your image and can vary with angle, lighting,
          expression, hair, glasses, and camera lens. The Service does not provide
          medical, psychological, cosmetic, or professional advice, and you should
          not rely on it as such. Use results as a general styling guide only.
        </p>
        <h2>Intellectual property</h2>
        <p>
          The Service, including its design, text, graphics, and underlying software,
          is owned by us or our licensors and is protected by applicable laws. We
          grant you a limited, non-exclusive, non-transferable license to use the
          Service for its intended purpose. You retain any rights you have in the
          images you supply; we do not claim ownership of them.
        </p>
        <h2>Disclaimer of warranties</h2>
        <p>
          The Service is provided “as is” and “as available” without warranties of
          any kind, whether express or implied, including but not limited to
          merchantability, fitness for a particular purpose, accuracy, and
          non-infringement. We do not warrant that the Service will be uninterrupted,
          error-free, or that results will be accurate or reliable.
        </p>
        <h2>Limitation of liability</h2>
        <p>
          To the maximum extent permitted by law, we will not be liable for any
          indirect, incidental, special, consequential, or punitive damages, or any
          loss of data, profits, or goodwill, arising from your use of or inability
          to use the Service. Where liability cannot be excluded, it is limited to
          the maximum extent permitted by law.
        </p>
        <h2>Third-party links</h2>
        <p>
          The Service may contain links to third-party websites or resources. We are
          not responsible for the content, policies, or practices of those sites and
          provide such links for convenience only.
        </p>
        <h2>Changes to the Service and Terms</h2>
        <p>
          We may modify or discontinue the Service, or update these Terms, at any
          time. When we update the Terms, we will revise the “Last updated” date
          above. Your continued use of the Service after changes take effect
          constitutes acceptance of the revised Terms.
        </p>
        <h2>Governing law</h2>
        <p>
          These Terms are governed by the laws applicable in our principal place of
          operation, without regard to conflict-of-law principles. Any disputes will
          be subject to the courts having jurisdiction there, unless otherwise
          required by mandatory local law.
        </p>
        <h2>Contact us</h2>
        <p>
          Questions about these Terms? Email
          <a href="mailto:hello@aifaceshapeanalyzer.com">hello@aifaceshapeanalyzer.com</a>
          or visit our <a href="/contact">contact page</a>.
        </p>
        <hr />
        <p>
          This document is provided for general information and is not legal advice.
          Please review it with a qualified professional to ensure it fits your
          specific circumstances.
        </p>
      `,
    },
    notFound: {
      title: "Page not found (404) — AI Face Shape Analyzer",
      description:
        "The page you're looking for doesn't exist. Head back home to find your face shape in seconds.",
      code: "404",
      heading: "We couldn't find that page.",
      message:
        "The link may be broken or the page may have moved. Your face shape analysis is still right where you left it.",
    },
    serverError: {
      title: "Something went wrong (500) — AI Face Shape Analyzer",
      description:
        "An unexpected error occurred. Try again or head back home to find your face shape in seconds.",
      code: "500",
      heading: "Something went wrong on our end.",
      message:
        "An unexpected error stopped this page from loading. Try again in a moment, or head back home to find your face shape.",
    },
  },

  // Shared keyword meta (home + default). Locale files may localize lightly.
  keywords:
    "ai face shape analyzer, best ai face shape analyzer, ai face shape analyzer free, ai face shape analyzer online, ai face shape analyzer online free, ai face shape detector, face shape ai analyzer, face shape analyzer ai, face shapes, face shape, whats my face shape, how to determine face shape, face analyzer, face shape calculator, face attractiveness analyzer",
};

/**
 * The shape every locale dictionary must satisfy. Note `en` is intentionally
 * NOT `as const` — that widens string literals to `string` and tuples to arrays
 * so translated locale files can supply different text under the same key shape.
 */
export type UIStrings = typeof en;
