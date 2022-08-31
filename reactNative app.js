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
import { SearchBar } from 'react-native-elements';/*search bar components*/
import CalendarStrip from 'react-native-slideable-calendar-strip';/*calendarStrip components*/

/*user logout components*/
import React, {FC, ReactElement} from 'react';
import {Alert, Text, TouchableOpacity, View} from 'react-native';
import Parse from 'parse/react-native';
import {useNavigation} from '@react-navigation/native';
import {StackActions} from '@react-navigation/native';
import Styles from './Styles';


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
    {
        name: 'search News',
        background: '#ffebcd',
        icon: (item, background) => Icon({ icon: 'search', item, background }),
    },
    {
        name: 'logout',
        background: '#ffe4c4',
        icon: (item, background) => Icon({ icon: 'logout', item, background }),
    },
    
];

export App  function App() {
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
const Style= StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ecf0f1',
    },
});



export class Login extends Component {
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
const Styles = StyleSheet.create({ container: {
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

export class Myapp extends Component<NewType_1>
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
const Style1 = StyleSheet.create(
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
/*calendar code*/

export  class App extends Component
constructor(props) {
super(props);
this.state = {
selectedStartDate: null,
};
this.onDateChange = this.onDateChange.bind(this);
};
onDateChange(date) {
this.setState({
selectedStartDate: date,
});
}
render() {
const { selectedStartDate } = this.state;
const startDate = selectedStartDate ? selectedStartDate.toString() :
'';
return (
<View style={styles.container}>
<CalendarStrip isEnglish showWeekNumber showEnglishLunar
selectedDate={this.state.selectedDate} onPressDate={(date) => { this.setState({ selectedDate: date });
}}
onPressGoToday={(today) => { this.setState({ selectedDate: today });
}}
onSwipeDown={() => { alert('onSwipeDown');
}}
markedDate={['2020-03-04', '2020-03-15', '2020-03-04', '2020-03-01']}
weekStartsOn={1}
/>
<View>
</View>
</View>
);
}
}
const style = StyleSheet.create({ container: {
flex: 1,
backgroundColor: '#b3fff3', marginTop: 100,

});

/* search news*/

    export class App extends React.Component { state = {
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


 
export const UserLogOut = () => {
  const navigation = useNavigation();

  const doUserLogOut = async function () {
    return await Parse.User.logOut()
      .then(async () => {
        // To verify that current user is now empty, currentAsync can be used
        const currentUser = await Parse.User.currentAsync();
        if (currentUser === null) {
          Alert.alert('Success!', 'No user is logged in anymore!');
        }
        // Navigation dispatch calls a navigation action, and popToTop will take
        // the user back to the very first screen of the stack
        navigation.dispatch(StackActions.popToTop());
        return true;
      })
      .catch((error) => {
        Alert.alert('Error!', error.message);
        return false;
      });
  };

  return (
    <View style={Styles.login_wrapper}>
      <View style={Styles.form}>
        <TouchableOpacity onPress={() => doUserLogOut()}>
          <View style={Styles.button}>
            <Text style={Styles.button_label}>{'Logout'}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
