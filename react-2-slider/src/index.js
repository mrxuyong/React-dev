import React, {Component} from 'react';

import SliderItem from './slider-Item';
import SliderArrows from './slider-Arrows';
import SliderDots from './slider-Dots';

import './less/Slider.less';

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

/**
 * @desc 该组件为 图片轮播;
 */
export default class Slider extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nowLocal: 0,
    };
  }

  componentDidMount() {
    this.goPlay();
  }

  // 向前 向后多少;
  turn(n) {
    console.log('turn-->' + n);

    var _n = this.state.nowLocal + n;
    if (_n < 0) {
      _n = _n + this.props.items.length;
    }
    if (_n >= this.props.items.length) {
      _n = _n - this.props.items.length;
    }
    this.setState({nowLocal: _n});
  }

  // 开始自动轮播;
  goPlay() {
    if (this.props.autoPlay) {
      this.autoPlayFlag = setInterval(() => {
        this.turn(1);
      }, this.props.delay * 1000);
    }
  }

  // 暂停自动轮播;
  pausePlay() {
    clearInterval(this.autoPlayFlag);
  }

  render() {
    let count = this.props.items.length;

    let sliderItemNodes = this.props.items.map((item, index) => {
      return <SliderItem item={item} count={count} key={'item' + index}/>;
    });

    let sliderArrowsNode = <SliderArrows turn={this.turn.bind(this)}/>;

    let sliderDotsNode = <SliderDots turn={this.turn.bind(this)} count={count} nowLocal={this.state.nowLocal}/>;

    return (
      <div className="slider"
           onMouseOver={this.props.pause ? this.pausePlay.bind(this) : null}
           onMouseOut={this.props.pause ? this.goPlay.bind(this) : null}>
        <ul style={{
              left: -100 * this.state.nowLocal + "%",
              transitionDuration: this.props.speed + "s",
              width: this.props.items.length * 100 + "%"
            }}>
          {sliderItemNodes}
        </ul>
        {this.props.arrows ? sliderArrowsNode : null}
        {this.props.dots ? sliderDotsNode : null}
      </div>
    );
  }

}

Slider.defaultProps = {
  items: IMAGE_LIST || [],
  speed: 1.5,
  delay: 2,
  pause: true,
  autoPlay: true,
  arrows: true,
  dots: true
};
Slider.autoPlayFlag = null;
