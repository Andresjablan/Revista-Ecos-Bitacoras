import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function ArticuloDiaTierra() {
  const navigate = useNavigate();
    useEffect(() => {
      AOS.init({ duration: 1000, once: true });
      AOS.refresh(); // refresca AOS para detectar nuevos elementos
    }, []);

 

  const parrafos = [
    "Cada 22 de abril, millones de personas alrededor del mundo conmemoran el Día de la Tierra, una fecha que nos invita a reflexionar sobre la responsabilidad compartida que tenemos con el cuidado del medio ambiente. Esta celebración, establecida en 1970, ha cobrado creciente relevancia frente a los desafíos que enfrenta nuestro planeta, tales como el cambio climático, la pérdida de biodiversidad, la contaminación del aire y del agua, y la deforestación.",
    "El Colegio de la Presentación Santa Teresa - Cúcuta, fiel a su compromiso con la formación integral de sus estudiantes y la promoción de valores humanos, cristianos y ecológicos, se une a esta conmemoración valorando la importancia de adoptar hábitos responsables que favorezcan la sostenibilidad del entorno. Educar para la conciencia ambiental es un compromiso académico y una misión que trasciende las aulas y se traduce en acciones concretas como reducir el consumo de plásticos, fomentar el reciclaje, cuidar los recursos naturales y proteger todas las formas de vida.",
    "En este sentido, el Día de la Tierra debe entenderse como una oportunidad permanente para renovar la conciencia y el cuidado de la creación. Como comunidad educativa, estamos llamados a generar el cambio, promoviendo una cultura de sentido común y respeto por la naturaleza, asumiendo una actitud positiva y un rol activo en la construcción de un futuro justo, equitativo que genere armonía y bienestar.",
    "Invitamos reiterativamente a la comunidad educativa, a generar hábitos que evidencien el compromiso por las iniciativas ecológicas de la institución y a hacer del cuidado del planeta una prioridad urgente porque… se agota el tiempo. Que cada gesto, por pequeño que parezca, contribuya de manera significativa a preservar la belleza y la vida de nuestra casa común.",
    "“La Tierra no nos pertenece; nosotros pertenecemos a la Tierra.”",
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 transition-colors duration-300">
      <h1 className="text-2xl font-bold mb-6 text-center text-slate-900 dark:text-slate-100">
        DÍA DE LA TIERRA: UN COMPROMISO POR EL FUTURO DEL PLANETA
      </h1>

      <div>
        <img
          src="/images/Tierra1.jpeg"
          alt="Día de la Tierra"
          className="md:float-right md:ml-6 md:mb-4 w-full md:w-1/2 rounded-lg shadow" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500"
        />

        {parrafos.map((p, i) => (
          <p key={i} className="text-justify leading-relaxed mb-4">
            {p}
          </p>
        ))}

        <p className="text-right font-semibold mt-6">
          Autor: Lic. Claudia Karina Blanco Ortiz
        </p>
      </div>

      {/* Botón de volver al final */}
      <div className="flex justify-center mt-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg shadow transition"
        >
          <img src="/images/Volver.png" alt="Volver" className="w-6 h-6" />
          <span className="font-medium"></span>
        </button>
      </div>
    </div>
  );
}

