import React from 'react';
import {
    View,
    Navigator
} from 'react-native';
import FirstPageComponent from './FirstPageComponent';
//FirstPageComponent 初始首页的component名字

export default class SampleComponent extends React.Component {
    //class 用来实例化成 <Component />标签
    render() {
        let defaultName = 'FirstPageComponent';
        let defaultComponent = FirstPageComponent;
        return (
            <Navigator
                initialRoute={{name: defaultName, component: defaultComponent}}
                // 指定了默认的页面，也就是启动app之后会看到界面的第一屏。

                configureScene={(route) => {
                    return Navigator.SceneConfigs.VerticalDownSwipeJump;
                }}
                //页面之间跳转时候的动画，
                // 有源代码的: node_modules/react-native/Libraries/CustomComponents/Navigator/NavigatorSceneConfigs.js

                renderScene={(route, navigator) => {
                    let Component = route.component;
                    return <Component {...route.params} navigator={navigator}/>
                }}/>
        );
    }
}