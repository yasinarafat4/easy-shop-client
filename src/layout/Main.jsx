import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import LoadingSpinner from "../pages/Shared/LoadingSpinner/LoadingSpinner";
import Navbar from "../pages/Shared/Navbar/Navbar";

const Main = () => {
  // Set loading spinner
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  if (loading) {
    return <LoadingSpinner />;
  }

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
