import './css/App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home'

function App() {

  return (
    <BrowserRouter>
      <div className="floor"></div>
      <img src="src/assets/nicoSprite.gif" className="nico-sprite"></img>
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/about" Component={About}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
