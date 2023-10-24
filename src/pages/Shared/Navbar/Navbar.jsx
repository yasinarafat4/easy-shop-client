import { useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsMoonStars, BsSun } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import ProfileDropdown from "../../../components/ProfileDropdown";
import useAuth from "../../../hooks/useAuth";

const Navbar = () => {
  // States
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [theme, setTheme] = useState("light");
  const [navbarVisible, setNavbarVisible] = useState(true);

  const { user } = useAuth();

  // Menu toggle functionality
  const onToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Dark Or Light Mood effect
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // Dark Or Light Mood handler
  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    setIsDarkMode(!isDarkMode);
  };

  // Scroll event handler
  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY === 0;
      setNavbarVisible(isTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Navbar container */}
      <div
        className={`lg:fixed lg:w-full lg:transition-transform duration-300 z-50 ${
          navbarVisible ? "lg:translate-y-0" : "lg:translate-y-0"
        }`}
      >
        <div className="flex justify-between items-center px-3 py-2 md:px-8 md:py-4 bg-indigo-800 dark:bg-slate-800">
          <Link to="/">
            <h1 className="text-3xl font-bold text-white">
              Easy <span className="text-orange-500">Shop</span>
            </h1>
          </Link>
          <div
            className={`absolute lg:static bg-indigo-800 dark:bg-slate-800 lg:bg-transparent lg:dark:bg-transparent dark:text-white min-h-[60vh] lg:min-h-fit left-0 ${
              menuOpen ? "top-[11%] md:top-[15%]" : "top-[-100%]"
            } w-full lg:w-auto flex items-center py-4 px-5 duration-700 z-10`}
          >
            <div className="flex lg:flex-row flex-col lg:items-center gap-[3vw] lg:gap-[2vw] xl:gap-[3vw] text-lg">
              <NavLink
                to="/"
                onClick={() => setMenuOpen(!menuOpen)}
                className={({ isActive }) =>
                  isActive ? "text-white" : "text-slate-300 dark:text-slate-300"
                }
              >
                <p className="font-medium hover:duration-500">Home</p>
              </NavLink>
              <NavLink
                to="/allProducts"
                onClick={() => setMenuOpen(!menuOpen)}
                className={({ isActive }) =>
                  isActive ? "text-white" : "text-slate-300 dark:text-slate-300"
                }
              >
                <p className="font-medium hover:duration-500">AllProducts</p>
              </NavLink>
              <NavLink
                to="/about"
                onClick={() => setMenuOpen(!menuOpen)}
                className={({ isActive }) =>
                  isActive ? "text-white" : "text-slate-300 dark:text-slate-300"
                }
              >
                <p className="font-medium hover:duration-500">About Us</p>
              </NavLink>
              {user && (
                <Link title="My Cart" to="/myCart">
                  <p className="text-xl text-white dark:text-white hover:duration-500">
                    <AiOutlineShoppingCart />
                  </p>
                </Link>
              )}
            </div>
          </div>

          {/* Dark and Light Mode Container */}
          <div className="flex items-center gap-[1vw]">
            <div>
              {isDarkMode ? (
                <div className="text-xl" onClick={handleThemeSwitch}>
                  <BsSun
                    title="Make Light"
                    className="text-xl md:text-2xl cursor-pointer text-slate-300"
                  />
                </div>
              ) : (
                <div className="text-xl" onClick={handleThemeSwitch}>
                  <BsMoonStars
                    title="Make Dark"
                    className="text-xl md:text-2xl cursor-pointer text-slate-300"
                  />
                </div>
              )}
            </div>

            {/* conditional rendering for navbar view */}
            {user ? (
              <ProfileDropdown />
            ) : (
              <Link to="/login">
                <button className="bg-orange-500 hover:bg- text-white px-3 py-1 text-sm md:text-base font-semibold md:px-5 md:py-2 duration-500 rounded-full">
                  Login
                </button>
              </Link>
            )}

            {/* Menue icon for small devices */}
            {menuOpen ? (
              <IoMdClose
                onClick={onToggleMenu}
                className="text-xl text-slate-300 md:text-2xl cursor-pointer lg:hidden"
              />
            ) : (
              <FiMenu
                onClick={onToggleMenu}
                className="text-xl text-slate-300 md:text-2xl cursor-pointer lg:hidden"
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
