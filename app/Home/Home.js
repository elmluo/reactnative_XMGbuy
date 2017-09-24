
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
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
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});

