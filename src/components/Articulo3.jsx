import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ArticuloRevistaPreescolar() {
  const navigate = useNavigate();
 useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    AOS.refresh(); // refresca AOS para detectar nuevos elementos
  }, []);
  
  const secciones = [
    {
      titulo: "Exploradores de la Creación",
      imagen: "/images/Exploradores.jpg",
      posicion: "right",
      tamano: "medium",
      parrafos: [
        "En esta imagen, nuestros pequeños corazones curiosos se convierten en exploradores de la naturaleza, asomándose con asombro y ternura entre las hojas para descubrir los secretos del jardín. Cada mirada atenta es una semillita de conocimiento, y cada susurro entre ellos, una expresión de asombro ante la maravilla de la vida.",
        "Hoy aprendimos que la naturaleza es una obra de arte viviente, pintada por las manos amorosas de Papito Dios. A través de las plantas, los colores, los insectos y las flores, descubrimos que todo lo creado tiene un propósito y una belleza única.",
        "Con los ojos bien abiertos y el corazón lleno de alegría, comprendemos que cuidar de la creación es también una forma de amar y agradecer. Porque cada hoja, cada brisa y cada bichito nos hablan de un Dios que sueña, crea y nos invita a descubrir su amor en cada rincón del mundo.",
      ],
    },
    {
      titulo: "Arte con el corazón: descubriendo a Papito Dios en lo pequeño",
      imagen: "/images/ArteCorazon.jpg",
      posicion: "left",
      tamano: "large",
      parrafos: [
        "Hoy nuestros pequeños artistas salieron al jardín con ojos de asombro y alma de poetas. En cada paso, fuimos reconociendo que la naturaleza es una carta de amor escrita por Papito Dios. Nos detuvimos a observar con calma, a tocar con cuidado, y a recoger con cariño hojas y flores que ya habían caído al suelo.",
        "En cada pétalo seco y en cada hoja dorada, descubrimos que las cosas pequeñas también encierran una belleza inmensa. Aprendimos que Dios se manifiesta en los detalles, en lo simple, en lo que a veces pasa desapercibido, pero que, al mirarlo con el corazón, se convierte en un tesoro.",
        "Con todo lo recolectado, creamos una obra de arte que no solo decoran, sino que narra una historia: la historia de niños que, con amor, se sorprenden al ver la huella de su Creador en cada rincón del jardín.",
      ],
    },
    {
      titulo: "Manos que crean con amor, colores que hablan de Dios",
      imagen: "/images/ManosCrea.jpg",
      posicion: "right",
      tamano: "large",
      parrafos: [
        "Después de explorar la naturaleza y contemplar la belleza de la creación, nuestras pequeñas manos se llenaron de color. Pintamos no sólo con pinceles, sino con el corazón, con las manos abiertas y el alma dispuesta a expresar lo vivido.",
        "El arte se convirtió en lenguaje sagrado. En cada trazo con azul del cielo o rosado de las flores, celebramos la vida y agradecimos a Papito Dios por regalarnos tanta hermosura. Las manos manchadas no son solo testigos del juego, sino del milagro de crear, imaginar y compartir.",
        "Así, lo recolectado en nuestro paseo por la creación se transformó en una hermosa obra de arte, llena de sentido, ternura y fe. Porque en el aula también florecen ideas hermosas cuando se pintan desde el corazón.",
      ],
    },
    {
      titulo: "Haciendo manualidades bonitas",
      imagen: "/images/Manualidades.png",
      posicion: "left",
      tamano: "small",
      parrafos: [
        "Después de una linda salida en la que exploramos la naturaleza y recogimos flores y hojas del suelo, regresamos al aula llenos de ideas e inspiración.",
        "Nos pusimos manos a la obra con nuestras mesas de colores, pinceles, témperas y mucha emoción. Cada niño comenzó a crear su propia obra, mezclando colores con libertad y alegría. Las risas, los colores en las manos y las caritas concentradas llenaron el ambiente de magia.",
        "Estas actividades no solo desarrollan su creatividad, sino también su motricidad, expresión y trabajo en equipo. Verlos disfrutar, compartir materiales y mostrar con orgullo sus creaciones es, sin duda, el mejor resultado. ¡Qué hermoso es aprender jugando, creando y soñando!",
      ],
    },
    {
      titulo: "Escribiendo mi historia escolar",
      imagen: "/images/HistoriaEscolar.jpg",
      posicion: "center",
      tamano: "large",
      parrafos: [
        "En un ambiente cargado de ternura, emoción y alegría, Hna. Omaira Sánchez Ardila compartió con nuestros niños y niñas un gesto lleno de significado: la entrega de sus agendas institucionales. Este momento no solo marcó el inicio de una nueva etapa, sino también la siembra de responsabilidad, organización y sentido de pertenencia en sus corazones.",
        "Cada niño recibió con ilusión su agenda, símbolo de los primeros pasos hacia el fortalecimiento de hábitos escolares, del trabajo en equipo con sus familias y del amor por su colegio. A través de esta entrega, reafirmamos que la educación se construye con pequeños actos llenos de sentido y que cada día es una nueva oportunidad para aprender con alegría.",
      ],
    },
    {
      titulo: "Celebración del Día de la Mujer en Preescolar",
      imagen: "/images/DiaMujer.jpg",
      posicion: "left",
      tamano: "small",
      parrafos: [
        "Nuestros pequeños rindieron un hermoso homenaje a las mujeres especiales en sus vidas, reconociendo su amor, dedicación y fortaleza.",
        "A través de actividades lúdicas, canciones y detalles llenos de ternura, aprendieron sobre la importancia del respeto, la igualdad y el valor de cada mujer. ¡Un día lleno de alegría, aprendizaje y mucha gratitud!",
      ],
    },
    {
      titulo: "Mi nombre, mi historia",
      imagen: "/images/MiNombre.png",
      posicion: "right",
      tamano: "medium",
      parrafos: [
        "Los niños de Transición participaron en una actividad muy especial donde el protagonista fue su nombre. Cada uno se acercó al tablero con entusiasmo, escribiendo su nombre con esmero y orgullo, reconociendo que esa palabra que los identifica tiene un valor profundo.",
        "A través de este ejercicio, no sólo fortalecieron habilidades motrices y lingüísticas, sino que también reafirmaron su identidad y autoestima. Porque cada nombre tiene una historia, una esencia, y en cada trazo se reflejó lo más valioso: su unicidad.",
        "Esta experiencia nos recuerda que en el aula no solo se aprende a escribir… también se aprende a quererse.",
      ],
    },
    {
      titulo: "Descubriendo los números del 0 al 5",
      imagen: "/images/Numeros.jpeg",
      posicion: "left",
      tamano: "small",
      parrafos: [
        "En esta actividad, los niños de preescolar exploraron y reconocieron los números del 0 al 5 de manera interactiva y divertida.",
        "A través del uso de marcadores en el tablero, los niños desarrollan habilidades numéricas básicas, como la identificación y secuencia de números, promoviendo un aprendizaje significativo y lúdico.",
      ],
    },
    {
      titulo: "Nuestra familia es nuestra casa",
      imagen: "/images/FamiliaCasa.jpg",
      posicion: "left",
      tamano: "large",
      parrafos: [
        "En esta actividad, los niños de preescolar crearon una representación de su familia y su hogar utilizando materiales como papel, crayones, paletas de helado y otros recursos artísticos.",
        "A través de esta experiencia, los niños desarrollan habilidades relacionadas con la familia, la identidad y la expresión artística, promoviendo la reflexión sobre su entorno familiar y social.",
      ],
    },
    {
      titulo: "Coloreando los días de la semana",
      imagen: "/images/DiasSemana.jpg",
      posicion: "right",
      tamano: "medium",
      parrafos: [
        "En esta actividad, los niños de preescolar reconocieron y aprendieron los días de la semana de manera interactiva y visual.",
        "A través del coloreado de imágenes y palabras relacionadas con cada día, los niños han desarrollado habilidades de reconocimiento y secuencia temporal, promoviendo una comprensión básica del calendario semanal.",
      ],
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
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-800 text-2xl font-bold mb-6 text-center text-slate-900 dark:text-slate-100 ">
        NUESTRAS PEQUEÑAS HISTORIAS
      </h1>

      {secciones.map((sec, index) => (
        <div key={index} className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-center text-slate-900 dark:text-slate-100">
            {sec.titulo}
          </h2>
          <img
            src={sec.imagen}
            alt={sec.titulo}
            className={getImageClasses(sec.posicion, sec.tamano)} data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          />
          {sec.parrafos.map((p, i) => (
            <p key={i} className="text-justify leading-relaxed mb-4 text-slate-700 dark:text-slate-300" >
              {p}
            </p>
          ))}
          <div className="clear-both"></div>
        </div>
      ))}

      <p className="text-right font-semibold mt-6">
        Autor: Equipo de Preescolar
      </p>

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

