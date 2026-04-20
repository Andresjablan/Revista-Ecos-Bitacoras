import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer() {
  return (
    <footer className="relative bg-blue-800 text-white dark:bg-gray-900 dark:text-slate-200 mt-12 transition-colors duration-500">

      {/* Abeja flotante */}
      <img
        src="/Abeja3.png"
        alt="volver al inicio"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="absolute bottom-16 right-10 w-10 opacity-90 pointer-events-auto cursor-pointer select-none animate-eight
                   transition-transform duration-300 hover:scale-110 hover:-translate-y-1"
      />

      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-3 items-center">

        {/* IZQUIERDA — Redes + contacto */}
        <div className="flex flex-col items-start gap-2">
          <p className="text-sm font-semibold dark:text-slate-100">Síguenos</p>
          <div className="flex gap-3">
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center 
                         hover:bg-white/20 dark:bg-slate-700/40 dark:hover:bg-slate-600/60 transition"
            >
              <FacebookIcon fontSize="small" />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center 
                         hover:bg-white/20 dark:bg-slate-700/40 dark:hover:bg-slate-600/60 transition"
            >
              <InstagramIcon fontSize="small" />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center 
                         hover:bg-white/20 dark:bg-slate-700/40 dark:hover:bg-slate-600/60 transition"
            >
              <YouTubeIcon fontSize="small" />
            </a>
          </div>

          {/* Dirección en dos líneas */}
          <div className="mt-3 text-xs leading-4 text-slate-200 dark:text-slate-400">
            <p className="text-sm font-semibold dark:text-slate-100">Encuéntranos</p>
            <p>Avenida 2 # 17-51</p>
            <p>Barrio La Playa — Cúcuta</p>
          </div>
        </div>

        {/* CENTRO — Banner */}
        <div className="flex justify-center">
          <img
            src="/logo4.png"
            alt="Banner Colegio"
            className="w-80 filter dark:brightness-90 transition duration-500"
          />
        </div>

        {/* DERECHA — Espacio vacío (la abeja está posicionada fuera) */}
        <div></div>
      </div>

      <div className="text-center py-4 text-xs text-slate-300 dark:text-slate-500 border-t border-white/10 dark:border-slate-700">
        © {new Date().getFullYear()} Área de Comunicaciones · Colegio Presentación Santa Teresa Cúcuta
      </div>
    </footer>
  );
}

export default Footer;


