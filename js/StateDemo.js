/**
 * Created by liuhe on 2017/1/24.
 */
import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';

class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = {isShow: true};

        //在constructor中初始化state（ES6的写法，早期的很多ES5的例子使用的是getInitialState方法来初始化state）
        // 然后在需要修改时调用setState方法。

        // 每1000毫秒对showText状态做一次取反操作
        setInterval(() => {
            this.setState({isShow: !this.state.isShow});
        }, 1000);
    }

    render() {
        // 根据当前showText的值决定是否显示text内容
        let display = this.state.isShow ? this.props.text : ' ';
        return (
            <Text>{display}</Text>
        );
    }
}

export default class StateDemo extends Component {
    render() {
        return (
            <View>
                <Blink text='I love to blink'/>
                <Blink text='Yes blinking is so great'/>
                <Blink text='Why did they ever take this out of HTML'/>
                <Blink text='Look at me look at me look at me'/>
            </View>
        );
    }
}