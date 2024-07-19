import React from "react";
import Grid from "../components/Grids/Grid";
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
        <h1>Estúdio de Escrita</h1>
      </SectionWrapper>
      {data.sections.map((section, index) => (
        <SectionWrapper key={index} className='home-content-container'>
          <h1 className='home-title-container'>{section.title}</h1>
          <Grid data={{ ...section, allBooks: data.books }} />
        </SectionWrapper>
      ))}
      <SectionWrapper className='home-donation-container'>
        <NavbarWrapper />
        <h1>Gosta dos nossos Livros? </h1>
        <h2>Os nosso livros sao 100% gratis!</h2>
      </SectionWrapper>
    </React.Fragment>
  );
}

export default Home;
