import React from 'react';
import { 
  ArrowUpRight, 
  ArrowRight, 
  Wrench, 
  Printer, 
  Sparkles, 
  Layers, 
  ShieldCheck, 
  Cpu, 
  CheckCircle2, 
  Award,
  Settings,
  Flame,
  Palette,
  Eye,
  ChevronRight,
  PhoneCall,
  Mail,
  Send,
  Target,
  Compass,
  Zap,
  Building2,
  Users2
} from 'lucide-react';
import darkBgImg from '../assets/images/hero_dark_bg_1791350497284.jpg';
import { ServiceItem } from '../types';

const aboutHeroImg = 'https://i.ibb.co/93kpRfct/004-Printer-Mainboard-and-Control-Board-Repairs.jpg';
const workshopImg = 'https://i.ibb.co/C3v8BH35/003-Printer-Mainboard-and-Control-Board-Repairs.jpg';
const technicianImg = 'https://i.ibb.co/GhPK6bm/002-Printer-Mainboard-and-Control-Board-Repairs.jpg';

interface AboutPageProps {
  onNavigateHome: () => void;
  onOpenConsultation: (service?: string) => void;
  onSelectService: (service: ServiceItem) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigateHome,
  onOpenConsultation,
  onSelectService
}) => {
  const [formState, setFormState] = React.useState({
    fullName: '',
    email: '',
    phone: '',
    inquiryType: 'Corporate Technical Partnership',
    message: ''
  });
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formState.fullName && formState.email) {
      setSubmitted(true);
    }
  };

  const coreValues = [
    {
      title: 'Diagnostic Precision',
      badge: 'Engineering First',
      description: 'We believe in identifying and repairing the exact failing circuit component, MOSFET, or servo driver rather than pushing costly and unnecessary whole-board replacements.',
      icon: Cpu
    },
    {
      title: 'Production Continuity',
      badge: 'Zero Downtime Focus',
      description: 'In the commercial printing and signage industry, machine downtime means lost revenue. Our maintenance workflows are optimized for rapid, durable, same-job turnaround.',
      icon: Zap
    },
    {
      title: 'Artisanal Craftsmanship',
      badge: 'Material Excellence',
      description: 'From vector prepress color accuracy to CNC acrylic fabrication and weather-sealed LED illumination, our physical deliverables are engineered to endure and impress.',
      icon: Sparkles
    },
    {
      title: 'Transparent Technical Advisory',
      badge: 'Customer Partnership',
      description: 'We provide honest hardware evaluations, authentic component specifications, and actionable preventative guidance to maximize our clients’ equipment investment.',
      icon: ShieldCheck
    }
  ];

  const workshopCapabilities = [
    {
      title: 'Micro-Soldering & Circuit Diagnostic Lab',
      detail: 'Equipped with digital oscilloscopes, variable DC power supplies, thermal diagnostic imaging, and SMD hot-air rework stations for precise motherboard restoration.',
      icon: Cpu
    },
    {
      title: 'Wide-Format Calibration & Test Facility',
      detail: 'Dedicated test bays for printhead waveform tuning, optical encoder strip alignment, solvent line flushing, and high-speed bidirectional calibration.',
      icon: Printer
    },
    {
      title: 'DTF & UV Curing Experimental Rigs',
      detail: 'Specialized testing rigs for white ink recirculation loops, automated powder shaker thermal profiling, and UV LED intensity measurement.',
      icon: Settings
    },
    {
      title: 'Architectural 3D Signage Fabrication Floor',
      detail: 'Complete CNC acrylic routing, metal channel bending, custom light-diffusion face forming, and IP67 weather-sealed LED illumination assembly.',
      icon: Layers
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-[#051512] text-slate-100">
      
      {/* ========================================================================= */}
      {/* SECTION 1: PAGE HERO */}
      {/* ========================================================================= */}
      <section className="relative py-14 sm:py-20 lg:py-28 overflow-hidden bg-[#051512] border-b border-emerald-950/60">
        {/* Ambient Dark Photographic Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src={aboutHeroImg} 
            alt="MOD Innovations technical printing facility" 
            className="w-full h-full object-cover object-center opacity-25 mix-blend-luminosity"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#051512]/95 via-[#051512]/90 to-[#051512]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(132,204,22,0.08),transparent_70%)]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 mb-6">
            <button 
              onClick={onNavigateHome} 
              className="hover:text-[#84CC16] transition-colors cursor-pointer"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-[#84CC16]">About Us</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-5 sm:space-y-6 text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] font-display break-words">
                The Engineering Behind <br className="hidden sm:inline" />
                <span className="text-[#84CC16]">MOD Innovations</span>
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
                Founded to bridge the gap between high-precision printing machinery, micro-electronic circuitry restoration, and architectural visual fabrication. We exist to maximize hardware longevity and produce uncompromising print craftsmanship.
              </p>
            </div>

            {/* Right Stat / Value Quick-Card */}
            <div className="lg:col-span-4 w-full">
              <div className="bg-[#061814]/90 border-none p-5 sm:p-7 md:p-8 rounded-[1px] shadow-2xl backdrop-blur-md space-y-5 sm:space-y-6">
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#84cc16]">Company Overview</span>
                  <h3 className="text-lg sm:text-xl font-bold font-display text-white">Technical Enterprise Profile</h3>
                </div>

                <div className="space-y-3 text-xs text-slate-300">
                  <div className="flex items-start gap-3 p-3 rounded-[1px] bg-emerald-950/60 border-none">
                    <Compass className="w-4 h-4 text-[#84cc16] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white block">Core Mission</span>
                      <span className="text-slate-400">Eliminating printer downtime & obsolescence through component-level engineering.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-[1px] bg-emerald-950/60 border-none">
                    <Building2 className="w-4 h-4 text-[#84cc16] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white block">Operational Facility</span>
                      <span className="text-slate-400">Integrated diagnostic laboratory, calibration bays & 3D signage fabrication floor.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-[1px] bg-emerald-950/60 border-none">
                    <Users2 className="w-4 h-4 text-[#84cc16] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white block">Client Commitment</span>
                      <span className="text-slate-400">Transparent technical advice, genuine parts, and long-term production support.</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-emerald-900/50 text-[11px] text-slate-400">
                  Committed to engineering rigor, transparent diagnostics, and lasting visual quality.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: COMPANY ORIGIN & STRATEGIC IDENTITY */}
      {/* ========================================================================= */}
      <section id="company-story" className="py-16 md:py-24 lg:py-28 bg-[#061814] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Visual Overlapping Composition */}
            <div className="lg:col-span-6 relative flex justify-center order-2 lg:order-1 w-full mt-6 lg:mt-0">
              <div className="relative w-full max-w-[360px] sm:max-w-[420px] md:max-w-[460px] min-h-[360px] sm:min-h-[420px] md:min-h-[460px]">
                
                {/* Stepped Vector Arrow Graphic on Top-Right */}
                <div className="absolute top-2 right-2 sm:right-4 md:right-6 z-20 pointer-events-none flex items-start gap-1">
                  <svg className="w-12 h-12 sm:w-16 sm:h-16 md:w-18 md:h-18 text-white/80" viewBox="0 0 80 80" fill="none">
                    <path 
                      d="M18 55 L 28 55 L 28 35 L 42 35 L 42 16 L 62 16" 
                      stroke="currentColor" 
                      strokeWidth="1.8" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                    />
                    <path 
                      d="M54 10 L 64 16 L 54 22" 
                      stroke="currentColor" 
                      strokeWidth="1.8" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                    />
                  </svg>
                </div>

                {/* Top-Left Circular Photo: Workshop / Large Format Printer */}
                <div className="w-[58%] aspect-square rounded-full shadow-2xl relative z-0 bg-emerald-950">
                  <div className="w-full h-full rounded-full overflow-hidden relative">
                    <img 
                      src={workshopImg} 
                      alt="MOD Innovations printing equipment workshop" 
                      className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-emerald-950/10 pointer-events-none" />
                  </div>
                  {/* Rotating 3px Dashed Border */}
                  <div className="absolute -inset-[4px] pointer-events-none z-10">
                    <svg className="w-full h-full animate-spin-slow overflow-visible" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="50"
                        fill="none"
                        stroke="#84CC16"
                        strokeWidth="3"
                        vectorEffect="non-scaling-stroke"
                        strokeDasharray="8 8"
                      />
                    </svg>
                  </div>
                </div>

                {/* Bottom-Right Circular Photo: Mainboard Diagnostic Technician */}
                <div className="w-[66%] aspect-square rounded-full -mt-12 sm:-mt-16 md:-mt-20 ml-auto relative z-10 bg-emerald-950 shadow-2xl">
                  <div className="w-full h-full rounded-full overflow-hidden relative">
                    <img 
                      src={technicianImg} 
                      alt="MOD Innovations printer mainboard technician" 
                      className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-emerald-950/10 pointer-events-none" />
                  </div>
                  {/* Rotating 3px Dashed Border */}
                  <div className="absolute -inset-[4px] pointer-events-none z-10">
                    <svg className="w-full h-full animate-spin-slow overflow-visible" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="50"
                        fill="none"
                        stroke="#84CC16"
                        strokeWidth="3"
                        vectorEffect="non-scaling-stroke"
                        strokeDasharray="8 8"
                      />
                    </svg>
                  </div>
                </div>

                {/* Rotating Circular Brand Stamp Badge */}
                <div className="absolute bottom-2 sm:bottom-4 left-0 sm:left-4 z-20 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-[#07241d] border border-emerald-700/60 shadow-2xl flex items-center justify-center p-1">
                  <svg className="w-full h-full animate-spin-slow" viewBox="0 0 100 100">
                    <path
                      id="aboutPageCirclePath"
                      d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
                      fill="none"
                    />
                    <text className="text-[7.2px] font-bold uppercase fill-emerald-200 tracking-[0.24em]">
                      <textPath href="#aboutPageCirclePath" startOffset="0%">
                        MOD INNOVATIONS · PRINTING & IT SOLUTIONS ·
                      </textPath>
                    </text>
                  </svg>

                  <div className="absolute inset-0 m-auto w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#84cc16] text-slate-950 flex items-center justify-center shadow-md">
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column: Narrative & Story */}
            <div className="lg:col-span-6 space-y-5 sm:space-y-6 text-left max-w-xl order-1 lg:order-2">
              <div className="inline-block">
                <span className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[#84CC16] font-display">
                  OUR ORIGIN & PURPOSE
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight leading-[1.14] font-display break-words">
                Why MOD Innovations Was Built
              </h2>

              <p className="text-xs sm:text-sm md:text-base text-slate-300 font-normal leading-relaxed">
                For years, commercial print shops, sign makers, and garment decorators faced an agonizing dilemma: when industrial print equipment suffered an electronic or mechanical malfunction, suppliers routinely recommended buying expensive replacement motherboards or entire new machines.
              </p>

              <p className="text-xs sm:text-sm text-slate-400 font-normal leading-relaxed">
                MOD Innovations was established to challenge that wasteful status quo. By combining deep micro-electronics engineering with advanced wide-format mechanical expertise, we proved that damaged motherboards, servo drivers, and printheads could be diagnosed and restored to factory specifications at a fraction of the cost.
              </p>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <div className="p-4 rounded-xl bg-[#04110e] border border-emerald-900/50">
                  <h4 className="text-sm font-bold text-white font-display flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-[#84CC16]" />
                    <span>Component-Level Recovery</span>
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">Replacing blown micro-components and MOSFETs to salvage high-value equipment.</p>
                </div>

                <div className="p-4 rounded-xl bg-[#04110e] border border-emerald-900/50">
                  <h4 className="text-sm font-bold text-white font-display flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[#84CC16]" />
                    <span>Integrated Physical Output</span>
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">Applying the same engineering precision to custom digital print runs and architectural 3D signage.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: MISSION, VISION & CORE PRINCIPLES */}
      {/* ========================================================================= */}
      <section className="relative py-16 md:py-24 lg:py-28 bg-[#051512] overflow-hidden border-t border-emerald-950">
        <div className="absolute inset-0 z-0">
          <img 
            src={darkBgImg} 
            alt="Dark atmospheric background" 
            className="w-full h-full object-cover object-center opacity-20 mix-blend-luminosity"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#051512] via-[#051512]/95 to-[#051512]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
          
          {/* Mission & Vision Dual Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="p-6 sm:p-8 rounded-[1px] bg-[#04110e] border border-emerald-900/60 shadow-xl space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-950 border border-emerald-800/60 flex items-center justify-center text-[#84CC16]">
                <Target className="w-6 h-6 stroke-[2.2]" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#84CC16] block">
                Our Mission
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                Maximizing Industrial Uptime & Crafting Uncompromising Visual Quality
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                To eliminate unnecessary printing equipment obsolescence through precision electronic diagnostics and mechanical mastery, while delivering flawless digital print production and durable 3D architectural signage that elevates our clients’ market presence.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-[1px] bg-[#04110e] border border-emerald-900/60 shadow-xl space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-950 border border-emerald-800/60 flex items-center justify-center text-[#84CC16]">
                <Compass className="w-6 h-6 stroke-[2.2]" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#84CC16] block">
                Our Vision
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                The Regional Benchmark for Print Engineering & Visual Fabrication
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                To serve as West Africa’s most trusted technical authority in commercial printing technology, circuit board engineering, genuine hardware supply, and bespoke architectural brand installations.
              </p>
            </div>
          </div>

          {/* 4 Core Guiding Values */}
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-2">
            <span className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[#84CC16] font-display">
              HOW WE OPERATE
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight font-display">
              Our Four Engineering Principles
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm">
              The foundational commitments guiding every board diagnostic, printhead recovery, and signage installation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {coreValues.map((val, idx) => {
              const IconComp = val.icon;
              return (
                <div key={idx} className="bg-[#04110e] border border-emerald-900/50 p-6 rounded-[1px] space-y-3 flex flex-col justify-between hover:border-[#84CC16]/40 transition-colors">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-lg bg-emerald-950/80 border border-emerald-800/60 flex items-center justify-center text-[#84CC16]">
                        <IconComp className="w-5 h-5 stroke-[2.2]" />
                      </div>
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-emerald-950 text-slate-300 border border-emerald-900/50">
                        {val.badge}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold font-display text-white">
                      {val.title}
                    </h3>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: INSIDE OUR TECHNICAL WORKSHOP & FACILITY */}
      {/* ========================================================================= */}
      <section className="py-16 md:py-24 lg:py-28 bg-[#061814] relative overflow-hidden border-t border-emerald-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
          
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
            <div className="inline-block">
              <span className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[#84CC16] font-display">
                TECHNICAL INFRASTRUCTURE
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight leading-tight font-display break-words">
              Inside the MOD Innovations Workshop
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
              Our operational facility combines specialized electronics diagnostics, precision printing calibration bays, and heavy fabrication tooling under one roof.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {workshopCapabilities.map((item, idx) => {
              const IconC = item.icon;
              return (
                <div key={idx} className="p-6 rounded-[1px] bg-[#04110e] border border-emerald-900/60 shadow-xl space-y-3 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-950 flex items-center justify-center text-[#84CC16] border border-emerald-800/50">
                      <IconC className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    <h3 className="text-base font-bold text-white font-display">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: OUR DUAL OPERATIONAL BRANCHES (GATEWAY TO SERVICES) */}
      {/* ========================================================================= */}
      <section className="py-16 md:py-24 bg-[#051512] relative overflow-hidden border-t border-emerald-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[#84CC16] font-display">
              OPERATIONAL DISCIPLINES
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-display">
              Two Integrated Technical Divisions
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              For full service specifications, machine compatibility lists, and detailed deliverables, explore our comprehensive Services directory.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Division 1 */}
            <div className="p-7 sm:p-9 rounded-[1px] bg-[#061814] border border-emerald-900/60 shadow-xl space-y-5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-950 border border-emerald-800/60 flex items-center justify-center text-[#84CC16]">
                  <Wrench className="w-6 h-6 stroke-[2.2]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                  Industrial Hardware, Electronics & Maintenance
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Covering wide-format printer sales, motherboard and power board micro-soldering repairs, DTF printing setups, UV curing flatbeds, textile printing maintenance, and authentic spare parts supply.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="text-[11px] px-2.5 py-1 rounded bg-emerald-950 text-emerald-300 border border-emerald-900/60">Component Repairs</span>
                  <span className="text-[11px] px-2.5 py-1 rounded bg-emerald-950 text-emerald-300 border border-emerald-900/60">Large-Format Systems</span>
                  <span className="text-[11px] px-2.5 py-1 rounded bg-emerald-950 text-emerald-300 border border-emerald-900/60">DTF & UV Engineering</span>
                  <span className="text-[11px] px-2.5 py-1 rounded bg-emerald-950 text-emerald-300 border border-emerald-900/60">OEM Accessories</span>
                </div>
              </div>

              <div className="pt-4 border-t border-emerald-900/40">
                <button
                  onClick={() => {
                    window.location.hash = '/services';
                  }}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#84CC16] hover:text-[#bef264] transition-colors cursor-pointer"
                >
                  <span>Explore Hardware & Repair Services</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Division 2 */}
            <div className="p-7 sm:p-9 rounded-[1px] bg-[#061814] border border-emerald-900/60 shadow-xl space-y-5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-950 border border-emerald-800/60 flex items-center justify-center text-[#84CC16]">
                  <Sparkles className="w-6 h-6 stroke-[2.2]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                  Creative Branding, Digital Print & 3D Signage
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Delivering prepress vector branding, high-resolution large-format vinyl printing, custom promotional apparel & drinkware, illuminated LED channel letters, and architectural on-site signage mounting.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="text-[11px] px-2.5 py-1 rounded bg-emerald-950 text-emerald-300 border border-emerald-900/60">Prepress Vector Design</span>
                  <span className="text-[11px] px-2.5 py-1 rounded bg-emerald-950 text-emerald-300 border border-emerald-900/60">Wide-Format Print</span>
                  <span className="text-[11px] px-2.5 py-1 rounded bg-emerald-950 text-emerald-300 border border-emerald-900/60">Custom Merchandise</span>
                  <span className="text-[11px] px-2.5 py-1 rounded bg-emerald-950 text-emerald-300 border border-emerald-900/60">3D Channel Lettering</span>
                </div>
              </div>

              <div className="pt-4 border-t border-emerald-900/40">
                <button
                  onClick={() => {
                    window.location.hash = '/services';
                  }}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#84CC16] hover:text-[#bef264] transition-colors cursor-pointer"
                >
                  <span>Explore Creative & Signage Services</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 6: CORPORATE PARTNERSHIP & FACILITY INQUIRY */}
      {/* ========================================================================= */}
      <section className="py-16 md:py-24 bg-[#061814] relative overflow-hidden border-t border-emerald-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
          
          <div className="rounded-[1px] bg-[#04110e] border border-emerald-900/60 p-8 sm:p-12 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl text-center lg:text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-[#84cc16]">
                CORPORATE ENGAGEMENT
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-display">
                Partner with MOD Innovations
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                Whether you operate a high-volume commercial print floor in need of an ongoing technical maintenance partner or require corporate branding and architectural signage, our engineering team is ready to consult.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full sm:w-auto">
              <a
                href="tel:0207004123"
                className="w-full sm:w-auto px-6 py-3.5 rounded-[50px] bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-800/80 text-xs font-bold text-white uppercase tracking-wider inline-flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer text-center"
              >
                <PhoneCall className="w-4 h-4 text-[#84CC16]" />
                <span>Call 0207004123</span>
              </a>

              <button
                onClick={() => onOpenConsultation('Corporate Technical Consultation')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-[50px] bg-[#84cc16] hover:bg-[#bef264] text-xs font-bold uppercase tracking-wider text-slate-950 inline-flex items-center justify-center gap-2 transition-all shadow-lg shadow-lime-500/10 cursor-pointer text-center active:scale-95"
              >
                <span>Schedule Technical Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
