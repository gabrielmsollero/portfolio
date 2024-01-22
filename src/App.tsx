import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Header from "./components/Header";
// import OtherProjects from "./components/OtherProjects";
import ProfessionalExperience from "./components/ProfessionalExperience";
import Responsiveness from "./components/Responsiveness";
import SocialMedias from "./components/SocialMedias";
import Technologies from "./components/Technologies";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <AboutMe />
      <SocialMedias />
      <Education />
      <Technologies />
      <ProfessionalExperience />
      <Responsiveness />
      {/* <OtherProjects /> */}
    </>
  );
}

export default App;
