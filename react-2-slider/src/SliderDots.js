import React, { Component } from 'react';

/**
 * 底部轮播 控制按钮;
 */
export default class SliderDots extends Component {

  constructor(props) {
    super(props);
  }

  _handleDotClick(i) {
    let option = i - this.props.nowLocal;
    this.props.turn(option);
  }

  render() {
    let dotNodes = [];
    let { count, nowLocal } = this.props;
    for (let i = 0; i < count; i++) {
      dotNodes[i] = (
        <span
          key={'dot' + i}
          className={"slider-dot" + (i === this.props.nowLocal?" slider-dot-selected":"")}
          onClick={this._handleDotClick.bind(this, i)}>
        </span>
      );
    }

    return (
      <div className="slider-dots">
        {dotNodes}
      </div>
    );
  }

}
