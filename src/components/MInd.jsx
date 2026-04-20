import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ArticuloMindfulness() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 py-12 px-6 md:px-20 transition-colors duration-500">
      {/* Título principal */}
      <h1
        className="text-4xl md:text-5xl font-bold text-center mb-6 text-blue-900 dark:text-blue-400 font-serif"
        data-aos="fade-down"
      >
        Mindfulness: Transformando Vidas
      </h1>

      {/* Subtítulo */}
      <h2
        className="text-xl md:text-2xl text-center mb-12 text-gray-700 dark:text-gray-300"
        data-aos="fade-up"
      >
        Colegio de la Presentación Santa Teresa de Cúcuta
      </h2>

      {/* Contenido estilo revista */}
      <div className="max-w-6xl mx-auto text-justify leading-relaxed text-slate-700 dark:text-slate-300 md:columns-2 md:gap-12 space-y-4">
        <p>
          La atención plena o mindfulness se ha convertido en una herramienta poderosa para
          mejorar el bienestar emocional y académico de los estudiantes. En los últimos años,
          investigaciones realizadas por psicólogos y especialistas han confirmado los beneficios
          significativos de esta práctica. En respuesta a los altos índices de ansiedad observados
          entre los jóvenes, se ha decidido incorporar el mindfulness desde el área de Ética y Valores,
          logrando valiosos resultados desde la primaria hasta el grado undécimo.
        </p>

        {/* Imagen pequeña incrustada arriba (columna izquierda) */}
        <img
          src="/images/Mind1.jpg"
          alt="Mindfulness Colegio"
          className="rounded-lg shadow-md w-3/4 mx-auto my-4 object-cover"
          data-aos="zoom-in"
        />

        <p>
          La atención plena es la práctica de estar completamente presente en el momento, sin juzgar.
          Aunque tiene sus raíces en la meditación budista, el mindfulness se ha popularizado en el
          ámbito educativo como una herramienta para ayudar a las personas a encontrar calma y enfoque
          en su vida diaria.
        </p>

        <p>
          En el entorno escolar, las exigencias académicas y sociales generan un notable estrés y ansiedad
          entre los estudiantes. Al introducir técnicas simples de respiración y meditación guiada, se ha
          observado que los estudiantes de nuestra institución han aprendido a manejar sus emociones y
          reducir el estrés de manera efectiva.
        </p>

        <p>
          Además, mantener la atención en un mundo lleno de distracciones es un desafío constante. A través
          de ejercicios de respiración y escaneo corporal, los estudiantes han mejorado su capacidad de
          concentración, lo que se refleja en un mejor rendimiento académico y una mayor presencia en el
          momento.
        </p>

        <p>
          La adolescencia, siendo un período de intensa carga emocional, requiere herramientas específicas
          para la gestión de la misma. Con la práctica del mindfulness, nuestros estudiantes aprenden a
          reconocer y aceptar sus emociones sin reaccionar impulsivamente, lo que les permite manejar mejor
          sus emociones y establecer relaciones más saludables.
        </p>

        <p>
          Por otro lado, los ejercicios de atención plena fomentan la empatía y la comprensión entre los
          estudiantes, resultando en un comportamiento más positivo y colaborativo en el aula. Hemos
          observado una disminución de los conflictos y una mayor conciencia de cómo sus acciones afectan
          a los demás.
        </p>

        <p>
          Para enfrentar las semanas más tensionantes de cada periodo académico, se integra el mindfulness
          como una estrategia clave. Esta práctica ha permitido que los resultados en las evaluaciones sean
          más favorables y que el estrés por sobrepensamientos disminuya significativamente.
        </p>

        <p>
          Los estudiantes que han participado en los talleres de mindfulness en las clases de Ética y Valores
          consideran estos espacios necesarios, ya que les permiten liberar el «peso» emocional acumulado
          durante el periodo académico. La estrategia ha sido ampliamente aceptada y valorada por ellos.
        </p>

        {/* Imagen más abajo (casi al final del texto) */}
        <img
          src="/images/Mind2.jpg"
          alt="Mindfulness en el aula"
          className="rounded-lg shadow-md w-3/4 mx-auto my-6 object-cover"
          data-aos="zoom-in"
        />

        <p>
          En conclusión, la integración del mindfulness en nuestro colegio ha sido una experiencia muy
          gratificante, observándose mejoras significativas en el bienestar social y emocional de los
          estudiantes, así como en su rendimiento académico. Esta práctica nos ha permitido conectarnos más
          profundamente como comunidad educativa, comprendiendo mejor las problemáticas de nuestros
          estudiantes y convirtiéndonos en un lugar más humano y acogedor para todos los integrantes de la
          familia Presentación.
        </p>
      </div>

      {/* Autor */}
      <p className="text-right italic font-semibold mt-8 max-w-6xl mx-auto">
        Área de Ética y Valores
      </p>
    </div>
  );
}


