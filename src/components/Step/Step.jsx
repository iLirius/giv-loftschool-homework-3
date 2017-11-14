import React, { PureComponent } from "react";
import "./Step.css";
import cx from "classname";

class Step extends PureComponent {
  handleClick = () => {
    const { isClickable, onClick, number } = this.props;
    if (isClickable) { 
      onClick(number)
    }
  };
  render() {
    const { isSelected, number, children, isClickable } = this.props;
    return (
      <div className={cx('step', {'step-selected': isSelected, 'step-clickable': isClickable})}>
        <span className="step__number">{number}</span>
        <span className="step__title">{children}</span>
      </div>
    );
  }
}

export default Step;
