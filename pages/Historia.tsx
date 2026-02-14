
import React from 'react';

const Historia: React.FC = () => {
  return (
    <main className="min-h-screen bg-background-dark pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-24 text-center">
          <span className="text-primary font-black tracking-[0.4em] uppercase text-xs mb-4 block italic">Génesis Disruptivo</span>
          <h1 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter leading-none mb-8">
            De un Desafío <br /> a una <span className="text-primary">Revolución.</span>
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </header>

        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="space-y-8">
            <div className="p-8 border border-primary/20 bg-matte-black rounded-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                <span className="material-symbols-outlined text-6xl">trophy</span>
              </div>
              <h2 className="text-3xl font-black italic uppercase text-primary mb-4">Rally Latinoamericano 2024</h2>
              <p className="text-gray-400 text-lg font-light leading-relaxed italic">
                Beetle Protein no nació en una sala de juntas, nació en el fragor de la competencia. Como <span className="text-white font-bold">Ganadores del Rally Latinoamericano de Innovación 2024</span>, nuestro equipo resolvió un desafío crítico de seguridad alimentaria global en menos de 28 horas.
              </p>
            </div>
            <p className="text-gray-500 text-lg font-light italic leading-relaxed">
              Ese reconocimiento no fue el final, sino el combustible. Nos inspiramos en la adrenalina y la viabilidad técnica demostrada durante el rally para construir una infraestructura que hoy redefine la nutrición deportiva de élite.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full"></div>
            <img 
              src="https://images.unsplash.com/photo-1551135049-8a33b5883817?auto=format&fit=crop&q=80&w=1200" 
              alt="Team Innovation" 
              className="relative z-10 rounded-3xl border border-white/10 grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>

        <section className="py-20 border-t border-primary/10">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <h3 className="text-5xl font-black text-primary italic mb-2">2024</h3>
              <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">Victoria Nacional</p>
            </div>
            <div>
              <h3 className="text-5xl font-black text-primary italic mb-2">28h</h3>
              <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">De Idea a Prototipo</p>
            </div>
            <div>
              <h3 className="text-5xl font-black text-primary italic mb-2">∞</h3>
              <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">Impacto Global</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Historia;
