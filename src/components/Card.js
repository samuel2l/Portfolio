import React from "react";
import dp from "../assets/images/dp.jpg";
import '../assets/styles/Card.css'
function Card(props) {
  return (
    
    <div className="card">
      <img src={props.img} alt="Project picture" />
      <h3>{props.title}</h3>
      <p>{props.gist}</p>

    </div>
 
    
  );
}
export default Card