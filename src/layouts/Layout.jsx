import React from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      {/* Este padding baja el contenido para que no lo tape el navbar fijo */}
      <main className="pt-20">
        {children}
      </main>
      <Footer />
    </>
  );
}

export default Layout;
