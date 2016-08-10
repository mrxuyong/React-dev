import React, {Component} from 'react';

/**
 * 头部;
 */
export default class Header extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="">
        <h1>{this.props.headerTitle}</h1>
      </div>
    );
  }

}
