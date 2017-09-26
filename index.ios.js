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
import {Navigator} from 'react-native-deprecated-custom-components'
import LanchImage from './app/LanchImage'
export default class XMGbuy extends Component {
  render() {
    return (
        <Navigator
            initialRoute={{name:'加载动画',component:LanchImage}}
            configureScene={()=>{// 过渡动画
                return Navigator.SceneConfigs.FloatFromRight;
            }}
            renderScene={(route,navigator)=>{
                let Component = route.component;
                return <Component {...route.passProps} navigator={navigator}/>;
            }}
        />
    );
  }
}

const styles = StyleSheet.create({
});

AppRegistry.registerComponent('XMGbuy', () => XMGbuy);
