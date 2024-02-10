import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Nav from "./components/Nav";

function App() {
  return (
    <main>
      <Nav />
      <Projects />
      <Projects />
      <Projects />
      <Projects />
      <Projects />
      <Projects />
      <Projects /> <Projects /> <Projects /> <Projects /> <Projects />{" "}
      <Projects /> <Projects /> <Projects />
      <Contact />
    </main>
  );
}

export default App;
