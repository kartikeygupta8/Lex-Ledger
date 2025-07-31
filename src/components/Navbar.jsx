import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button.jsx';
import AuthDropdown from './AuthDropdown';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isDashboardRoute = location.pathname.startsWith('/dashboard');

  const handleGetStarted = () => {
    sessionStorage.removeItem("serviceId");
    sessionStorage.removeItem("serviceCategoryId");
    sessionStorage.removeItem("bookingStep");
  };

  const handleLogout = () => {
    sessionStorage.clear();
    navigate('/');
  };

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-40">
      <div className={`${isDashboardRoute?"max-w-8xl":"max-w-7xl"} mx-auto px-6 py-4`}>
        <div className="flex justify-between items-center">
          {/* Left Side Logo */}
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2 text-2xl font-semibold text-gray-900 hover:text-blue-600 transition-colors">
              <img src="/logo.png" alt="Lex&Ledger Logo" className="h-10 w-auto" />
              Lex&Ledger
            </Link>
          </div>

          {/* Right Side Content */}
          <nav className="hidden md:flex items-center gap-6">
            {/* Always Visible Links */}
            <Link
              to="/"
              className={`text-gray-600 hover:text-blue-600 transition-colors ${location.pathname === '/' ? 'text-blue-600 font-medium' : ''}`}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={`text-gray-600 hover:text-blue-600 transition-colors ${location.pathname.includes('/services') ? 'text-blue-600 font-medium' : ''}`}
            >
              Services
            </Link>
            <Link
              to="/bundles"
              className={`text-gray-600 hover:text-blue-600 transition-colors ${location.pathname.includes('/bundles') ? 'text-blue-600 font-medium' : ''}`}
            >
              Bundles
            </Link>
            <Link
              to="/blog"
              className={`text-gray-600 hover:text-blue-600 transition-colors ${location.pathname.includes('/blog') ? 'text-blue-600 font-medium' : ''}`}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className={`text-gray-600 hover:text-blue-600 transition-colors ${location.pathname.includes('/contact') ? 'text-blue-600 font-medium' : ''}`}
            >
              Contact
            </Link>

            {/* Highlighted Button */}
            <Link
              to="/immediate-service"
              className={`${location.pathname === '/immediate-service' ? 'text-blue-600 font-medium' : ''} bg-red-100 text-red-600 px-4 py-2 rounded-full shadow-sm font-semibold hover:bg-red-200 transition`}
            >
              Immediate – 10 min
            </Link>

            {/* Auth / Logout Logic */}
            {!isDashboardRoute ? (
              <>
                <Link to="/getStarted">
                  <Button
                    onClick={handleGetStarted}
                    className="bg-blue-600 cursor-pointer hover:bg-blue-700 px-6 py-1 rounded-full font-bold shadow-lg transition-transform hover:scale-105"
                  >
                    Get Started
                  </Button>
                </Link>
                <AuthDropdown />
              </>
            ) : (
              <Button
                onClick={handleLogout}
                className="bg-red-600 text-white hover:bg-red-700 px-6 py-1 rounded-full font-bold shadow-lg transition-transform hover:scale-105"
              >
                Logout
              </Button>
            )}
          </nav>

          {/* Optional mobile menu icon */}
          <div className="md:hidden">
            {/* You can add mobile dropdown toggle here if needed */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
