import js from "../source/images/js.png";
import css from "../source/images/css.png";
import html from "../source/images/html.png";
import react from "../source/images/react.png";
import tailwind from "../source/images/tailwind.png";

const Skills = () => {
  return (
    <div className="w-full relative border-b border-slate-700 h-fit pb-24 bg-bblack text-slate-50 flex flex-col items-center justify-start gap-4 font-texturina">
      <h1 className="text-4xl mb-12 mt-12 ">Skills</h1>
      <div className="overflow-hidden w-full bg-bblack whitespace-nowrap outer-slides">
        <div className='slides inline-block slide'>
          <img src={js} alt="" className="w-48 h-48 rounded-full inline-block mr-12" />
          <img src={html} alt="" className="w-48 h-48 rounded-full inline-block mr-12" />
          <img src={css} alt="" className="w-48 h-48 rounded-full inline-block mr-12" />
          <img src={react} alt="" className="w-48 h-48 rounded-full inline-block mr-12" />
          <img src={tailwind} alt="" className="w-48 h-48 rounded-full inline-block mr-12" />
        </div>
        <div className='slides inline-block slide'>
          <img src={js} alt="" className="w-48 h-48 rounded-full inline-block mr-12" />
          <img src={html} alt="" className="w-48 h-48 rounded-full inline-block mr-12" />
          <img src={css} alt="" className="w-48 h-48 rounded-full inline-block mr-12" />
          <img src={react} alt="" className="w-48 h-48 rounded-full inline-block mr-12" />
          <img src={tailwind} alt="" className="w-48 h-48 rounded-full inline-block mr-12" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
