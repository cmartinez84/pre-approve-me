import React, { Component } from 'react';
import Employees from './components/Employees';
import Hawaii from './components/Hawaii';
import Pool from './components/Pool';
import Navbar from './Navbar';
import logo from './logo.svg';
import './App.css';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faStickyNote } from '@fortawesome/free-solid-svg-icons'

import { library } from '@fortawesome/fontawesome-svg-core'

library.add(faBell)
library.add(fab)
library.add(faStickyNote)
library.add(faExclamationTriangle)
// library.add(faGitHub);


class App extends Component {
  state = {
    selectedPanel: 'hawaii'
  }
  handleSelectPanel=(selectedPanel)=>{
    this.setState({selectedPanel})
  }

  render() {
    const ENUM = {
      'employees': <Employees></Employees>,
      'hawaii' : <Hawaii></Hawaii>,
      'pool' : <Pool></Pool>
    }
    return (
      <div>

        <Navbar
          handleSelectPanel={this.handleSelectPanel}>
        </Navbar>
        {
        ENUM[this.state.selectedPanel]
        }
          
      </div>
    );
  }
}

export default App;
