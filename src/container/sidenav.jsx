import React, { Component } from 'react';
import image from "../assets/me.jpg"

import "../css/sidenav.css"

class Sidenav extends Component {
  render() {
    return (
    <div id="sidenav">
        <div>
          <img src={image} alt="Picture of Joel" />
        </div>
    </div>
    );
  }
}

export default Sidenav;