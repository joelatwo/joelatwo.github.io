import React, { Component } from "react";
import _ from "lodash";

import Bash from "../../assets/icons/bash.png";
import CPP from "../../assets/icons/c++.png";
import CSS from "../../assets/icons/css.png";
import Git from "../../assets/icons/git.png";
import JS from "../../assets/icons/javascript.png";
import MySQL from "../../assets/icons/mysql.png";
import Perl from "../../assets/icons/perl.png";
import ReactIcon from "../../assets/icons/react.svg";
import PSDI from "../../assets/icons/psdi.png";
import TS from "../../assets/icons/typescript.jpg";
import Java from "../../assets/icons/java.png";

class TechnicalSkills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skillList: {
        advancedSkills: [
          {
            title: "Javascript",
            img: JS,
            content: <div></div>
          },
          {
            title: "React",
            img: ReactIcon,
            content: <div></div>
          },
          {
            title: "MySQL",
            img: MySQL,
            content: <div></div>
          },
          {
            title: "C/C++",
            img: CPP,
            content: <div></div>
          },
          {
            title: "Typescript",
            img: TS,
            content: <div></div>
          },
          {
            title: "CSS",
            img: CSS,
            content: <div></div>
          },
          {
            title: "Scrum/Agile Development",
            img: PSDI,
            content: <div></div>
          },
          {
            title: "Git",
            img: Git,
            content: <div></div>
          }
        ],
        basicSkills: [
          {
            title: "Perl",
            img: Perl,
            content: <div></div>
          },
          {
            title: "Bash",
            img: Bash,
            content: <div></div>
          },
          {
            title: "Java",
            img: Java,
            content: <div></div>
          }
        ]
      }
    };
  }
  render() {
    return (
      <div className="section">
        <h1 id="skillPage">Skills</h1>
        <div>
          <h4>Working Knowledge</h4>
          <div className="workingKnowledge">
            {_.map(this.state.skillList.advancedSkills, skill => (
              <div className="skill" key={skill.title}>
                <p>{skill.title}</p>
                <img src={skill.img} alt={skill.title}></img>
              </div>
            ))}
          </div>
          <h4>Basic Knowledge</h4>
          <div className="basicKnowledge">
            {_.map(this.state.skillList.basicSkills, skill => (
              <div className="skill" key={skill.title}>
                <p>{skill.title}</p>
                <img src={skill.img} alt={skill.title}></img>
              </div>
            ))}
          </div>
        </div>
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

export default TechnicalSkills;
