import { useState } from "react";
import IconsContainer from "../components/containers/IconsContainer";
import ListContainer from "../components/containers/ListContainer";

import profiles from "../profiles.json";

import "./Home.css";

function Home() {
  const [selectedProfile, setSelectedProfile] = useState(profiles[0]);

  const onClick = () => {
    setSelectedProfile(profiles[1]);
  };

  return (
    <div className='grid-container'>
      <div className='container-name'>
        <span>INES CHAGAS</span>
      </div>
      <div className='container-question'>
        <span>Who Am I?</span>
      </div>
      <div className='container-answer'>
        <span>I am a </span>
        <span className='answer'>{selectedProfile.role}</span>
      </div>
      <div className='container-change-profile' onClick={onClick}>
        <span>Click Me</span>
      </div>
      <div className='container-info'>
        <ListContainer
          title={selectedProfile.container5.title}
          list={selectedProfile.container5.list}
        />
      </div>
      <div className='container-skills'>
        <IconsContainer
          title={selectedProfile.skills.title}
          icons={selectedProfile.skills.icons}
        ></IconsContainer>
      </div>
      <div className='container-projects'>
        <span>Projects</span>
      </div>
      <div className='container-contacts'>
        <IconsContainer
          icons={selectedProfile.contactsLink.icons}
          title={selectedProfile.contactsLink.title}
        />
      </div>
      <div className='container-info-link'>
        <IconsContainer
          icons={selectedProfile.infoLink.icons}
          title={selectedProfile.infoLink.title}
        />
      </div>
    </div>
  );
}

export default Home;
