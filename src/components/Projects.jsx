import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="w-full h-fit bg-bblack font-texturina p-20 border-b border-slate-700">
      <div className="text-slate-50 text-center">
        <p className="text-4xl">My Projects</p>
      </div>
      <div className="text-slate-50 grid grid-cols-2 items-center justify-center">
        <Link
          to="https://shopping-app-v2.vercel.app/"
          className="wrapper text-bblack font-bold h-wrapper w-wrapper p-12"
          target="_blank"
        >
          <div
            className="containers absolute bg-gradient-to-r from-fuchsia-300 to-fuchsia-500 rounded-xl shadow-shop"
            id="c0"
          >
            <div className="content" id="i0">
              <div className="w-full h-52 bg-shopping bg-cover bg-center rounded-xl"></div>
              <div className="text-center mt-2">
                <p className="text-xl">Shopping App</p>
                <p className="text-sm font-semibold">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Officiis autem deleniti similique sunt sint corporis!
                </p>
                <p className="text-sm mt-12 uppercase">
                  React, Tailwind, Context
                </p>
              </div>
            </div>
          </div>
        </Link>
        <Link
          to="https://multistep-form-drab.vercel.app/"
          className="wrapper text-bblack font-bold h-wrapper w-wrapper p-12"
          target="_blank"
        >
          <div
            className="containers absolute bg-gradient-to-r from-sky-100 to-sky-200 rounded-xl shadow-multi"
            id="c0"
          >
            <div className="content" id="i0">
              <div className="w-full h-52 bg-multi bg-cover bg-center rounded-xl"></div>
              <div className="text-center mt-2">
                <p className="text-xl">Multi Step Form</p>
                <p className="text-sm font-semibold">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptatibus, earum?
                </p>
                <p className="text-sm uppercase mt-12">Vanilla Js, Tailwind</p>
              </div>
            </div>
          </div>
        </Link>
        <Link
          to="https://rockpaperscissors-game-virid.vercel.app/"
          className="wrapper text-slate-50 font-bold h-wrapper w-wrapper p-12"
          target="_blank"
        >
          <div
            className="containers absolute bg-gradient-to-r from-blue-900 to-blue-950 rounded-xl shadow-rcs"
            id="c0"
          >
            <div className="content" id="i0">
              <div className="w-full h-52 bg-rps bg-cover bg-center rounded-xl"></div>
              <div className="text-center mt-2">
                <p className="text-xl">Rock, Paper, Scissors</p>
                <p className="text-sm font-semibold">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptatibus, earum?
                </p>
                <p className="text-sm uppercase mt-12">Vanilla Js, SCSS</p>
              </div>
            </div>
          </div>
        </Link>
        <Link
          to="https://ip-tracker-nine-murex.vercel.app/"
          className="wrapper text-bblack font-bold h-wrapper w-wrapper p-12"
          target="_blank"
        >
          <div
            className="containers absolute bg-gradient-to-r from-orange-200 to-orange-300 rounded-xl shadow-ipt"
            id="c0"
          >
            <div className="content" id="i0">
              <div className="w-full h-52 bg-ipt bg-cover bg-center rounded-xl"></div>
              <div className="text-center mt-2">
                <p className="text-xl">IP Tracker</p>
                <p className="text-sm font-semibold">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates corrupti laborum sapiente qui impedit.
                </p>
                <p className="text-sm uppercase mt-12">React, Tailwind, Leaflet</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
