import React, { Component } from 'react'
import ApiController from '../controller/ApiController';
import { Card, CardItem, Body, Text } from 'native-base';
import { View,Image, ScrollView, Dimensions,  TouchableOpacity } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { TouchableNativeFeedback} from 'react-native-gesture-handler'

import { plasticoColor,papelColor,vidrioColor,pilaColor,metalColor,textilColor,electroColor,organicoColor } from '../styles/globalStyles'

const { width } = Dimensions.get('window');

export default class CategoriasCards extends Component {
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
        if (this.state.categorias.length != 0) {
            return (
                <View style={{flexWrap:'wrap' ,flexDirection: 'row', marginHorizontal: '2%' }}>
                  
                        {this.state.categorias.map((categoria) => {
                            return (

                               <View style={{width:width*0.20, marginHorizontal:'2%', marginVertical:'2%',}} key={categoria.name}>
                                    <TouchableOpacity onPress={() => {this.verProductos(categoria)}}>
                                        <View style={{alignItems:'center'}}>
                                            <Image source={{uri: categoria.url_image}}  style={{borderRadius:25, backgroundColor: categoria.background_color,height: width*0.12, width: width*0.12}} />
                                            <Text style={{textAlign:'center', fontSize:12}}>{categoria.name} </Text>
                                        </View>
                                    </TouchableOpacity>
                                    
                                    
                                </View>
                            )
                        })}
                 
                </View>
            )
        } else {
            return <Text>Cargando...</Text>;
        }
    }
}