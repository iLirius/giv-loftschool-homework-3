import React, { Component } from "react";
import "./App.css";
import Step from "./components/Step";

const stepTitles = ["Personal information", "Card information", "Finish"];

class App extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    cardNumber: "",
    isTimeOver: false
  };
  handleTabClick = () => {};
  handleChangeForm = () => {};
  handleClickNextForm = () => {};
  handleChangeTimeOver = () => {};
  isFormCommitable = () => {};
  renderForm = () => {};

  render() {
    const { isTimeOver } = this.state;
    return (
      <div className="container">
        <div className="tab-panel" />
        <div className="form-content" />
        <div className="button-panel">
          <button
            className="button-next"
            disabled={!this.isFormCommitable() || !isTimeOver}
            onClick={this.handleClickNextForm}
          />
        </div>
      </div>
    );
  }
}

export default App;
