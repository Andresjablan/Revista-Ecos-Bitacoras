import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function GaleriaSatmun() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const directiva = [
    {
      nombre: "Luz Karime Acevedo Motta",
      cargo: "Sponsor General",
      imagen: "/images/SG1.jpg",
    },
    {
      nombre: "Juliana Urbina Mora",
      cargo: "Secretaria General",
      imagen: "/images/SG2.jpg",
    },
    {
      nombre: "Ashley Valentina Gil Parra",
      cargo: "Directora General",
      imagen: "/images/DG.jpg",
    },
    {
      nombre: "Juan Tomas Trujillo Peñaranda",
      cargo: "Sub Secretario General",
      imagen: "/images/SbG.jpg",
    },
    {
      nombre: "María Isabella Marulanda Rojas",
      cargo: "Jefe Académica",
      imagen: "/images/JA.jpg",
    },
    {
      nombre: "José David Moreras Duran",
      cargo: "Jefe Finanzas",
      imagen: "/images/JF.jpg",
    },
    {
      nombre: "Evelyn Saday Espinosa Ascanio",
      cargo: "Jefe Prensa",
      imagen: "/images/JP.jpg",
    },
    {
      nombre: "Indri Gabriela Bautista Contreras",
      cargo: "Jefe de Edición",
      imagen: "/images/JE.jpg",
    },
    {
      nombre: "Sarah Sophia Galvis Quiroz",
      cargo: "Jefe Staff",
      imagen: "/images/JS.jpg",
    },
    {
      nombre: "Karol Nicolle Arias Ortiz",
      cargo: "Jefe de Crisis",
      imagen: "/images/JC.jpg",
    },
    {
      nombre: "María Paula Gelves Hernández",
      cargo: "Jefe de Logística",
      imagen: "/images/JL.jpg",
    },
    {
      nombre: "María Jimena Reyes Godoy",
      cargo: "Supervisora Académica",
      imagen: "/images/SA1.jpg",
    },
    {
      nombre: "Paula Sofía Hernández Soto",
      cargo: "Supervisora Académica",
      imagen: "/images/SA2.jpg",
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 py-16 px-6 md:px-12 transition-colors duration-500">
      {/* Encabezado */}
      <div className="relative mb-12 text-center">
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 opacity-90 -z-10"></div>

        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-blue-900 dark:text-blue-200 drop-shadow-lg tracking-wide">
          Directiva SATMUN 2025
        </h2>

        <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Equipo directivo que lidera SATMUN 2025 con compromiso, liderazgo y visión global.
        </p>
      </div>

      {/* Galería con orden fijo 3-3-3-4 */}
      <div className="space-y-12">
        {/* Fila 1 */}
        <div className="flex flex-wrap justify-center gap-10">
          {directiva.slice(0, 3).map((persona, index) => (
            <Tarjeta key={index} persona={persona} index={index} />
          ))}
        </div>

        {/* Fila 2 */}
        <div className="flex flex-wrap justify-center gap-10">
          {directiva.slice(3, 6).map((persona, index) => (
            <Tarjeta key={index} persona={persona} index={index + 3} />
          ))}
        </div>

        {/* Fila 3 */}
        <div className="flex flex-wrap justify-center gap-10">
          {directiva.slice(6, 9).map((persona, index) => (
            <Tarjeta key={index} persona={persona} index={index + 6} />
          ))}
        </div>

        {/* Fila 4 */}
        <div className="flex flex-wrap justify-center gap-10">
          {directiva.slice(9, 13).map((persona, index) => (
            <Tarjeta key={index} persona={persona} index={index + 9} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* --- Componente Tarjeta Reutilizable --- */
function Tarjeta({ persona, index }) {
  return (
    <div
      className="text-center"
      data-aos="zoom-in"
      data-aos-delay={index * 50}
    >
      <img
        src={persona.imagen}
        alt={persona.nombre}
        className="w-60 h-80 object-cover rounded-tl-2xl rounded-br-2xl shadow-lg hover:scale-105 transition-transform duration-500 ease-in-out"
      />
      <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
        {persona.nombre}
      </h3>
      <p className="text-sm uppercase tracking-wide text-gray-600 dark:text-gray-400">
        {persona.cargo}
      </p>
    </div>
  );
}



