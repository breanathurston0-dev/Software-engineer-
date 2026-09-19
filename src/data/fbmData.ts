import { FeatureModule, PricingPlan, Testimonial, FaqItem, SpecRow } from '../types';

export const CORE_MODULES: FeatureModule[] = [
  {
    id: 'full-verify',
    title: 'Full Verify Registration',
    badge: { text: 'HOT', type: 'hot' },
    description: 'Generate authentic, phone-verified accounts instantly. Handles everything from global OTP extraction to automatic cookie acceptance without lifting a finger.',
    icon: 'UserCheck',
    tags: ['Phone OTP', 'Auto Cookie', 'Multi-Country', 'Post-Reg Setup'],
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
