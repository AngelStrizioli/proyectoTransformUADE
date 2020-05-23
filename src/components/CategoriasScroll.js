import React, { Component } from 'react'
import ApiController from '../controller/ApiController';
import { Card, CardItem, Body, Text } from 'native-base';
import { View,Image, ScrollView, Dimensions,  TouchableOpacity } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';

import { plasticoColor,papelColor,vidrioColor,pilaColor,metalColor,textilColor,electroColor,organicoColor } from '../styles/globalStyles'

const { width } = Dimensions.get('window');
const gris='#b6b6b6'
export default class CategoriasScroll extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categorias: []
        }
    }

    componentDidMount(){
        ApiController.getCategories(this.handleCategories.bind(this))
    }

    handleCategories(listaCategorias){
        this.setState({ categorias: listaCategorias});
    }

    verProductos(categoria){
        if(categoria.products.length > 0){
            this.props.navigation.navigate('ResultadoProductoMultiple',
                {
                    productos: categoria.products,
                    categoria: categoria,
                    tipoBusqueda: 1
                })
        }
    }

    
    render() {
        const titulo=this.props.titulo

        if (this.state.categorias.length != 0) {
            return (
                <ScrollView horizontal style={{flexDirection: 'row'}}>
                  
                        {this.state.categorias.map((categoria) => {
                            if(categoria.name == titulo){
                                var color= categoria.background_color }
                                else{
                                var color= '#b6b6b6'
                                }
                            return (
                               
                               <Card style={{height:width*0.15 ,width:width*0.20, marginHorizontal:'2%', marginVertical:'2%', shadowColor: 'white', shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0, shadowRadius: 0, borderColor: 'white'}} key={categoria.name}>
                                    <TouchableOpacity onPress={() => {this.verProductos(categoria)}}>
                                            <View style={{alignItems:'center'}}>
                                                <Image source={{uri: categoria.url_image}}  style={{borderRadius:25, backgroundColor: color, height: width*0.12, width: width*0.12}} />
                                            </View>
                                    </TouchableOpacity>    
                                </Card>
                            )
                        })}
                 
                </ScrollView>
            )
        } else {
            return <Text>Cargando...</Text>;
        }
    }
}