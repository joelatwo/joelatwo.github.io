import React, { Component } from "react";

import "./right_sidebar.css";
class RightSidebar extends Component {
  render() {
    return (
      <div
        id="rightSidebar"
        className={this.props.isHamburgerOpen ? "open" : "closed"}
      >
        <div className="contact">
          Contact:
          <button className="whiteButton buttonWrappedLink rightSidebarButton">
            <a
              itemProp="email"
              href="mailto:joelatwo@gmail.com"
              target="_blank"
              className="linkAsText"
            >
              Email
            </a>
          </button>
          <button className="whiteButton buttonWrappedLink rightSidebarButton">
            <a
              href="https://www.linkedin.com/in/joelatwo"
              className="linkAsText"
              target="_blank"
            >
              LinkedIn
            </a>
          </button>
          <button className="whiteButton buttonWrappedLink rightSidebarButton">
            <a
              href="https://github.com/joelatwo"
              className="linkAsText"
              target="_blank"
            >
              My Github
            </a>
          </button>
          <p>
            Passionate problem solver, flexible and collaborative software
            engineer with 3 years industry experience.
          </p>
        </div>
      </div>
    );
  }
}

export default RightSidebar;
