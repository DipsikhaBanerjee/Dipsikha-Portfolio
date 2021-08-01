import React from "react";
import { useState, useEffect } from "react";
import { Card, List } from "@material-ui/core";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Preloader from "./components/Preloader/Pre";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "../src/components/pages/About/about";
import Home from "../src/components/pages/Home/home";
import Resume from "./components/pages/Resume/Resume";
import Skills from "./components/pages/Skills/skills";
import ScrollToTop from "./components/Scroll/ScrollToTop";
import Footer from "./components/Footer/Footer";
import Projects from "./components/pages/Projects/projects";
import Particle from "./components/Particles/Particle";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="back">
      <div class="area">
        <Router>
          <Preloader load={load} />
          <div className="App" id={load ? "no-scroll" : "scroll"}>
            <Navbar />
            <ScrollToTop />
            <Particle />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/project" component={Projects} />
              <Route path="/skills" component={Skills} />
              <Route path="/resume" component={Resume} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
