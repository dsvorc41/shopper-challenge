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
      <div className="form-container">
        <div id='parent_div_1' md={4} smOffset={4}>
          <h2>Earn money shopping and delivering groceries, giving customers more time to do what they love.</h2>
          <h4 >
            <i className="fa fa-clock-o fa-2x"></i>
            &nbsp; Be Independent
          </h4>
          <p className="paragraph-container" >Schedule work around your own life.</p>
          <h4 >
            <i className="fa fa-smile-o fa-2x"></i> 
            &nbsp; Have Fun
          </h4>
          <p className="paragraph-container" >Spend time shopping, exploring new things and being active.</p>
          <h4 >
            <i className="fa fa-money fa-2x"></i>
            &nbsp; Earn extra income
          </h4>
          <p className="paragraph-container" >Get paid weekly. Work Sundays to maximize your hours and pay</p>

        </div>

        <div id='parent_div_2' md={4} smOffset={4}>
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
      </div>
    );
  }
}

export default InputForm;
