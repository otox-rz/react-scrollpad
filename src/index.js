import React from 'react';
import PropTypes from 'prop-types';

export class ScrollPad extends React.Component {
  componentDidMount() {
    this.forceUpdate();
  }

  calculateMargin = (ref) => {
    const { pad } = this.props;

    if (ref && ref.scrollHeight) {
      return ref.scrollHeight > ref.clientHeight ? pad : '0';
    }
  };

  padDirection = () => this.props.rtl ? 'paddingLeft' : 'paddingRight';

  render() {
    return React.cloneElement(React.Children.only(this.props.children), {
      ref: (node) => { this.containerRef = node; },
      className: this.props.className,
      style: {
        [this.padDirection()]: this.calculateMargin(this.containerRef),
        width: 'auto',
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
