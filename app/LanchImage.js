
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    BackHandler,
    Platform,
    Dimensions,
} from 'react-native';
import Main from './Main'

let {width, height} = Dimensions.get('window');

export default class LanchImage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        setTimeout(()=>{
            this.props.navigator.replace({
                component: Main,
            })
        }, 2000)
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.lanchImage}
                    source={require('./assets/img/lanch_img.png')}/>
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
    lanchImage: {
        width: width,
        height: height
    }
});

