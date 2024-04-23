/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import logo from "../source/images/TomBombadil.webp";
import { useState } from "react";
import data from "../source/data/data.json";

const Navbar = ({ handleLangChange, t, i18n }) => {
  const [isDrop, setIsDrop] = useState(false);
  const [langDrop, setLangDrop] = useState(false);
  const handleDropDown = (e) => {
    e.preventDefault();
    setIsDrop((prev) => !prev);
  };

  const handleLangDrop = () => {
    setLangDrop((prev) => !prev);
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

  const languageChange = (e) => {
    handleLangChange(e.target.id);
    setLangDrop(false);
  };
  
  return (
    <div className="p-4 gia:pl-20 relative gia:pr-20 w-full bg-bblack bg-cover border-b border-slate-700 font-texturina mmd:pr-12 mmd:pl-12 mmmd:pl-8 mmmd:pr-8 ssm:pr-2">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-4">
          <Link to="/">
            <img
              src={logo}
              alt=""
              aria-label="Home"
              className="w-20 h-20 xxl:w-24 xxl:ml-4 xxl:h-24 rounded-full mmmd:w-14 mmmd:h-14 transition-all duration-500 hover:transform hover:scale-105"
            />
          </Link>
          <div className="absolute top-28 xxl:top-32 xxl:left-10 mmmd:top-24 mmmd:left-4 gia:top-36 gia:left-6 z-10">
            <button
              className="text-slate-50 flex flex-row items-center gap-1 hover:text-slate-400 transition-all duration-500"
              onClick={handleLangDrop}
            >
              Language &darr;
            </button>
            {langDrop && (
              <div className="bg-slate-700 gap-1 flex flex-col items-start justify-center absolute p-2 z-10 rounded-md top-8 pl-4 pr-4">
                {data["lang-buttons"].map((buttons, i) => {
                  return (
                    <div key={i}>
                      <button
                        className={`text-slate-50 hover:text-slate-400 transition-all duration-500 flex flex-row gap-1`}
                        id={`${buttons.id}`}
                        onClick={languageChange}
                      >
                        {buttons.title}{i18n.language === buttons.id && <span className="">&radic;</span>}
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-row gap-6 text-lg xxl:text-2xl mmmd:text-sm text-slate-50 font-bold mr-8 sms:hidden">
          <Link
            to="/"
            className="hover:text-slate-500 transition-all duration-500 capitalize"
            id="skill"
            aria-label="Go to skills"
            onClick={handleScroll}
          >
            {t("nav.skills")}
          </Link>
          <Link
            to="/"
            className="hover:text-slate-500 transition-all duration-500 capitalize"
            id="project"
            aria-label="Go to projects"
            onClick={handleScroll}
          >
            {t("nav.projects")}
          </Link>
          <Link
            to="/"
            className="hover:text-slate-500 transition-all duration-500 capitalize"
            id="cont"
            aria-label="go to contact"
            onClick={handleScroll}
          >
            {t("nav.contact")}
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
                {t("nav.skills")}
              </Link>
              <Link
                to="/"
                className="hover:text-slate-500 transition-all duration-500 text-lg"
                id="project"
                aria-label="go to projects"
                onClick={handleScroll}
              >
                {t("nav.projects")}
              </Link>
              <Link
                to="/"
                className="hover:text-slate-500 transition-all duration-500 text-lg"
                id="cont"
                aria-label="go to contact"
                onClick={handleScroll}
              >
                {t("nav.contact")}
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
