import React, { Component } from 'react'
import { Card, CardItem, Body, Text } from 'native-base';
import { Image, ScrollView, Dimensions, ImageBackground, View, TouchableWithoutFeedback } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Ionicons } from '@expo/vector-icons';

import ApiController from '../../controller/ApiController'

const { width } = Dimensions.get('window');

export default class CardsEventos extends Component {
    constructor(props) {
        super(props);
        this.state = { eventos: [], cargado: false };
    }

    componentDidMount() {
        ApiController.getEventos(this.handleEventos.bind(this));
    }

    handleEventos(listaEventos) {
        this.setState({ eventos: listaEventos, cargado: true });
    }

    render() {
        const {navigation}  = this.props;
        if (this.state.cargado) {
            return (
                <ScrollView horizontal>
                    <Row>
                        {this.state.eventos.map((evento) => {
                            return (

                                <Card key={evento.id} style={{
                                    elevation: 2,//android
                                    shadowColor: 'rgba(0,0,0, .25)', // IOS
                                    shadowOffset: { height: 3, width: 3 }, // IOS
                                    shadowOpacity: 1, // IOS
                                    shadowRadius: 1,
                                    
                                }}>
                                    <CardItem cardBody  >
                                        <TouchableWithoutFeedback onPress={() => { navigation.navigate('EventoSimple', {evento: evento}) }}>
                                        <Body>
                                            <ImageBackground source={{ uri: evento.img }} style={{ height: width * 0.7, width: width * 0.8, resizeMode: 'cover', flex: 1 }}>

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
                                                        }}>{evento.title}</Text>
                                                    </View>

                                                </View>
                                            </ImageBackground>
                                        </Body>
                                        </TouchableWithoutFeedback>
                                    </CardItem>
                                </Card>
                            )
                        })}
                    </Row>
                </ScrollView>
            )
        } else {
            return null;
        }
    }
}