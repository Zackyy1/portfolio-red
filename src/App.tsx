import "./styles/global.scss";
//@ts-ignore
import { ReactComponent as Blurry } from "./assets/bbblurry.svg";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Rain from "./components/Rain/Rain";
import Main from "./components/Main/Main";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Rain />
      <main className="overflow-x-hidden relative scroll-container">
        <Blurry className="fixed min-height-[100vh] top-[50%] translate-y-[-50%] scale-[4] left-[50%] z-[-1] translate-x-[-50%]" />
        <div className="p-4 gradient-text font-bold text-xl absolute max-w-[800px] w-full left-[50%] translate-x-[-50%] justify-evenly flex mx-auto z-[99999]">
          <button
            className="p-4"
            onClick={() => {
              // smooth scroll to Portfolio section
              const portfolio = document.getElementById("portfolio");
              if (portfolio) {
                portfolio.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }
            }}
            role="button"
          >
            Portfolio
          </button>
          <button
            className="p-4"
            onClick={() => {
              // smooth scroll to skills section
              const skills = document.getElementById("skills");
              if (skills) {
                skills.scrollIntoView({ behavior: "smooth" });
              }
            }}
            role="button"
          >
            Skills
          </button>
          <button
            className="p-4"
            onClick={() => {
              // smooth scroll to skills section
              const skills = document.getElementById("contact");
              if (skills) {
                skills.scrollIntoView({ behavior: "smooth" });
              }
            }}
            role="button"
          >
            Contact
          </button>
        </div>
        <Main />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;
