import Projects from "./Projects/Projects";

export default function Portfolio() {
  return (
    <section id="Portfolio" className="p-8">
      <p className="text-center text-sm opacity-[.5]">PORTFOLIO</p>
      <h1 className="text-center">
        Featured <span className="text-myColor">Projects</span>
      </h1>
      <Projects />
      <div className="flex gap-4 justify-center">
        <a
          href="https://www.behance.net/dolapooyesola"
          className="view relative">
          View Behance
        </a>
        <a href="https://github.com/oyesola-dolapo" className="view relative">
          View Github
        </a>
      </div>
    </section>
  );
}
