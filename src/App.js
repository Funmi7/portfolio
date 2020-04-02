import React from "react";
import "./App.css";
import Navigation from "./components/Nav";
import TopSection from "./components/TopSection";
import AboutMe from './components/AboutMe';
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <Navigation />
      <TopSection />
      <AboutMe />
      <Skills />
    </div>
  );
}

export default App;
