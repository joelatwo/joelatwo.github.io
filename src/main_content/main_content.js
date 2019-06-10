import React, { Component } from "react";

import Home from "./content/home";
import Projects from "./content/projects";
import WorkExperience from "./content/work_experience";
import Accomplishments from "./content/accomplishments";
import Education from "./content/education";
import Hobbies from "./content/hobbies";
import TechnicalSkills from "./content/technical_skills";

import "./main_content.css";

class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: <Home />
    };
  }

  ChooseContent = () => {
    // Doesn't have break due to the return
    switch (this.props.openTab) {
      case "Home":
      case undefined:
        return <Home />;

      case "Projects":
        return <Projects />;

      case "Experience":
        return <WorkExperience />;

      case "Education":
        return <Education />;

      case "Skills":
        return <TechnicalSkills />;

      case "Awards":
        return <Accomplishments />;

      case "Hobbies":
        return <Hobbies />;

      default:
        return (
          <div>
            An error occurred please contact{" "}
            <a href="joelatwooddeveloper@gmail.com">Joel Atwood.</a>
          </div>
        );
    }
  };

  render() {
    return (
      <div id="main_content">
        <div id="main_content_interior">{this.ChooseContent()}</div>
      </div>
    );
  }
}

export default MainContent;
