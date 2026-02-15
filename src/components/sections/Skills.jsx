import "./Skills.css";
import { Github, Linkedin, MapPin, Plane } from "lucide-react";

const texts = {
  en: {
    nomadTitle: "Digital Nomad",
    nomadText:
      "I combine a passion for coding with exploring the world. A remote-first mindset is in my DNA.",
    location: "Prague / Remote",
    availability: "Available for hire",
    title: "Tech Stack",
  },

  cs: {
    nomadTitle: "Digitální nomád",
    nomadText:
      "Spojuji vášeň pro programování s objevováním světa. Remote-first přístup mám v DNA.",
    location: "Praha / Remote",
    availability: "K dispozici pro spolupráci",
    title: "Technologie",
  },
};

const Skills = ({ lang }) => {
  const t = texts[lang];

  const skills = [
    "React",
    "JavaScript",
    "Tailwind CSS",
    "HTML5",
    "CSS3",
    "Sass",
    "SCSS",
    "JQuery",
    "Figma",
  ];

  return (
    <section className="skills" id="skills">
      {/* NOMAD BOX */}
      <div className="skills__nomad digital-nomad-bg">
        <h3 className="skills__nomad-title">{t.nomadTitle}</h3>

        <p className="skills__nomad-text">{t.nomadText}</p>

        <div className="skills__nomad-icons">
          <span>
            <MapPin size={18} /> {t.location}
          </span>
          <span>
            <Plane size={18} /> {t.availability}
          </span>
        </div>
      </div>

      <h2 className="skills__title">{t.title}</h2>

      <div className="skills__content">
        {/* Skills list */}
        <div className="skills__list">
          {skills.map((skill) => (
            <span key={skill} className="skills__item">
              {skill}
            </span>
          ))}
        </div>

        {/* Social icons */}
        <div className="skills__social">
          <a
            href="https://github.com/Eliska-Pecharova"
            target="_blank"
            rel="noopener noreferrer"
            className="skills__icon"
          >
            <Github size={32} />
          </a>

          <a
            href="https://www.linkedin.com/in/eli%C5%A1ka-pecharov%C3%A1-445260380/"
            target="_blank"
            rel="noopener noreferrer"
            className="skills__icon"
          >
            <Linkedin size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Skills;
