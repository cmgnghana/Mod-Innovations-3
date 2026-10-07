import React from 'react';
import { 
  Home, 
  Award, 
  ShieldCheck, 
  Cpu, 
  CheckCircle2, 
  ArrowRight, 
  Wrench, 
  Printer, 
  Zap, 
  Clock, 
  Sparkles, 
  Layers, 
  ChevronRight, 
  Check, 
  X, 
  Target, 
  TrendingUp, 
  Settings, 
  PhoneCall, 
  Mail,
  Sliders,
  DollarSign
} from 'lucide-react';
import { ServiceItem } from '../types';

interface WhyChooseUsPageProps {
  onNavigateHome: () => void;
  onNavigateServices?: () => void;
  onOpenConsultation: (serviceName?: string) => void;
  onSelectService?: (service: ServiceItem) => void;
}

export const WhyChooseUsPage: React.FC<WhyChooseUsPageProps> = ({
  onNavigateHome,
  onNavigateServices,
  onOpenConsultation
}) => {
  const differentiators = [
    {
      id: 'component-level-repair',
      icon: Cpu,
      title: 'Component-Level Micro-Soldering vs Whole-Board Replacement',
      badge: 'Cost Efficiency',
      headline: 'Save Up to 75% on Hardware Replacement Costs',
      description: 'While third-party service centers recommend discarding damaged mainboards and purchasing costly complete assemblies, our technicians perform precision component-level diagnostics. We identify and replace failed MOSFETs, blown fuses, motor driver ICs, and damaged power rails directly on the original PCB.',
      highlights: [
        'Micro-soldering repair for printhead driver circuits & power stages',
        'Direct diagnostics for Epson, Ricoh, KM, and Starfire board architectures',
        'Preservation of original factory firmware and board calibrations'
      ]
    },
    {
      id: 'diagnostic-rigor',
      icon: Target,
      title: 'Root-Cause Engineering vs Trial-and-Error Guesswork',
      badge: 'Zero Guesswork',
      headline: 'Definitive Identification of Secondary Fault Chains',
      description: 'A blown mainboard is frequently the secondary symptom of a shorted printhead, degraded trailing cable, or fluctuating power supply. We test the entire electrical and mechanical signal path to ensure root causes are resolved before powering refurbished assemblies.',
      highlights: [
        'Oscilloscope & thermal imaging analysis of electrical signal lines',
        'Comprehensive cable resistance and voltage stability checks',
        'Zero risk of secondary board burnout upon reinstall'
      ]
    },
    {
      id: 'fast-turnaround',
      icon: Clock,
      title: 'Rapid Triage & Critical Spare Parts Availability',
      badge: 'Production Continuity',
      headline: 'Minimizing Machine Downtime for Commercial Print Shops',
      description: 'Every idle day on a commercial DTF, UV, or eco-solvent printer is lost revenue. We maintain in-stock inventories of critical relays, dampers, raster encoders, optic sensors, driver ICs, and mainboards to expedite turnaround times from intake to re-installation.',
      highlights: [
        'Priority emergency diagnostic triage available for production bottlenecks',
        'In-stock inventory of high-frequency failure electronic components',
        'Fast bench testing protocols and direct dispatch'
      ]
    },
    {
      id: 'dual-expertise',
      icon: Layers,
      title: 'Hardware Engineering Synergized with Print Production',
      badge: 'Holistic Capability',
      headline: 'Technicians Who Understand Physical Media & Print Chemistry',
      description: 'Unlike generic electronics repair shops that lack printing domain knowledge, our engineers understand color science, ink viscosities, media feed mechanics, curing temperatures, and RIP software profiles. We diagnose both electronic hardware faults and physical print quality defects in one unified service.',
      highlights: [
        'End-to-end knowledge spanning electronics, firmware, and chemical ink dynamics',
        'Expertise in DTF film curing, UV varnish layering, and textile dye migration',
        'RIP profile optimization (Photoprint, MainTop, Wasatch, Onyx)'
      ]
    },
    {
      id: 'rigorous-testing',
      icon: ShieldCheck,
      title: 'Bench Load Testing & Post-Service Warranty',
      badge: 'Quality Assurance',
      headline: 'Exhaustive Functional Verification Under Full Operating Stress',
      description: 'Every repaired board and reconditioned printer undergoes multi-hour continuous load testing under real simulated print duty cycles. We verify signal integrity across continuous nozzle firings, head carriage sweeps, and stepping motor cycles before releasing hardware to clients.',
      highlights: [
        'Simulated continuous print run stress testing on dedicated test benches',
        'Voltage variance tolerance checks under variable operating temperatures',
        'Transparent service warranty backing on replaced components'
      ]
    },
    {
      id: 'authentic-materials',
      icon: Sparkles,
      title: 'Premium Consumables, Authentic Parts & Signage Precision',
      badge: 'Material Excellence',
      headline: 'Sub-Millimeter Structural & Visual Standards',
      description: 'Whether supplying UV LED inks, DTF adhesive powders, optical encoders, or fabricating illuminated 3D architectural signage, we reject counterfeit parts and substandard materials. Our fabrication processes use aircraft-grade acrylics, corrosion-resistant metals, and high-efficiency LEDs.',
      highlights: [
        'High-density, UV-resistant inks for true outdoor durability',
        'Precision CNC routing and laser-welded structural 3D signage frames',
        'Strict rejection of knock-off silicon components and inferior printheads'
      ]
    }
  ];

  const comparisonRows = [
    {
      feature: 'Mainboard Diagnostics & Repairs',
      modInnovations: 'Precision component-level micro-soldering; replaces only defective ICs/fuses',
      others: 'Requires buying an entire new mainboard at high cost; no board-level repair',
      highlight: true
    },
    {
      feature: 'Root Cause Investigation',
      modInnovations: 'Exhaustive signal chain analysis (printhead, power supply, trailing cables)',
      others: 'Replaces parts without verifying power line shorts, causing repeat failures',
      highlight: false
    },
    {
      feature: 'Equipment Specialization',
      modInnovations: 'Wide-format, DTF, UV flatbed, textile & eco-solvent production machines',
      others: 'Limited to standard consumer desktop printers or generic electronics',
      highlight: true
    },
    {
      feature: 'Dual Engineering & Print Capability',
      modInnovations: 'Hardware mechanics + RIP calibration + in-house digital printing & 3D signage',
      others: 'Purely repair or purely print; no technical cross-discipline synergy',
      highlight: false
    },
    {
      feature: 'Critical Parts & Accessories Stock',
      modInnovations: 'Locally stocked raster strips, sensors, pumps, dampers, and control boards',
      others: 'Lengthy wait times for basic consumables and imported spare parts',
      highlight: true
    },
    {
      feature: 'Service Accountability & Warranty',
      modInnovations: 'Documented test logs, verified post-repair bench testing & repair warranty',
      others: 'No load testing, limited warranty or no guarantee against secondary shorts',
      highlight: false
    }
  ];

  const valueMetrics = [
    {
      stat: 'Up to 75%',
      title: 'Repair Cost Savings',
      desc: 'Significant cost reduction by repairing damaged PCB components instead of sourcing expensive new motherboards.'
    },
    {
      stat: '99.2%',
      title: 'Diagnostic Accuracy',
      desc: 'Comprehensive multi-meter, oscilloscope, and thermal intake testing eliminates guesswork.'
    },
    {
      stat: '24-48h',
      title: 'Rapid Triage Protocol',
      desc: 'Swift intake evaluation on emergency hardware breakdowns to minimize commercial press idle time.'
    },
    {
      stat: '100%',
      title: 'Bench Load Verification',
      desc: 'All serviced equipment and boards undergo stress testing prior to field redeployment.'
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-[#051512] min-h-screen text-slate-100 selection:bg-[#a3e635] selection:text-slate-950">
      
      {/* 1. Header & Breadcrumb Hero Section */}
      <section className="relative overflow-hidden border-b border-emerald-900/40 bg-gradient-to-b from-[#030e0c] via-[#051512] to-[#061814] py-14 sm:py-20">
        {/* Glow ambient lighting elements */}
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-lime-500/10 blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -right-32 w-96 h-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb navigation */}
          <nav className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 mb-6">
            <button 
              onClick={onNavigateHome}
              className="hover:text-[#84CC16] transition-colors flex items-center gap-1 cursor-pointer"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-emerald-800" />
            <span className="text-[#84CC16]">Why Choose Us</span>
          </nav>

          {/* Eyebrow and Main Page Headline */}
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800/60 text-[#84CC16] text-xs font-bold uppercase tracking-widest">
              <Award className="w-3.5 h-3.5" />
              <span>Engineering Excellence & Measurable Value</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Why Choose <span className="text-[#84CC16]">MOD Innovations</span>
            </h1>
            
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Commercial printers, advertising agencies, and production workshops rely on MOD Innovations for uncompromised precision, component-level engineering savings, and complete technical reliability across hardware, print media, and 3D signage.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenConsultation('Technical Advantage Evaluation')}
                className="px-6 py-3 rounded-[50px] bg-[#84CC16] hover:bg-[#bef264] text-slate-950 font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-lg shadow-lime-500/20 active:scale-95 cursor-pointer flex items-center gap-2"
              >
                <span>Request Technical Assessment</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="tel:0207004123"
                className="px-6 py-3 rounded-[50px] bg-emerald-950/70 hover:bg-emerald-900/80 border border-emerald-700/40 text-slate-200 font-bold text-xs uppercase tracking-wider transition-all duration-200 flex items-center gap-2 cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 text-[#84CC16]" />
                <span>Direct Line: 0207004123</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Key Metrics Bar */}
      <section className="bg-[#030e0c] border-b border-emerald-900/30 py-10 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valueMetrics.map((item, i) => (
              <div 
                key={i} 
                className="bg-[#051814] border-none p-6 rounded-[1px] relative overflow-hidden flex flex-col justify-between group hover:bg-emerald-950/40 transition-colors shadow-lg"
              >
                <div className="space-y-2">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-black font-display text-[#84CC16] tracking-tight">
                    {item.stat}
                  </div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-emerald-900/30 flex items-center justify-between text-[11px] text-emerald-400 font-semibold">
                  <span>Verified Standard</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#84CC16]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Deep 6 Core Differentiators */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800/60 text-[#84CC16] text-[11px] font-bold uppercase tracking-widest">
            <span>Competitive Engineering Advantage</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight font-display">
            The MOD Innovations Standard of Service
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Discover what sets our hardware diagnostics, printing technology, and fabrication workflows apart from standard repair shops and commercial vendors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((diff, index) => {
            const Icon = diff.icon;
            return (
              <div 
                key={diff.id} 
                className="bg-[#061c17] hover:bg-[#07241d] border-none rounded-[1px] p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-xl group"
              >
                <div className="space-y-4">
                  {/* Top metadata */}
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-full bg-emerald-950 border border-emerald-800/50 flex items-center justify-center text-[#84CC16] group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800/40">
                      {diff.badge}
                    </span>
                  </div>

                  {/* Title & Headline */}
                  <div>
                    <span className="text-xs font-mono font-bold text-slate-500">0{index + 1} · PILLAR</span>
                    <h3 className="text-lg font-bold text-white mt-1 group-hover:text-[#EFDFBD] transition-colors">
                      {diff.title}
                    </h3>
                  </div>

                  <p className="text-xs text-[#84CC16] font-semibold">
                    {diff.headline}
                  </p>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {diff.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="pt-3 border-t border-emerald-900/30 space-y-2">
                    {diff.highlights.map((h, hi) => (
                      <div key={hi} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#84CC16] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-5 mt-6 border-t border-emerald-900/40 flex items-center justify-between">
                  <button
                    onClick={() => onOpenConsultation(`Inquiry on ${diff.title}`)}
                    className="text-xs font-bold text-[#84CC16] hover:text-[#bef264] flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>Discuss Requirements</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-[10px] font-mono text-slate-500 uppercase">MOD Standard</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Comparison Table: MOD Innovations vs Traditional Providers */}
      <section className="bg-[#030e0c] border-y border-emerald-900/30 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800/60 text-[#84CC16] text-[11px] font-bold uppercase tracking-widest">
              <span>Direct Comparison</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight font-display">
              MOD Innovations vs. Typical Service Centers
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              How our dedicated engineering capabilities, direct hardware diagnostics, and comprehensive production solutions provide tangible advantages for your business.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b border-emerald-800/60 bg-[#051814]">
                  <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-slate-400 w-1/4">
                    Capability / Factor
                  </th>
                  <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-[#84CC16] bg-emerald-950/60 w-5/12 border-x border-emerald-800/40">
                    MOD Innovations
                  </th>
                  <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-slate-400 w-1/3">
                    Typical Repair Center / General Vendor
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-emerald-900/30 text-xs">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#061c17] transition-colors">
                    <td className="py-4 px-6 font-semibold text-white">
                      {row.feature}
                    </td>
                    <td className="py-4 px-6 bg-emerald-950/30 border-x border-emerald-800/30 font-medium text-slate-200">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#84CC16] shrink-0 mt-0.5" />
                        <span>{row.modInnovations}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-slate-400">
                      <div className="flex items-start gap-2">
                        <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                        <span>{row.others}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. Proven Workflow & Client Trust Guarantee */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="bg-gradient-to-br from-[#061c17] via-[#07241d] to-[#04120e] rounded-[1px] p-8 sm:p-12 border-none shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/90 border border-emerald-800/70 text-[#84CC16] text-[11px] font-bold uppercase tracking-widest">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Our Service Commitment</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-snug">
              Every Diagnostic, Every Print, Every Install Backed by Rigorous Standards
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              We stand firmly behind our engineering diagnostics and printing craftsmanship. When you bring your printer mainboard or equipment to MOD Innovations, you receive transparent technical reporting, upfront scope quotes, authentic components, and thorough post-repair verification.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3 bg-emerald-950/60 p-4 rounded-[1px] border border-emerald-900/30">
                <div className="p-2 rounded-full bg-emerald-900/50 text-[#84CC16]">
                  <Wrench className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">No Hidden Fees</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Comprehensive intake quote provided before micro-soldering or hardware servicing begins.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-emerald-950/60 p-4 rounded-[1px] border border-emerald-900/30">
                <div className="p-2 rounded-full bg-emerald-900/50 text-[#84CC16]">
                  <Printer className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Color & Build Fidelity</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Pantone matching, high-density pigment inks, and premium weatherproof materials on every job.</p>
                </div>
              </div>
            </div>

            <div className="pt-6 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenConsultation('Why Choose Us - Consultation')}
                className="px-6 py-3.5 rounded-[50px] bg-[#84CC16] hover:bg-[#bef264] text-slate-950 font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-lg shadow-lime-500/20 active:scale-95 cursor-pointer flex items-center gap-2"
              >
                <span>Partner With MOD Innovations</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onNavigateServices}
                className="px-6 py-3.5 rounded-[50px] bg-emerald-950/80 hover:bg-emerald-900/90 border border-emerald-700/50 text-slate-200 font-bold text-xs uppercase tracking-wider transition-all duration-200 flex items-center gap-2 cursor-pointer"
              >
                <span>Explore Full Service Portfolio</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
