import React from 'react';
import { Image, StyleSheet, Text, View, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ListaIdeasById from './Ideas/ListaIdeasById';
import MaterialEsReciclable from './MaterialEsReciclable';
import { Ionicons } from '@expo/vector-icons';

//<Image source={require("../assets/images/LogoHorizontal.png")} />

/* ### PÁGINA PARA CUANDO UNA BÚSQUEDA DE "¡Transfórmalo!" DEVUELVE UN RESULTADO DE UN SOLO ELEMENTO ### 
      En prototipo: Resultado Unico
     */


class ResultadoProductoUnico extends React.Component {

  

  render() {
    const { navigation } = this.props;
    var producto = navigation.getParam('producto', {})
    var materiales = producto.materiales;
    /*
    FALTA: 
    -Cambiar los json de la fakeBD para que coincidan con los que tenemos en la BD
    -Usar dichos JSON para armar la pagina de producto correctamente
    -Fijar un estandar para la parte de EsReciclable y de los Materiales
    -Pasar la complejidad de los materiales a un componente aparte ahora que supimos resolver el tema del navigation
    */

    return (
        <ScrollView style={styles.container}>
          <Text style={styles.titleStyle}>
            {producto.nombre}
          </Text>
          <Image borderWidth={0.5} style={styles.imageStyle} borderColor='black' source={{ uri: producto.urlImg}} />
         
          <Text style={styles.subtitleStyle}>
            Descripción:
          </Text>

    <Text style={{marginTop: '4%', paddingHorizontal: '6%', textAlign: "justify", fontSize: 18, lineHeight:26}}>{producto.descripcion}</Text>
         
         
          <Text style={styles.subtitleStyle}>
            Materiales:
          </Text>
    {materiales.map((material) =>{
              return (
                <MaterialEsReciclable key={material.id} material={material} materiales={materiales.length} navigation={navigation}/>
                /* Cambiar key por material.id cuando este cargado en la bd */
              )
            })}
          <Text style={styles.subtitleStyle}>
            Ideas:
          </Text>
            {/*Parametro: URL Del endpoint que tiene el JSON de ideas del producto. El compo se encarga del resto
                Nota: No sé si responde al formato de la BD. Avisarme si no - Fede*/}
                
       <ListaIdeasById id={producto.id} navigation={this.props.navigation}></ListaIdeasById> 

       
      {/*<View style={styles.imagePosition}>
          <TouchableOpacity style={styles.botonLargo}  onPress={() => { navigation.navigate('App')}}>
            <View style={{justifyContent:'center'}}>
              <Text style={{fontSize:24,textAlign:'center',color:'white', textAlignVertical:'center'}}>
              <Ionicons name="md-arrow-round-back" size={24} color={'white'} />
                       Buscar otra cosa...
                </Text>

            </View>
          </TouchableOpacity>
        </View>*/}
          </ScrollView>
 
        );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  titleStyle: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  subtitleStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: '4%'

  },
  containerImage:{
    flexDirection: 'row',
    justifyContent:'space-around',
    marginBottom: '5%'
  },
  imagePosition: {
    flexDirection: 'row',
    justifyContent: 'center',

  },
  imageStyle: {
    width: '50%',
    marginTop: '5%',
    alignSelf:"center",
    minHeight: 200,
    maxHeight: 400,

  },
  buttonDesigne: {
    color: "white",
    fontSize: 24,
    textAlign: "center",
    textAlignVertical: 'center',
    backgroundColor: '#00B2FF',
    width: 300,
    height: 55,
    borderRadius: 50,
    marginBottom:'5%',
    marginTop:'5%',
  },
    botonLargo:{
      backgroundColor: '#00B2FF',
      elevation: 2,
      shadowColor: 'rgba(0,0,0, .25)', 
      shadowOffset: { height: 3, width: 3 }, 
      shadowOpacity: 1, 
      shadowRadius: 2,
      borderRadius: 70,
      justifyContent:'center',
      textAlignVertical: 'center',
      alignSelf: 'center',
      width: 300,
      height: 55,
      marginBottom: '2%'
    }


})


export default ResultadoProductoUnico;