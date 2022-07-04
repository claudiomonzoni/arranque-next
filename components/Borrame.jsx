import { useDataContext } from "../context/dataContext";
import { useEffect } from "react";

export default function Borrame() {
  const { datos, getDatos } =useDataContext
useEffect(() => {
  getDatos();
}, []);

  return (
    <div>
      Desde Borrame
      {
        
        datos.datos.map((item, index) =>  <div key={index}>{item.name}</div>)
        
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
