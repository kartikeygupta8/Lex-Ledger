import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button.jsx";
import AuthDropdown from "./AuthDropdown";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isDashboardRoute = location.pathname.startsWith("/dashboard");
const [isLoggedIn, setIsLoggedIn] = useState(false);

useEffect(() => {
  setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
}, [location.pathname]);

  const handleGetStarted = () => {
    sessionStorage.removeItem("serviceId");
    sessionStorage.removeItem("serviceCategoryId");
    sessionStorage.removeItem("bookingStep");
  };


const handleLogout = () => {
  sessionStorage.clear();
  localStorage.removeItem("isLoggedIn");
  setIsLoggedIn(false);
  navigate("/");
};

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-40">
  <div
    className={`${
      isDashboardRoute ? "max-w-8xl" : "max-w-7xl"
    } mx-auto px-6 py-4`}
  >
<div className="relative flex items-center justify-between">
      {/* LEFT - Logo */}
      <div className="flex items-center gap-4">
        <Link
          to="/"
          className="logo flex items-center gap-2 text-2xl font-semibold text-gray-900 hover:text-blue-600 transition-colors"
        >
             {!isDashboardRoute&&!isLoggedIn
      ? "Lex&Ledger"
      : "Lex&Ledger | Admin Portal"}

        </Link>
      </div>

      {/* CENTER - Navigation Links */}
  <nav className="hidden md:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
        <Link
          to="/"
          className={`text-gray-600 hover:text-blue-600 transition-colors ${
            location.pathname === "/" ? "text-blue-600 font-medium" : ""
          }`}
        >
          Home
        </Link>
        <Link
          to="/services"
          className={`text-gray-600 hover:text-blue-600 transition-colors ${
            location.pathname.includes("/services")
              ? "text-blue-600 font-medium"
              : ""
          }`}
        >
          Services
        </Link>
        <Link
          to="/bundles"
          className={`text-gray-600 hover:text-blue-600 transition-colors ${
            location.pathname.includes("/bundles")
              ? "text-blue-600 font-medium"
              : ""
          }`}
        >
          Bundles
        </Link>
        <Link
          to="/blog"
          className={`text-gray-600 hover:text-blue-600 transition-colors ${
            location.pathname.includes("/blog")
              ? "text-blue-600 font-medium"
              : ""
          }`}
        >
          Blog
        </Link>
        <Link
          to="/contact"
          className={`text-gray-600 hover:text-blue-600 transition-colors ${
            location.pathname.includes("/contact")
              ? "text-blue-600 font-medium"
              : ""
          }`}
        >
          Contact
        </Link>
      </nav>

      {/* RIGHT - Buttons */}
      <div className="flex flex-row gap-5 items-center">
        <Link
          to="/immediate-service"
          className={`${
            location.pathname === "/immediate-service"
              ? "text-blue-600 font-medium"
              : ""
          } bg-red-100 text-red-600 px-4 py-2 rounded-full shadow-sm font-semibold hover:bg-red-200 transition`}
        >
          Immediate – 10 min
        </Link>
{!isDashboardRoute ? (
  isLoggedIn ? (
    <Button
      onClick={handleLogout}
      className="bg-red-600 text-white hover:bg-red-700 px-6 py-1 rounded-full font-bold shadow-lg transition-transform hover:scale-105"
    >
      Logout
    </Button>
  ) : (
    <AuthDropdown />
  )
) : (
  <Button
    onClick={handleLogout}
    className="bg-red-600 text-white hover:bg-red-700 px-6 py-1 rounded-full font-bold shadow-lg transition-transform hover:scale-105"
  >
    Logout
  </Button>
)}

      
      </div>
    </div>
  </div>
</header>

  );
};

export default Navbar;
