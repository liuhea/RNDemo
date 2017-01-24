/**
 * Created by liuhe on 2017/1/20.
 * 在组件样式中使用flex可以使其在可利用的空间中动态地扩张或收缩。
 * 一般而言我们会使用flex:1来指定某个组件扩张以撑满所有剩余的空间。
 * 如果有多个并列的子组件使用了flex:1，则这些子组件会平分父容器中剩余的空间。
 * 如果这些并列的子组件的flex值不一样，则谁的值更大，谁占据剩余空间的比例就更大（即占据剩余空间的比等于并列组件间flex值的比）。
 *
 * 我们在React Native中使用flexbox规则来指定某个组件的子元素的布局。Flexbox可以在不同屏幕尺寸上提供一致的布局结构。

 一般来说，使用flexDirection、alignItems和 justifyContent三个样式属性就已经能满足大多数布局需求。
 flexDirection的默认值是column，而flex也只能指定一个数字值。

 */
import React, {Component} from 'react';
import {AppRegistry, ScrollView, View, TextInput, Text, Image} from 'react-native';

class FlexDirectionBasics extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    render() {
        return (
            <ScrollView>
                <View style={{padding: 10}}>

                    <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
                           style={{width: 200, height: 150}}/>

                    <TextInput
                        style={{height: 40}}
                        placeholder="Type here to translate!"
                        onChangeText={(text) => this.setState({text})}
                    />
                    <Text style={{padding: 10, fontSize: 42}}>
                        {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
                    </Text>

                </View>
            </ScrollView>
        );
    }
}

module.exports = FlexDirectionBasics;