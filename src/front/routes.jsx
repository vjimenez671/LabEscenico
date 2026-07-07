// Import necessary components and functions from react-router-dom.
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import { Layout } from "./pages/Layout";
import Home from "./pages/Home"; // Importación por defecto corregida para tu nuevo Home.jsx
import { Single } from "./pages/Single";
import { Demo } from "./pages/Demo";

export const router = createBrowserRouter(
    createRoutesFromElements(
      // Root Route: All navigation will start from here.
      <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>} >

        {/* Ruta Principal: Tu nuevo panel de control inteligente con el copiloto de voz */}
        <Route path="/" element={<Home />} />
        
        {/* Rutas heredadas del boilerplate (puedes borrarlas si no las usas) */}
        <Route path="/single/:theId" element={<Single />} />  
        <Route path="/demo" element={<Demo />} />
      </Route>
    )
);