import { Link } from "react-router-dom";
import {FaTwitter,FaGithub, FaLinkedin, FaYoutube, FaNpm, FaReact, FaJs} from 'react-icons/fa'
import { useEffect, useRef, useState } from "react";

const Footer = () => {
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
    <div className="w-full h-fit pt-12 pb-24 pl-48 md:pl-24 md:pr-24 pr-48 mmmd:pl-12 mmmd:pr-20 bg-bblack text-slate-50 font-texturina" ref={targetElement}>
      <div className={`${isInView ? 'flex' : 'hidden'} flex-row items-center justify-center`}>
        <div className="flex flex-col gap-4">
          <ul className="list-none flex flex-row items-center gap-4 text-3xl gia:text-5xl font-bold mmmd:flex-col mmmd:gap-2">
            <li className="hover:transform hover:scale-150 transition-all duration-500">
              <Link
                to="https://github.com/berkedemirell"
                target="_blank"
                aria-label="github icon"
                className="hover:text-red-800"
              >
                <FaGithub/>
              </Link>
            </li>
            <li className="hover:transform hover:scale-150 transition-all duration-500">
              <Link
                to="https://www.linkedin.com/in/berke-demirel/"
                aria-label="linkedin icon"
                target="_blank"
                className="hover:text-red-800"
              >
                <FaLinkedin/>
              </Link>
            </li>
            <li className="hover:transform hover:scale-150 transition-all duration-500">
              <Link className="hover:text-red-800" aria-label="js icon">
                <FaTwitter/>
              </Link>
            </li>
            <li className="hover:transform hover:scale-150 transition-all duration-500">
              <Link className="hover:text-red-800" aria-label="youtube icon">
                <FaYoutube/>
              </Link>
            </li>
            <li className="hover:transform hover:scale-150 transition-all duration-500">
              <Link className="hover:text-red-800" aria-label="npm icon">
                <FaNpm/>
              </Link>
            </li>
            <li className="hover:transform hover:scale-150 transition-all duration-500">
              <Link className="hover:text-red-800" aria-label="react icon">
                <FaReact/>
              </Link>
            </li>
            <li className="hover:transform hover:scale-150 transition-all duration-500">
              <Link className="hover:text-red-800" aria-label="js icon">
                <FaJs/>
              </Link>
            </li>
          </ul>
          <div>
            <p className="text-sm font-bold text-slate-300 text-center gia:text-xl">
              All Rights Reserved Berke Demirel &copy; 2023
            </p>
            <p className="text-center mt-2 text-slate-300 font-bold text-sm gia:text-xl">
              Contact: dberke00@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
