export default function Borrame(props) {
  const datos = props.props.losdatos;
  return (
    <div>
      Desde Borrame
      {
       
       datos.map((item, index) =>  <div key={index}>{item.name}</div>)
         
      }
    </div>
  );
}
