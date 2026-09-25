/* Inline SVG artwork — keeps the site self-contained (no external images,
   no extra network requests) and always on-brand. */

export function HeroArt() {
  return (
    <svg viewBox="0 0 520 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ha-bg" x1="0" y1="0" x2="520" y2="400">
          <stop offset="0%" stopColor="#f4eefa" />
          <stop offset="100%" stopColor="#eadff6" />
        </linearGradient>
        <linearGradient id="ha-screen" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#372a46" />
          <stop offset="100%" stopColor="#23192e" />
        </linearGradient>
        <linearGradient id="ha-acc" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#9062c5" />
          <stop offset="100%" stopColor="#be9fe1" />
        </linearGradient>
      </defs>

      <rect width="520" height="400" fill="url(#ha-bg)" />
      <circle cx="90" cy="70" r="70" fill="#ffffff" opacity="0.35" />
      <circle cx="450" cy="330" r="90" fill="#ffffff" opacity="0.25" />

      {/* main code window */}
      <g>
        <rect
          x="150"
          y="92"
          width="300"
          height="196"
          rx="14"
          fill="url(#ha-screen)"
        />
        <rect x="150" y="92" width="300" height="26" rx="14" fill="#49395c" />
        <rect x="150" y="104" width="300" height="14" fill="#413252" />
        <circle cx="166" cy="105" r="4" fill="#ff6b6b" />
        <circle cx="180" cy="105" r="4" fill="#ffd166" />
        <circle cx="194" cy="105" r="4" fill="#5ee6a8" />

        {/* code lines */}
        <rect x="168" y="134" width="52" height="7" rx="3.5" fill="#be9fe1" />
        <rect x="226" y="134" width="82" height="7" rx="3.5" fill="#79698c" />
        <rect x="180" y="152" width="96" height="7" rx="3.5" fill="#5ee6a8" />
        <rect x="282" y="152" width="44" height="7" rx="3.5" fill="#79698c" />
        <rect x="180" y="170" width="64" height="7" rx="3.5" fill="#ffd166" />
        <rect x="250" y="170" width="110" height="7" rx="3.5" fill="#79698c" />
        <rect x="192" y="188" width="78" height="7" rx="3.5" fill="#7dd3fc" />
        <rect x="168" y="206" width="48" height="7" rx="3.5" fill="#be9fe1" />
        <rect x="222" y="206" width="66" height="7" rx="3.5" fill="#79698c" />
        <rect x="168" y="230" width="128" height="7" rx="3.5" fill="#534266" />
        <rect x="168" y="248" width="88" height="7" rx="3.5" fill="#534266" />

        {/* stand */}
        <rect x="268" y="288" width="64" height="10" rx="5" fill="#c5b3d9" />
        <rect x="230" y="298" width="140" height="10" rx="5" fill="#c0a4e1" />
      </g>

      {/* neural / AI node badge */}
      <g transform="translate(300 40)">
        <rect width="132" height="92" rx="16" fill="#ffffff" opacity="0.94" />
        <circle cx="66" cy="34" r="9" fill="url(#ha-acc)" />
        <circle cx="34" cy="60" r="7" fill="#d8c5ed" />
        <circle cx="98" cy="60" r="7" fill="#d8c5ed" />
        <circle cx="66" cy="74" r="6" fill="#a379d3" />
        <path
          d="M66 43 34 60M66 43l32 17M34 60l32 14M98 60l-32 14"
          stroke="#d8c5ed"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <text
          x="66"
          y="20"
          textAnchor="middle"
          fill="#7d50b1"
          fontSize="11"
          fontWeight="700"
          fontFamily="system-ui, sans-serif"
        >
          AI
        </text>
      </g>

      {/* build-status card */}
      <g transform="translate(44 236)">
        <rect width="156" height="110" rx="16" fill="#ffffff" opacity="0.94" />
        <circle cx="30" cy="28" r="12" fill="url(#ha-acc)" />
        <path
          d="m25.5 28 3 3 6-6"
          stroke="#ffffff"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="50" y="24" width="72" height="8" rx="4" fill="#e9dff5" />
        <rect x="16" y="52" width="124" height="8" rx="4" fill="#f3eef9" />
        <rect x="16" y="52" width="94" height="8" rx="4" fill="#a379d3" />
        <rect x="16" y="72" width="124" height="8" rx="4" fill="#f3eef9" />
        <rect x="16" y="72" width="58" height="8" rx="4" fill="#be9fe1" />
        <rect x="16" y="92" width="68" height="6" rx="3" fill="#eee8f5" />
      </g>

      {/* floating dots */}
      <circle cx="120" cy="120" r="6" fill="#a379d3" opacity="0.6" />
      <circle cx="480" cy="180" r="8" fill="#9062c5" opacity="0.35" />
      <circle cx="96" cy="330" r="5" fill="#9062c5" opacity="0.4" />
    </svg>
  );
}

export function TeamArt() {
  return (
    <svg viewBox="0 0 520 380" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ta-bg" x1="0" y1="0" x2="520" y2="380">
          <stop offset="0%" stopColor="#f1eaf9" />
          <stop offset="100%" stopColor="#e7dbf4" />
        </linearGradient>
        <linearGradient id="ta-acc" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#9062c5" />
          <stop offset="100%" stopColor="#be9fe1" />
        </linearGradient>
      </defs>

      <rect width="520" height="380" fill="url(#ta-bg)" />
      <circle cx="440" cy="60" r="80" fill="#ffffff" opacity="0.3" />

      {/* meeting table */}
      <rect x="70" y="250" width="380" height="18" rx="9" fill="#c5b3d9" />
      <rect x="150" y="268" width="220" height="60" rx="10" fill="#d8c5ed" opacity="0.6" />

      {/* laptops */}
      <rect x="120" y="216" width="70" height="42" rx="6" fill="#372a46" />
      <rect x="128" y="224" width="54" height="26" rx="3" fill="#9062c5" opacity="0.6" />
      <rect x="330" y="216" width="70" height="42" rx="6" fill="#372a46" />
      <rect x="338" y="224" width="54" height="26" rx="3" fill="#9062c5" opacity="0.6" />

      {/* three teammates */}
      <g>
        <circle cx="155" cy="150" r="30" fill="#9062c5" />
        <path d="M110 232c0-26 20-46 45-46s45 20 45 46z" fill="url(#ta-acc)" />
      </g>
      <g>
        <circle cx="260" cy="132" r="34" fill="#7d50b1" />
        <path d="M208 226c0-29 23-52 52-52s52 23 52 52z" fill="#a67fd3" />
      </g>
      <g>
        <circle cx="365" cy="150" r="30" fill="#a379d3" />
        <path d="M320 232c0-26 20-46 45-46s45 20 45 46z" fill="url(#ta-acc)" />
      </g>

      {/* idea → code → impact chips */}
      <g transform="translate(36 40)">
        <rect width="118" height="112" rx="14" fill="#ffffff" opacity="0.92" />
        <text x="18" y="34" fill="#7d50b1" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">Ideas</text>
        <text x="18" y="66" fill="#a67fd3" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">Code</text>
        <text x="18" y="98" fill="#a379d3" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">Impact</text>
        <path d="M74 28h22M74 60h22M74 92h22" stroke="#e7dbf4" strokeWidth="3" strokeLinecap="round" />
      </g>
    </svg>
  );
}

export function ServicesArt() {
  return (
    <svg viewBox="0 0 520 380" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sa-bg" x1="0" y1="0" x2="520" y2="380">
          <stop offset="0%" stopColor="#f4eefa" />
          <stop offset="100%" stopColor="#e8dcf5" />
        </linearGradient>
        <linearGradient id="sa-screen" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#9062c5" />
          <stop offset="100%" stopColor="#694394" />
        </linearGradient>
      </defs>

      <rect width="520" height="380" fill="url(#sa-bg)" />
      <circle cx="80" cy="310" r="70" fill="#ffffff" opacity="0.3" />

      {/* laptop */}
      <rect x="130" y="110" width="260" height="164" rx="14" fill="url(#sa-screen)" />
      <rect x="146" y="126" width="228" height="132" rx="8" fill="#4d3a62" />
      <path
        d="M212 170l-22 22 22 22M308 170l22 22-22 22M268 162l-16 60"
        stroke="#ffffff"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="100" y="274" width="320" height="14" rx="7" fill="#c0a4e1" />

      {/* orbiting service chips */}
      {[
        { x: 60, y: 90, icon: "◇" },
        { x: 416, y: 60, icon: "○" },
        { x: 440, y: 200, icon: "△" },
        { x: 46, y: 190, icon: "□" },
      ].map((c, i) => (
        <g key={i} transform={`translate(${c.x} ${c.y})`}>
          <rect width="46" height="46" rx="13" fill="#ffffff" opacity="0.95" />
          <text
            x="23"
            y="31"
            textAnchor="middle"
            fill="#9062c5"
            fontSize="20"
            fontFamily="system-ui, sans-serif"
          >
            {c.icon}
          </text>
        </g>
      ))}

      {/* cloud */}
      <g transform="translate(360 290)">
        <ellipse cx="46" cy="24" rx="46" ry="22" fill="#ffffff" opacity="0.9" />
        <circle cx="28" cy="18" r="18" fill="#ffffff" opacity="0.9" />
        <circle cx="58" cy="14" r="22" fill="#ffffff" opacity="0.9" />
      </g>
    </svg>
  );
}

export function ContactArt() {
  return (
    <svg viewBox="0 0 360 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ca-acc" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#9062c5" />
          <stop offset="100%" stopColor="#be9fe1" />
        </linearGradient>
      </defs>
      <circle cx="300" cy="60" r="60" fill="#f3eef9" />
      <circle cx="60" cy="240" r="46" fill="#f3edfa" />
      <g transform="translate(96 74)">
        <rect width="170" height="118" rx="16" fill="url(#ca-acc)" />
        <path
          d="M14 22l71 50 71-50"
          stroke="#ffffff"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </g>
      <circle cx="268" cy="206" r="14" fill="#a379d3" opacity="0.5" />
      <circle cx="82" cy="94" r="9" fill="#9062c5" opacity="0.45" />
    </svg>
  );
}

/* --- project thumbnails ------------------------------------------------- */

function ProjectWeb() {
  return (
    <svg viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="250" fill="#372a46" />
      <rect x="40" y="34" width="320" height="182" rx="12" fill="#ffffff" />
      <rect x="40" y="34" width="320" height="26" rx="12" fill="#f3eef9" />
      <rect x="40" y="48" width="320" height="12" fill="#f3eef9" />
      <circle cx="58" cy="47" r="4" fill="#d8c5ed" />
      <circle cx="72" cy="47" r="4" fill="#d8c5ed" />
      <circle cx="86" cy="47" r="4" fill="#d8c5ed" />
      <rect x="58" y="76" width="120" height="10" rx="5" fill="#9062c5" />
      <rect x="58" y="94" width="180" height="7" rx="3.5" fill="#e9dff5" />
      <rect x="58" y="108" width="150" height="7" rx="3.5" fill="#e9dff5" />
      <rect x="58" y="132" width="86" height="64" rx="8" fill="#f8f4fc" />
      <rect x="156" y="132" width="86" height="64" rx="8" fill="#f8f4fc" />
      <rect x="254" y="132" width="86" height="64" rx="8" fill="#f3eef9" />
      <rect x="254" y="76" width="86" height="40" rx="8" fill="#a379d3" opacity="0.25" />
    </svg>
  );
}

function ProjectMobile() {
  return (
    <svg viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="250" fill="#f8f4fc" />
      <circle cx="330" cy="40" r="60" fill="#f3eef9" />
      <g transform="translate(112 26)">
        <rect width="84" height="168" rx="14" fill="#372a46" />
        <rect x="7" y="14" width="70" height="140" rx="8" fill="#ffffff" />
        <rect x="16" y="26" width="34" height="7" rx="3.5" fill="#9062c5" />
        <rect x="16" y="42" width="52" height="34" rx="6" fill="#f3eef9" />
        <rect x="16" y="84" width="52" height="7" rx="3.5" fill="#e9dff5" />
        <rect x="16" y="98" width="40" height="7" rx="3.5" fill="#e9dff5" />
        <rect x="16" y="118" width="52" height="22" rx="6" fill="#a379d3" />
      </g>
      <g transform="translate(212 52)">
        <rect width="84" height="168" rx="14" fill="#9062c5" />
        <rect x="7" y="14" width="70" height="140" rx="8" fill="#ffffff" />
        <circle cx="42" cy="58" r="26" fill="#f3eef9" />
        <path
          d="M42 42v16l11 7"
          stroke="#9062c5"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <rect x="16" y="98" width="52" height="7" rx="3.5" fill="#e9dff5" />
        <rect x="16" y="112" width="36" height="7" rx="3.5" fill="#e9dff5" />
        <rect x="16" y="130" width="52" height="14" rx="7" fill="#d8c5ed" />
      </g>
    </svg>
  );
}

function ProjectAi() {
  return (
    <svg viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="250" fill="#23192e" />
      <circle cx="200" cy="125" r="96" fill="#9062c5" opacity="0.16" />
      <circle cx="200" cy="125" r="64" fill="#a379d3" opacity="0.14" />

      <g stroke="#a379d3" strokeWidth="2" opacity="0.75">
        <path d="M200 76v98M200 125l-62-34M200 125l62-34M200 125l-62 34M200 125l62 34" />
        <path d="M138 91l124 68M262 91l-124 68" opacity="0.4" />
      </g>

      <circle cx="200" cy="125" r="16" fill="#be9fe1" />
      <circle cx="200" cy="76" r="9" fill="#e9dff5" />
      <circle cx="200" cy="174" r="9" fill="#e9dff5" />
      <circle cx="138" cy="91" r="9" fill="#a379d3" />
      <circle cx="262" cy="91" r="9" fill="#a379d3" />
      <circle cx="138" cy="159" r="9" fill="#a379d3" />
      <circle cx="262" cy="159" r="9" fill="#a379d3" />

      <rect x="30" y="30" width="54" height="8" rx="4" fill="#4d3a62" />
      <rect x="30" y="46" width="34" height="8" rx="4" fill="#4d3a62" />
      <rect x="316" y="206" width="54" height="8" rx="4" fill="#4d3a62" />
    </svg>
  );
}

function ProjectMarketing() {
  return (
    <svg viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="250" fill="#ffffff" />
      <rect x="34" y="28" width="332" height="194" rx="12" fill="#fcfafe" />
      <rect x="56" y="52" width="110" height="9" rx="4.5" fill="#9062c5" />
      <rect x="56" y="70" width="150" height="7" rx="3.5" fill="#eee6f8" />

      <g>
        <rect x="60" y="150" width="34" height="46" rx="6" fill="#e9dff5" />
        <rect x="106" y="126" width="34" height="70" rx="6" fill="#d8c5ed" />
        <rect x="152" y="140" width="34" height="56" rx="6" fill="#e9dff5" />
        <rect x="198" y="102" width="34" height="94" rx="6" fill="#a379d3" />
        <rect x="244" y="118" width="34" height="78" rx="6" fill="#d8c5ed" />
        <rect x="290" y="80" width="34" height="116" rx="6" fill="#9062c5" />
      </g>

      <path
        d="M66 138l44-22 46 12 46-34 46 14 46-26"
        stroke="#7d50b1"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.5"
      />
      <path
        d="M300 74l14-8 2 16"
        stroke="#7d50b1"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.7"
      />
    </svg>
  );
}

function ProjectUiux() {
  return (
    <svg viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="250" fill="#f3eef9" />
      <rect x="36" y="30" width="184" height="190" rx="12" fill="#ffffff" />
      <rect x="54" y="50" width="70" height="9" rx="4.5" fill="#9062c5" />
      <rect x="54" y="72" width="148" height="52" rx="8" fill="#f8f4fc" />
      <rect x="54" y="136" width="70" height="66" rx="8" fill="#f3eef9" />
      <rect x="132" y="136" width="70" height="66" rx="8" fill="#e9dff5" />

      <rect x="236" y="30" width="128" height="88" rx="12" fill="#ffffff" />
      <circle cx="270" cy="66" r="14" fill="#a379d3" />
      <rect x="294" y="54" width="52" height="7" rx="3.5" fill="#e9dff5" />
      <rect x="294" y="70" width="36" height="7" rx="3.5" fill="#e9dff5" />
      <rect x="252" y="92" width="96" height="10" rx="5" fill="#f8f4fc" />

      <rect x="236" y="132" width="128" height="88" rx="12" fill="#9062c5" />
      <rect x="254" y="152" width="56" height="8" rx="4" fill="#ffffff" opacity="0.85" />
      <rect x="254" y="170" width="92" height="6" rx="3" fill="#ffffff" opacity="0.4" />
      <rect x="254" y="184" width="74" height="6" rx="3" fill="#ffffff" opacity="0.4" />
      <rect x="254" y="200" width="44" height="10" rx="5" fill="#ffffff" opacity="0.9" />
    </svg>
  );
}

const projectArt = {
  web: ProjectWeb,
  mobile: ProjectMobile,
  ai: ProjectAi,
  marketing: ProjectMarketing,
  uiux: ProjectUiux,
};

export function ProjectArt({ theme = "web" }) {
  const Art = projectArt[theme] || ProjectWeb;
  return <Art />;
}
