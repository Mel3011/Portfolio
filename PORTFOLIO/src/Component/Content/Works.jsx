import BOOKI from "../../assets/booki.webp";
import SOPHIE from "../../assets/sophie.webp";
import NINA from "../../assets/nina-carducci.webp";
import KASA from "../../assets/kasa.webp";
import GRIMOIRE from "../../assets/vieuxgrimoire.webp";
import PORTFOLIO from "../../assets/portfolio.webp";

const Works = () => {
  const works = [
    {
      title: "Booki",
      description:
        "Créer la page d'accueil d'une agence de voyage avec HTML & CSS",
      image: BOOKI,
      imageAlt: "image description",
      tools: ["Html", "Css", "SEO"],
      repo: "https://github.com/Mel3011/Projet2",
      link: "https://mel3011.github.io/Projet2/",
    },
    {
      title: "Sophie Bluel",
      description: "Créer une page web dynamique avec JavaScript",
      image: SOPHIE,
      imageAlt: "image description",
      tools: ["Javascript"],
      repo: "https://github.com/Mel3011/Projet3",
      link: "https://github.com/",
    },
    {
      title: "Nina Carducci",
      description: "Débugger et optimiser un site de photographe",
      image: NINA,
      imageAlt: "image description",
      tools: ["Html", "SEO", "DevTools"],
      repo: "https://github.com/Mel3011/Projet5",
      link: "https://github.com/",
    },
    {
      title: "KASA",
      description:
        "Créez une application web de location immobilière avec React",
      image: KASA,
      imageAlt: "image description",
      tools: ["React", "Sass"],
      repo: "https://github.com/Mel3011/Projet6",
      link: "https://github.com/",
    },
    {
      title: "Mon vieux grimoire",
      description: "Développer le back-end d'un site de notation de livres",
      image: GRIMOIRE,
      imageAlt: "image description",
      tools: ["NodeJS", "ExpressJS", "MongoDB"],
      repo: "https://github.com/Mel3011/Projet7",
      link: "https://github.com/",
    },
    {
      title: "Portfolio",
      description: "Créer et publier mon portfolio de développeur",
      image: PORTFOLIO,
      imageAlt: "image description",
      tools: ["Css", "SEO", "React"],
      repo: "https://github.com/Mel3011/Projet5",
      link: "https://github.com/",
    },
  ];

  return (
    <section className="full_Page" id="part3">
      <div className="apropos">
        <h2>Mes projets</h2>
        <div className="workslist">
          {works.length > 1
            ? works.map((work, index) => (
                <div className="Works" key={index}>
                  <div className="cover">
                    <img
                      src={work.image}
                      alt={work.imageAlt}
                      className="cover-img"
                    />
                  </div>
                  {work.tools && work.tools.length > 0 && (
                    <div className="tools">
                      <ul className="tools-project">
                        {work.tools.map((tool, index) => (
                          <li key={index} className="label">
                            {tool}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <p>{work.title}</p>
                  <p>{work.description}</p>
                  <div className="linkProject">
                    <button>
                      <a href={work.link} target="_blank" rel="noreferrer">
                        Voir le projet
                      </a>
                    </button>
                    <a href={work.repo} target="_blank" rel="noreferrer">
                      <i
                        className="fa-brands fa-github picto"
                        title="Code Repository"
                      ></i>
                    </a>
                  </div>
                </div>
              ))
            : "Pas de projet"}
        </div>
      </div>
    </section>
  );
};

export default Works;
