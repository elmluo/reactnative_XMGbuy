
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
} from 'react-native';
import HomeDetail from './Home_detail'
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
            <View>
                <View>
                    <Text>广州</Text>
                </View>
                <View>
                    <TextInput
                        placeholder="输入商家爱，品类，商圈"
                        style={styles.navTextInput}/>
                </View>
                <View></View>
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

    },
    navInput: {

    }

});

