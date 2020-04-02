import React from "react";
import "./App.css";
import Navigation from "./components/Nav";
import TopSection from "./components/TopSection";
import AboutMe from './components/AboutMe';
import Skills from "./components/Skills";
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Navigation />
      <TopSection />
      <AboutMe />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
