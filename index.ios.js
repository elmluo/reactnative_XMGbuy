/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import LanchImage from './app/LanchImage'
export default class XMGbuy extends Component {
  render() {
    return (
     <LanchImage/>
    );
  }
}

const styles = StyleSheet.create({
});

AppRegistry.registerComponent('XMGbuy', () => XMGbuy);
