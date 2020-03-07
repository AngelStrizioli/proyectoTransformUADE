import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

import { globalStyle } from '../styles/globalStyles';
class MaterialCompleto extends React.Component{
  constructor(props){
    super(props);
    this.state ={ 
     
    }
  }
  
  
  /*FALTA:
  -Usar correctamente los campos del json que llega en el array materiales
   */
    render(){
        const { navigation } = this.props;
        //material original
        var material = navigation.getParam('material', {});
        var productos = navigation.getParam('productos', []);
        var nombre = material.name;
        var texto = material.text;
        var logo = material.logo == 'url_logo' ?  "https://images-na.ssl-images-amazon.com/images/I/31EAAncqIwL._SX425_.jpg" : material.logo;
        //reciclable original
        var esReciclable=material.isRecyclable
        var descartes;
        if (material.items === null || material.items === undefined) {
          descartes = [];
        } else {
          descartes = material.items.split('|');
        }

        const urlReciclable = 'https://i.imgur.com/gagua5h.png';
        const urlWarning = 'https://i.imgur.com/OBbLG58.png';
        const urlNoReciclable = 'https://i.imgur.com/O3AUDTG.png';
        
        const urlReciclableGris = 'https://i.imgur.com/jo5jCnh.png';
        const urlWarningGris = 'https://i.imgur.com/XeHAsid.png';
        const urlNoReciclableGris = 'https://i.imgur.com/Lror3pS.png';

        let imagenLogo;
        let tituloPag;
        let logo1;
        let logo2;
        let logo3;
        switch(material.isRecyclable){
            case 1: 
            logo1 = urlReciclable;
            tituloPag = '¡Es reciclable!';
            logo2= urlNoReciclableGris;
            logo3= urlWarningGris
            break;
            case 2: 
            logo3 = urlWarning;
            tituloPag = '¡Cuidado!'
            logo1= urlReciclableGris;
            logo2= urlNoReciclableGris;
            break;
            case 3: 
            logo2 = urlNoReciclable;
            tituloPag = '¡No es reciclable!'
            logo1= urlReciclableGris;
            logo3= urlWarningGris
            break;
          }

      
      return(
      
          <ScrollView style={styles.container}>
            
            <Text style={globalStyle.titleStyle}>
            
                {nombre}

            </Text>        
          <Text style={globalStyle.textStyle}>
              {texto}
            </Text>
          <View style={{flexDirection:'row',justifyContent:'space-around', marginTop:'5%'}}>
              <View style={{alignItems:'center'}}>
                  <Image title='Icono Reciclable' source={{uri:(logo1)}} style={styles.imgStyle}/>
                  <Text style={styles.tipoMaterial}>¡Es reciclable! </Text>
              </View>
              <View style={{alignItems:'center'}}>
                  <Image title='Icono No Reciclable' source={{uri:(logo2)}} style={styles.imgStyle}/>
                  <Text style={styles.tipoMaterial}>¡No es reciclable! </Text>
              </View>
              <View style={{alignItems:'center'}}>
                  <Image title='Icono Warning' source={{uri:(logo3)}} style={styles.imgStyle}/>
                  <Text style={styles.tipoMaterial}>¡Cuidado! </Text>
              </View>
          </View>
          
          <Text style={globalStyle.titleStyle}>Cómo descartarlo</Text>
          <View style={globalStyle.textStyle}>
            {descartes.map((descarte)=>{return (
              <Text key={descarte} style={styles.listTextStyle}> »  
              {descarte}</Text>)})}
          </View>
        </ScrollView>
      );
    }
  }
  const styles = StyleSheet.create({
      //material original
    container: {
      flex: 1,
      backgroundColor: 'white'
    },
    subtitleStyle:{
      marginTop: '3%',
        fontSize: 24,
        fontWeight: 'bold',
        padding:'2%'
    },
    textStyle:{
        paddingHorizontal:'6%',
        fontSize:18,
        textAlign:'justify',
        lineHeight:26
    },
    tipoMaterial:{
        fontSize:18,
        //marginTop:'5%'
    },
    imgStyle:{
      height: 80,
       width: 80,
       marginBottom:15 
    },

    //reciclable original
    
      titleStyle:{
          fontSize: 22,
          fontWeight: 'bold',
          padding:'4%',
          //textAlign: "center"
  
      },
     
      listTextStyle:{
        fontSize:18,
        padding:'1%',
        lineHeight:26,
      }
  
  })
  
  export default MaterialCompleto;