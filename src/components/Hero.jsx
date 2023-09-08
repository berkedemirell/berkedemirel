
import { Link } from "react-router-dom";
import { FaArrowDown } from "react-icons/fa";

const Hero = () => {

  const handleScroll = (e) => {
    e.preventDefault();
    const skills = document.getElementById("skills");
    skills.scrollIntoView({ behavior: "smooth" });
  };

  return (
    
    <div className="w-full bg-bblack h-screen font-texturina relative border-b border-slate-700 gia:pl-14 gia:pr-14">
      <div className="flex flex-row relative ">
        <div className=" absolute ml-14 flex flex-col items-start">
          <div className="text-3xl gia:text-5xl ss:flex ss:flex-col smss:flex-col smss:items-start ss:items-start ss:justify-start flex xxl:text-4xl flex-row items-start mt-36 justify-start flex font-bold text-slate-200 ssm:text-xl sms:text-xl">
            <p className="ss:text-xl">Hi, I am</p>
            <section
              className={`${window.innerWidth > 1700 ? 'animation2' : 'animation'} h-10 gia:h-16 ml-2 overflow-hidden smss:-translate-x-4`}
            >
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
            <p
              className={`text-md xxl:text-lg font-bold mt-2 ssm:text-sm ssm:text-xs ssm:w-64 gia:text-xl`}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam exercitationem earum quod possimus corrupti nemo culpa
              ducimus laudantium nostrum et?
            </p>
          </div>
          <Link
            className="text-slate-50 gia:text-xl ssm:text-sm sms:text-xs mt-44 ss:mt-10 sms:mt-14 border flex flex-row items-center justify-center border-slate-50 p-4 hover:bg-slate-50 hover:text-bblack font-bold transition-all duration-500 gap-2"
            onClick={handleScroll}
            aria-label="down arrow icon"
          >
            Learn More{" "}
            <span className="shake">
              <FaArrowDown />
            </span>
          </Link>
        </div>
        <div className="w-full">
          <iframe
            defer src="https://my.spline.design/untitled-b8fce33306b5bd25d6eca9d559c4ba99/"
            className="w-full h-sphere"
            title="Totoro"
          ></iframe>
    </div>
      </div>
    </div>
  );
};

export default Hero;
