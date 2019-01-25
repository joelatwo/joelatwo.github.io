import React, { Component } from 'react';
import image from "../assets/me.jpg"

import "./sidebar.css"
import Hamburger_Menu from "../Components/hamburger_menu"

class Sidebar extends Component {
  constructor(props)
  {
      super(props)
      this.state = {
          isOpen: false,
          openIndex: null
      }
      this.HamburgerHandler = this.HamburgerHandler.bind(this);
  
  }
  HamburgerHandler(){
      console.log(this.state.isOpen)
      this.setState({isOpen: !this.state.isOpen})
  }

  render() {
    return (
    <div id="sidebar">
                    <Hamburger_Menu action={this.HamburgerHandler}/>
                    {this.state.isOpen ? (<div className="sidebar">
                      <h1>
          {/* <img src={image} alt="Joel Atwood" /> */}
        </h1>
        <h1>Home</h1>
        <h1>Projects</h1>
        <h1>Work Experience</h1>
        <h1>Education</h1>
        <h1>Technical Skills</h1>
        <h1>Accomplishments</h1>
        <h1>Hobbies</h1>
        <h1>Social Media</h1>
                    </div>
                    ): (<div />)
                    }
        {/* <div>Ideas <br />Goals</div> */}
    </div>
    );
  }
}

export default Sidebar;