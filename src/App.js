import { Route, Routes } from "react-router-dom";
import 'swiper/css';
import "swiper/css/bundle";
import publicRoutes from "./Routes/publicRoutes";
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";



function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        {publicRoutes.map(({ path, Component }, index) => (
          <Route key={index} path={path} element={<Component />} />
        ))}
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
