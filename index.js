import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Animated, TouchableWithoutFeedback } from 'react-native';

export default class PopinButton extends Component {
  componentWillMount = () => {
    this.animatedScale = new Animated.Value(1);
  }

  handlePressIn = () => {
    Animated.spring(this.animatedScale, {
      toValue: this.props.scaleTo
    }).start()
  }

  handlePressOut = () => {
    if(this.props.afterAnimate){
      Animated.spring(this.animatedScale, {
        toValue: 1,
        tension: 50,
        friction: 10
      }).start(() => {
        this.props.onPress()
      });
    } else {
      Animated.spring(this.animatedScale, {
        toValue: 1,
        tension: 50,
        friction: 10
      }).start();
      this.props.onPress()
    }
  }
  
  render() {
    const animatedStyles = { transform: [{scale: this.animatedScale }]};
    return (
      <TouchableWithoutFeedback
        onPressIn={this.handlePressIn}
        onPressOut={this.handlePressOut}>
        <Animated.View 
          useNativeDriver={this.props.useNativeDriver}
          style={[this.props.style, animatedStyles]}>
          {this.props.children}
        </Animated.View>
      </TouchableWithoutFeedback>
    );
  }
}

PopinButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  scaleTo: PropTypes.number,
  afterAnimate: PropTypes.bool,
  useNativeDriver: PropTypes.bool,
}

PopinButton.defaultProps = {
  scaleTo: 0.9,
  afterAnimate: true,
  useNativeDriver: true
}