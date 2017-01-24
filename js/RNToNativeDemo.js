/**
 * Created by liuhe on 2017/1/24.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    DeviceEventEmitter,
    NativeModules,
    View
} from 'react-native';

export default class RNToNativeDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            content: '这个是预定的接受信息',
        }
    }

    componentWillMount() {
        //监听事件名为EventName的事件
        DeviceEventEmitter.addListener('EventName', ()=> {
            this.showState();
            alert("send success");

        });
    }

    render() {
        return (
            <View style={styles.container}>

                <Text style={styles.welcome}
                      onPress={this.callNative.bind(this)}>
                    当你点我的时候会调用原生方法，原生方法延迟3s后会向前端发送事件。
                    前端一直在监听该事件，如果收到，则给出alert提示!
                </Text>


                <Text style={styles.welcome}>
                    {this.state.content}
                </Text>
            </View>
        );
    }

    callNative() {
        console.log("=======callNative=====");
        NativeModules.MyModule.NativeMethod();
    }

    showState() {
        this.setState({content: '已经收到了原生模块发送来的事件'})
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});