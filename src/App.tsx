import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Cert from "./pages/LomNAukzEU1ARUM4n3y5Ps7xsf_3yWLU8YA94J_uvMM";

function App() {
  return (
    <BrowserRouter>
      <div className="floor"></div>
      <img src="/assets/nicoSprite.gif" className="nico-sprite"></img>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/projects" Component={Projects} />
        <Route path="/contact" Component={Contact} />
        <Route path="/.well-known/acme-challenge/LomNAukzEU1ARUM4n3y5Ps7xsf_3yWLU8YA94J_uvMM" Component={Cert}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
