/**
 * Created by liuhe on 2017/1/20.
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