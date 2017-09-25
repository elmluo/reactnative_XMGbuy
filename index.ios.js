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
import Main from './app/Main'
export default class XMGbuy extends Component {
  render() {
    return (
     <Main/>
    );
  }
}

const styles = StyleSheet.create({
});

AppRegistry.registerComponent('XMGbuy', () => XMGbuy);
