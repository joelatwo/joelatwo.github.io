import React, { Component } from "react";

class MenuItem extends Component {
  render() {
    return (
      <div className="menu-container-collapsible">
        <h1 className="menu-content">{props.title}</h1>
        <div>+</div>
      </div>
    );
  }
}

export default MenuItem;
