/**
 * Tmall 3c Fp Page
 * https://github.com/facebook/react-native
 */
'use strict';

import React, {Component} from 'react';
import {ScrollView, View, TextInput, Text, StyleSheet} from 'react-native';


var ItemList = require('ItemList');
var Tabs = require('Tabs');
var Cat = require('Cat');
var Promotion = require('Promotion');
var CloverSlider = require('CloverSlider');

module.exports = React.createClass({

    //object在组件被挂载之前调用。
    getInitialState() {
        return {
            cateId: 0
        };
    },

    //更新分类ID
    handleUpdateList(cateId) {
        this.setState({
            cateId: cateId
        })
    },

    //渲染头部
    renderHeader() {
        return (
            <View style={{height: 25, backgroundColor: '#2964dd'}}/>
        );
    },

    //test
    renderTest: function () {
        return (
            <TabBarIOS>
                <TabBarIOS.Item title="React Native" selected={true} icon={require('image!cart')}>
                    <NavigatorIOS />
                </TabBarIOS.Item>

            </TabBarIOS>
        );
    },


    render() {
        var cateId = this.state.cateId;
        return (
            <View style={{flex: 1}}>
                {/*{this.renderHeader()}*/}
                <ScrollView stickyHeaderIndices={[4]}>
                    <CloverSlider />
                    <Cat />
                    <Promotion />
                    <View style={{height: 4, backgroundColor: '#F2F2F2'}}/>
                    <Tabs updateCateItem={this.handleUpdateList}/>
                    <ItemList cateId={cateId}/>
                </ScrollView>
            </View>
        );
    }
});

