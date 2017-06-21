import React, { Component } from 'react';
import { 
Button, 
Form,          
FormGroup,     
Col,           
ControlLabel,           
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
      <div className="col-md-2 col-md-offset-5">
        <Form horizontal>
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
            </Col>
            <Col sm={10}>
              <FormControl type="email" placeholder="First Name" />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
            </Col>
            <Col sm={10}>
              <FormControl type="email" placeholder="Last Name" />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
            </Col>
            <Col sm={10}>
              <FormControl type="email" placeholder="Email" />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} sm={2}>
            </Col>
            <Col sm={10}>
              <FormControl type="password" placeholder="Cell Phone Number" />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} sm={2}>
            </Col>
            <Col sm={10}>
              <FormControl type="password" placeholder="Zip code" />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} sm={2}>
            </Col>
            <Col sm={10}>
              <FormControl type="password" placeholder="Referral Code (optional)" />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Checkbox>Remember me</Checkbox>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button type="submit">
                Sign in
              </Button>
            </Col>
          </FormGroup>
        </Form>
        <p>We will use this information to communicate with you about your application.</p>
      </div>
    );
  }
}

export default InputForm;
