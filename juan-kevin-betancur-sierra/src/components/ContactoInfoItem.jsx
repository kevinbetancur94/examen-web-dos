import Icono from "./Icono.jsx";

function ContactoInfoItem({ icono, titulo, texto }) {
  return (
    <div className="contact-info-item">
      <div className="contact-icon-box">
        <Icono nombre={icono} />
      </div>
      <div>
        <strong style={{ display: "block", fontSize: "0.9rem", color: "var(--text-main)" }}>
          {titulo}
        </strong>
        <span style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>{texto}</span>
      </div>
    </div>
  );
}

export default ContactoInfoItem;