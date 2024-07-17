import React from "react";
import Navbar from "../components/Navbar";

import "./Home.css";

function Home() {
  return (
    <div className='home-container'>
      <Navbar />
      <div className='home-content'>
        <h1>Pagina Inicial</h1>
        <p>Conteúdo da seção...</p>
      </div>
    </div>
  );
}

export default Home;
