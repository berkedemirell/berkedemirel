import js from "../source/images/js.webp";
import css from "../source/images/css.webp";
import html from "../source/images/html.webp";
import react from "../source/images/react.webp";
import tailwind from "../source/images/tailwind.webp";
import { useEffect, useRef, useState } from "react";

const Skills = () => {
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
    <div
      className={` ${!isInView ? 'w-screen bg-bblack h-full' : 'w-fit h-fit'} relative border-b border-slate-700 pb-24 mmd:pb-12 bg-bblack text-slate-50 flex flex-col items-center justify-start gap-4 font-texturina`}
      id="skills"
      ref={targetElement}
    >
      <h1 className="text-4xl mb-12 mt-12 mmd:mb-6 mmd:mt-6 mmd:text-3xl sms:text-2xl uppercase sms:mr-12 ss:mr-28 gia:text-6xl">
        Skills
      </h1>
      <div
        className={`overflow-hidden w-full bg-bblack whitespace-nowrap outer-slides ${
          isInView ? "" : "hidden"
        }`}
      >
        <div className="slides inline-block slide">
          <img
            src={js}
            alt=""
            className="w-48 h-48 lg:h-36 lg:w-36 mmd:h-20 mmd:w-20 sms:w-12 sms:h-12 xxl:w-60 xxl:h-60 rounded-full inline-block mr-12"
          />
          <img
            src={html}
            alt=""
            className="w-48 h-48 lg:h-36 lg:w-36 mmd:h-20 mmd:w-20 sms:w-12 sms:h-12 xxl:w-60 xxl:h-60 rounded-full inline-block mr-12"
          />
          <img
            src={css}
            alt=""
            className="w-48 h-48 lg:h-36 lg:w-36 mmd:h-20 mmd:w-20 sms:w-12 sms:h-12 xxl:w-60 xxl:h-60 rounded-full inline-block mr-12"
          />
          <img
            src={react}
            alt=""
            className="w-48 h-48 lg:h-36 lg:w-36 mmd:h-20 mmd:w-20 sms:w-12 sms:h-12 xxl:w-60 xxl:h-60 rounded-full inline-block mr-12"
          />
          <img
            src={tailwind}
            alt=""
            className="w-48 h-48 lg:h-36 lg:w-36 mmd:h-20 mmd:w-20 sms:w-12 sms:h-12 xxl:w-60 xxl:h-60 rounded-full inline-block mr-12"
          />
        </div>
        <div
          className={`slides inline-block slide ${isInView ? "" : "hidden"}`}
        >
          <img
            src={js}
            alt=""
            className="w-48 h-48 lg:h-36 lg:w-36 mmd:h-20 mmd:w-20 sms:w-12 sms:h-12 xxl:w-60 xxl:h-60 rounded-full inline-block mr-12"
          />
          <img
            src={html}
            alt=""
            className="w-48 h-48 lg:h-36 lg:w-36 mmd:h-20 mmd:w-20 sms:w-12 sms:h-12 xxl:w-60 xxl:h-60 rounded-full inline-block mr-12"
          />
          <img
            src={css}
            alt=""
            className="w-48 h-48 lg:h-36 lg:w-36 mmd:h-20 mmd:w-20 sms:w-12 sms:h-12 xxl:w-60 xxl:h-60 rounded-full inline-block mr-12"
          />
          <img
            src={react}
            alt=""
            className="w-48 h-48 lg:h-36 lg:w-36 mmd:h-20 mmd:w-20 sms:w-12 sms:h-12 xxl:w-60 xxl:h-60 rounded-full inline-block mr-12"
          />
          <img
            src={tailwind}
            alt=""
            className="w-48 h-48 lg:h-36 lg:w-36 mmd:h-20 mmd:w-20 sms:w-12 sms:h-12 xxl:w-60 xxl:h-60 rounded-full inline-block mr-12"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
