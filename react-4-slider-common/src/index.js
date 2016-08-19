import React, {Component} from 'react';

import SliderItem from './SliderItem';
import SliderArrows from './SliderArrows';
import SliderDots from './SliderDots';

import './less/Slider.less';

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
      //_n = 0;
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

  /**
   * 首页banner图片轮换部分
   * @returns {XML}
   * @private
   */
  _bannerBox() {
    return (
      <div class="banner-box">
        <div class="bd">
          <ul>
            <li>
              <div class="m-width">
                <a class="ba01" target="_blank" href="#">
                  <img src="http://pic.qianmi.com/elife/jianzhan/img/banner01.jpg" alt=""/>
                </a>
              </div>
            </li>
            <li>
              <div class="m-width">
                <a class="ba02" target="_blank" href="#">
                  <img src="http://pic.qianmi.com/elife/jianzhan/img/banner02.jpg" alt=""/>
                </a>
              </div>
            </li>
          </ul>

          <p class="login-btn"><a href="#">登录</a></p>
        </div>

        <div class="pre-next">
          <div class="prev"></div>
          <div class="next"></div>
        </div>
      </div>
    );
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
  delay: 2.5,
  pause: true,
  autoPlay: true,
  arrows: true,
  dots: true
};
Slider.autoPlayFlag = null;
