import "./ProjectDetail.css";

/**
 * Super, tahleta komponenta je graficky velmi hezká, moc se mi líbí.
 */
const ProjectDetail = ({ project, lang, onClose }) => {
  if (!project) return null;

  return (
    <div className="project-detail__overlay" onClick={onClose}>
      <div className="project-detail" onClick={(e) => e.stopPropagation()}>
        <button className="project-detail__close" onClick={onClose}>
          ✕
        </button>

        <h2 className="project-detail__title">{project.title[lang]}</h2>

        <p className="project-detail__desc">{project.longDesc[lang]}</p>


        {/* Nezkusíme si udělat vlastní sliding galerii obrázků? Co myslíš? To by bylo COOL */}
        <div className="project-detail__gallery">
          {project.gallery?.map((img, i) => (
            <img key={i} src={img} alt="" />
          ))}
        </div>

        <div className="project-detail__tech">
          {project.tech.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>

          {/* Ten GitHub se nám tu jako Link opakuje, možná vlastní komponenta */}
        <div className="project-detail__links">
          {project.github && (
            <a href={project.github} target="_blank">
              GitHub
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank">
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
