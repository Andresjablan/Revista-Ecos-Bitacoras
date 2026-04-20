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
  { name: "Inicio", path: "/", icon: <HomeIcon fontSize="small" /> },
  { name: "Ciencia y Literatura", path: "/ciencia-literatura", icon: <LocalLibraryIcon fontSize="small" /> },
  { name: "Cultura y Tecnología", path: "/cultura-tecnologia", icon: <PsychologySharpIcon fontSize="small" /> },
  { name: "Infantil", path: "/infantil", icon: <ChildCareSharpIcon fontSize="small" /> },
  { name: "Zapping", path: "/zapping", icon: <ResetTvIcon fontSize="small" /> },
  { name: "Entretenimiento", path: "/entretenimiento", icon: <VideogameAssetIcon fontSize="small" /> },
  { name: "Satmun", path: "/satmun", icon: <LanguageIcon fontSize="small" /> },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { dark, toggleDarkMode } = useTheme();

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md shadow-sm">
      <div className="mx-auto px-4 py-6 flex items-center justify-between">

        {/* LOGO IZQUIERDA */}
        <Link to="/">
          <img
            src="/images/LogoEco.png"
            alt="Logo Revista Ecos"
            className="w-25 h-16 object-contain transition-transform duration-200 hover:scale-110 hover:opacity-90"
          />
        </Link>

        {/* NAV LINKS DESKTOP */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <Link
              key={l.name}
              to={l.path}
              className="flex items-center gap-2 text-slate-700 hover:text-cyan-600 transition duration-200"
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
              src="/Escudo2.png"
              alt="Escudo"
              className="hidden md:block w-16 h-14 object-contain transition-transform duration-200 hover:scale-110 hover:opacity-90"
            />
          </a>

          <button
            className="md:hidden p-2 rounded-lg bg-white border"
            onClick={() => setMenuOpen(true)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* MENU MOBILE */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md border-b z-40 p-6">

          <button
            onClick={() => setMenuOpen(false)}
            className="absolute right-4 top-4 text-xl text-slate-700"
          >
            ✕
          </button>

          <div className="flex flex-col gap-4 mt-4">
            {navLinks.map((l) => (
              <Link
                key={l.name}
                to={l.path}
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2 text-slate-700 hover:text-cyan-600 transition duration-200"
              >
                {l.icon}
                {l.name}
              </Link>
            ))}

            {/*ICONO DARK MODE EN MOBILE */}
            <button
              onClick={() => { toggleDarkMode(); setMenuOpen(false); }}
              className="flex items-center gap-2 text-slate-700 hover:text-cyan-600 transition p-2"
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
