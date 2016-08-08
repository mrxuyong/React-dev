import React, {Component} from 'react';
import ReactDom, {render} from 'react-dom';
//import {StoreProvider} from 'iflux2';
import AppStore from './store';

/**
 * IndexApp is my first example;
 */
//debug: true, it will show good logs
//@StoreProvider(AppStore, {debug: true})
export default class IndexApp extends Component {

  componentDidMount() {
    console.log('componentDidMount()-->>');
  }

  render() {
    return (
      <div>
        This is IndexApp.
      </div>
    );
  }
}
//render(<IndexApp/>, document.getElementById('app'));
ReactDom.render(<IndexApp/>, document.getElementById('app'));

