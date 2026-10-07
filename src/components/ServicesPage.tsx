import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  ArrowRight, 
  Printer, 
  Layers, 
  Cpu, 
  CheckCircle2, 
  Settings,
  Palette,
  Eye,
  ChevronRight,
  PhoneCall,
  Mail,
  Send,
  HelpCircle,
  Clock,
  ShieldCheck,
  FileSpreadsheet,
  Compass,
  Sparkles,
  Zap,
  Check
} from 'lucide-react';
import { ServiceItem } from '../types';
import { servicesData, hardwareServicesData, creativeServicesData } from '../data/servicesData';

const servicesHeroImg = 'https://i.ibb.co/C3v8BH35/003-Printer-Mainboard-and-Control-Board-Repairs.jpg';

interface ServicesPageProps {
  onNavigateHome: () => void;
  onOpenConsultation: (serviceName?: string) => void;
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigateHome,
  onOpenConsultation,
  onSelectService
}) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'hardware' | 'creative'>('all');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedServiceInForm, setSelectedServiceInForm] = useState('Printer Mainboard and Control Board Repairs');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const filteredServices = activeCategory === 'all' 
    ? servicesData 
    : activeCategory === 'hardware' 
      ? hardwareServicesData 
      : creativeServicesData;

  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setFormSubmitted(true);
    }
  };

  const workflowSteps = [
    {
      step: '01',
      title: 'Technical Triage & Diagnostic Intake',
      description: 'We evaluate equipment fault logs, board schematics, or prepress vector files to identify the root operational requirement.',
      icon: Cpu
    },
    {
      step: '02',
      title: 'Scope & Component Verification',
      description: 'Transparent assessment with itemized replacement part specifications, turnaround time estimates, or material samples.',
      icon: FileSpreadsheet
    },
    {
      step: '03',
      title: 'Precision Micro-Repair & Production',
      description: 'Execution using calibrated rework stations, OEM-specification components, or high-density wide-format printers and CNC machinery.',
      icon: Settings
    },
    {
      step: '04',
      title: 'Quality Stress-Testing & Handover',
      description: 'Rigorous bench electrical load testing, print color calibration, or structural on-site installation with verified operational stability.',
      icon: ShieldCheck
    }
  ];

  return (
    <div className="pt-24 pb-20">
      
      {/* 1. Page Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <button 
            onClick={onNavigateHome}
            className="hover:text-[#84CC16] transition-colors cursor-pointer"
          >
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-[#84CC16] font-medium">Services</span>
        </div>
      </div>

      {/* 2. Page Hero */}
      <section className="relative overflow-hidden pt-6 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="relative rounded-[1px] overflow-hidden bg-[#061814] shadow-2xl">
            {/* Background Image with Dark Vignette */}
            <div className="absolute inset-0 z-0">
              <img 
                src={servicesHeroImg} 
                alt="MOD Innovations Services Hero" 
                className="w-full h-full object-cover object-center opacity-30 brightness-75 scale-105 rounded-[1px]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#051512] via-[#051512]/90 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#051512] via-transparent to-transparent" />
            </div>

            <div className="relative z-10 p-8 sm:p-12 lg:p-16 max-w-3xl space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-800/60 text-[#84cc16] text-xs font-bold uppercase tracking-widest">
                <Layers className="w-3.5 h-3.5" />
                <span>Commercial Solutions & Technical Directory</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
                Commercial Hardware Engineering & <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#84CC16] via-[#bef264] to-[#EFDFBD]">
                  Professional Production Services
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
                Explore our organized service directory. Click any service card to view deep technical specifications, typical production challenges solved, and full deliverable scopes.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onOpenConsultation('General IT & Printing Inquiry')}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-[50px] bg-[#84CC16] hover:bg-[#bef264] text-slate-950 text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-lg shadow-lime-500/20 active:scale-95 cursor-pointer"
                >
                  <span>Request Service Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="#service-categories"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-[50px] bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-800/80 text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer"
                >
                  <span>Browse Categories</span>
                  <ChevronRight className="w-4 h-4 text-[#84CC16]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Category Filter Header */}
      <section id="service-categories" className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-emerald-900/40 pb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#84CC16] mb-1 block">
                Service Directory Filter
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Specialized Service Offerings
              </h2>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap sm:inline-flex p-1 sm:p-1.5 rounded-2xl sm:rounded-[50px] bg-[#061814] gap-1 justify-center w-full sm:w-auto">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-4 py-2 rounded-[50px] text-xs font-bold transition-all cursor-pointer ${
                  activeCategory === 'all' 
                    ? 'bg-[#84CC16] text-slate-950 shadow-md' 
                    : 'text-slate-300 hover:text-white hover:bg-emerald-950'
                }`}
              >
                All Services (9)
              </button>
              <button
                onClick={() => setActiveCategory('hardware')}
                className={`px-4 py-2 rounded-[50px] text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeCategory === 'hardware' 
                    ? 'bg-[#84CC16] text-slate-950 shadow-md' 
                    : 'text-slate-300 hover:text-white hover:bg-emerald-950'
                }`}
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Printer & Hardware (6)</span>
              </button>
              <button
                onClick={() => setActiveCategory('creative')}
                className={`px-4 py-2 rounded-[50px] text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeCategory === 'creative' 
                    ? 'bg-[#84CC16] text-slate-950 shadow-md' 
                    : 'text-slate-300 hover:text-white hover:bg-emerald-950'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Creative & Signage (3)</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Category 1: Printer Sales, Repair and Maintenance */}
      {(activeCategory === 'all' || activeCategory === 'hardware') && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            
            {/* Category Banner */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-[1px] bg-[#061814] border-l-4 border-l-[#84CC16]">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Printer className="w-5 h-5 text-[#84CC16]" />
                  <span className="text-xs font-bold uppercase tracking-widest text-[#84CC16]">
                    Category 1
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Printer Sales, Repair, Maintenance & Electronics
                </h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  Industrial hardware acquisition, component-level motherboard diagnostics, printhead calibration, and certified accessories.
                </p>
              </div>

              <button
                onClick={() => onOpenConsultation('Printer & Hardware Category Inquiry')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[50px] bg-emerald-950 hover:bg-emerald-900 border border-emerald-800/80 text-xs font-bold text-white transition-all w-fit cursor-pointer shrink-0"
              >
                <span>Inquire Category</span>
                <ArrowRight className="w-4 h-4 text-[#84CC16]" />
              </button>
            </div>

            {/* Hardware Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hardwareServicesData.map((service) => (
                <div 
                  key={service.id}
                  className="group rounded-[1px] bg-[#061814] overflow-hidden flex flex-col justify-between hover:border-emerald-800/60 transition-all duration-300 shadow-xl"
                >
                  <div>
                    {/* Image Header */}
                    <div 
                      onClick={() => onSelectService(service)}
                      className="relative h-48 sm:h-52 overflow-hidden bg-emerald-950 cursor-pointer"
                    >
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-[1px]"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#061814] via-transparent to-transparent pointer-events-none" />
                      
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-[#061814]/90 backdrop-blur-sm border border-emerald-800/60 text-[10px] font-bold text-[#84CC16] uppercase tracking-wider">
                        View Specs
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-6 space-y-4">
                      <div>
                        <h4 
                          onClick={() => onSelectService(service)}
                          className="text-lg font-bold text-white group-hover:text-[#84CC16] transition-colors leading-snug cursor-pointer"
                        >
                          {service.title}
                        </h4>
                        <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                          {service.tagline}
                        </p>
                      </div>

                      {/* Deliverables / Scope Snippet */}
                      {service.deliverables && (
                        <div className="space-y-1.5 pt-2 border-t border-emerald-900/40">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                            Key Deliverables:
                          </span>
                          <ul className="space-y-1 text-xs text-slate-300">
                            {service.deliverables.slice(0, 3).map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <Check className="w-3.5 h-3.5 text-[#84CC16] shrink-0 mt-0.5" />
                                <span className="line-clamp-1">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card Footer Actions */}
                  <div className="p-6 pt-0 flex items-center justify-between border-t border-emerald-900/30 mt-4">
                    <button
                      onClick={() => onSelectService(service)}
                      className="text-xs font-semibold text-slate-300 hover:text-white transition-colors cursor-pointer"
                    >
                      Technical Specs →
                    </button>
                    <button
                      onClick={() => onOpenConsultation(service.title)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-[50px] bg-[#84CC16] hover:bg-[#bef264] text-slate-950 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer active:scale-95 shadow-md shadow-lime-500/10"
                    >
                      <span>Inquire</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>
      )}

      {/* 5. Category 2: Creative & Printing Services */}
      {(activeCategory === 'all' || activeCategory === 'creative') && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            
            {/* Category Banner */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-[1px] bg-[#061814] border-l-4 border-l-[#84CC16]">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#84CC16]" />
                  <span className="text-xs font-bold uppercase tracking-widest text-[#84CC16]">
                    Category 2
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Creative Branding, Digital Print & 3D Signage
                </h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  Prepress graphic identity, high-resolution large-format vinyl printing, custom merchandise, and architectural 3D signage fabrication.
                </p>
              </div>

              <button
                onClick={() => onOpenConsultation('Creative & Signage Category Inquiry')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[50px] bg-emerald-950 hover:bg-emerald-900 border border-emerald-800/80 text-xs font-bold text-white transition-all w-fit cursor-pointer shrink-0"
              >
                <span>Inquire Category</span>
                <ArrowRight className="w-4 h-4 text-[#84CC16]" />
              </button>
            </div>

            {/* Creative Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {creativeServicesData.map((service) => (
                <div 
                  key={service.id}
                  className="group rounded-[1px] bg-[#061814] overflow-hidden flex flex-col justify-between hover:border-emerald-800/60 transition-all duration-300 shadow-xl"
                >
                  <div>
                    {/* Image Header */}
                    <div 
                      onClick={() => onSelectService(service)}
                      className="relative h-48 sm:h-52 overflow-hidden bg-emerald-950 cursor-pointer"
                    >
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-[1px]"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#061814] via-transparent to-transparent pointer-events-none" />
                      
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-[#061814]/90 backdrop-blur-sm border border-emerald-800/60 text-[10px] font-bold text-[#84CC16] uppercase tracking-wider">
                        View Specs
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-6 space-y-4">
                      <div>
                        <h4 
                          onClick={() => onSelectService(service)}
                          className="text-lg font-bold text-white group-hover:text-[#84CC16] transition-colors leading-snug cursor-pointer"
                        >
                          {service.title}
                        </h4>
                        <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                          {service.tagline}
                        </p>
                      </div>

                      {/* Deliverables Snippet */}
                      {service.deliverables && (
                        <div className="space-y-1.5 pt-2 border-t border-emerald-900/40">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                            Key Deliverables:
                          </span>
                          <ul className="space-y-1 text-xs text-slate-300">
                            {service.deliverables.slice(0, 3).map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <Check className="w-3.5 h-3.5 text-[#84CC16] shrink-0 mt-0.5" />
                                <span className="line-clamp-1">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card Footer Actions */}
                  <div className="p-6 pt-0 flex items-center justify-between border-t border-emerald-900/30 mt-4">
                    <button
                      onClick={() => onSelectService(service)}
                      className="text-xs font-semibold text-slate-300 hover:text-white transition-colors cursor-pointer"
                    >
                      Technical Specs →
                    </button>
                    <button
                      onClick={() => onOpenConsultation(service.title)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-[50px] bg-[#84CC16] hover:bg-[#bef264] text-slate-950 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer active:scale-95 shadow-md shadow-lime-500/10"
                    >
                      <span>Inquire</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>
      )}

      {/* 6. Service Delivery Workflow */}
      <section className="py-16 bg-[#061814] border-t border-emerald-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#84CC16]">
              SERVICE LIFECYCLE
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
              How We Deliver Technical & Creative Solutions
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              A disciplined four-phase methodology ensuring fast turnaround, transparent pricing, and verifiable performance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflowSteps.map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <div 
                  key={idx} 
                  className="p-6 rounded-[1px] bg-[#04110e] border border-emerald-900/60 shadow-xl space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-lg bg-emerald-950 flex items-center justify-center text-[#84CC16] border border-emerald-800/60">
                        <StepIcon className="w-5 h-5 stroke-[2.2]" />
                      </div>
                      <span className="text-sm font-mono font-bold text-[#84CC16]">
                        {step.step}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-white font-display">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 7. Services Contact & Inquiry Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[1px] bg-[#061814] border border-emerald-900/60 p-6 sm:p-10 lg:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950 text-[#84CC16] text-xs font-semibold uppercase tracking-wider">
                <span>Get In Touch</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
                Need a Custom Service Assessment?
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Connect directly with our technical desk to discuss equipment malfunctions, mainboard diagnostics, wide-format print volumes, or architectural signage mounting.
              </p>

              <div className="space-y-3 pt-2">
                <a 
                  href="tel:0207004123"
                  className="flex items-center gap-3 p-3 rounded-[1px] bg-[#04110e] border border-emerald-900/50 text-xs text-slate-200 hover:text-[#84CC16] transition-colors"
                >
                  <PhoneCall className="w-4 h-4 text-[#84CC16]" />
                  <span>Call Us: 0207004123</span>
                </a>
                <a 
                  href="mailto:nanadjan5050@gmail.com"
                  className="flex items-center gap-3 p-3 rounded-[1px] bg-[#04110e] border border-emerald-900/50 text-xs text-slate-200 hover:text-[#84CC16] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#84CC16]" />
                  <span>Email: nanadjan5050@gmail.com</span>
                </a>
              </div>
            </div>

            {/* Right Column: Direct Form */}
            <div className="lg:col-span-7 bg-[#04110e] p-6 sm:p-8 rounded-[1px] border border-emerald-900/60 shadow-xl">
              {formSubmitted ? (
                <div className="text-center py-8 space-y-4 animate-in fade-in duration-300">
                  <div className="w-14 h-14 rounded-full bg-[#84CC16] text-slate-950 mx-auto flex items-center justify-center font-bold">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Inquiry Received</h3>
                  <p className="text-xs text-slate-300 max-w-sm mx-auto">
                    Thank you, {formData.name}. Our technical team will review your request for <span className="text-[#84CC16]">{selectedServiceInForm}</span> promptly.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', message: '' });
                    }}
                    className="px-5 py-2 rounded-[50px] bg-emerald-950 border border-emerald-800 text-xs text-white hover:bg-emerald-900 transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmitInquiry} className="space-y-4">
                  <h3 className="text-lg font-bold text-white font-display mb-2">
                    Request Service Specifications & Pricing
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Full Name *
                      </label>
                      <input 
                        type="text"
                        required
                        placeholder="e.g. Samuel Asante"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#061814] border border-emerald-900 rounded-[1px] px-3.5 py-2.5 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-[#84CC16]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Email Address *
                      </label>
                      <input 
                        type="email"
                        required
                        placeholder="e.g. samuel@printshop.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#061814] border border-emerald-900 rounded-[1px] px-3.5 py-2.5 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-[#84CC16]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Phone / WhatsApp
                      </label>
                      <input 
                        type="tel"
                        placeholder="e.g. 0207004123"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#061814] border border-emerald-900 rounded-[1px] px-3.5 py-2.5 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-[#84CC16]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Target Service
                      </label>
                      <select
                        value={selectedServiceInForm}
                        onChange={(e) => setSelectedServiceInForm(e.target.value)}
                        className="w-full bg-[#061814] border border-emerald-900 rounded-[1px] px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#84CC16] cursor-pointer"
                      >
                        {servicesData.map((s) => (
                          <option key={s.id} value={s.title} className="bg-[#051512] text-white">
                            {s.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Project or Equipment Details
                    </label>
                    <textarea 
                      rows={3}
                      placeholder="Specify printer model, fault symptoms, signage dimensions, or order volume..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#061814] border border-emerald-900 rounded-[1px] px-3.5 py-2.5 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-[#84CC16] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-[50px] bg-[#84CC16] hover:bg-[#bef264] text-slate-950 text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-lg shadow-lime-500/10 cursor-pointer"
                  >
                    Send Service Inquiry
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
