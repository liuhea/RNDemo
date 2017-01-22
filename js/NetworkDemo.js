/**
 * Created by liuhe on 2017/1/20.
 */
import React, {
    Component,
    PropTypes,
} from 'react';

import {
    Text,
    View,
} from 'react-native';

var REQUEST_URL = "http://facebook.github.io/react-native/movies.json";

export default class MovieListDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {movies: "movies is null"};
        this.fetchData = this.fetchData.bind(this);
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        fetch(REQUEST_URL)
            .then((response) => response.json())
            .then((responseData) => {
                // 注意，这里使用了this关键字，为了保证this在调用时仍然指向当前组件，我们需要对其进行“绑定”操作
                this.setState({
                    movies: JSON.stringify(responseData),
                    // movies: responseData.movies[0].title,
                    // movies: JSON.parse('{\"title\":\"The Matrix\",\"releaseYear\":\"1999\"}').title,
                })
                ;
            });

    }

    render() {
        return (
            <View>
                <Text>
                    {this.state.movies}
                </Text>
            </View>
        )
    }
}


// 需要注意的是，安全机制与网页环境有所不同：在应用中你可以访问任何网站，没有跨域的限制。
//'GET', "http://facebook.github.io/react-native/movies.json"
// {
//     "title": "The Basics - Networking",
//     "description": "Your app fetched this from a remote endpoint!",
//     "movies": [
//     { "title": "Star Wars", "releaseYear": "1977"},
//     { "title": "Back to the Future", "releaseYear": "1985"},
//     { "title": "The Matrix", "releaseYear": "1999"},
//     { "title": "Inception", "releaseYear": "2010"},
//     { "title": "Interstellar", "releaseYear": "2014"}
// ]
// }