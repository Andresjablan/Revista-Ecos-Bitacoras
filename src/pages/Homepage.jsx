import React from "react";
import Layout from "../layouts/Layout";
import ImageSlider from "../components/ImageSlider"; 
import Editorial from "../components/Editorial";


function Homepage() {
  return (
    <Layout>
      {/* Carrusel de imágenes */}
      <div className="pt-20">
        <ImageSlider />
      </div>

      {/* Sección de noticias */}
      
      

      {/* Sección editorial */}
      <Editorial />

    </Layout>
  );
}

export default Homepage;


