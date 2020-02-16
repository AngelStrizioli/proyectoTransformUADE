import React, { Component } from 'react';
import ApiController from '../controller/ApiController'
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import { tagsStyles } from "../styles/globalStyles";
export default class TagsCloud extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: ["utensilio", "hogar", "descartable", "envase", "cartón", "madera", "botella", "electrónicos", "ropa",  "tecnología"]
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
                <TouchableOpacity key={tag} style={tagsStyles.tagsForm} onPress={() => this.buscarProductos(tag)}>
                    <Text style={tagsStyles.textTags}>{tag} </Text>
                </TouchableOpacity>
                )
            })

        )
    }
}
