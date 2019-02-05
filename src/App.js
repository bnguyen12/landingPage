import React, { Component } from 'react';
import './index.css';

import MenuBar from './MenuBar.js';
import TitleBlock from './TitleBlock.js';
import Mission from './Mission.js';
import AboutUs from './AboutUs.js';
import Footer from './Footer.js';

class App extends Component {
  render() {
    return (
      <div>
        <MenuBar />
        <TitleBlock />
        <Mission />
        <AboutUs />
        <Footer />
      </div>
    );
  }
}

export default App;