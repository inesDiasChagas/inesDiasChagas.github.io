import React from "react";
import Grid from "../components/Grids/Grid";
import NavbarWrapper from "../components/Navbar/NavbarWrapper";
import SectionWrapper from "../components/Sections/SectionWrapper";
import SectionDonate from "../components/Sections/SectionDonate";
import data from "../homeMockData.json";

import "./Home.css";

function Home() {
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
      <SectionDonate />
    </React.Fragment>
  );
}

export default Home;
