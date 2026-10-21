import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer() {
  return (
    <footer 
      className="relative text-slate-800 dark:text-slate-100 mt-12 transition-colors duration-500 overflow-hidden bg-white-900"
      style={{
        backgroundImage: `url('/images/Recurso6.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Abeja flotante */}
      <img
        src="/Abeja3.png"
        alt="volver al inicio"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="absolute bottom-16 right-10 w-10 opacity-90 pointer-events-auto cursor-pointer select-none animate-eight
                    transition-transform duration-300 hover:scale-110 hover:-translate-y-1 z-10"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-10 grid grid-cols-3 items-center">

        {/* IZQUIERDA — Redes + contacto */}
        <div className="flex flex-col items-start gap-2">
          <p className="text-sm font-bold text-slate-900 dark:text-white drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.8)]">Síguenos</p>
          <div className="flex gap-3">
            <a
              href="https://www.facebook.com/colegiolapresentacionsantateresacucuta/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-slate-900/10 dark:bg-white/10 flex items-center justify-center text-slate-900 dark:text-white
                         hover:bg-slate-900/20 dark:hover:bg-white/20 transition shadow-sm"
            >
              <FacebookIcon fontSize="small" />
            </a>
            <a
              href="https://www.instagram.com/colpre.santateresa?igsh=MmJsN3ZvY2Y4ZzJi"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-slate-900/10 dark:bg-white/10 flex items-center justify-center text-slate-900 dark:text-white
                         hover:bg-slate-900/20 dark:hover:bg-white/20 transition shadow-sm"
            >
              <InstagramIcon fontSize="small" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCPVYMlR3dOmM2DE3T89_Fzg"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-slate-900/10 dark:bg-white/10 flex items-center justify-center text-slate-900 dark:text-white
                         hover:bg-slate-900/20 dark:hover:bg-white/20 transition shadow-sm"
            >
              <YouTubeIcon fontSize="small" />
            </a>
          </div>

          {/* Dirección en dos líneas */}
          <div className="mt-3 text-xs leading-4 font-medium text-slate-800 dark:text-slate-300 drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">
            <p className="text-sm font-bold text-slate-900 dark:text-white">Encuéntranos</p>
            <p>Avenida 2 # 17-51</p>
            <p>Barrio La Playa — Cúcuta</p>
          </div>
        </div>

        {/* CENTRO — Banner */}
        <div className="flex justify-center">
          <img
            src="/ImagotipoTransp.png"
            alt="Banner Colegio"
            className="w-80 filter dark:brightness-90 transition duration-500 drop-shadow-md"
          />
        </div>

        {/* DERECHA — Espacio vacío (la abeja está posicionada fuera) */}
        <div></div>
      </div>

      <div className="relative z-10 text-center py-4 text-xs font-medium text-slate-800 dark:text-slate-400 border-t border-slate-900/10 dark:border-slate-700/50 drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">
        © {new Date().getFullYear()} Área de Comunicaciones · Colegio Presentación Santa Teresa Cúcuta
      </div>
    </footer>
  );
}

export default Footer;