import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Platform,
    ScrollView,
    TouchableOpacity,
    Image,
    Dimensions,
} from 'react-native';

let {width, height} = Dimensions.get('window');
// 使用ComCell组件
let ComCell = require('./ComCell');
export default class More extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/*导航条*/}
                {this._renderNavBar()}

                <ScrollView>
                    <View style={{marginTop: 10}}>
                        <ComCell title='扫一扫'/>
                    </View>
                    <View style={{marginTop: 10}}>
                        <ComCell title='省流量模式' isSwitch={true}/>
                        <ComCell title='消息提醒'/>
                        <ComCell title='邀请好友使用麻团'/>
                        <ComCell title='清空缓存' rightSubtitle='19.9M'/>
                    </View>
                    <View style={{marginTop: 10}}>
                        <ComCell title="问卷调查"/>
                        <ComCell title="支付帮助"/>
                        <ComCell title="网络诊断"/>
                        <ComCell title="关于码团"/>
                        <ComCell title="我要应聘"/>
                    </View>

                    <View style={{marginTop: 10}}>
                        <ComCell title="精品应用"/>
                    </View>

                </ScrollView>
            </View>
        );
    }

    _renderNavBar() {
        return (
            <View style={styles.navOutViewStyle}>
                <View style={{width: width * 0.1}}>
                </View>

                <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>
                    更多
                </Text>

                <TouchableOpacity
                    onPress={() => {
                        alert('不要点我')
                    }}>
                    <Image
                        style={styles.rightViewStyle}
                        source={require('../assets/img/icon_mine_setting.png')}/>
                </TouchableOpacity>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    navImageStyle: {
        width: Platform.OS === 'ios' ? 28 : 24,
        height: Platform.OS === 'ios' ? 28 : 24,
    },

    rightViewStyle: {
        // // 绝对定位
        // position:'absolute',
        // right:10,
        // bottom:Platform.OS === 'ios' ? 15:13
    },

    navOutViewStyle: {
        height: Platform.OS === 'ios' ? 64 : 44,
        backgroundColor: 'rgba(255,96,0,1.0)',

        // 设置主轴的方向
        flexDirection: 'row',
        // 垂直居中 ---> 设置侧轴的对齐方式
        alignItems: 'center',
        // 主轴方向居中
        justifyContent: 'space-between'
    },

    container: {
        flex: 1,
        backgroundColor: '#e8e8e8',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});

