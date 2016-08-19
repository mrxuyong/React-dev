import React from 'react';
import {Link, withRouter} from 'react-router';

class ItemAApp extends React.Component {

  render() {

    return (
      <div>
        <h4>item-a</h4>
        This is item-a.js...
      </div>
    );
  }
}
export default withRouter(ItemAApp);
