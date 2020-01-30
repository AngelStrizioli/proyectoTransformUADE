import React, { Component } from 'react'
import ApiController from '../controller/ApiController';
import { Card, CardItem, Body, Text } from 'native-base';
import { Image, ScrollView, Dimensions } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';


const { width } = Dimensions.get('window');

export default class CategoriasCards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categorias: [{
                title: "Plástico",
                img: "https://i.imgur.com/nOODZYG.jpg"
            }, {
                title: "Vidrio",
                img: "https://i.imgur.com/hV9hrdo.jpg"
            }, {
                title: "Papel",
                img: "https://i.imgur.com/AxkS4d7.jpg"
            }, {
                title: "Pilas y Baterías",
                img: "https://i.imgur.com/GPYt4Ft.jpg"
            }, {
                title: "Metales",
                img: "https://i.imgur.com/mp9SkwO.jpg"
            }, {
                title: "Textiles",
                img: "https://i.imgur.com/fExfR2r.jpg"
            }, {
                title: "Aparatos electrónicos",
                img: "https://i.imgur.com/xxr802T.jpg"
            }, {
                title: "Orgánicos",
                img: "https://i.imgur.com/7b0oaUy.jpg"
            }],
            text: ""
        }
    }

    buscarProductos(text) {
        let data = {
            name: text
        }
        this.setState({ text: text })
        ApiController.getProductosByNombre(data, this.handleProducts.bind(this));
    }

    handleProducts(productos) {
        if (productos.length > 0) {
            this.props.navigation.navigate('ResultadoProductoMultiple',
                {
                    productos: productos,
                    busqueda: this.state.text,
                })
        }
    }

    render() {
        if (this.state.categorias.length != 0) {
            return (
                <ScrollView horizontal>
                    <Row>
                        {this.state.categorias.map((categoria) => {
                            return (

                                <Card key={categoria.title} style={{
                                    elevation: 2,//android
                                    shadowColor: 'rgba(0,0,0, .25)', // IOS
                                    shadowOffset: { height: 3, width: 3 }, // IOS
                                    shadowOpacity: 1, // IOS
                                    shadowRadius: 1,
                                }}>
                                    <CardItem cardBody button onPress={() => {this.buscarProductos(categoria.title)}}>
                                        <Image source={{ uri: categoria.img }} style={{ height: width * 0.6, width: width * 0.6, resizeMode: 'contain', flex: 1 }} />
                                    </CardItem>
                                    <CardItem button onPress={() => {this.buscarProductos(categoria.title)}}>
                                        <Text style={{ color: '#00B2FF', textAlign: "center", alignSelf: "center" }}>
                                            {categoria.title}
                                        </Text>
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