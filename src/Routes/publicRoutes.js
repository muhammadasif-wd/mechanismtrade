// import Header from "../Components/Header/Header";
import About from "../Pages/About/About";
import Home from "../Pages/Home/Home";
// import Products from "../Pages/Products/Products";
import Projects from "../Pages/Projects/Projects";
import Services from "../Pages/Services/Services";

const publicRoutes = [
  { path: "/", Component: Home },
  { path: "/about", Component: About },
  { path: "/services", Component: Services },
  // { path: "/products", Component: Products },
  { path: "/projects", Component: Projects },
  // { path: "/navbar", Component: Header }
];
export default publicRoutes;
