import Link from "next/link";
export default function Header() {
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
