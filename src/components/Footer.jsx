import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full h-fit pt-12 pb-24 pl-48 md:pl-24 md:pr-24 pr-48 mmmd:pl-12 mmmd:pr-20 bg-bblack text-slate-50 font-texturina">
      <div className="flex flex-row items-center justify-center">
        <div className="flex flex-col gap-4">
          <ul className="list-none flex flex-row items-center gap-4 text-3xl gia:text-5xl font-bold mmmd:flex-col mmmd:gap-2">
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
            <p className="text-sm font-bold text-slate-300 text-center gia:text-xl">
              All Rights Reserved Berke Demirel &copy; 2023
            </p>
            <p className="text-center mt-2 text-slate-300 font-bold text-sm gia:text-xl">Contact: dberke00@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
