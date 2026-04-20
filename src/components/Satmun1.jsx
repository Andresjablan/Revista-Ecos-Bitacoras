import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ArticuloSatmunDescripcion() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      className="relative bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-16 px-6 md:px-20 overflow-hidden transition-colors duration-500"
    >
      {/* Imagen de fondo expandida */}
      <div className="absolute inset-0">
        <img
          src="/images/ModelUN.jpg"
          alt="Modelo Naciones Unidas"
          className="w-full h-full object-cover object-center opacity-15 dark:opacity-20 blur-sm"
        />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Encabezado */}
        <div className="flex justify-end mb-10" data-aos="fade-down">
          <h3 className="text-3xl md:text-4xl italic font-serif text-red-700 dark:text-red-400">
            Satmun
          </h3>
        </div>

        {/* Título principal */}
        <h1
          className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-gray-100 mb-10 leading-tight text-center"
          data-aos="fade-up"
        >
          Más que un modelo, una experiencia que transforma vidas
        </h1>

        {/* Cuerpo del artículo */}
        <div
          className="text-justify text-lg md:text-base leading-relaxed md:columns-2 md:gap-12"
          data-aos="fade-up"
        >
          <p className="mb-6">
            SATMUN es más que un modelo, es una experiencia que transforma, un
            espacio donde las palabras tienen poder y donde cada voz cuenta.
            Desde que era una estudiante de sexto grado, este modelo se convirtió
            en una parte fundamental de mi vida y, gracias a Dios, he tenido la
            oportunidad de vivirlo desde todas sus facetas: fui senadora,
            delegada, personaje histórico, asistente de los comisionados y parte
            de la mesa directiva. He estado en cada ámbito de SATMUN y en cada
            paso he encontrado algo que me ha hecho crecer como persona.
          </p>

          <p className="mb-6">
            Pero SATMUN no es solo debate porque activa las emociones, la pasión,
            la adrenalina; antes de alzar la mano para hablar, así mismo aprender
            a escuchar y ser escuchado, equivocarse y volver a intentarlo,
            encontrar en cada comisión una historia que contar y, por supuesto, la
            alegría expresada en risas, una nueva amistad que nace por medio de un
            debate y estos recuerdos se quedan para siempre.
          </p>

          <p className="mb-6">
            De forma personal SATMUN siempre será un lugar donde se descubre que
            eres capaz, de asumir desafíos al pesar diferente, defender las
            propias ideas con determinación, confiar en uno mismo y ver el mundo
            desde una mirada crítica y constructiva, por lo anterior la palabra
            tiene un impacto y al ser expresadas en público puede cambiarlo todo.
          </p>

          <p className="mb-6">
            Recuerdo con sabiduría las palabras de un amigo: “Cualquiera puede
            estar en SATMUN, pero no todos dejan huella en él”. Me atrevo a
            afirmar que él resume con esta breve frase lo especial e impactante
            que este modelo deja como experiencia en nuestra vida estudiantil.
          </p>

          <p>
            Bienvenidos a SATMUN, aquí no hay límites, solo oportunidades para
            crecer y desafiarse a dejar una marca en la historia en el Colegio La
            Presentación Santa Teresa - Cúcuta.
          </p>
        </div>

        {/* Firma */}
        <div className="text-right mt-12 mr-4 md:mr-10" data-aos="fade-up">
          <p
            className="text-3xl italic text-gray-800 dark:text-gray-200"
            style={{ fontFamily: "Brush Script MT, cursive" }}
          >
            Ashley Valentina Gil Parra
          </p>
        </div>
      </div>
    </section>
  );
}


