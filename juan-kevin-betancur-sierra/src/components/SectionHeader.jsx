import { Link } from "react-router-dom";
import Icono from "./Icono.jsx";

// `enlace` es opcional: { to, texto } para mostrar el botón de la derecha.
function SectionHeader({ icono, titulo, enlace }) {
  return (
    <div className="section-header">
      <h2 className="section-title">
        <Icono nombre={icono} />
        <span>{titulo}</span>
      </h2>
      {enlace && (
        <Link to={enlace.to} className="btn btn-outline">
          <span>{enlace.texto}</span>
          <Icono nombre="arrow-right" className="icon-sm" />
        </Link>
      )}
    </div>
  );
}

export default SectionHeader;