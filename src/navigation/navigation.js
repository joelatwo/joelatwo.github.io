import React, { Component } from "react";
import $ from "jquery";

import Sidebar from "./sidebar/sidebar";
import Header from "./header/header";
import MainContent from "../main_content/main_content";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentList: [
        "Home",
        "Work Experience",
        "Education",
        "Projects",
        "Technical Skills",
        "Accomplishments"
      ],
      openTab: "Home",
      isHamburgerOpen: true
    };
  }

  updateContentList = newContentList => {
    this.setState({ contentList: newContentList });
  };

  UpdateOpenTab = newIndex => {
    this.setState({ openTab: newIndex });
  };

  ToggleHamburgerMenu = () => {
    this.setState({ isHamburgerOpen: !this.state.isHamburgerOpen }, () => {
      if (this.state.isHamburgerOpen) {
        $("body")
          .get(0)
          .style.setProperty("--leftMargin", "250px");
      } else {
        $("body")
          .get(0)
          .style.setProperty("--leftMargin", "50px");
      }
    });
  };

  render() {
    return (
      <div>
        <Header
          UpdateOpenTab={this.UpdateOpenTab}
          contentList={this.state.contentList}
          openTab={this.state.openTab}
          isHamburgerOpen={this.state.isHamburgerOpen}
        />
        <Sidebar
          UpdateOpenTab={this.UpdateOpenTab}
          contentList={this.state.contentList}
          ToggleHamburgerMenu={this.ToggleHamburgerMenu}
          isHamburgerOpen={this.state.isHamburgerOpen}
        />
        <MainContent openTab={this.state.openTab} />
      </div>
    );
  }
}

export default Navigation;
