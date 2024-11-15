import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import logout from "../assets/logout.svg";
import user from "../assets/user.svg";
import Navbar from "./Navbar";
import { MdMenu, MdClose } from "react-icons/md";
import { FaOpencart } from "react-icons/fa";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const toggleMenu = () => setMenuOpened(!menuOpened);

  return (
    <header className="fixed top-0 left-0 w-full bg-white ring-1 ring-slate-900/5 z-10">
      <div className="px-4 flex items-center justify-between py-3 max-xs:px-2">
        {/* Logo */}
        <div>
          <Link to="/">
            <img src={logo} alt="Logo" height={66} width={88} />
          </Link>
        </div>

        {/* Centered Navbar for desktop */}
        <Navbar containerStyles={"hidden md:flex gap-x-5 xl:gap-x-10 medium-15"} />

        {/* Mobile Navbar Menu */}
        <Navbar
          containerStyles={`${menuOpened 
            ? "flex flex-col gap-y-12 fixed top-20 right-0 p-12 bg-white rounded-3xl shadow-md w-64 ring-1 ring-slate-900/5 transition-all duration-300"
            : "fixed top-20 -right-[100%] p-12 bg-white rounded-3xl shadow-md w-64 ring-1 ring-slate-900/5 transition-all duration-300"
          }`}
        />

        {/* Buttons */}
        <div className="flexBetween sm:gap-x-2 bold-16">
          {/* Menu Toggle Button */}
          {!menuOpened ? (
            <MdMenu 
              className="md:hidden cursor-pointer hover:text-secondary mr-2 p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-full"
              onClick={toggleMenu}
            />
          ) : (
            <MdClose 
              className="md:hidden cursor-pointer hover:text-secondary mr-2 p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-full"
              onClick={toggleMenu} 
            />
          )}

          {/* Cart Button */}
          <NavLink to={"cart-page"} className={"flex"}>
          <FaOpencart 
  className="p-1 h-8 w-8 ring-slate-900/30 ring-1 rounded-full text-red-500" 
/>

            <span className="relative flexCenter w-5 h-5 rounded-full bg-secondary text-white medium-14 -top-2">0</span>
          </NavLink>

          {/* Logout Button */}
          <NavLink to={'logout'} className={"btn_secondary_rounded text-black flexCenter gap-x-2 medium-16"}>
            <img src={logout} alt="logoutIcon" height={45} width={45} />Logout
          </NavLink>

          {/* Login Button */}
          <NavLink to={'login'} className={"btn_secondary_rounded flexCenter text-black gap-x-2 medium-16"}>
            <img src={user} alt="userIcon" height={45} width={45} />Login
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default Header;
