import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function NoticiasRecientes() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="pt-20 bg-white dark:bg-slate-900 transition-colors duration-300 relative overflow-hidden pb-10">
      <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
        {/* Texto principal */}
        <div data-aos="fade-right">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-slate-900 dark:text-white">
            Una educación{" "}
            <span className="text-cyan-600 dark:text-cyan-400">
              con corazón
            </span>{" "}
            y mirada al futuro
          </h1>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            Alumnos de primaria cantando la piragua en el festival la abeja dorada.
            Espacios seguros, actividades innovadoras y una comunidad que inspira.
          </p>

          {/* Bloques de noticias */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            {/* Easter */}
            <Link
              to="/entretenimiento/easter"
              data-aos="zoom-in-up"
              className="flex items-center gap-3 bg-white dark:bg-slate-800 rounded-2xl p-3 shadow hover:shadow-lg transition-all dark:shadow-slate-700/30"
            >
              <img
                src="/images/Easter.jpg"
                alt="Easter Celebration"
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div>
                <div className="text-sm font-semibold dark:text-white">
                  EASTER A CELEBRATION
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  Una celebración de vida, fe y servicio en nuestra comunidad escolar.
                </div>
              </div>
            </Link>

            {/* Estudiantes destacados */}
            <Link
              to="/orgullo-presentacion"
              data-aos="zoom-in-up"
              data-aos-delay="200"
              className="flex items-center gap-3 bg-white dark:bg-slate-800 rounded-2xl p-3 shadow hover:shadow-lg transition-all dark:shadow-slate-700/30"
            >
              <img
                src="/images/Orgullo2.jpg"
                alt="Estudiantes destacados"
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div>
                <div className="text-sm font-semibold dark:text-white">
                  Estudiantes destacados
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  Conoce a nuestros alumnos que representan el orgullo institucional.
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Imagen principal */}
        <div
          className="rounded-3xl overflow-hidden shadow-2xl border border-white dark:border-slate-700 transition-colors relative"
          data-aos="fade-left"
        >
          <img
            src="/festabdr.jpeg"
            alt="festival"
            className="w-full h-96 object-cover"
          />

          {/* Luces decorativas */}
          <div className="absolute -bottom-6 -left-6 w-40 h-40 rounded-full bg-cyan-400/30 blur-3xl"></div>
          <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-yellow-300/40 blur-3xl"></div>
        </div>
      </div>
    </section>
  );
}

export default NoticiasRecientes;


