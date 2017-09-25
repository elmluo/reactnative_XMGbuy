
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    BackHandler,
    Platform,
} from 'react-native';

export default class HomeDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentWillMount() {
        if (Platform.OS === 'android') {
            BackHandler.addEventListener('hardwareBackPress', this._onBackAndroid);
        }
    }

    componentWillUnmount() {
        if (Platform.OS === 'android') {
            BackHandler.removeEventListener('hardwareBackPress', this._onBackAndroid)
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>
                    我是首页详情页
                </Text>
                <TouchableOpacity
                    onPress={()=> {
                        // 跳转回父组件
                        this.props.navigator.pop()
                    }}>
                    <Text>
                        点我跳转回父页面
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }

    /**
     * 点击android物理返回建操作
     * @returns {boolean}
     * @private
     */
    _onBackAndroid = ()=> {
        const navigator = this.props.navigator;
        const routers = navigator.getCurrentRoutes();
        console.log("当前路由长度");
        if (routers.length > 1 ) {
            navigator.pop();
            return true;
        }
        return false;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
    },
});

