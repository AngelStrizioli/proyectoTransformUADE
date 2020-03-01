import React, { Component } from 'react'
import ApiController from '../controller/ApiController';
import { Card, CardItem, Body, Text } from 'native-base';
import { View,Image, ScrollView, Dimensions,  TouchableOpacity } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { TouchableNativeFeedback} from 'react-native-gesture-handler'

import { globalStyle } from '../styles/globalStyles'

const { width } = Dimensions.get('window');

export default class CategoriasCards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categorias: [ {
                title: "Plástico",
                img: "https://i.imgur.com/fCmH0nQ.png",
                backgroundColor:'#0084e5',
            },{
                title: "Papel",
                img: "https://i.imgur.com/OG1RVGW.png",
                backgroundColor:'#00ff45',
            }, {
                title: "Vidrio",
                img: "https://i.imgur.com/1VeQWb5.png",
                backgroundColor:'#00e6d4',
            }, {
                title: "Pilas y baterías",
                img: "https://i.imgur.com/cbiuZXa.png",
                backgroundColor:'#e50000',
            }, {
                title: "Metales",
                img: "https://i.imgur.com/UKPPz8D.png",
                backgroundColor:'#e3ff00',
            }, {
                title: "Textiles",
                img: "https://i.imgur.com/yfkEpxU.png",
                backgroundColor:'#ff00db',
            }, {
                title: "Electrónica",
                img: "https://i.imgur.com/0sIAH6f.png",
                backgroundColor:'grey',
            }, {
                title: "Orgánicos",
                img: "https://i.imgur.com/gqCFXHJ.png",
                backgroundColor:'#ff9c00',
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
                <View style={{flexWrap:'wrap' ,flexDirection: 'row'}}>
                  
                        {this.state.categorias.map((categoria) => {
                            return (

                               <View style={{width:width*0.20, marginHorizontal:'2%', marginVertical:'2%',}} key={categoria.title}>
                                    <TouchableOpacity onPress={() => {this.buscarProductos(categoria.title)}}>
                                        <View style={{alignItems:'center'}}>
                                        
                                            <Image source={{uri: categoria.img}}  style={{borderRadius:36, backgroundColor:categoria.backgroundColor,height: width*0.18, width: width*0.18,resizeMode: 'contain', flex: 1 }} />
                                            
                                            <Text style={{textAlign:'center'}}>{categoria.title} </Text>
                                        </View>
                                    </TouchableOpacity>
                                    
                                    
                                </View>
                            )
                        })}
                 
                </View>
            )
        } else {
            return null;
        }
    }
}