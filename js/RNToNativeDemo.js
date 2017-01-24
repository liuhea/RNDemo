/**
 * Created by liuhe on 2017/1/24.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    Button,
    DeviceEventEmitter,
    NativeModules,
    View
} from 'react-native';

export default class RNToNativeDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            content: '点击3秒后接收Native发回的信息',
        }
    }

    componentWillMount() {
        //监听事件名为EventName的事件
        DeviceEventEmitter.addListener('NativeEvent', ()=> {
            this.showState();
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Button
                    onPress={this.callNative.bind(this)}
                    title="call NativeMethod"
                    color="deepskyblue"
                />

                <Text style={styles.welcome}>
                    {this.state.content}
                </Text>
            </View>
        );
    }

    callNative() {
        NativeModules.RNModule.NativeMethod();
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