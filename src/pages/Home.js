import { useState } from "react";
import IconsContainer from "../components/IconsContainer";

import htmlIcon from "../styles/icons/Html.png";
import cssIcon from "../styles/icons/Css.png";
import jsIcon from "../styles/icons/Js.png";
import reactIcon from "../styles/icons/React.png";
import linkedinIcon from "../styles/icons/LinkedIn.png";
import githubIcon from "../styles/icons/Github.png";

import "./Home.css";

const profiles = [
  {
    role: "Frontend Developer",
    skills: {
      title: "Skills",
      icons: [
        { name: "HTML", iconSrc: htmlIcon },
        { name: "CSS", iconSrc: cssIcon },
        { name: "Javascript", iconSrc: jsIcon },
        { name: "React Native", iconSrc: reactIcon },
      ],
    },
    contactsLink: {
      title: "Linkedin",
      icons: [{ name: "Linkedin", iconSrc: linkedinIcon }],
    },
    infoLink: {
      title: "GitHub",
      icons: [{ name: "GitHub", iconSrc: githubIcon }],
    },
  },
  {
    role: "Robotics WannaBe",
    skills: {
      title: "Skills",
      icons: [
        { name: "React Native", iconSrc: linkedinIcon },
        { name: "Javascript", iconSrc: linkedinIcon },
        { name: "HTML", iconSrc: linkedinIcon },
        { name: "CSS", iconSrc: linkedinIcon },
      ],
    },
    infoLink: {
      name: "GitHub",
      iconSrc: linkedinIcon,
    },
  },
  {
    role: "Artist",
    skills: {
      title: "Skills",
      icons: [
        { name: "React Native", iconSrc: linkedinIcon },
        { name: "Javascript", iconSrc: linkedinIcon },
        { name: "HTML", iconSrc: linkedinIcon },
        { name: "CSS", iconSrc: linkedinIcon },
      ],
    },
    infoLink: {
      name: "GitHub",
      iconSrc: linkedinIcon,
    },
  },
];

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
        <span>Experiences</span>
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
