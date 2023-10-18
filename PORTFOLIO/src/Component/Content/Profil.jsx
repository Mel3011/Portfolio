import Melanie from "../../assets/melanie-avatar.png";
import HTML from "../../assets/html.svg";
import CSS from "../../assets/css.svg";
import JS from "../../assets/javascript.svg";
import REACT from "../../assets/react.svg";
import SASS from "../../assets/sass.svg";
import NODE from "../../assets/node.svg";

const Profil = () => {
  return (
    <section className="full_Page" id="part1">
      <div className="container">
        <div className="profil_container">
          <div className="picture">
            <img src={Melanie} alt="" />
          </div>
          <div className="information">
            <div className="name">
              <h1>
                <span className="badge">Mélanie TRUFFY</span> - Développeuse Web
                👋
              </h1>
            </div>
            <div className="poste">
              <p>
                Dans le domaine du web depuis 7 ans et passionnée par la tech,
                je me suis formée au métier de développeur web en 2023
              </p>
            </div>
            <div className="social">
              <a href="https://github.com/Mel3011">
                <i
                  className="fa-brands fa-github picto"
                  title="Voir mes projets"
                ></i>
              </a>
              <a href="www.linkedin.com/in/melanie-truffy">
                <i
                  className="fa-brands fa-linkedin-in picto"
                  title="Me suivre sur Linkedin"
                ></i>
              </a>
            </div>
            <div className="techno">
              <p className="tecnoTitle">Mes technos</p>
              <ul className="technoList">
                <li title="HTML" className="myTechno">
                  <img src={HTML} alt="html" />
                </li>
                <li title="CSS" className="myTechno">
                  <img src={CSS} alt="css" />
                </li>
                <li title="JAVASCRIPT" className="myTechno">
                  <img src={JS} alt="Javascript" />
                </li>
                <li title="REACT" className="myTechno">
                  <img src={REACT} alt="React" />
                </li>
                <li title="NODEJS" className="myTechno">
                  <img src={NODE} alt="NodeJs" />
                </li>
                <li title="SASS" className="myTechno">
                  <img src={SASS} alt="Sass" />
                </li>
              </ul>
            </div>
            <div className="contact">
              <a href="#part4">
                <button>Me contacter</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profil;
