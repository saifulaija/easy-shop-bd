import { Outlet } from "react-router-dom";
import Header from "../shared/header/Header";
import Footer from "../shared/footer/Footer";

const Layout = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
