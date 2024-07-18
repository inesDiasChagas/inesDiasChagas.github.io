import React from "react";
import NavbarWrapper from "../components/Navbar/NavbarWrapper";

import "./Books.css";

function Books() {
  return (
    <div className='books-container'>
      <NavbarWrapper />
      <div className='books-content'>
        <h1>Books</h1>
        <p>Conteúdo da seção...</p>
      </div>
    </div>
  );
}

export default Books;
