import React, { Component } from 'react'
import ApiController from '../controller/ApiController';
import { Card, CardItem, Body, Text } from 'native-base';
import { Image, ScrollView } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';



export default class CardsProductos extends Component {
    constructor(props) {
        super(props);
        this.state = { productos: [] }
    }

    componentDidMount() {
        ApiController.getPopularProducts(this.handleProductos.bind(this))
    }

    handleProductos(prodArray) {
        this.setState({ productos: prodArray });
    }

    render() {
        const {navigation} = this.props;
        if (this.state.productos.length != 0) {
            return (
                <ScrollView horizontal>
                    <Row>
                        {this.state.productos.map((producto) => {
                            return (

                                <Card key={producto.id}>
                                    <CardItem cardBody button onPress={() => { navigation.navigate('ResultadoProductoUnico', {producto: producto}) }}>
                                        <Image source={{ uri: producto.urlImg }} style={{ height: 80, width: null, resizeMode: 'contain', flex: 1 }} />
                                    </CardItem>
                                    <CardItem button onPress={() => { navigation.navigate('ResultadoProductoUnico', {producto: producto}) }}>
                                        <Text style={{ color: '#00B2FF', textAlign: "center" }}>
                                            {producto.nombre}
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