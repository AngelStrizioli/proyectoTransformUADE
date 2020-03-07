import React from 'react';
import { Image, StyleSheet, Text, View, ScrollView, Dimensions,AsyncStorage, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ImageCarousel from '../ImageCarousel';
import { themeMainColor } from '../../styles/globalStyles';
import { Card, CardItem, Body } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

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
            guardado: false,
            corazon: false
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
                <Card>
                <CardItem style={{justifyContent:'flex-end'}}>
                {this.cambiarBoton()}
                </CardItem>
                <CardItem >
                  <View style={styles.carouselContainer2}>
                      <ImageCarousel album={idea.album}/>
                  </View>
                  </CardItem>
                  <CardItem style={{justifyContent:'space-around', marginTop:'3%'}}>
                  {this.cambiarCorazon()}
                  <TouchableOpacity onPress={() => navigation.navigate('ComentariosIdeas', {idea: idea })}>
                    <Text>
                    <Ionicons name="md-text" size={30}/>
                    </Text>
                  </TouchableOpacity> 
                      <TouchableOpacity>
                          <Text> <Ionicons name="md-share" size={30} /> </Text>
                      </TouchableOpacity>
                  </CardItem>
                </Card>
                <View>
                    <Text style={styles.subtitleStyle}>Descripción:</Text>
                    <Text style={styles.textStyle}>{idea.texto}</Text>
                </View>
                {this.materiales(idea)}
                {this.pasoAPaso(idea)}
            </ScrollView>
        );
    }

    _storeData = async () => {
      try {
        var found = await AsyncStorage.getItem(this.props.idea.id);
        if (found === null) {
          await AsyncStorage.setItem(this.props.idea.id,JSON.stringify(this.props.idea));
          this.setState({guardado: true})
        } else {
          await AsyncStorage.removeItem(this.props.idea.id);
          this.setState({guardado: false})
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
          } else {
            this.setState({guardado: true})
          }
        } catch (e) {
          console.log(e.message);
        }
      }

      _storeLikes = () =>{

        if (this.state.corazon == false){
          this.setState({corazon: true})
        }
        else{
          this.setState({corazon:false})
        }
    
    }



    cambiarBoton(){
        if(this.state.guardado === true){
          return (
                <TouchableOpacity  onPress={() => this._storeData()} >
                <Image style={{width:35, height:35}} source={{uri:('https://i.imgur.com/dHIs4kd.png')}} />
                </TouchableOpacity>
          )
      }else{
          return(
                <TouchableOpacity onPress={() => this._storeData()} >
                <Image style={{width:35, height:35}} source={{uri:('https://i.imgur.com/JkqyZWl.png')}} />
                </TouchableOpacity>
          )
      }
}

  cambiarCorazon(){
    if(this.state.corazon === true){
      return (
        <TouchableOpacity  onPress={() => this._storeLikes()} >
          <Text>
            <Ionicons name="md-heart" size={30} color={'black'} />
          </Text>
        </TouchableOpacity>
    )
    }else{
    return(
        
          <TouchableOpacity  onPress={() => this._storeLikes()} >
            <Text>
            <Ionicons name="md-heart-empty" size={30}  />
            </Text>
          </TouchableOpacity>
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
        backgroundColor: themeMainColor,
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

      },
       buttonPressed:{
       
        textAlign: "center",
        textAlignVertical: 'center',
        backgroundColor: 'white',
        width: 300,
        height: 55,
        borderRadius: 50,
        borderColor: themeMainColor,
        borderWidth: 4,
        
      },
      CommentBox: {
        height:30,
        position: "relative",
        alignItems: "center",
        marginRight: 15
      },
      CommentInput: {
        height: 25,
        marginLeft: 25,
        marginRight:25,
        zIndex:1
      },
      CancelCross: {
        position:"absolute",
        left:5,
        top:3.5,
        zIndex: 1
      },
      SendComment: {
        position:"absolute",
        right:0.1,
        top:3.5,
        zIndex: 1
      }
  });

export default IdeaAlbum;
