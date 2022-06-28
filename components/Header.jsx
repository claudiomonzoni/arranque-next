import Link from "next/link";
import { useDataContext } from "../context/DataContext";

export default function Header() {
 const { getDatos } = useDataContext();
  console.log(getDatos);


  return (
    <nav>
      <ul>
        <li>Aqui el logo</li>
        <li>
          <Link href={"/seccion-a"}>
            <a>Seccion A</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
