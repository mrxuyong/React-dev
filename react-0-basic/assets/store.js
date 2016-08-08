import {Store} from 'iflux';
//import {Store} from 'iflux2';

export default class AppStore extends Store {
  constructor(props) {
    super(props)
    //debug
    window._store = this;
  }
}