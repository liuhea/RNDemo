/**
 * Created by liuhe on 2017/1/24.
 *
 * style属性可以是一个普通的JavaScript对象。
 */
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';


export default class StyleSheetDemo extends Component {
    render() {
        return (
            <View>

                <Text style={styles.blue}>color blue</Text>
                <Text style={styles.red}>color red</Text>
                <Text style={[styles.red, styles.blue]}>red ,then blue</Text>
                <Text style={[styles.blue, styles.red]}>blue, then red</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    red: {
        color: 'red',
    },
    blue: {
        color: 'blue',
    }
});