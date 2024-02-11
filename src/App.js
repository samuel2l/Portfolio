import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Nav from "./components/Nav";
import Bio from "./components/Bio";

function App() {
  return (
    <main>
      <Nav />
      <Bio />
      <Projects />

      <Contact />
    </main>
  );
}

export default App;
