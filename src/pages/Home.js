import React from "react";
import Grid from "../components/Grid";
import NavbarWrapper from "../components/Navbar/NavbarWrapper";
import SectionWrapper from "../components/Sections/SectionWrapper";
import bookCover from "../styles/images/BookCover.png";
import plusIcon from "../styles/icons/plus.png";

import "./Home.css";

function Home() {
  const data = {
    books: [
      {
        title: "Card 1",
        description: "Descrição do Card 1",
        imageUrl: bookCover,
      },
      {
        title: "Card 2",
        description: "Descrição do Card 2",
        imageUrl: bookCover,
      },
      {
        title: "Card 3",
        description: "Descrição do Card 3",
        imageUrl: bookCover,
      },
      {
        title: "Card 3",
        description: "Descrição do Card 3",
        imageUrl: bookCover,
      },
    ],
    viewAll: {
      title: "View More",
      imageUrl: plusIcon,
    },
  };
  return (
    <React.Fragment>
      <SectionWrapper className='home-container'>
        <NavbarWrapper />
        <p>Bem Vindo</p>
        <h1>Studio</h1>
      </SectionWrapper>
      <SectionWrapper className='home-content-container'>
        <h1>Novidades</h1>
        <Grid data={data} />
      </SectionWrapper>
      <SectionWrapper className='footer'>
        <h1>Footer</h1>
        <p>This is the footer</p>
      </SectionWrapper>
    </React.Fragment>
  );
}

export default Home;
