
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

  return (
    <div className="flex flex-col">
      <style>{`
        @keyframes revealUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-reveal-1 {
          animation: revealUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        .animate-reveal-2 {
          opacity: 0;
          animation: revealUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) 0.2s forwards;
        }
        .animate-reveal-3 {
          opacity: 0;
          animation: revealUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) 0.4s forwards;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 hero-glow"></div>
        <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="flex flex-col gap-8 text-center md:text-left">
            <div className="flex flex-col gap-4">
              <h1 className="text-primary text-5xl md:text-8xl font-black leading-[1] tracking-tighter italic uppercase">
                <span className="block animate-reveal-1">Nutrición</span>
                <span className="block animate-reveal-2">Sin Límites.</span>
              </h1>
              <p className="text-gray-400 text-lg md:text-xl font-light max-w-md mx-auto md:mx-0 leading-relaxed italic animate-reveal-3">
                Biodisponibilidad máxima. Sostenibilidad radical. Rendimiento absoluto.
              </p>
            </div>
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 animate-reveal-3">
              <Link to="/sabores" className="gold-gradient text-background-dark px-10 py-4 rounded-lg text-sm font-black tracking-widest uppercase hover:brightness-110 transition-all transform hover:scale-105 text-center">
                Explorar Colección
              </Link>
              <Link to="/sabores" className="border border-primary/30 text-white px-10 py-4 rounded-lg text-sm font-black tracking-widest uppercase hover:bg-primary/10 transition-all">
                Ver Sabores
              </Link>
            </div>
          </div>
          <div className="relative hidden md:block">
            {/* Parallax & Zoom effect on scroll */}
            <div 
              className="w-full aspect-square bg-center bg-no-repeat bg-contain transition-transform duration-200 ease-out" 
              style={{ 
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBWSgjeTHp9_unAbeyd6sER0WS3v9UgTiVmzFVgHfxGgX3tZFm3_1_PwqHpfpUCyEkDag4Y4O9BR2RNgV9fvb_gSzjwkoGo3k32JtMb2yyZxhasScUvW_2nNaX3DKGM6-G0ZaF5jyw11kibwOLifWfYAl3VEWnZFl_8gKhDFfr-7B25Jiv8Ip4t1iX2jhKOMkVpQ-dHpu7qppDuwNcozE_sBY4ASiPfF01UUzzVwQGi75RqMEGw1sAQ6B-90iBzRdI8xwcDF4LXmQ')`,
                transform: `translateY(${scrollY * -0.1}px) scale(${1 + scrollY * 0.0003}) rotate(${scrollY * 0.02}deg)`
              }}
            >
            </div>
          </div>
        </div>
      </section>

      {/* Flavors Section with Filtering */}
      <section id="sabores" className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="text-center md:text-left">
              <h2 className="text-4xl font-black tracking-tight uppercase italic">Selección Premium</h2>
              <div className="w-12 h-1 bg-primary mt-4 mx-auto md:mx-0"></div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 items-center">
              <div className="flex items-center gap-2 p-1 bg-matte-black border border-primary/10 rounded-full">
                {flavors.map(flavor => (
                  <button
                    key={flavor}
                    onClick={() => setSelectedFlavor(flavor)}
                    className={`px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase transition-all ${
                      selectedFlavor === flavor 
                      ? 'gold-gradient text-black' 
                      : 'text-gray-500 hover:text-white'
                    }`}
                  >
                    {flavor === 'All' ? 'Todos' : flavor}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {filteredProducts.map(product => (
              <Link to={`/product/${product.id}`} key={product.id} 
                    className="relative group overflow-hidden rounded-xl bg-matte-black border border-primary/20 p-8 flex flex-col md:flex-row gap-8 hover:border-primary transition-all">
                <div className="absolute inset-0 bg-gradient-to-br opacity-50 transition-opacity group-hover:opacity-70 pointer-events-none" 
                     style={{ background: `linear-gradient(135deg, ${product.accentColor}44 0%, transparent 100%)` }}></div>
                <div className="w-full md:w-48 aspect-square rounded-lg bg-center bg-cover border border-primary/10 relative z-10 shrink-0" 
                     style={{ backgroundImage: `url('${product.image}')` }}></div>
                <div className="flex-1 flex flex-col justify-center relative z-10">
                  <h3 className="text-2xl font-bold mb-3 text-primary italic uppercase tracking-tighter">{product.name}</h3>
                  <p className="text-gray-400 font-light leading-relaxed mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-primary/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    {product.flavorProfile}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Elite Testimonials with 5 Stars */}
      <section className="py-32 bg-background-dark border-t border-primary/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20 text-center">
            <h2 className="text-primary text-3xl font-light tracking-[0.3em] uppercase mb-4">Testimonios Elite</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.map((review, i) => (
              <div key={i} className="p-10 rounded-xl bg-matte-black border border-primary/10 flex flex-col gap-6 hover:border-primary/30 transition-all duration-500">
                <div className="flex justify-between items-center">
                  <span className="material-symbols-outlined text-primary text-4xl">{review.icon}</span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, j) => (
                      <span key={j} className="material-symbols-outlined text-primary text-xl fill-current" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 italic leading-relaxed text-lg font-light">"{review.text}"</p>
                <div>
                  <h4 className="text-primary font-bold uppercase tracking-widest text-sm italic">{review.name}</h4>
                  <p className="text-gray-500 text-[10px] uppercase tracking-[0.2em] mt-1">{review.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Section with Images linking to Impact */}
      <section className="py-32 bg-background-dark border-t border-primary/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-24 text-center">
            <h2 className="text-primary text-3xl font-light tracking-[0.3em] uppercase mb-4 italic">Ingeniería de Vanguardia</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {[
              { 
                icon: 'precision_manufacturing', 
                title: 'Crianza Controlada', 
                desc: 'Granjas verticales de alta tecnología.', 
                img: 'https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&q=80&w=600' 
              },
              { 
                icon: 'science', 
                title: 'Extracción Pura', 
                desc: 'Aislamiento de proteína 99% pura.', 
                img: 'https://images.unsplash.com/photo-1532187875605-2fe358511463?auto=format&fit=crop&q=80&w=600' 
              },
              { 
                icon: 'ac_unit', 
                title: 'Mezcla en Frío', 
                desc: 'Preservación total de nutrientes.', 
                img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=600' 
              },
              { 
                icon: 'inventory_2', 
                title: 'Bio-Empaque', 
                desc: '100% compostable en 90 días.', 
                img: 'https://images.unsplash.com/photo-1610632380989-680fe40816c6?auto=format&fit=crop&q=80&w=600' 
              }
            ].map((step, i) => (
              <Link to="/impacto" key={i} className="group relative h-[450px] overflow-hidden rounded-2xl border border-primary/10 flex flex-col justify-end">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10"></div>
                <img src={step.img} alt={step.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="relative z-20 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  <div className="size-12 rounded-lg bg-primary/20 backdrop-blur-md flex items-center justify-center mb-4 border border-primary/30">
                    <span className="material-symbols-outlined text-primary">{step.icon}</span>
                  </div>
                  <h3 className="text-xl font-black text-white mb-2 uppercase tracking-wider italic">{step.title}</h3>
                  <p className="text-gray-400 text-xs font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity">
                    {step.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter - ÚNETE AL BICHO */}
      <section className="py-40 bg-black border-t border-primary/10 relative">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="mb-12">
            <h2 className="text-primary text-6xl md:text-9xl font-black italic uppercase tracking-tighter mb-6">ÚNETE AL BICHO</h2>
            <p className="text-gray-400 text-lg md:text-2xl font-light tracking-[0.1em] uppercase">
              La revolución nutricional no espera a nadie.
            </p>
          </div>
          <form className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input className="flex-1 bg-matte-black border border-primary/20 rounded-lg px-8 py-5 text-sm text-white focus:outline-none focus:border-primary transition-colors placeholder:text-gray-600 tracking-widest uppercase font-bold" placeholder="TU CORREO" type="email" />
            <button className="gold-gradient text-background-dark px-12 py-5 rounded-lg text-sm font-black tracking-widest uppercase hover:brightness-110 active:scale-95 transition-all">
              Alistar Fuerza
            </button>
          </form>
        </div>
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
          <span className="text-[30vw] font-black uppercase italic">BEETLE</span>
        </div>
      </section>
    </div>
  );
};

export default Home;
