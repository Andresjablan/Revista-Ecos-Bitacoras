import React from "react";
import Layout from "../layouts/Layout";
import GaleriaSatmun from "../components/GaleriaSatmun";
import ArticuloSatmunDescripcion from "../components/Satmun1";
import BienvenidaSatmun from "../components/SatmunBien";
import GaleriaSatmun25 from "../components/GaleriaSatmun25";

export default function Satmun() {
  return (
    <Layout>
      <BienvenidaSatmun />
      <GaleriaSatmun25 />
      <ArticuloSatmunDescripcion />
      <GaleriaSatmun />
    </Layout>
  );
}
