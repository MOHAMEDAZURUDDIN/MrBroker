import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HeroLogo from "../assets/heroLogo.png";
import { Link, useNavigate } from "react-router-dom";
import DarkModeBtn from "../components/utils/DarkModeBtn";
import { logOut } from "../actions/userActions";

const Header = () => {
  const [navState, setNavState] = useState(false);
  const [isDropdownOpen, setDropDownOpen] = useState(false);
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.authState);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropDownOpen(!isDropdownOpen);
  };

  const logOutHandler = () => {
    dispatch(logOut);
  };

  const onNavScroll = () => {
    if (window.scrollY > 30) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onNavScroll);
    return () => {
      window.removeEventListener("scroll", onNavScroll);
    };
  }, []);

  return (
    <header
      className={`${
        !navState
          ? "absolute left-0 right-0 opacity-100 z-50"
          : "fixed top-0 left-0 right-0 h-[9vh] flex items-center justify-center opacity-100 z-[110] blur-effect-theme"
      }`}
    >
      <nav className="font-montserrat flex items-center justify-between bookie-container">
        <div className="flex items-center">
          <Link to="/">
            <img
              src={HeroLogo}
              alt="logo/img"
              className={`w-20 h-auto ${
                navState && "filter brightness-0"
              } hover:scale-105 duration-300`}
            />
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          {isAuthenticated ? (
            <div className="relative">
              <button className="flex items-center " onClick={toggleDropdown}>
                <img
                  src={user.avatar ?? "/images/default_avatar.png"}
                  alt="User/Avatar"
                  className="w-10 h-10 rounded object-cover"
                />
                <span
                  className={`ml-2 font-semibold hidden ${
                    navState ? "text-emerald-800" : "text-teal-500"
                  } lg:block`}
                >
                  {user.name}
                </span>
              </button>
              {isDropdownOpen && (
                <ul className=" absolute right-0 w-32 mt-2 bg-white rounded shadow-xl z-10">
                  <li>
                    <button
                      onClick={() => {
                        navigate("");
                        toggleDropdown();
                      }}
                      className="block p-2 font-semibold text-stone-900 hover:bg-blue-950 hover:rounded hover:scale-105 duration-300 hover:text-white focus:outline-none"
                    >
                      Dashboard
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        logOutHandler();
                        toggleDropdown();
                      }}
                      className="block p-2 font-semibold text-stone-900 hover:bg-blue-950 hover:text-red-500 hover:rounded hover:scale-105 duration-300 focus:outline-none"
                    >
                      LogOut
                    </button>
                  </li>
                </ul>
              )}
            </div>
          ) : (
            <Link
              to="/login"
              id="login_btn"
              className={`bg-slate-900 text-white-400 text-xl px-5 py-2 rounded shadow-md shadow-blue-900 font-bold hover:bg-black hover:scale-105 duration-300 ${navState}`}
            >
              Lo<span className="text-yellow-500">g</span>in
            </Link>
          )}
          <DarkModeBtn />
        </div>
      </nav>
    </header>
  );
};

export default Header;
