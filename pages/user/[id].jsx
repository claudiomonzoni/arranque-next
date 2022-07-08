import Layout from "../../components/Layout";
export default function Detalles({ losdatos }) {
  return (
    <Layout titulo="Detalles" descripcion="Aqui la descripción para el seo de detalles">
    <div>
      <h1>{losdatos.name}</h1>
    </div>
    </Layout>
  );
}


export async function getStaticPaths() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/");
    const datos = await response.json();
    const paths = datos.map(({id}) => ({
      params: { id:`${id}` },
    }));
    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.log(error);
  }
}


export async function getStaticProps({params}) {
try {
  const laurl = `https://jsonplaceholder.typicode.com/users/${params.id}`;
  const response = await fetch(laurl);
  const losdatos = await response.json();
  return {
    props: {
      losdatos,
    },
  };
} catch (error) {
  console.log(error)
  }
}
