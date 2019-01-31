import React, { Component } from 'react';
import image from "../../assets/me.jpg"
import _ from "lodash"

import "./sidebar.css"
import Hamburger_Menu from "../../Components/hamburger_menu"

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
        {_.map(this.props.contentList, function(menu_item){return(

            <h1 key={menu_item}>{menu_item}</h1>
        )
        })}
                    </div>
                    ): (<div />)
                    }
    </div>
    );
  }
}

export default Sidebar;