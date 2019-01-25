import React, { Component } from 'react';
import "./hamburger_menu.css"

class HamburgerMenu extends Component {

    render() {
        return (
            <div className="hamburger_menu" onClick={this.props.action.bind(this)}>
                <div className="-bar"></div>
                <div className="-bar"></div>
                <div className="-bar"></div>
</div>
        );
    }
}

export default HamburgerMenu;