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
              href="mailto:joelatwooddeveloper@gmail.com"
              target="_blank"
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
          <button className="whiteButton buttonWrappedLink rightSidebarButton">
            <a
              href="https://github.com/atwo6777"
              className="linkAsText"
              target="_blank"
            >
              My Github
            </a>
          </button>
          <p>
            Passionate problem solver, flexible and collaborative software
            engineer with 2 years industry experience that knows the benefit of
            both traditional and outside the box approaches to problems.
          </p>
        </div>
      </div>
    );
  }
}

export default RightSidebar;
