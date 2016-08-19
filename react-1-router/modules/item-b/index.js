import React from 'react';
import {Link, withRouter} from 'react-router';

class ItemBApp extends React.Component {

  render() {

    return (
      <div>
        This is item-b.js...
      </div>
    );
  }
}
export default withRouter(ItemAApp);
