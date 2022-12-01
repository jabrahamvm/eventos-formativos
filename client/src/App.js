// Import router for multiple pages
// npm add react-router-dom
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet, // Any page we want between header and footer
} from "react-router-dom";

// Import react files so that it loads entire page
import TodosEventos from "./pages/TodosEventos"
import DetalleEvento from "./pages/DetalleEvento"
import TodasSolicitudes from "./pages/TodasSolicitudes"
import DetalleSolicitud from "./pages/DetalleSolicitud"
import FormCrearSolicitud from "./pages/FormCrearSolicitud"
import FormInscripcionEvento from "./pages/FormInscripcionEvento"
import FormRetro from "./pages/VerRetro"

// Components on seperate folder
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

// Import css file
import "./style.scss"
import CompCrearEvento from "./pages/CrearEvento";
import NotFound from "./pages/NotFound";
import TodosMisEventos from "./pages/misEventos";

// A Base for all pages on our site
const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet/>
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    // Add Base to all these pages
    children: [
      {
        path: "/",
        element: <TodosEventos/>
      },
      {
        path: "Usuario/:idUsuario/DetalleEvento/:idEvento",
        element: <DetalleEvento/>
      },
      {
        path: "/TodasSolicitudes/:idUsuario",
        element: <TodasSolicitudes/>
      },
      {
        path: "Usuario/:idUsuario/DetalleSolicitud/:idSolicitud",
        element: <DetalleSolicitud/>
      },
      {
        path: "/CrearSolicitud",
        element: <FormCrearSolicitud/>
      },
      {
        path: "/InscripcionEvento",
        element: <FormInscripcionEvento/>
      },
      {
        path: "/CrearRetroalimentacion",
        element: <FormRetro/>
      },
      {
        path:"/EventosInscritos/:id",
        element: <TodosMisEventos />
      },
      {
        path:"/solicitudes/:idSolicitud/retro/",
        element: <TodosMisEventos />
      },
      {
        path: "*",
        element: <NotFound />
      },
      {
        path: "/usuario/:idResponsable/crearEvento/",
        element: <CompCrearEvento />
      }
    ]
  },
]);

// npm add sass for styling
// Add commonnames for styling
function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router}/>
      </div>
    </div>
  );
}

export default App;
