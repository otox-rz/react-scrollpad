import React from 'react';
import PropTypes from 'prop-types';

export class ScrollPad extends React.Component {
  componentDidMount() {
    this.forceUpdate();
  }

  calculateMargin = (ref) => {
    const { pad } = this.props;

    if(ref && ref.scrollHeight) {
      return ref.scrollHeight > ref.clientHeight ? pad : '0';
    }
  };

  calculateWidth = (ref) => {
    if(ref && ref.scrollHeight) {
      const scrollBarWidth = ref.offsetWidth - ref.clientWidth;
      return this.calculateMargin(ref) !== '0' ? ref.clientWidth - parseInt(this.props.pad, 10) + scrollBarWidth : ref.clientWidth;
    }
  };

  padDirection = () => this.props.rtl ? 'paddingLeft' : 'paddingRight';

  render() {
    return React.cloneElement(React.Children.only(this.props.children), {
      ref: (node) => { this.containerRef = node },
      className: this.props.className,
      style: {
        [this.padDirection()]: this.calculateMargin(this.containerRef),
        width: this.calculateWidth(this.containerRef),
        ...this.props.style
      }
    });
  }
}

ScrollPad.defaultProps = {
  rtl: false,
  pad: '20px'
};

ScrollPad.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
  rtl: PropTypes.bool,
  pad: PropTypes.string,
  className: PropTypes.string
};

export default ScrollPad;
