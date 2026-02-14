
import React from 'react';

const Ciencia: React.FC = () => {
  return (
    <main className="min-h-screen bg-background-dark pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-24 text-center">
          <span className="text-primary font-black tracking-[0.4em] uppercase text-xs mb-4 block italic">Rigor Molecular</span>
          <h1 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter leading-none mb-8">
            Validación <br /> <span className="text-primary">Científica.</span>
          </h1>
          <p className="text-gray-400 text-xl font-light max-w-2xl mx-auto italic">
            No creemos en promesas, creemos en datos. Trabajamos bajo protocolos de laboratorio estrictos para asegurar la biodisponibilidad máxima.
          </p>
        </header>

        <div className="grid lg:grid-cols-3 gap-8 mb-32">
          {[
            {
              title: "Laboratorio Permanente",
              desc: "Colaboramos con centros de biotecnología para testear cada lote de producción, garantizando un perfil de aminoácidos 100% verificado.",
              icon: "biotech"
            },
            {
              title: "Biodisponibilidad",
              desc: "Nuestros estudios demuestran una absorción celular 1.8x superior a las proteínas vegetales convencionales.",
              icon: "microbiology"
            },
            {
              title: "Pureza Molecular",
              desc: "Procesos de extracción en frío que preservan las cadenas proteicas sin desnaturalización química.",
              icon: "science"
            }
          ].map((item, i) => (
            <div key={i} className="p-10 bg-matte-black border border-primary/10 rounded-2xl group hover:border-primary transition-all">
              <span className="material-symbols-outlined text-primary text-5xl mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </span>
              <h3 className="text-2xl font-black italic uppercase text-white mb-4">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed italic">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-primary/5 border border-primary/20 rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
            <svg viewBox="0 0 100 100" className="w-full h-full text-primary fill-current">
              <circle cx="50" cy="50" r="40" />
            </svg>
          </div>
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-3xl font-black italic uppercase text-primary mb-6">Mejora Continua</h2>
            <p className="text-gray-300 text-lg leading-relaxed italic mb-8">
              Estamos en constante iteración. Nuestro equipo de I+D (Investigación y Desarrollo) desarrolla nuevas formas de optimizar la densidad nutricional, utilizando bio-sensores para monitorear el crecimiento y la pureza de nuestra fuente proteica en tiempo real.
            </p>
            <div className="flex items-center gap-4 text-xs font-bold tracking-widest text-primary uppercase">
              <span className="size-2 bg-primary animate-pulse rounded-full"></span>
              Protocolo Beetle-Lab v4.0 Active
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Ciencia;
