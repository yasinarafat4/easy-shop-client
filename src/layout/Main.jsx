import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-[calc(100vh-436px)] lg:pt-20">
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
