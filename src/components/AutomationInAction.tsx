import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  FastForward, 
  Volume2, 
  VolumeX, 
  Maximize2, 
  Minimize2,
  CheckCircle2, 
  Sparkles, 
  Layers, 
  ShieldAlert, 
  Cpu, 
  Gauge, 
  Terminal,
  MousePointer,
  ExternalLink,
  Zap
} from 'lucide-react';
import automationPreviewImg from '../assets/images/automation_in_action_1789800452240.jpg';

interface AutomationTask {
  id: string;
  title: string;
  timestamp: string;
  phase: string;
  badge: string;
  actionSummary: string;
  speedBenchmark: string;
  cursorTarget: { x: number; y: number; label: string };
  logs: string[];
}

const AUTOMATION_TASKS: AutomationTask[] = [
  {
    id: 'task-reg',
    title: '1. Account Registration & Phone OTP',
    timestamp: '00:14',
    phase: 'Phone SMS API & DOM Bypass',
    badge: 'Step 1 of 4',
    actionSummary: 'PRODigital launches headless Chromium, bypasses Facebook cookie dialogs, inputs credential batches, and extracts 6-digit SMS OTP via API within 12 seconds.',
    speedBenchmark: '45s Total Cycle • 98.4% OTP Success Rate',
    cursorTarget: { x: 38, y: 52, label: 'Clicking [Confirm SMS Code: 492-019]' },
    logs: [
      '[00:02] [Thread-01] Isolated profile container initialized with residential proxy 185.220.101.4',
      '[00:05] [Thread-01] Loaded https://m.facebook.com/reg — Cookie banner auto-dismissed (<180ms)',
      '[00:08] [Thread-01] Polling DaisySMS API line: +1 (312) 555-0198 (Waiting for OTP...)',
      '[00:12] [Thread-01] SMS received: [Facebook code: 492019] — Dispatching key events',
      '[00:14] [Thread-01] Account successfully registered! 2FA Secret & cookies saved to session cache.'
    ]
  },
  {
    id: 'task-profile',
    title: '2. Smart Profile & Media Injection',
    timestamp: '00:32',
    phase: 'EXIF Metadata Stripping & Spintax',
    badge: 'Step 2 of 4',
    actionSummary: 'Selects human portrait photos from local pool, strips embedded device EXIF data to avoid AI fingerprinting, applies dynamic spintax bios, and configures city/education details.',
    speedBenchmark: '30s per Profile • Zero Duplicate Fingerprints',
    cursorTarget: { x: 62, y: 44, label: 'Uploading [Profile_Photo_Cleaned.jpg]' },
    logs: [
      '[00:16] [Thread-01] Injected session cookies into desktop viewport (1920x1080 resolution)',
      '[00:20] [Thread-01] Stripped camera EXIF metadata from /assets/avatars/female_24.jpg',
      '[00:24] [Thread-01] Uploaded profile picture & 1080p landscape cover image successfully',
      '[00:28] [Thread-01] Formatted Spintax bio: "Digital Creator & Tech Enthusiast | London, UK"',
      '[00:32] [Thread-01] Profile trust score calculated: 94/100 (Full human verification passed)'
    ]
  },
  {
    id: 'task-page',
    title: '3. Meta Business Page Deployment',
    timestamp: '00:52',
    phase: 'Automated Fan Page Creation',
    badge: 'Step 3 of 4',
    actionSummary: 'Emulates desktop Chrome to navigate Meta Business Suite, autogenerates high-converting brand titles, maps verified industry categories, and sets up business fan pages.',
    speedBenchmark: '40–60 Pages/Hour across threads',
    cursorTarget: { x: 74, y: 68, label: 'Submitting [Create Page: Apex Digital Labs]' },
    logs: [
      '[00:36] [Thread-01] Navigating to Meta Business Suite (/pages/create)',
      '[00:40] [Thread-01] Selected Category: "Software Company / Digital Agency" (Category ID: 2205)',
      '[00:45] [Thread-01] Injected business description, official website link, and working hours',
      '[00:48] [Thread-01] Published fan page: "Apex Digital Media" with auto-generated logo',
      '[00:52] [Thread-01] Assigned administrator role with tokenized permission backup'
    ]
  },
  {
    id: 'task-multi',
    title: '4. Multi-Window Grid & Engagement',
    timestamp: '01:15',
    phase: 'Parallel Threads & Organic Warmup',
    badge: 'Step 4 of 4',
    actionSummary: 'Tiles 6–20 concurrent browser viewports in a clean desktop matrix. Each window operates on an independent mobile proxy, scrolling feeds and reacting organically with human-like dwell times.',
    speedBenchmark: 'Up to 25 Windows • 200+ Reactions/Hour',
    cursorTarget: { x: 26, y: 72, label: 'Tiling 6 Browser Instances in 3x2 Matrix' },
    logs: [
      '[00:55] [Engine] Initializing multi-thread scheduler: 6 concurrent Chromium contexts',
      '[01:00] [Thread 1-6] Screen tiler arranged windows into balanced 3x2 desktop grid',
      '[01:05] [Thread 1-6] 4G mobile proxy rotation verified across all 6 distinct network routes',
      '[01:10] [Thread-03] Scrolling feed with organic jitter: Liked organic post #849204',
      '[01:15] [Engine] All 6 accounts active and healthy — 0 velocity warnings detected'
    ]
  }
];

export const AutomationInAction: React.FC = () => {
  const [activeTaskIndex, setActiveTaskIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(18);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentTask = AUTOMATION_TASKS[activeTaskIndex];

  // Auto-advance timeline when playing
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveTaskIndex((tIdx) => (tIdx + 1) % AUTOMATION_TASKS.length);
          return 0;
        }
        return prev + 1.2 * playbackSpeed;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [isPlaying, playbackSpeed]);

  const handleTaskSelect = (index: number) => {
    setActiveTaskIndex(index);
    setProgress(index * 25);
  };

  const handleRestart = () => {
    setActiveTaskIndex(0);
    setProgress(0);
    setIsPlaying(true);
  };

  return (
    <section id="automation-demo" className="py-20 sm:py-28 bg-slate-950 text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-blue-600/20 via-indigo-600/15 to-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-800/70 tracking-wider uppercase mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
            Live Automation in Action
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            See the Automation Engine Execute
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-emerald-400 rounded-full mx-auto mt-4 mb-4" />
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Watch PRODigital automatically navigate Facebook registration, phone SMS verification, 
            profile media building, and business fan page deployment in real time.
          </p>
        </div>

        {/* Interactive Video Player & Task Showcase */}
        <div 
          ref={containerRef}
          className={`bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden transition-all duration-300 ${
            isFullscreen ? 'fixed inset-0 z-50 rounded-none bg-slate-950 flex flex-col justify-center' : ''
          }`}
        >
          {/* Top Video Player Bar */}
          <div className="bg-slate-950/90 px-4 sm:px-6 py-3 border-b border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2.5">
              <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-red-500/20 text-red-400 border border-red-500/30 font-bold uppercase tracking-wider text-[10px]">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                {isPlaying ? 'RUNNING 60 FPS' : 'PAUSED'}
              </span>
              <span className="font-mono text-slate-300 font-semibold hidden sm:inline">
                PRODigital_Worker_v3.0.exe — Automated Task Viewport
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono text-[11px]">
                1080p Desktop Emulation
              </span>
              <span className="text-emerald-400 font-mono font-bold flex items-center gap-1">
                <Gauge className="w-3.5 h-3.5" />
                <span>0.00s Latency</span>
              </span>
            </div>
          </div>

          {/* Main Visual Display: Generated Asset + Animated HUD Overlays */}
          <div className="relative aspect-video w-full bg-slate-950 overflow-hidden group">
            {/* Base UI Screenshot Graphic */}
            <img 
              src={automationPreviewImg} 
              alt="PRODigital Facebook Automation Software navigating tasks"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center transition-transform duration-700 select-none group-hover:scale-[1.01]"
            />

            {/* Dark Cinematic Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40 pointer-events-none" />

            {/* Active Task Floating Badge (Top Left of Video) */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20 pointer-events-none">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-700/80 shadow-xl text-xs font-semibold text-white">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
                <span className="text-blue-400 font-bold">{currentTask.badge}:</span>
                <span>{currentTask.phase}</span>
              </div>
            </div>

            {/* Benchmark Pill (Top Right of Video) */}
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 pointer-events-none hidden sm:block">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700 text-[11px] font-mono text-emerald-400 shadow-xl">
                <Zap className="w-3.5 h-3.5 fill-current text-emerald-400" />
                <span>{currentTask.speedBenchmark}</span>
              </div>
            </div>

            {/* Simulated Animated Cursor Moving on Screen */}
            <div 
              className="absolute z-20 pointer-events-none transition-all duration-700 ease-out flex items-center gap-2"
              style={{
                left: `${currentTask.cursorTarget.x}%`,
                top: `${currentTask.cursorTarget.y}%`
              }}
            >
              <div className="relative">
                <MousePointer className="w-7 h-7 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] fill-blue-600 animate-bounce" />
                <span className="absolute -inset-1 rounded-full border-2 border-blue-400/80 animate-ping" />
              </div>
              <div className="px-2.5 py-1 rounded-lg bg-blue-600/95 backdrop-blur-sm text-white text-[10px] font-mono font-bold shadow-lg border border-blue-400/50 whitespace-nowrap animate-in fade-in">
                {currentTask.cursorTarget.label}
              </div>
            </div>

            {/* Live Terminal Telemetry Overlay (Bottom Left of Video) */}
            <div className="absolute bottom-16 sm:bottom-20 left-4 right-4 sm:right-auto sm:max-w-md z-20 pointer-events-none">
              <div className="bg-slate-950/90 backdrop-blur-md border border-slate-800 rounded-xl p-3 shadow-2xl font-mono text-[10px] sm:text-[11px] text-slate-300">
                <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-slate-800 text-[10px] text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <Terminal className="w-3 h-3 text-blue-400" />
                    <span className="font-bold text-slate-300">LIVE ENGINE EVENT LOGS</span>
                  </div>
                  <span className="text-emerald-400">THREAD #01 ONLINE</span>
                </div>
                <div className="space-y-1">
                  {currentTask.logs.slice(-3).map((log, lIdx) => (
                    <div key={lIdx} className="leading-snug truncate">
                      <span className="text-blue-400 font-bold">{log.split(' ')[0]}</span>{' '}
                      <span className={lIdx === 2 ? 'text-emerald-300 font-semibold' : 'text-slate-300'}>
                        {log.substring(log.indexOf(' ') + 1)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Big Play/Pause Overlay Button on Center Hover */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={isPlaying ? 'Pause simulation' : 'Play simulation'}
              className="absolute inset-0 flex items-center justify-center bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity z-20 cursor-pointer"
            >
              <div className="w-16 h-16 rounded-full bg-blue-600/90 hover:bg-blue-600 text-white flex items-center justify-center shadow-2xl backdrop-blur-sm transition-transform hover:scale-110 active:scale-95">
                {isPlaying ? <Pause className="w-7 h-7" /> : <Play className="w-7 h-7 ml-1 fill-current" />}
              </div>
            </button>

            {/* Video Controls Bar Overlay (Bottom of Frame) */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950 via-slate-950/95 to-transparent pt-6 pb-3 px-4 sm:px-6 z-30">
              {/* Scrubbable Timeline Track */}
              <div 
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const clickX = e.clientX - rect.left;
                  const newPercent = Math.min(100, Math.max(0, (clickX / rect.width) * 100));
                  setProgress(newPercent);
                  const newIndex = Math.min(3, Math.floor(newPercent / 25));
                  setActiveTaskIndex(newIndex);
                }}
                className="w-full h-2 bg-slate-800/80 hover:h-2.5 rounded-full mb-3 cursor-pointer relative overflow-hidden transition-all group/bar"
              >
                <div 
                  className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-400 rounded-full transition-all duration-150 relative"
                  style={{ width: `${progress}%` }}
                >
                  <span className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow-md opacity-0 group-hover/bar:opacity-100" />
                </div>
                
                {/* Milestone Step Ticks */}
                <div className="absolute inset-0 flex justify-between px-1 pointer-events-none">
                  <span className="w-0.5 h-full bg-slate-700/60" />
                  <span className="w-0.5 h-full bg-slate-700/60" />
                  <span className="w-0.5 h-full bg-slate-700/60" />
                  <span className="w-0.5 h-full bg-slate-700/60" />
                </div>
              </div>

              {/* Control Buttons */}
              <div className="flex items-center justify-between text-slate-300 text-xs">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="p-1.5 rounded-lg hover:bg-slate-800 text-white transition-colors"
                    title={isPlaying ? 'Pause' : 'Play'}
                  >
                    {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-current" />}
                  </button>

                  <button
                    onClick={handleRestart}
                    className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
                    title="Restart Demo"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
                    title={isMuted ? 'Unmute Audio Narration' : 'Mute Audio'}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
                  </button>

                  <div className="font-mono text-[11px] text-slate-400 hidden sm:inline">
                    <span className="text-white font-bold">{currentTask.timestamp}</span> / 01:24
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  {/* Speed Selector */}
                  <div className="flex items-center gap-1 bg-slate-800/90 rounded-lg p-0.5 text-[11px]">
                    {[1, 1.5, 2].map((spd) => (
                      <button
                        key={spd}
                        onClick={() => setPlaybackSpeed(spd)}
                        className={`px-2 py-0.5 rounded font-bold transition-all ${
                          playbackSpeed === spd ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        {spd}x
                      </button>
                    ))}
                  </div>

                  {/* Fullscreen Toggle */}
                  <button
                    onClick={() => setIsFullscreen(!isFullscreen)}
                    className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
                    title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
                  >
                    {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Chapter Task Selector Grid (Underneath Video) */}
          <div className="p-4 sm:p-6 bg-slate-900 border-t border-slate-800">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
              Demonstrated Automation Tasks (Click to Jump)
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {AUTOMATION_TASKS.map((task, idx) => {
                const isActive = activeTaskIndex === idx;
                return (
                  <button
                    key={task.id}
                    onClick={() => handleTaskSelect(idx)}
                    className={`text-left p-3.5 rounded-xl border transition-all relative ${
                      isActive 
                        ? 'bg-blue-950/60 border-blue-500 shadow-lg shadow-blue-500/10 ring-1 ring-blue-500' 
                        : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 text-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                        isActive ? 'bg-blue-500 text-white' : 'bg-slate-800 text-slate-400'
                      }`}>
                        {task.timestamp}
                      </span>
                      {isActive && (
                        <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          ACTIVE
                        </span>
                      )}
                    </div>
                    <div className="font-bold text-xs text-white mb-1 truncate">
                      {task.title}
                    </div>
                    <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed font-normal">
                      {task.actionSummary}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Bottom Specifications Bar */}
          <div className="bg-slate-950 px-4 sm:px-6 py-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>
                Demonstration captured directly on <span className="text-slate-200 font-semibold">Windows 11 Desktop (Intel i7, 16GB RAM, 4G Mobile Proxies)</span>.
              </span>
            </div>
            
            <a
              href="#pricing"
              className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 font-bold transition-colors"
            >
              <span>Get Full Version with All Automation Scripts</span>
              <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
