import React, { useState, useEffect } from 'react';
import { 
  Monitor, 
  Terminal, 
  Play, 
  Pause, 
  RotateCcw, 
  Download, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Globe, 
  UserCheck, 
  Image as ImageIcon, 
  LayoutGrid, 
  Activity, 
  Cpu, 
  Filter
} from 'lucide-react';

interface SimulatedAccount {
  id: string;
  name: string;
  emailOrPhone: string;
  proxy: string;
  latency: string;
  status: 'Completed' | 'Registering' | 'Warming Up' | 'OTP Pending';
  progress: number;
}

export const DashboardPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'registration' | 'profile' | 'pages' | 'interaction' | 'proxies'>('registration');
  const [isRunning, setIsRunning] = useState(true);
  const [activeThreads, setActiveThreads] = useState(6);
  const [accountsCreated, setAccountsCreated] = useState(148);
  const [speedPerHr, setSpeedPerHr] = useState(94);
  const [selectedCountry, setSelectedCountry] = useState('United States (+1)');

  // Simulated live log entries
  const [logs, setLogs] = useState<string[]>([
    '[12:44:02] [Thread-01] Loaded residential proxy socks5://185.193.12.91:1080 (Ping: 42ms)',
    '[12:44:04] [Thread-02] Navigating through stealth Playwright fingerprint profile #2819',
    '[12:44:07] [Thread-03] Requesting virtual phone number from SMS-Man Gateway...',
    '[12:44:09] [Thread-01] Account #148 registered! Profile: "Jessica Miller" (Cookie exported)',
    '[12:44:11] [Thread-03] OTP Code [829415] received and auto-filled. Verification passed 100%'
  ]);

  // Live log simulation effect
  useEffect(() => {
    if (!isRunning) return;

    const possibleLogs = [
      '[12:44:18] [Thread-04] Smart Profile Builder: Uploaded human HD avatar (size: 420x420)',
      '[12:44:21] [Thread-02] Active Interaction: Browsed 8 feed posts, liked 3, commented naturally',
      '[12:44:25] [Thread-05] Business Page "Prime Tech Deals" created and categorized under Retail',
      '[12:44:28] [Thread-01] Proxy rotation triggered for thread #1 -> New IP 45.132.88.19 (USA)',
      '[12:44:32] [Thread-06] Auto-accepted cookies and verified 2FA security prompt seamlessly'
    ];

    const interval = setInterval(() => {
      const randomLog = possibleLogs[Math.floor(Math.random() * possibleLogs.length)];
      setLogs(prev => [randomLog, ...prev.slice(0, 7)]);
      setAccountsCreated(prev => prev + 1);
    }, 4500);

    return () => clearInterval(interval);
  }, [isRunning]);

  const accounts: SimulatedAccount[] = [
    {
      id: 'ACC-148',
      name: 'Jessica Miller',
      emailOrPhone: '+1 (415) 892-4109',
      proxy: '185.193.12.91 (US)',
      latency: '38ms',
      status: 'Completed',
      progress: 100
    },
    {
      id: 'ACC-149',
      name: 'Michael Chen',
      emailOrPhone: '+1 (512) 640-1922',
      proxy: '45.132.88.19 (US)',
      latency: '45ms',
      status: 'Warming Up',
      progress: 75
    },
    {
      id: 'ACC-150',
      name: 'David Vance',
      emailOrPhone: '+44 7911 234891',
      proxy: '194.26.29.110 (UK)',
      latency: '52ms',
      status: 'Registering',
      progress: 40
    },
    {
      id: 'ACC-151',
      name: 'Sarah Jenkins',
      emailOrPhone: '+1 (702) 554-9021',
      proxy: '104.238.15.82 (US)',
      latency: '41ms',
      status: 'OTP Pending',
      progress: 60
    },
    {
      id: 'ACC-152',
      name: 'Robert Taylor',
      emailOrPhone: '+49 152 2345678',
      proxy: '91.200.114.75 (DE)',
      latency: '60ms',
      status: 'Completed',
      progress: 100
    }
  ];

  return (
    <section id="preview" className="py-14 sm:py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 uppercase tracking-wider mb-3">
            <Monitor className="w-3.5 h-3.5" />
            <span>Interactive Software Interface</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Live Software Dashboard Preview
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mx-auto mt-3 mb-4" />
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Experience the real PRODigital desktop control panel. Switch through modules, 
            inspect live execution threads, monitor proxies, and see how accounts are managed.
          </p>
        </div>

        {/* Desktop App Shell Mockup */}
        <div className="bg-slate-900 rounded-2xl shadow-2xl border border-slate-700/70 overflow-hidden text-slate-100">
          
          {/* Window Titlebar */}
          <div className="bg-slate-950 px-4 py-3 flex items-center justify-between border-b border-slate-800 text-xs text-slate-400 select-none">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500/90 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/90 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/90 inline-block"></span>
              </div>
              <span className="font-semibold text-slate-300 ml-2">
                PRODigital v3.0.4 [Enterprise Multi-Thread Edition]
              </span>
            </div>
            
            <div className="hidden sm:flex items-center gap-3">
              <span className="inline-flex items-center gap-1 text-emerald-400 font-medium">
                <ShieldCheck className="w-3.5 h-3.5" />
                Anti-Detect Stealth: 100%
              </span>
              <span className="inline-flex items-center gap-1 text-blue-400 font-medium">
                <Globe className="w-3.5 h-3.5" />
                Proxies: 8/8 Active
              </span>
              <span className="inline-flex items-center gap-1 text-slate-400">
                <Cpu className="w-3.5 h-3.5" />
                Threads: {activeThreads}
              </span>
            </div>
          </div>

          {/* Module Navigation Tabs */}
          <div className="bg-slate-900/90 px-4 py-2 border-b border-slate-800 flex items-center justify-between overflow-x-auto gap-2 text-xs">
            <div className="flex items-center gap-1 sm:gap-2">
              <button
                onClick={() => setActiveTab('registration')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold transition-all whitespace-nowrap ${
                  activeTab === 'registration'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                }`}
              >
                <UserCheck className="w-3.5 h-3.5" />
                <span>Auto Registration</span>
              </button>

              <button
                onClick={() => setActiveTab('profile')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold transition-all whitespace-nowrap ${
                  activeTab === 'profile'
                    ? 'bg-purple-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                }`}
              >
                <ImageIcon className="w-3.5 h-3.5" />
                <span>Profile Builder</span>
              </button>

              <button
                onClick={() => setActiveTab('pages')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold transition-all whitespace-nowrap ${
                  activeTab === 'pages'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Page Creator</span>
              </button>

              <button
                onClick={() => setActiveTab('interaction')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold transition-all whitespace-nowrap ${
                  activeTab === 'interaction'
                    ? 'bg-amber-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                }`}
              >
                <Activity className="w-3.5 h-3.5" />
                <span>Warmup Interaction</span>
              </button>

              <button
                onClick={() => setActiveTab('proxies')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold transition-all whitespace-nowrap ${
                  activeTab === 'proxies'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                }`}
              >
                <Globe className="w-3.5 h-3.5" />
                <span>Proxies & Grid</span>
              </button>
            </div>

            {/* Quick Simulation Toggles */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsRunning(!isRunning)}
                className={`flex items-center gap-1 px-3 py-1 rounded-md text-xs font-bold transition-all ${
                  isRunning 
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/30'
                    : 'bg-amber-500/20 text-amber-300 border border-amber-500/30 hover:bg-amber-500/30'
                }`}
              >
                {isRunning ? (
                  <>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>Running</span>
                  </>
                ) : (
                  <>
                    <Pause className="w-3 h-3" />
                    <span>Paused</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="bg-slate-900/60 px-5 py-3 border-b border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
            <div>
              <span className="text-slate-400">Total Created Today:</span>
              <div className="text-base sm:text-lg font-bold text-white font-display">
                {accountsCreated} Accounts
              </div>
            </div>
            <div>
              <span className="text-slate-400">Creation Velocity:</span>
              <div className="text-base sm:text-lg font-bold text-emerald-400 font-display">
                ~{speedPerHr}/hr
              </div>
            </div>
            <div>
              <span className="text-slate-400">OTP Success Rate:</span>
              <div className="text-base sm:text-lg font-bold text-blue-400 font-display">
                99.4%
              </div>
            </div>
            <div>
              <span className="text-slate-400">Active Engine:</span>
              <div className="text-base sm:text-lg font-bold text-purple-400 font-display">
                Playwright Stealth v1.42
              </div>
            </div>
          </div>

          {/* Tab Content Display */}
          <div className="p-4 sm:p-6 bg-slate-900/40">
            {activeTab === 'registration' && (
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400 font-medium">OTP Gateway:</span>
                    <select 
                      value={selectedCountry}
                      onChange={(e) => setSelectedCountry(e.target.value)}
                      className="bg-slate-800 border border-slate-700 text-slate-200 rounded px-2.5 py-1 text-xs focus:outline-none focus:border-blue-500"
                    >
                      <option>United States (+1)</option>
                      <option>United Kingdom (+44)</option>
                      <option>Germany (+49)</option>
                      <option>Canada (+1)</option>
                      <option>Pakistan (+92)</option>
                    </select>
                    <span className="text-slate-400 ml-2">Mode:</span>
                    <span className="bg-blue-500/20 text-blue-300 border border-blue-500/30 px-2 py-0.5 rounded text-[11px] font-semibold">
                      Full Phone Verify + Cookie Export
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => alert('Sample accounts exported to PRODigital_Accounts.csv!')}
                      className="inline-flex items-center gap-1 px-3 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded text-xs font-semibold border border-slate-700 transition-colors"
                    >
                      <Download className="w-3 h-3 text-blue-400" />
                      Export CSV
                    </button>
                  </div>
                </div>

                {/* Simulated Accounts Table */}
                <div className="border border-slate-800 rounded-xl overflow-hidden bg-slate-950/70">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs text-slate-300">
                      <thead className="bg-slate-900/80 text-slate-400 uppercase tracking-wider text-[10px] border-b border-slate-800">
                        <tr>
                          <th className="py-2.5 px-4">Account ID</th>
                          <th className="py-2.5 px-4">Profile Name</th>
                          <th className="py-2.5 px-4">Phone / OTP</th>
                          <th className="py-2.5 px-4">Proxy & Latency</th>
                          <th className="py-2.5 px-4">Status</th>
                          <th className="py-2.5 px-4 text-right">Step Progress</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800/60">
                        {accounts.map((acc) => (
                          <tr key={acc.id} className="hover:bg-slate-900/40 transition-colors">
                            <td className="py-3 px-4 font-mono text-blue-400 font-semibold">{acc.id}</td>
                            <td className="py-3 px-4 font-medium text-slate-100">{acc.name}</td>
                            <td className="py-3 px-4 text-slate-300">{acc.emailOrPhone}</td>
                            <td className="py-3 px-4">
                              <span className="font-mono text-slate-300">{acc.proxy}</span>
                              <span className="ml-2 text-emerald-400 font-mono">({acc.latency})</span>
                            </td>
                            <td className="py-3 px-4">
                              <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold ${
                                acc.status === 'Completed' 
                                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                                  : acc.status === 'Warming Up'
                                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                                  : acc.status === 'Registering'
                                  ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                                  : 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                              }`}>
                                {acc.status === 'Completed' && <CheckCircle2 className="w-3 h-3" />}
                                {acc.status}
                              </span>
                            </td>
                            <td className="py-3 px-4 text-right">
                              <div className="flex items-center justify-end gap-2">
                                <span className="font-mono text-xs text-slate-400">{acc.progress}%</span>
                                <div className="w-16 bg-slate-800 rounded-full h-1.5 overflow-hidden">
                                  <div 
                                    className={`h-1.5 rounded-full ${acc.progress === 100 ? 'bg-emerald-500' : 'bg-blue-500'}`} 
                                    style={{ width: `${acc.progress}%` }}
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'profile' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800 space-y-3">
                  <h4 className="font-bold text-slate-200 text-sm flex items-center gap-1.5">
                    <ImageIcon className="w-4 h-4 text-purple-400" />
                    Humanization Assets
                  </h4>
                  <p className="text-slate-400 text-xs">
                    Randomizes high-resolution, unindexed human portraits and authentic banner covers.
                  </p>
                  <div className="grid grid-cols-3 gap-2 pt-2">
                    <div className="aspect-square bg-slate-800 rounded-lg flex items-center justify-center text-[10px] text-slate-400 border border-slate-700">
                      Avatar 01
                    </div>
                    <div className="aspect-square bg-slate-800 rounded-lg flex items-center justify-center text-[10px] text-slate-400 border border-slate-700">
                      Avatar 02
                    </div>
                    <div className="aspect-square bg-slate-800 rounded-lg flex items-center justify-center text-[10px] text-slate-400 border border-slate-700">
                      Avatar 03
                    </div>
                  </div>
                  <div className="text-[11px] text-emerald-400 font-semibold pt-1">
                    ✓ 2,500+ Curated Avatar Assets Loaded
                  </div>
                </div>

                <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800 space-y-3">
                  <h4 className="font-bold text-slate-200 text-sm">Bio & Identity Spintax</h4>
                  <div className="bg-slate-900 p-2.5 rounded border border-slate-800 font-mono text-[11px] text-slate-300">
                    &#123;Living in|Based in&#125; &#123;Austin|Seattle|Denver&#125;. &#123;Love photography|Tech enthusiast|Outdoor explorer&#125;.
                  </div>
                  <div className="space-y-1.5 text-[11px] text-slate-400">
                    <div>• Current City: Auto-matches proxy region</div>
                    <div>• Education: University of Texas / Harvard Alumni</div>
                    <div>• Relationship: Random human profile matrix</div>
                  </div>
                </div>

                <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800 space-y-3">
                  <h4 className="font-bold text-slate-200 text-sm">Profile Builder Queue</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-[11px]">
                      <span className="text-slate-300">Avatars Assigned:</span>
                      <span className="text-purple-400 font-bold">148 / 148</span>
                    </div>
                    <div className="flex justify-between text-[11px]">
                      <span className="text-slate-300">Bios Injected:</span>
                      <span className="text-purple-400 font-bold">148 / 148</span>
                    </div>
                    <div className="flex justify-between text-[11px]">
                      <span className="text-slate-300">Cover Photos:</span>
                      <span className="text-purple-400 font-bold">148 / 148</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden mt-3">
                      <div className="bg-purple-500 h-2 rounded-full w-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'pages' && (
              <div className="space-y-4 text-xs">
                <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <h4 className="font-bold text-slate-200 text-sm flex items-center gap-2">
                      <LayoutGrid className="w-4 h-4 text-emerald-400" />
                      Bulk Facebook Page Automation
                    </h4>
                    <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2.5 py-0.5 rounded text-[11px] font-semibold">
                      Mode: Stealth Desktop Emulation
                    </span>
                  </div>
                  <p className="text-slate-400 text-xs mb-3">
                    Create unlimited business pages with auto-selected categories, custom descriptions, and phone number links across all warmed-up accounts.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="bg-slate-900 p-3 rounded-lg border border-slate-800">
                      <div className="text-slate-400 text-[11px]">Page Category:</div>
                      <div className="text-slate-200 font-semibold mt-1">E-Commerce & Retail</div>
                    </div>
                    <div className="bg-slate-900 p-3 rounded-lg border border-slate-800">
                      <div className="text-slate-400 text-[11px]">Pages Per Account:</div>
                      <div className="text-slate-200 font-semibold mt-1">1–3 Pages (Randomized)</div>
                    </div>
                    <div className="bg-slate-900 p-3 rounded-lg border border-slate-800">
                      <div className="text-slate-400 text-[11px]">Desktop User Agent:</div>
                      <div className="text-slate-200 font-semibold mt-1">Chrome 122.0.0 (Win64)</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'interaction' && (
              <div className="space-y-4 text-xs">
                <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                  <h4 className="font-bold text-slate-200 text-sm flex items-center gap-2 mb-2">
                    <Activity className="w-4 h-4 text-amber-400" />
                    Autonomous Account Warmup Engine
                  </h4>
                  <p className="text-slate-400 text-xs mb-4">
                    Eliminates immediate checkpoints by simulating organic human activity on the Facebook mobile & desktop feeds.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                    <div className="bg-slate-900 p-3 rounded-lg border border-slate-800">
                      <div className="text-amber-400 font-bold text-base">5–15 mins</div>
                      <div className="text-slate-400 text-[11px] mt-0.5">Scroll Duration</div>
                    </div>
                    <div className="bg-slate-900 p-3 rounded-lg border border-slate-800">
                      <div className="text-emerald-400 font-bold text-base">Random Likes</div>
                      <div className="text-slate-400 text-[11px] mt-0.5">Natural Reactions</div>
                    </div>
                    <div className="bg-slate-900 p-3 rounded-lg border border-slate-800">
                      <div className="text-blue-400 font-bold text-base">Reels & Videos</div>
                      <div className="text-slate-400 text-[11px] mt-0.5">Watch Emulation</div>
                    </div>
                    <div className="bg-slate-900 p-3 rounded-lg border border-slate-800">
                      <div className="text-purple-400 font-bold text-base">Cookie Cache</div>
                      <div className="text-slate-400 text-[11px] mt-0.5">Session Persistence</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'proxies' && (
              <div className="space-y-4 text-xs">
                <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                  <h4 className="font-bold text-slate-200 text-sm flex items-center gap-2 mb-2">
                    <Globe className="w-4 h-4 text-indigo-400" />
                    Multi-Window Proxy Manager (Isolated Chrome Contexts)
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="bg-slate-900 p-3 rounded-lg border border-slate-800">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-slate-300">Proxy Thread #1</span>
                        <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                      </div>
                      <div className="text-slate-400 text-[11px] mt-1 font-mono">185.193.12.91:1080</div>
                      <div className="text-emerald-400 text-[10px] font-semibold mt-1">SOCKS5 • 38ms latency</div>
                    </div>
                    <div className="bg-slate-900 p-3 rounded-lg border border-slate-800">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-slate-300">Proxy Thread #2</span>
                        <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                      </div>
                      <div className="text-slate-400 text-[11px] mt-1 font-mono">45.132.88.19:8080</div>
                      <div className="text-emerald-400 text-[10px] font-semibold mt-1">HTTP • 45ms latency</div>
                    </div>
                    <div className="bg-slate-900 p-3 rounded-lg border border-slate-800">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-slate-300">Proxy Thread #3</span>
                        <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                      </div>
                      <div className="text-slate-400 text-[11px] mt-1 font-mono">194.26.29.110:3128</div>
                      <div className="text-emerald-400 text-[10px] font-semibold mt-1">SOCKS5 • 52ms latency</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Live Terminal / Real-time Execution Console */}
            <div className="mt-4 bg-black/90 rounded-xl border border-slate-800 p-3 font-mono text-[11px] text-slate-300 shadow-inner">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800/80 text-[10px] text-slate-400 uppercase tracking-wider">
                <div className="flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-blue-400" />
                  <span>Real-time Execution Stream</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400">● Live Stream (Playwright Engine)</span>
                </div>
              </div>
              <div className="space-y-1 max-h-36 overflow-y-auto">
                {logs.map((log, i) => (
                  <div key={i} className="leading-relaxed">
                    <span className="text-blue-400">{log.substring(0, 10)}</span>
                    <span className="text-slate-200">{log.substring(10)}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Bottom App Status bar */}
          <div className="bg-slate-950 px-4 py-2 border-t border-slate-800 flex flex-wrap items-center justify-between text-[11px] text-slate-400">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                Playwright Headless/Headed: Synchronized
              </span>
              <span>•</span>
              <span>Memory: 1.4 GB / 8.0 GB</span>
            </div>
            <div className="text-slate-400 font-mono">
              Process ID: #7741 • OS: Windows NT (x64)
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
