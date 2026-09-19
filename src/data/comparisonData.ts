export interface ComparisonRow {
  name: string;
  description?: string;
  oneMonth: string | boolean;
  threeMonth: string | boolean;
  oneYear: string | boolean;
  isKey?: boolean;
}

export interface ComparisonCategory {
  title: string;
  badge: string;
  rows: ComparisonRow[];
}

export const COMPARISON_CATEGORIES: ComparisonCategory[] = [
  {
    title: 'Core Automation Capabilities',
    badge: 'Features',
    rows: [
      {
        name: 'Full Phone Verify Registration',
        description: 'Auto-extracts and verifies phone OTPs through virtual SMS providers (SMS-Man, 5Sim, DaisySMS).',
        oneMonth: true,
        threeMonth: true,
        oneYear: true
      },
      {
        name: 'No-Verify Registration (Fast Bulk)',
        description: 'High-speed mass account generation via custom email data and instant credentials creation.',
        oneMonth: true,
        threeMonth: true,
        oneYear: true
      },
      {
        name: 'Smart Profile Builder Engine',
        description: 'Automatically uploads avatars, cover photos, bio spintax, city location, and educational histories.',
        oneMonth: true,
        threeMonth: true,
        oneYear: true
      },
      {
        name: 'Bulk Page Creation Automation',
        description: 'Automated desktop-mode Facebook business page generation with custom niches and categories.',
        oneMonth: true,
        threeMonth: true,
        oneYear: true
      },
      {
        name: 'Active Feed Warmup & Interactions',
        description: 'Simulates organic feed scrolling, randomized likes, video watching, and auto-commenting.',
        oneMonth: true,
        threeMonth: true,
        oneYear: true
      },
      {
        name: 'Bulk Database Import / Export',
        description: 'Seamless CSV, TXT, and Excel (.xlsx) file processing with cookie and token column parsing.',
        oneMonth: true,
        threeMonth: true,
        oneYear: true
      }
    ]
  },
  {
    title: 'Scaling & Execution Power',
    badge: 'Performance',
    rows: [
      {
        name: 'Simultaneous Browser Threads',
        description: 'Maximum parallel Chromium browser instances running concurrently without bottleneck.',
        oneMonth: 'Up to 5 Threads',
        threeMonth: 'Up to 15 Threads',
        oneYear: 'Unlimited (25+ Threads)',
        isKey: true
      },
      {
        name: 'Estimated Daily Production Capacity',
        description: 'Realistic throughput based on hardware and high-quality residential/mobile proxy speed.',
        oneMonth: '300–500 Accounts/day',
        threeMonth: '1,500+ Accounts/day',
        oneYear: '5,000+ Accounts/day',
        isKey: true
      },
      {
        name: 'Proxy Protocols Supported',
        description: 'Assign unique isolated network IPs to each running thread to prevent collective bans.',
        oneMonth: 'HTTP, HTTPS, SOCKS5',
        threeMonth: 'HTTP, HTTPS, SOCKS5',
        oneYear: 'HTTP, HTTPS, SOCKS5 + Auto Rotation'
      },
      {
        name: 'Anti-Detect Fingerprint Spoofing',
        description: 'Canvas, WebGL, AudioContext, UserAgent, and Screen Resolution randomized on each thread.',
        oneMonth: true,
        threeMonth: true,
        oneYear: true
      },
      {
        name: 'Session Cookies & 2FA Tokens Cache',
        description: 'Instant JSON cookie extraction ready to paste into antidetect browsers (AdsPower, Dolphin, GoLogin).',
        oneMonth: true,
        threeMonth: true,
        oneYear: true
      },
      {
        name: 'Live Terminal & Error Recovery',
        description: 'Real-time stdout thread execution logs with automatic retry on failed proxies or dropped OTPs.',
        oneMonth: true,
        threeMonth: true,
        oneYear: true
      }
    ]
  },
  {
    title: 'Business Operations & Support SLA',
    badge: 'Enterprise',
    rows: [
      {
        name: 'Active License Duration',
        description: 'Continuous uninterrupted software access and activation token lifespan.',
        oneMonth: '30 Days',
        threeMonth: '90 Days',
        oneYear: '365 Days',
        isKey: true
      },
      {
        name: 'Effective Monthly Cost',
        description: 'Monthly calculated rate highlighting long-term automation cost savings.',
        oneMonth: '$10.00 / mo',
        threeMonth: '$8.33 / mo (Save 17%)',
        oneYear: '$7.08 / mo (Save 29%)',
        isKey: true
      },
      {
        name: 'Hardware ID (HWID) Device Resets',
        description: 'Ability to transfer license to a new desktop PC or cloud Windows VPS.',
        oneMonth: '1 Reset Included',
        threeMonth: '3 Resets Included',
        oneYear: 'Unlimited Free Resets'
      },
      {
        name: 'Customer Support Response SLA',
        description: 'Guaranteed support turnaround time via direct WhatsApp and Telegram channels.',
        oneMonth: 'Standard (< 6 Hours)',
        threeMonth: 'Priority (< 2 Hours)',
        oneYear: 'VIP (< 30 Mins) + AnyDesk Setup'
      },
      {
        name: 'Meta Platform Algorithm Patches',
        description: 'Rapid updates whenever Facebook changes DOM classes, registration forms, or bot detection.',
        oneMonth: 'Standard Updates',
        threeMonth: 'Priority Patches',
        oneYear: 'Day-1 Instant Hotfixes'
      },
      {
        name: 'Recommended Business Profile',
        description: 'The optimal target team structure and operational scale for this tier.',
        oneMonth: 'Testing & Solopreneurs',
        threeMonth: 'Growing Agencies & Marketers',
        oneYear: 'High-Volume SMM & Enterprise Farms',
        isKey: true
      }
    ]
  }
];
