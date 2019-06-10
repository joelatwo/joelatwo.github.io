import React, { Component } from "react";
import "./content.css";
class Accomplishments extends Component {
  render() {
    return (
      <div className="section">
        <h1>Awards</h1>
        <ul>
          <li>Certified SCRUM Developer</li>
          <li>Certified Blockchain Developer</li>
          <li>
            BPA - 4th place two years in a row in state for Computer Graphic
            Design
          </li>
          <li>
            SkillsUSA - 2nd place two years in a row for Computer Animation
          </li>
          <li>Certified Solid Works Associate</li>
        </ul>
      </div>
    );
  }
}

export default Accomplishments;
