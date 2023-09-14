import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import data from "../source/data/data.json";

const Projects = () => {
  const targetElement = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(onIntersection, {
      root: null,
      threshold: 0,
      rootMargin: "-100px",
    });
    const observerRefValue = targetElement.current;
    observer.observe(observerRefValue);

    return () => observer.unobserve(observerRefValue);
  }, []);

  const onIntersection = (entry) => {
    if (!entry[0].isIntersecting) {
      return;
    }
    setIsInView(true);
  };

  return (
    <div
      className={`w-full h-fit mmmd:p-12 gia:p-0 gia:flex gia:flex-col gia:items-center gia:justify-center gia:pt-12 mmmd:pt-10 bg-bblack font-texturina p-20 border-b border-slate-700`}
      id="projects"
      ref={targetElement}
    >
      <div className="text-slate-50 text-center">
        <p className="text-4xl sms:text-2xl uppercase gia:text-6xl">
          My Projects
        </p>
      </div>
      <div
        className={`text-slate-50 w-full sms:pl-8 ss:pl-4 sss:pl-0 ${
          isInView ? "grid" : "hidden"
        } grid-cols-2 gia:gap-x-52 gia:pb-36 gia:pl-32 lg:grid-cols-1 ll:gap-4 lg:mt-12 items-center justify-center lg:ml-36 mmd:ml-24 mmmd:ml-16 ssm:ml-0 gap-24`}
      >
        {data.data.map((d,i) => {
          return (
            <Link
              key={i}
              to={d.url}
              className="wrapper gia:w-inp text-bblack font-bold h-wrapper w-wrapper mmmd:w-inp2 p-12 ll:p-2 sms:w-skill xxl:w-inp"
              target="_blank"
              aria-label={d.aria}
            >
              <div
                className={`containers absolute ${d.style} rounded-xl`}
                id="c0"
              >
                <div className="content" id="i0">
                  <div className={`w-full h-52 ${d.img} bg-cover bg-center rounded-xl`}></div>
                  <div className={`text-center mt-2 pl-4 pr-4 ${d.title === 'Rock, Paper, Scissors' ? 'text-slate-50' : ''}`}>
                    <p className="text-xl xxl:text-2xl gia:text-3xl">
                      {d.title}
                    </p>
                    <p className="text-sm font-semibold xxl:text-lg gia:text-xl">
                      {d.desc}
                    </p>
                    <p className="text-sm mt-12 uppercase xxl:text-lg gia:text-xl sms:text-xs">
                      {d.tools}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  );
};

export default Projects;
