import React from "react";
import "./App.css";
import Navigation from "./components/Nav";
import TopSection from "./components/TopSection";
import AboutMe from './components/AboutMe';

function App() {
  return (
    <div className="App">
      <Navigation />
      <TopSection />
      <AboutMe />
    </div>
  );
}

export default App;
