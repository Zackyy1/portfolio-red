import React, { useEffect, useState } from "react";
//@ts-ignore
import { ReactComponent as Whirl } from "../../assets/wwwhirl.svg";
//@ts-ignore
import { ReactComponent as Java } from "../../assets/java.svg";
//@ts-ignore
import { ReactComponent as TS } from "../../assets/ts.svg";
//@ts-ignore
import { ReactComponent as Astro } from "../../assets/astro.svg";
//@ts-ignore
import { ReactComponent as Angular } from "../../assets/angular.svg";
//@ts-ignore
import { ReactComponent as Vue } from "../../assets/vue.svg";
//@ts-ignore
import { ReactComponent as ReactSVG } from "../../assets/react.svg";
//@ts-ignore
import { ReactComponent as NextJS } from "../../assets/nextjs.svg";
//@ts-ignore
import { ReactComponent as CSharp } from "../../assets/c-sharp.svg";
//@ts-ignore
import { ReactComponent as Prisma } from "../../assets/prisma.svg";
//@ts-ignore
import { ReactComponent as Python } from "../../assets/python.svg";
//@ts-ignore
import { ReactComponent as Tailwind } from "../../assets/tailwind.svg";
//@ts-ignore
import { ReactComponent as Vite } from "../../assets/vite.svg";

import "./Skills.scss";
const iconSize = 48;

interface Skill {
  [key: string]: {
    name: string;
    icon: JSX.Element;
    description: string;
  };
}

const Skills = () => {
  const [selected, setSelected] = useState("typescript");

  const skills: Skill = {
    typescript: {
      name: "TypeScript",
      icon: <TS width={iconSize} height={iconSize} />,
      description:
        "Obvious answer for JS or TS question. I love it. All projects have TS included by default.",
    },
    nextjs: {
      name: "NextJS",
      icon: (
        <NextJS
          className="bg-white rounded-full p-[1px]"
          width={iconSize}
          height={iconSize}
        />
      ),
      description:
        "I love NextJS. It takes the best of React and SSR and makes it easy to compose full-stack applications in no time. My latest and biggest projects are built with NextJS.",
    },
    react: {
      name: "React",
      icon: <ReactSVG width={iconSize} height={iconSize} />,
      description:
        "Deserves no introduction. It's a great framework to build a web application fast. Used in many projects, as well as this Website.",
    },
    tailwind: {
      name: "Tailwind",
      icon: <Tailwind width={iconSize} height={iconSize} />,
      description:
        "If time is of the essence, Tailwind is the way to go. No more CSS, just classes, and balanced design. Used in many projects, including this Website.",
    },
    python: {
      name: "Python",
      icon: <Python width={iconSize} height={iconSize} />,
      description:
        "Python is my choice when it comes to anything simple, but not web-related. Used heavily in Spirit Gaming project.",
    },
    prisma: {
      name: "Prisma",
      icon: <Prisma width={iconSize} height={iconSize} />,
      description:
        "Writing SQL queries is a pain. Prisma makes it easy to write queries and manage your database. Used in many full-stack projects.",
    },
    vue: {
      name: "Vue",
      icon: <Vue width={iconSize} height={iconSize} />,
      description:
        "I am a beginner in Vue. It's a pleasant framework to work with, if you are not a fan of React. Used in private projects for a short period of time.",
    },
    java: {
      name: "Java",
      icon: <Java width={iconSize} height={iconSize} />,
      description:
        "Java is an object-oriented programming language for writing legacy code. I don't have any significant projects with Java, but it's good to have it in my arsenal.",
    },
    angular: {
      name: "Angular",
      icon: <Angular width={iconSize} height={iconSize} />,
      description:
        "Some of my projects were built with Angular. It is, in my opinion, unnecessarily complex for a simple web application, and I personally don't like it. However, it's a great framework for large-scale projects and I would be glad to try it out once again.",
    },

    csharp: {
      name: "C#",
      icon: <CSharp width={iconSize} height={iconSize} />,
      description:
        "Learned C# basics to build games with Unity. I don't have any significant projects with C#, but it's good to know.",
    },
    vite: {
      name: "Vite",
      icon: <Vite width={iconSize} height={iconSize} />,
      description: "Learning Vite by creating this website.",
    },

    astro: {
      name: "Astro",
      icon: <Astro width={iconSize} height={iconSize} />,
      description:
        "Astro was my first choice for this website. It's a great framework for building static websites, but I decided to go with React for the sake of speed and usability. Astro did not meet my expectations for lack of some functionality that this website required, but I would be glad to try it out once again on some static site project.",
    },
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("spiral-animation-2");
          } else {
            entry.target.classList.remove("spiral-animation-2");
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    const spiralAnimation2 = document.querySelector(
      ".spiral-animation-placeholder-2"
    );

    if (spiralAnimation2) {
      observer.observe(spiralAnimation2);
    }

    return () => {
      if (spiralAnimation2) {
        observer.unobserve(spiralAnimation2);
      }
    };
  }, []);

  return (
    <section className="min-h-[100vh] relative scroll-snap " id="skills">
      <Whirl className="max-h-[100vh] xs:min-w-[1000px] absolute xs:left-[50%] xs:translate-x-[-50%] md:left-auto md:translate-x-0 md:right-0 spiral-animation-placeholder-2 opacity-40 z-[-1]" />
      <div className="max-w-[1080px] px-4 w-full mx-auto z-[9999] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h1 className="gradient-text font-bold text-4xl xs:text-center my-2">
          My skills & passions
        </h1>
        <div className="">
          <p className="block text-center gradient-text font-bold text-xl w-full">
            Favorite Frameworks & Languages
          </p>
          <p className="block text-center gradient-text font-bold text-md w-full">
            From most to least favorite
          </p>
          <div className="my-12 icon-pack flex-wrap flex justify-center w-full mx-auto px-4 flex-row gap-2 gap-y-4">
            {Object.keys(skills).map((skill: any) => {
              const Icon = skills[skill].icon;
              return (
                <div
                  className={`icon ${selected === skill ? "active" : ""}`}
                  onClick={() => setSelected(skill)}
                  key={skill}
                >
                  {Icon}
                </div>
              );
            })}
          </div>
        </div>
        {selected && (
          <div className="flex mt-8 min-h-[170px] flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center">
              <h1 className="gradient-text font-bold text-4xl xs:text-center ">
                {skills[selected].name}
              </h1>
              <p className="text-center gradient-text font-bold text-lg w-full py-4">
                {skills[selected].description}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
