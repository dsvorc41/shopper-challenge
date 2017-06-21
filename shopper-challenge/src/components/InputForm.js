import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import { 
Button, 
Form,          
FormGroup,     
Col,                  
FormControl,                                                 
Checkbox,                      
} from 'react-bootstrap';

let styles = {
  buttons: {
    color: 'white',  
    'text-decoration': 'none' 
  }
}
class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      cellPhoneNumber: '',
      zipCode: '',
      referralCode: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(targetStateProp, event) {
    this.setState({[targetStateProp]: event.target.value});
  }

  handleSubmit(typeOfEvent, event) {
    console.log(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <div className="form-container">

        <div id='parent_div_2' md={4} smOffset={4}> 
          <h2>{this.props.title}</h2>
          <p>{this.props.firstParagraph}</p>
          <Form horizontal onSubmit={this.handleSubmit.bind(this)}>

            <FormGroup controlId="formHorizontalEmail">
              <Col sm={10} smOffset={1} >
                <FormControl onChange={this.handleChange.bind(this, 'firstName')} value={this.state.firstName} type="text" placeholder="First Name" />
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalEmail">
              <Col sm={10} smOffset={1}>
                <FormControl onChange={this.handleChange.bind(this, 'lastName')} value={this.state.lastName} type="text" placeholder="Last Name" />
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalEmail">
              <Col sm={10} smOffset={1}>
                <FormControl onChange={this.handleChange.bind(this, 'email')} value={this.state.Email} type="email" placeholder="Email" />
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalPassword">
              <Col sm={10} smOffset={1}>
                <FormControl onChange={this.handleChange.bind(this, 'cellPhoneNumber')} value={this.state.cellPhoneNumber} type="text" placeholder="Cell Phone Number" />
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalPassword">
              <Col sm={10} smOffset={1}>
                <FormControl onChange={this.handleChange.bind(this, 'zipCode')} value={this.state.zipCode} type="text" placeholder="Zip code" />
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalPassword">
              <Col sm={10} smOffset={1}>
                <FormControl onChange={this.handleChange.bind(this, 'referralCode')} value={this.state.referralCode} type="text" placeholder="Referral Code (optional)" />
              </Col>
            </FormGroup>
          </Form>

          <Col sm={10} smOffset={1}>
            <Button onClick={this.handleSubmit.bind(this, 'disagree')} bsStyle="success" bsSize="large" block >
              <Link to='/backgroundCheck' style={styles.buttons}>{this.props.buttonText}</Link>
            </Button>
          </Col>
          <Col sm={10} smOffset={1}>
            <p className="paragraph-container" >We will use this information to communicate with you about your application.</p>
          </Col>
        </div>
      </div>
    );
  }
}

export default InputForm;
