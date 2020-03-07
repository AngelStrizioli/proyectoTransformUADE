import React, { Component } from 'react'
import { Card, CardItem, Body, Text } from 'native-base';
import { Image, ScrollView, Dimensions, ImageBackground, View } from 'react-native';

const { width } = Dimensions.get('window');

export default class CardIdeas extends Component {

    render() {
        const { navigation, idea } = this.props;
        return (

            <Card key={idea.id} style={{
                elevation: 2,//android
                shadowColor: 'rgba(0,0,0, .25)', // IOS
                shadowOffset: { height: 3, width: 3 }, // IOS
                shadowOpacity: 1, // IOS
                shadowRadius: 1,
            }}>
                <CardItem cardBody button onPress={() => { navigation.navigate('IdeaSimple', { idea: idea }) }}>
                    <Body>
                        <ImageBackground source={{ uri: idea.img }} style={{ height: width * 0.6, width: width * 0.6, resizeMode: 'cover', flex: 1 }}>

                            <View style={{
                                flex: 1,
                                flexDirection: 'column',
                                flexWrap: 'wrap',
                            }}>
                                <View style={{
                                    height: '100%',
                                    width: '100%',
                                    marginTop: '60%',
                                    alignItems: 'flex-start',
                                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                                }}>
                                    <Text style={{
                                        fontSize: 18,
                                        fontWeight: '600',
                                        color: 'white',
                                        lineHeight: 40,
                                        textShadowColor: 'rgba(0, 0, 0, 0.25)',
                                        textShadowOffset: { width: 1, height: 1 },
                                        textShadowRadius: 1,
                                        paddingLeft: '3%'
                                    }}>{idea.title}</Text>
                                </View>

                            </View>
                        </ImageBackground>
                    </Body>
                </CardItem>
            </Card>
        )

    }
}