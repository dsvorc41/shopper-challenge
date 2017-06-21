import React, { Component } from 'react';
import Background from '../images/instacartShopper.jpg'
import logo from '../images/instacartIcon.png';
import { Button, Col } from 'react-bootstrap';
let styles = {
  root: {
      backgroundImage: `url(${Background})`,
      backgroundSize: 'stretch',
      overflow: 'hidden',
      width: "100%",
      height: "900px"
  },
}

class Dashboard extends Component {
  render() {
    return (
      <div className="App" style={ styles.root }>
        <div className="App-header">
        <div className="image-container">
          <img src={logo} className="App-logo" width="150" height="30"/>
        </div>
        </div>

        <div className="form-container text-left">
          <div id='parent_div_2' md={4} smOffset={4}> 
          <Col sm={10} smOffset={1} >
            <h2>Apply in under 5 minutes</h2>
            <p className="paragraph-container" >Do you agree to a background check?</p>
            <h2>Fine print:</h2>
            <p>Each Service Provider shall conduct, or has conducted, a criminal background check at its own expense on each of its employees engaged in providing services under this Agreement prior to the commencement of such services. No Service Provider employee shall be eligible to perform services for the Company if he or she, to such Service Provider's knowledge, (1) has been convicted of or was placed in a pre-trial diversion program for any crime involving dishonesty or breach of trust including, but not limited to, check kiting or passing bad checks; embezzlement, drug trafficking, forgery, burglary, robbery, theft, perjury; possession of stolen property, identity theft, fraud, money laundering, shoplifting, larceny, falsification of documents; and/or (2) has been convicted of any sex, weapons or violent crime including but not limited to homicide, attempted homicide, rape, child molestation, extortion, terrorism or terrorist threats, kidnapping, assault, battery, and illegal weapon possession, sale or use. 
              <hr></hr>
              Important: Employment with instacart is contingent on successful background check. Do you agree to these terms?
            </p>
            <Button type="submit" bsStyle="success" bsSize="large" block >I agree, submit my application! </Button>
            </Col>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
