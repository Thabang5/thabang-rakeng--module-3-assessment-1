
                           /* splashscreen components*/
import React, { Component } from 'react';
import { StyleSheet, Platform, TouchableOpacity, Image, View, Text, Alert
} from 'react-native';


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


 
