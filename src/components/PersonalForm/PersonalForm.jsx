import React, { Component } from "react";
import Title from "../Title";
import "./PersonalForm.css";

export class PersonalForm extends Component {
  handleChangeForm = event => {};
  render() {
    return (
      <div className="personal-form">
        <Title>Персональная информация</Title>/
        <input type="text" name="firstName" onChange={this.handleChangeForm} />
        <input type="text" name="lastName" onChange={this.handleChangeForm} />
        <input type="text" name="email" onChange={this.handleChangeForm} />
      </div>
    );
  }
}

export default PersonalForm;
