import React, { Component } from 'react';
import { 
Button, 
Form,          
FormGroup,     
Col,           
           
FormControl,                                                 
Checkbox,                      
} from 'react-bootstrap';

class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="col-md-4 col-md-offset-4 form-container">
        <h2>Apply in under 5 minutes</h2>
        <Form horizontal>
          <FormGroup controlId="formHorizontalEmail">
            <Col sm={10} smOffset={1} >
              <FormControl type="email" placeholder="First Name" />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalEmail">
            <Col sm={10} smOffset={1}>
              <FormControl type="email" placeholder="Last Name" />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalEmail">
            <Col sm={10} smOffset={1}>
              <FormControl type="email" placeholder="Email" />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <Col sm={10} smOffset={1}>
              <FormControl type="password" placeholder="Cell Phone Number" />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <Col sm={10} smOffset={1}>
              <FormControl type="password" placeholder="Zip code" />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <Col sm={10} smOffset={1}>
              <FormControl type="password" placeholder="Referral Code (optional)" />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col sm={10} smOffset={1}>
              <Button bsStyle="success" bsSize="large" block>Continue &nbsp; > </Button>
            </Col>
          </FormGroup>
        </Form>
        <p className="paragraph-container" >We will use this information to communicate with you about your application.</p>
      </div>
    );
  }
}

export default InputForm;
