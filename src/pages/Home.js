import React from "react";
import Grid from "../components/Grid";
import NavbarWrapper from "../components/Navbar/NavbarWrapper";
import SectionWrapper from "../components/Sections/SectionWrapper";
import data from "../homeData.json";

import "./Home.css";

function Home() {
  return (
    <React.Fragment>
      <SectionWrapper className='home-container'>
        <NavbarWrapper />
        <p>Bem Vindo</p>
        <h1>Studio</h1>
      </SectionWrapper>
      {data.sections.map((section, index) => (
        <SectionWrapper key={index} className='home-content-container'>
          <h1 className='home-title-container'>{section.title}</h1>
          <Grid data={{ ...section, allBooks: data.books }} />
        </SectionWrapper>
      ))}
    </React.Fragment>
  );
}

export default Home;
