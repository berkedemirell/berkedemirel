// import logo from "../source/images/TomBombadil.jpg";

import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className=" bg-bblack h-screen font-texturina relative border-b border-slate-700">
      <div className="flex flex-row relative">
        <div className=" absolute ml-14 container flex flex-col items-start">
          <div className="text-3xl flex flex-row items-start mt-36 justify-start flex font-bold text-slate-200">
            <p>Hi, I am</p>
            <section className="animation h-10 ml-2 overflow-hidden">
              <div className="">
                <div className=" inline-block h-12 bg-bblack text-slate-50 pl-2 pr-2">
                  Berke Demirel
                </div>
              </div>
              <div className="">
                <div className=" inline-block h-12 bg-slate-50 text-bblack pl-2 pr-2">
                  Tom Bombadil
                </div>
              </div>
              <div className="">
                <div className=" inline-block h-12 bg-red-800 text-slate-50 pl-2 pr-2">
                  Junior Frontend Developer
                </div>
              </div>
            </section>
          </div>
          <div className="text-slate-300 w-header">
            <p className="text-md font-bold mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam exercitationem earum quod possimus corrupti nemo culpa
              ducimus laudantium nostrum et?
            </p>
          </div>
           <Link className="text-slate-50 mt-44 border flex flex-row items-center justify-center border-slate-50 p-4 hover:bg-slate-50 hover:text-bblack font-bold transition-all duration-500 gap-2">Learn More <span className="shake"><ion-icon name="arrow-down-outline"></ion-icon></span></Link>
        </div>
        <div className="w-full">
          {/* <iframe src="https://my.spline.design/untitled-b8fce33306b5bd25d6eca9d559c4ba99/" className="w-full container2 h-sphere">
        </iframe> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
