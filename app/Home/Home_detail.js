
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

export default class HomeDetail extends Component {
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
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
    },
});

