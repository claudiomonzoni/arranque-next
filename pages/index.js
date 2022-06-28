import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import { useEffect } from "react";
import { useDataContext } from "../context/dataContext";
export default function Home() {
  const {datos, getDatos} = useDataContext();
  useEffect(()=>{
    getDatos();
  },[])
  return (
    <div>
      <Layout
        titulo="Arranque home"
        descripcion="Aqui la descripción para el seo"
      >
        <h1>Soy el home</h1>
        <pre>{JSON.stringify(datos, null, 2)}</pre>
      </Layout>
    </div>
  );
}
