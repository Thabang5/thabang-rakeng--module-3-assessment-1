
                           //login components
                           import react,{component} from 'react';import {stylesheet,text,view,textInput,TouchableOpacity,asyncstorage,
                            keyboard} from 'react-native';
                            import {Actions} from 'react-native-router-flux';
                            import Form from './Form';
                            import * as React from 'react';
                            import { NavigationContainer } from '@react-navigation/native';
                            
                            
                                const login =({styles.container})=>
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
