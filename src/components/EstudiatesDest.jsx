// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// export default function OrgulloPresentacion() {
//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   return (
//     <section className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 py-16 px-6 md:px-20 transition-colors duration-500">
//       {/* Título principal */}
//       <h2
//         className="text-4xl md:text-5xl font-bold text-center mb-8 text-blue-900 dark:text-blue-400"
//         data-aos="fade-down"
//       >
//         Orgullo Presentación
//       </h2>

//       {/* Párrafo introductorio */}
//       <p
//         className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed text-justify max-w-4xl mx-auto mb-16"
//         data-aos="fade-up"
//       >
//         En este espacio, celebramos y destacamos a los estudiantes que, con esfuerzo,
//         disciplina y auténtica pasión, han trascendido los límites del aula. Reconocemos
//         su sacrificio y valentía al dedicar su tiempo y talento a otras disciplinas,
//         logrando triunfos que no solo enaltecen sus cualidades personales, sino que
//         también llenan de legítimo orgullo a toda nuestra institución.
//       </p>

//       {/* Contenedor de imágenes alineadas */}
//       <div className="grid md:grid-cols-2 gap-2 items-start justify-center">
//         {/* Columna izquierda */}
//         <div
//           className="flex flex-col items-center text-center"
//           data-aos="fade-right"
//         >
//           <img
//             src="/images/Orgullo1.jpg"
//             alt="Estudiantes destacados"
//             className="rounded-xl shadow-lg w-3/4 md:max-w-sm object-contain hover:scale-105 transition-transform duration-700 ease-in-out"
//             data-aos="zoom-in"
//           />
//           <div className="mt-4">
//             <p className="font-semibold text-gray-900 dark:text-white">
//               MARIA JIMENA MENDOZA PERUTTI
//             </p>
//             <p className="text-gray-700 dark:text-gray-300 mt-1 max-w-sm text-justify">
//               Campeona Nacional individual y en conjunto de Gimnasia Rítmica,
//               disputado en Paipa Boyacá.
//             </p>
//           </div>
//         </div>

//         {/* Columna derecha */}
//         <div
//           className="flex flex-col items-center text-center"
//           data-aos="fade-left"
//         >
//           <img
//             src="/images/Orgullo2.jpg"
//             alt="Mariangel Sophia Nocua Vera"
//             className="rounded-xl shadow-lg w-3/4 md:max-w-sm object-contain hover:scale-105 transition-transform duration-700 ease-in-out"
//             data-aos="zoom-in"
//           />
//           <div className="mt-4">
//             <p className="font-semibold text-gray-900 dark:text-white uppercase">
//               MARIANGEL SOPHIA NOCUA VERA
//             </p>
//             <p className="text-gray-700 dark:text-gray-300 mt-1 max-w-sm text-justify">
//               Primer puesto olimpiadas matemáticas realizadas en el colegio
//               Sagrados Corazones, categoría de 4° y 5°.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function OrgulloPresentacion() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    AOS.refresh();
  }, []);

  return (
    <section className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 py-16 px-6 md:px-20 transition-colors duration-500">
      {/* Título principal */}
      <h2
        className="text-4xl md:text-5xl font-bold text-center mb-8 text-blue-900 dark:text-blue-400"
        data-aos="fade-down"
      >
        Orgullo Presentación
      </h2>

      {/* Párrafo introductorio */}
      <p
        className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed text-justify max-w-4xl mx-auto mb-16"
        data-aos="fade-up"
      >
        En este espacio, celebramos y destacamos a los estudiantes que, con esfuerzo,
        disciplina y auténtica pasión, han trascendido los límites del aula. Reconocemos
        su sacrificio y valentía al dedicar su tiempo y talento a otras disciplinas,
        logrando triunfos que no solo enaltecen sus cualidades personales, sino que
        también llenan de legítimo orgullo a toda nuestra institución.
      </p>

      {/* Contenedor de imágenes alineadas */}
      <div className="grid md:grid-cols-2 gap-2 items-start justify-center">
        {/* Columna izquierda */}
        <div
          className="flex flex-col items-center text-center"
          data-aos="fade-right"
        >
          <img
            src="/images/Orgullo1.jpg"
            alt="Estudiantes destacados"
            className="rounded-xl shadow-lg w-3/4 md:max-w-sm object-contain hover:scale-105 transition-transform duration-700 ease-in-out"
            data-aos="zoom-in"
          />
          <div className="mt-4">
            <p className="font-semibold text-gray-900 dark:text-white">
              MARIA JIMENA MENDOZA PERUTTI
            </p>
            <p className="text-gray-700 dark:text-gray-300 mt-1 max-w-sm text-justify">
              Campeona Nacional individual y en conjunto de Gimnasia Rítmica,
              disputado en Paipa Boyacá.
            </p>
          </div>
        </div>

        {/* Columna derecha */}
        <div
          className="flex flex-col items-center text-center"
          data-aos="fade-left"
        >
          <img
            src="/images/Orgullo2.jpg"
            alt="Mariangel Sophia Nocua Vera"
            className="rounded-xl shadow-lg w-3/4 md:max-w-sm object-contain hover:scale-105 transition-transform duration-700 ease-in-out"
            data-aos="zoom-in"
          />
          <div className="mt-4">
            <p className="font-semibold text-gray-900 dark:text-white uppercase">
              MARIANGEL SOPHIA NOCUA VERA
            </p>
            <p className="text-gray-700 dark:text-gray-300 mt-1 max-w-sm text-justify">
              Primer puesto olimpiadas matemáticas realizadas en el colegio
              Sagrados Corazones, categoría de 4° y 5°.
            </p>
          </div>
        </div>
      </div>

      {/* Botón de volver al inicio */}
      <div className="flex justify-center mt-12">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg shadow transition"
        >
          <img
            src="/images/Volver.png"
            alt="Volver"
            className="w-6 h-6"
          />
          <span className="font-medium"></span>
        </button>
      </div>
    </section>
  );
}





