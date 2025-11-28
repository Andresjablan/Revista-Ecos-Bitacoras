import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";


import Homepage from "./pages/Homepage";
import CienciaLiteratura from "./pages/CienciaLiteratura";
import CulturaTecnologia from "./pages/CulturaTecnologia";
import Entretenimiento from "./pages/Entretenimiento";
import Infantil from "./pages/Infantil";
import Satmun from "./pages/Satmun";
import Zapping from "./pages/Zapping";

{/* Importacion Articulos */}
import ArticuloCronica from "./components/Articulo";
import ArticuloDiaTierra from "./components/Articulo2";


import ScrollToTop from "./components/ScrollToTop";
import Layout from "./layouts/Layout";

import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-gray-200 transition-colors duration-300">
      
      {/* Scroll automático al cambiar de ruta */}
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/ciencia-literatura" element={<CienciaLiteratura />} />
        <Route path="/cultura-tecnologia" element={<CulturaTecnologia />} />
        <Route path="/entretenimiento" element={<Entretenimiento />} />
        <Route path="/infantil" element={<Infantil />} />
        <Route path="/satmun" element={<Satmun />} />
        <Route path="/zapping" element={<Zapping />} />

        {/* Ruta Artículos */}
        <Route
          path="/ciencia-literatura/cronica"
          element={
            <Layout>
              <ArticuloCronica />
            </Layout>
          }
        />
        <Route
          path="/ciencia-literatura/dia-tierra"
          element={
            <Layout>
              <ArticuloDiaTierra />
            </Layout>
          }
        />
      </Routes>
    </div>
  );
}

