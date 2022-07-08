import Link from "next/link";
export default function Borrame(props) {
  const datos = props.props.losdatos;
  return (
    <div>
      <h1>Datos desde props</h1>
      {
       
       datos.map((item, index) =>  <div key={index}>
        <Link href={`/user/${item.id}`}>
        <a>
          {item.name}
        </a>
        </Link>
        
        </div>)
         
      }
    </div>
  );
}
