import React, { Component } from "react";

import Bash from "../../assets/icons/bash.png";
import CPP from "../../assets/icons/c++.png";
import CSS from "../../assets/icons/css.png";
import Git from "../../assets/icons/git.png";
import JS from "../../assets/icons/javascript.png";
import MySQL from "../../assets/icons/mysql.png";
import Perl from "../../assets/icons/perl.png";
import ReactIcon from "../../assets/icons/react.svg";
import PSDI from "../../assets/icons/psdi.png";
import TS from "../../assets/icons/typescript.png";
import Java from "../../assets/icons/java.png";

class TechnicalSkills extends Component {
  render() {
    return (
      <div className="section">
        <h1>Skills</h1>
        <table id="skillTable">
          <tr>
            <td>
              <h4>Working Knowledge</h4>
            </td>
          </tr>
          <tr>
            <td>
              Javascript
              <img src={JS} />
            </td>
            <td>
              React
              <img src={ReactIcon}></img>
            </td>
            <td>
              MySQL
              <img src={MySQL}></img>
            </td>
            <td>
              C/C++
              <img src={CPP}></img>
            </td>
          </tr>
          <tr>
            <td>
              Typescript
              <img src={TS}></img>
            </td>
            <td>
              CSS
              <img src={CSS} />
            </td>
            <td>
              Scrum/Agile Development
              <img src={PSDI} />
            </td>
            <td>
              Git version control
              <img src={Git}></img>
            </td>
          </tr>
          <tr>
            <td>
              <h4>Basic Knowledge</h4>
            </td>
          </tr>
          <tr>
            <td>
              Perl
              <img src={Perl}></img>
            </td>
            <td>
              Bash
              <img src={Bash}></img>
            </td>
            <td>
              Java
              <img src={Java} />
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default TechnicalSkills;
