import Layout from "../components/Layout";
import Borrame from "../components/Borrame";
import Link from "next/link";

export default function acerca() {

return <div>
      <Layout
        titulo="acerca"
        descripcion="Aqui la descripción para el seo de acerca"
      >
    <h1>Acerca</h1>
<Borrame></Borrame>
<Link href="/">
          <a>Home</a>
        </Link>
      </Layout>
  </div>;
}

