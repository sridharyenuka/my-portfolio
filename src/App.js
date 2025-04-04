
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './components/Home.js';
import Achievements from './components/Achievements.js';
import Profiles from './components/Profiles.js';
import Projects from './components/Projects.js';
import Education from './components/Education.js';
import Header from './components/Header.js';

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
        </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
