
import React from 'react';
import { Link } from 'react-router-dom';

const Impacto: React.FC = () => {
  return (
    <main className="min-h-screen bg-background-dark overflow-hidden">
      {/* Hero Section - Manifesto */}
      <section className="relative min-h-[80vh] md:h-[90vh] flex items-center justify-center pt-28 pb-12 md:pt-20 md:pb-0">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background-dark via-transparent to-background-dark z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2000" 
            alt="Nature Background" 
            className="w-full h-full object-cover opacity-40 scale-105"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-20 text-center">
          <span className="text-primary font-black tracking-[0.3em] md:tracking-[0.5em] uppercase text-[10px] md:text-xs mb-4 md:mb-6 block animate-fade-in">Misión 2030</span>
          <h1 className="text-primary text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black italic uppercase tracking-tighter leading-[0.9] md:leading-[0.8] mb-6 md:mb-8">
            El Planeta nos <br className="hidden sm:block" /> Alimenta.
          </h1>
          <p className="text-gray-400 text-lg md:text-2xl font-light max-w-3xl mx-auto italic leading-relaxed px-4 md:px-0">
            No somos solo una marca de proteína. Somos un acto de rebeldía tecnológica contra un sistema alimentario obsoleto.
          </p>
          <div className="mt-8 md:mt-12 flex justify-center gap-4">
            <div className="w-px h-16 md:h-24 bg-gradient-to-b from-primary to-transparent"></div>
          </div>
        </div>
      </section>

      {/* The Resource Gap - Data Visualization Section */}
      <section className="py-20 md:py-32 bg-matte-black border-y border-primary/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-10 md:space-y-12 order-2 lg:order-1">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter text-white">Eficiencia <span className="text-primary">Radical</span></h2>
                <div className="w-20 h-1 bg-primary"></div>
                <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed max-w-lg italic">
                  Comparemos el costo real de producir 1kg de proteína. La industria tradicional está agotando el futuro. Nosotros lo estamos construyendo.
                </p>
              </div>

              {/* Data Bars */}
              <div className="space-y-6 md:space-y-8">
                {/* Water Usage */}
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row justify-between text-[10px] font-black uppercase tracking-widest text-zinc-500 gap-1">
                    <span>Consumo de Agua (Litros/kg)</span>
                    <span className="text-primary sm:text-white">Diferencia: 14,999L</span>
                  </div>
                  <div className="relative h-12 md:h-10 bg-white/5 rounded-full border border-white/5 overflow-hidden">
                    <div className="absolute inset-y-0 left-0 bg-red-900/40 w-full"></div>
                    <div className="absolute inset-y-0 left-0 gold-gradient w-[1%] shadow-[0_0_20px_rgba(198,166,93,0.5)]"></div>
                    <div className="relative h-full flex items-center justify-between px-4 md:px-6 text-[10px] md:text-[11px] font-bold text-white uppercase tracking-tighter">
                      <span className="italic">Beetle: 1L</span>
                      <span className="opacity-40 italic">Res: 15,000L</span>
                    </div>
                  </div>
                </div>

                {/* CO2 Emissions */}
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row justify-between text-[10px] font-black uppercase tracking-widest text-zinc-500 gap-1">
                    <span>Emisiones CO2 (kg/kg)</span>
                    <span className="text-primary sm:text-white">Diferencia: 99% Menos</span>
                  </div>
                  <div className="relative h-12 md:h-10 bg-white/5 rounded-full border border-white/5 overflow-hidden">
                    <div className="absolute inset-y-0 left-0 bg-zinc-700/40 w-full"></div>
                    <div className="absolute inset-y-0 left-0 gold-gradient w-[2%]"></div>
                    <div className="relative h-full flex items-center justify-between px-4 md:px-6 text-[10px] md:text-[11px] font-bold text-white uppercase tracking-tighter">
                      <span className="italic">Beetle: 0.1kg</span>
                      <span className="opacity-40 italic">Res: 100kg</span>
                    </div>
                  </div>
                </div>

                {/* Land Usage */}
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row justify-between text-[10px] font-black uppercase tracking-widest text-zinc-500 gap-1">
                    <span>Uso de Tierra (m²/kg)</span>
                    <span className="text-primary sm:text-white">Granjas Verticales</span>
                  </div>
                  <div className="relative h-12 md:h-10 bg-white/5 rounded-full border border-white/5 overflow-hidden">
                    <div className="absolute inset-y-0 left-0 bg-green-900/20 w-full"></div>
                    <div className="absolute inset-y-0 left-0 gold-gradient w-[5%]"></div>
                    <div className="relative h-full flex items-center justify-between px-4 md:px-6 text-[10px] md:text-[11px] font-bold text-white uppercase tracking-tighter">
                      <span className="italic">Beetle: 15m²</span>
                      <span className="opacity-40 italic">Res: 250m²</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group order-1 lg:order-2">
              <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-2xl group-hover:bg-primary/10 transition-all duration-700"></div>
              <div className="relative aspect-square rounded-3xl overflow-hidden border border-primary/20 bg-zinc-900">
                <img 
                  src="https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&q=80&w=1200" 
                  alt="High Tech Vertical Farm" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10">
                  <p className="text-primary font-black uppercase text-[10px] tracking-[0.2em] mb-2 italic">Infraestructura Propia</p>
                  <h3 className="text-xl md:text-2xl font-bold text-white uppercase tracking-tight italic">Laboratorios de Biomasa</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IMPROVED CIRCULAR ENGINEERING SECTION */}
      <section className="py-24 md:py-40 bg-background-dark relative overflow-hidden">
        {/* Technical Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#c6a65d 1px, transparent 1px), linear-gradient(90deg, #c6a65d 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-24 md:mb-32">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="text-primary font-black uppercase text-[10px] tracking-widest italic">Live Systems Optimization</span>
              </div>
              <h2 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter text-white leading-[0.85] mb-8">
                Ingeniería <br /> <span className="text-primary">Circular.</span>
              </h2>
              <p className="text-gray-500 text-lg md:text-xl font-light italic leading-relaxed max-w-xl">
                Nuestro proceso no tiene fin. Diseñamos sistemas regenerativos donde cada salida es el combustible de la siguiente etapa.
              </p>
            </div>
            
            {/* Cycle Pulse Visualization */}
            <div className="hidden lg:block shrink-0">
               <div className="relative size-48 rounded-full border border-primary/10 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border-t-2 border-primary/40 animate-spin" style={{ animationDuration: '4s' }}></div>
                  <div className="absolute inset-4 rounded-full border-b-2 border-primary/20 animate-spin-slow" style={{ animationDuration: '8s' }}></div>
                  <span className="material-symbols-outlined text-primary text-5xl">settings_input_component</span>
               </div>
            </div>
          </div>

          {/* Interactive Engineering Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 relative">
            {/* Connection Line (Desktop Only) */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent hidden xl:block -translate-y-12"></div>
            
            {[
              { 
                step: 'MOD-01',
                title: 'Bio-Recolección',
                desc: 'Capturamos biomasa orgánica local de grado A, eliminando el desperdicio agrícola del sistema.',
                icon: 'view_in_ar',
                tag: 'Input Stage',
                stats: ['Biomass: 98.4%', 'Humidity: 12%']
              },
              { 
                step: 'MOD-02',
                title: 'Bio-Conversión',
                desc: 'Optimización entomológica en ambientes verticales controlados por IA para eficiencia térmica.',
                icon: 'hub',
                tag: 'Transformation',
                stats: ['Yield: 94.1%', 'CO2: -14%']
              },
              { 
                step: 'MOD-03',
                title: 'Aislamiento',
                desc: 'Extracción molecular en frío que preserva el 100% de la biodisponibilidad proteica.',
                icon: 'filter_alt',
                tag: 'Extraction',
                stats: ['Purity: 99.8%', 'Omega-3: High']
              },
              { 
                step: 'MOD-04',
                title: 'Regeneración',
                desc: 'El Frass resultante se reintegra al suelo como bio-estimulante orgánico de alta potencia.',
                icon: 'restart_alt',
                tag: 'Eco-Return',
                stats: ['Regen: 100%', 'Minerals: Rich']
              }
            ].map((p, i) => (
              <div key={i} className="group relative">
                {/* Background Shadow Effect */}
                <div className="absolute -inset-2 bg-primary/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <div className="relative bg-matte-black/60 backdrop-blur-sm border border-primary/10 p-8 rounded-2xl h-full flex flex-col transition-all duration-500 hover:border-primary/40 hover:-translate-y-2">
                  {/* Technical Header */}
                  <div className="flex justify-between items-center mb-10">
                    <span className="font-mono text-[10px] text-primary/60 tracking-widest">{p.step}</span>
                    <div className="flex gap-1">
                      <div className="size-1 rounded-full bg-primary animate-pulse"></div>
                      <div className="size-1 rounded-full bg-primary/30"></div>
                    </div>
                  </div>

                  {/* Icon & Title */}
                  <div className="mb-8">
                    <div className="size-16 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-black transition-all duration-500">
                      <span className="material-symbols-outlined text-3xl">{p.icon}</span>
                    </div>
                    <h3 className="text-2xl font-black italic text-white uppercase tracking-tighter mb-4 group-hover:text-primary transition-colors">{p.title}</h3>
                    <p className="text-gray-500 font-light text-sm italic leading-relaxed group-hover:text-gray-300 transition-colors">
                      {p.desc}
                    </p>
                  </div>

                  {/* Telemeter Stats Block */}
                  <div className="mt-auto pt-8 border-t border-primary/5 flex flex-col gap-3">
                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-zinc-600 mb-1">{p.tag}</span>
                    {p.stats.map((stat, idx) => (
                      <div key={idx} className="flex justify-between items-center bg-white/5 rounded px-3 py-1.5">
                        <span className="text-[10px] font-mono text-gray-400">{stat.split(':')[0]}</span>
                        <span className="text-[10px] font-mono text-primary font-bold">{stat.split(':')[1]}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technical Corner Accent */}
                  <div className="absolute bottom-0 right-0 size-8 opacity-20 group-hover:opacity-100 transition-opacity">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-primary">
                      <path d="M32 0V32H0" stroke="currentColor" strokeWidth="1"/>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Efficiency Summary Banner */}
          <div className="mt-16 md:mt-24 bg-primary/5 border border-primary/20 rounded-3xl p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-12 overflow-hidden relative group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors"></div>
            
            <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left relative z-10">
              <div className="size-24 rounded-full bg-matte-black border border-primary/30 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-primary text-4xl">eco</span>
              </div>
              <div className="space-y-2">
                <h4 className="text-2xl font-black italic uppercase text-white">Impacto Neto Positivo</h4>
                <p className="text-gray-400 font-light italic max-w-lg leading-relaxed">
                  Nuestros laboratorios operan bajo el protocolo <span className="text-primary">Beetle-Regen</span>, devolviendo más nutrientes a la tierra de los que extraemos.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-16 relative z-10">
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-black text-primary italic leading-none mb-2">98.2%</p>
                <p className="text-[9px] uppercase tracking-widest text-zinc-500 font-black">Ciclo Cerrado</p>
              </div>
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-black text-primary italic leading-none mb-2">0.0</p>
                <p className="text-[9px] uppercase tracking-widest text-zinc-500 font-black">Water Waste</p>
              </div>
              <div className="text-center hidden sm:block">
                <p className="text-4xl md:text-5xl font-black text-primary italic leading-none mb-2">GOLD</p>
                <p className="text-[9px] uppercase tracking-widest text-zinc-500 font-black">Bio-Audit</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Traceability Protocol Section */}
      <section className="py-20 md:py-32 bg-matte-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-video lg:aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-3xl group">
                <img 
                  src="https://images.unsplash.com/photo-1610632380989-680fe40816c6?auto=format&fit=crop&q=80&w=1200" 
                  alt="Packaging and Logistics" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
                <div className="absolute bottom-10 left-10 p-6 bg-matte-black/80 backdrop-blur-md border border-primary/20 rounded-2xl hidden md:block max-w-[280px]">
                   <p className="text-primary font-black uppercase text-[10px] tracking-widest mb-2 italic">Certificado 2024</p>
                   <p className="text-white text-sm font-light italic">Trazabilidad completa mediante tecnología Blockchain para cada lote producido.</p>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 space-y-6 md:space-y-10">
              <div className="space-y-4">
                <span className="text-primary font-black tracking-[0.4em] uppercase text-[10px] md:text-xs italic">El Protocolo Beetle</span>
                <h2 className="text-4xl md:text-7xl font-black italic uppercase tracking-tighter text-white leading-[0.85]">Transparencia <br /> <span className="text-primary">de Élite.</span></h2>
              </div>
              <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed italic">
                No ocultamos nada. Nuestra cadena de suministro es un libro abierto. Desde la primera larva hasta el empaque compostable, el control es absoluto.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: 'package_2', text: 'Bio-empaque derivado de hongos.' },
                  { icon: 'electric_bolt', text: 'Logística 100% eléctrica.' },
                  { icon: 'public', text: 'Impacto Social Certificado.' },
                  { icon: 'groups', text: 'Comunidades locales activas.' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group cursor-default p-4 rounded-xl border border-white/5 hover:border-primary/20 transition-colors bg-white/[0.02]">
                    <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">{item.icon}</span>
                    <span className="text-white text-sm font-medium italic group-hover:text-primary transition-colors">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <Link to="/sabores" className="w-full sm:w-auto gold-gradient text-black px-12 py-5 rounded-lg text-sm font-black uppercase tracking-widest hover:brightness-110 hover:shadow-[0_0_30px_rgba(198,166,93,0.3)] active:scale-95 transition-all flex items-center justify-center gap-3">
                  Unirse a la Revolución
                  <span className="material-symbols-outlined">trending_flat</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 md:py-40 bg-background-dark text-center relative">
        <div className="absolute inset-0 opacity-5 flex items-center justify-center overflow-hidden pointer-events-none">
          <span className="text-[40vw] font-black italic select-none">REGEN</span>
        </div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <span className="material-symbols-outlined text-primary text-4xl md:text-7xl opacity-30 mb-8 md:mb-12">engineering</span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black italic uppercase tracking-tighter text-white leading-tight mb-8 md:mb-12">
            "No estamos tratando de salvar el mundo con una barra de proteína. Estamos demostrando que <span className="text-primary">el mundo se salva</span> cuando la tecnología y la naturaleza trabajan juntas."
          </h2>
          <div className="flex flex-col items-center gap-2">
            <p className="text-primary font-black uppercase tracking-widest text-xs md:text-sm">Beetle Research Division</p>
            <p className="text-gray-500 text-[9px] md:text-[10px] uppercase tracking-[0.3em]">Elite Performance & Ecology Labs</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Impacto;
