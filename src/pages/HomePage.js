import React from "react";
import Grid from "../components/Grids/Grid";
import NavbarWrapper from "../components/Navbar/NavbarWrapper";
import SectionWrapper from "../components/Sections/SectionWrapper";
import DonateSection from "../components/Sections/DonateSection";
import data from "../homeMockData.json";

import "./HomePage.css";

function HomePage() {
  return (
    <React.Fragment>
      <div className='home-header-container'>
        <NavbarWrapper />
        <SectionWrapper className='home-header-content-container'>
          <p>Bem Vindo</p>
          <h1>Estúdio de Escrita</h1>
        </SectionWrapper>
      </div>
      {data.sections.map((section, index) => (
        <SectionWrapper key={index} className='home-content-container'>
          <h1 className='home-title-container'>{section.title}</h1>
          <Grid data={{ ...section, allBooks: data.books }} />
        </SectionWrapper>
      ))}
      <DonateSection />
    </React.Fragment>
  );
}

export default HomePage;
