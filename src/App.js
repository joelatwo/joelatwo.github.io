import React, { Component } from 'react';

import "./css/body.css"
// import Header from "./header/header"
import Main from "./main_content/main_content"
import Sidebar from './sidebar/sidebar';

class App extends Component {
  render() {
    return (
     <div>
      {/* <Header /> */}
      <Sidebar />
      {/* <Main /> */}
     </div>
    );
  }
}

export default App;
