import React from "react";
import NavbarWrapper from "../components/Navbar/NavbarWrapper";
import SectionWrapper from "../components/Sections/SectionWrapper";

import "./Home.css";

function Home() {
  return (
    <React.Fragment>
      <NavbarWrapper />
      <SectionWrapper className='home-container'>
        <h1>Pagina Inicial</h1>
        <p>Conteúdo da seção...</p>
      </SectionWrapper>
      <SectionWrapper>
        <h1>Welcome to Section 1</h1>
        <p>This is an example of using the SectionWrapper component.</p>
      </SectionWrapper>
      <SectionWrapper className='footer'>
        <h1>Footer</h1>
        <p>This is the footer</p>
      </SectionWrapper>
    </React.Fragment>
  );
}

export default Home;
