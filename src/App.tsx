import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import OtherProjects from "./components/OtherProjects";
import ProfessionalExperience from "./components/ProfessionalExperience";
import Responsiveness from "./components/Responsiveness";
import SocialMedias from "./components/SocialMedias";
import TechnologiesCarousel from "./components/TechnologiesCarousel";

import "./App.css";

function App() {
  return (
    <>
      <AboutMe />
      <SocialMedias />
      <Education />
      <TechnologiesCarousel />
      <ProfessionalExperience />
      <Responsiveness />
      <OtherProjects />
    </>
  );
}

export default App;
