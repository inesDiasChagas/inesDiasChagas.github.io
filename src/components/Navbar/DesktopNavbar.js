import React from "react";
import { NavLink } from "react-router-dom";
import "./DesktopNavbar.css";

function DesktopNavbar({ className }) {
  const combinedClassName = `navbar ${className}`;

  return (
    <nav className={combinedClassName}>
      <ul>
        <li>
          <NavLink
            className={(navData) =>
              navData.isActive ? "nav-default nav-active" : "nav-default"
            }
            to='/'
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(navData) =>
              navData.isActive ? "nav-default nav-active" : "nav-default"
            }
            activeClassName='nav-active'
            to='/livros'
          >
            Livros
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(navData) =>
              navData.isActive ? "nav-default nav-active" : "nav-default"
            }
            activeClassName='nav-active'
            to='/donate'
          >
            Doações
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default DesktopNavbar;
