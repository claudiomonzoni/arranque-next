import { useEffect } from "react";
import { useDataContext } from "../context/dataContext";

export default function Borrame() {
  const { datos, getDatos } = useDataContext();
  useEffect(() => {
    getDatos();
    console.log(datos.datos.length)
  }, []);
  return (
    <div>
      Desde Borrame
      {
        datos.datos.length
         ? datos.datos.map((item, index) =>  <div key={index}>{item.name}</div>)
         : null
        }
    </div>
  );
}

// export async function getStaticProps(datos) {
//   console.log("first")
//   return {
//     props: {
//       datos: datos.datos,
//     },
//   };
// }
