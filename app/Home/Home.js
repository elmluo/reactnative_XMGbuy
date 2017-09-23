
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    我是Home页面
                </Text>
                <Image
                    source={require('../assets/img/icon_tabbar_homepage.png')}
                    // source={{uri:'image!icon_tabbar_homepage'}}
                    style={{width :100,height:100}}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});

