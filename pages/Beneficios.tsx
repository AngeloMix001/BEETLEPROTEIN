
import React from 'react';

const Beneficios: React.FC = () => {
  return (
    <main className="pt-32 pb-20 min-h-screen bg-background-dark">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-20 text-center">
          <h1 className="text-primary text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-6">Nutrición Inteligente</h1>
          <p className="text-gray-400 text-xl font-light max-w-2xl mx-auto">
            Por qué la proteína de grillo es el futuro del rendimiento humano. Ciencia, no marketing.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { 
              icon: 'vital_signs', 
              title: 'Biodisponibilidad', 
              desc: 'Absorción 2x más rápida que el suero de leche, optimizando la ventana anabólica post-entrenamiento.' 
            },
            { 
              icon: 'neurology', 
              title: 'Aminoácidos', 
              desc: 'Perfil completo con los 9 aminoácidos esenciales necesarios para la reparación del tejido muscular.' 
            },
            { 
              icon: 'stomach', 
              title: 'Digestibilidad', 
              desc: 'Naturalmente libre de lactosa y aditivos artificiales. Adiós a la inflamación estomacal.' 
            },
            { 
              icon: 'hematology', 
              title: 'Rico en Hierro', 
              desc: 'Contiene más hierro que la espinaca y más calcio que la leche por gramo.' 
            },
            { 
              icon: 'nutrition', 
              title: 'B12 Natural', 
              desc: 'Fuente natural masiva de vitamina B12, crucial para el sistema nervioso y energético.' 
            },
            { 
              icon: 'psychology', 
              title: 'Focus Mental', 
              desc: 'Ácidos grasos Omega-3 y Omega-6 para mantener la claridad mental durante esfuerzos prolongados.' 
            }
          ].map((b, i) => (
            <div key={i} className="bg-matte-black p-10 rounded-2xl border border-primary/10 hover:border-primary transition-all group">
              <span className="material-symbols-outlined text-primary text-5xl mb-6 group-hover:scale-110 transition-transform">{b.icon}</span>
              <h3 className="text-2xl font-bold italic text-white mb-4">{b.title}</h3>
              <p className="text-gray-500 font-light leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Beneficios;
