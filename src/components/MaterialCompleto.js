import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ReciclableSioNo from './ReciclableSioNo';
import ApiController from '../controller/ApiController'
import ItemResultadoProducto from './ItemResultadoProducto'



import { themeMainColor, globalStyle, plasticoColor,papelColor,vidrioColor,pilaColor,metalColor,textilColor,electroColor, organicoColor } from '../styles/globalStyles';
class MaterialCompleto extends React.Component{
  constructor(props){
    super(props);
    this.state ={ 
      materialColor: [ {
        title: "Plástico P.E.T.",
        titleColor: plasticoColor,
    },{
      title: "Plástico P.P.",
      titleColor: plasticoColor,
    },{
      title: "Plástico H.D.P.E.",
      titleColor:plasticoColor,
    },{
      title: "Otros Plásticos",
      titleColor:plasticoColor,
    },{
      title: "Plástico P.S.",
      titleColor:plasticoColor,
    },{
        title: "Papel/Cartón", 
        titleColor: papelColor
    }, {
        title: "Vidrio",
        titleColor: vidrioColor
    }, {
        title: "Pilas y baterías",
        titleColor: pilaColor
    }, {
        title: "Metal",
        titleColor: metalColor
    }, {
        title: "Textiles",
        titleColor: textilColor
    }, {
        title: "RAEEs",
        titleColor: electroColor
    }, {
        title: "Orgánico",
        titleColor: organicoColor
    },{
        title: "Madera",
        titleColor: organicoColor
    },{
        title: "TetraBrik",
        titleColor: organicoColor
    }],
    text: ""
     
    }
  }
  
  renderItems(material){
    let items = material.items.split(' | ');
    return(
      items.map(item => {return (
        <Text key={item} style={styles.listTextStyle}> »          {item}</Text>)})
    )
  }
  
    render(){
        const { navigation } = this.props;
        let material = navigation.getParam('material', {})        


        const colorMateriales = this.state.materialColor.find(colorMateriales => colorMateriales.title === material.name)


        const urlReciclable = 'https://i.imgur.com/gagua5h.png';
        const urlWarning = 'https://i.imgur.com/OBbLG58.png';
        const urlNoReciclable = 'https://i.imgur.com/O3AUDTG.png';
        
        const urlReciclableGris = 'https://i.imgur.com/jo5jCnh.png';
        const urlWarningGris = 'https://i.imgur.com/XeHAsid.png';
        const urlNoReciclableGris = 'https://i.imgur.com/Lror3pS.png';

        let logo1, logo2, logo3;

        switch(material.isRecyclable){
            case 1: 
            logo1 = urlReciclable;
            logo2= urlNoReciclableGris;
            logo3= urlWarningGris
            break;
            case 2: 
            logo3 = urlWarning;
            logo1= urlReciclableGris;
            logo2= urlNoReciclableGris;
            break;
            case 3: 
            logo2 = urlNoReciclable;
            logo1= urlReciclableGris;
            logo3= urlWarningGris
            break;
          }

      
      return(
      
          <ScrollView style={styles.container}>
            
            <Text style={{ color: colorMateriales.titleColor , margin:'5%', fontWeight: 'bold', fontSize: 18}}>
            
                {material.name}

            </Text>
                        
            <Text style={globalStyle.textStyle}>
               {material.description}
            </Text>
           
          <View style={{flexDirection:'row',justifyContent:'space-around', marginTop:'5%'}}>
              <View style={{alignItems:'center'}}>
                  <Image title='Icono Reciclable' source={{uri:(logo1)}} style={styles.imgStyle}/>
                  <Text style={styles.tipoMaterial}>¡Es reciclable! </Text>
              </View>
              <View style={{alignItems:'center', marginHorizontal:'2%'}}>
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
            {this.renderItems(material)}
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
        fontSize:14,
        //marginTop:'5%'
        textAlign: 'center',
    },
    imgStyle:{
      height: 50,
       width: 50,
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
        fontSize:14,
        padding:'1%',
        lineHeight:26,
      }
  
  })
  
  export default MaterialCompleto;