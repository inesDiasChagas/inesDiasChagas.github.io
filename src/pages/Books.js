import React from "react";
import NavbarWrapper from "../components/Navbar/NavbarWrapper";
import SectionWrapper from "../components/Sections/SectionWrapper";

import "./Books.css";

function Books() {
  return (
    <SectionWrapper className='books-container'>
      <NavbarWrapper />
      <h1>Livros</h1>
      <p>Conteúdo da seção...</p>
    </SectionWrapper>
  );
}

export default Books;
