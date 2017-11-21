import React, { Component } from "react";
import "./App.css";
import Step from "./components/Step";
import PersonalForm from "./components/PersonalForm";
import CardForm from "./components/CardForm";

class App extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    cardNumber: "",
    isTimeOver: false,
    stepTitles: ["Personal information", "Card information", "Finish"],
  };
  handleTabClick = number => {
    this.setState({ step: number });
  };
  handleChangeForm = (name, value) => {
    this.setState({ [name]: value });
  };
  handleClickNextForm = () => {
    this.setState({ step: this.state.step + 1 });
  };
  handleChangeTimeOver = isTimeOver => {
    isTimeOver && this.setState({ isTimeOver: !this.state.isTimeOver });
  };

  isFormCommitable = () => {
    const { step, firstName, lastName, email, cardNumber } = this.state;
    let result = false;

    if (
      (step === 1 && firstName && lastName && email && email.includes("@")) ||
      (step === 2 && cardNumber.length === 16)
    ) {
      result = true;
    }

    return result;
  };
  renderForm = () => {
    const { step, firstName, lastName, email, cardNumber } = this.state;
    return step === 1 ? (
      <PersonalForm
        firstName={firstName}
        lastName={lastName}
        email={email}
        onChangeForm={this.handleChangeForm}
      />
    ) : step === 2 ? (
      <CardForm
        cardNumber={cardNumber}
        onChangeForm={this.handleChangeForm}
        onChangeTimeOver={this.handleChangeTimeOver}
      />
    ) : (
      "Поздравляем!"
    );
  };

  render() {
    const { step, isTimeOver, stepTitles } = this.state;

    return (
      <div className="container">
        <div className="tab-panel">
          {stepTitles.map((title, index) => {
            return (
              <Step
                isClickable={step > index + 1}
                isSelected={step === index + 1}
                key={title}
                number={index + 1}
                onClick={this.handleTabClick}
              >
                {title}
              </Step>
            );
          })}
        </div>
        <div className="form-content">{this.renderForm()}</div>
        <div className="button-panel">
          <button
            className="button-next"
            disabled={!this.isFormCommitable() || isTimeOver}
            onClick={this.handleClickNextForm}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default App;
