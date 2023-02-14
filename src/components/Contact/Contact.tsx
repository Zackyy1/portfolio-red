import React, { useEffect } from "react";
//@ts-ignore
import { ReactComponent as Burst } from "../../assets/bbburst.svg";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("spiral-animation-3");
          } else {
            entry.target.classList.remove("spiral-animation-3");
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    const spiralAnimation3 = document.querySelector(
      ".spiral-animation-placeholder-3"
    );

    if (spiralAnimation3) {
      // observer.observe(spiralAnimation3);
    }

    return () => {
      if (spiralAnimation3) {
        // observer.unobserve(spiralAnimation3);
      }
    };
  }, []);

  return (
    <section
      id="contact"
      className="min-h-[100vh] scroll-snap relative flex flex-col justify-center items-center text-center p-4"
    >
      <Burst className="max-h-[100vh] spiral-animation-placeholder-3 xs:min-w-[1000px] top-[50%] translate-y-[-50%] absolute left-[50%] translate-x-[-50%] opacity-40 z-[-1]" />
      <div>
        <div className="gradient-text font-bold text-2xl">
          Send me your compliments
        </div>
        <a
          target={"_blank"}
          href="https://www.linkedin.com/in/martin-goncharov-5666a3199/"
          rel="noreferrer"
          className="p-8 text-[120px] "
        >
          <FontAwesomeIcon
            className="text-red-200 hover:scale-105 transition-all duration-150"
            icon={faLinkedin}
          />
        </a>

        <a
          target={"_blank"}
          href="https://github.com/Zackyy1"
          className="p-8 text-[120px] "
          rel="noreferrer"
        >
          <FontAwesomeIcon
            className="text-red-200 hover:scale-105 transition-all duration-150"
            icon={faGithub}
          />
        </a>
        <div className="gradient-text font-bold text-xl">
          Or contact me using the <abbr title="boring">formal</abbr> way
        </div>
        <div className="mt-4">
          <a
            className="gradient-text text-2xl mt-4 underline"
            href="mailto:gontsarov.martin@gmail.com"
          >
            gontsarov.martin@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
