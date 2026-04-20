import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Editorial() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="pt-24 pb-20 font-sans px-6 md:px-12 max-w-5xl mx-auto text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 transition-colors duration-500">

      {/* Encabezado tipo revista */}
      <div className="mb-10" data-aos="fade-up">
        <span className="uppercase tracking-widest text-sm text-blue-700 dark:text-blue-400 font-semibold">
          Edición N°6 · Año Escolar 2025
        </span>

        <h1 className="text-4xl md:text-6xl font-serif font-bold mt-2 leading-tight text-slate-900 dark:text-white">
          Ecos Presentación 2025
        </h1>

        <h2 className="text-lg md:text-xl mt-3 text-slate-600 dark:text-slate-400 italic">
          Una revista que inspira esperanza, creatividad y transformación
        </h2>

        <div className="w-24 h-1 bg-blue-700 dark:bg-blue-400 mt-6"></div>
      </div>

      {/* Imagen tipo revista */}
      <div
        className="float-right md:w-64 w-52 ml-6 mb-4 text-center"
        data-aos="zoom-in"
      >
        <img
          src="/images/HnaO.jpg"
          alt="Hna. Omaira del C. Sánchez Ardila - Rectora"
          className="rounded-xl shadow-lg w-full h-auto object-cover"
        />
        <p className="mt-3 text-sm md:text-base font-semibold">
          Hna. Omaira del C. Sánchez Ardila
          <br />
          <span className="font-normal text-slate-600 dark:text-slate-400">
            Rectora
          </span>
        </p>
      </div>

      {/* Contenido */}
      <div className="text-justify leading-relaxed space-y-6">

        {/* Cita estilo revista */}
        <blockquote className="border-l-4 border-blue-700 dark:border-blue-400 pl-6 italic text-lg text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800 p-4 rounded-r-lg shadow-sm">
          “La esperanza siempre tiene rostro humano, acciones concretas para construir a través de la esperanza, un mundo mejor”.
          <span className="block text-right text-sm mt-2 font-semibold">
            — Papa Francisco
          </span>
        </blockquote>

        <p>
          En ambiente Jubilar, como peregrinos de la esperanza, continuamos el camino haciéndole eco en expresiones de alegría, gozo y disponibilidad… que nos incitan a pensar y sentir necesidad de Dios, a tener deseos de ser cada día el mejor reflejo de nosotros mismos y realizar con compromiso la misión que se nos ha confiado.
        </p>

        <p>
          Con el entusiasmo que nos caracteriza, queremos aprovechar este momento para llegar a usted, querido lector de nuestra <strong>Revista Institucional</strong>, que en este año escolar 2025 tiene como propósito destacar a los pequeños escritores de la comunidad educativa, resaltando sus habilidades en la producción textual.
        </p>

        <p>
          Nuestra revista digital, en su edición N°6 <strong>“ECOS PRESENTACIÓN”</strong>, busca mantenernos actualizados frente a los avances comunicativos actuales. Este año incorporamos la sección especial <span className="bg-blue-700 text-white px-2 py-1 rounded-md text-sm font-semibold">Zapping</span>, donde se valorarán las producciones orales y la creatividad audiovisual, fomentando la lectura infantil y juvenil a través de mensajes motivadores.
        </p>

        <p>
          Continuemos escribiendo con palabras sabias la parte de la historia que nos corresponde. Quien lee y escribe hace posible lo imposible, crea mundos y personajes inimaginables y trasciende fronteras a través del poder transformador de las letras.
        </p>

        <p>
          La sección infantil de la revista es un homenaje a la creatividad, el ingenio y la sensibilidad de nuestros estudiantes. Sus voces cobran vida mediante cuentos, poemas y reflexiones que evidencian imaginación, capacidad de expresión y amor por el aprendizaje.
        </p>

        <p>
          Si eres parte de nuestra familia Presentación, estás llamado a asumir el reto, a entrar en este maravilloso mundo y sorprendernos con tu talento, para que juntos hagamos la diferencia y construyamos una nueva mentalidad de vida.
        </p>

        {/* Separador elegante */}
        <div className="border-t border-slate-300 dark:border-slate-700 pt-6 mt-6">
          <p className="font-semibold text-lg text-center">
            Con esperanza y compromiso, avancemos juntos hacia un mundo mejor.
          </p>
        </div>

      </div>

      <div className="clear-both"></div>
    </section>
  );
}





