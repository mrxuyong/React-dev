import React from 'react';
import {Link, withRouter} from 'react-router';

class MainApp extends React.Component {

  componetDidMount() {
    console.log('MainApp-->> main main');
  }

  render() {
    <div>
      This is main.js...
    </div>
  }
}
export default withRouter((MainApp));
