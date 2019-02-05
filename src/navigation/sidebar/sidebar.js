import React, { Component } from "react";
import image from "../../assets/me.jpg";
import _ from "lodash";

import "./sidebar.css";
import HamburgerMenu from "../../components/hamburger_menu";

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
        <div className="sidebar_button_menu">
          <HamburgerMenu ToggleHamburgerMenu={this.props.ToggleHamburgerMenu} />
        </div>
        {this.props.isHamburgerOpen ? (
          <div className="sidebar-link_list">
            <img src={image} alt="Joel Atwood" />
            {_.map(this.props.contentList, menu_item => {
              return (
                <button
                  onClick={() => this.openTab(menu_item)}
                  className="text_only_button"
                  key={menu_item}
                >
                  {menu_item}
                </button>
              );
            })}
          </div>
        ) : (
          <div />
        )}
      </div>
    );
  }
}

export default Sidebar;
