import React from "react";
import SectionWrapper from "./SectionWrapper";

import "./Footer.css";

function Footer() {
  const imageUrl = process.env.PUBLIC_URL + "/instagram.png";
  return (
    <SectionWrapper className='footer'>
      <img src={imageUrl} alt='instagram' className='icon-instagram' />
    </SectionWrapper>
  );
}

export default Footer;
