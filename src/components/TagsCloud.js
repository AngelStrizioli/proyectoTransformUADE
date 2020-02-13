import React, { Component } from 'react';
import ApiController from '../controller/ApiController'
import {StyleSheet, Text, TouchableOpacity} from 'react-native';


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
                <TouchableOpacity key={tag} style={styles.tagsForm} onPress={() => this.buscarProductos(tag)}>
                    <Text style={styles.textTags}>{tag} </Text>
                </TouchableOpacity>
                )
            })

        )
    }
}

const styles = StyleSheet.create({
    tagsForm: {
        borderRadius: 50,
        backgroundColor: '#0f446f',
        height: 25,
        paddingHorizontal: 10,
        marginBottom: 3

    },
    textTags: {
        fontWeight: 'bold',
        fontSize: 18,
        color: "white",
        textAlign: 'center',
    }
})