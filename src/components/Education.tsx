import classes from "./Education.module.css";

import ufuImg from "../assets/ufu.webp";
import lamauImg from "../assets/lamau.webp";
import emtdsImg from "../assets/emtds.webp";

export default function Education() {
  return (
    <section id="education">
      <div className={classes.content}>
        <div className={classes.photosWrapper}>
          <div className={classes.photoCard}>
            <img src={ufuImg} alt="Federal University of Uberlândia" />
          </div>
          <div className={classes.photoCard}>
            <img src={lamauImg} alt="An electric bike" />
          </div>
          <div className={classes.photoCard}>
            <img src={emtdsImg} alt="An electronic device" />
          </div>
        </div>
        <div className={classes.textWrapper}>
          <h1>📖Education</h1>
          {/* Fotos logo UFU, LAMAU, Energisa - transição fade in on scroll down */}
          <p>
            I got my <strong>Bachelor's Degree</strong> in Automation & Control
            Engineering at the Federal University of Uberlândia (UFU){" "}
            <strong>in 2023</strong>. It's been an amazing journey, graduating
            there.
          </p>
          <p>
            I've participated as the Electronics <strong>team manager</strong>{" "}
            on the project of the <strong>first electric</strong> motorcycle
            designed for racing <strong>of Latin America</strong>, at{" "}
            <a href="https://www.linkedin.com/company/lamau-ufu">LAMAU</a>. We
            were competitors in the{" "}
            <a href="https://www.motostudent.com/">MotoStudent®</a>
            competition, edition VI. We were 2nd between the rookie teams and
            8th overall, even though we were all undergraduates with no
            financing or other projects to use as reference! We sold{" "}
            <strong>raffles</strong>, we sold water bottles{" "}
            <strong>at traffic lights</strong> and we made it!
          </p>
          <p>
            After finishing the motorcycle, I joined the{" "}
            <strong>Special Machines Laboratory</strong> (LAMEP) where I stayed
            until the end of graduation. There, in partnership with{" "}
            <a href="https://www.grupoenergisa.com.br/">Energisa</a>, we
            developed a portable device for detecting dynamic tampers in
            electrical energy meters on field. I contributed to it as an
            <strong>embedded software developer</strong> and R&D scholar.
          </p>
          <p>
            Also, I had a GPA of <strong>85.5/100</strong> in graduation. Even
            though I don't believe this is the only thing that defines knowledge
            and effort, I'm <strong>pretty proud of it.</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
