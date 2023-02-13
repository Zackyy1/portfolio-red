import React, { useEffect } from "react";

//@ts-ignore
import { ReactComponent as Monk } from "../../assets/monk.svg";
//@ts-ignore
import { ReactComponent as Spiral } from "../../assets/red-spiral.svg";

const Main = () => {
  // observe all elements with class "scroll-snap"
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("spiral-animation");
          } else {
            entry.target.classList.remove("spiral-animation");
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );
    const spiralAnimation1 = document.querySelector(
      ".spiral-animation-placeholder"
    );
    if (spiralAnimation1) {
      observer.observe(spiralAnimation1);
    }

    return () => {
      if (spiralAnimation1) {
        observer.unobserve(spiralAnimation1);
      }
    };
  }, []);
  return (
    <section className="min-h-[100vh] scroll-snap relative flex flex-col justify-center items-center text-center p-4">
      <Spiral className="spiral-animation-placeholder max-h-[70vh] absolute min-w-[400px] left-[50%] xs:top-[40%] md:top-[45%] translate-x-[-50%] translate-y-[-50%]" />
      <div className="z-[9999] mt-12">
        <Monk className="max-h-[128px] m-4 xs:mt-[-23%] md:mt-[-10%]  text-white" />
        <h1 className="xs:text-2xl font-bold z-[999] md:text-6xl gradient-text">
          Martin Goncharov
        </h1>
        <h2 className="gradient-text z-[999] xs:text-xl md:text-4xl leading-[3rem]">
          Software Engineer
        </h2>
      </div>
      <div className="flex xs:flex-wrap md:flex-nowrap xs:px-4 md:px-24 absolute xs:bottom-16 md:bottom-16 flex-row justify-between w-full xs:gap-y-2 md:gap-y-8">
        <div className="w-full text-center my-1">
          <span className="font-bold  gradient-text xs: text-lg md:text-2xl block">725M+</span>
          <span className="xs:text-md md:text-xl gradient-text  uppercase">
            Seconds lived
          </span>
        </div>
        <div className="w-full text-center my-1">
          <span className="font-bold  gradient-text xs: text-lg md:text-2xl block">252M+</span>
          <span className="xs:text-md md:text-xl gradient-text  uppercase">
            seconds ago wrote first code
          </span>
        </div>
        <div className="w-full text-center my-1">
          <span className="font-bold  gradient-text xs: text-lg md:text-2xl block">120k+</span>
          <span className="xs:text-md md:text-xl gradient-text  uppercase">
            Lines of code written
          </span>
        </div>
      </div>
    </section>
  );
};

export default Main;
