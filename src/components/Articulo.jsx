import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ArticuloCronica() {
  const navigate = useNavigate();
   useEffect(() => {
      AOS.init({ duration: 1000, once: true });
      AOS.refresh(); // refresca AOS para detectar nuevos elementos
    }, []);

  const parrafos = [
    "El descanso es una forma de equilibrar la vida, y es la oportunidad para valorar la riqueza, la belleza  y  el esplendor de los pueblos de nuestro país.",
    "Al salir del aeropuerto me recibió la ciudad amurallada con una ola de calor, creería que estaba a unos 38°c,  pero eso no me importó cuando vi el cielo, era un contraste entre  los colores amarillo y naranja, realmente ¡era hermoso!,  combinado con las olas del mar y un gran camino de rocas grandes, hacía que mi corazón pudiera experimentar sensaciones intensas por lo magnífico de este atardecer, como un reflejo de los conocidos paisajes de Santa Marta.",
    "Me encanta como es la gente de esta ciudad, ¡es muy amable!.  Lo compruebo mientras doy un paseo que me da la oportunidad de descubrir su magia y su belleza, a través de las calles que llevan al mar y especialmente de noche donde ves el contraste del paisaje con lo moderno de los hermosos edificios ¡Qué elegancia de ciudad!.  Cada vez que paso por un restaurante me ofrecen comidas que se ven exquisitas y la atención al cliente es  muy buena, así mismo la gente es atenta y buenos guías turísticos, siempre están con una sonrisa y cálida actitud.",
    "¿Ya había contado que los paisajes son hermosos?, porque quiero reiterar que no hay nada mejor como esta isla, con su mar cristalino entre azul claro y verde un contraste hermoso, que nos lleva a trascender y donde se armoniza con la  música de fondo. Es interesante poder disfrutar de la libertad de la naturaleza manifestada en los niños que juegan libremente en la arena con sus padres, diría que es una de las mejores  experiencias que he tenido en mi vida, definitivamente la ciudad de Cartagena superó mis  expectativas y cambió mi perspectiva de la ciudad."
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 transition-colors duration-300">
      <h1 className="text-2xl font-bold mb-6 text-center text-slate-900 dark:text-slate-100">
        CRÓNICA: LA MEJOR CIUDAD QUE HE VISITADO
      </h1>

      <div>
        <img
          src="/images/Cartagena2.jpg"
          alt="Cartagena"
          className="md:float-right md:ml-6 md:mb-4 w-full md:w-1/2 rounded-lg shadow transition-transform duration-300" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500"
        />

        {parrafos.map((p, i) => (
          <p key={i} className="text-justify leading-relaxed mb-4 text-slate-700 dark:text-slate-300">
            {p}
          </p>
        ))}
      </div>

      {/* Botón de volver al final */}
      <div className="flex justify-center mt-8">
        <button
          onClick={() => navigate(-1)}
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
    </div>
  );
}

