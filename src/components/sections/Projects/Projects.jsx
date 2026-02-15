import { useState } from "react";
import { projectsData } from "./projectsData";
import ProjectCard from "./ProjectCard";
import ProjectDetail from "./ProjectDetail";
import "./Projects.css";

export default function Projects({ lang }) {
  const [selected, setSelected] = useState(null);

  return (
    <section className="projects" id="projects">
      <h2 className="projects__title">
        {lang === "cs" ? "Moje Projekty" : "My Projects"}
      </h2>

      <div className="projects__grid">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            lang={lang}
            onOpen={setSelected}
          />
        ))}
      </div>

      <ProjectDetail
        project={selected}
        lang={lang}
        onClose={() => setSelected(null)}
      />
    </section>
  );
}
