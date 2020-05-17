import React, { Component } from 'react';
import ApiController from '../controller/ApiController'
import { StyleSheet, Text, TouchableOpacity, Dimensions, View } from 'react-native';


import { tagsStyles } from "../styles/globalStyles";

const { width } = Dimensions.get('window');

export default class TagsCloud extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: []
        }
    }

    componentDidMount() {
        ApiController.getTags(this.handleTags.bind(this))
    }

    handleTags(listaTags) {
        this.setState({ tags: listaTags })
    }

    verProductos(tag) {
        if (tag.products.length > 0) {
            this.props.navigation.navigate('ResultadoProductoMultiple',
                {
                    productos: tag.products,
                    tag: tag,
                    tipoBusqueda: 2
                })
        }
    }

    render() {
        if (this.state.tags.length > 0) {
            return (
                this.state.tags.map((tag) => {
                    return (
                        <View style={{ marginHorizontal: '1%', marginVertical: '1.5%' }} key={tag.id}>
                            <TouchableOpacity style={tagsStyles.tagsForm} onPress={() => this.verProductos(tag)}>
                                <Text style={tagsStyles.textTags}>{tag.name} </Text>
                            </TouchableOpacity>
                        </View>
                    )
                })

            )
        }else{
            return null;
        }
    }
}
