import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import ListaIdeasById from './Ideas/ListaIdeasById';
import MaterialEsReciclable from './MaterialEsReciclable';


import {globalStyle } from '../styles/globalStyles';

class ResultadoProductoUnico extends React.Component {
  render() {
    const { navigation } = this.props;
    var producto = navigation.getParam('producto', {})
    console.log("prod",producto);
    var materiales = producto.materials;
    if (materiales === undefined)
      materiales = [];
    const title = navigation.getParam('title', {})
    const titleColor = title
    return (
        <ScrollView>
          <Text style={{color: titleColor, margin:'5%', fontWeight: 'bold', fontSize: 22}}>{producto.name}</Text>    
          <Text style={globalStyle.textStyle}>{producto.description}</Text>

          <Text style={globalStyle.titleStyle}>Materiales</Text>
            {materiales.map((material) =>{
                return (
                  <MaterialEsReciclable key={material.id} material={material} materiales={materiales.length} navigation={navigation} colorTitle={titleColor}/>
                )
              })}
          <Text style={globalStyle.titleStyle}>Ideas para transformar</Text>
          <ListaIdeasById  id={producto.id} navigation={this.props.navigation}></ListaIdeasById> 
        </ScrollView>
 
        );
  }
}


export default ResultadoProductoUnico;