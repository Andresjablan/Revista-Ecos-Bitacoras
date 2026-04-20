import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ArticuloRevistaCultura() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const secciones = [
    {
      titulo: "Ecos de Suspense: Voces y visiones en Crimen y Misterio",
      imagen: "/images/Ecosus2.png",
      posicion: "left",
      tamano: "medium",
      parrafos: [
        "En las aulas de nuestro colegio, se desplegó un escenario literario que permitió a los estudiantes explorar el intrigante universo de «Crimen y Misterio: Antología de Relatos de Suspenso». Cada joven se sumergió en la piel de un personaje, dando vida a un monólogo que reflejaba sus más profundos pensamientos y emociones.",
        "Al escribir monólogos, los estudiantes mostraron una creatividad sin límites, capturando la esencia de sus personajes y convirtiendo la actividad en un lienzo para plasmar sus interpretaciones únicas y personales.",
        "Más allá de la literatura, esta experiencia educativa fortaleció habilidades como la empatía y la comprensión lectora. Los estudiantes no solo leyeron los cuentos, sino que también se apropiaron de ellos, transformando la lectura en una experiencia personal y significativa.",
        "Esta actividad no solo enriqueció el conocimiento literario de los estudiantes, sino que también les brindó una herramienta para expresarse y compartir su visión única del mundo. En definitiva, fue una demostración de cómo la literatura puede ser un vehículo para el descubrimiento personal y el crecimiento artístico.",
      ],
      autor: "Jailer Andrey Cárdenas Parra - Docente de Lengua Castellana",
    },
    {
      titulo: "Viaje Literario: Feria de la Literatura",
      imagen: "/images/Feria.jpg",
      posicion: "right",
      tamano: "medium",
      parrafos: [
        "En el vibrante corazón de nuestra comunidad educativa, una joven estudiante llamada Valery Espinel Beltrán, del grado 7B, ha dado sus primeros pasos como autora al participar en la Feria de Literatura, dirigida por la profesora Ana Carlota Restrepo Hernández.",
        "A sus apenas 12 años, Valery ha creado una obra que captura la esencia de la vida adolescente y ofrece soluciones a los desafíos de encajar en la sociedad. Su cuento «Valeria en la Ciudad Colorida» dejó una impresión duradera por su innovadora técnica en 3D.",
        "Con el apoyo de nuestros profesores y el talento emergente de estudiantes como Valery, el Colegio La Presentación Santa Teresa-Cúcuta sigue siendo un semillero de creatividad y liderazgo juvenil.",
      ],
      autor: "Valery Espinel Beltrán - 7°B",
    },
    {
      titulo: "Inteligencia Artificial: ¿Avance o Retroceso?",
      imagen: "/images/IA3.png",
      posicion: "left",
      tamano: "medium",
      parrafos: [
        "La cuarta revolución industrial ha llegado a nuestras vidas de manera tan natural que nos hemos adaptado a ella sin hacer preguntas. En esta avalancha de novedades, ¿dónde trazamos el límite?",
        "El concepto de inteligencia artificial, aunque nuevo, ha transformado nuestra forma de vivir y trabajar. Su objetivo es imitar los procesos intelectuales humanos, lo que plantea dilemas legales y éticos aún sin resolver.",
        "Casos como el uso no autorizado de voces por IA, o la ausencia de regulación en Colombia, muestran la urgencia de reflexionar sobre los riesgos de una tecnología sin control. Los avances tecnológicos son oportunidades, pero también un llamado a la responsabilidad social y moral.",
      ],
      autor: "Gabriela Arango Collazos - 11°A",
    },
  ];

  const getImageClasses = (posicion, tamano) => {
    const base = "rounded-lg shadow mb-4 object-cover";
    const tamanos = {
      small: "w-full md:w-1/3",
      medium: "w-full md:w-1/2",
      large: "w-full md:w-2/3",
    };
    const posiciones = {
      left: "md:float-left md:mr-6",
      right: "md:float-right md:ml-6",
      center: "mx-auto block my-6",
    };
    return `${base} ${tamanos[tamano]} ${posiciones[posicion]}`;
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 transition-colors duration-300">
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-gray-100">
        CULTURA Y TECNOLOGIA
      </h1>

      {secciones.map((sec, index) => (
        <div key={index} className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-center text-slate-900 dark:text-slate-100">
            {sec.titulo}
          </h2>

          {/* Animación solo en las imágenes */}
          <img
            src={sec.imagen}
            alt={sec.titulo}
            className={getImageClasses(sec.posicion, sec.tamano)}
            data-aos={sec.posicion === "left" ? "fade-right" : "fade-left"}
          />

          {sec.parrafos.map((p, i) => (
            <p
              key={i}
              className="text-justify leading-relaxed mb-4 text-slate-700 dark:text-slate-300"
            >
              {p}
            </p>
          ))}

          <p className="text-right italic font-semibold mt-4">{sec.autor}</p>
          <div className="clear-both"></div>
        </div>
      ))}

      <div className="flex justify-center mt-8">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg shadow transition"
        >
          <img src="/images/Volver.png" alt="Inicio" className="w-6 h-6" />
          <span className="font-medium"></span>
        </button>
      </div>
    </div>
  );
}

