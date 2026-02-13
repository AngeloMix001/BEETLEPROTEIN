
import React from 'react';
import { PRODUCTS } from '../constants';
import { Link } from 'react-router-dom';

const Sabores: React.FC = () => {
  return (
    <main className="pt-32 pb-20 min-h-screen bg-background-dark">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-20 text-center">
          <h1 className="text-primary text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-6">Paleta Sensorial</h1>
          <p className="text-gray-400 text-xl font-light max-w-2xl mx-auto">
            Cada barra ha sido diseñada por maestros chocolateros y nutricionistas deportivos para un balance perfecto entre placer y potencia.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-20">
          {PRODUCTS.map((p, idx) => (
            <div key={p.id} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 group`}>
              <div className="lg:w-1/2 relative">
                <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full group-hover:bg-primary/20 transition-all"></div>
                <img src={p.image} alt={p.name} className="relative z-10 w-full aspect-video object-contain group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="lg:w-1/2 space-y-6">
                <h2 className="text-4xl font-bold italic text-white uppercase tracking-tight">{p.name}</h2>
                <div className="flex gap-4">
                  <span className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-[10px] font-bold text-primary uppercase tracking-widest">{p.flavorProfile}</span>
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold text-gray-400 uppercase tracking-widest">{p.texture}</span>
                </div>
                <p className="text-gray-400 text-lg font-light leading-relaxed italic">
                  {p.description}
                </p>
                <div className="pt-8">
                  <Link to={`/product/${p.id}`} className="gold-gradient text-black px-8 py-3 rounded-lg text-xs font-black uppercase tracking-widest hover:brightness-110 transition-all">
                    Ver Detalles
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Sabores;
