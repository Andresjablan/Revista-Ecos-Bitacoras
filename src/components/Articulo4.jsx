import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ArticuloCometas() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    AOS.refresh(); // refresca AOS para detectar nuevos elementos
  }, []);

  const parrafos = [
    "Las cometas han sido una fuente de alegría y creatividad durante más de 2,000 años, y su historia es realmente fascinante. Originarias de la antigua China alrededor del año 500 a.C., estas primeras cometas estaban hechas de bambú y seda, se usaban para medir distancias y evaluar el viento. ¡Imagínate lo emocionante que debió ser, verlas elevarse por primera vez!",
    "A medida que las cometas llegaron a Europa en el siglo XIII, se convirtieron en una parte importante de festivales y celebraciones. Durante la Edad Media, su popularidad se propagó aceleradamente y comenzaron a reflejar tradiciones y expresiones culturales en diferentes países. Desde entonces, las cometas han sido una forma alegre de disfrutar del aire libre y conectar con la historia, además de invitarnos a disfrutar de la magia de los colores y de los diversos motivos o temas.",
    "Un momento clave en la historia de las cometas ocurrió en el siglo XVIII, gracias a Benjamin Franklin. Él usó una cometa durante una tormenta para demostrar que los rayos eran electricidad, descubrimiento que revolucionó la comprensión de la electricidad. Este experimento no solo mostró el potencial científico de las cometas, sino que nos hizo ver estos simples juguetes de una manera completamente nueva.",
    "A lo largo del siglo XIX, las cometas se volvieron aún más coloridas y complejas. La llegada del nylon en el siglo XX permitió fabricar cometas más resistentes y asequibles, lo que amplió su atractivo y disponibilidad. Hoy en día, ver una cometa surcar el cielo sigue siendo un espectáculo encantador para personas de todas las edades.",
    "Las cometas siguen generando sonrisas y habilidades en los juegos, competencias, festivales, entre otros. Los Festivales de Cometas de Mumbai y de Weifang en China, además de mostrar su belleza y creatividad, también reúnen a miles de personas para disfrutar de estos mágicos momentos, que sin duda fortalecen la unión familiar. En el aula, se utilizan las cometas como herramientas educativas que ayudan a los estudiantes a aprender sobre aerodinámica, física y meteorología de una manera práctica y divertida.",
    "Desde su humilde comienzo hasta su lugar en la cultura y la ciencia moderna, las cometas han recorrido un largo camino. Nos recuerdan que la creatividad y la curiosidad humana no tienen límites. Así que, la próxima vez que veas una cometa en el cielo, piensa en su increíble viaje a través de los siglos y en cómo sigue inspirándonos hoy.",
    "“La imaginación es el punto más alto al que una cometa puede elevarse.” – Lauren Bacall",
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 transition-colors duration-300">
      <h1 className="text-2xl font-bold mb-6 text-center text-slate-900 dark:text-slate-100">
        COMETAS: TRADICIÓN, CIENCIA Y DIVERSIÓN EN UN SOLO VUELO
      </h1>

      <div>
        <img
          src="/images/Cometa.jpg"
          alt="Cometas"
          className="md:float-right md:ml-6 md:mb-4 w-full md:w-1/2 rounded-lg shadow"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        />

        {parrafos.map((p, i) => (
          <p key={i} className="text-justify leading-relaxed mb-4">
            {p}
          </p>
        ))}

        <p className="text-right font-semibold mt-6">
          Autor: Lic. Jailer Cárdenas
        </p>
      </div>

      {/* Botón de volver al inicio */}
      <div className="flex justify-center mt-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg shadow transition"
        >
          <img src="/images/Volver.png" alt="Inicio" className="w-6 h-6" />
          <span className="font-medium"></span>
        </button>
      </div>
    </div>
  );
}

