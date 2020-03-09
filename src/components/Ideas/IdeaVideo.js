import React from 'react';
import { Image, StyleSheet, Text, View, Linking, ScrollView,AsyncStorage, TextInput,Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Card, CardItem, Body } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { themeMainColor, globalStyle } from '../../styles/globalStyles';
import {Container, Footer, FooterTab, Button} from 'native-base'
import { Video } from 'expo-av'

const { width } = Dimensions.get('window');

class IdeaVideo extends React.Component{
    constructor(props){
      super(props);
      this.state={
        guardado: false,
        corazon:false,
      }
      this._isStored()
    }

    render(){
        const { navigation } = this.props;
        const idea = this.props.idea;
        var video = this.props.idea.video_url;
        var imagen = this.props.idea.img;
        return(
          <Container>
            <ScrollView style={styles.container}>
            
                <Text style={globalStyle.titleStyle}>{idea.titulo}</Text>
                  <View style={{flex: 1, marginLeft:8}}>
                  <Video
                    source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
                    rate={1.0}
                    volume={1.0}
                    isMuted={false}
                    resizeMode="cover"
                    shouldPlay
                    isLooping= {false}
                    useNativeControls={true} 
                    style={styles.video}
                  />
                  </View>

                 {/* <View style={{justifyContent:'space-around',marginTop:'3%' ,flexDirection:'row', height:35}}>
                    {this.cambiarCorazon()}
                    <TouchableOpacity onPress={() => navigation.navigate('ComentariosIdeas', {idea: idea })}>
                      <Text>
                        <Ionicons name="md-text" size={30}/>
                      </Text>
                    </TouchableOpacity> 
                    {this.cambiarBoton()}
                    <TouchableOpacity>
                        <Text> <Ionicons name="md-share" size={30} /> </Text>   
                    </TouchableOpacity>
                  </View>*/}
             
                <Text style={globalStyle.titleStyle}>Descripción</Text>
                <Text style={globalStyle.textStyle}>{idea.texto}</Text>

               {/*<Text style={globalStyle.titleStyle}>Pasos</Text>*/}

            </ScrollView>
            <Footer style={{backgroundColor: 'white'}}>
                    <FooterTab style={{marginHorizontal:'10%', marginTop:'3%', backgroundColor: 'white'}}>

                         {this.cambiarCorazon()}

                         <TouchableOpacity onPress={() => navigation.navigate('ComentariosIdeas', {idea: idea })}>
                      <Text>
                        <Ionicons name="md-text" size={30}/>
                      </Text>
                    </TouchableOpacity> 

                         {this.cambiarBoton()}
                         <TouchableOpacity>
                        <Text> <Ionicons name="md-share" size={30} /> </Text>   
                    </TouchableOpacity>

                    </FooterTab>
                </Footer>




            </Container>
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
    _storeLikes = () =>{

        if (this.state.corazon == false){
          this.setState({corazon: true})
        }
        else{
          this.setState({corazon:false})
        }
    
    }

   

  cambiarBoton(){
      //console.log(this.state.guardado)
      if(this.state.guardado === true){
          
          return (
            <TouchableOpacity  onPress={() => this._storeData()} >
              <Image style={{width:30, height:30}} source={{uri:('https://i.imgur.com/dHIs4kd.png')}} />
            </TouchableOpacity>
          )
      }else{
          return(
      
                <TouchableOpacity onPress={() => this._storeData()} >
                <Image style={{width:30, height:30}} source={{uri:('https://i.imgur.com/JkqyZWl.png')}} />
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

const widthConst = Dimensions.get('screen').width;
const heightConst = Dimensions.get('screen').height;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    video:{
      width: widthConst-15,
      height: heightConst-600,
    },
    titleStyle: {
      marginVertical:'5%',
      marginLeft:'5%',
        fontSize: 22,
        fontWeight: 'bold',
        //textAlign: 'center'
    },
    subtitleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        //padding: '3%'
    },
    textStyle:{
        paddingHorizontal: '6%',
        fontSize:18,
        textAlign:'justify',
        lineHeight:26
    },
      compoPosition: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom:20
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
        marginBottom:'5%',
        alignSelf:'center'

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
      }
  , buttonPressed:{
      
    textAlign: "center",
    textAlignVertical: 'center',
    justifyContent:'center',
    alignSelf: 'center',
    backgroundColor: 'white',
    width: 300,
    height: 55,
    borderRadius: 50,
    borderColor: themeMainColor,
    borderWidth: 4,
    
      },
      imagenVideoStyle:{
        height: width*0.7,
        width: width*0.98,
        alignSelf: 'center',
        //marginHorizontal:'2%'
        //borderWidth: 0.5,
        //borderColor: 'black'
      },
      playButton:{
        fontSize: 64,
        fontWeight: 'bold',
        padding: '4%'
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


export default IdeaVideo;
