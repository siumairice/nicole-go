import "../css/About.css"
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="container">
        <div id="about-left">
            <div className='header-text'>About Me</div>
            <div className="card" id="list-card">
              <ul>
                  <li>some text here</li>
                  <li>some text here</li>
                  <li>some text here</li>
              </ul>
            </div>
        </div>
        <div>
          <div className="card">
            <p> text in here</p>
          </div>
          <Link to="/"><button className='btn contact-btn'>Go back</button></Link>
        </div>
    </div>
  )
}

export default About;
