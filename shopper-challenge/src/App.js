import React, { Component } from 'react';
import logo from './images/instacartIcon.png';
import './App.css';
import InputForm from './components/InputForm.js';

import Background from './images/instacartShopper.jpg'
let styles = {
  root: {
      backgroundImage: `url(${Background})`,
      backgroundSize: 'stretch',
      overflow: 'hidden',
      width: "100%",
      height: "900px"
  },
}

class App extends Component {
  render() {
    return (
      <div className="App" style={ styles.root }>
        <div className="App-header">
          <div className="image-container">
            <img src={logo} className="App-logo" width="150" height="30"/>
          </div>
        </div>
        <InputForm 
          title={'Apply in under 5 minutes'} 
          firstParagraph={''}
          buttonText={'Continue'}
        />
      </div>
    );
  }
}

export default App;
