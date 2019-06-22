import React, { Component } from "react";

import Tab from "./tab";
import Menu from "../../assets/folder_icon.svg";
import "./header.css";

class Header extends Component {
  render() {
    return (
      <div id="headerContainer">
        <div id="header">
          <div className="namedTitle">Joel Atwood</div>
          <div className="idealPosition">Full Stack Developer</div>
        </div>
        {window.screen.width < 768 ? (
          <button
            className={"hamburger"}
            onClick={this.props.ToggleHamburgerMenu}
          >
            <img src={Menu} />
          </button>
        ) : null}
        <Tab
          className="tab"
          contentList={this.props.contentList}
          openTab={this.props.openTab}
          UpdateOpenTab={this.props.UpdateOpenTab}
        />{" "}
      </div>
    );
  }
}

export default Header;
