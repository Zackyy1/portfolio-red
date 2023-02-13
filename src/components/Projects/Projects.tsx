import React, { useEffect, useRef, useState } from "react";

import SpiritGaming from "@/assets/spirit.png";
import relivico from "@/assets/relivico2.png";
import neu from "@/assets/vun2.png";
import linkhub from "@/assets/linkhub2.png";

import "./Projects.scss";

interface Project {
  name: string;
  status: string;
  description: string;
  technologies: string[];
  image: string;
  link: string | null;
}

const projects: { [projectName: string]: Project } = {
  "Spirit Gaming": {
    name: "Spirit Gaming",
    status: "Live",
    description:
      "Website for a gaming community.",
    technologies: [
      "React",
      "scss",
      "Heroku",
      "Python",
      "express",
      "node",
      "Firebase",
      "OAuth",
      "APIs",
    ],
    image: SpiritGaming,
    link: "https://spirit-gaming.com",
  },
  Relivico: {
    name: "Relivico",
    status: "Live / In Development",
    description:
      "Huge and ambitious start-up project - B2B ERP system. ",
    technologies: [
      "NextJS",
      "Node Backend",
      "Prisma",
      "MongoDB",
      "MySQL",
      "Docker",
      "TailwindCSS",
      "APIs",
    ],
    image: relivico,
    link: "https://relivi.co",
  },
  LinkHub: {
    name: "Linkhub",
    status: "Live / In Development",
    description:
      "New Link-in-bio solution, as well as NFC cards for offline connections.",
    technologies: [
      "NextJS",
      "tRPC",
      "MySQL",
      "Docker",
      "TailwindCSS",
      "Next-Auth",
      "Prisma",
    ],
    image: linkhub,
    link: "https://linkhub.gg/",
  },
  // Spyfall: {
  //   name: "Spyfall",
  //   status: "Inactive",
  //   description:
  //     "A web-remake of a popular board game. It's an offline multiplayer game, where players are trying to guess the location, while one of them is a spy. Due to Heroku's new free usage policy, the project is currently inactive. I'm planning to migrate it to a different hosting provider in the future and refactor it to a mobile application.",
  //   technologies: ["React", "Firebase", "Socket.io"],
  //   image: spyfall,
  //   link: null,
  // },
  "Vun UI": {
    name: "Vun UI",
    status: "Live / In Development",
    description:
      "A React component library to quickly compose apps in a Neumorphic design.",
    technologies: ["React", "Scss", "Storybook (TBD)", "npm package"],
    image: neu,
    link: "https://vun-ui.web.app/",
  },
};

const Projects = () => {
  const [activeImage, setActiveImage] = useState<number>(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);

  useEffect(() => {
    const handleOnDown = (e: MouseEvent | Touch) =>
      (trackRef.current!.dataset.mouseDownAt = e.clientX.toString() || "0");

    const handleOnUp = () => {
      trackRef.current!.dataset.mouseDownAt = "0";
      trackRef.current!.dataset.prevPercentage =
        trackRef.current!.dataset.percentage || "0";
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (!entry.target.classList.contains("image")) return;
          if (entry.isIntersecting) {
            for (const image of trackRef.current!.getElementsByClassName(
              "image"
            )) {
              image.classList.remove("active");
            }

            entry.target.classList.add("active");
            setActiveImage(imagesRef.current.indexOf(entry.target as any));
          } else {
            entry.target.classList.remove("active");
          }
        });
      },
      { root: document.querySelector("#intersection"), threshold: 0.2 }
    );

    const handleOnMove = (e: MouseEvent | Touch) => {
      if (trackRef.current!.dataset.mouseDownAt === "0") return;

      const mouseDelta =
          parseFloat(trackRef.current!.dataset.mouseDownAt as string) -
          e.clientX,
        maxDelta = trackRef.current!.scrollWidth / 2;

      const percentage = (mouseDelta / maxDelta) * -100,
        nextPercentageUnconstrained =
          parseFloat(trackRef.current!.dataset.prevPercentage as string) +
          percentage,
        nextPercentage = Math.max(
          Math.min(nextPercentageUnconstrained, 0),
          -75
        );

      trackRef.current!.dataset.percentage = nextPercentage.toString() || "0";

      trackRef.current!.animate(
        {
          transform: `translate(${nextPercentage}%, -50%)`,
        },
        { duration: 1200, fill: "forwards" }
      );

      imagesRef.current.forEach((image) => {
        image.animate(
          {
            objectPosition: `${100 + nextPercentage}% center`,
          },
          { duration: 1200, fill: "forwards" }
        );
      });
    };

    window.onmousedown = (e) => handleOnDown(e);
    window.ontouchstart = (e) => handleOnDown(e.touches[0]);
    window.onmouseup = (e) => handleOnUp();
    window.ontouchend = (e) => handleOnUp();
    window.onmousemove = (e) => handleOnMove(e);
    window.ontouchmove = (e) => handleOnMove(e.touches[0]);
    imagesRef.current.forEach((image) => image && observer.observe(image));
    return () => {
      window.onmousedown = null;
      window.ontouchstart = null;
      window.onmouseup = null;
      window.ontouchend = null;
      window.onmousemove = null;
      window.ontouchmove = null;
      imagesRef.current.forEach((image) => image && observer.unobserve(image));
    };
  }, []);

  return (
    <section id="portfolio" className="scroll-snap relative min-h-[100vh]">
      <h2 className="text-4xl pt-4 block gradient-text font-bold text-center">
        My Projects
      </h2>
      <div
        id="intersection"
        className="absolute w-[8rem] left-[50%] h-[80vmin] top-[50%] translate-x-[-50%] text-4xl translate-y-[-50%] z-[999]"
      >
        <div
          id="image-track"
          ref={trackRef}
          className="flex my-4 gap-2 absolute"
          data-mouse-down-at="0"
          data-prev-percentage="0"
          data-selected-index="0"
        >
          {Object.keys(projects).map((projectKey: string, index: number) => {
            const project = projects[projectKey] as Project;
            return (
              <img
                key={projectKey}
                className={`image rounded-xl ${index === 0 ? "active" : ""}`}
                draggable="false"
                ref={(el) => ((imagesRef.current[index] as any) = el)}
                src={project.image}
              />
            );
          })}
        </div>
      </div>

      <div className="absolute md:top-[55%] z-[99999] xs:top-[60%] gradient-text flex flex-col justify-center w-full px-8">
        <h1 className="text-center xs:text-lg xs:mt-8 md:text-4xl font-bold">
          {Object.values(projects)[activeImage].name}
        </h1>
        <p className="text-center max-w-[400px] text-lg mx-auto">
          {Object.values(projects)[activeImage].description}
        </p>
        <a
          target={"_blank"}
          rel="noreferrer"
          className="font-center mx-auto cursor-pointer mt-8 text-4xl underline"
          href={Object.values(projects)[activeImage].link as string}
        >
          Visit Project
        </a>
      </div>
    </section>
  );
};

export default Projects;
