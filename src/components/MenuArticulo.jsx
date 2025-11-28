import React from "react";
import { Link } from "react-router-dom";

export default function GridArticulos() {
  const articulos = [
    {
      titulo: "CRÓNICA: LA MEJOR CIUDAD QUE HE VISITADO",
      img: "/images/Cartagena2.jpg",
      link: "/ciencia-literatura/cronica",
    },
    {
      titulo: "Día de la Tierra: Un Compromiso por el Futuro del Planeta",
      img: "/images/Tierra1.jpeg",
      link: "/ciencia-literatura/dia-tierra",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 text-slate-800 dark:text-slate-200">
      <h2 className="text-2xl font-bold mb-8 text-center text-slate-900 dark:text-slate-100">
        Ciencia y Literatura
      </h2>

      <div className="grid gap-8 md:grid-cols-2">
        {articulos.map((art, i) => (
          <Link
            key={i}
            to={art.link}
            className="block bg-white dark:bg-slate-800 shadow hover:shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            <img
              src={art.img}
              alt={art.titulo}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg leading-snug text-slate-800 dark:text-slate-100">
                {art.titulo}
              </h3>
              <p className="text-blue-600 dark:text-blue-400 text-sm mt-2">Leer artículo →</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
