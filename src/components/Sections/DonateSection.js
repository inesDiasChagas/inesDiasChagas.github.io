import React from "react";
import { useNavigate } from "react-router-dom";
import SectionWrapper from "./SectionWrapper";
import Button from "../Buttons/Button";
import { ButtonTypes } from "../../utils/types";

import "./DonateSection.css";

function DonateSection() {
  let navigate = useNavigate();

  const onClick = () => {
    navigate("/donate");
  };

  return (
    <SectionWrapper className='home-donation-container'>
      <h1 className='home-donation-element'>Gostas dos nossos Livros? </h1>
      <h2 className='home-donation-element'>
        Os nosso livros sao 100% gratis!
      </h2>
      <Button
        onClick={onClick}
        className='home-donation-element home-donation-button'
        buttonType={ButtonTypes.DefaultButton}
        label='Contribuir'
        type='button'
      ></Button>
    </SectionWrapper>
  );
}

export default DonateSection;
