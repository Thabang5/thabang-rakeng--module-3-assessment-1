import React, { Component } from 'react'; import { View,
    Text, StyleSheet
    }from 'react-native';
    import {useNavigation} from '@react-navigation/native';
import {StackActions} from '@react-navigation/native';
    import { SearchBar } from 'react-native-elements';
    export default class App extends React.Component { state = {
    search: '',
    };
    updateSearch = search => { this.setState({ search });
    };
    render() {
    const { search } = this.state;
    return (
    <SearchBar
    placeholder="Type Here to Search..." onChangeText={this.updateSearch} value={search}
    />
    );
    }
    }
