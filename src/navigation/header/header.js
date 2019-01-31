import React, { Component } from 'react';
import Menu from "./menu"
import Tab from "./tab"

class Header extends Component {
    render() {
        return (
            <div id="header">
                <Tab contentList={this.props.contentList} ></Tab>            </div>
        );
    }
}

export default Header;