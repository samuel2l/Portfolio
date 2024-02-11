import React from "react";
import "../assets/styles/Projects.css";
import Card from "./Card";
import dp from '../assets/images/dp.jpg'
function Projects() {
  return (
    <div className="project-grid">
      <Card img={dp} title='Calculator App(Python)' description='ej rroriroe' />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />

    </div>
  );
}
export default Projects;
