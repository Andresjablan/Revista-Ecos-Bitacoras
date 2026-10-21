import React, { useState } from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ChildCareSharpIcon from '@mui/icons-material/ChildCareSharp';
import PsychologySharpIcon from '@mui/icons-material/PsychologySharp';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import ResetTvIcon from '@mui/icons-material/ResetTv';
import LanguageIcon from '@mui/icons-material/Language';

import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useTheme } from "../context/ThemeContext";


const navLinks = [
  { name: "Inicio", path: "/", icon: <HomeIcon fontSize="small" className="text-[#E74029]" /> },
  { name: "Ciencia y Literatura", path: "/ciencia-literatura", icon: <LocalLibraryIcon fontSize="small" className="text-[#FAB81C]" /> },
  { name: "Cultura y Tecnología", path: "/cultura-tecnologia", icon: <PsychologySharpIcon fontSize="small" className="text-[#2C75BA]" /> },
  { name: "Infantil", path: "/infantil", icon: <ChildCareSharpIcon fontSize="small" className="text-[#E74029]" /> },
  { name: "Zapping", path: "/zapping", icon: <ResetTvIcon fontSize="small" className="text-[#FAB81C]" /> },
  { name: "Entretenimiento", path: "/entretenimiento", icon: <VideogameAssetIcon fontSize="small" className="text-[#2C75BA]" /> },
  { name: "Satmun", path: "/satmun", icon: <LanguageIcon fontSize="small" /> },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { dark, toggleDarkMode } = useTheme();

  return (
    <header 
      className="fixed top-0 left-0 w-full z-50 text-slate-800 dark:text-slate-100 transition-colors duration-500 overflow-hidden shadow-sm"
      style={{
        backgroundImage: `url('/images/borde.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'bottom center', // Clave: fuerza a mostrar la parte de abajo de la imagen (la franja de colores)
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="mx-auto px-4 py-4 flex items-center justify-between relative z-10 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm">

        {/* LOGO IZQUIERDA */}
        <Link to="/">
          <img
            src="/images/escoslogo25.png"
            alt="Logo Revista Ecos"
            className="w-25 h-16 object-contain transition-transform duration-200 hover:scale-110 hover:opacity-90 drop-shadow-sm"
          />
        </Link>

        {/* NAV LINKS DESKTOP */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <Link
              key={l.name}
              to={l.path}
              className="flex items-center gap-2 text-slate-900 dark:text-white font-medium hover:text-cyan-600 dark:hover:text-cyan-400 transition duration-200"
            >
              {l.icon}
              {l.name}
            </Link>
          ))}

          {/* ✅ ICONO DARK MODE */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded transition"
          >
            {dark ? (
              <LightModeIcon fontSize="small" style={{ color: "#facc15" }} />
            ) : (
              <DarkModeIcon fontSize="small" style={{ color: "#0ea5e9" }} />
            )}
          </button>
        </nav>

        {/* LOGO DERECHO + MENU MOBILE */}
        <div className="flex items-center gap-3">
          <a
            href="https://colpresantateresacucuta.edu.co/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/Escudo5.png"
              alt="Escudo"
              className="hidden md:block w-16 h-14 object-contain transition-transform duration-200 hover:scale-110 hover:opacity-90 drop-shadow-sm"
            />
          </a>

          <button
            className="md:hidden p-2 rounded-lg bg-white/80 dark:bg-slate-800/80 border dark:border-slate-700 text-slate-800 dark:text-white"
            onClick={() => setMenuOpen(true)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* MENU MOBILE */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white/95 dark:bg-slate-900/95 shadow-md border-b dark:border-slate-800 z-40 p-6 backdrop-blur-md transition-colors duration-500">

          <button
            onClick={() => setMenuOpen(false)}
            className="absolute right-4 top-4 text-xl text-slate-700 dark:text-slate-300"
          >
            ✕
          </button>

          <div className="flex flex-col gap-4 mt-4">
            {navLinks.map((l) => (
              <Link
                key={l.name}
                to={l.path}
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2 text-slate-900 dark:text-white font-medium hover:text-cyan-600 transition duration-200"
              >
                {l.icon}
                {l.name}
              </Link>
            ))}

            {/*ICONO DARK MODE EN MOBILE */}
            <button
              onClick={() => { toggleDarkMode(); setMenuOpen(false); }}
              className="flex items-center gap-2 text-slate-900 dark:text-white font-medium hover:text-cyan-600 transition p-2"
            >
              {dark ? (
                <LightModeIcon fontSize="small" style={{ color: "#facc15" }} />
              ) : (
                <DarkModeIcon fontSize="small" style={{ color: "#0ea5e9" }} />
              )}
              Tema
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;