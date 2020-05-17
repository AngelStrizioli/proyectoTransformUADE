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
    let titleColor = 'black' //POR AHORA

    return (
        <ScrollView>
          <Text style={{color: titleColor, margin:'5%', fontWeight: 'bold', fontSize: 18}}>{producto.name}</Text>
          <Text style={globalStyle.textStyle}>{producto.description}</Text>
          <Text style={globalStyle.titleStyle}>Materiales</Text>
            {materiales.map((material) =>{
                return (
                  <MaterialEsReciclable key={material.id} material={material} navigation={navigation}/>
                )
              })}
          <Text style={globalStyle.titleStyle}>Ideas para transformar</Text>
          <ListaIdeasById  id={producto.id} name={producto.name} navigation={this.props.navigation}></ListaIdeasById> 
        </ScrollView>
 
        );
  }
}


export default ResultadoProductoUnico;