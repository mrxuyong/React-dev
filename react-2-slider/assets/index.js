import React, {Component} from 'react';
import ReactDom, {render} from 'react-dom';

import SliderIndex from '../src/index';

const IMAGE_LIST = [
  {
    src: 'http://img2.ph.126.net/yEeoBStBbI9eimolCsVD_A==/6630577383512916782.jpg',
    alt: 'images-1',
  },
  {
    src: 'http://img2.mtime.cn/up/1640/1267640/8C47069F-245F-489A-84DC-D473C6F36876_o.jpg',
    alt: 'images-2',
  },
  {
    src: 'http://gb.cri.cn/mmsource/images/2005/10/08/eh051008118.jpg',
    alt: 'images-3',
  },
];

export default class IndexApp extends Component {

  componentDidMount() {
    console.log('assets/index.js -- componentDidMount()-->>');
  }

  render() {

    return (
      <SliderIndex
        items={IMAGE_LIST}
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
