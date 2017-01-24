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
            content: '点击后，等待接收Native发回的信息',
        }
    }

    componentWillMount() {
        //监听事件名为EventName的事件,对应了原生端的名字
        DeviceEventEmitter.addListener('KEY_NATIVE_EVENT', (reminder) => {
            // alert(reminder.success);
            let response = reminder.success;
            let parseResponse = JSON.parse(response);
            let parseString = parseResponse.data[0].description;
            // console.log(parsedString);
            this.receiveDataFromNative(parseString);

        });
    }

    render() {
        return (
            <View style={styles.container}>
                < Button
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

    receiveDataFromNative(data) {
        this.setState({content: data})
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