import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Editorial() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="pt-20 pb-16 font-sans px-6 md:px-12 max-w-5xl mx-auto text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 transition-colors duration-500">
      {/* Título principal sin efectos */}
      <h1 className="text-4xl md:text-5xl font-bold mb-8 font-serif text-blue-900 dark:text-blue-400 text-left">
        Editorial
      </h1>

      {/* Imagen tipo revista con animación y pie de foto */}
      <div
        className="float-right md:w-64 w-52 ml-6 mb-4 text-center"        data-aos="zoom-in"
      >
        <img
          src="/images/HnaO.jpg"
          alt="Hna. Omaira del C. Sánchez Ardila - Rectora"
          className="rounded-xl shadow-md w-full h-auto object-cover"
        />
        <p className="mt-2 text-sm md:text-base font-semibold text-slate-800 dark:text-slate-200">
          Hna. Omaira del C. Sánchez Ardila
          <br />
          <span className="font-normal">Rectora</span>
        </p>
      </div>

      {/* Contenido principal */}
      <div className="text-justify leading-relaxed space-y-4">
        <p className="font-semibold text-slate-700 dark:text-slate-300 italic">
          “Quienes se empeñan en la defensa de la dignidad de las personas, pueden encontrar en la fe cristiana los argumentos más profundos para ese compromiso”.  
          <span className="block text-right text-sm mt-1">— N° 5 LS’</span>
        </p>

        <p>
          ¡Qué bien… qué bueno… qué agradable…! es poder llegar a usted, querido lector de nuestra
          <strong> Revista Institucional</strong>, con una nueva edición para este año escolar 2025,
          en el que muy seguramente ya está enterado del propósito que nos mantiene atentos para
          facilitarnos la vida en un trabajo conjunto desde el aporte a la construcción de la vida,
          “propiciando ambientes sanos y saludables que nos y te transformen… haciendo la diferencia”.
        </p>

        <p>
          Nuestra revista digital (sitio web), en su edición N°5 <strong>“ECOS PRESENTACIÓN”</strong>,
          llega en este nuevo año escolar con la fuerza y la novedad que nos impulsa a continuar escribiendo
          la parte de la historia que nos corresponde, como integrante de este proyecto al ser uno de los
          personajes que la hacen posible.
        </p>

        <p>
          Importante mantener nuestra vida inmersa en el mágico mundo de la escritura y la lectura,
          como soporte que ayuda de manera inimaginable a ampliar el horizonte de la mente,
          la profundidad del corazón y navegar en el infinito universo de las letras que traspasan fronteras.
          Recuerda: lo que se escribe existe, lo que lees recrea, y la lectura es evidencia de mantener
          vigente la memoria en el tiempo, con el tiempo y a través del tiempo.
        </p>

        <p>
          Cordialmente, te invitamos a valorar y disfrutar con gusto e interés de nuestra
          Revista <strong>“ECOS PRESENTACIÓN”</strong>, al tiempo que deseamos que puedas propiciar
          momentos para pensar, reflexionar y apoyar con críticas constructivas que aporten al proceso
          de cambio que durante estos últimos tiempos nos apremia…
        </p>

        <p className="font-semibold mt-6">
          ¡Bendiciones!  
          <br />
          <span className="italic">
            Con Nuestra Señora de La Presentación, cordial abrazo.
          </span>
        </p>
      </div>

      {/* Limpieza del float */}
      <div className="clear-both"></div>
    </section>
  );
}




