import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";

import React, { Component } from 'react'
import { FormGroup, Col, Label, Input, Row, Button } from "reactstrap";
import UserValidation from "../validations/UserValidation";

const renderField = ({
    input,
    type,
    select,
    placeholder,
    label,
    disabled,
    readOnly,
    meta: { touched, error, warning },
  }) => (
    <Row>
      <Col md="12">
        <Label htmlFor="{input}" className="col-form-label">
          {label}
        </Label>
      </Col>
      <Col md="12">
        <Input
          {...input}
          select={select}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readOnly}
        ></Input>
        {touched &&
          ((error && <p style={{ color: "red" }}>{error}</p>) ||
            (warning && <p style={{ color: "brown" }}>{warning}</p>))}
      </Col>
    </Row>
  );

class FormComponent extends Component {
  render() {
    return (
        
        <form onSubmit={this.props.handleSubmit}>
        <FormGroup row>
          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="first_name"
                component={renderField}
                label="First Name :"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="last_name"
                component={renderField}
                label="Last Name :"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="date_of_birth"
                component={renderField}
                label="DOB :"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
                <Field 
                name="province" 
                component="select"
                label="Province :">
                    <option />
                    <option value="jawabarat">Jawa Barat</option>
                    <option value="jawatengah">Jawa Tengah</option>
                    <option value="jakarta">DKI Jakarta</option>
                </Field>
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
                <Field 
                name="city" 
                component="select"
                label="City :">
                    <option />
                    <option value="jawabarat">Bandung</option>
                    <option value="jawatengah">Garut</option>
                    <option value="jakarta">Cempaka Putih</option>
                </Field>
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="textarea"
                name="street"
                component={renderField}
                label="Street :"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="nohp"
                component={renderField}
                label="KTP Number :"
              />
            </FormGroup>
          </Col>

        </FormGroup>

        <FormGroup row>
          <Col md="12">
            <FormGroup>
              <Button
                color="dark"
                type="submit"
                disabled={this.props.submitting}
              >
                Submit
              </Button>
            </FormGroup>
          </Col>
          
        </FormGroup>
      </form>
    );
  }
}

FormComponent = reduxForm({
    form: "formCreateUser",
    validate: UserValidation,
    enableReinitialize: true,
  })(FormComponent);

export default connect()(FormComponent);