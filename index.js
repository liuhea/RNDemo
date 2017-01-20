/**
 * Created by liuhe on 2017/1/20.
 */
// ListView组件必须的两个属性是dataSource和renderRow。
// dataSource是列表的数据源，
// 而renderRow则逐个解析数据源中的数据，然后返回一个设定好格式的组件来渲染。

import React, {Component} from 'react';
import {AppRegistry, ListView, Text, View} from 'react-native';

class HelloWorldApp extends Component {
    // 初始化模拟数据
    constructor(props) {
        super(props);
        // rowHasChanged函数也是ListView的必需属性。这里我们只是简单的比较两行数据是否是同一个数据（===符号只比较基本类型数据的值，和引用类型的地址）来判断某行数据是否变化了。
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([
                'MovieListDemo', 'FlexDemo', 'NetWorkDemo', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
            ])
        };
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => <Text style={{height:40}}>{rowData}</Text>}
                />
            </View>
        );
    }
}
module.exports = HelloWorldApp;
