import { AiFillLinkedin } from "react-icons/ai";
import { DiGithubFull } from "react-icons/di";
import { FaAws } from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";
import ReactGA from "react-ga4";
ReactGA.initialize("G-M9Q2K7J9MB");

function Header() {
  function githubClick() {
    ReactGA.send({
      hitType: "pageview",
      page: "https://github.com/pleszyk",
      title: "Github",
    });
  }

  function linkedinClick() {
    ReactGA.send({
      hitType: "pageview",
      page: "https://www.linkedin.com/in/szyk/",
      title: "LinkedIn",
    });
  }

  return (
    <div className="w-full col-span-2 p-1">
      <div className="relative italic block bg-blend-overlay bg-black bg-opacity-25 overflow-hidden h-64 rounded-xl bg-[url('assets/header.svg')] bg-cover bg-center bg-no-repeat">
        <div className="absolute p-8 text-gray-100">
          <h3 className="text-5xl rounded-lg font-medium">Paul Leszyk</h3>
          <p className="text-lg font-normal ">B.Sc Computer Science</p>
          <p className="text-xs text-gray-100 mt-1 font-normal">
            Javascript, Typescript, HTML, CSS, React, <br /> Next.js,
            TailwindCSS, MongoDB, Node.js & AWS
          </p>
          <div className="flex text-[#062a4e] text-xl p-1 pt-2">
            <SiJavascript />
            <SiTypescript className="ml-2" />
            <SiNextdotjs className="ml-2" />
            <SiReact className="ml-2" />
            <SiNodedotjs className="ml-2" />
            <SiExpress className="ml-2" />
            <FaAws className="ml-2" />
            <SiMongodb className="ml-2" />
            <SiHtml5 className="ml-2" />
            <SiCss3 className="ml-2" />
            <SiTailwindcss className="ml-2" />
          </div>
        </div>
        <a
          onClick={githubClick}
          href="https://github.com/pleszyk"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute transition xl:hover:scale-[1.05] left-4 bottom-4 items-center rounded-lg bg-[#e7ecef] p-1.5 text-2xl text-black"
        >
          <DiGithubFull />
        </a>
        <a
          onClick={linkedinClick}
          href="https://www.linkedin.com/in/szyk/"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute transition xl:hover:scale-[1.05] left-16 bottom-4 items-center rounded-lg bg-[#e7ecef] p-1.5 text-2xl text-black"
        >
          <AiFillLinkedin />
        </a>
      </div>
    </div>
  );
}
export default Header;
