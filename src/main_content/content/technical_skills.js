import React, { Component } from "react";

class TechnicalSkills extends Component {
  render() {
    return (
      <div className="section">
        <h1>Skills</h1>
        <h4>Working Knowledge</h4>
        <ul>
          <li itemProp="knowsLanguage">Javascript with React</li>
          <li itemProp="knowsLanguage">MySQL</li>
          <li itemProp="knowsLanguage">C/C++</li>
          <li itemProp="knowsLanguage">Typescript</li>
          <li itemProp="knowsLanguage">CSS</li>
          <li>Scrum/Agile Development</li>
          <li>Git version control</li>
        </ul>
        <h4>Basic Knowledge</h4>
        <ul>
          <li itemProp="knowsLanguage">Perl</li>
          <li itemProp="knowsLanguage">Bash</li>
          <li itemProp="knowsLanguage">Java</li>
        </ul>
      </div>
    );
  }
}

export default TechnicalSkills;
