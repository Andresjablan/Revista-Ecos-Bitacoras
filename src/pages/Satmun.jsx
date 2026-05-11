import React from "react";
import Layout from "../layouts/Layout";
import ArticuloSatmunDescripcion from "../components/Satmun1";
import BienvenidaSatmun from "../components/SatmunBien";
import GaleriaSatmun25 from "../components/GaleriaSatmun25";
import Gatsat26 from "../components/Gatsat26";

export default function Satmun() {
  return (
    <Layout>
      <BienvenidaSatmun />
      <GaleriaSatmun25 />
      <ArticuloSatmunDescripcion />
      <Gatsat26 />
    </Layout>
  );
}
