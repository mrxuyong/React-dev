import React, { Component } from 'react';

/**
 * 左右轮播 控制按钮;
 */
export default class SliderArrows extends Component {

  constructor(props) {
    super(props);
  }

  _handleArrowClick(option) {
    this.props.turn(option);
  }

  render() {

    return (
      <div>
        <span
          className="slider-arrows slider-arrows-left"
          onClick={this._handleArrowClick.bind(this, -1)}>
          &lt;
        </span>
        <span
          className="slider-arrows slider-arrows-right"
          onClick={this._handleArrowClick.bind(this, 1)}>
          &gt;
        </span>
      </div>
    );
  }

}
