import { AiFillLinkedin } from 'react-icons/ai'
import { DiGithubFull } from 'react-icons/di'
import { FaAws, FaDocker, FaPython } from 'react-icons/fa'
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
  SiTailwindcss, SiGo, SiRedux, SiGit, SiPostgresql, SiGraphql, SiJira,
} from 'react-icons/si'
import ReactGA from 'react-ga4'

ReactGA.initialize(import.meta.env.VITE_GA_MEASUREMENT_ID)

function Header() {
  function githubClick() {
    ReactGA.send({
      hitType: 'pageview',
      page: 'https://github.com/pleszyk',
      title: 'Github',
    })
  }

  function linkedinClick() {
    ReactGA.send({
      hitType: 'pageview',
      page: 'https://www.linkedin.com/in/szyk/',
      title: 'LinkedIn',
    })
  }

  return (
    <div className="w-full col-span-2 p-1">
      <div
        className="relative border-gray-600 border-opacity-35 border italic block bg-blend-overlay bg-black bg-opacity-25 overflow-hidden h-72 rounded-lg bg-[url('assets/header.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="absolute p-8 text-gray-100">
          <h3 className="text-5xl rounded-lg font-medium drop-shadow-text">Paul Leszyk</h3>
          <p className="text-lg font-normal drop-shadow-text">B.Sc Computer Science, 2022</p>
          <p className="text-xs text-gray-100 mt-1 font-normal drop-shadow-text">
            JavaScript, TypeScript, Go, Python, React, Redux, Next.js, <br />
            Node.js (Express.js), HTML, CSS (Tailwind CSS), Git, MongoDB, <br />
            PostgreSQL, SQL, NoSQL, Docker, AWS, GraphQL, REST API
          </p>

          <div className="flex max-w-xs text-xl p-1 pt-2 gap-y-2 flex-wrap">
              <SiJavascript />
              <SiTypescript className="ml-2" />
              <SiGo className="ml-2" />
              <FaPython className="ml-2" />
              <SiReact className="ml-2" />
              <SiRedux className="ml-2" />
              <SiNextdotjs className="ml-2" />
              <SiNodedotjs className="ml-2" />
              <SiExpress className="ml-2" />
              <SiHtml5 className="ml-2" />
              <SiCss3 className="ml-2" />
              <SiTailwindcss />
              <SiGit className="ml-2" />
              <SiMongodb className="ml-2" />
              <SiPostgresql className="ml-2" />
              <FaDocker className="ml-2" />
              <FaAws className="ml-2" />
              <SiGraphql className="ml-2" />
              <SiJira className="ml-2" />
          </div>
        </div>
        <a
          onClick={githubClick}
          href="https://github.com/pleszyk"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute transition xl:hover:scale-[1.05] duration-300 left-4 bottom-4 items-center rounded-lg bg-[#e7ecef] p-1.5 text-2xl text-black"
        >
          <DiGithubFull />
        </a>
        <a
          onClick={linkedinClick}
          href="https://www.linkedin.com/in/szyk/"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute transition xl:hover:scale-[1.05] duration-300 left-16 bottom-4 items-center rounded-lg bg-[#e7ecef] p-1.5 text-2xl text-black"
        >
          <AiFillLinkedin />
        </a>
      </div>
    </div>
  )
}

export default Header
