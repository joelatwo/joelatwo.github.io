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

  ChooseConent = () => {
    // Doesn't have break due to the return
    switch (this.props.openTab) {
      case "Home":
        return <Home />;

      case "Projects":
        return <Projects />;

      case "Work Experience":
        return <WorkExperience />;

      case "Education":
        return <Education />;

      case "Technical Skills":
        return <TechnicalSkills />;

      case "Accomplishments":
        return <Accomplishments />;

      case "Hobbies":
        return <Hobbies />;

      default:
        return (
          <div>
            An error occured please contact{" "}
            <a href="haystackjma@gmail.com">Joel Atwood.</a>
          </div>
        );
    }
  };

  render() {
    return <div id="main_content">{this.ChooseConent()}</div>;
  }
}

export default MainContent;
