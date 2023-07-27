// import "/css/About.css";
import { Link } from "react-router-dom";
import Sketch from "../components/Sketch";

function About() {
  return (
    <div className="container">
      <div id="about-left">
        <div className="header-text">About Me</div>
        <div className="card" id="list-card">
          <ul>
            <li>some text here</li>
            <li>some text here</li>
            <li>some text here</li>
          </ul>
        </div>
      </div>
      <div>
        <Sketch />
        <Link to="/">
          <button className="btn contact-btn">Go back</button>
        </Link>
        <div className="colour-container">
          <div className="pixel blue">?</div>
          <div className="pixel purple">?</div>
          <div className="pixel pink">?</div>
          <div className="pixel white">?</div>
        </div>
      </div>
    </div>
  );
}

export default About;
