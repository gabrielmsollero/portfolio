import RedirectIcon from "./Utils/Icons/RedirectIcon";
import Timeline, { TimelineItem } from "./Utils/Timeline";

import altaLogo from "../assets/alta.webp";
import electricfishLogo from "../assets/electricfish.webp";
import kyrosLogo from "../assets/kyros.webp";

import classes from "./ProfessionalExperience.module.css";

const timeLineItems: TimelineItem[] = [
  {
    imageSrc: electricfishLogo,
    dateText: "Dec 21 - Today",
    content: (
      <>
        <h2>
          ElectricFish Energy&nbsp;
          <RedirectIcon href="https://www.electricfish.co/" />
        </h2>
        <ul className={classes.jobBulletPoints}>
          <li>
            Created Reef API and Reef Platform - web apps for live monitoring of
            micro-grids and EV chargers.
          </li>
          <li>Developed the UI/UX of an unattended EV charger.</li>
          <li>
            Enabled data visualization for the whole company instead of only
            technical team.
          </li>
          <li>
            Participated actively of the development of the MVP that awarded the
            company its first big fundings.
          </li>
        </ul>
      </>
    ),
  },
  {
    imageSrc: kyrosLogo,
    dateText: "Oct 23 - Today",
    content: (
      <>
        <h2>
          Kyros Technology&nbsp;
          <RedirectIcon href="https://www.kyros.com.br/" />
        </h2>
        <ul className={classes.jobBulletPoints}>
          <li>
            Participated on the maintenance and implementation of new features
            in the company's products.
          </li>
          <li>
            Acquired hands-on experience on projects with ASP.NET, Java, Spring,
            React, Angular and others.
          </li>
          <li>
            Found out what was like to work with software development on larger
            teams. My personal opinion - it's amazing!
          </li>
        </ul>
      </>
    ),
  },
  {
    imageSrc: altaLogo,
    dateText: "May 23 - Sep 23",
    content: (
      <>
        <h2>
          Alta Aerospace&nbsp;
          <RedirectIcon href="https://www.altaaerospace.com.br/" />
        </h2>
        <ul className={classes.jobBulletPoints}>
          <li>
            Created Dronesoft - a web app for managing field services in farms.
          </li>
          <li>
            Had my first experience with geographical data parsing using GeoJSON
            and{" "}
            <a href="https://kepler.gl/" target="_blank">
              Kepler.gl
            </a>
            .
          </li>
        </ul>
      </>
    ),
  },
];

export default function ProfessionalExprience() {
  return (
    <section id="professional-experiences">
      <div className={classes.content}>
        <h1>Professional Experiences 💻</h1>
        <Timeline items={timeLineItems} />
      </div>
    </section>
  );
}
