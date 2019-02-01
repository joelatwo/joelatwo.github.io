import React, { Component } from "react";
import image from "../../assets/me.jpg";
import _ from "lodash";

import "./sidebar.css";
import Hamburger_Menu from "../../Components/hamburger_menu";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true,

      openTab: null
    };
    this.HamburgerHandler = this.HamburgerHandler.bind(this);
  }
  HamburgerHandler() {
    console.log(this.state.isOpen);
    this.setState({ isOpen: !this.state.isOpen });
  }

  openTab = e => {
    this.props.updateopenTab(e);
  };

  render() {
    return (
      <div id="sidebar">
        <div className="sidebar_button_menu">
          <Hamburger_Menu action={this.HamburgerHandler} />
        </div>
        {this.state.isOpen ? (
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
