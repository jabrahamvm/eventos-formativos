// Import router for multiple pages
// npm add react-router-dom
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet, // Any page we want between header and footer
} from "react-router-dom";

// Import react files so that it loads entire page
import Register from "./pages/Register"
import Login from "./pages/Login"
import Home from "./pages/Home"
import Write from "./pages/Write"
import Single from "./pages/Single"

// Components on seperate folder
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

// Import css file
import "./style.scss"

// A Base for all pages on our site
const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
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
        element: <Home/>
      },
      {
        path: "/write",
        element: <Write/>,
      },
      {
        path: "/post/:id",
        element: <Single/>,
      },
    ]
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/login",
    element: <Login/>,
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
