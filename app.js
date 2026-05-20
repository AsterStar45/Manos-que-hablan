/* ==========================================================================
   APPLICATION LOGIC - MANOS QUE HABLAN
   ========================================================================== */

// --- 1. LSC SIGNS DATABASE ---
const SIGNS = [
  // --- ABECEDARIO ---
  {
    id: "lsc_a",
    name: "Letra A",
    category: "abecedario",
    skeletonType: "fist",
    desc: "Cierra la mano en un puño suave, manteniendo el dedo pulgar extendido y apoyado firmemente contra el lado lateral del dedo índice.",
    tip: "Asegúrate de mostrar el dorso de tu mano hacia la cámara, no la palma.",
    svg: `
      <svg viewBox="0 0 100 100" width="100%" height="100%">
        <!-- Forearm -->
        <path d="M40 90 L40 75 C40 68 43 65 47 65 L53 65 C57 65 60 68 60 75 L60 90" fill="var(--primary-light)" stroke="var(--primary)" stroke-width="2.5" stroke-linejoin="round"/>
        <!-- Main Fist Outline -->
        <path d="M32 70 C28 50 34 38 64 38 C68 38 72 45 70 58 C68 68 64 72 32 70 Z" fill="var(--accent-light)" stroke="var(--accent)" stroke-width="2.5" stroke-linejoin="round"/>
        <!-- Folded fingers lines -->
        <path d="M40 38 C40 50 42 58 42 62" fill="none" stroke="var(--accent)" stroke-width="2" stroke-linecap="round"/>
        <path d="M48 38 C48 50 50 58 50 62" fill="none" stroke="var(--accent)" stroke-width="2" stroke-linecap="round"/>
        <path d="M56 38 C56 50 57 58 57 62" fill="none" stroke="var(--accent)" stroke-width="2" stroke-linecap="round"/>
        <!-- Thumb extended on side -->
        <path d="M32 68 C22 68 18 52 25 45 C30 40 34 44 34 50 C34 58 35 64 32 68 Z" fill="var(--accent-light)" stroke="var(--accent)" stroke-width="2.5" stroke-linejoin="round"/>
      </svg>
    `
  },
  {
    id: "lsc_b",
    name: "Letra B",
    category: "abecedario",
    skeletonType: "open_palm",
    desc: "Extiende los cuatro dedos de la mano completamente juntos y rectos hacia arriba, doblando el pulgar sobre la palma.",
    tip: "Mantén los dedos bien unidos. Imagina que estás diciendo 'alto' pero con el pulgar cruzado.",
    svg: `
      <svg viewBox="0 0 100 100" width="100%" height="100%">
        <!-- Forearm -->
        <path d="M42 90 L42 75 C42 70 45 68 48 68 L52 68 C55 68 58 70 58 75 L58 90" fill="var(--primary-light)" stroke="var(--primary)" stroke-width="2.5" />
        <!-- Hand Palm & Extended Fingers -->
        <path d="M35 72 C32 60 32 15 38 15 C42 15 42 60 42 72 M42 72 C42 12 47 12 47 72 M47 72 C47 14 52 14 52 72 M52 72 C52 18 57 18 56 72" fill="var(--accent-light)" stroke="var(--accent)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <!-- Outer edge -->
        <path d="M35 72 C35 75 58 75 58 72 L58 50 C58 52 50 52 46 54 C42 56 36 60 36 65 Z" fill="var(--accent-light)" stroke="var(--accent)" stroke-width="2.5" stroke-linejoin="round"/>
        <!-- Thumb folded -->
        <path d="M58 56 C50 56 42 48 42 44 C42 41 45 40 48 42 C51 44 56 50 58 52" fill="none" stroke="var(--accent)" stroke-width="2.5" stroke-linecap="round"/>
      </svg>
    `
  },
  {
    id: "lsc_c",
    name: "Letra C",
    category: "abecedario",
    skeletonType: "curved",
    desc: "Curva todos los dedos y el pulgar de perfil simulando la forma de una letra C gigante con tu mano.",
    tip: "Coloca la mano de lado frente a la cámara para que se aprecie la forma de arco.",
    svg: `
      <svg viewBox="0 0 100 100" width="100%" height="100%">
        <!-- Wrist -->
        <path d="M55 85 C55 85 45 80 43 70" fill="none" stroke="var(--primary)" stroke-width="2.5" stroke-linecap="round"/>
        <!-- Curved hand arc -->
        <path d="M55 78 C35 78 20 62 20 44 C20 26 38 15 62 15 C68 15 72 20 65 24 C55 30 36 33 36 45 C36 57 52 62 65 67 C72 70 65 78 55 78 Z" fill="var(--accent-light)" stroke="var(--accent)" stroke-width="2.5" stroke-linejoin="round"/>
      </svg>
    `
  },
  {
    id: "lsc_d",
    name: "Letra D",
    category: "abecedario",
    skeletonType: "index_up",
    desc: "Apunta con el dedo índice recto hacia el cielo, mientras los demás dedos (medio, anular, meñique) se curvan tocando la punta del pulgar.",
    tip: "Esta seña forma una figura circular en la base con un solo dedo vertical.",
    svg: `
      <svg viewBox="0 0 100 100" width="100%" height="100%">
        <!-- Forearm -->
        <path d="M43 90 L43 75 C43 70 46 68 49 68 L53 68 C56 68 59 70 59 75 L59 90" fill="var(--primary-light)" stroke="var(--primary)" stroke-width="2.5" />
        <!-- Index extended -->
        <path d="M38 68 C35 68 35 15 40 15 C45 15 45 68 45 68" fill="var(--accent-light)" stroke="var(--accent)" stroke-width="2.5" stroke-linejoin="round"/>
        <!-- Loop fingers (middle, ring, pinky, thumb) -->
        <path d="M45 68 C45 52 65 52 65 62 C65 72 45 72 45 68 Z" fill="var(--accent-light)" stroke="var(--accent)" stroke-width="2.5" stroke-linejoin="round"/>
        <!-- Thumb meeting lines -->
        <path d="M38 68 C38 60 52 56 55 60" fill="none" stroke="var(--accent)" stroke-width="2" stroke-linecap="round"/>
      </svg>
    `
  },
  {
    id: "lsc_e",
    name: "Letra E",
    category: "abecedario",
    skeletonType: "claw",
    desc: "Dobla a medias todos tus dedos hacia adentro, apoyándolos suavemente sobre el borde superior del pulgar doblado.",
    tip: "Es como formar una garra apretada o una letra E minúscula en relieve.",
    svg: `
      <svg viewBox="0 0 100 100" width="100%" height="100%">
        <!-- Wrist -->
        <path d="M40 90 L40 75 C40 70 43 68 47 68 L53 68 C57 68 60 70 60 75 L60 90" fill="var(--primary-light)" stroke="var(--primary)" stroke-width="2.5" />
        <!-- Main body of E -->
        <path d="M32 72 C30 55 35 38 60 38 C65 38 68 43 65 52 C62 58 55 60 32 60" fill="var(--accent-light)" stroke="var(--accent)" stroke-width="2.5" stroke-linejoin="round"/>
        <!-- Curved finger lines -->
        <path d="M38 38 C38 48 45 48 45 43" fill="none" stroke="var(--accent)" stroke-width="2" stroke-linecap="round"/>
        <path d="M46 38 C46 48 52 48 52 43" fill="none" stroke="var(--accent)" stroke-width="2" stroke-linecap="round"/>
        <path d="M54 38 C54 48 59 48 59 43" fill="none" stroke="var(--accent)" stroke-width="2" stroke-linecap="round"/>
        <!-- Thumb under fingers -->
        <path d="M32 68 C24 68 22 55 35 55 C40 55 45 57 45 60" fill="none" stroke="var(--accent)" stroke-width="2.5" stroke-linecap="round"/>
      </svg>
    `
  },

  // --- SALUDOS ---
  {
    id: "lsc_hola",
    name: "Hola",
    category: "saludos",
    skeletonType: "open_palm",
    desc: "Coloca la mano abierta con los dedos juntos cerca de la sien o la frente, y realiza un movimiento corto hacia afuera, similar a un saludo militar amigable.",
    tip: "Haz un gesto cálido y no olvides acompañarlo con una sonrisa en tu rostro.",
    svg: `
      <svg viewBox="0 0 100 100" width="100%" height="100%">
        <!-- Hand outline -->
        <path d="M30 85 C32 60 35 30 42 30 C46 30 46 60 46 72 M46 72 C46 25 51 25 51 72 M51 72 C51 28 56 28 56 72 M56 72 C56 34 61 34 60 72" fill="var(--accent-light)" stroke="var(--accent)" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M30 85 C30 88 62 88 60 72 L60 55 C60 58 55 60 50 60 C45 60 38 65 35 72 Z" fill="var(--accent-light)" stroke="var(--accent)" stroke-width="2.5" stroke-linejoin="round"/>
        <!-- Thumb extended -->
        <path d="M30 80 C20 75 16 65 24 60 C28 58 32 62 32 68" fill="var(--accent-light)" stroke="var(--accent)" stroke-width="2.5" stroke-linejoin="round"/>
        <!-- Movement Arrows (Orange) -->
        <path d="M68 35 C78 35 83 45 80 55" fill="none" stroke="var(--primary)" stroke-width="3" stroke-dasharray="4 3" stroke-linecap="round"/>
        <polygon points="80,55 75,52 82,49" fill="var(--primary)"/>
        <path d="M74 30 C88 30 94 43 90 58" fill="none" stroke="var(--primary)" stroke-width="1.5" stroke-dasharray="4 3" stroke-linecap="round"/>
      </svg>
    `
  },
  {
    id: "lsc_gracias",
    name: "Gracias",
    category: "saludos",
    skeletonType: "open_palm",
    desc: "Toca tus labios o mentón con las yemas de los dedos de la mano abierta (palma mirando hacia ti) y muévela suavemente hacia adelante y abajo hacia la otra persona.",
    tip: "Es un movimiento de arco elegante que emula enviar tu agradecimiento al interlocutor.",
    svg: `
      <svg viewBox="0 0 100 100" width="100%" height="100%">
        <!-- Lips/Face silhouette (simplified) -->
        <path d="M15 15 C25 15 28 25 25 35 C22 45 15 50 15 50" fill="none" stroke="var(--border)" stroke-width="2" stroke-linecap="round"/>
        <!-- Hand flat -->
        <path d="M38 42 L55 20 C57 18 60 20 58 24 L45 52 L38 42 Z" fill="var(--accent-light)" stroke="var(--accent)" stroke-width="2.5" stroke-linejoin="round"/>
        <path d="M42 46 L60 24 C62 22 65 24 63 28 L49 55" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
        <path d="M46 50 L65 28 C67 26 70 28 68 32 L53 58" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
        <!-- Movement arrow showing path from mouth to front -->
        <path d="M28 35 C38 42 50 55 48 70" fill="none" stroke="var(--primary)" stroke-width="3" stroke-dasharray="4 3" stroke-linecap="round"/>
        <polygon points="48,70 43,65 51,64" fill="var(--primary)"/>
      </svg>
    `
  },
  {
    id: "lsc_porfavor",
    name: "Por Favor",
    category: "saludos",
    skeletonType: "open_palm",
    desc: "Coloca la palma de tu mano derecha abierta sobre el pecho, y realiza movimientos circulares suaves en el sentido de las agujas del reloj.",
    tip: "Mantén una postura erguida y un movimiento fluido.",
    svg: `
      <svg viewBox="0 0 100 100" width="100%" height="100%">
        <!-- Chest representation -->
        <path d="M20 90 C20 70 35 60 50 60 C65 60 80 70 80 90" fill="var(--primary-light)" stroke="var(--primary)" stroke-width="2.5" />
        <!-- Hand flat on chest -->
        <path d="M40 75 C37 70 37 55 42 50 C45 45 49 48 48 55 L46 65" fill="var(--accent-light)" stroke="var(--accent)" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M45 50 C48 45 52 45 51 52 L48 68" fill="none" stroke="var(--accent)" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M49 52 C52 47 56 47 54 54 L51 70" fill="none" stroke="var(--accent)" stroke-width="2.5" stroke-linecap="round"/>
        <!-- Circular movement arrow on hand -->
        <path d="M30 50 C30 35 60 30 65 48 C70 65 40 75 35 65" fill="none" stroke="var(--primary)" stroke-width="2.5" stroke-dasharray="4 3" stroke-linecap="round"/>
        <polygon points="35,65 32,58 39,61" fill="var(--primary)"/>
      </svg>
    `
  },
  {
    id: "lsc_chao",
    name: "Chao / Adiós",
    category: "saludos",
    skeletonType: "open_palm",
    desc: "Levanta la mano con la palma hacia el frente y mueve los dedos arriba y abajo de forma repetitiva (saludo estándar de despedida).",
    tip: "Haz movimientos rápidos de los dedos abriéndose y cerrándose.",
    svg: `
      <svg viewBox="0 0 100 100" width="100%" height="100%">
        <!-- Arm -->
        <path d="M45 90 L45 75 C45 72 47 70 50 70 L50 90" fill="none" stroke="var(--primary)" stroke-width="2.5" />
        <!-- Hand open tilt -->
        <path d="M35 70 C30 50 35 18 42 18 C46 18 45 50 45 65 M45 65 C45 15 50 15 50 65 M50 65 C50 17 55 17 54 65 M54 65 C54 22 59 22 58 65" fill="var(--accent-light)" stroke="var(--accent)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M35 70 C35 75 58 75 58 70 L58 50 C58 52 50 52 46 54 Z" fill="var(--accent-light)" stroke="var(--accent)" stroke-width="2.5" stroke-linejoin="round"/>
        <!-- Waving lines -->
        <path d="M22 30 C18 35 18 45 22 50" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round"/>
        <path d="M16 26 C10 33 10 47 16 54" fill="none" stroke="var(--primary)" stroke-width="1" stroke-linecap="round"/>
        <path d="M68 30 C72 35 72 45 68 50" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round"/>
      </svg>
    `
  },

  // --- NUMEROS ---
  {
    id: "lsc_1",
    name: "Número 1",
    category: "numeros",
    skeletonType: "index_up",
    desc: "Levanta únicamente el dedo índice apuntando hacia arriba, cerrando el pulgar sobre los otros tres dedos doblados.",
    tip: "Muestra claramente el dorso o el frente del dedo índice extendido.",
    svg: `
      <svg viewBox="0 0 100 100" width="100%" height="100%">
        <!-- Forearm -->
        <path d="M43 90 L43 75 C43 70 46 68 49 68 L53 68 C56 68 59 70 59 75 L59 90" fill="var(--primary-light)" stroke="var(--primary)" stroke-width="2.5" />
        <!-- Index vertical -->
        <path d="M36 68 C34 50 34 18 39 18 C44 18 44 50 44 68" fill="var(--accent-light)" stroke="var(--accent)" stroke-width="2.5" stroke-linejoin="round"/>
        <!-- Fist part -->
        <path d="M44 68 C44 55 60 55 60 62 C60 70 44 72 44 68 Z" fill="var(--accent-light)" stroke="var(--accent)" stroke-width="2.5" stroke-linejoin="round"/>
        <path d="M44 58 C46 58 48 62 48 66" fill="none" stroke="var(--accent)" stroke-width="2"/>
        <path d="M50 58 C52 58 54 62 54 66" fill="none" stroke="var(--accent)" stroke-width="2"/>
        <!-- Thumb over fingers -->
        <path d="M38 68 C32 68 30 55 42 55 L44 58" fill="none" stroke="var(--accent)" stroke-width="2.5" stroke-linecap="round"/>
      </svg>
    `
  },
  {
    id: "lsc_2",
    name: "Número 2",
    category: "numeros",
    skeletonType: "two_fingers",
    desc: "Levanta el dedo índice y el dedo medio formando una V hacia arriba, mientras doblas el pulgar sobre el anular y el meñique.",
    tip: "Esta seña es idéntica al símbolo universal de 'paz y amor'.",
    svg: `
      <svg viewBox="0 0 100 100" width="100%" height="100%">
        <!-- Forearm -->
        <path d="M43 90 L43 75 C43 70 46 68 49 68 L53 68 C56 68 59 70 59 75 L59 90" fill="var(--primary-light)" stroke="var(--primary)" stroke-width="2.5" />
        <!-- Index & Middle extended in V -->
        <path d="M32 68 C30 50 30 18 36 18 C40 18 41 45 42 62 M42 62 C43 45 44 14 49 14 C54 14 54 50 53 68" fill="var(--accent-light)" stroke="var(--accent)" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/>
        <!-- Folded Ring & Pinky -->
        <path d="M53 68 C53 58 64 58 64 64 C64 70 53 72 53 68 Z" fill="var(--accent-light)" stroke="var(--accent)" stroke-width="2.5" stroke-linejoin="round"/>
        <!-- Thumb folded -->
        <path d="M34 68 C30 65 30 58 38 56 C42 56 46 58 48 62" fill="none" stroke="var(--accent)" stroke-width="2.5" stroke-linecap="round"/>
      </svg>
    `
  },
  {
    id: "lsc_3",
    name: "Número 3",
    category: "numeros",
    skeletonType: "three_fingers",
    desc: "Extiende el dedo pulgar, el dedo índice y el dedo medio hacia afuera, doblando el anular y el meñique contra la palma.",
    tip: "El pulgar apunta hacia un lado mientras los otros dos apuntan hacia arriba.",
    svg: `
      <svg viewBox="0 0 100 100" width="100%" height="100%">
        <!-- Forearm -->
        <path d="M45 90 L45 75 C45 72 47 70 50 70 L50 90" fill="none" stroke="var(--primary)" stroke-width="2.5" />
        <!-- Index & Middle vertical -->
        <path d="M38 68 C36 50 36 18 41 18 C45 18 46 45 47 62 M47 62 C48 45 49 14 54 14 C59 14 59 50 58 68" fill="var(--accent-light)" stroke="var(--accent)" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/>
        <!-- Extended Thumb -->
        <path d="M38 68 C28 68 20 54 26 48 C32 42 38 52 38 60" fill="var(--accent-light)" stroke="var(--accent)" stroke-width="2.5" stroke-linejoin="round"/>
        <!-- Folded Ring & Pinky -->
        <path d="M58 68 C58 58 68 58 68 64 C68 70 58 72 58 68 Z" fill="var(--accent-light)" stroke="var(--accent)" stroke-width="2.5" stroke-linejoin="round"/>
      </svg>
    `
  },
  {
    id: "lsc_4",
    name: "Número 4",
    category: "numeros",
    skeletonType: "four_fingers",
    desc: "Extiende los cuatro dedos principales (índice, medio, anular, meñique) hacia arriba de forma paralela y dobla el pulgar sobre la palma.",
    tip: "Es como el número 2, pero agregando el anular y el meñique.",
    svg: `
      <svg viewBox="0 0 100 100" width="100%" height="100%">
        <!-- Forearm -->
        <path d="M43 90 L43 75 C43 70 46 68 49 68 L53 68 C56 68 59 70 59 75 L59 90" fill="var(--primary-light)" stroke="var(--primary)" stroke-width="2.5" />
        <!-- 4 Extended fingers -->
        <path d="M32 70 C30 50 30 18 36 18 C40 18 40 50 40 70 M40 70 C40 15 45 15 45 70 M45 70 C45 16 50 16 50 70 M50 70 C50 20 55 20 54 70" fill="var(--accent-light)" stroke="var(--accent)" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/>
        <!-- Palm closure -->
        <path d="M32 70 C32 74 54 74 54 70 L54 55 C54 58 48 58 44 58 C40 58 34 62 32 68 Z" fill="var(--accent-light)" stroke="var(--accent)" stroke-width="2.5" stroke-linejoin="round"/>
        <!-- Thumb folded -->
        <path d="M34 68 C30 65 30 58 38 56 L42 58" fill="none" stroke="var(--accent)" stroke-width="2.5" stroke-linecap="round"/>
      </svg>
    `
  },
  {
    id: "lsc_5",
    name: "Número 5",
    category: "numeros",
    skeletonType: "open_palm",
    desc: "Abre toda la mano con los cinco dedos completamente extendidos y separados al frente de la cámara.",
    tip: "Esta seña representa la mano abierta al natural.",
    svg: `
      <svg viewBox="0 0 100 100" width="100%" height="100%">
        <!-- Forearm -->
        <path d="M43 90 L43 75 C43 70 46 68 49 68 L53 68 C56 68 59 70 59 75 L59 90" fill="var(--primary-light)" stroke="var(--primary)" stroke-width="2.5" />
        <!-- Open fingers separated -->
        <path d="M32 68 C28 55 24 25 31 22 C36 19 39 48 40 64 M40 64 C40 14 45 12 48 14 C51 16 51 48 50 64 M50 64 C51 15 56 15 58 17 C60 19 59 48 58 64 M58 64 C60 20 65 21 66 25 C67 29 64 55 62 68" fill="var(--accent-light)" stroke="var(--accent)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <!-- Thumb extended -->
        <path d="M32 68 C22 68 12 55 18 48 C24 41 30 50 32 58" fill="var(--accent-light)" stroke="var(--accent)" stroke-width="2.5" stroke-linejoin="round"/>
        <!-- Palm main outline -->
        <path d="M32 68 C32 75 62 75 62 68" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
      </svg>
    `
  }
];

// --- 2. SKELETON PRESETS FOR THE MOCK AI CANVAS ---
// Coordinates are normalized between 0 and 1, representing joint positions for a left hand (mirrored to match user in camera view).
const SKELETON_PRESETS = {
  // A closed fist shape (A)
  fist: {
    wrist: { x: 0.5, y: 0.8 },
    thumb: [
      { x: 0.42, y: 0.72 }, { x: 0.35, y: 0.65 }, { x: 0.38, y: 0.58 }, { x: 0.43, y: 0.55 }
    ],
    index: [
      { x: 0.46, y: 0.7 }, { x: 0.46, y: 0.58 }, { x: 0.52, y: 0.58 }, { x: 0.51, y: 0.63 }
    ],
    middle: [
      { x: 0.5, y: 0.7 }, { x: 0.5, y: 0.58 }, { x: 0.56, y: 0.58 }, { x: 0.55, y: 0.63 }
    ],
    ring: [
      { x: 0.54, y: 0.7 }, { x: 0.54, y: 0.59 }, { x: 0.59, y: 0.59 }, { x: 0.58, y: 0.63 }
    ],
    pinky: [
      { x: 0.58, y: 0.72 }, { x: 0.58, y: 0.62 }, { x: 0.62, y: 0.62 }, { x: 0.61, y: 0.65 }
    ]
  },
  // All fingers fully extended (B, Hola, Chao, 5)
  open_palm: {
    wrist: { x: 0.5, y: 0.85 },
    thumb: [
      { x: 0.38, y: 0.78 }, { x: 0.28, y: 0.72 }, { x: 0.24, y: 0.64 }, { x: 0.22, y: 0.58 }
    ],
    index: [
      { x: 0.43, y: 0.65 }, { x: 0.41, y: 0.5 }, { x: 0.39, y: 0.38 }, { x: 0.37, y: 0.25 }
    ],
    middle: [
      { x: 0.49, y: 0.64 }, { x: 0.49, y: 0.46 }, { x: 0.48, y: 0.32 }, { x: 0.47, y: 0.2 }
    ],
    ring: [
      { x: 0.54, y: 0.65 }, { x: 0.55, y: 0.49 }, { x: 0.56, y: 0.36 }, { x: 0.57, y: 0.24 }
    ],
    pinky: [
      { x: 0.59, y: 0.68 }, { x: 0.62, y: 0.54 }, { x: 0.64, y: 0.44 }, { x: 0.66, y: 0.32 }
    ]
  },
  // A curved hand profile (C)
  curved: {
    wrist: { x: 0.58, y: 0.8 },
    thumb: [
      { x: 0.5, y: 0.76 }, { x: 0.42, y: 0.74 }, { x: 0.38, y: 0.68 }, { x: 0.38, y: 0.6 }
    ],
    index: [
      { x: 0.5, y: 0.62 }, { x: 0.4, y: 0.58 }, { x: 0.36, y: 0.48 }, { x: 0.38, y: 0.38 }
    ],
    middle: [
      { x: 0.52, y: 0.63 }, { x: 0.41, y: 0.59 }, { x: 0.37, y: 0.47 }, { x: 0.39, y: 0.37 }
    ],
    ring: [
      { x: 0.54, y: 0.64 }, { x: 0.43, y: 0.6 }, { x: 0.39, y: 0.48 }, { x: 0.41, y: 0.38 }
    ],
    pinky: [
      { x: 0.56, y: 0.66 }, { x: 0.46, y: 0.62 }, { x: 0.42, y: 0.52 }, { x: 0.44, y: 0.42 }
    ]
  },
  // Index finger extended, others closed (D, 1)
  index_up: {
    wrist: { x: 0.5, y: 0.8 },
    thumb: [
      { x: 0.42, y: 0.72 }, { x: 0.36, y: 0.68 }, { x: 0.42, y: 0.64 }, { x: 0.46, y: 0.62 }
    ],
    index: [
      { x: 0.44, y: 0.65 }, { x: 0.42, y: 0.5 }, { x: 0.4, y: 0.38 }, { x: 0.38, y: 0.25 }
    ],
    middle: [
      { x: 0.49, y: 0.66 }, { x: 0.52, y: 0.58 }, { x: 0.56, y: 0.58 }, { x: 0.53, y: 0.63 }
    ],
    ring: [
      { x: 0.53, y: 0.68 }, { x: 0.55, y: 0.59 }, { x: 0.59, y: 0.59 }, { x: 0.57, y: 0.63 }
    ],
    pinky: [
      { x: 0.57, y: 0.7 }, { x: 0.58, y: 0.62 }, { x: 0.62, y: 0.62 }, { x: 0.6, y: 0.65 }
    ]
  },
  // Curved fingers forming a claw (E)
  claw: {
    wrist: { x: 0.5, y: 0.8 },
    thumb: [
      { x: 0.42, y: 0.72 }, { x: 0.34, y: 0.66 }, { x: 0.38, y: 0.58 }, { x: 0.44, y: 0.56 }
    ],
    index: [
      { x: 0.45, y: 0.66 }, { x: 0.42, y: 0.52 }, { x: 0.46, y: 0.44 }, { x: 0.5, y: 0.48 }
    ],
    middle: [
      { x: 0.49, y: 0.66 }, { x: 0.48, y: 0.51 }, { x: 0.52, y: 0.43 }, { x: 0.55, y: 0.48 }
    ],
    ring: [
      { x: 0.53, y: 0.67 }, { x: 0.53, y: 0.52 }, { x: 0.57, y: 0.44 }, { x: 0.59, y: 0.49 }
    ],
    pinky: [
      { x: 0.57, y: 0.69 }, { x: 0.58, y: 0.56 }, { x: 0.61, y: 0.48 }, { x: 0.63, y: 0.52 }
    ]
  },
  // Index and Middle up (2)
  two_fingers: {
    wrist: { x: 0.5, y: 0.8 },
    thumb: [
      { x: 0.42, y: 0.72 }, { x: 0.36, y: 0.68 }, { x: 0.43, y: 0.64 }, { x: 0.47, y: 0.63 }
    ],
    index: [
      { x: 0.43, y: 0.65 }, { x: 0.4, y: 0.48 }, { x: 0.38, y: 0.36 }, { x: 0.36, y: 0.24 }
    ],
    middle: [
      { x: 0.49, y: 0.64 }, { x: 0.49, y: 0.46 }, { x: 0.48, y: 0.32 }, { x: 0.47, y: 0.2 }
    ],
    ring: [
      { x: 0.54, y: 0.66 }, { x: 0.56, y: 0.59 }, { x: 0.6, y: 0.59 }, { x: 0.58, y: 0.64 }
    ],
    pinky: [
      { x: 0.58, y: 0.68 }, { x: 0.6, y: 0.62 }, { x: 0.64, y: 0.62 }, { x: 0.62, y: 0.66 }
    ]
  },
  // Thumb, Index, Middle extended (3)
  three_fingers: {
    wrist: { x: 0.5, y: 0.8 },
    thumb: [
      { x: 0.42, y: 0.72 }, { x: 0.32, y: 0.68 }, { x: 0.26, y: 0.6 }, { x: 0.2, y: 0.54 }
    ],
    index: [
      { x: 0.43, y: 0.65 }, { x: 0.4, y: 0.48 }, { x: 0.38, y: 0.36 }, { x: 0.36, y: 0.24 }
    ],
    middle: [
      { x: 0.49, y: 0.64 }, { x: 0.49, y: 0.46 }, { x: 0.48, y: 0.32 }, { x: 0.47, y: 0.2 }
    ],
    ring: [
      { x: 0.54, y: 0.66 }, { x: 0.56, y: 0.59 }, { x: 0.6, y: 0.59 }, { x: 0.58, y: 0.64 }
    ],
    pinky: [
      { x: 0.58, y: 0.68 }, { x: 0.6, y: 0.62 }, { x: 0.64, y: 0.62 }, { x: 0.62, y: 0.66 }
    ]
  },
  // 4 fingers up, thumb folded (4)
  four_fingers: {
    wrist: { x: 0.5, y: 0.8 },
    thumb: [
      { x: 0.42, y: 0.72 }, { x: 0.36, y: 0.68 }, { x: 0.43, y: 0.64 }, { x: 0.47, y: 0.63 }
    ],
    index: [
      { x: 0.42, y: 0.66 }, { x: 0.4, y: 0.5 }, { x: 0.38, y: 0.37 }, { x: 0.36, y: 0.25 }
    ],
    middle: [
      { x: 0.47, y: 0.65 }, { x: 0.47, y: 0.47 }, { x: 0.46, y: 0.33 }, { x: 0.45, y: 0.21 }
    ],
    ring: [
      { x: 0.52, y: 0.65 }, { x: 0.53, y: 0.49 }, { x: 0.54, y: 0.35 }, { x: 0.55, y: 0.23 }
    ],
    pinky: [
      { x: 0.57, y: 0.67 }, { x: 0.59, y: 0.53 }, { x: 0.61, y: 0.42 }, { x: 0.63, y: 0.3 }
    ]
  }
};

// --- 3. STATE MANAGEMENT ---
const state = {
  user: {
    isLoggedIn: false,
    name: "Aprendiz LSC",
    email: "",
    completedSigns: [] // Stored in localStorage
  },
  currentView: "login", // login, tutorials, camera
  currentPracticeSignId: "lsc_a",
  cameraActive: false,
  stream: null,
  aiConfidence: 0,
  isDetecting: false,
  skeletonNoiseMultiplier: 0.008, // Amount of wiggle to simulate live tracking
  activeCategoryFilter: "all"
};

// --- 4. DOM ELEMENTS CACHE ---
const dom = {
  html: document.documentElement,
  themeToggle: document.getElementById("theme-toggle"),
  sunIcon: document.getElementById("sun-icon"),
  moonIcon: document.getElementById("moon-icon"),
  
  header: document.getElementById("main-header"),
  userDisplayName: document.getElementById("user-display-name"),
  userWelcomeName: document.querySelectorAll(".user-welcome-name"),
  btnLogout: document.getElementById("btn-logout"),
  btnLogo: document.getElementById("btn-logo"),

  navTutorials: document.getElementById("nav-tutorials"),
  navCamera: document.getElementById("nav-camera"),
  
  // Views
  viewLogin: document.getElementById("view-login"),
  viewTutorials: document.getElementById("view-tutorials"),
  viewCamera: document.getElementById("view-camera"),
  
  // Login Form
  loginForm: document.getElementById("login-form"),
  loginEmail: document.getElementById("login-email"),
  btnGuest: document.getElementById("btn-guest-login"),
  
  // Tutorials view
  lessonsGrid: document.getElementById("lessons-grid"),
  filterButtons: document.querySelectorAll(".filter-btn"),
  progressPercentage: document.getElementById("progress-percentage"),
  progressBarFill: document.getElementById("progress-bar-fill"),
  progressSub: document.querySelector(".progress-sub"),

  // Camera View
  cameraStatusDot: document.getElementById("camera-status-dot"),
  btnCameraToggle: document.getElementById("btn-camera-toggle"),
  btnCameraText: document.getElementById("btn-camera-text"),
  cameraPlaceholder: document.getElementById("camera-placeholder"),
  webcamVideo: document.getElementById("webcam-video"),
  aiOverlay: document.getElementById("ai-overlay"),
  aiScanLines: document.getElementById("ai-scan-lines"),
  aiOutputBadge: document.getElementById("ai-output-badge"),
  aiDetectedSign: document.getElementById("ai-detected-sign"),
  aiConfidenceValue: document.getElementById("ai-confidence-value"),
  aiConfidenceFill: document.getElementById("ai-confidence-fill"),
  btnSimulateMatch: document.getElementById("btn-simulate-match"),
  
  // Practice Panel (Right)
  practiceSelectSign: document.getElementById("practice-select-sign"),
  targetIllustration: document.getElementById("target-illustration"),
  targetSignName: document.getElementById("target-sign-name"),
  targetSignCategory: document.getElementById("target-sign-category"),
  targetSignDesc: document.getElementById("target-sign-desc"),
  targetSignTip: document.getElementById("target-sign-tip"),
  
  // Success feedback Overlay
  successFeedback: document.getElementById("success-feedback"),
  successSignName: document.getElementById("success-sign-name"),
  btnNextPractice: document.getElementById("btn-next-practice")
};

// --- 5. INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  setupEventListeners();
  loadUserProgress();
  populatePracticeSelect();
  renderLessons();
  updateProgressUI();
});

// --- 6. FUNCTIONS ---

// Theme handling (Light / Dark)
function initTheme() {
  const savedTheme = localStorage.getItem("theme") || "light";
  dom.html.setAttribute("data-theme", savedTheme);
  
  if (savedTheme === "dark") {
    dom.sunIcon.classList.add("hidden");
    dom.moonIcon.classList.remove("hidden");
  } else {
    dom.sunIcon.classList.remove("hidden");
    dom.moonIcon.classList.add("hidden");
  }
}

function toggleTheme() {
  const currentTheme = dom.html.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";
  
  dom.html.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  
  if (newTheme === "dark") {
    dom.sunIcon.classList.add("hidden");
    dom.moonIcon.classList.remove("hidden");
  } else {
    dom.sunIcon.classList.remove("hidden");
    dom.moonIcon.classList.add("hidden");
  }
}

// User LocalStorage Progress Loader
function loadUserProgress() {
  const progress = localStorage.getItem("lsc_progress");
  if (progress) {
    state.user.completedSigns = JSON.parse(progress);
  } else {
    state.user.completedSigns = [];
  }
}

function saveUserProgress() {
  localStorage.setItem("lsc_progress", JSON.stringify(state.user.completedSigns));
  updateProgressUI();
  renderLessons(); // Re-render to update the status badges
}

function updateProgressUI() {
  const total = SIGNS.length;
  const completed = state.user.completedSigns.length;
  const pct = total > 0 ? Math.round((completed / total) * 100) : 0;
  
  dom.progressPercentage.textContent = `${pct}%`;
  dom.progressBarFill.style.width = `${pct}%`;
  dom.progressSub.textContent = `${completed} de ${total} señas aprendidas`;
}

// Populate the practice page dropdown selection
function populatePracticeSelect() {
  dom.practiceSelectSign.innerHTML = "";
  SIGNS.forEach(sign => {
    const opt = document.createElement("option");
    opt.value = sign.id;
    opt.textContent = `${sign.name} (${sign.category.toUpperCase()})`;
    dom.practiceSelectSign.appendChild(opt);
  });
}

// Router and View switching
function navigateTo(viewName) {
  state.currentView = viewName;
  
  // Hide all sections
  dom.viewLogin.classList.add("hidden");
  dom.viewTutorials.classList.add("hidden");
  dom.viewCamera.classList.add("hidden");
  
  // Remove active from links
  dom.navTutorials.classList.remove("active");
  dom.navCamera.classList.remove("active");

  // Reset overlays/state if changing views
  hideSuccessModal();

  if (viewName === "login") {
    dom.header.classList.add("hidden");
    dom.viewLogin.classList.remove("hidden");
    stopWebcam();
  } else if (viewName === "tutorials") {
    dom.header.classList.remove("hidden");
    dom.viewTutorials.classList.remove("hidden");
    dom.navTutorials.classList.add("active");
    stopWebcam();
  } else if (viewName === "camera") {
    dom.header.classList.remove("hidden");
    dom.viewCamera.classList.remove("hidden");
    dom.navCamera.classList.add("active");
    updatePracticeSignDetails();
  }
}

// Login logic
function performLogin(email, name = "Aprendiz") {
  state.user.isLoggedIn = true;
  state.user.email = email;
  state.user.name = name;
  
  // Update name in DOM
  dom.userDisplayName.textContent = name;
  dom.userWelcomeName.forEach(el => el.textContent = name);
  
  navigateTo("tutorials");
}

function handleLogout() {
  state.user.isLoggedIn = false;
  state.user.email = "";
  state.user.name = "Invitado";
  navigateTo("login");
}

// Lesson Renderer in the Learning View
function renderLessons() {
  dom.lessonsGrid.innerHTML = "";
  
  const filteredSigns = SIGNS.filter(sign => {
    if (state.activeCategoryFilter === "all") return true;
    return sign.category === state.activeCategoryFilter;
  });

  if (filteredSigns.length === 0) {
    dom.lessonsGrid.innerHTML = "<p class='no-lessons'>No se encontraron lecciones en esta categoría.</p>";
    return;
  }

  filteredSigns.forEach(sign => {
    const isCompleted = state.user.completedSigns.includes(sign.id);
    
    const card = document.createElement("article");
    card.className = "lesson-card card glass animate-pop";
    card.innerHTML = `
      <div class="lesson-illustration-wrapper">
        ${sign.svg}
      </div>
      <div class="lesson-info">
        <div class="card-header-row">
          <h4>${sign.name}</h4>
          <span class="category-tag ${sign.category === 'abecedario' ? 'tag-purple' : 'tag-orange'}">${sign.category}</span>
        </div>
        <p class="lesson-desc">${sign.desc}</p>
        <div class="lesson-actions">
          <span class="status-badge ${isCompleted ? 'completed' : ''}">
            ${isCompleted ? `
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--success)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              Aprendida
            ` : `
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/></svg>
              Pendiente
            `}
          </span>
          <button class="btn btn-primary btn-sm btn-practice-trigger" data-id="${sign.id}">
            Practicar
          </button>
        </div>
      </div>
    `;
    
    // Clicking "Practicar" sends user directly to practice view with this sign active
    card.querySelector(".btn-practice-trigger").addEventListener("click", (e) => {
      e.stopPropagation();
      startPracticeForSign(sign.id);
    });

    // Clicking card also triggers practice
    card.addEventListener("click", () => {
      startPracticeForSign(sign.id);
    });

    dom.lessonsGrid.appendChild(card);
  });
}

function startPracticeForSign(signId) {
  state.currentPracticeSignId = signId;
  dom.practiceSelectSign.value = signId;
  navigateTo("camera");
}

// Practice Section Update
function updatePracticeSignDetails() {
  const sign = SIGNS.find(s => s.id === state.currentPracticeSignId);
  if (!sign) return;

  dom.targetSignName.textContent = sign.name;
  dom.targetIllustration.innerHTML = sign.svg;
  dom.targetSignCategory.textContent = sign.category;
  dom.targetSignCategory.className = `category-tag ${sign.category === 'abecedario' ? 'tag-purple' : 'tag-orange'}`;
  dom.targetSignDesc.textContent = sign.desc;
  dom.targetSignTip.textContent = sign.tip;

  hideSuccessModal();
  
  // If camera is already active, reset simulation values and ready it
  if (state.cameraActive) {
    resetSimulationState();
  }
}

// Reset simulated AI detection states
function resetSimulationState() {
  state.isDetecting = false;
  state.aiConfidence = 0;
  dom.aiConfidenceValue.textContent = "0%";
  dom.aiConfidenceFill.style.width = "0%";
  dom.aiDetectedSign.textContent = "Analizando...";
  dom.btnSimulateMatch.disabled = !state.cameraActive;
}

// Web Audio API Sound generator
function playSuccessSound() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    const now = ctx.currentTime;
    osc.type = 'sine';
    osc.frequency.setValueAtTime(523.25, now);       // C5
    osc.frequency.setValueAtTime(659.25, now + 0.1); // E5
    osc.frequency.setValueAtTime(783.99, now + 0.2); // G5
    osc.frequency.setValueAtTime(1046.50, now + 0.3); // C6
    
    gain.gain.setValueAtTime(0.12, now);
    gain.gain.exponentialRampToValueAtTime(0.005, now + 0.55);
    
    osc.start(now);
    osc.stop(now + 0.6);
  } catch(e) {
    console.warn("Audio Context unavailable or blocked by browser policy.", e);
  }
}

// Show/Hide simulated success splash card
function showSuccessModal() {
  const currentSign = SIGNS.find(s => s.id === state.currentPracticeSignId);
  dom.successSignName.textContent = currentSign ? currentSign.name : "";
  dom.successFeedback.classList.remove("hidden");
}

function hideSuccessModal() {
  dom.successFeedback.classList.add("hidden");
}

// WebCam Device Access API
function startWebcam() {
  if (state.cameraActive) return;

  dom.btnCameraText.textContent = "Iniciando...";
  dom.btnCameraToggle.disabled = true;

  navigator.mediaDevices.getUserMedia({
    video: {
      width: { ideal: 640 },
      height: { ideal: 480 },
      facingMode: "user"
    },
    audio: false
  })
  .then(stream => {
    state.stream = stream;
    state.cameraActive = true;
    
    dom.webcamVideo.srcObject = stream;
    dom.webcamVideo.classList.remove("hidden");
    dom.aiOverlay.classList.remove("hidden");
    dom.aiScanLines.classList.remove("hidden");
    dom.aiOutputBadge.classList.remove("hidden");
    
    dom.cameraPlaceholder.classList.add("hidden");
    dom.cameraStatusDot.className = "pulse-indicator green";
    
    dom.btnCameraText.textContent = "Apagar Cámara";
    dom.btnCameraToggle.className = "btn btn-icon-text btn-danger";
    dom.btnCameraToggle.disabled = false;
    
    resetSimulationState();
    
    // Start drawing AI overlay frames
    requestAnimationFrame(renderAIOverlayLoop);
  })
  .catch(err => {
    console.error("Camera access error:", err);
    alert("No se pudo acceder a la cámara. Asegúrate de otorgar permisos en tu navegador.");
    
    dom.btnCameraText.textContent = "Encender Cámara";
    dom.btnCameraToggle.className = "btn btn-icon-text btn-success";
    dom.btnCameraToggle.disabled = false;
    state.cameraActive = false;
  });
}

function stopWebcam() {
  if (!state.cameraActive) return;

  if (state.stream) {
    state.stream.getTracks().forEach(track => track.stop());
  }
  
  state.stream = null;
  state.cameraActive = false;
  
  dom.webcamVideo.srcObject = null;
  dom.webcamVideo.classList.add("hidden");
  dom.aiOverlay.classList.add("hidden");
  dom.aiScanLines.classList.add("hidden");
  dom.aiOutputBadge.classList.add("hidden");
  
  dom.cameraPlaceholder.classList.remove("hidden");
  dom.cameraStatusDot.className = "pulse-indicator red";
  
  dom.btnCameraText.textContent = "Encender Cámara";
  dom.btnCameraToggle.className = "btn btn-icon-text btn-success";
  dom.btnSimulateMatch.disabled = true;
  
  resetSimulationState();
}

// AI Overlay Canvas render loop
// Draws a simulated 21-joint skeleton of a hand overlayed on the video stream.
function renderAIOverlayLoop() {
  if (!state.cameraActive || !state.stream) return;

  const canvas = dom.aiOverlay;
  const ctx = canvas.getContext("2d");
  const video = dom.webcamVideo;

  // Sync canvas size to matched video dimensions
  if (canvas.width !== video.clientWidth || canvas.height !== video.clientHeight) {
    canvas.width = video.clientWidth;
    canvas.height = video.clientHeight;
  }

  // Clear previous frame
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Look up skeleton type matching current selected sign
  const currentSign = SIGNS.find(s => s.id === state.currentPracticeSignId);
  const skeletonType = currentSign ? currentSign.skeletonType : "open_palm";
  const preset = SKELETON_PRESETS[skeletonType] || SKELETON_PRESETS.open_palm;

  // Apply some organic wiggle (noise) to make the points look like real live trackers
  const width = canvas.width;
  const height = canvas.height;
  const t = Date.now() * 0.005;

  const getJointPos = (joint) => {
    // Math.sin/cos adds organic wiggling over time
    const noiseX = Math.sin(t * 2 + joint.x * 10) * state.skeletonNoiseMultiplier;
    const noiseY = Math.cos(t * 1.5 + joint.y * 10) * state.skeletonNoiseMultiplier;
    return {
      x: (joint.x + noiseX) * width,
      y: (joint.y + noiseY) * height
    };
  };

  // Pre-calculate positions
  const wrist = getJointPos(preset.wrist);
  const thumb = preset.thumb.map(getJointPos);
  const index = preset.index.map(getJointPos);
  const middle = preset.middle.map(getJointPos);
  const ring = preset.ring.map(getJointPos);
  const pinky = preset.pinky.map(getJointPos);

  const fingers = [thumb, index, middle, ring, pinky];

  // Draw bones (skeletal lines connecting the joints)
  ctx.lineWidth = 3;
  ctx.strokeStyle = state.isDetecting ? "rgba(34, 197, 94, 0.7)" : "rgba(99, 102, 241, 0.7)";
  ctx.shadowBlur = 6;
  ctx.shadowColor = state.isDetecting ? "#22c55e" : "#6366f1";

  fingers.forEach(finger => {
    ctx.beginPath();
    ctx.moveTo(wrist.x, wrist.y);
    finger.forEach(joint => {
      ctx.lineTo(joint.x, joint.y);
    });
    ctx.stroke();
  });

  // Connect knuckles bases (palm outline)
  ctx.beginPath();
  ctx.moveTo(thumb[0].x, thumb[0].y);
  ctx.lineTo(index[0].x, index[0].y);
  ctx.lineTo(middle[0].x, middle[0].y);
  ctx.lineTo(ring[0].x, ring[0].y);
  ctx.lineTo(pinky[0].x, pinky[0].y);
  ctx.lineTo(wrist.x, wrist.y);
  ctx.closePath();
  ctx.stroke();

  // Draw joints (circles at points)
  ctx.shadowBlur = 0; // Clear shadow for small circles
  const drawJoint = (p, size = 6) => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, size, 0, 2 * Math.PI);
    ctx.fillStyle = state.isDetecting ? "#22c55e" : "#ffffff";
    ctx.fill();
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = state.isDetecting ? "#ffffff" : "#6366f1";
    ctx.stroke();
  };

  drawJoint(wrist, 8);
  fingers.forEach(finger => {
    finger.forEach(joint => drawJoint(joint, 5));
  });

  // If in the middle of active matching simulation, step up confidence level
  if (state.isDetecting) {
    if (state.aiConfidence < 98) {
      // Accelerating increase to simulate locking onto gesture
      state.aiConfidence += Math.floor(Math.random() * 4) + 1;
      if (state.aiConfidence > 98) state.aiConfidence = 98;
      
      dom.aiConfidenceValue.textContent = `${state.aiConfidence}%`;
      dom.aiConfidenceFill.style.width = `${state.aiConfidence}%`;
      
      if (state.aiConfidence >= 75) {
        dom.aiDetectedSign.textContent = currentSign ? currentSign.name : "Analizando...";
      } else {
        dom.aiDetectedSign.textContent = "Procesando...";
      }
    } else {
      // Completed recognition! Trigger success feedback
      state.isDetecting = false;
      playSuccessSound();
      
      // Save progress
      if (!state.user.completedSigns.includes(state.currentPracticeSignId)) {
        state.user.completedSigns.push(state.currentPracticeSignId);
        saveUserProgress();
      }

      showSuccessModal();
    }
  }

  // Request next frame
  requestAnimationFrame(renderAIOverlayLoop);
}

// Simulate AI Scan logic triggered by user click
function triggerAISimulatedMatch() {
  if (!state.cameraActive) return;

  hideSuccessModal();
  state.isDetecting = true;
  state.aiConfidence = 0;
  dom.btnSimulateMatch.disabled = true;
  dom.aiDetectedSign.textContent = "Escaneando...";
}

// Next Practice Sign Selection
function loadNextPracticeSign() {
  const currentIndex = SIGNS.findIndex(s => s.id === state.currentPracticeSignId);
  const nextIndex = (currentIndex + 1) % SIGNS.length;
  const nextSign = SIGNS[nextIndex];
  
  if (nextSign) {
    state.currentPracticeSignId = nextSign.id;
    dom.practiceSelectSign.value = nextSign.id;
    updatePracticeSignDetails();
  }
}

// --- 7. EVENT LISTENERS SETUP ---
function setupEventListeners() {
  // Theme switch
  dom.themeToggle.addEventListener("click", toggleTheme);
  
  // Navigation Links
  dom.navTutorials.addEventListener("click", () => navigateTo("tutorials"));
  dom.navCamera.addEventListener("click", () => navigateTo("camera"));
  dom.btnLogo.addEventListener("click", () => {
    if (state.user.isLoggedIn) {
      navigateTo("tutorials");
    } else {
      navigateTo("login");
    }
  });

  // Logout Click
  dom.btnLogout.addEventListener("click", handleLogout);
  
  // Login Form Submissions
  dom.loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = dom.loginEmail.value;
    // Extract first part of email for a dynamic greeting name
    const rawName = email.split('@')[0];
    const cleanName = rawName.charAt(0).toUpperCase() + rawName.slice(1);
    performLogin(email, cleanName);
  });

  // Guest Access
  dom.btnGuest.addEventListener("click", () => {
    performLogin("invitado@manosquehablan.co", "Invitado");
  });

  // Category Filter Buttons
  dom.filterButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      dom.filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      
      state.activeCategoryFilter = btn.dataset.category;
      renderLessons();
    });
  });

  // Camera Buttons Actions
  dom.btnCameraToggle.addEventListener("click", () => {
    if (state.cameraActive) {
      stopWebcam();
    } else {
      startWebcam();
    }
  });

  // Simulated AI Match triggers
  dom.btnSimulateMatch.addEventListener("click", triggerAISimulatedMatch);

  // Dropdown Practice Sign changed
  dom.practiceSelectSign.addEventListener("change", (e) => {
    state.currentPracticeSignId = e.target.value;
    updatePracticeSignDetails();
  });

  // Success modal triggers
  dom.btnNextPractice.addEventListener("click", () => {
    hideSuccessModal();
    loadNextPracticeSign();
  });
}
