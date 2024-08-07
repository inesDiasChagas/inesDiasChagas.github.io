import React from "react";
import NavbarWrapper from "../components/Navbar/NavbarWrapper";
import SectionWrapper from "../components/Sections/SectionWrapper";
import data from "../booksMockData.json";
import Grid from "../components/Grids/Grid";
import DonateSection from "../components/Sections/DonateSection";

import "./AllBooksPage.css";

function AllBooksPage() {
  return (
    <React.Fragment>
      <div className='books-header-container'>
        <NavbarWrapper />
        <SectionWrapper className='books-header-content-container'>
          <h1>Todos os Livros</h1>
        </SectionWrapper>
      </div>
      {data.sections.map((section, index) => (
        <SectionWrapper key={index} className='books-content-container'>
          <h1 className='books-title-container'>{section.title}</h1>
          <Grid data={{ ...section, allBooks: data.books }} />
        </SectionWrapper>
      ))}
      <DonateSection />
    </React.Fragment>
  );
}

export default AllBooksPage;
