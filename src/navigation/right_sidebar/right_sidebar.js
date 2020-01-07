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
            <a itemProp="email"
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
          <p>
            I love programing. I know that I can build anything if I work hard
            and put in the time. This is why I seek after challenging and
            engaging projects.
          </p>
          <p>
            I also enjoy being creative with solutions and in my personal life.
            That is why I play Dungeons and Dragons.
          </p>
        </div>
      </div>
    );
  }
}

export default RightSidebar;
