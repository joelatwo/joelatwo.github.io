import React, { Component } from "react";

import Tab from "./tab";
import "./header.css";

class Header extends Component {
  render() {
    return (
      <div id="header">
        <Tab
          contentList={this.props.contentList}
          openTab={this.props.openTab}
          UpdateOpenTab={this.props.UpdateOpenTab}
        />{" "}
      </div>
    );
  }
}

export default Header;
