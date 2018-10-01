import React, { Component } from 'react';
import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact'
import { Switch, Route } from 'react-router-dom'
import Navbar from './component/Navbar'
import './component/styles.css'

class App extends Component {
  render() {
    return (
      <div >
        <Navbar />
          <Switch>
            <Route exact path='/' component={ Home } />
            <Route path='/about' component={ About } />
            <Route path='/contact' component={ Contact } />
          </Switch>
      </div>
    );
  }
}

export default App;
