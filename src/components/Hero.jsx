// import logo from "../source/images/TomBombadil.jpg";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [isSticky, setIsSticky] = useState("")
  const [isGia, setIsGia] = useState('')


  const skills = document.getElementById("skills");
  const handleScroll = (e) => {
    e.preventDefault();
    skills.scrollIntoView({ behavior: "smooth" });
  };

  const sticky = () => {
    if(window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 500 ? setIsSticky('fixed') : setIsSticky('hidden')
    }
  }



  useEffect(() => {
    window.addEventListener('scroll', sticky)
    if(window !== undefined) {
      window.innerWidth > 1700 ? setIsGia('animation2') : setIsGia('animation')
    }
    
    return () => {
      window.removeEventListener('scroll', sticky)
    }
  }, [])

  const scrollToTop = (e) => {
    e.preventDefault();
    scrollTo({top: 0, behavior:'smooth'})
  }

  return (
    <div className="w-full bg-bblack h-screen font-texturina relative border-b border-slate-700">
      <div className="flex flex-row relative ">
        <div className=" absolute ml-14 container flex flex-col items-start">
          <div className="text-3xl gia:text-5xl ss:flex ss:flex-col ss:items-start ss:justify-start flex xxl:text-4xl flex-row items-start mt-36 justify-start flex font-bold text-slate-200 ssm:text-xl sms:text-xl">
            <p className="ss:text-xl">Hi, I am</p>
            <section className={`${isGia} h-10 gia:h-16 ml-2 overflow-hidden ss:-translate-x-4`}>
              <div className="">
                <div className=" inline-block h-12 gia:h-16 bg-bblack text-slate-50 pl-2 pr-2">
                  Berke Demirel
                </div>
              </div>
              <div className="">
                <div className=" inline-block h-12 gia:h-16 bg-slate-50 text-bblack pl-2 pr-2">
                  Tom Bombadil
                </div>
              </div>
              <div className="">
                <div className=" inline-block h-12 gia:h-16 bg-red-800 text-slate-50 pl-2 pr-2">
                  Junior Frontend Developer
                </div>
              </div>
            </section>
          </div>
          <div className="text-slate-300 lg:text-slate-50 w-header">
            <p className={`text-md xxl:text-lg font-bold mt-2 ssm:text-sm ssm:text-xs ssm:w-64 gia:text-xl`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam exercitationem earum quod possimus corrupti nemo culpa
              ducimus laudantium nostrum et?
            </p>
          </div>
          <Link className="text-slate-50 gia:text-xl ssm:text-sm sms:text-xs mt-44 ss:mt-10 sms:mt-14 border flex flex-row items-center justify-center border-slate-50 p-4 hover:bg-slate-50 hover:text-bblack font-bold transition-all duration-500 gap-2" onClick={handleScroll}>
            Learn More{" "}
            <span className="shake">
              <ion-icon name="arrow-down-outline"></ion-icon>
            </span>
          </Link>
          <button className={`text-slate-50 z-20 translate-y-a mmmd:text-xs ssm:-translate-x-gg translate-x-b lg:translate-y-c lg:translate-x-d mmd:translate-x-ee mmmd:translate-x-ff mmmd:translate-y-ff gia:hidden ${isSticky}`} onClick={scrollToTop}>Back to Top</button>
        </div>
        <div className="w-full">
          <iframe
            src="https://my.spline.design/untitled-b8fce33306b5bd25d6eca9d559c4ba99/"
            className="w-full h-sphere"
            title="Totoro"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Hero;
