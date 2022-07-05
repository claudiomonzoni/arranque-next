import Layout from "../components/Layout";
import Borrame from "../components/Borrame";
import Link from "next/link";
import { useDataContext } from "../context/dataContext";
import { useEffect } from "react";

export default function acerca(props) {
  const {  getDatos } = useDataContext();
  useEffect(() => {
    getDatos(props.losdatos);
  }, []);

  return (
    <div>
      <Layout
        titulo="acerca"
        descripcion="Aqui la descripción para el seo de acerca"
      >
        <h1>Acerca</h1>
        <Borrame props={props}></Borrame>
        <Link href="/">
          <a>Home</a>
        </Link>
      </Layout>
    </div>
  );
}

export async function getStaticProps(props) {
  const laurl = "https://jsonplaceholder.typicode.com/users/";
  const response = await fetch(laurl);
  const losdatos = await response.json();

  return {
    props: {
      losdatos,
    },
  };
}
