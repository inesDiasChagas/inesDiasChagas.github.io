import React from "react";
import Grid from "../components/Grids/Grid";
import NavbarWrapper from "../components/Navbar/NavbarWrapper";
import SectionWrapper from "../components/Sections/SectionWrapper";
import Button from "../components/Buttons/Button";
import data from "../homeMockData.json";

import "./Home.css";
import { ButtonTypes } from "../utils/types";

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
      <SectionWrapper className='home-donation-container'>
        <h1 className='home-donation-element'>Gosta dos nossos Livros? </h1>
        <h2 className='home-donation-element'>
          Os nosso livros sao 100% gratis!
        </h2>
        <Button
          className='home-donation-element home-donation-button'
          buttonType={ButtonTypes.DefaultButton}
          label='Contribuir'
          type='button'
        ></Button>
      </SectionWrapper>
    </React.Fragment>
  );
}

export default Home;
