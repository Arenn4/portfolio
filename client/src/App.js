import React, { Component } from 'react';
import Navbar from './component/Navbar';
import Image from './component/Image';
import About from './component/About';
import Projects from './component/Projects';
import ExtraInfo from './component/ExtraInfo';
import Contact from './component/Contact';
import Footer from './component/Footer';
import './component/styles.css';

class App extends Component {
  render() {
    return (
      <div className="portfolio-container">
        <Navbar />
          <Image />
          <About />
          <Projects />
          <ExtraInfo />
          <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
