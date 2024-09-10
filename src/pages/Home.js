import { useState } from "react";
import IconsContainer from "../components/containers/IconsContainer";
import ListContainer from "../components/containers/ListContainer";
import { ContainerType } from "../utils/types";

import profiles from "../profiles.json";

import "./Home.css";
import QuoteContainer from "../components/containers/QuoteContainer";

function Home() {
  const [selectedProfile, setSelectedProfile] = useState(profiles[0]);

  const renderContainer = (container) => {
    if (container.containerType === ContainerType.ICONS) {
      return (
        <IconsContainer
          title={container.title}
          icons={container.icons}
        ></IconsContainer>
      );
    }
    if (container.containerType === ContainerType.LIST) {
      return <ListContainer title={container.title} list={container.list} />;
    }
    if (container.containerType === ContainerType.QUOTE) {
      return <QuoteContainer quotes={container.quotes} />;
    } else {
      return <span>There was an error</span>;
    }
  };

  const onClick = () => {
    setSelectedProfile(profiles[1]);
  };

  return (
    <div className='grid-container'>
      <div className='container-name'>
        {renderContainer(selectedProfile.container1)}
      </div>
      <div className='container-question'>
        {renderContainer(selectedProfile.container2)}
      </div>
      <div className='container-answer'>
        {renderContainer(selectedProfile.container3)}
      </div>
      <div className='container-change-profile' onClick={onClick}>
        <span>Click Me</span>
      </div>
      <div className='container-info'>
        {renderContainer(selectedProfile.container5)}
      </div>
      <div className='container-skills'>
        {renderContainer(selectedProfile.container6)}
      </div>
      <div className='container-projects'>
        <span>Projects</span>
      </div>
      <div className='container-contacts'>
        {renderContainer(selectedProfile.container8)}
      </div>
      <div className='container-info-link'>
        {renderContainer(selectedProfile.container9)}
      </div>
    </div>
  );
}

export default Home;
