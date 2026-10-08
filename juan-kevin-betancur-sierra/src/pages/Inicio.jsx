import { datos } from "../data/datos.js";
import HeroBanner from "../components/HeroBanner.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import StatCard from "../components/StatCard.jsx";
import BookCard from "../components/BookCard.jsx";

function Inicio() {
  const totalLibros = datos.length;
  const categoriasUnicas = new Set(datos.map((d) => d.categoria)).size;
  const promedioRating = (
    datos.reduce((acc, d) => acc + d.calificacion, 0) / totalLibros
  ).toFixed(1);
  const totalPaginas = datos.reduce((acc, d) => acc + d.paginas, 0);

  const stats = [
    { label: "Libros Indexados", valor: totalLibros, icono: "book", bg: "#eef2ff", color: "#4f46e5" },
    { label: "Categorías Temáticas", valor: categoriasUnicas, icono: "tag", bg: "#e0f2fe", color: "#0284c7" },
    { label: "Calificación Promedio", valor: promedioRating, icono: "star", bg: "#fef3c7", color: "#d97706" },
    { label: "Páginas Totales", valor: totalPaginas.toLocaleString(), icono: "file-text", bg: "#ecfdf5", color: "#059669" },
  ];

  const destacados = datos.filter((d) => d.destacado);

  return (
    <>
      <HeroBanner
        titulo="Biblioteca de Diseño & Teoría Visual"
        subtitulo="Colección y catálogo especializado en teoría visual, arquitectura, tipografía y diseño editorial."
      />

      <section>
        <SectionHeader icono="bar-chart-3" titulo="Resumen del Repositorio" />
        <div className="stats-grid">
          {stats.map((st) => (
            <StatCard
              key={st.label}
              label={st.label}
              valor={st.valor}
              icono={st.icono}
              bg={st.bg}
              color={st.color}
            />
          ))}
        </div>
      </section>

      <section style={{ marginTop: "44px" }}>
        <SectionHeader
          icono="star"
          titulo="Obras Destacadas"
          enlace={{ to: "/catalogo", texto: "Explorar Catálogo Completo" }}
        />
        <div className="cards-grid">
          {destacados.map((libro) => (
            <BookCard key={libro.id} libro={libro} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Inicio;
