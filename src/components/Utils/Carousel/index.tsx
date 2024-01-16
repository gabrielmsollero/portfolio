import { ReactNode } from "react";

type Tech = {
  name: string,
  imgSrc: string,
  hoverNode: ReactNode,
}

const techs: Tech[] = [
  {
    name: 'flask',
    imgSrc: '',
    hoverNode: <></>
  },
  {
    name: 'react',
    imgSrc: '',
    hoverNode: <></>
  },
  {
    name: 'docker',
    imgSrc: '',
    hoverNode: <></>
  },
  {
    name: 'bootstrap',
    imgSrc: '',
    hoverNode: <></>
  },
  {
    name: 'jquery',
    imgSrc: '',
    hoverNode: <></>
  },
  {
    name: 'electron',
    imgSrc: '',
    hoverNode: <></>
  },
  {
    name: 'aws',
    imgSrc: '',
    hoverNode: <></>
  },
  {
    name: 'node',
    imgSrc: '',
    hoverNode: <></>
  },
  {
    name: 'mongodb',
    imgSrc: '',
    hoverNode: <></>
  },
  {
    name: 'mysql',
    imgSrc: '',
    hoverNode: <></>
  },
  {
    name: 'nore-red',
    imgSrc: '',
    hoverNode: <></>
  },
  {
    name: 'selenium',
    imgSrc: '',
    hoverNode: <></>
  }
]

type Props = any

export default function Carousel({}: Props) {
  return (
    <ul>
      {techs.map((tech) => (
        <li key={tech.name}>
          
        </li>
      ))}
    </ul>
  );
}
