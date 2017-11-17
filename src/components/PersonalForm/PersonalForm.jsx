import React, { Component } from "react";
import Title from "../Title";
import "./PersonalForm.css";

export class PersonalForm extends Component {
  handleChangeForm = event => {
    const { onChangeForm } = this.props;
    const { name, value } = event.target;
    onChangeForm(name, value);
  };
  render() {
    const { firstName, lastName, email } = this.props;
    return (
      <div className="personal-form">
        <Title>Персональная информация</Title>
        <input
          type="text"
          name="firstName"
          onChange={this.handleChangeForm}
          placeholder="First name"
          value={firstName}
        />
        <input
          type="text"
          name="lastName"
          onChange={this.handleChangeForm}
          placeholder="Last name"
          value={lastName}
        />
        <input
          type="text"
          name="email"
          onChange={this.handleChangeForm}
          placeholder="Email"
          value={email}
        />
      </div>
    );
  }
}

export default PersonalForm;
