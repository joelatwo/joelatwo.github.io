import React, { Component } from 'react';

import "./css/body.css"
import Header from "./container/header.jsx"
import Main from "./container/main_content.jsx"
import Sidenav from './container/sidenav';

class App extends Component {
  render() {
    return (
     <div>
      <Header />
      <Sidenav />
      <Main />
     </div>
    );
  }
}

export default App;
