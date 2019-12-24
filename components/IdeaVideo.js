import React from 'react';
import { Image, StyleSheet, Text, View, Linking, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {AsyncStorage} from 'react-native';

/* ### PÁGINA PARA REPRESENTAR EL POSTEO DE UNA IDEA QUE CONTENGA UN  VIDEO ###
      En prototipo:

      Falta terminar porque no encontré una librería que no haga quilombo con el navigator o con alguna otra gilada
     */


class IdeaVideo extends React.Component{
    constructor(props){
      super(props);
      this.state={
        guardado: false
      }
      this._isStored()
    }

    render(){
        const { navigation } = this.props;
        const idea = this.props.idea;
        var video = this.props.idea.video;
        var imagen = this.props.idea.img;
        return(
            <ScrollView style={styles.container}>
                <Text style={styles.titleStyle}>{idea.titulo}</Text>
                <Text style={styles.subtitleStyle}>VideoTutorial</Text>
                <TouchableOpacity onPress={() => Linking.openURL(video)}>
                    <Image title="El videardo" source={{ uri: (imagen) }} style={styles.imagenVideoStyle}/>
                    <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
                        {/*<Text style={styles.playButton}>&#9658;</Text>*/}
                        <Image title="Play Video" source={{uri: "https://i.imgur.com/bT1lYuB.png"}} style={{ height: 200, width: 300}}/>
                    </View>
                </TouchableOpacity>
                <Text style={styles.subtitleStyle}>Descripción:</Text>
                <Text style={styles.textStyle}>{idea.texto}</Text>

                 {this.cambiarBoton()}

               <View style={styles.compoPosition}>
                   <TouchableOpacity  onPress={() => { navigation.goBack()}} >
                       <Text style={styles.buttonDesigne} >
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
          console.log("Se guardo el item: " + this.props.idea.id);
          this.setState({guardado: true})

        } else {
          await AsyncStorage.removeItem(this.props.idea.id);
          console.log("Se elimino el item: " + this.props.idea.id);
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
                <TouchableOpacity  onPress={() => this._storeData()} >
                  <Text style={styles.buttonPressed} >
                    ¡Guardado!
                  </Text>
                </TouchableOpacity>
              </View>
          )
      }else{
          return(
              <View style={styles.compoPosition}>
                <TouchableOpacity  onPress={() => this._storeData()} >
                  <Text style={styles.buttonDesigne} >
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
        padding:'4%',
        fontSize:18,
        textAlign:'justify',
        lineHeight:26
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
        backgroundColor: '#00B2FF',
        width: 300,
        height: 55,
        borderRadius: 50,
        marginBottom:'5%'

      }, buttonPressed:{
        color: "#00B2FF",
        fontSize: 24,
        textAlign: "center",
        textAlignVertical: 'center',
        backgroundColor: 'white',
        width: 300,
        height: 55,
        borderRadius: 50,
        borderColor: '#00B2FF',
        borderWidth: 4,
        marginBottom:'5%'
      },
      imagenVideoStyle:{
        height: 200,
        width: 300,
        alignSelf: 'center',
        borderWidth: 4,
        borderColor: '#6DCAF2'
      },
      playButton:{
        fontSize: 64,
        fontWeight: 'bold',
        padding: '4%'
      }
  });


export default IdeaVideo;
