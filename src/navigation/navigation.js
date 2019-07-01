import React, { Component } from "react";
import _ from "lodash";

import Sidebar from "./sidebar/sidebar";
import Header from "./header/header";
import MainContent from "../main_content/main_content";

import RightSidebar from "./right_sidebar/right_sidebar";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentList: [
        "Home",
        "Experience",
        "Education",
        "Projects",
        "Skills",
        "Awards"
      ],
      openTab: "Home",
      isHamburgerOpen: false
    };
  }

  updateContentList = newContentList => {
    this.setState({ contentList: newContentList });
  };

  UpdateOpenTab = newIndex => {
    this.setState({ openTab: newIndex, isHamburgerOpen: false });
  };

  ToggleHamburgerMenu = () => {
    this.setState({ isHamburgerOpen: !this.state.isHamburgerOpen }, () => {});
  };

  render() {
    return (
      <div>
        <Header
          UpdateOpenTab={this.UpdateOpenTab}
          contentList={this.state.contentList}
          openTab={this.state.openTab}
          isHamburgerOpen={this.state.isHamburgerOpen}
          ToggleHamburgerMenu={this.ToggleHamburgerMenu}
        />

        <Sidebar
          UpdateOpenTab={this.UpdateOpenTab}
          contentList={this.state.contentList}
          ToggleHamburgerMenu={this.ToggleHamburgerMenu}
          isHamburgerOpen={this.state.isHamburgerOpen}
        />
        {this.state.isHamburgerOpen ? null : (
          <MainContent openTab={this.state.openTab} />
        )}

        <RightSidebar isHamburgerOpen={this.state.isHamburgerOpen} />
      </div>
    );
  }
}

export default Navigation;
