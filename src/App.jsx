import { useState } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faGraduationCap,
  faScroll,
  faUser,
  faEnvelope,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="grid">
        <div className="main-box">
          <div className="side-content">
            <div className="user-info">
              <div className="user-image">
                <img src="Images\user.png" alt="" />
              </div>
              <span>
                <h1>Zarif Amir Sanad</h1>
              </span>
              <span>
                <h3>Full-Stack Developer</h3>
              </span>
              <div className="icon-fix">
                <FontAwesomeIcon icon={faGithub} size="lg" />
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
                <FontAwesomeIcon icon={faWhatsapp} size="lg" />
              </div>
            </div>
            <div></div>

            <div className="cv-download">
              <button className="button">Download CV</button>
            </div>
          </div>

          <div className="main-content">
            <h1>Zarif Amir Sanad</h1>
            <h3>Full-Stack Developer</h3>
          </div>
        </div>
        <div className="navbar-box">
          <div className="navbar">
            <div>
              <span class="lnr lnr-home"></span>
              {/* <span className="menu-title">home</span> */}
            </div>
            <div>
              <span class="lnr lnr-user"></span>
            </div>
            <div>
              <span class="lnr lnr-pencil"></span>
            </div>
            <div>
              <span class="lnr lnr-database"></span>
            </div>
            <div>
              <span class="lnr lnr-envelope"></span>
            </div>
            <div></div>
          </div>
          <div className="change-page"></div>
        </div>
      </div>
    </>
  );
}

export default App;
