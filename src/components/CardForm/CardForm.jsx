import React, { Component } from "react";
import Title from "../Title";
import "./CardForm.css";

export class CardForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      leftTime: 12,
    };
    props.onChangeTimeOver(false);
  }

  componentDidMount() {
    this.id = setInterval(() => {
      const leftTime = Math.max(this.state.leftTime - 1, 0);
      this.setState({ leftTime });

      if (leftTime === 0 && this.state.leftTime === 0) {
        this.props.onChangeTimeOver(true);
        clearInterval(this.id);
      }
    }, 1000);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount clearInterval");
    clearInterval(this.id);
  }
  handleChangeForm = event => {
    const { onChangeForm } = this.props;
    const { name, value } = event.target;
    onChangeForm(name, value);
  };
  render() {
    const { leftTime } = this.state;
    return (
      <div className="card-form">
        <Title>Номер карты</Title>
        <p className="left-time">Осталось {leftTime} секунд</p>
        <input
          type="text"
          name="cardNumber"
          onChange={this.handleChangeForm}
          placeholder="0000000000000000"
          maxLength={16}
        />
      </div>
    );
  }
}

export default CardForm;
