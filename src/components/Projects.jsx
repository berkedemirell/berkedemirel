import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="w-full h-fit mmmd:p-12 mmmd:pt-10 bg-bblack font-texturina p-20 border-b border-slate-700" id="projects">
      <div className="text-slate-50 text-center">
        <p className="text-4xl sms:text-2xl uppercase">My Projects</p>
      </div>
      <div className="text-slate-50 grid grid-cols-2 lg:grid-cols-1 ll:gap-4 lg:mt-12 items-center justify-center lg:ml-36 mmd:ml-24 mmmd:ml-16 ssm:ml-0 gap-24">
        <Link
          to="https://shopping-app-v2.vercel.app/"
          className="wrapper text-bblack font-bold h-wrapper w-wrapper mmmd:w-inp2 p-12 ll:p-2 sms:w-skill xxl:w-inp"
          target="_blank"
        >
          <div
            className="containers absolute bg-gradient-to-r from-fuchsia-300 to-fuchsia-500 rounded-xl shadow-shop"
            id="c0"
          >
            <div className="content" id="i0">
              <div className="w-full h-52 bg-shopping bg-cover bg-center rounded-xl"></div>
              <div className="text-center mt-2">
                <p className="text-xl xxl:text-2xl">Shopping App</p>
                <p className="text-sm font-semibold xxl:text-lg">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Officiis autem deleniti similique sunt sint corporis!
                </p>
                <p className="text-sm mt-12 uppercase xxl:text-lg">
                  React, Tailwind, Context
                </p>
              </div>
            </div>
          </div>
        </Link>
        <Link
          to="https://multistep-form-drab.vercel.app/"
          className="wrapper text-bblack font-bold h-wrapper mmmd:w-inp2 w-wrapper p-12 ll:p-2 sms:w-skill xxl:w-inp"
          target="_blank"
        >
          <div
            className="containers absolute bg-gradient-to-r from-sky-100 to-sky-200 rounded-xl shadow-multi"
            id="c0"
          >
            <div className="content" id="i0">
              <div className="w-full h-52 bg-multi bg-cover bg-center rounded-xl"></div>
              <div className="text-center mt-2">
                <p className="text-xl xxl:text-2xl">Multi Step Form</p>
                <p className="text-sm font-semibold xxl:text-lg">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptatibus, earum?
                </p>
                <p className="text-sm uppercase mt-12 xxl:text-lg">Vanilla Js, Tailwind</p>
              </div>
            </div>
          </div>
        </Link>
        <Link
          to="https://rockpaperscissors-game-virid.vercel.app/"
          className="wrapper text-slate-50 font-bold h-wrapper w-wrapper mmmd:w-inp2 p-12 ll:p-2 sms:w-skill xxl:w-inp"
          target="_blank"
        >
          <div
            className="containers absolute bg-gradient-to-r from-blue-900 to-blue-950 rounded-xl shadow-rcs"
            id="c0"
          >
            <div className="content" id="i0">
              <div className="w-full h-52 bg-rps bg-cover bg-center rounded-xl"></div>
              <div className="text-center mt-2">
                <p className="text-xl xxl:text-2xl">Rock, Paper, Scissors</p>
                <p className="text-sm font-semibold xxl:text-lg">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptatibus, earum?
                </p>
                <p className="text-sm uppercase mt-12 xxl:text-lg">Vanilla Js, SCSS</p>
              </div>
            </div>
          </div>
        </Link>
        <Link
          to="https://ip-tracker-nine-murex.vercel.app/"
          className="wrapper text-bblack font-bold h-wrapper w-wrapper mmmd:w-inp2 p-12 ll:p-2 sms:w-skill xxl:w-inp"
          target="_blank"
        >
          <div
            className="containers absolute bg-gradient-to-r from-orange-200 to-orange-300 rounded-xl shadow-ipt"
            id="c0"
          >
            <div className="content" id="i0">
              <div className="w-full h-52 bg-ipt bg-cover bg-center rounded-xl"></div>
              <div className="text-center mt-2 xxl:text-2xl">
                <p className="text-xl xxl:text-2xl">IP Tracker</p>
                <p className="text-sm font-semibold xxl:text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates corrupti laborum sapiente qui impedit.
                </p>
                <p className="text-sm uppercase mt-12 xxl:text-lg">React, Tailwind, Leaflet</p>
              </div>
            </div>
          </div>
        </Link>
        <Link
          to="https://hangman-gamma-coral.vercel.app/"
          className="wrapper text-bblack font-bold h-wrapper w-wrapper mmmd:w-inp2 p-12 ll:p-2 sms:w-skill xxl:w-inp"
          target="_blank"
        >
          <div
            className="containers absolute bg-gradient-to-r from-amber-100 to-orange-100 rounded-xl shadow-hang"
            id="c0"
          >
            <div className="content" id="i0">
              <div className="w-full h-52 bg-hang bg-cover bg-center rounded-xl"></div>
              <div className="text-center mt-2">
                <p className="text-xl xxl:text-2xl">Hangman</p>
                <p className="text-sm font-semibold xxl:text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates corrupti laborum sapiente qui impedit.
                </p>
                <p className="text-sm uppercase mt-12 xxl:text-lg">TypeScript, React, Tailwind</p>
              </div>
            </div>
          </div>
        </Link>
        <Link
          to="https://pokemon-game-rho.vercel.app/"
          className="wrapper text-bblack font-bold h-wrapper w-wrapper mmmd:w-inp2 p-12 ll:p-2 sms:w-skill xxl:w-inp"
          target="_blank"
        >
          <div
            className="containers absolute bg-gradient-to-r from-slate-50 to-slate-100 rounded-xl shadow-pok"
            id="c0"
          >
            <div className="content" id="i0">
              <div className="w-full h-52 bg-pok bg-cover bg-center rounded-xl"></div>
              <div className="text-center mt-2">
                <p className="text-xl xxl:text-2xl">Pokemon Game</p>
                <p className="text-sm font-semibold xxl:text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates corrupti laborum sapiente qui impedit.
                </p>
                <p className="text-sm uppercase mt-12 xxl:text-lg">React, Css</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
