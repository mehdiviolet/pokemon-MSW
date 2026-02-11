// src/router.tsx
import { createBrowserRouter, Navigate } from "react-router-dom";

// Importiamo i componenti che abbiamo creato
import { Layout } from "./components/Layout/Layout";
import { ListPage } from "./pages/ListPage/ListPage";
import { DetailPage } from "./pages/DetailPage/DetailPage";
import { NotFoundPage } from "./pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Il "guscio" che contiene Header e Outlet

    // Le rotte figlie vengono renderizzate DENTRO l'Outlet del Layout
    children: [
      {
        // Se vado su "/", reindirizzami subito su "/items"
        index: true,
        element: <Navigate to="/items" replace />,
      },
      {
        path: "items",
        element: <ListPage />,
      },
      {
        path: "items/:id", // :id è il parametro dinamico (es. "psyduck")
        element: <DetailPage />,
      },
      {
        // Qualsiasi altro URL non trovato -> Pagina 404
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
