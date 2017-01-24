/**
 * Created by liuhe on 2017/1/23.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    NativeModules,
    NativeEventEmitter,
    TextInput,
    TouchableHighlight
} from 'react-native';

//var patrolListener;
//const {PatrolListInterface} = NativeModules;
//const dataEvent = new NativeEventEmitter(NativeModules.PatrolListInterface);
//var patrolListener = dataEvent.addListener('PatrolListMsg', (reminder) => console.log(reminder));

var dataR;

export default class PatrolList extends Component {
    constructor(props) {
        super(props);

        this.state= {
            name:'',
            tel:'',
            backData:''
        }

        this.goBack.bind(this);
    }


    //在组件中使用
    componentWillMount() {
        console.log('监听1');
        this.eventEmitter = new NativeEventEmitter(NativeModules.PatrolListInterface);
        //var {NativeAppEventEmitter} = require('react-native');
        //this.NativeMsgSubscription = NativeAppEventEmitter.addListener('PatrolListMsg', (reminder) => {this.iseCallback(reminder)})
        this.eventEmitter.addListener('PatrolListMsg', (reminder) => {
            this.iseCallback(reminder);
        });  //对应了原生端的名字
        console.log('监听2');
    }
    componentWillUnmount() {
        this.eventEmitter.remove();  //记得remove哦
    }

    iseCallback(data) {//接受原生传过来的数据 data={code:,result:}
        //if (data.code == CB_CODE_RESULT) {
        this.setState({
            name:data.name,
            tel:data.tel
        });
        //}
        //else {//..真的是未知的错误
        //logf('传回其他参数', data.result);
        //}
    }


    goBack(data) {

        console.log('back'+data);
        NativeModules.PatrolListInterface.getBackData(this.state.backData);
    }

    updateInputText(newInput) {
        this.setState(() => {
            return {
                backData:newInput,
            };
        });
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.instructions}>
                    name is : {this.state.name}
                </Text>
                <Text style={styles.instructions}>
                    tel is : {this.state.tel}
                </Text>
                <TextInput style={styles.backdata}
                           placeholder={'输入回传数据'}
                           onChangeText={(backData) => this.setState({backData})}/>

                <TouchableHighlight onPress={(data) => this.goBack(this.state.backData)}>
                    <Text style={styles.backBtn}>确定返回</Text>
                </TouchableHighlight>
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
    backdata: {
        top: 20,
        left: 10,
        width:300,
        height:50,
        backgroundColor: 'green',
        fontSize:20
    },
    backBtn: {
        top:20,
        backgroundColor:'red',
        color:'white',
        width:100,
        height:100,
        textAlign:'center'
    }
});