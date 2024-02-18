import { ReactNode } from "react";

import angularImg from "../../../assets/tech-icons/angular.webp";
import awsImg from "../../../assets/tech-icons/aws.webp";
import bootstrapImg from "../../../assets/tech-icons/bootstrap.webp";
import cssImg from "../../../assets/tech-icons/css.webp";
import dockerImg from "../../../assets/tech-icons/docker.webp";
import electronImg from "../../../assets/tech-icons/electron.webp";
import flaskImg from "../../../assets/tech-icons/flask.webp";
import htmlImg from "../../../assets/tech-icons/html.webp";
import javascriptImg from "../../../assets/tech-icons/javascript.webp";
import jqueryImg from "../../../assets/tech-icons/jquery.webp";
import mongodbImg from "../../../assets/tech-icons/mongodb.webp";
import mysqlImg from "../../../assets/tech-icons/mysql.webp";
import nodejsImg from "../../../assets/tech-icons/nodejs.webp";
import noderedImg from "../../../assets/tech-icons/nodered.webp";
import reactImg from "../../../assets/tech-icons/react.webp";
import seleniumImg from "../../../assets/tech-icons/selenium.webp";
import typescriptImg from "../../../assets/tech-icons/typescript.webp";

type Tech = {
  name: string;
  imgSrc: string;
  hoverNode: ReactNode;
};

const techs: Tech[] = [
  {
    name: "flask",
    imgSrc: flaskImg,
    hoverNode: <></>,
  },
  {
    name: "nodejs",
    imgSrc: nodejsImg,
    hoverNode: <></>,
  },
  {
    name: "docker",
    imgSrc: dockerImg,
    hoverNode: <></>,
  },
  {
    name: "aws",
    imgSrc: awsImg,
    hoverNode: <></>,
  },
  {
    name: "mongodb",
    imgSrc: mongodbImg,
    hoverNode: <></>,
  },
  {
    name: "mysql",
    imgSrc: mysqlImg,
    hoverNode: <></>,
  },
  {
    name: "react",
    imgSrc: reactImg,
    hoverNode: <></>,
  },
  {
    name: "angular",
    imgSrc: angularImg,
    hoverNode: <></>,
  },
  {
    name: "bootstrap",
    imgSrc: bootstrapImg,
    hoverNode: <></>,
  },
  {
    name: "jquery",
    imgSrc: jqueryImg,
    hoverNode: <></>,
  },
  {
    name: "nodered",
    imgSrc: noderedImg,
    hoverNode: <></>,
  },
  {
    name: "electron",
    imgSrc: electronImg,
    hoverNode: <></>,
  },
  {
    name: "selenium",
    imgSrc: seleniumImg,
    hoverNode: <></>,
  },
  {
    name: "typescript",
    imgSrc: typescriptImg,
    hoverNode: <></>,
  },
  {
    name: "html",
    imgSrc: htmlImg,
    hoverNode: <></>,
  },
  {
    name: "css",
    imgSrc: cssImg,
    hoverNode: <></>,
  },
  {
    name: "javascript",
    imgSrc: javascriptImg,
    hoverNode: <></>,
  },
];

export default techs;
