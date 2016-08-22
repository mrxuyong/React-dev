import React, {Component} from 'react';
import ReactDom, {render} from 'react-dom';
import {StoreProvider} from 'iflux2';
import AppStore from './store';

/**
 * IndexApp is my first example;
 */
//debug: true, it will show good logs
@StoreProvider(AppStore, {debug: true})
export default class IndexApp extends Component {

  componentDidMount() {
    console.log('componentDidMount()-->>');

    /*if (3 > 2) {
     location.href="https://www.apple.com/cn/"
     }*/
    this._testAny('what is any ?');
  }

  render() {
    return (
      <a href="https://www.baidu.com" target="_blank">
        This is IndexApp...
      </a>
    );
  }

  _testAny(str:any) {
    console.log('_testAny-->>' + str);
  }

}

render(<IndexApp/>, document.getElementById('app'));
//ReactDom.render(<IndexApp/>, document.getElementById('app'));

