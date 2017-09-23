
import React, { Component } from 'react';
import { StyleSheet, Image, View, Text, Platform } from 'react-native';
// 一定要要使用解构
import { Navigator } from 'react-native-deprecated-custom-components'
import TabNavigator from 'react-native-tab-navigator';
// 从大模块儿中引入需要的功能模块儿
import Home from './Home/Home';
import Shop from './Shop/Shop';
import Mine from './Mine/Mine';
import More from './More/More';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state={
            selectedTab: 'home'
        }
    }
    render() {
        return (
            <TabNavigator
                sceneStyle={styles.sceneStyle}
                tabBarStyle={styles.tabBarStyle}
                tabBarShadowStyle={styles.tabBarShadowStyle}
                hidesTabTouch={false}>
                <TabNavigator.Item
                    title="首页"
                    titleStyle={styles.titleStyle}
                    selectedTitleStyle={styles.selectedTitleStyle}
                    renderIcon={() => <Image source={require('./assets/img/icon_tabbar_homepage.png')} style={styles.iconStyle}/>}
                    renderSelectedIcon={() => <Image source={require('./assets/img/icon_tabbar_homepage_selected.png')} style={styles.iconStyle}/>}
                    badgeText="1"
                    renderBadge={()=>{
                        return (
                            <View style={styles.badge}>
                                <Text style={styles.badgeText}>1</Text>
                            </View>
                        )
                    }}
                    onPress={() => this.setState({ selectedTab: 'home' })}
                    selected={this.state.selectedTab === 'home'}
                    allowFontScaling={true}>
                    <Navigator
                        initialRoute={{name:'首页',component:Home}}
                        configureScene={()=>{// 过渡动画
                            return Navigator.SceneConfigs.PushFromRight;
                        }}
                        renderScene={(route,navigator)=>{
                            let Component = route.component;
                            return <Component {...route.passProps} navigator={navigator}/>;
                        }}
                    />

                </TabNavigator.Item>

                <TabNavigator.Item
                    selected={this.state.selectedTab === 'shop'}
                    title="商家"
                    renderIcon={() => <Image source={require('./assets/img/icon_tabbar_merchant_normal.png')} style={styles.iconStyle}/>}
                    renderSelectedIcon={() => <Image source={require('./assets/img/icon_tabbar_merchant_selected.png')} style={styles.iconStyle}/>}
                    badgeText="1"
                    renderBadge={()=>{
                        return (
                            <View style={styles.badge}>
                            </View>
                        )
                    }}
                    onPress={() => this.setState({ selectedTab: 'shop' })}>
                    <Shop/>
                </TabNavigator.Item>

                <TabNavigator.Item
                    selected={this.state.selectedTab === 'mine'}
                    title="我的"
                    renderIcon={() => <Image source={require('./assets/img/icon_tabbar_mine.png')} style={styles.iconStyle}/>}
                    renderSelectedIcon={() => <Image source={require('./assets/img/icon_tabbar_mine_selected.png')} style={styles.iconStyle}/>}
                    badgeText="1"
                    onPress={() => this.setState({ selectedTab: 'mine' })}>
                    <Mine/>
                </TabNavigator.Item>

                <TabNavigator.Item
                    selected={this.state.selectedTab === 'more'}
                    title="更多"
                    renderIcon={() => <Image source={require('./assets/img/icon_tabbar_misc.png')} style={styles.iconStyle}/>}
                    // renderIcon={() => <Image source={{uri:'./assets/img/icon_tabbar_misc.png'}} style={styles.iconStyle}/>}
                    renderSelectedIcon={() => <Image source={require('./assets/img/icon_tabbar_misc_selected.png')} style={styles.iconStyle}/>}
                    badgeText="1"
                    onPress={() => this.setState({ selectedTab: 'more' })}>
                    <More/>
                </TabNavigator.Item>
            </TabNavigator>
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
    sceneStyle: {
    },
    tabBarStyle: {
        backgroundColor: "pink",
        // height: 100,
        // marginTop: 10,
        // paddingTop: 10,
        // alignItems: 'center'
    },
    tabBarShadowStyle: {
    },
    titleStyle: {
    },
    selectedTitleStyle: {
        color: 'orange',
    },
    badge: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: -2,
        right: -5,
        width: 14,
        height: 14,
        borderWidth: 2,
        borderColor: '#FFFFFF',
        borderRadius: 7,
        backgroundColor: 'red',
    },
    badgeText: {
        fontSize: 10,
        color: '#DDDDDD'
    },
    iconStyle: {
        width: Platform.OS ==='ios' ? 30 : 25,
        height: Platform.OS === 'ios' ? 30 : 25,
    }
});

