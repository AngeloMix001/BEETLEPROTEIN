
import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS, REVIEWS, FAQS } from '../constants';

const Home: React.FC = () => {
  const [selectedFlavor, setSelectedFlavor] = useState<string | 'All'>('All');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const flavors = useMemo(() => {
    const unique = Array.from(new Set(PRODUCTS.map(p => p.flavorProfile)));
    return ['All', ...unique];
  }, []);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(product => {
      return selectedFlavor === 'All' || product.flavorProfile === selectedFlavor;
    });
  }, [selectedFlavor]);

  const formatPrice = (price: number) => {
    return price.toLocaleString('es-ES');
  };

  // Cálculos dinámicos para el efecto de la Hero Section
  const heroOpacity = Math.max(0, 1 - scrollY / 700);
  const heroTextTransform = `translateY(${scrollY * 0.35}px)`;
  const heroImageTransform = `translateY(${scrollY * -0.15}px) scale(${1 + scrollY * 0.0003})`;

  // Datos extra para testimonios profesionales
  const professionalReviews = REVIEWS.map((r, i) => ({
    ...r,
    id: `USER-BTL-${(i + 1).toString().padStart(3, '0')}`,
    metrics: [
      { label: 'Recuperación', val: '+24%', color: 'text-primary' },
      { label: 'Energía', val: 'Estable', color: 'text-white' }
    ]
  }));

  return (
    <div className="flex flex-col">
      <style>{`
        @keyframes revealUp {
          from { opacity: 0; transform: translateY(40px) skewY(2deg); }
          to { opacity: 1; transform: translateY(0) skewY(0); }
        }
        @keyframes scanline {
          0% { top: 0%; opacity: 0; }
          50% { opacity: 0.5; }
          100% { top: 100%; opacity: 0; }
        }
        @keyframes pulse-soft {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }
        @keyframes blink-fast {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        .animate-reveal-1 { animation: revealUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-reveal-2 { opacity: 0; animation: revealUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.15s forwards; }
        .animate-reveal-3 { opacity: 0; animation: revealUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards; }
        .scan-line {
          height: 2px;
          width: 100%;
          background: linear-gradient(90deg, transparent, #c6a65d, transparent);
          position: absolute;
          animation: scanline 3s linear infinite;
        }
        .hud-grid {
          background-image: linear-gradient(rgba(198, 166, 93, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(198, 166, 93, 0.1) 1px, transparent 1px);
          background-size: 10px 10px;
        }
      `}</style>

      {/* Hero Section - Nutrición Sin Límites V2 */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 hero-glow"></div>
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#c6a65d 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden"
             style={{ transform: `translateY(${scrollY * 0.1}px)` }}>
          <div className="relative w-[1200px] h-[800px] opacity-20">
             <div className="absolute top-10 left-10 w-32 h-32 border-t-2 border-l-2 border-primary/40 rounded-tl-3xl"></div>
             <div className="absolute bottom-10 right-10 w-32 h-32 border-b-2 border-r-2 border-primary/40 rounded-br-3xl"></div>
             <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent"></div>
             <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-primary/10 to-transparent"></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-6 flex flex-col gap-10 text-center lg:text-left" style={{ opacity: heroOpacity, transform: heroTextTransform }}>
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-md animate-reveal-1">
                <span className="size-2 bg-primary rounded-full animate-pulse"></span>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary italic">Protocolo Elite v4.2</span>
              </div>
              <h1 className="text-white text-6xl md:text-8xl lg:text-9xl font-black leading-[0.85] tracking-tighter italic uppercase">
                <span className="block animate-reveal-1 text-primary">Nutrición</span>
                <span className="block animate-reveal-2 text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-primary/50">Sin Límites.</span>
              </h1>
              <p className="text-gray-400 text-lg md:text-xl font-light max-w-xl mx-auto lg:mx-0 leading-relaxed italic animate-reveal-3 border-l-2 border-primary/20 pl-6">
                Redefinimos la suplementación deportiva con biodisponibilidad molecular y sostenibilidad radical. Ingeniería alimentaria para atletas de élite.
              </p>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 animate-reveal-3">
              <Link to="/sabores" className="gold-gradient text-background-dark px-12 py-6 rounded-lg text-sm font-black tracking-widest uppercase hover:brightness-110 transition-all transform hover:scale-105 text-center shadow-[0_20px_60px_rgba(198,166,93,0.3)] group relative overflow-hidden">
                <span className="relative z-10">Explorar Colección</span>
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
              </Link>
              <Link to="/ciencia" className="group flex items-center gap-4 border border-white/10 text-white px-10 py-6 rounded-lg text-sm font-black tracking-widest uppercase hover:bg-white/5 transition-all">
                Certificación I+D
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform text-primary">science</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 relative hidden lg:block h-[700px]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative z-20 w-4/5 aspect-square bg-center bg-no-repeat bg-contain drop-shadow-[0_45px_45px_rgba(198,166,93,0.25)]" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBWSgjeTHp9_unAbeyd6sER0WS3v9UgTiVmzFVgHfxGgX3tZFm3_1_PwqHpfpUCyEkDag4Y4O9BR2RNgV9fvb_gSzjwkoGo3k32JtMb2yyZxhasScUvW_2nNaX3DKGM6-G0ZaF5jyw11kibwOLifWfYAl3VEWnZFl_8gKhDFfr-7B25Jiv8Ip4t1iX2jhKOMkVpQ-dHpu7qppDuwNcozE_sBY4ASiPfF01UUzzVwQGi75RqMEGw1sAQ6B-90iBzRdI8xwcDF4LXmQ')`, transform: heroImageTransform }}>
                <div className="scan-line"></div>
              </div>

              {/* Data Floating Points */}
              <div className="absolute inset-0 pointer-events-none" style={{ transform: `translateY(${scrollY * -0.05}px)` }}>
                {/* Punto 1: Proteína */}
                <div className="absolute top-20 left-10 flex flex-col items-start gap-2 animate-reveal-1">
                  <div className="h-px w-12 bg-primary/40"></div>
                  <div className="p-3 bg-matte-black/60 backdrop-blur-xl border border-primary/20 rounded-lg">
                    <p className="text-[8px] font-black text-primary tracking-widest uppercase">PROTEÍNA CONCENTRADA</p>
                    <p className="text-sm font-black text-white italic">20g</p>
                  </div>
                </div>

                {/* Punto 2: Bio-Avail */}
                <div className="absolute bottom-40 right-10 flex flex-col items-start gap-2 animate-reveal-2">
                  <div className="h-px w-12 bg-primary/40"></div>
                  <div className="p-3 bg-matte-black/60 backdrop-blur-xl border border-primary/20 rounded-lg">
                    <p className="text-[8px] font-black text-primary tracking-widest uppercase">BIO-AVAIL</p>
                    <p className="text-sm font-black text-white italic">99.8%</p>
                  </div>
                </div>

                {/* PUNTO MEJORADO: TENEBRIO MOLITOR (WIDGET HUD) */}
                <div className="absolute top-1/2 -right-12 -translate-y-1/2 flex flex-col items-start gap-0 animate-reveal-3">
                  {/* Conector HUD */}
                  <div className="flex items-center">
                    <div className="w-16 h-px bg-gradient-to-r from-transparent to-primary/60"></div>
                    <div className="size-2 rounded-full border border-primary/60 flex items-center justify-center">
                      <div className="size-0.5 bg-primary animate-pulse"></div>
                    </div>
                  </div>
                  
                  {/* Main Widget */}
                  <div className="mt-2 w-64 bg-matte-black/80 backdrop-blur-2xl border-l-2 border-primary overflow-hidden rounded-r-xl shadow-[20px_0_50px_rgba(198,166,93,0.1)] group/tm">
                    <div className="p-4 space-y-3">
                      {/* Header Widget */}
                      <div className="flex justify-between items-start">
                        <div className="space-y-0.5">
                          <p className="text-[7px] font-mono text-primary/60 tracking-[0.3em] uppercase">Muestreo Bio-Orgánico</p>
                          <h4 className="text-lg font-black text-white italic tracking-tighter leading-none">TENEBRIO <span className="text-primary">MOLITOR</span></h4>
                        </div>
                        <span className="material-symbols-outlined text-primary text-xl animate-spin-slow" style={{ animationDuration: '6s' }}>biotech</span>
                      </div>

                      {/* Info Area con HUD Grid */}
                      <div className="relative h-16 rounded-lg hud-grid border border-primary/10 flex items-center justify-center overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                        <div className="scan-line !opacity-20"></div>
                        
                        <div className="relative z-10 flex gap-4 text-center">
                          <div className="space-y-1">
                            <p className="text-[8px] font-black text-zinc-500 uppercase">Estado</p>
                            <p className="text-[10px] font-black text-green-500 uppercase flex items-center gap-1">
                              <span className="size-1 bg-green-500 rounded-full animate-blink-fast"></span>
                              OPTIMIZADO
                            </p>
                          </div>
                          <div className="w-px h-6 bg-primary/20 self-center"></div>
                          <div className="space-y-1">
                            <p className="text-[8px] font-black text-zinc-500 uppercase">Pureza</p>
                            <p className="text-[10px] font-black text-white italic tracking-tighter">LVL: MAX</p>
                          </div>
                        </div>
                      </div>

                      {/* Metadata Footer */}
                      <div className="flex justify-between items-center pt-1">
                        <p className="text-[8px] font-mono text-zinc-600">SEQ_ID: TM-BTL-088</p>
                        <div className="flex gap-0.5">
                          {[1,2,3,4].map(b => <div key={b} className="w-2 h-0.5 bg-primary/30"></div>)}
                        </div>
                      </div>
                    </div>
                    
                    {/* Barra de Progreso HUD */}
                    <div className="h-1 w-full bg-white/5 relative overflow-hidden">
                      <div className="absolute inset-y-0 left-0 bg-primary/60 w-3/4 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] border border-primary/5 rounded-full animate-pulse-soft"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[450px] border border-primary/10 rounded-full animate-pulse-soft" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 transition-opacity duration-300" style={{ opacity: Math.max(0, 1 - scrollY / 150) }}>
            <div className="flex flex-col items-center gap-1">
              <span className="text-[9px] font-black uppercase tracking-[0.5em] text-primary italic">Analizar Sabores</span>
              <div className="w-px h-16 bg-gradient-to-b from-primary via-primary/20 to-transparent relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-scan-vertical" style={{ animation: 'scanline 2s linear infinite' }}></div>
              </div>
            </div>
        </div>
      </section>

      {/* Variedades Section */}
      <section id="sabores" className="py-32 bg-[#0a0a0a] relative z-20 border-t border-primary/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
            <div className="text-center md:text-left space-y-4">
              <span className="text-primary font-black uppercase tracking-widest text-xs italic">Menú Técnico</span>
              <h2 className="text-5xl md:text-7xl font-black tracking-tight uppercase italic leading-none">Variedades <br /> <span className="text-primary">Disponibles.</span></h2>
            </div>
            <div className="flex flex-wrap justify-center gap-4 items-center">
              <div className="flex items-center gap-2 p-1 bg-matte-black border border-primary/10 rounded-full">
                {flavors.map(flavor => (
                  <button key={flavor} onClick={() => setSelectedFlavor(flavor)} className={`px-6 py-2 rounded-full text-[10px] font-black tracking-widest uppercase transition-all ${selectedFlavor === flavor ? 'gold-gradient text-black' : 'text-gray-500 hover:text-white'}`}>
                    {flavor === 'All' ? 'Todos' : flavor}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            {filteredProducts.map(product => (
              <Link to={`/product/${product.id}`} key={product.id} className="relative group overflow-hidden rounded-2xl bg-matte-black border border-primary/10 p-10 flex flex-col md:flex-row gap-10 hover:border-primary transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br opacity-20 group-hover:opacity-40 transition-opacity pointer-events-none" style={{ background: `linear-gradient(135deg, ${product.accentColor} 0%, transparent 100%)` }}></div>
                <div className="w-full md:w-56 aspect-square rounded-xl bg-[#111] bg-center bg-no-repeat bg-contain border border-primary/10 relative z-10 shrink-0 p-6 group-hover:scale-105 transition-transform duration-700 shadow-2xl" style={{ backgroundImage: `url('${product.image}')` }}></div>
                <div className="flex-1 flex flex-col justify-center relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-3xl font-black text-white italic uppercase tracking-tighter leading-none">{product.name}</h3>
                    <span className="text-primary font-black text-xl italic tracking-tighter">${formatPrice(product.price)}</span>
                  </div>
                  <p className="text-gray-500 font-light leading-relaxed mb-8 italic">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-[10px] font-black tracking-[0.2em] uppercase text-primary/70 italic">
                      <span className="size-2 rounded-full bg-primary animate-pulse"></span>
                      {product.flavorProfile}
                    </div>
                    <span className="material-symbols-outlined text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all">arrow_forward_ios</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN PROFESIONAL: Feedback Validado */}
      <section className="py-48 bg-background-dark relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'linear-gradient(90deg, #c6a65d 1px, transparent 1px), linear-gradient(#c6a65d 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-12 mb-32 text-center lg:text-left">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-4 px-5 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-md">
                <span className="material-symbols-outlined text-primary text-sm">verified_user</span>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary italic">Registro de Desempeño Validado</span>
              </div>
              <h2 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter text-white leading-[0.85]">Feedback <br /> <span className="text-primary">Alpha.</span></h2>
            </div>
            <div className="max-w-md">
              <p className="text-gray-500 text-lg font-light italic leading-relaxed">
                Nuestros usuarios no solo consumen proteína; validan un sistema de alto rendimiento. Cada testimonio es un punto de dato en la evolución nutricional.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {professionalReviews.map((review, i) => (
              <div key={i} className="group relative">
                {/* Glow sutil en hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-md"></div>
                
                <div className="relative h-full p-10 rounded-2xl bg-matte-black border border-primary/10 flex flex-col gap-10 hover:border-primary/40 transition-all duration-700">
                  {/* Header de la Ficha Testimonial */}
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <p className="font-mono text-[9px] text-primary/60 tracking-[0.2em]">{review.id}</p>
                      <div className="flex items-center gap-2">
                        <span className="size-2 rounded-full bg-primary animate-pulse"></span>
                        <span className="text-[10px] font-black text-white uppercase tracking-widest italic">Perfil Verificado</span>
                      </div>
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, j) => (
                        <span key={j} className="material-symbols-outlined text-primary text-sm fill-current" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      ))}
                    </div>
                  </div>

                  {/* Cuerpo del Testimonio */}
                  <div className="relative">
                    <span className="absolute -top-6 -left-4 text-primary/10 text-8xl font-black pointer-events-none select-none italic">"</span>
                    <p className="text-gray-300 italic leading-relaxed text-xl font-light relative z-10">
                      {review.text}
                    </p>
                  </div>

                  {/* Telemétrica de Impacto (Professional Stats) */}
                  <div className="mt-auto pt-10 border-t border-white/5 grid grid-cols-2 gap-4">
                    {review.metrics.map((m, idx) => (
                      <div key={idx} className="flex flex-col gap-1">
                        <span className="text-[9px] font-black uppercase tracking-widest text-gray-600">{m.label}</span>
                        <span className={`text-sm font-black italic ${m.color}`}>{m.val}</span>
                      </div>
                    ))}
                  </div>

                  {/* Footer con Identidad Profesional */}
                  <div className="flex items-center gap-5">
                    <div className="size-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-black transition-all duration-500">
                      <span className="material-symbols-outlined text-2xl">{review.icon}</span>
                    </div>
                    <div>
                      <h4 className="text-white font-black uppercase tracking-widest text-sm italic leading-tight">{review.name}</h4>
                      <p className="text-primary/60 text-[10px] font-black uppercase tracking-[0.2em] mt-1">{review.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Section */}
      <section className="py-40 bg-[#0a0a0a] border-y border-primary/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-24 space-y-4">
            <span className="text-primary font-black uppercase tracking-widest text-xs italic">Procesos de Extracción</span>
            <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter text-white">Ingeniería <br /> <span className="text-primary">Bio-Técnica.</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {[
              { 
                icon: 'precision_manufacturing', 
                title: 'Crianza AI', 
                desc: 'Granjas verticales de alta tecnología con monitoreo biométrico.', 
                img: 'https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&q=80&w=600' 
              },
              { 
                icon: 'science', 
                title: 'Aislamiento', 
                desc: 'Aislamiento de proteína molecular con pureza superior al 99%.', 
                img: 'https://images.unsplash.com/photo-1532187875605-2fe358511463?auto=format&fit=crop&q=80&w=600' 
              },
              { 
                icon: 'ac_unit', 
                title: 'Crio-Mezcla', 
                desc: 'Preservación de cadenas de aminoácidos mediante mezcla en frío.', 
                img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=600' 
              },
              { 
                icon: 'inventory_2', 
                title: 'Bio-Logistics', 
                desc: 'Sistema de empaque 100% compostable con tecnología de hongos.', 
                img: 'https://images.unsplash.com/photo-1610632380989-680fe40816c6?auto=format&fit=crop&q=80&w=600' 
              }
            ].map((step, i) => (
              <Link to="/impacto" key={i} className="group relative h-[500px] overflow-hidden rounded-2xl border border-primary/10 flex flex-col justify-end">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10"></div>
                <img src={step.img} alt={step.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-125 grayscale group-hover:grayscale-0" />
                <div className="relative z-20 p-10 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-700">
                  <div className="size-14 rounded-xl bg-primary text-black flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(198,166,93,0.4)]">
                    <span className="material-symbols-outlined font-black">{step.icon}</span>
                  </div>
                  <h3 className="text-2xl font-black text-white mb-3 uppercase tracking-wider italic">{step.title}</h3>
                  <p className="text-gray-400 text-xs font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 italic">
                    {step.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-48 bg-black relative">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="mb-16 space-y-6">
            <h2 className="text-primary text-7xl md:text-9xl font-black italic uppercase tracking-tighter mb-4">ÚNETE AL BICHO</h2>
            <p className="text-gray-400 text-lg md:text-2xl font-light tracking-[0.2em] uppercase italic">
              Forma parte de la élite nutricional. Sin compromisos.
            </p>
          </div>
          <form className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input className="flex-1 bg-matte-black border border-primary/20 rounded-lg px-8 py-6 text-sm text-white focus:outline-none focus:border-primary transition-colors placeholder:text-gray-700 tracking-widest uppercase font-black italic" placeholder="CÓDIGO DE ACCESO (EMAIL)" type="email" />
            <button className="gold-gradient text-background-dark px-14 py-6 rounded-lg text-sm font-black tracking-widest uppercase hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-primary/10">
              Activar Protocolo
            </button>
          </form>
        </div>
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none select-none overflow-hidden">
          <span className="text-[40vw] font-black uppercase italic tracking-tighter">ELITE</span>
        </div>
      </section>
    </div>
  );
};

export default Home;
