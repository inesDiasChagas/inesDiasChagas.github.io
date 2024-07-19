import React from "react";
import NavbarWrapper from "../components/Navbar/NavbarWrapper";
import SectionWrapper from "../components/Sections/SectionWrapper";
import data from "../booksData.json";
import Grid from "../components/Grids/Grid";

import "./Books.css";

function Books() {
  return (
    <React.Fragment>
      <SectionWrapper className='books-container'>
        <NavbarWrapper />
        <h1>Todos os Livros</h1>
      </SectionWrapper>
      {data.sections.map((section, index) => (
        <SectionWrapper key={index} className='books-content-container'>
          <h1>{section.title}</h1>
          <Grid data={{ ...section, allBooks: data.books }} />
        </SectionWrapper>
      ))}
    </React.Fragment>
  );
}

export default Books;
