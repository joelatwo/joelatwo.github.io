import React, { Component } from "react";
import "./hamburger_menu.css";

class HamburgerMenu extends Component {
  handleClick = () => {
    this.props.ToggleHamburgerMenu();
  };
  render() {
    return (
      <button
        className="hamburger_menu text_only_button"
        onClick={() => this.handleClick()}
      >
        <div className="-bar" />
        <div className="-bar" />
        <div className="-bar" />
      </button>
    );
  }
}

export default HamburgerMenu;
