import React from "react";
import Navbar from "../components/Navbar";

import "./Books.css";

function Books() {
  return (
    <div className='books-container'>
      <Navbar />
      <div className='books-content'>
        <h1>Books</h1>
        <p>Conteúdo da seção...</p>
      </div>
    </div>
  );
}

export default Books;
