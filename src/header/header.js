import React, { Component } from 'react';
import Menu from "./menu"

class Header extends Component {
    render() {
        return (
            <div id="header">
                <Menu />
                <a href="https://github.com/atwo6777">
                    Joel Atwood haystackjma@gmail.com
                </a>
            </div>
        );
    }
}

export default Header;