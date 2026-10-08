function EstadoVacio({ mensaje, textoBoton, onLimpiar }) {
  return (
    <div
      style={{
        gridColumn: "1 / -1",
        padding: "48px",
        background: "white",
        borderRadius: "12px",
        textAlign: "center",
        border: "1px dashed var(--border-medium)",
      }}
    >
      <p
        style={{
          fontSize: "1.05rem",
          color: "var(--text-muted)",
          marginBottom: "16px",
        }}
      >
        {mensaje}
      </p>
      <button className="btn btn-secondary" onClick={onLimpiar}>
        {textoBoton}
      </button>
    </div>
  );
}

export default EstadoVacio;