import React, { Component } from "react";

import "./right_sidebar.css";
class RightSidebar extends Component {
  render() {
    return (
      <div id="rightSidebar">
        <div className="contact">
          Contact:
          <button className="whiteButton buttonWrappedLink rightSidebarButton">
            <a
              href="mailto:joelatwooddeveloper@gmail.com"
              target="_top"
              className="linkAsText"
            >
              Email
            </a>
          </button>
          <button className="whiteButton buttonWrappedLink rightSidebarButton">
            <a
              href="https://www.linkedin.com/in/joelatwooddeveloper"
              className="linkAsText"
              target="_blank"
            >
              LinkedIn
            </a>
          </button>
        </div>
      </div>
    );
  }
}

export default RightSidebar;
