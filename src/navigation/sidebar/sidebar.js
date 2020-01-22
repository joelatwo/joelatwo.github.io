import React, { Component } from "react";
import image from "../../assets/me.jpg";

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
      <div
        id="sidebar"
        className={this.props.isHamburgerOpen ? "open" : "closed"}
      >
        <div className="sidebarNavigation">
          <img
            id="joel_atwood_pic"
            src={image}
            alt="Joel Atwood"
            itemProp="image"
          />
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
        </div>
      </div>
    );
  }
}

export default Sidebar;
