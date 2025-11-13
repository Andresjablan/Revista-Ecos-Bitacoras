import React from "react";


function EnConstruccion({ titulo = "Sección en construcción" }) {
  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6 py-16">
      
      {/* Imagen decorativa */}
      <img 
        src="/Contrucion2.png" 
        alt="Sitio en construción"
        className="w-auto max-w-2xl opacity-90 mb-6"
      />

      

      {/* Texto */}
      <h2 className="text-2xl font-bold mb-2">{titulo}</h2>
      <p className="text-slate-600 max-w-md">
        Estamos trabajando para habilitar este contenido.
        Gracias por tu paciencia.
      </p>
    </section>
  );
}

export default EnConstruccion;
