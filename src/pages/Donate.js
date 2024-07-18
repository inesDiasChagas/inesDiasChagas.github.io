import React from "react";
import NavbarWrapper from "../components/Navbar/NavbarWrapper";
import SectionWrapper from "../components/Sections/SectionWrapper";

import "./Donate.css";

function Donate() {
  return (
    <SectionWrapper className='donate-container'>
      <NavbarWrapper />
      <h1>Doações</h1>
      <p>Conteúdo da seção...</p>
    </SectionWrapper>
  );
}

export default Donate;
