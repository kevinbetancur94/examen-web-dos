import { useState } from "react";
import { datos } from "../data/datos.js";
import HeroBanner from "../components/HeroBanner.jsx";
import FiltroCatalogo from "../components/FiltroCatalogo.jsx";
import BookCard from "../components/BookCard.jsx";
import EstadoVacio from "../components/EstadoVacio.jsx";

function Catalogo() {
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("");

  const categorias = Array.from(new Set(datos.map((d) => d.categoria))).sort();
  const termino = busqueda.toLowerCase().trim();

  const resultados = datos.filter((item) => {
    const coincideTexto =
      item.titulo.toLowerCase().includes(termino) ||
      item.autor.toLowerCase().includes(termino) ||
      item.resumen.toLowerCase().includes(termino) ||
      item.editorial.toLowerCase().includes(termino);

    const coincideCategoria = categoria === "" || item.categoria === categoria;

    return coincideTexto && coincideCategoria;
  });

  const limpiarFiltros = () => {
    setBusqueda("");
    setCategoria("");
  };

  return (
    <>
      <HeroBanner
        compacto
        titulo="Colección de Textos & Documentos"
        subtitulo="Explora el catálogo completo de publicaciones, ensayos y tratados de diseño."
      />

      <FiltroCatalogo
        busqueda={busqueda}
        onCambiarBusqueda={setBusqueda}
        categoria={categoria}
        onCambiarCategoria={setCategoria}
        categorias={categorias}
        textoConteo={`${resultados.length} de ${datos.length} registros`}
      />

      <section>
        <div className="cards-grid">
          {resultados.length === 0 ? (
            <EstadoVacio
              mensaje="No se encontraron registros con los filtros actuales."
              textoBoton="Limpiar Filtros"
              onLimpiar={limpiarFiltros}
            />
          ) : (
            resultados.map((libro) => <BookCard key={libro.id} libro={libro} />)
          )}
        </div>
      </section>
    </>
  );
}

export default Catalogo;
