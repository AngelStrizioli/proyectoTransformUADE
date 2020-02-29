import React, { Component } from 'react';
import ApiController from '../controller/ApiController'
import {StyleSheet, Text, TouchableOpacity, Dimensions, View} from 'react-native';


import { tagsStyles } from "../styles/globalStyles";

const { width } = Dimensions.get('window');

export default class TagsCloud extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: ["Utensilio", "Tecnología", "Botella", "Envase",  "Descartable", "Cartón"]
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
        return (
            this.state.tags.map((tag) => {
                return(
                    <View style={{ marginHorizontal:'1%', marginVertical:'1.5%'}} key={tag}>
                        <TouchableOpacity  style={tagsStyles.tagsForm} onPress={() => this.buscarProductos(tag)}>
                            <Text style={tagsStyles.textTags}>{tag} </Text>
                        </TouchableOpacity>
                    </View>
                )
            })

        )
    }
}
