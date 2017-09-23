
import React, { Component } from 'react';
import { StyleSheet, Image, Platform } from 'react-native';

// 从大模块儿中引入需要的功能模块儿
// 一定要要使用解构
import { Navigator } from 'react-native-deprecated-custom-components'
import TabNavigator from 'react-native-tab-navigator';
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
            <TabNavigator>
                <TabNavigator.Item
                    title="首页"
                    titleStyle={styles.titleStyle}
                    selectedTitleStyle={styles.selectedTitleStyle}
                    renderIcon={() => <Image source={require('./assets/img/icon_tabbar_homepage.png')} style={styles.iconStyle}/>}
                    renderSelectedIcon={() => <Image source={require('./assets/img/icon_tabbar_homepage_selected.png')} style={styles.iconStyle}/>}
                    badgeText="1"
                    onPress={() => this.setState({ selectedTab: 'home' })}
                    selected={this.state.selectedTab === 'home'}>

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
    titleStyle: {
    },
    selectedTitleStyle: {
        color: 'orange',
    },
    iconStyle: {
        width: Platform.OS ==='ios' ? 30 : 30,
        height: Platform.OS === 'ios' ? 30 : 30,
    }
});

