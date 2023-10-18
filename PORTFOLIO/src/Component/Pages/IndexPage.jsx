import AboutMe from "../Content/AboutMe";
import Contact from "../Content/Contact";
import Profil from "../Content/Profil";
import Works from "../Content/Works";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const IndexPage = () => {
  return (
    <div className="main-container">
      <ToastContainer />
      <Profil />

      <AboutMe />

      <Works />

      <Contact />
    </div>
  );
};

export default IndexPage;
