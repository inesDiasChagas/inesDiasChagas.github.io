import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

import "./MobileNavbar.css";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    closeMenu();
  }, [location]);

  return (
    <div>
      <div className='sandwich-menu' onClick={toggleMenu}>
        <div className='toggle-label'>
          <div className='bars'>
            <span className='bar'></span>
            <span className='bar'></span>
            <span className='bar'></span>
          </div>
        </div>
      </div>
      <div className={`overlay ${isOpen ? "open" : ""}`} onClick={closeMenu}>
        <ul className='menu' ref={menuRef} onClick={(e) => e.stopPropagation()}>
          <li>
            <Link to='/' onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to='/livros' onClick={closeMenu}>
              Livros
            </Link>
          </li>
          <li>
            <Link to='/donate' onClick={closeMenu}>
              Doações
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileNavbar;
