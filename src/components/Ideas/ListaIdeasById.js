import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import ItemListaIdeas from './ItemListaIdeas'
import ApiController from '../../controller/ApiController'
import { Col, Row, Grid } from 'react-native-easy-grid';


// Funcion que crea la data necesaria de los posteos, hay que cambiarla
// porque el schema de los posteos va a cambiar segun matias ezequiel panza
function createData(item,idArray)
{
  return { id : idArray,
    id: item.id,
    titulo: item.titulo,
    tipo: item.tipo,
    video: item.video,
    img: item.img,
    album: item.album,
    texto: item.texto,
    materiales: item.materiales,
    pasos: item.pasos,
    tags: item.tags,
    fecha: item.fecha,
    cantGuardados: item.cantGuardados,
    productos: item.productos,
    seleccionEditor: item.seleccionEditor
  };
}

export default class ListaIdeas extends React.Component {
  constructor (props) {
    super(props)
    this.state = { ideas : [] }
  }

  //Leo los productos de la API BD
  componentDidMount() {
    let data = {
      id: this.props.id
    }
    ApiController.getPosteosByProd(this.okBusqueda2.bind(this),data);
  }
  //transformo los datos recibidos de la BD en un array de productos
  okBusqueda2(newData) {
    var i, newArray = [];
    for (i = 0; i < newData.length; i++) {
      newArray.push(createData(newData[i], i));
    }
    this.setState({ ideas: newArray });
  }

  _renderItems(){
    return this.state.ideas.map((item) => <ItemListaIdeas key={item.id} idea={item} navigation={this.props.navigation}></ItemListaIdeas> );
  }

  render() {
    if (this.state.ideas.length > 0) {
      return (
        
     
        <View style={{flex:1}}>
          {this._renderItems()}
        </View>
     
        
      )
    } else {
      return <Text style={{textAlign:'center', fontSize:18, marginBottom:'5%'}} >Cargando Ideas...</Text>
    }
  }
}
