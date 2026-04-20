import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function BienvenidaSatmun() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      className="relative bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-16 px-6 md:px-20 overflow-hidden transition-colors duration-500"
    >
      {/* Imagen de fondo translúcida y difuminada */}
      <div className="absolute inset-0">
        <img
          src="/images/ModelUN2.jpg"
          alt="SATMUN fondo"
          className="w-full h-full object-cover opacity-15 dark:opacity-20 blur-sm"
        />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-10" data-aos="fade-down">
          <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-600 dark:text-yellow-400 font-serif mb-3">
            SATMUN
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold italic text-gray-900 dark:text-gray-100">
            “Aprender es descubrir que algo es posible.” – Fritz Perl
          </h2>
        </div>

        {/* Cuerpo del artículo */}
        <div
          className="text-justify text-lg md:text-base leading-relaxed md:columns-2 md:gap-12"
          data-aos="fade-up"
        >
          <p className="mb-6">
            En la actualidad, vivimos en un mundo interconectado, donde los
            límites entre las naciones se desdibujan ante la inmediatez de la
            información y la globalización de los desafíos. No obstante, en este
            contexto dinámico, la posibilidad de generar un impacto significativo
            en nuestra realidad sigue estando en nuestras manos. La juventud no
            es únicamente testigo de los cambios, sino protagonista activa en la
            construcción de un futuro más equitativo y sostenible. En este
            sentido, SATMUN trasciende la noción de un simple modelo de Naciones
            Unidas; es un foro de liderazgo, pensamiento crítico y diálogo, que
            nos reta a desarrollar soluciones ante los desafíos permanentes de
            nuestra era.
          </p>

          <p className="mb-6">
            Recuerdo con claridad mi primera participación en este modelo,
            llegaba nueva a la institución. Pero la emoción era palpable, el
            nerviosismo inevitable, más allá de cualquier temor, existía la
            certeza de que tenía algo valioso que aportar al proyecto SATMUN.
          </p>

          <p className="mb-6">
            La trascendencia no radica en el título que se ostenta, ni en la
            relevancia del país representado, sino en la solidez de las ideas y
            en la capacidad de defenderlas con argumentos válidos.
          </p>

          <p className="mb-6">
            Cada delegado, organizador y miembro del equipo contribuye
            activamente a la creación de un evento único, una experiencia
            formativa que deja huella para la vida. Para finalizar, los invito a
            que cada intervención, debate y decisión refleje el compromiso
            auténtico por más allá de los reconocimientos y distinciones, tengan
            presente la verdadera trascendencia que se genera y el legado que
            dejamos en nuestra comunidad.
          </p>

          <p>
            Bienvenidos a SATMUN XI edición. “Es tu momento. Vívelo al máximo.”
          </p>
        </div>

        {/* Firma */}
        <div className="text-right mt-12 mr-4 md:mr-10" data-aos="fade-up">
          <p
            className="text-3xl italic text-gray-800 dark:text-gray-200"
            style={{ fontFamily: "Brush Script MT, cursive" }}
          >
            Juliana Urbina Mora
          </p>
        </div>
      </div>
    </section>
  );
}

