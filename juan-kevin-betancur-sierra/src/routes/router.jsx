import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout.jsx";
import Inicio from "../pages/Inicio.jsx";
import Catalogo from "../pages/Catalogo.jsx";
import Contacto from "../pages/Contacto.jsx";

// Router por objetos (React Router DOM 6.4+): ruta principal con Layout
// y tres rutas hijas que se proyectan a través de <Outlet />.
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Inicio /> },
      { path: "catalogo", element: <Catalogo /> },
      { path: "contacto", element: <Contacto /> },
    ],
  },
], {
  // Flags oficiales de React Router 6.x para adoptar el comportamiento de v7
  // y evitar advertencias en la consola del navegador.
  future: {
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true,
  },
});
