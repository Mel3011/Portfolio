/* eslint-disable react/no-unescaped-entities */
import Melanie from "../../assets/melanie-avatar.png";
import { Line } from "rc-progress";
const AboutMe = () => {
  return (
    <section className="full_Page" id="part2">
      <div className="apropos">
        <h2>A propos de moi</h2>
        <div className="cv">
          <div className="image">
            <img src={Melanie} alt="" />
          </div>
          <div className="competence">
            <div className="bio">
              <p>
                J'adore résoudre des problèmes complexes, concevoir des
                expériences utilisateur exceptionnelles et travailler avec des
                technologies modernes pour donner vie à des projets en ligne.
                Mon objectif est de créer des solutions numériques innovantes et
                conviviales qui apportent de la valeur aux utilisateurs et aux
                entreprises
              </p>
              <button>Télécharger mon CV</button>
            </div>
            <div className="skills">
              <div className="skill_info">
                <div className="label">
                  <p className="title">Html </p>
                  <p>90%</p>
                </div>

                <Line percent={90} strokeWidth={3} strokeColor="#FF6C5F" />
              </div>
              <div className="skill_info">
                <div className="label">
                  <p className="title">CSS </p>
                  <p>90%</p>
                </div>
                <Line percent={90} strokeWidth={3} strokeColor="#FF6C5F" />
              </div>
              <div className="skill_info">
                <div className="label">
                  <p className="title">React </p>
                  <p>70%</p>
                </div>
                <Line percent={70} strokeWidth={3} strokeColor="#FF6C5F" />
              </div>
              <div className="skill_info">
                <div className="label">
                  <p className="title">NodeJS </p>
                  <p>60%</p>
                </div>
                <Line percent={60} strokeWidth={3} strokeColor="#FF6C5F" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
