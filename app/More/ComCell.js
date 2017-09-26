/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Platform,
    Switch
} from 'react-native';

let CommonCell = React.createClass({

    getDefaultProps() {
        return {
            title: '', //cell 左侧标题
            isSwitch: false,
            rightSubtitle: ''
        }
    },

    getInitialState() {
        return {
            isOn: false,
        }
    },
    render() {
        return (
            <TouchableOpacity>
                <View style={styles.container}>
                    {/*left*/}
                    <Text>{this.props.title}</Text>
                    {/*right */}
                    {this._renderRightView()}
                </View>
            </TouchableOpacity>
        )
    },

    _renderRightView(){
        if (this.props.isSwitch) {
            return(
                <Switch
                    onValueChange={()=> {
                        this.setState({
                            isOn: !this.state.isOn
                        })
                    }}
                    value={this.state.isOn === true}/>
            )
        } else {
            return(
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    {this._renderRightSubTitle()}
                    <Image
                        style={{width: 8, height: 13}}
                        source={require('../assets/img/icon_cell_rightarrow.png')}/>
                </View>

            )
        }
    },

    _renderRightSubTitle(){
        if (this.props.rightSubtitle) {
            return(
                <Text style={styles.rightSubtitle}>
                    {this.props.rightSubtitle}
                </Text>
            )
        }
    }


});


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: Platform.OS === 'ios' ? 40 : 40,
        backgroundColor: 'white',
        borderBottomColor: '#dddddd',
        borderBottomWidth: 0.5,
        paddingRight: 8,
        paddingLeft: 8,
    },
    rightSubtitle: {
        color: 'gray',
    }
});

// 输出组件类
module.exports = CommonCell;
