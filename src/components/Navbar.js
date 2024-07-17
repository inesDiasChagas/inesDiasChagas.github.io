// Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className='navbar'>
      <ul>
        <li>
          <Link className='nav-default' to='/'>
            Home
          </Link>
        </li>
        <li>
          <Link className='nav-default' to='/books'>
            Livros
          </Link>
        </li>
        <li>
          <Link className='nav-default nav-highlight' to='/donate'>
            Doação
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
