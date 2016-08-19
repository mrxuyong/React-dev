import React, {Component} from 'react';
import ReactDom, {render} from 'react-dom';

import SliderIndex from '../src/index';

const IMAGE_LIST = [
  {
    src: 'http://pic.qianmi.com/elife/jianzhan/img/banner01.jpg',
    alt: 'images-1',
  },
  {
    src: 'http://pic.qianmi.com/elife/jianzhan/img/banner02.jpg',
    alt: 'images-2',
  }
];

export default class IndexApp extends Component {

  componentDidMount() {
    console.log('assets/index.js -- componentDidMount()-->>');
  }

  render() {

    return (
      <SliderIndex
        items={IMAGE_DATA}
        speed={1.5}
        delay={2.5}
        pause={true}
        autoPlay={true}
        arrows={true}
        dots={true}
        />
    );
  }

}
render(<IndexApp/>, document.getElementById('app'));
