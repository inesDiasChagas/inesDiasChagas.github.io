import React from "react";
import NavbarWrapper from "../components/Navbar/NavbarWrapper";
import SectionWrapper from "../components/Sections/SectionWrapper";
import DonationForm from "../components/Forms/DonationForm";

import "./DonationPage.css";

function DonationPage() {
  return (
    <React.Fragment>
      <div className='donate-header-container'>
        <NavbarWrapper />
        <SectionWrapper className='donate-header-content-container'>
          <h1>Doacoes</h1>
        </SectionWrapper>
      </div>
      <SectionWrapper className='books-content-container'>
        <h1 className='donate-element'>Faça uma Doação</h1>
        <DonationForm />
      </SectionWrapper>
    </React.Fragment>
  );
}

export default DonationPage;
