
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Image,
    TouchableOpacity,
    BackHandler,
    Platform,
    Dimensions,
} from 'react-native';
import HomeDetail from './Home_detail';
import HomeArea from './Home_Area';
let {width, height} = Dimensions.get('window');
export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <View style={styles.container}>
                {/*首页导航条*/}
                {this._renderNavBar()}

                <Text>
                    我是Home页面
                </Text>
                <TouchableOpacity
                    // 路由跳转到子页面
                    onPress={()=>{
                        this.props.navigator.push({
                            component: HomeDetail,
                            title: '详情页'
                        })
                    }}>
                    <Text>
                        点我跳转到详情页面
                    </Text>
                </TouchableOpacity>

                <Image
                    source={require('../assets/img/icon_tabbar_homepage.png')}
                    // source={{uri:'image!icon_tabbar_homepage'}}
                    style={{width :100,height:100}}
                />
            </View>
        );
    }

    /**
     * 渲染导航条
     * @returns {XML}
     * @private
     */
    _renderNavBar() {
        return(
            <View style={styles.nav}>
                <TouchableOpacity
                    onPress={()=>{
                        this.props.navigator.push({
                            component: HomeArea,
                            title: 'Area'
                        })
                    }}>
                    <View style={styles.navLeft}>
                        <Text>广州</Text>
                    </View>
                </TouchableOpacity>
                <View>
                    <TextInput
                        placeholder="输入商家爱，品类，商圈"
                        underlineColorAndroid='transparent'
                        style={styles.navTextInput}/>
                </View>
                <View style={styles.navRight}>
                    <TouchableOpacity
                        onPress={()=>{
                            alert('点击了')
                        }}>
                        <Image source={require('../assets/img/icon_homepage_message.png')}
                               style={styles.navRightImg}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={()=>{
                            alert('点击了')
                        }}>
                        <Image source={require('../assets/img/icon_homepage_scan.png')}
                               style={styles.navRightImg}/>
                    </TouchableOpacity>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    nav: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: Platform.OS==="ios" ? 66 : 44,
        backgroundColor: 'rgba(255, 96, 0, 1.0)',
    },
    navLeft: {

    },
    navTextInput: {
        height: 30,
        width: width * 0.7,
        backgroundColor: '#FFFFFF',
        borderRadius: 22,
        paddingLeft: 15,
        padding: 0,
    },
    navRight: {
      flexDirection: 'row'
    },
    navRightImg: {
        width: 30,
        height: 30
    }

});

