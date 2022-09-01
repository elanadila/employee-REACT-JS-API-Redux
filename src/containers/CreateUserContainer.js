import React, { Component } from 'react'
import { Container } from 'reactstrap';
import BackComponent from '../components/BackComponent';
import FormComponent from '../components/FormComponent';
import { connect } from "react-redux";
import { postUserCreate } from '../actions/userAction';


class CreateUserContainer extends Component {

   handleSubmit(data) {
    this.props.dispatch(postUserCreate(data));
  }

  render() {
    return (
      <Container>
        <BackComponent/>
        <h1>CreateUserContainer</h1>
          <FormComponent onSubmit={(data) => this.handleSubmit(data)} />
      </Container>
    )
  }
}
export default connect()(CreateUserContainer);
