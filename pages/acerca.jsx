import Layout from "../components/Layout";
import Borrame from "../components/Borrame";
import { useDataContext } from "../context/dataContext";

export default function acerca() {
const { datos, getDatos } =useDataContext
console.log(datos)
return <div>
      <Layout
        titulo="acerca"
        descripcion="Aqui la descripción para el seo de acerca"
      >
    <h1>Acerca</h1>
{/* <Borrame></Borrame> */}
      </Layout>
  </div>;
}

