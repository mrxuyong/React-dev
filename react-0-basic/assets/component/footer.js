import React, {Component} from 'react';

/**
 * 底部;
 */
export default class Footer extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="">
        <h1>{this.props.footerTitle}</h1>
      </div>
    );
  }

}
