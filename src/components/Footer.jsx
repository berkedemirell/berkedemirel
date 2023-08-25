import { Link } from "react-router-dom";
import tom from '../source/images/top.png'

const Footer = () => {
  return (
    <div className="w-full h-fit pt-12 pb-24 pl-48 pr-48 bg-bblack text-slate-50 font-texturina">
      <div className="flex flex-row items-start justify-between">
        <div>
            <div>
              <p className="underline text-lg uppercase">ASDASD</p>
            </div>
            <div className="">
              <p>Lorem, ipsum.</p>
              <p>Lorem, ipsum dolor..</p>
              <p>Lorem..</p>
              <p>Lorem, ipsum.</p>
            </div>
        </div>
        <div className="flex flex-col gap-4">
          <ul className="list-none flex flex-row gap-4 text-3xl font-bold">
            <li className="hover:transform hover:scale-150 transition-all duration-500">
              <Link to='https://github.com/berkedemirell' target="_blank" className="hover:text-red-800">
                <ion-icon name="logo-github"></ion-icon>
              </Link>
            </li>
            <li className="hover:transform hover:scale-150 transition-all duration-500">
              <Link to='https://www.linkedin.com/in/berke-demirel/' target="_blank" className="hover:text-red-800">
                <ion-icon name="logo-linkedin"></ion-icon>
              </Link>
            </li>
            <li className="hover:transform hover:scale-150 transition-all duration-500">
              <Link to='https://twitter.com/brkdmrl07' target="_blank" className="hover:text-red-800">
                <ion-icon name="logo-twitter"></ion-icon>
              </Link>
            </li>
            <li className="hover:transform hover:scale-150 transition-all duration-500">
              <Link className="hover:text-red-800">
                <ion-icon name="logo-youtube"></ion-icon>
              </Link>
            </li>
            <li className="hover:transform hover:scale-150 transition-all duration-500">
              <Link className="hover:text-red-800">
                <ion-icon name="logo-npm"></ion-icon>
              </Link>
            </li>
            <li className="hover:transform hover:scale-150 transition-all duration-500">
              <Link className="hover:text-red-800">
                <ion-icon name="logo-react"></ion-icon>
              </Link>
            </li>
            <li className="hover:transform hover:scale-150 transition-all duration-500">
              <Link className="hover:text-red-800">
                <ion-icon name="logo-javascript"></ion-icon>
              </Link>
            </li>
          </ul>
          <div>
            <p className="text-sm font-bold text-slate-300">
              All Rights Reserved Berke Demirel &copy; 2023
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
