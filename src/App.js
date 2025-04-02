
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import Achievements from './components/Achievements.js';
import Profiles from './components/Profiles.js';
import Projects from './components/Projects.js';
import Education from './components/Education.js';
import Skills from './components/Skills.js';
import Header from './components/Header.js';
import Body from './components/Body.js';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/Achievements" element={<Achievements/>}/>
          <Route exact path="/Profiles" element={<Profiles/>}/>
          <Route exact path="/Education" element={<Education/>}/>
          <Route exact path="/Projects" element={<Projects/>}/>
          <Route exact path="/Skills" element={<Skills/>}/>
        </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
