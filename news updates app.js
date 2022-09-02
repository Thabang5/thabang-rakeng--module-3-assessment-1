import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './app/components/navigation/AppNavigator';
import login from './src/Login';
import calender from '.src/calender';
import search bar from '.src/search bar';
import dashboard from '.src/dashboard';
import logout from '.src/logout';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="login"component={login} options={{headerShown:false}}/>
            <Stack.Screen name="dashboard"component={Home} options={{title:"Home"}}/>
            <Stack.Screen name="calender"component={calender} options={{title:"calender"}}/>
            <Stack.Screen name="search bar"component={search bar} options={{title:"search news"}}/>
            <Stack.Screen name="logout"component={logout} options={{title:"logout"}}/>
        </Stack.Navigator>
      
    </NavigationContainer>
  );
}

AppRegistry.registerComponent(appName, () => App)
var React = require('react-native');
 
var TabBarView = require('./Application/View/TabBar');

var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
} = React;

var ReactNativeNews = React.createClass({
    
    render : function() {
        return (
            <TabBarView style={styles.container} />
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection : 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
});

AppRegistry.registerComponent('ReactNativeNews', () => ReactNativeNews)
<component={login} options={{headerShown:false}} />
<component={dashboard} options={{title:dashboard,calender,calendar,search bar}} />
<component={logout} options={{headerShown:false}} />
