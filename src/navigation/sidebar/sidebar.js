import React, { Component } from "react";
import image from "../../assets/me.jpg";
import Resume from "../../assets/Resume.docx";
import _ from "lodash";

import "./sidebar.css";
class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openTab: null
    };
  }

  openTab = e => {
    this.props.UpdateOpenTab(e);
  };

  render() {
    return (
      <div id="sidebar">
        {this.props.isHamburgerOpen ? (
          <div className="sidebarNavigation">
            <img src={image} alt="Joel Atwood" />
            {_.map(this.props.contentList, menu_item => {
              return (
                <button
                  onClick={() => this.openTab(menu_item)}
                  className="whiteButton sidebarButton"
                  key={menu_item}
                >
                  {menu_item}
                </button>
              );
            })}
            <button className="whiteButton buttonWrappedLink sidebarButton">
              <a
                href={Resume}
                download="Joel_Atwood_Resume"
                className="linkAsText"
              >
                Resume
              </a>
            </button>
          </div>
        ) : (
          <div />
        )}
      </div>
    );
  }
}

export default Sidebar;
