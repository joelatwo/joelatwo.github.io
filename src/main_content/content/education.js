import React, { Component } from "react";

class Education extends Component {
  render() {
    return (
      <div className="section">
        <h1>Education</h1>
        <h3 itemProp="memberOf">University of Idaho</h3>
        <p itemProp="event">I will graduate in Fall 2019 with a BS in Computer Science.</p>
        <hr />
        <h3 itemProp="alumni">Emmett High School</h3>
        <p itemProp="event">I graduated in May of 2014</p>
        <hr />
      </div>
    );
  }
}

export default Education;
