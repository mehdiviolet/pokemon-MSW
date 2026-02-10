// src/App.tsx
import { RouterProvider } from "react-router-dom";
import { router } from "./router"; // Importa la configurazione appena creata

function App() {
  return <RouterProvider router={router} />;
}

export default App;
