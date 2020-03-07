//https://snack.expo.io/@dinithminura/drawer-navigation?session_id=snack-session-DKu05jLVS
import React from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import MaterialEsReciclable from './MaterialEsReciclable';
import ApiController from '../controller/ApiController';
import { Divider } from 'react-native-elements';

import { themeMainColor } from '../styles/globalStyles';



/* ### PÁGINA QUE MUESTRA LA LISTA DE TODOS LOS MATERIALES CON INFORMACIÓN EN LA BD ###
    En prototipo: No está todavía */

  function createData(material,idArray) 
    {
      return { id : idArray, 
        id: material.id,
        nombre: material.name,
        logo: material.logo,
        esReciclable: material.isRecyclable,
        texto: material.text,
        comoReciclar: material.items
      };
  }
    
class TodosLosMateriales extends React.Component{
    static navigationOptions = {

      title: 'Materiales',
      header: null,
      
      drawerIcon: ({ focused }) => (
        <Ionicons name="md-cube" size={24} color={focused ? themeMainColor : 'black'} />
      ),
     
   

    };
    constructor (props) {
      super(props)
      this.state = { materiales : [] }
  }
    
  componentDidMount() {
    //Leo los productos de la API BD
    ApiController.getMateriales(this.okBusqueda3.bind(this));
  }
  //transformo los datos recibidos de la BD en un array de productos
  okBusqueda3(newData) {
    var i, newArray = [];
    for (i = 0; i < newData.length; i++) {
      newArray.push(createData(newData[i], i));
    }
    this.setState({ materiales: newArray });
  }
  
    render(){
      let materiales = this.state.materiales;
      
      return(


        <ScrollView style={styles.container}>

          <Text style= {styles.titleStyle}>Todos los materiales</Text>
          <Divider style={{ backgroundColor: 'black' }} />
          <View>
          {materiales.map((material) =>{         
              return (
                <View key={material.name}>
                  <MaterialEsReciclable key={material.id} material={material} navigation={this.props.navigation}/>
                </View>
            )})}
          </View>
       
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
      marginTop: '5%',
      marginBottom:'3%',
      fontSize: 26,
      fontWeight: 'bold',
      textAlign: 'center'
    },
    subtitleStyle: {
      fontSize: 20,
      fontWeight: 'bold',
      padding: '4%'
  
    }
  })

  export default TodosLosMateriales;