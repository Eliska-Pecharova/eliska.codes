import { ExternalLink } from "lucide-react";

const ProjectCard = ({ project, lang, onOpen }) => {
  return (
    <div className="project">
      <img
        src={project.image}
        alt={project.title[lang]}
        className="project__image"
      />

      <div className="project__content">
        <h3 className="project__name">{project.title[lang]}</h3>
        <p className="project__desc">{project.desc[lang]}</p>

        <div className="project__tags">
          {project.tech.map((t) => (
            <span key={t} className="project__tag">
              {t}
            </span>
          ))}
        </div>

        <button className="project__detail-btn" onClick={() => onOpen(project)}>
          {lang === "cs" ? "Detail" : "Detail"}
          <ExternalLink size={18} />
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
