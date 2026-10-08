# Librería Archivo — Migración a React

Migración de la aplicación Vanilla JS (`../proyecto-js-vanilla`) a React.

## Ejecutar

```bash
npm install
npm run dev      # desarrollo
npm run build    # build de producción
```

## Stack

- React 18 + Vite
- React Router DOM 6.4+ (`createBrowserRouter`, Layout + `<Outlet />`)
- lucide-react (iconos; equivalente en React de la librería Lucide original)
- Único hook utilizado: `useState`

## Estructura

```
src/
├── components/   Layout, Navbar, Footer, HeroBanner, SectionHeader, StatCard,
│                 BookCard, FiltroCatalogo, EstadoVacio, ContactoInfoItem, Icono
├── pages/        Inicio, Catalogo, Contacto
├── routes/       router.jsx (configuración del enrutador por objetos)
├── data/         datos.js (mock de datos exportado como arreglo nativo)
├── styles/       styles.css
├── App.jsx       RouterProvider
└── main.jsx      punto de entrada
```

## Rutas

| Ruta | Vista |
| :--- | :--- |
| `/` | Inicio (métricas + obras destacadas) |
| `/catalogo` | Catálogo con búsqueda por texto y filtro por categoría |
| `/contacto` | Canales de atención + formulario controlado (un `useState` por campo) |
