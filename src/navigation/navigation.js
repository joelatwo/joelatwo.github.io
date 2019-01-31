import React, { Component } from 'react';

import Sidebar from './sidebar/sidebar';
import Header from "./header/header"

class Navigation extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            contentList: [        "Home",
                "Projects",
                "Work Experience",
                "Education",
                "Technical Skills",
                "Accomplishments",
                "Hobbies",
                "Social Media"
            ],
            openIndex: 0
        }
    
    }
    
  render() {
    return (
     <div>
         <Header contentList={this.state.contentList}></Header>
      <Sidebar contentList={this.state.contentList} />
     </div>
    );
  }
}

export default Navigation;
