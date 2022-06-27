import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <div>
      <Layout
        titulo="Arranque home"
        descripcion="Aqui la descripción para el seo">
        <h1>Soy el home</h1>
      </Layout>
    </div>
  );
}
