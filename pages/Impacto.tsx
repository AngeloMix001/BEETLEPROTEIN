
import React from 'react';

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

      {/* RE-IMAGINED CIRCULAR ENGINEERING SECTION */}
      <section className="py-24 md:py-40 bg-background-dark relative overflow-hidden">
        {/* Decorative Grid Background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(198,166,93,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(198,166,93,0.3) 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-32">
            <div className="max-w-2xl">
              <span className="text-primary font-black tracking-[0.4em] uppercase text-[10px] md:text-xs mb-4 block italic">Protocolo de Regeneración</span>
              <h2 className="text-4xl md:text-7xl font-black italic uppercase tracking-tighter text-white leading-none">Ingeniería <span className="text-primary">Circular</span>.</h2>
            </div>
            <div className="flex items-center gap-4 md:gap-6">
              <div className="size-14 md:size-20 rounded-full border border-primary/20 flex items-center justify-center animate-pulse shrink-0">
                <span className="material-symbols-outlined text-primary text-2xl md:text-3xl">sync_alt</span>
              </div>
              <p className="text-gray-500 text-xs md:text-sm font-light italic max-w-[200px] leading-snug">
                Un sistema donde el residuo no existe, solo los recursos en tránsito.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-px bg-transparent md:bg-primary/10 border-0 md:border md:border-primary/10 overflow-hidden md:rounded-3xl">
            {[
              { 
                step: '01',
                title: 'Bio-Recolección',
                desc: 'Capturamos subproductos orgánicos de la agricultura local, transformando lo que otros desechan en nuestro combustible primario.',
                icon: 'auto_awesome_motion',
                tag: 'Input'
              },
              { 
                step: '02',
                title: 'Bio-Conversión',
                desc: 'Nuestros laboratorios de crianza vertical optimizan la biomasa con un consumo hídrico prácticamente inexistente.',
                icon: 'model_training',
                tag: 'Process'
              },
              { 
                step: '03',
                title: 'Extracción Elite',
                desc: 'Mediante procesos de mezcla en frío, aislamos la proteína y los omegas manteniendo su integridad molecular intacta.',
                icon: 'science',
                tag: 'Output'
              },
              { 
                step: '04',
                title: 'Cierre de Ciclo',
                desc: 'El residuo mineral (Frass) se procesa como fertilizante premium, regenerando los suelos para futuras cosechas.',
                icon: 'eco',
                tag: 'Regen'
              }
            ].map((p, i) => (
              <div key={i} className="bg-matte-black p-8 md:p-12 group hover:bg-zinc-900/80 transition-all duration-500 flex flex-col h-full rounded-2xl md:rounded-none border border-primary/5 md:border-0">
                <div className="flex justify-between items-start mb-10 md:mb-12">
                  <span className="text-3xl md:text-4xl font-black text-primary/20 group-hover:text-primary/60 transition-colors italic leading-none">{p.step}</span>
                  <span className="text-[8px] md:text-[9px] font-black text-primary bg-primary/10 border border-primary/20 rounded-full px-3 py-1 uppercase tracking-widest">{p.tag}</span>
                </div>
                <div className="mb-6 md:mb-8">
                  <span className="material-symbols-outlined text-primary text-3xl md:text-4xl mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-500">{p.icon}</span>
                  <h3 className="text-xl md:text-2xl font-bold italic text-white uppercase tracking-tight mb-3 md:mb-4 group-hover:text-primary transition-colors">{p.title}</h3>
                  <p className="text-gray-500 font-light leading-relaxed italic text-sm group-hover:text-gray-300 transition-colors">
                    {p.desc}
                  </p>
                </div>
                <div className="mt-auto pt-6 md:pt-8 flex items-center gap-2">
                  <div className="h-px flex-1 bg-primary/20 group-hover:bg-primary/50 transition-colors"></div>
                  <div className="size-2 rounded-full bg-primary/40 group-hover:bg-primary animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 md:mt-32 p-8 md:p-12 rounded-3xl border border-primary/20 bg-gradient-to-r from-primary/5 to-transparent flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
            <div className="space-y-4 text-center md:text-left">
              <h4 className="text-xl md:text-2xl font-black italic uppercase text-white">Impacto Neto Positivo</h4>
              <p className="text-gray-400 font-light max-w-xl italic text-sm md:text-base">
                Nuestra ingeniería no solo busca reducir el daño; busca activamente restaurar los ecosistemas mediante la devolución de nutrientes a la tierra.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 md:gap-12 shrink-0">
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-black text-primary italic">98%</p>
                <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-zinc-500 font-black">Residuo Reutilizado</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-black text-primary italic">0.0</p>
                <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-zinc-500 font-black">Huella Hídrica Neta</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Beetle Protocol - Detailed Traceability */}
      <section className="py-20 md:py-32 bg-matte-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #c6a65d 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-video lg:aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-3xl">
                <img 
                  src="https://images.unsplash.com/photo-1610632380989-680fe40816c6?auto=format&fit=crop&q=80&w=1200" 
                  alt="Packaging and Logistics" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 space-y-6 md:space-y-8">
              <span className="text-primary font-black tracking-[0.4em] uppercase text-[10px] md:text-xs italic">El Protocolo Beetle</span>
              <h2 className="text-3xl md:text-6xl font-black italic uppercase tracking-tighter text-white leading-none">Trazabilidad de <span className="text-primary">Élite</span>.</h2>
              <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed italic">
                Desde la primera larva hasta el empaque final, cada paso es monitoreado por IA para asegurar la máxima pureza proteica y el mínimo impacto ambiental.
              </p>
              
              <ul className="space-y-4 md:space-y-6">
                {[
                  'Bio-empaque 100% compostable derivado de hongos.',
                  'Logística neutra en carbono con vehículos eléctricos.',
                  'Certificación Triple Impacto (Económico, Social y Ambiental).',
                  'Soporte a comunidades locales en la cadena de suministros.'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-white font-medium italic group cursor-default">
                    <span className="size-6 rounded-full border border-primary/30 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300 mt-0.5 shrink-0">
                      <span className="material-symbols-outlined text-xs text-primary group-hover:text-black transition-colors">check</span>
                    </span>
                    <span className="group-hover:text-primary transition-colors text-sm md:text-base leading-snug">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 md:pt-8">
                <button className="w-full sm:w-auto gold-gradient text-black px-12 py-5 rounded-lg text-sm font-black uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-3">
                  Unirse a la Revolución
                  <span className="material-symbols-outlined">trending_flat</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 md:py-40 bg-background-dark text-center">
        <div className="max-w-4xl mx-auto px-6">
          <span className="material-symbols-outlined text-primary text-4xl md:text-6xl opacity-20 mb-8 md:mb-12">format_quote</span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black italic uppercase tracking-tighter text-white leading-tight mb-8 md:mb-12">
            "No estamos tratando de salvar el mundo con una barra de proteína. Estamos demostrando que <span className="text-primary">el mundo se salva</span> cuando la tecnología y la naturaleza trabajan juntas."
          </h2>
          <div className="flex flex-col items-center gap-2">
            <p className="text-primary font-black uppercase tracking-widest text-xs md:text-sm">Equipo de Ingeniería</p>
            <p className="text-gray-500 text-[9px] md:text-[10px] uppercase tracking-[0.2em]">Beetle Protein Elite Labs</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Impacto;
