import { useEffect } from "react";
import { useDataContext } from "../context/dataContext";

export default function acerca() {
  const { getDatos, datos } = useDataContext();
  useEffect(() => {
    getDatos();
  }, []);
  return <div>
    <h1>Acerca</h1>
    <pre>{JSON.stringify(datos, null, 2)}</pre>

  </div>;
}
