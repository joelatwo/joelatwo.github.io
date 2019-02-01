import React, { Component } from "react";
import Menu from "./menu";
import Tab from "./tab";

class Header extends Component {
  render() {
    return (
      <div id="header">
        <Tab
          contentList={this.props.contentList}
          openTab={this.props.openTab}
          updateopenTab={this.props.updateopenTab}
        />{" "}
      </div>
    );
  }
}

export default Header;
