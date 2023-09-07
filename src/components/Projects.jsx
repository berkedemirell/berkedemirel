import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Projects = () => {

  const targetElement = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(onIntersection, {
      root: null,
      threshold: 0,
      rootMargin: '-100px',
    })
    const observerRefValue = targetElement.current
    observer.observe(observerRefValue)
    
    return () => observer.unobserve(observerRefValue)
  }, [])


  const onIntersection = (entry) => {
    if(!entry[0].isIntersecting) {
      return
    }
    setIsInView(true)
  }

  return (
    <div className={`w-full h-fit mmmd:p-12 gia:p-0  gia:flex gia:flex-col gia:items-center gia:justify-center gia:pt-12 mmmd:pt-10 bg-bblack font-texturina p-20 border-b border-slate-700`} id="projects" ref={targetElement}>
      <div className="text-slate-50 text-center">
        <p className="text-4xl sms:text-2xl uppercase gia:text-6xl">My Projects</p>
      </div>
      <div className={`text-slate-50 w-full sms:pl-8 ss:pl-4 sss:pl-0 ${isInView ? 'grid' : 'hidden'} grid-cols-2 gia:gap-x-52 gia:pb-36 gia:pl-32 lg:grid-cols-1 ll:gap-4 lg:mt-12 items-center justify-center lg:ml-36 mmd:ml-24 mmmd:ml-16 ssm:ml-0 gap-24`}>
        <Link
          to="https://shopping-app-v2.vercel.app/"
          className="wrapper gia:w-inp text-bblack font-bold h-wrapper w-wrapper mmmd:w-inp2 p-12 ll:p-2 sms:w-skill xxl:w-inp"
          target="_blank"
          aria-label="shopping app card"
        >
          <div
            className="containers absolute bg-gradient-to-r from-fuchsia-300 to-fuchsia-500 rounded-xl shadow-shop"
            id="c0"
          >
            <div className="content" id="i0">
              <div className="w-full h-52 bg-shopping bg-cover bg-center rounded-xl"></div>
              <div className="text-center mt-2">
                <p className="text-xl xxl:text-2xl gia:text-3xl">Shopping App</p>
                <p className="text-sm font-semibold xxl:text-lg gia:text-xl">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Officiis autem deleniti similique sunt sint corporis!
                </p>
                <p className="text-sm mt-12 uppercase xxl:text-lg gia:text-xl">
                  React, Tailwind, Context
                </p>
              </div>
            </div>
          </div>
        </Link>
        <Link
          to="https://multistep-form-drab.vercel.app/"
          className="wrapper gia:w-inp text-bblack font-bold h-wrapper mmmd:w-inp2 w-wrapper p-12 ll:p-2 sms:w-skill xxl:w-inp"
          target="_blank"
          aria-label="multi step form card"
        >
          <div
            className="containers absolute bg-gradient-to-r from-sky-100 to-sky-200 rounded-xl shadow-multi"
            id="c0"
          >
            <div className="content" id="i0">
              <div className="w-full h-52 bg-multi bg-cover bg-center rounded-xl"></div>
              <div className="text-center mt-2">
                <p className="text-xl xxl:text-2xl gia:text-3xl">Multi Step Form</p>
                <p className="text-sm font-semibold xxl:text-lg gia:text-xl">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptatibus, earum?
                </p>
                <p className="text-sm uppercase mt-12 xxl:text-lg gia:text-xl">Vanilla Js, Tailwind</p>
              </div>
            </div>
          </div>
        </Link>
        <Link
          to="https://rockpaperscissors-game-virid.vercel.app/"
          className="wrapper gia:w-inp text-slate-50 font-bold h-wrapper w-wrapper mmmd:w-inp2 p-12 ll:p-2 sms:w-skill xxl:w-inp"
          target="_blank"
          aria-label="rock game card"
        >
          <div
            className="containers absolute bg-gradient-to-r from-blue-900 to-blue-950 rounded-xl shadow-rcs"
            id="c0"
          >
            <div className="content" id="i0">
              <div className="w-full h-52 bg-rps bg-cover bg-center rounded-xl"></div>
              <div className="text-center mt-2">
                <p className="text-xl xxl:text-2xl gia:text-3xl">Rock, Paper, Scissors</p>
                <p className="text-sm font-semibold xxl:text-lg gia:text-xl">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptatibus, earum?
                </p>
                <p className="text-sm uppercase mt-12 xxl:text-lg gia:text-xl">Vanilla Js, SCSS</p>
              </div>
            </div>
          </div>
        </Link>
        <Link
          to="https://ip-tracker-nine-murex.vercel.app/"
          className="wrapper gia:w-inp text-bblack font-bold h-wrapper w-wrapper mmmd:w-inp2 p-12 ll:p-2 sms:w-skill xxl:w-inp"
          target="_blank"
          aria-label="ip tracker card"
        >
          <div
            className="containers absolute bg-gradient-to-r from-orange-200 to-orange-300 rounded-xl shadow-ipt"
            id="c0"
          >
            <div className="content" id="i0">
              <div className="w-full h-52 bg-ipt bg-cover bg-center rounded-xl"></div>
              <div className="text-center mt-2 xxl:text-2xl">
                <p className="text-xl xxl:text-2xl gia:text-3xl">IP Tracker</p>
                <p className="text-sm font-semibold xxl:text-lg gia:text-xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates corrupti laborum sapiente qui impedit.
                </p>
                <p className="text-sm uppercase mt-12 xxl:text-lg gia:text-xl">React, Tailwind, Leaflet</p>
              </div>
            </div>
          </div>
        </Link>
        <Link
          to="https://hangman-gamma-coral.vercel.app/"
          className="wrapper gia:w-inp text-bblack font-bold h-wrapper w-wrapper mmmd:w-inp2 p-12 ll:p-2 sms:w-skill xxl:w-inp"
          target="_blank"
          aria-label="hangman game card"
        >
          <div
            className="containers absolute bg-gradient-to-r from-amber-100 to-orange-100 rounded-xl shadow-hang"
            id="c0"
          >
            <div className="content" id="i0">
              <div className="w-full h-52 bg-hang bg-cover bg-center rounded-xl"></div>
              <div className="text-center mt-2">
                <p className="text-xl xxl:text-2xl gia:text-3xl">Hangman</p>
                <p className="text-sm font-semibold xxl:text-lg gia:text-xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates corrupti laborum sapiente qui impedit.
                </p>
                <p className="text-sm uppercase mt-12 xxl:text-lg gia:text-xl">TypeScript, React, Tailwind</p>
              </div>
            </div>
          </div>
        </Link>
        <Link
          to="https://pokemon-game-rho.vercel.app/"
          className="wrapper gia:w-inp text-bblack font-bold h-wrapper w-wrapper mmmd:w-inp2 p-12 ll:p-2 sms:w-skill xxl:w-inp"
          target="_blank"
          aria-label="pokemon game card"
        >
          <div
            className="containers absolute bg-gradient-to-r from-slate-50 to-slate-100 rounded-xl shadow-pok"
            id="c0"
          >
            <div className="content" id="i0">
              <div className="w-full h-52 bg-pok bg-cover bg-center rounded-xl"></div>
              <div className="text-center mt-2">
                <p className="text-xl xxl:text-2xl gia:text-3xl">Pokemon Game</p>
                <p className="text-sm font-semibold xxl:text-lg gia:text-xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates corrupti laborum sapiente qui impedit.
                </p>
                <p className="text-sm uppercase mt-12 xxl:text-lg gia:text-xl">React, Css</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
