import { Link, NavLink } from "react-router-dom";
import Icono from "./Icono.jsx";

const enlaces = [
  { to: "/", texto: "Inicio", icono: "home", exacto: true },
  { to: "/catalogo", texto: "Catálogo", icono: "grid", exacto: false },
  { to: "/contacto", texto: "Contacto", icono: "mail", exacto: false },
];

function Navbar() {
  return (
    <header className="site-header">
      <div className="container nav-bar">
        <Link to="/" className="brand">
          <div className="brand-badge">
            <Icono nombre="book-open" />
          </div>
          <span>Librería Archivo</span>
        </Link>
        <nav>
          <ul className="nav-links">
            {enlaces.map((enlace) => (
              <li key={enlace.to}>
                {/* NavLink agrega la clase "active" a la ruta vigente */}
                <NavLink to={enlace.to} end={enlace.exacto}>
                  <Icono nombre={enlace.icono} className="icon-sm" />
                  <span>{enlace.texto}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
