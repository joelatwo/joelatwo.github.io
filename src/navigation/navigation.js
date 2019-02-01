import React, { Component } from "react";

import Sidebar from "./sidebar/sidebar";
import Header from "./header/header";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentList: [
        "Home",
        "Projects",
        "Work Experience",
        "Education",
        "Technical Skills",
        "Accomplishments",
        "Hobbies",
        "Social Media"
      ],
      openTab: "Home"
    };
  }

  updateContentList = newContentList => {
    console.log("update Content List");
    this.setState({ contentList: newContentList });
  };

  updateopenTab = newIndex => {
    console.log("update Open Index");
    console.log(newIndex);
    this.setState({ openTab: newIndex });
  };

  render() {
    return (
      <div>
        <Header
          updateopenTab={this.updateopenTab}
          contentList={this.state.contentList}
          openTab={this.state.openTab}
        />
        <Sidebar
          updateopenTab={this.updateopenTab}
          contentList={this.state.contentList}
        />
      </div>
    );
  }
}

export default Navigation;
