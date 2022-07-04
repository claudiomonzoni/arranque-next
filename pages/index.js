import Head from "next/head";
import Image from "next/image";
import Borrame from "../components/Borrame";
import Layout from "../components/Layout";
import { useDataContext } from "../context/dataContext";
import { useEffect } from "react";

export default function Home() {
const { getDatos } = useDataContext();
useEffect(() => {
  getDatos()
}
, [])

  return (
    <div>
      <Layout
        titulo="Arranque home"
        descripcion="Aqui la descripción para el seo"
      >
        <h1>Soy el home</h1>
        {/* <Borrame> </Borrame> */}
      
      </Layout>
    </div>
  );
}
