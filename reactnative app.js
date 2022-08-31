 /*dashboard*/
import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Dashboard from 'react-native-dashboard';
import { FontAwesome } from 'react-native-vector-icons';
                           /* splashscreen components*/
import React, { Component } from 'react';
import { StyleSheet, Platform, TouchableOpacity, Image, View, Text, Alert
} from 'react-native';
                           /*login components*/
import react,{component} from 'react';import {stylesheet,text,view,textInput,TouchableOpacity,asyncstorage,
keyboard} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Form from './Form';
                              /*dashboard code*/
const Icon = ({ icon, item, background }) => (
    <FontAwesome
        name={icon}
        size={40}
        color={
            item.iconColor || (!item.background || !background ? '#3498db' : '#fff')
        }
        style={item.styleIcon}
    />
);

const data = [
    {
        name: 'login',
        background: '#3498db',
        icon: (item, background) => Icon({ icon: 'user', item, background }),
        iconColor: '#0d47a1',
        rippleColor: '#000',
    },
    {
        name: 'register',
        background: '#b71c1c',
        icon: (item, background) => Icon({ icon: 'register', item, background }),
        styleIcon: { color: '#0d47a1' },
    },
    {
        name: 'Calendars',
        background: '#ff5722',
        icon: (item, background) => Icon({ icon: 'calendar', item, background }),
    },
];

export default function App() {
    const card = ({ name }) => console.log('Card: ' + name);
    return (
        <View style={styles.container}>
            <Dashboard
                data={data}
                background={true}
                card={card}
                column={2}
                rippleColor={'#3498db'}
            />
        </View>
    );
}
                        /*login code*/
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ecf0f1',
    },
});



export default class Login extends Component {
signup() {
Actions.signup()
}
render() {
return(
<View style={styles.container}>
<Text>{'\n'}</Text>
<Text>{'\n'}</Text>
<Form type="Login"/>
<View style={styles.signupTextCont}>
<Text style={styles.signupText}>Not a User? </Text>
<TouchableOpacity onPress={this.signup}><Text style={styles.signupButton}>Register here</Text></TouchableOpacity>
</View>
</View>
)
}
}
const styles = StyleSheet.create({ container: {
flex: 1,
justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff',
},
signupTextCont: { flexGrow: 1,
justifyContent: 'center', alignItems: 'flex-end', paddingVertical: 15, flexDirection: 'row',
},
signupText: { color: '#bd157a', fontSize:15,
},
signupButton: { color: '#700d49', fontSize:15,
fontWeight: '500',
}
});

/**
 * @typedef {NewType} NewType_1
 */

                       /*splash screen code*/
/**
 * @typedef {{}} NewType
 */

export default class Myapp extends Component<NewType_1>
{
constructor(){ super(); this.state={ isVisible : true,
}
}
Hide_Splash_Screen=()=>{ this.setState({
isVisible : false
});
}
componentDidMount(){ var that = this;
setTimeout(function(){ that.Hide_Splash_Screen();
}, 5000);
}
render()
{
let Splash_Screen = (
<View style={styles.SplashScreen_RootView}>
<View style={styles.SplashScreen_ChildView}>
<Image source={{uri:'https://static.javatpoint.com/tutorial/react- native/images/react-native-tutorial.png'}}
style={{width:'100%', height: '100%', resizeMode:
'contain'}} />
</View>
</View> )
return(
<View style = { styles.MainContainer }>
<Text style={{textAlign: 'center',width: '100%'
,backgroundColor: '#fc8bef'}}> Simple Splash Screen</Text>
{
(this.state.isVisible === true) ? Splash_Screen : null
}
</View>
);
}
}
const styles = StyleSheet.create(
{
MainContainer:
{
flex: 1,
justifyContent: 'center',
alignItems: 'center',
paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0
},
SplashScreen_RootView:
{
justifyContent: 'center',
flex:1,
margin: 10,
position: 'absolute', width: '100%',
height: '100%',
},
SplashScreen_ChildView:
{
justifyContent: 'center', alignItems: 'center', backgroundColor: '#fcf52b', flex:1,
},
});


 /*news updates app*/

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
