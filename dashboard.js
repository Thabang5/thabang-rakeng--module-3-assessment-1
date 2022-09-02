import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Dashboard from 'react-native-dashboard';
import { FontAwesome } from 'react-native-vector-icons';

                              
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
                            
                            export function App() {
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
                                               
