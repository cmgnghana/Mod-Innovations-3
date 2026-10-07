import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'large-format-printers',
    title: 'Large-Format Printer Sales, Repair and Maintenance',
    tagline: 'High-precision wide-format equipment deployment, scheduled servicing, and on-site mechanical troubleshooting.',
    description: 'Comprehensive technical support and commercial hardware supply for eco-solvent, solvent, and aqueous wide-format printers. We diagnose carriage motion faults, resolve ink delivery starvation, perform optical encoder calibration, and conduct 500-hour preventive maintenance cycles to keep production running at peak speed.',
    image: 'https://i.ibb.co/CcQtKS1/001-Large-Format-and-DTF-Printer-Repairs-and-Spare-Parts-Sales.jpg',
    category: 'Hardware & Repairs',
    suitableFor: 'Commercial print shops, outdoor advertising agencies, sign contractors, and high-volume graphics production studios.',
    problemSolved: 'Eliminates horizontal banding, nozzle deflection, printhead carriage crashes, media feed skew, and sudden mechanical downtime during critical print runs.',
    technicalHighlights: [
      'Printhead voltage tuning & bi-directional alignment',
      'Carriage linear guide lubrication & optical encoder strip calibration',
      'Negative pressure ink line bleeding & sub-tank flushing',
      'Motorized take-up roller & pinch wheel tension synchronization'
    ],
    deliverables: [
      'Commercial wide-format hardware deployment & RIP software setup',
      'Scheduled preventive maintenance & mechanical inspection',
      'Printhead recovery, ultrasonic flushing & alignment',
      'Emergency on-site troubleshooting & motor driver calibration'
    ],
    serviceCtaText: 'Request Large-Format Service & Triage'
  },
  {
    id: 'mainboard-repairs',
    title: 'Printer Mainboard and Control Board Repairs',
    tagline: 'Specialized micro-soldering, IC chip replacement, and circuit diagnostics for printer electronics.',
    description: 'Engineering-level diagnosis and micro-component restoration for damaged printer mainboards, power supply units, servo motor control boards, and carriage head boards. We trace voltage drops, replace blown MOSFETs and surface-mount fuses, and repair burned traces—saving clients up to 70% compared to purchasing new OEM replacement boards.',
    image: 'https://i.ibb.co/fdmBXvb2/001-Printer-Mainboard-and-Control-Board-Repairs.jpg',
    category: 'Hardware & Repairs',
    featured: true,
    suitableFor: 'Print shop operators, service technicians, and print equipment owners encountering unresponsive mainboards or electrical failure codes.',
    problemSolved: 'Fixes board-level short circuits, head-firing signal failure, optical sensor communications faults, and firmware boot freezes without requiring expensive full-board replacement.',
    technicalHighlights: [
      'Multichannel oscilloscope signal tracing & DC rail testing',
      'Surface-mount IC replacement, micro-soldering & reflow',
      'Head driver transistor & protective fuse bank rebuilding',
      'Post-repair 48-hour bench testing under production electrical load'
    ],
    deliverables: [
      'Component-level motherboard diagnostic & power tracing',
      'Driver IC, transistor & MOSFET micro-soldering replacement',
      'Power supply module voltage regulation repair',
      'Post-repair bench verification & sensor loop testing'
    ],
    serviceCtaText: 'Book Board-Level Micro-Repair Evaluation'
  },
  {
    id: 'dtf-printers',
    title: 'DTF Printer Sales and Repairs',
    tagline: 'Direct-to-Film printing systems supply, automated powder shaker tuning, and white ink maintenance.',
    description: 'Complete sales, commissioning, and specialized repair services for Direct-to-Film (DTF) apparel printing systems. We service recirculating white ink systems, calibrate automated hot-melt powder applicators, calibrate curing oven temperature profiles, and adjust vacuum film feeding platforms for smooth transfer film output.',
    image: 'https://i.ibb.co/kg1RWK14/005-Printer-Mainboard-and-Control-Board-Repairs.jpg',
    category: 'Hardware & Repairs',
    suitableFor: 'Garment decorators, customized sportswear brands, promotional merchandise studios, and textile screen printers modernizing to digital transfers.',
    problemSolved: 'Solves white ink precipitation causing clogged printheads, uneven powder melting, film slipping during high-speed printing, and poor wash-fastness due to incorrect curing temps.',
    technicalHighlights: [
      'Timed peristaltic white ink circulation & damper purging',
      'Automated powder shaker vibration speed & heat tunnel profiling',
      'Film feed tension adjustment & static electricity discharge',
      'Rip software color profiling & white underbase density tuning'
    ],
    deliverables: [
      'Turnkey DTF system delivery, installation & operator training',
      'White ink agitation loop & damper manifold replacement',
      'Powder applicator & infrared curing tunnel servicing',
      'Film transport roller realignment & vacuum bed balancing'
    ],
    serviceCtaText: 'Inquire About DTF Systems & Servicing'
  },
  {
    id: 'uv-printers',
    title: 'UV Printer Sales and Repairs',
    tagline: 'Flatbed and roll-to-roll UV printing machinery, LED curing diagnostics, and multi-substrate calibration.',
    description: 'Technical sales, routine servicing, and precision repairs for UV flatbed and roll-to-roll printing machinery. We optimize water-chilled UV LED curing lamps, adjust multi-layer white and gloss varnish deposition, balance vacuum bed suction zones, and calibrate automatic media thickness sensors across rigid and flexible substrates.',
    image: 'https://i.ibb.co/7JrBkgVG/001-UV-Printer-Sales-and-Repairs.jpg',
    category: 'Hardware & Repairs',
    suitableFor: 'Industrial product printers, personalized gift makers, acrylic & wooden sign fabricators, and commercial packaging prototyping studios.',
    problemSolved: 'Resolves ink curing failure (tacky surfaces), ink overspray mist on reflective substrates, printhead strikes on bowed materials, and white/varnish channel clogging.',
    technicalHighlights: [
      'UV LED water chiller flow rate & irradiance calibration',
      'Multi-zoned vacuum table level verification (sub-millimeter tolerance)',
      'Simultaneous CMYK + White + Varnish layer synchronization',
      'Optical anti-crash sensor & height detection adjustment'
    ],
    deliverables: [
      'UV flatbed & roll printer supply, installation & setup',
      'LED curing lamp output calibration & cooling maintenance',
      'Sub-tank negative pressure calibration & ink degassing',
      'Rigid substrate media table alignment & height sensor testing'
    ],
    serviceCtaText: 'Inquire About UV Printer Solutions'
  },
  {
    id: 'fabric-textile-printers',
    title: 'Fabric/Textile Printer Sales and Repairs',
    tagline: 'Dye-sublimation and direct-to-textile equipment sales, sticky belt maintenance, and tension calibration.',
    description: 'Specialized maintenance, hardware sales, and technical troubleshooting for direct-to-textile and roll-to-roll dye-sublimation printers. We calibrate high-torque fabric tensioning rollers, service continuous sticky belt cleaning units, adjust dye-sublimation heat transfer parameters, and build custom color ICC profiles for natural and synthetic fibers.',
    image: 'https://i.ibb.co/MkjwjDjH/003-Fabric-and-Textile-Printer-Sales-and-Repairs.jpg',
    category: 'Hardware & Repairs',
    suitableFor: 'Fashion apparel producers, flag and banner manufacturers, activewear fabricators, and custom interior textile decorators.',
    problemSolved: 'Prevents fabric wrinkles, ghosting, color shifting between continuous yardage runs, nozzle dropout under heavy ink saturation, and belt tracking skew.',
    technicalHighlights: [
      'Continuous belt adhesive recoating & automatic washer tuning',
      'High-capacity ink degassing & pressurized supply balancing',
      'Fabric tension sensor calibration & take-up synchronization',
      'Custom ICC color profiling for poly-blend and treated fabrics'
    ],
    deliverables: [
      'Direct-to-fabric & dye-sublimation hardware acquisition',
      'Sticky belt guidance system servicing & tension tuning',
      'Continuous ink supply system (CISS) deep cleaning & priming',
      'Textile color management & RIP workflow optimization'
    ],
    serviceCtaText: 'Request Textile Printing Consultation'
  },
  {
    id: 'printer-accessories',
    title: 'Printer Accessories Sales',
    tagline: 'Authentic replacement components, ink dampers, capping stations, pumps, and maintenance supplies.',
    description: 'Direct supply of certified replacement parts and specialized maintenance consumables for commercial printing equipment. We maintain a reliable inventory of solvent-resistant ink dampers, peristaltic pumps, wiper blades, capping top assemblies, flexible flat cables (FFC), encoder strips, and lint-free cleaning solvents to keep your machinery operating smoothly.',
    image: 'https://i.ibb.co/ZRg3P9Bg/001-Printer-Accessories-Sales.jpg',
    category: 'Hardware & Repairs',
    suitableFor: 'Print shop maintenance engineers, in-house technical operators, and commercial print businesses managing ongoing spare parts replenishment.',
    problemSolved: 'Eliminates air ingestion into printheads, worn wiper blades scratching expensive nozzle plates, corrupted data signals caused by cracked ribbon cables, and poor vacuum seal during capping.',
    technicalHighlights: [
      'Solvent-, UV-, and water-resistant grade component validation',
      'OEM-spec micro-mesh internal filter dampers',
      'High-durability optical encoder strips with precise DPI graticules',
      'Industrial-grade peristaltic tubing with extended flex life'
    ],
    deliverables: [
      'Precision ink dampers, manifolds & filter caps',
      'Industrial peristaltic pumps, ink tubes & connectors',
      'Flexible ribbon data cables & linear optical encoders',
      'Printhead flushing agents, lint-free swabs & maintenance kits'
    ],
    serviceCtaText: 'Inquire About Parts & Consumables'
  },
  {
    id: 'graphic-design-branding',
    title: 'Graphic Design and Branding',
    tagline: 'Strategic visual identity, precision prepress artwork preparation, and vector brand assets.',
    description: 'Professional visual identity development and print-ready prepress artwork engineering. We craft distinctive logo systems, corporate identity guidelines, and high-resolution vector artwork with meticulous attention to spot colors, bleed allowances, resolution thresholds, and CMYK color gamut management for flawless commercial production.',
    image: 'https://i.ibb.co/pjjL65ZH/002-Digital-and-Large-Format-Printing-T-Shirt-Mug-and-Cap.jpg',
    category: 'Design & Signage',
    suitableFor: 'Corporate brands, retail businesses, marketing teams, event producers, and growing enterprises requiring professional visual identity and production-ready artwork.',
    problemSolved: 'Prevents pixelated print output, unexpected color shifts between screen and print, missing bleed lines that ruin trimmed materials, and unvectorized artwork stalling fabrication.',
    technicalHighlights: [
      'Prepress color space conversion & Pantone spot-color matching',
      'Vector asset engineering (infinitely scalable CAD/SVG/EPS formats)',
      'Bleed, crop, and crease margin layout validation',
      'Comprehensive brand guideline books & digital master asset suites'
    ],
    deliverables: [
      'Corporate logo suites, typography & brand guideline manuals',
      'Prepress-certified vector layouts for large-format & signage',
      'Promotional merchandise, apparel & packaging mockups',
      'High-impact marketing collateral & digital asset packages'
    ],
    serviceCtaText: 'Start Brand & Prepress Project'
  },
  {
    id: 'digital-large-format-printing',
    title: 'Digital and Large-Format Printing',
    tagline: 'High-density commercial printing for vinyl banners, vehicle wraps, custom apparel, and promotional merchandise.',
    description: 'High-definition digital and wide-format printing across flexible and rigid substrates. From heavy-duty outdoor billboard vinyl, perforated window film, and backlit lightboxes to sublimated corporate drinkware, custom apparel, and point-of-sale displays, we deliver sharp text, vibrant color gamut, and weather-durable finishes.',
    image: 'https://i.ibb.co/84NzXW71/001-Digital-and-Large-Format-Printing-T-Shirt-Mug-and-Cap.jpg',
    category: 'Printing & Production',
    suitableFor: 'Retail store networks, corporate event planners, trade show exhibitors, advertising agencies, and merchandise brands.',
    problemSolved: 'Solves premature outdoor fading, visible banding on expansive gradient backgrounds, edge fraying on banners, and peeling decals on textured surfaces.',
    technicalHighlights: [
      'UV-resistant & waterproof pigment/solvent ink chemistry',
      'High-resolution multi-pass printing up to 1440 DPI',
      'Reinforced double-stitched hems, nickel eyelets & welding',
      'Specialty cast vinyl with air-release channels for bubble-free mounting'
    ],
    deliverables: [
      'Heavy-duty frontlit & backlit vinyl banners with reinforced hems',
      'Custom apparel (screen printed, DTF transferred, sublimated)',
      'Sublimation drinkware, ceramics, metal plates & corporate gifts',
      'Adhesive vinyl decals, floor graphics & vehicle branding wraps'
    ],
    serviceCtaText: 'Get a Custom Print Quote'
  },
  {
    id: '3d-signage-fabrication',
    title: '3D Signage Fabrication and Installation',
    tagline: 'Custom architectural dimensional letters, illuminated LED channel signs, and secure on-site installation.',
    description: 'End-to-end architectural signage engineering, precision CNC manufacturing, and professional structural installation. We craft custom acrylic 3D channel letters, brushed stainless steel dimensional logos, halo-lit LED signage, and exterior weather-sealed monument signs with certified electrical components and structural anchoring.',
    image: 'https://i.ibb.co/gb4zkXVJ/001-3-D-Signage-Installation-and-Fabrication.jpg',
    category: 'Design & Signage',
    suitableFor: 'Corporate headquarters, retail flagships, commercial buildings, healthcare institutions, and hospitality venues.',
    problemSolved: 'Eliminates LED hot-spots, rusted exterior fasteners, wind-load structural failures, water ingress short-circuiting transformers, and peeling fascia materials.',
    technicalHighlights: [
      'CNC laser & router cutting of acrylic, aluminum & stainless steel',
      'IP67 waterproof high-efficiency LED modules & power transformers',
      'Structural backing brackets & tamper-resistant masonry fasteners',
      'Uniform acrylic light-diffusion faces with zero diode shadow lines'
    ],
    deliverables: [
      'Custom 3D acrylic channel letters & dimensional metal logos',
      'Front-lit, back-lit (halo), & dual-illuminated LED sign boxes',
      'Architectural interior reception & exterior pylon signage',
      'Professional on-site structural anchoring & electrical connection'
    ],
    serviceCtaText: 'Request 3D Signage Site Survey & Quote'
  }
];

export const hardwareServicesData = servicesData.filter(s => s.category === 'Hardware & Repairs');
export const creativeServicesData = servicesData.filter(s => s.category !== 'Hardware & Repairs');
