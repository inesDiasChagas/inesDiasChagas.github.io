import "./Home.css";

function Home() {
  return (
    <div className='grid-container'>
      <div className='container-name'>
        <span>INES CHAGAS</span>
      </div>
      <div className='container-question'>
        <span>Who Am I?</span>
      </div>
      <div className='container-answer'>
        <span>I am a Frontend Developer</span>
      </div>
      <div className='container-change-profile'>
        <span>Click Me</span>
      </div>
      <div className='container-info'>
        <span>Experiences</span>
      </div>
      <div className='container-skills'>
        <span>Skills</span>
      </div>
      <div className='container-projects'>
        <span>Projects</span>
      </div>
      <div className='container-contacts'>
        <span>Contact Me</span>
      </div>
      <div className='container-info-link'>
        <span>GitHub</span>
      </div>
    </div>
  );
}

export default Home;
