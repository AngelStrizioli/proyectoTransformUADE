import React from 'react';
import { Image, StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ImageCarousel from './ImageCarousel';
import {AsyncStorage} from 'react-native';

/* ### PÁGINA PARA REPRESENTAR EL POSTEO DE UNA IDEA QUE CONTENGA UN ÁLBUM DE FOTOS ###
      En prototipo: Idea

      El álbum es un componente externo de react que lo llamamos en la clase ImageCarousel
      Falta: Definir cómo se van a guardar los materiales usados (una lista de string, referencias a productos, referencias a materiales)
     */

const { width } = Dimensions.get('window');

class IdeaAlbum extends React.Component{

    constructor(props){
        super(props)
        this.state={
            guardado: false
        }
        this._isStored()
    }

    materiales(idea){
      let mat = false;
      if(idea.materiales != undefined){
        mat = idea.materiales.length === 0 ? false : true;
      }
      if(mat){
        return(
          <View style={styles.compoView}>
              <Text style={styles.subtitleStyle}>Materiales:</Text>
              {
                  idea.materiales.map((mat, index) => {
                      return(
                      <Text key={index} style={styles.listTextStyle}>{index+1}. {mat}</Text>
                      )
                  })
              }
          </View>
      )
      }
    }

    pasoAPaso(idea){
        let pap = false;
        if(idea.pasos != undefined){
            pap = idea.pasos.length === 0 ? false : true;
        }

        if(pap){
            return(
                <View style={styles.compoView}>
                    <Text style={styles.subtitleStyle}>Instrucciones:</Text>
                    {
                        idea.pasos.map((paso, index) => {
                            //console.log(paso);
                            return(
                            <Text key={index} style={styles.listTextStyle}>{index+1}. {paso}</Text>
                            )
                        })
                    }
                </View>
            )
        }
    }

    render(){
        const { navigation } = this.props;
        const idea = this.props.idea;
        return(
            <ScrollView style={styles.container}>
                <View>
                    <Text style={styles.titleStyle}>{idea.titulo}</Text>
                </View>
                <View style={styles.carouselContainer2}>
                    <ImageCarousel album={idea.album}/>
                </View>
                <View>
                    <Text style={styles.subtitleStyle}>Descripción:</Text>
                    <Text style={styles.textStyle}>{idea.texto}</Text>
                </View>

                {this.materiales(idea)}

                {this.pasoAPaso(idea)}


                {this.cambiarBoton()}


                <View style={styles.compoPosition}>
                    <TouchableOpacity style={styles.botonLargo} onPress={() => { navigation.goBack()}} >
                        <Text style={{fontSize:24,textAlign:'center',color:'white', textAlignVertical:'center'}}>
                            Volver
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }

    _storeData = async () => {
      try {
        var found = await AsyncStorage.getItem(this.props.idea.id);
        if (found === null) {
          await AsyncStorage.setItem(this.props.idea.id,JSON.stringify(this.props.idea));
          console.log(JSON.stringify(this.props.idea));
          console.log("Se guardo el item: " + this.props.idea.id);
          this.setState({guardado: true})
          //console.log(this.state.guardado)

        } else {
          await AsyncStorage.removeItem(this.props.idea.id);
          console.log("Se elimino el item: " + this.props.idea.id);
          this.setState({guardado: false})
          //console.log(this.state.guardado)
        }
      } catch (e) {
        console.log(e.message);
      }
    }


    _isStored = async () => {
        try {
          var found = await AsyncStorage.getItem(this.props.idea.id);
          if (found === null) {
            this.setState({guardado: false})
            //console.log(this.state.guardado)

          } else {
            this.setState({guardado: true})
            //console.log(this.state.guardado)
          }
        } catch (e) {
          console.log(e.message);
        }
      }


    cambiarBoton(){
        //console.log(this.state.guardado)
        if(this.state.guardado === true){

            return (
                <View style={styles.compoPosition}>
                  <TouchableOpacity style={styles.buttonPressed}  onPress={() => this._storeData()} >
                    <Text style={{ color: "#00B2FF",
        fontSize: 24,
        textAlign: "center",
        textAlignVertical: 'center',
}} >
                      ¡Guardado!
                    </Text>
                  </TouchableOpacity>
                </View>
            )
        }else{
            return(
                <View style={styles.compoPosition}>
                  <TouchableOpacity  style={styles.botonLargo} onPress={() => this._storeData()} >
                    <Text  style={{fontSize:24,textAlign:'center',color:'white', textAlignVertical:'center'}} >
                      Guardar para después
                    </Text>
                  </TouchableOpacity>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    compoView:{
        marginVertical: '5%'
    },
    titleStyle: {
        padding: '3%',
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    subtitleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: '4%'
    },
    textStyle:{
        paddingHorizontal:'5%',
        fontSize:18,
        textAlign:'justify',
        lineHeight:26
    },
    listTextStyle:{
        paddingHorizontal:'5%',
        marginVertical: '1%',
        fontSize:16,
        textAlign:'justify',
        lineHeight:22
    },
    carouselContainer: {
      height: 150,
      width: width,
      borderWidth: 5,
      borderColor: 'white',
      marginTop:10
    },
    carouselContainer2: {
      width: width*0.9,
      height:width*0.7,
      marginTop:10
    },

    compoPosition: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20
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
        width: 250,
        height: 50,
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
        marginBottom:'5%'

      },
       buttonPressed:{
       
        textAlign: "center",
        textAlignVertical: 'center',
        backgroundColor: 'white',
        width: 300,
        height: 55,
        borderRadius: 50,
        borderColor: '#00B2FF',
        borderWidth: 4,
        
      }
  });

export default IdeaAlbum;
