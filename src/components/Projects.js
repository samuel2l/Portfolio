import React from "react";
import "../assets/styles/Projects.css";
import Card from "./Card";
import dp from "../assets/images/dp.jpg";
function Projects() {
  return (
    <div className="project-grid">
      <Card img={dp} title="Calculator App(Python)" gist="ej rroriroe" />
      <Card img={dp} title="Calculator App(Python)" gist="ej rroriroe" />
      <Card img={dp} title="Calculator App(Python)" gist="ej rroriroe" />
      <Card img={dp} title="Calculator App(Python)" gist="ej rroriroe" />
    </div>
  );
}
export default Projects;
