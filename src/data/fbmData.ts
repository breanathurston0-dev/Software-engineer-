import { FeatureModule, PricingPlan, Testimonial, FaqItem, SpecRow } from '../types';

export const CORE_MODULES: FeatureModule[] = [
  {
    id: 'full-verify',
    title: 'Full Verify Registration',
    badge: { text: 'HOT', type: 'hot' },
    description: 'Generate authentic, phone-verified accounts instantly. Handles everything from global OTP extraction to automatic cookie acceptance without lifting a finger.',
    icon: 'UserCheck',
    tags: ['Phone OTP', 'Auto Cookie', 'Multi-Country', 'Post-Reg Setup'],
    capacity: {
      headline: 'Full SMS Verification Throughput',
      rate: '50–80 Verified Accounts/Hr',
      limit: 'Up to 15 concurrent SMS API threads',
      description: 'Fully automated phone number acquisition, SMS code reception, and auto-fallback across 45+ international country pools.'
    },
    tagDetails: {
      'Phone OTP': {
        title: 'Virtual SMS API Code Extraction',
        description: 'Automated REST polling against virtual SMS providers with auto-cancel if code is delayed over 180s.',
        capacity: '15 parallel SMS worker threads'
      },
      'Auto Cookie': {
        title: 'Consent & GDPR Bypass Engine',
        description: 'Detects and accepts regional cookie prompts and dialogs before entering the registration viewport.',
        capacity: '<250ms instant DOM resolution'
      },
      'Multi-Country': {
        title: '45+ Country Dialing Codes',
        description: 'Rotate phone origins dynamically across USA, UK, Vietnam, Indonesia, Brazil, Pakistan, and Europe.',
        capacity: '45+ country carrier pools'
      },
      'Post-Reg Setup': {
        title: 'Session Handover & Token Cache',
        description: 'Exports fresh 2FA security secrets, UserAgent string, and JSON session cookies on registration finish.',
        capacity: '100% automated session preservation'
      }
    },
    color: '#ef4444',
    bgColor: 'rgba(239, 68, 68, 0.08)',
    borderColor: '#ef4444'
  },
  {
    id: 'no-verify',
    title: 'No Verify Registration',
    description: 'Scale your campaigns instantly. Create high-volume accounts rapidly using email or custom data without needing phone verification.',
    icon: 'ShieldCheck',
    tags: ['Email Based', 'High Volume', 'Custom Data', 'Fast Speed'],
    capacity: {
      headline: 'Fast Mass Account Generation',
      rate: '150–250 Accounts/Hr',
      limit: '5,000+ accounts daily on standard VPS',
      description: 'Lightweight registration pipeline utilizing temporary webmail or private IMAP mailboxes without SMS costs.'
    },
    tagDetails: {
      'Email Based': {
        title: 'Automated Mailbox Polling',
        description: 'Listens directly to webmail API or private IMAP servers to capture 6-digit confirmation codes in seconds.',
        capacity: 'Up to 25 accounts/min'
      },
      'High Volume': {
        title: 'Bulk Batch Generation Engine',
        description: 'Engineered for rapid growth farms that require hundreds of test accounts per marketing session.',
        capacity: '5,000+ daily account generation capacity'
      },
      'Custom Data': {
        title: 'Custom Name & Password Injection',
        description: 'Feed specific first/last name databases, date-of-birth ranges, and custom password standards.',
        capacity: 'Up to 50,000 rows per batch'
      },
      'Fast Speed': {
        title: 'Streamlined DOM Execution Cycle',
        description: 'Skips unnecessary assets and decorative widgets to minimize roundtrip registration time.',
        capacity: '35–45 seconds per account cycle'
      }
    },
    color: '#2563eb',
    bgColor: 'rgba(37, 99, 235, 0.08)',
    borderColor: '#2563eb'
  },
  {
    id: 'smart-profile',
    title: 'Smart Profile Builder',
    badge: { text: 'PRO', type: 'pro' },
    description: 'Make every account look 100% human. Automatically sets avatars, cover photos, bios, relationships, and education details in seconds.',
    icon: 'Image',
    tags: ['Avatar Upload', 'Cover Photo', 'Bio & City', 'Education'],
    capacity: {
      headline: 'Human Persona Enrichment Engine',
      rate: '100–150 Profiles Enriched/Hr',
      limit: 'Unlimited unique image and spintax database',
      description: 'Transforms blank fresh accounts into established profiles with randomized biographical markers and high-res media.'
    },
    tagDetails: {
      'Avatar Upload': {
        title: 'Anti-Detect EXIF Stripper & Upload',
        description: 'Randomizes portrait images, strips embedded camera EXIF metadata, and crops to circular standards.',
        capacity: 'Pool of 10,000+ photos supported'
      },
      'Cover Photo': {
        title: 'Landscape Banner Auto-Upload',
        description: 'Picks relevant horizontal landscape images matching the profile persona to maximize trust metrics.',
        capacity: 'Sub-second background upload'
      },
      'Bio & City': {
        title: 'Spintax Dynamic Bio Formulation',
        description: 'Generates non-repetitive bio text and sets hometown/current city mapped to proxy geographical coordinates.',
        capacity: '1,000+ spintax permutation variations'
      },
      'Education': {
        title: 'Plausible Institutional History',
        description: 'Assigns realistic secondary high school and college institutions based on target location database.',
        capacity: 'Geo-targeted education database'
      }
    },
    color: '#8b5cf6',
    bgColor: 'rgba(139, 92, 246, 0.08)',
    borderColor: '#8b5cf6'
  },
  {
    id: 'page-creation',
    title: 'Page Creation Automation',
    badge: { text: 'NEW', type: 'new' },
    description: 'Launch business pages on autopilot. Fills names, categories, and bios across multiple accounts simultaneously via stealth desktop mode.',
    icon: 'LayoutGrid',
    tags: ['Desktop Mode', 'Custom Names', 'Auto-Select', 'Bulk Pages'],
    capacity: {
      headline: 'Meta Business Page Automation',
      rate: '40–60 Facebook Pages/Hr',
      limit: 'Up to 5 business pages per profile account',
      description: 'Simulates genuine desktop Chrome sessions to create, categorize, and configure business fan pages.'
    },
    tagDetails: {
      'Desktop Mode': {
        title: 'Full Viewport Desktop Emulation',
        description: 'Opens 1920x1080 resolution desktop browser sessions to navigate Meta Business Suite without mobile roadblocks.',
        capacity: '1920x1080 viewport emulation'
      },
      'Custom Names': {
        title: 'Smart Brand Name Generator',
        description: 'Combines dynamic prefixes, brand keywords, and localized suffixes to create professional page identities.',
        capacity: 'Unlimited custom keyword lists'
      },
      'Auto-Select': {
        title: 'Meta Category Classification',
        description: 'Auto-selects verified Facebook categories (eCommerce, Digital Creator, Agency, Retail) seamlessly.',
        capacity: '250+ official Facebook categories'
      },
      'Bulk Pages': {
        title: 'Sequential Multi-Page Deployment',
        description: 'Constructs up to 5 distinct fan pages per account with human-like rest intervals to evade velocity flags.',
        capacity: '5 business pages per profile'
      }
    },
    color: '#10b981',
    bgColor: 'rgba(16, 185, 129, 0.08)',
    borderColor: '#10b981'
  },
  {
    id: 'active-interaction',
    title: 'Active Interaction Mode',
    description: 'Warm up accounts seamlessly. Drives organic engagement through automated reactions, comments, and feed scrolling with smart cookie fallback.',
    icon: 'MousePointerClick',
    tags: ['Auto React', 'Cookie Login', 'Smart Fallback', 'Live Status'],
    capacity: {
      headline: 'Organic Warmup & Algorithmic Trust',
      rate: '200+ Human Actions/Hr across threads',
      limit: '24/7 autonomous background operation',
      description: 'Simulates authentic user behavior by scrolling feeds, pausing on videos, liking posts, and generating organic activity logs.'
    },
    tagDetails: {
      'Auto React': {
        title: 'Human-Paced Feed Reaction Engine',
        description: 'Executes randomized Like, Love, and Care reactions with natural scroll variance and randomized 4–12s dwell times.',
        capacity: 'Randomized 4–12s delay intervals'
      },
      'Cookie Login': {
        title: 'Zero-Credentials Direct Session',
        description: 'Injects cached Netscape/JSON cookies directly into browser storage, bypassing login forms and password prompts.',
        capacity: 'Instant session recovery (<500ms)'
      },
      'Smart Fallback': {
        title: 'Self-Healing Session Recovery',
        description: 'Detects temporary action blocks or expired sessions, pausing the specific account without breaking the batch.',
        capacity: 'Autonomous error tolerance'
      },
      'Live Status': {
        title: 'Telemetry Event Stream',
        description: 'Broadcasts real-time action logs with target post URLs, timestamps, and reaction confirmations.',
        capacity: '1,000+ live event memory log'
      }
    },
    color: '#f59e0b',
    bgColor: 'rgba(245, 158, 11, 0.08)',
    borderColor: '#f59e0b'
  },
  {
    id: 'proxy-multiwindow',
    title: 'Proxy & Multi-Window System',
    description: 'Run multiple isolated browser windows concurrently. Assign dedicated HTTP/SOCKS5 proxies to each account in an organized grid layout.',
    icon: 'Network',
    tags: ['HTTP/SOCKS5', 'Per-Account', '5–20 Windows', 'Grid Arrange'],
    capacity: {
      headline: 'Multi-Threaded Hardware Scaling',
      rate: '5 to 25+ Concurrent Windows',
      limit: 'Hardware scalable (requires ~2GB RAM per 5 windows)',
      description: 'Orchestrates separate isolated Chromium browser contexts, each bound to an independent network interface.'
    },
    tagDetails: {
      'HTTP/SOCKS5': {
        title: 'Universal Proxy Protocol Bridge',
        description: 'Connects with static residential, rotating datacenter, and 4G/5G mobile proxies with user:pass authentication.',
        capacity: 'HTTP, HTTPS & SOCKS5 supported'
      },
      'Per-Account': {
        title: 'Persistent 1:1 Network Isolation',
        description: 'Tethers each account strictly to a single IP address throughout its entire lifecycle to build high platform reputation.',
        capacity: '1:1 IP assignment persistence'
      },
      '5–20 Windows': {
        title: 'High-Concurrency Multi-Threading',
        description: 'Simultaneously provisions and runs multiple independent Chromium processes without memory leaks.',
        capacity: 'Scales from 5 up to 25+ windows'
      },
      'Grid Arrange': {
        title: 'Automated Window Screen Tiler',
        description: 'Calculates screen dimensions and tiles open browser windows in a neat 2x2, 3x3, or 4x4 desktop mosaic.',
        capacity: 'Instant auto-tile layout snap'
      }
    },
    color: '#6366f1',
    bgColor: 'rgba(99, 102, 241, 0.08)',
    borderColor: '#6366f1'
  },
  {
    id: 'bulk-import',
    title: 'Bulk Import — CSV, TXT, Excel',
    description: 'Import your entire database in one click. Fully supports CSV, TXT, and Excel formats along with cookie column integration.',
    icon: 'FileSpreadsheet',
    tags: ['CSV / TXT', 'Excel .xlsx', 'Cookie Column', 'One-Click'],
    capacity: {
      headline: 'Mass File Processing Engine',
      rate: '50,000+ Rows Loaded in < 2 Seconds',
      limit: 'Up to 100,000 records per single batch file',
      description: 'Lightning-fast memory ingestion engine with automated column mapping, deduplication, and format normalization.'
    },
    tagDetails: {
      'CSV / TXT': {
        title: 'Flexible Delimiter Parser',
        description: 'Parses files separated by commas, tabs, colons, or pipes with automatic encoding conversion.',
        capacity: 'Up to 100,000 rows per file'
      },
      'Excel .xlsx': {
        title: 'Native Microsoft Excel Parser',
        description: 'Directly reads multi-sheet .xlsx and .xls workbooks without needing Microsoft Office installed on your PC.',
        capacity: 'Instant sheet-to-JSON conversion'
      },
      'Cookie Column': {
        title: 'Base64 & JSON Cookie Import',
        description: 'Recognizes cookie strings embedded in CSV columns and maps them automatically to browser profile storage.',
        capacity: 'Supports JSON & Netscape cookies'
      },
      'One-Click': {
        title: 'Instant Pre-Flight Integrity Check',
        description: 'Validates proxy format syntax, identifies duplicate records, and flags invalid entries before launching threads.',
        capacity: 'Instant pre-launch validation'
      }
    },
    color: '#ec4899',
    bgColor: 'rgba(236, 72, 153, 0.08)',
    borderColor: '#ec4899'
  },
  {
    id: 'live-dashboard',
    title: 'Live Results Dashboard',
    description: 'Track every move in real time. Monitor step-by-step progress visually, review detailed logs, and export finished accounts to CSV instantly.',
    icon: 'BarChart3',
    tags: ['Real-Time', 'Step Indicators', 'CSV Export', 'Log Viewer'],
    capacity: {
      headline: 'Real-Time Process Telemetry',
      rate: 'Sub-50ms Dashboard State Refresh',
      limit: '100,000 in-memory event stream capacity',
      description: 'Gives operators total operational visibility into every running thread, network latency, proxy status, and success ratios.'
    },
    tagDetails: {
      'Real-Time': {
        title: 'Low-Latency Thread State Streaming',
        description: 'Monitors Chromium headless/headed instance state, memory footprint, and network latency with sub-second precision.',
        capacity: '<50ms telemetry update rate'
      },
      'Step Indicators': {
        title: '6-Stage Visual Progress Trackers',
        description: 'Color-coded visual cues show exact stage: Init, Proxy Check, Form Fill, OTP Wait, Profile Enrich, and Complete.',
        capacity: '6 discrete execution checkpoints'
      },
      'CSV Export': {
        title: 'One-Click Data Exporter',
        description: 'Exports generated accounts into structured CSV files with UID, Password, Email, 2FA Secret, and Cookies.',
        capacity: 'Instant CSV & TXT file generation'
      },
      'Log Viewer': {
        title: 'Colorized Diagnostics Console',
        description: 'Embedded stdout log terminal with real-time filterable log levels: INFO, SUCCESS, WARNING, and FATAL.',
        capacity: 'Searchable live log viewer'
      }
    },
    color: '#14b8a6',
    bgColor: 'rgba(20, 184, 166, 0.08)',
    borderColor: '#14b8a6'
  }
];

export const WORKFLOW_STEPS = [
  {
    step: '1',
    title: 'Configure',
    description: 'Choose your module, add proxies, and configure settings for your campaign.'
  },
  {
    step: '2',
    title: 'Import & Setup',
    description: 'Import your number list, account list, or Excel file. Configure profile photos and page names.'
  },
  {
    step: '3',
    title: 'Start Automation',
    description: 'Hit Start — multiple real Chrome browsers open automatically and begin working in the background.'
  },
  {
    step: '4',
    title: 'Monitor & Export',
    description: 'Watch live results in the dashboard. Export completed account data to CSV and use immediately.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'ahmed',
    quote: '"PRODigital completely changed my Facebook marketing workflow. I used to manually create 5 accounts a day — now I run 50+ overnight without a single issue."',
    name: 'Ahmed R.',
    role: 'Digital Marketer',
    location: 'Lahore',
    rating: 5,
    avatarLetter: 'A'
  },
  {
    id: 'zaheer',
    quote: '"The Profile Builder is excellent — accounts look genuinely human. The Active Interaction module does a great job warming them up. Highly recommended."',
    name: 'Zaheer K.',
    role: 'SMM Agency Owner',
    location: 'Karachi',
    rating: 5,
    avatarLetter: 'Z'
  },
  {
    id: 'usman',
    quote: '"The proxy integration and multi-window system are top-notch. I run 10 windows simultaneously and everything is smooth. Support is also very quick to respond."',
    name: 'Usman M.',
    role: 'FB Account Seller',
    location: 'Islamabad',
    rating: 4.5,
    avatarLetter: 'U'
  }
];

export const MIN_SPECS: SpecRow[] = [
  { label: 'Operating System', value: 'Windows 10 (64-bit)', highlight: true },
  { label: 'Processor', value: 'Intel Core i3 / AMD Ryzen 3' },
  { label: 'Memory (RAM)', value: '8 GB' },
  { label: 'Storage', value: '200 MB available' },
  { label: 'Internet', value: 'Stable broadband' }
];

export const REC_SPECS: SpecRow[] = [
  { label: 'Operating System', value: 'Windows 11 (64-bit)', highlight: true },
  { label: 'Processor', value: 'Intel Core i5 / AMD Ryzen 5' },
  { label: 'Memory (RAM)', value: '12 GB' },
  { label: 'Storage', value: '1 GB available' },
  { label: 'Internet', value: 'High-speed broadband' }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: '1-month',
    name: '1 Month License',
    period: 'mo',
    price: '10',
    cents: '.00',
    perMonth: '$10.00/mo',
    features: [
      'Full Verify Registration',
      'No Verify Registration',
      'Smart Profile Builder',
      'Page Creation',
      'Active Interaction Mode',
      'Multi-Window System',
      'Standard Support'
    ],
    whatsAppText: 'Hi! I want to purchase PRODigital 1 Month'
  },
  {
    id: '3-month',
    name: '3 Month License',
    period: '3 mo',
    price: '24',
    cents: '.99',
    perMonth: '$8.33/mo',
    savingsBadge: 'Save 17%',
    isPopular: true,
    features: [
      'All Features Included',
      'Full Verify Registration',
      'Smart Profile Builder',
      'Page Creation',
      'Active Interaction Mode',
      'Multi-Window System',
      'Priority Support'
    ],
    whatsAppText: 'Hi! I want to purchase PRODigital 3 Month'
  },
  {
    id: '1-year',
    name: '1 Year License',
    period: 'yr',
    price: '84',
    cents: '.99',
    perMonth: '$7.08/mo',
    savingsBadge: 'Save 29%',
    features: [
      'All Features Included',
      'Full Verify Registration',
      'Smart Profile Builder',
      'Page Creation',
      'Active Interaction Mode',
      'Multi-Window System',
      '1 Full Year Priority Support'
    ],
    whatsAppText: 'Hi! I want to purchase PRODigital 1 Year'
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Is PRODigital safe to use? Will Facebook ban my account?',
    answer: 'PRODigital uses advanced safety protocols, random delays, realistic user-agent spoofing, and human-like interaction patterns. Over 500+ users run it safely every day. Using high-quality residential or 4G/5G mobile proxies is recommended for best longevity.',
    category: 'general'
  },
  {
    id: 'faq-2',
    question: 'Do you provide customer support?',
    answer: 'Absolutely! We offer live WhatsApp support, video tutorials, and a comprehensive knowledge base. Premium support response time is under 2 hours during active business hours, including free AnyDesk/TeamViewer remote setup assistance if needed.',
    category: 'general'
  },
  {
    id: 'faq-3',
    question: "What if I'm not tech-savvy? Is it easy to set up?",
    answer: 'PRODigital is designed for everyone — no coding or technical skills required. Our desktop interface guides you step-by-step in under 10 minutes. We also provide free screen-sharing assistance to configure your first batch.',
    category: 'technical'
  },
  {
    id: 'faq-4',
    question: 'How many accounts can be created per day?',
    answer: 'There is no built-in software limit. Your daily output depends on your PC hardware, proxy speed, and number of concurrent threads. With an i5/Ryzen 5 PC and stable proxies, 500–1,000+ accounts per day is easily achievable.',
    category: 'technical'
  },
  {
    id: 'faq-5',
    question: 'Where do I get phone numbers for registration?',
    answer: 'You can integrate virtual numbers from standard SMS OTP providers (e.g., SMS-Man, 5Sim, DaisySMS, SMS-Activate). The tool automatically requests numbers, listens for the SMS verification code, and injects it seamlessly.',
    category: 'technical'
  },
  {
    id: 'faq-6',
    question: 'Does it work on Mac or Linux?',
    answer: 'Currently, PRODigital is natively built for Windows 10 and Windows 11 (64-bit). For 24/7 unmonitored operation, we recommend running it on a Windows Server 2019/2022 VPS or through a Windows Virtual Machine on Mac.',
    category: 'technical'
  },
  {
    id: 'faq-7',
    question: 'Is there a refund policy?',
    answer: 'All sales are strictly non-refundable due to the digital nature of software license generation and activation tokens. We provide comprehensive setup support via WhatsApp to guarantee your software runs smoothly.',
    category: 'billing'
  }
];

export const CONTACT_INFO = {
  whatsappNumber: '+92 324 1703901',
  whatsappUrl: 'https://wa.me/923241703901',
  telegramUser: '@Fbmprime',
  telegramUrl: 'https://t.me/Fbmprime',
  email: 'fbmprime@gmail.com',
  githubUrl: 'https://github.com/mrtechpk1-ai/FBMprime',
  downloadUrl: 'https://github.com/mrtechpk1-ai/FBMprime/releases/download/V1.1.0/FBM_Prime_Reg.exe'
};
