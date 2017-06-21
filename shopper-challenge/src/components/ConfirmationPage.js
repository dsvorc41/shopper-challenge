import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Button, Col } from 'react-bootstrap';
import InputForm from './InputForm';

import Background from '../images/instacartShopper.jpg'
import logo from '../images/instacartIcon.png';
let styles = {
  root: {
      backgroundImage: `url(${Background})`,
      backgroundSize: 'stretch',
      overflow: 'hidden',
      width: "100%",
      height: "900px"
  },
  buttons: {
    color: 'white',  
    'text-decoration': 'none' 
  }
}


class Confirmation extends Component {

  handleSubmit(typeOfEvent, event){
    console.log('Hello! ', typeOfEvent);
    event.preventDefault();
  }

  render() {
    return (
      <div className="App" style={ styles.root }>
        <div className="App-header">
        <div className="image-container">
          <img src={logo} className="App-logo" width="150" height="30"/>
        </div>
        </div>

        <div className="form-container text-left">
            <InputForm 
              title={'Confirmation Page'} 
              firstParagraph={'Congratulations! Your application is submitted! If you need to update your information, you can do so here:'}
              buttonText={'Update my information'}
            />
        </div>
      </div>
    );
  }
}

export default Confirmation;
