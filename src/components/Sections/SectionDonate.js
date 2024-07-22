import React from "react";
import SectionWrapper from "./SectionWrapper";
import Button from "../Buttons/Button";
import { ButtonTypes } from "../../utils/types";

import "./SectionDonate.css";

function SectionDonate() {
  return (
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
  );
}

export default SectionDonate;
