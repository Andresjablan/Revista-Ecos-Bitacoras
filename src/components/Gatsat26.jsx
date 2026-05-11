import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function DirectivaSatmun2026() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // --- DATOS CORREGIDOS SEGÚN TUS FOTOS Y CARGOS DE 2026 ---
  // Se ha corregido la ruta (sin espacios: SAT26) y la extensión duplicada (.jpg.jpg)
  const directiva = [
    { nombre: "Camilo Andrés Chaparro Florez", cargo: "Sponsor General", imagen: "/images/SAT26/sponsor-camilo-chaparro.jpg" },
    { nombre: "Juan Tomás Trujillo Peñaranda", cargo: "Secretario General", imagen: "/images/SAT26/sec-gral-juan-trujillo.jpg" },
    { nombre: "María Gabriela Arévalo Ramírez", cargo: "Directora General", imagen: "/images/SAT26/dir-gral-maria-arevalo.jpg" },
    { nombre: "María Alexandra Rincón Acosta", cargo: "Subsecretaria General", imagen: "/images/SAT26/sub-sec-maria-rincon.jpg" },
    { nombre: "Nicolás Bonilla Peñaloza", cargo: "Jefe Académico", imagen: "/images/SAT26/jefe-acad-nicolas-bonilla.jpg" },
    { nombre: "José David Moreras Durán", cargo: "Jefe Finanzas", imagen: "/images/SAT26/jefe-finanzas-jose-moreras.jpg" },
    { nombre: "Danna Isabella Pérez Saavedra", cargo: "Jefe de Prensa", imagen: "/images/SAT26/jefe-prensa-danna-perez.jpg" },
    { nombre: "Amaia Sofía Moncada Viloria", cargo: "Jefe de Edición", imagen: "/images/SAT26/jefe-edicion-amaia-moncada.jpg" },
    { nombre: "Emiliana Alzate Duque", cargo: "Jefe de Staff", imagen: "/images/SAT26/jefe-staff-emiliana-alzate.jpg" },
    { nombre: "Sara Sofía Antolinez García", cargo: "Jefe de Crisis", imagen: "/images/SAT26/jefe-crisis-sara-antolinez.jpg" },
    { nombre: "Linda Vanesa Zaraza Acevedo", cargo: "Jefe de Logística", imagen: "/images/SAT26/jefe-logistica-linda-zaraza.jpg" },
    { nombre: "María Jimena Reyes Godoy", cargo: "Supervisora Académica", imagen: "/images/SAT26/super-acad-maria-reyes.jpg" },
    { nombre: "Valery Sofía Castillo Bohórquez", cargo: "Auxiliar Edición y Prensa", imagen: "/images/SAT26/aux-prensa-valery-castillo.jpg" },
  ];

  return (
    <section className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 py-16 px-6 md:px-12 transition-colors duration-500">
      {/* Encabezado */}
      <div className="relative mb-12 text-center">
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 opacity-90 -z-10 rounded-b-3xl"></div>

        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-blue-900 dark:text-blue-200 drop-shadow-lg tracking-wide pt-10">
          Directiva SATMUN 2026
        </h2>

        <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed pb-6">
          Equipo directivo que lidera SATMUN 2026 con compromiso, liderazgo y visión global.
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

/* --- Componente Tarjeta Reutilizable con Fallback --- */
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
        // Clases de estilo copiadas exactamente de tu GaleriaSatmun
        className="w-60 h-80 object-cover rounded-tl-2xl rounded-br-2xl shadow-lg hover:scale-105 transition-transform duration-500 ease-in-out bg-gray-200"
        // Esta línea es vital si la imagen no carga por error de nombre
        onError={(e) => { e.target.src = 'https://via.placeholder.com/240x320?text=Foto+No+Encontrada'; }}
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