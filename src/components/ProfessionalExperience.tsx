import { useContext } from "react";

import RedirectIcon from "./Utils/Icons/RedirectIcon";
import Timeline from "./Utils/Timeline";
import { TimelineItemType } from "./Utils/Timeline/TimelineItem";

import { LangContext } from "../store/lang-context";

import altaLogo from "../assets/alta.webp";
import electricfishLogo from "../assets/electricfish.webp";
import kyrosLogo from "../assets/kyros.webp";

import classes from "./ProfessionalExperience.module.css";

export default function ProfessionalExprience() {
  const ctx = useContext(LangContext);

  const timeLineItems: TimelineItemType[] = [
    {
      imageSrc: electricfishLogo,
      dateText: ctx!.lang === "pt" ? "Dez 21 - Hoje" : "Dec 21 - Today",
      content: (
        <>
          <h2>
            ElectricFish Energy&nbsp;
            <RedirectIcon href="https://www.electricfish.co/" />
          </h2>
          <ul className={classes.jobBulletPoints}>
            {ctx!.lang === "pt" ? (
              <>
                <li>
                  Criei as ferramentas Reef API e Reef Platform - aplicativos{" "}
                  web para monitoramento ao vivo de microrgrids e carregadores{" "}
                  de veículos elétricos.
                </li>
                <li>
                  Desenvolvi a UI/UX de um carregador de veículos elétricos de{" "}
                  auto serviço.
                </li>
                <li>
                  Habilitei a visualização de dados para toda a empresa, ao{" "}
                  invés de somente equipe técnica.
                </li>
                <li>
                  Participei ativamente do desenvolvimento do MVP que concedeu à{" "}
                  empresa seus primeiros grandes financiamentos.
                </li>
              </>
            ) : (
              <>
                <li>
                  Created Reef API and Reef Platform - web apps for live{" "}
                  monitoring of micro-grids and EV chargers.
                </li>
                <li>Developed the UI/UX of an unattended EV charger.</li>
                <li>
                  Enabled data visualization for the whole company instead of{" "}
                  only technical team.
                </li>
                <li>
                  Participated actively of the development of the MVP that{" "}
                  awarded the company its first big fundings.
                </li>
              </>
            )}
          </ul>
        </>
      ),
    },
    {
      imageSrc: kyrosLogo,
      dateText: ctx!.lang === "pt" ? "Out 23 - Hoje" : "Oct 23 - Today",
      content: (
        <>
          <h2>
            Kyros Technology&nbsp;
            <RedirectIcon href="https://www.kyros.com.br/" />
          </h2>
          <ul className={classes.jobBulletPoints}>
            {ctx!.lang === "pt" ? (
              <>
                <li>
                  Participei da manutenção e implementação de novas{" "}
                  funcionalidades nos produtos da empresa.
                </li>
                <li>
                  Adquiri experiência prática em projetos com ASP.NET, Java,{" "}
                  Spring, React, Angular e outros.
                </li>
                <li>
                  Descobri como é trabalhar com desenvolvimento de software em{" "}
                  equipes maiores. Minha opinião pessoal - é incrível!
                </li>
              </>
            ) : (
              <>
                <li>
                  Participated on the maintenance and implementation of new{" "}
                  features in the company's products.
                </li>
                <li>
                  Acquired hands-on experience on projects with ASP.NET, Java,{" "}
                  Spring, React, Angular and others.
                </li>
                <li>
                  Found out what was like to work with software development on{" "}
                  larger teams. My personal opinion - it's amazing!
                </li>
              </>
            )}
          </ul>
        </>
      ),
    },
    {
      imageSrc: altaLogo,
      dateText: ctx!.lang === "pt" ? "Mai 23 - Set 23" : "May 23 - Sep 23",
      content: (
        <>
          <h2>
            Alta Aerospace&nbsp;
            <RedirectIcon href="https://www.altaaerospace.com.br/" />
          </h2>
          <ul className={classes.jobBulletPoints}>
            {ctx!.lang === "pt" ? (
              <>
                <li>
                  Criei o Dronesoft - um aplicativo web para gerenciar serviços{" "}
                  de campo em fazendas.
                </li>
                <li>
                  Tive minha primeira experiência com análise de dados{" "}
                  geográficos usando GeoJSON e{" "}
                  <a href="https://kepler.gl/" target="_blank">
                    Kepler.gl
                  </a>
                  .
                </li>
              </>
            ) : (
              <>
                <li>
                  Created Dronesoft - a web app for managing field services in{" "}
                  farms.
                </li>
                <li>
                  Had my first experience with geographical data parsing using{" "}
                  GeoJSON and{" "}
                  <a href="https://kepler.gl/" target="_blank">
                    Kepler.gl
                  </a>
                  .
                </li>
              </>
            )}
          </ul>
        </>
      ),
    },
  ];
  return (
    <section id="professional-experiences">
      <div className={classes.content}>
        <h1>{ctx!.lang === "pt" ? ("Experiências Profissionais 💻") : ("Professional Experiences 💻")}</h1>
        <Timeline items={timeLineItems} />
      </div>
    </section>
  );
}
