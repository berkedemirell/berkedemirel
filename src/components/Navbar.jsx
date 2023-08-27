import { Link } from "react-router-dom";

import logo from "../source/images/TomBombadil.jpg";
import { useState } from "react";
//bg-gradient-to-r from-nav1 to-nav2

const Navbar = () => {
  const [isDrop, setIsDrop] = useState(false)
  const handleDropDown = (e) => {
    e.preventDefault();
    setIsDrop((prev) => !prev)
  }
  return (
    <div className="p-4 bg-night bg-cover border-b border-slate-700 font-texturina mmd:pr-12 mmd:pl-12 mmmd:pl-8 mmmd:pr-8 ssm:pr-2">
      <div className="flex flex-row items-center justify-between">
        <div>
          <Link to="/">
            <img
              src={logo}
              alt=""
              className="w-20 h-20 rounded-full mmmd:w-14 mmmd:h-14 transition-all duration-500 hover:transform hover:scale-105"
            />
          </Link>
        </div>
        <div className="flex flex-row gap-6 text-lg mmmd:text-sm text-slate-50 font-bold mr-8 sms:hidden">
          <Link
            to="/"
            className="hover:text-slate-500 transition-all duration-500"
          >
            Main
          </Link>
          <Link
            to="/"
            className="hover:text-slate-500 transition-all duration-500"
          >
            Skills
          </Link>
          <Link
            to="/"
            className="hover:text-slate-500 transition-all duration-500"
          >
            My Projects
          </Link>
          <Link
            to="/"
            className="hover:text-slate-500 transition-all duration-500"
          >
            Contact
          </Link>
        </div>
        <div className="font-bold hidden sms:block sms:mr-10 text-xl relative">
          <button className="rotate-90 text-slate-50" onClick={handleDropDown}>....</button>
          {isDrop && <div className='absolute text-bblack flex flex-col items-start justify-center gap-2 z-10 -left-36 top-8 bg-slate-50 p-4 rounded-lg'>
            <Link
              to="/"
              className="hover:text-slate-500 transition-all duration-500"
            >
              Main
            </Link>
            <Link
              to="/"
              className="hover:text-slate-500 transition-all duration-500"
            >
              Skills
            </Link>
            <Link
              to="/"
              className="hover:text-slate-500 transition-all duration-500"
            >
              My Projects
            </Link>
            <Link
              to="/"
              className="hover:text-slate-500 transition-all duration-500"
            >
              Contact
            </Link>
          </div>}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
