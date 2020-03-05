import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import ListaIdeasById from './Ideas/ListaIdeasById';
import MaterialEsReciclable from './MaterialEsReciclable';


import {globalStyle } from '../styles/globalStyles';

class ResultadoProductoUnico extends React.Component {
  render() {
    const { navigation } = this.props;
    var producto = navigation.getParam('producto', {})
    var materiales = producto.materials;
    return (
        <ScrollView>
          <Text style={globalStyle.titleStyle}>{producto.name}</Text>
          <Text style={globalStyle.textStyle}>{producto.description}</Text>
          <Text style={globalStyle.titleStyle}>Materiales</Text>
            {materiales.map((material) =>{
                console.log("materials", JSON.stringify(material));
                console.log(materiales.length);
                return (
                  <MaterialEsReciclable key={material.id} material={material} materiales={materiales.length} navigation={navigation}/>
                )
              })}
          <Text style={globalStyle.titleStyle}>Ideas para transformar</Text>
          <ListaIdeasById  id={producto.id} navigation={this.props.navigation}></ListaIdeasById> 
        </ScrollView>
 
        );
  }
}


export default ResultadoProductoUnico;