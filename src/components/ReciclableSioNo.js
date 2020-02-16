import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { ListItem } from 'native-base';

import { themeMainColor } from '../styles/globalStyles';
class ReciclableSioNo extends React.Component{
    
    /*
    COMPONENTE QUE DETALLA SI UN PRODUCTO ES DESCARTABLE O NO Y CÓMO DESCARTARLO
    En prototipo: #Reciclable?

    FALTA:
    -Cuando definamos el campo EsReciclable de los productos hay que hacer que este componente sea dinámico en base a eso,
    si hacemos más categorías hay que agregarlas y hacer una forma de que el compo se arme solo cambiando la imagen y el titulo
    */ 

  
    render(){
        const { navigation } = this.props;

        var data = navigation.getParam('material', {});
        esReciclable=data.esReciclable
        var descartes=data.comoReciclar

        const urlReciclable = 'https://i.imgur.com/b2SVI7V.png';
        const urlWarning = 'https://i.imgur.com/fqPjNqa.png';
        const urlNoReciclable = 'https://i.imgur.com/R6WMDPY.png';

        let imagenLogo;
        let tituloPag;

        switch(data.esReciclable){
          case 1: 
          imagenLogo = urlReciclable;
          tituloPag = '¡Es reciclable!'
          break;
          case 2: 
          imagenLogo = urlWarning;
          tituloPag = '¡Cuidado!'
          break;
          case 3: 
          imagenLogo = urlNoReciclable;
          tituloPag = '¡No es reciclable!'
          break;
        }
     return(
        <ScrollView style={styles.container}>
          <Text style={styles.titleStyle}>
            {tituloPag}
          </Text>
          <Image title='Icono Reciclable' source={{uri:(imagenLogo)}} style={{height: 160, width: 160,  alignSelf: 'center' }}/>
          <Text style={styles.subtitleStyle}>Cómo descartarlo:</Text>
          <View style={styles.textStyle}>
            {descartes.map((descarte)=>{return (
              <Text key={descarte} style={styles.listTextStyle}> »  
              {descarte}</Text>)})}
          </View>
        </ScrollView>)
      }
    }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white'
    },
    subtitleStyle: {
      fontSize: 24,
      fontWeight: 'bold',
      padding:'4%'
    },
    titleStyle:{
        fontSize: 24,
        fontWeight: 'bold',
        padding:'4%'

    },
    textStyle:{
        fontSize:18,
        padding:'10%'
    },
    listTextStyle:{
      fontSize:18,
      padding:'1%'
    },
    compoPosition: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    buttonDesigne: {
      color: "white",
      fontSize: 24,
      textAlign: "center",
      textAlignVertical: 'center',
      backgroundColor: themeMainColor,
      width: 300,
      height: 55,
      borderRadius: 50,
      marginBottom:'5%'
      
    }
  
  })
  
  
  export default ReciclableSioNo;