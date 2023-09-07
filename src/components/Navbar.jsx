import { Link } from "react-router-dom";
import logo from "../source/images/TomBombadil.webp";
import { useState } from "react";

const Navbar = () => {
  const [isDrop, setIsDrop] = useState(false);
  const handleDropDown = (e) => {
    e.preventDefault();
    setIsDrop((prev) => !prev);
  };

  const handleScroll = (e) => {
    e.preventDefault();
    const skills = document.getElementById("skills");
    const contact = document.getElementById("contact");
    const projects = document.getElementById("projects");
    if (e.target.id === "skill") {
      skills.scrollIntoView({ behavior: "smooth" });
    } else if (e.target.id === "cont") {
      contact.scrollIntoView({ behavior: "smooth" });
    } else if (e.target.id === "project") {
      projects.scrollIntoView({ behavior: "smooth" });
    } else {
      return;
    }
  };
  return (
    <div className="p-4 gia:pl-20 gia:pr-20 w-full bg-bblack bg-cover border-b border-slate-700 font-texturina mmd:pr-12 mmd:pl-12 mmmd:pl-8 mmmd:pr-8 ssm:pr-2">
      <div className="flex flex-row items-center justify-between">
        <div>
          <Link to="/">
            <img
              src={logo}
              alt=""
              aria-label="Home"
              className="w-20 h-20 xxl:w-24 xxl:ml-4 xxl:h-24 rounded-full mmmd:w-14 mmmd:h-14 transition-all duration-500 hover:transform hover:scale-105"
            />
          </Link>
        </div>
        <div className="flex flex-row gap-6 text-lg xxl:text-2xl mmmd:text-sm text-slate-50 font-bold mr-8 sms:hidden">
          <Link
            to="/"
            className="hover:text-slate-500 transition-all duration-500"
            id="skill"
            aria-label="Go to skills"
            onClick={handleScroll}
          >
            Skills
          </Link>
          <Link
            to="/"
            className="hover:text-slate-500 transition-all duration-500"
            id="project"
            aria-label="Go to projects"
            onClick={handleScroll}
          >
            My Projects
          </Link>
          <Link
            to="/"
            className="hover:text-slate-500 transition-all duration-500"
            id="cont"
            aria-label="go to contact"
            onClick={handleScroll}
          >
            Contact
          </Link>
        </div>
        <div className="font-bold hidden sms:block sms:mr-10 text-xl relative">
          <button className="rotate-90 text-slate-50" onClick={handleDropDown}>
            ....
          </button>
          {isDrop && (
            <div className="absolute text-bblack flex flex-col items-start justify-center gap-2 z-10 -left-36 top-8 bg-slate-50 p-4 rounded-lg">
              <Link
                to="/"
                className="hover:text-slate-500 transition-all duration-500 text-lg"
                id="skill"
                aria-label="go to skills"
                onClick={handleScroll}
              >
                Skills
              </Link>
              <Link
                to="/"
                className="hover:text-slate-500 transition-all duration-500 text-lg"
                id="project"
                aria-label="go to projects"
                onClick={handleScroll}
              >
                My Projects
              </Link>
              <Link
                to="/"
                className="hover:text-slate-500 transition-all duration-500 text-lg"
                id="cont"
                aria-label="go to contact"
                onClick={handleScroll}
              >
                Contact
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
