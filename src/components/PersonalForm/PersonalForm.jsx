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
    return (
      <div className="personal-form">
        <Title>Персональная информация</Title>
        <input
          type="text"
          name="firstName"
          onChange={this.handleChangeForm}
          placeholder="First name"
        />
        <input
          type="text"
          name="lastName"
          onChange={this.handleChangeForm}
          placeholder="Last name"
        />
        <input
          type="text"
          name="email"
          onChange={this.handleChangeForm}
          placeholder="Email"
        />
      </div>
    );
  }
}

export default PersonalForm;
