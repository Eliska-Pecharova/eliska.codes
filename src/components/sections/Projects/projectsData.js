import pilea from "../../../images/pilea.webp";
import beetle from "../../../images/lacasabeetlehouse.jpg";
import garden from "../../../images/zahradnictvi.jpg";
import netflix from "../../../images/netflix.jpg";

export const projectsData = [
  {
    id: 1,
    title: {
      cs: "Urban Jungle Katalog",
      en: "Urban Jungle Catalog",
    },
    desc: {
      cs: "Interaktivní katalog pokojových rostlin v moderním UI.",
      en: "Interactive catalog of houseplants in a modern UI.",
    },
    longDesc: {
      cs: "Dlouhý popis projektu v češtině…",
      en: "Long detailed description in English…",
    },
    tech: ["React"],
    image: pilea,
    gallery: [pilea],
    github:
      "https://github.com/Eliska-Pecharova/Urban-jungle-catalog-Project.git",
    demo: "",
  },

  {
    id: 2,
    title: {
      cs: "La Casa Beetle House",
      en: "La Casa Beetle House",
    },
    desc: {
      cs: "Prezentace pro luxusní rekreační ubytování.",
      en: "Presentation for a luxury vacation rental.",
    },
    longDesc: {
      cs: "Dlouhý popis projektu v češtině…",
      en: "Long detailed description in English…",
    },
    tech: ["HTML5", "CSS3", "JavaScript"],
    image: beetle,
    gallery: [beetle],
    github:
      "https://github.com/Eliska-Pecharova/LaCasaBeetleHouse-Roatan-Web.git",
    demo: "http://lacasabeetlehouse-roatan.com/",
  },
  {
    id: 3,
    title: {
      cs: "Zahradnictví Pod Skalkou",
      en: "Zahradnictví Pod Skalkou",
    },
    desc: {
      cs: "Web pro rodinné zahradnictví.",
      en: "Website for a family garden center.",
    },
    longDesc: {
      cs: "Dlouhý popis projektu v češtině…",
      en: "Long detailed description in English…",
    },
    tech: ["HTML5", "CSS3", "JavaScript"],
    image: garden,
    gallery: [garden],
    github: "https://github.com/Eliska-Pecharova/Zahradnictv--Pod-Skalkou.git",
    demo: "",
  },
  {
    id: 4,
    title: {
      cs: "Moje verze Netflixu",
      en: "My version of Netflix",
    },
    desc: {
      cs: "Moje vlastní verze Netflix UI.",
      en: "My own version of Netflix UI.",
    },
    longDesc: {
      cs: "Dlouhý popis projektu v češtině…",
      en: "Long detailed description in English…",
    },
    tech: ["HTML5", "CSS3", "JavaScript"],
    image: netflix,
    gallery: [netflix],
    github: "https://github.com/Eliska-Pecharova/PROJECT-2.git",
    demo: "",
  },
];
