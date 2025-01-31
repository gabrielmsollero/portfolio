import { useContext } from 'react';

import RedirectIcon from './Utils/Icons/RedirectIcon';
import Timeline from './Utils/Timeline';
import { TimelineItemType } from './Utils/Timeline/TimelineItem';

import { LangContext } from '../store/lang-context';

import altaLogo from '../assets/alta.webp';
import electricfishLogo from '../assets/electricfish.webp';
import hartLogo from '../assets/hart.webp';
import kyrosLogo from '../assets/kyros.webp';
import thoughtfulLogo from '../assets/thoughtful.webp';

import classes from './ProfessionalExperience.module.css';

export default function ProfessionalExprience() {
  const ctx = useContext(LangContext);

  const timeLineItems: TimelineItemType[] = [
    {
      imageSrc: thoughtfulLogo,
      dateText: ctx!.lang === 'pt' ? 'Set 24 - Hoje' : 'Sep 24 - Today',
      content: (
        <>
          <h2>
            Thoughtful AI&nbsp;
            <RedirectIcon href="https://www.thoughtful.ai/" />
          </h2>
          <ul className={classes.jobBulletPoints}>
            {ctx!.lang === 'pt' ? (
              <>
                <li>Automação de processos com Python, IA e RPA</li>
                <li>
                  Tive a oportunidade de contribuir significativamente para o
                  projeto open-source{' '}
                  <a href="https://github.com/robocorp/rpaframework">
                    rpaframework
                  </a>{' '}
                  (Python)
                </li>
                <li>
                  Desenvolvi e trabalhei na sustentação de diversas automações
                  envolvendo plataformas de RCM da área da saúde
                </li>
                <li>
                  Desenvolvi de ponta a ponta um produto interno para
                  identificação de vulnerabilidades nas bibliotecas utilizadas
                  pelos agentes de IA (utilizando{' '}
                  <a href="https://snyk.io/">Snyk</a>), e criação de tickets
                  para facilitar e agilizar a eliminação destas.
                </li>
              </>
            ) : (
              <>
                <li>Process Automation with Python, AI, and RPA</li>
                <li>
                  Had the opportunity to make significant contributions to the
                  open-source project{' '}
                  <a href="https://github.com/robocorp/rpaframework">
                    rpaframework
                  </a>{' '}
                  (Python).
                </li>
                <li>
                  Developed and maintained several automation solutions
                  involving RCM platforms in the healthcare sector.
                </li>
                <li>
                  Designed and implemented an internal product from scratch to
                  identify vulnerabilities in the libraries used by AI agents
                  (leveraging <a href="https://snyk.io/">Snyk</a>), as well as
                  to create tickets to streamline and expedite their resolution.
                </li>
              </>
            )}
          </ul>
        </>
      ),
    },
    {
      imageSrc: electricfishLogo,
      dateText: ctx!.lang === 'pt' ? 'Dez 21 - Set 24' : 'Dec 21 - Sep 24',
      content: (
        <>
          <h2>
            ElectricFish Energy&nbsp;
            <RedirectIcon href="https://www.electricfish.co/" />
          </h2>
          <ul className={classes.jobBulletPoints}>
            {ctx!.lang === 'pt' ? (
              <>
                <li>
                  Criei as ferramentas Reef API e Reef Platform - aplicativos{' '}
                  web para monitoramento ao vivo de microrgrids e carregadores{' '}
                  de veículos elétricos.
                </li>
                <li>
                  Arquitetei e executei o projeto de um microsserviço OCPP para
                  integração entre a plataforma e as estações de carregamento.
                </li>
                <li>
                  Desenvolvi a UI/UX de um carregador de veículos elétricos de{' '}
                  auto serviço.
                </li>
                <li>
                  Possibilitei a visualização de dados para toda a empresa, ao{' '}
                  invés de somente equipe técnica.
                </li>
                <li>
                  Participei ativamente do desenvolvimento do MVP que concedeu à{' '}
                  empresa seus primeiros grandes financiamentos.
                </li>
                <li>
                  Aprendi sobre integração de sistemas e UX/UI conforme a
                  demanda, e fui capaz de vencer os desafios no caminho graças à
                  minha curiosidade e capacidade de solução de problemas.
                </li>
              </>
            ) : (
              <>
                <li>
                  Created Reef API and Reef Platform - web apps for live{' '}
                  monitoring of micro-grids and EV chargers.
                </li>
                <li>
                  Architected and executed the project of an OCPP microservice
                  for integration between Reef and the EV charging stations.
                </li>
                <li>Developed the UI/UX of an unattended EV charger.</li>
                <li>
                  Enabled data visualization for the whole company instead of{' '}
                  only technical team.
                </li>
                <li>
                  Participated actively of the development of the MVP that{' '}
                  awarded the company its first big fundings.
                </li>
                <li>
                  Learned about systems integration and UI/UX development on the
                  fly, and was able to handle the given challenges thanks to my
                  curiosity and problem solving mindset.
                </li>
              </>
            )}
          </ul>
        </>
      ),
    },
    {
      imageSrc: hartLogo,
      dateText: ctx!.lang === 'pt' ? 'Abr 24 - Hoje' : 'Apr 24 - Today',
      content: (
        <>
          <h2>
            Hart BR&nbsp;
            <RedirectIcon href="https://hartbr.com/" />
          </h2>
          <ul className={classes.jobBulletPoints}>
            {ctx!.lang === 'pt' ? (
              <>
                <li>
                  Design e desenvolvimento do front-end da aplicação ArpeggIO -
                  um web app para gerenciamento de equipamentos de proteção de
                  rede.
                </li>
                <li>
                  Graças aos updates visuais, as vendas da empresa aumentaram
                  significativamente, alcançando a CEMIG - uma das
                  concessionárias de energia mais conceituadas do Brasil.
                </li>
                <li>
                  Orquestrei e otimizei o processo de deployment - reduzi o
                  tempo de preparo do ambiente da ordem de horas para apenas 2
                  minutos.
                </li>
                <li>
                  Estabeleci uma cultura de Design Orientado a Testes (TDD) e
                  implementei testes unitários e E2E.
                </li>
              </>
            ) : (
              <>
                <li>
                  Design and development of the front-end of ArpeggIO
                  application - a web app for managing grid protection devices.
                </li>
                <li>
                  Thanks to the visual updates, the company sales were
                  significantly leveraged, being able to reach CEMIG - one of
                  the most esteemed power utility companies in Brazil.
                </li>
                <li>
                  Orchestration and optimization of the deployment process -
                  reduced the setup time from hours down to only 2 minutes.
                </li>
                <li>
                  Established Test-Driven Design culture and implemented unit
                  and E2E testing.
                </li>
              </>
            )}
          </ul>
        </>
      ),
    },
    {
      imageSrc: kyrosLogo,
      dateText: ctx!.lang === 'pt' ? 'Out 23 - Apr 24' : 'Oct 23 - Abr 24',
      content: (
        <>
          <h2>
            Kyros Technology&nbsp;
            <RedirectIcon href="https://www.kyros.com.br/" />
          </h2>
          <ul className={classes.jobBulletPoints}>
            {ctx!.lang === 'pt' ? (
              <>
                <li>
                  Participei da manutenção e implementação de novas{' '}
                  funcionalidades nos produtos da empresa.
                </li>
                <li>
                  Contribuí para a modernização do front end de diversas
                  aplicações, otimizando o onboarding de novos desenvolvedores e
                  a mantenabilidade.
                </li>
                <li>
                  Descobri como é trabalhar com desenvolvimento de software em{' '}
                  equipes maiores. Minha opinião pessoal - é incrível!
                </li>
              </>
            ) : (
              <>
                <li>
                  Participated on the maintenance and implementation of new{' '}
                  features in the company's products.
                </li>
                <li>
                  Contributed to the modernization of many applications,
                  optimizing the onboarding of new developers and
                  maintainability.
                </li>
                <li>
                  Found out what was like to work with software development on{' '}
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
      dateText: ctx!.lang === 'pt' ? 'Mai 23 - Set 23' : 'May 23 - Sep 23',
      content: (
        <>
          <h2>
            Alta Aerospace&nbsp;
            <RedirectIcon href="https://www.altaaerospace.com.br/" />
          </h2>
          <ul className={classes.jobBulletPoints}>
            {ctx!.lang === 'pt' ? (
              <>
                <li>
                  Criei o Dronesoft - um aplicativo web para gerenciar serviços{' '}
                  de campo em fazendas.
                </li>
                <li>
                  Tive minha primeira experiência com análise de dados{' '}
                  geográficos usando GeoJSON e{' '}
                  <a href="https://kepler.gl/" target="_blank">
                    Kepler.gl
                  </a>
                  .
                </li>
              </>
            ) : (
              <>
                <li>
                  Created Dronesoft - a web app for managing field services in{' '}
                  farms.
                </li>
                <li>
                  Had my first experience with geographical data parsing using{' '}
                  GeoJSON and{' '}
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
        <h1>
          {ctx!.lang === 'pt'
            ? 'Experiências Profissionais 💻'
            : 'Professional Experiences 💻'}
        </h1>
        <Timeline items={timeLineItems} />
      </div>
    </section>
  );
}
