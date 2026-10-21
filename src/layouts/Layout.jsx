import React from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* flex-grow empuja el contenido y mantiene el footer siempre abajo */}
      <main className="flex-grow pt-20">
        {children}
      </main>

      <Footer />
    </div>
  );
}

export default Layout;
