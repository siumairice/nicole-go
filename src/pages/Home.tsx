import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="card home-card">
      <div className="header-text center-text">Nicole Go</div>
      <div className="button-group">
        <Link to="/about">
          <button className="btn start-btn">Start</button>
        </Link>
        <Link to="/projects">
          <button className="btn projects-btn">Projects</button>
        </Link>
        <Link to="/contact">
          <button className="btn contact-btn">Contact</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
