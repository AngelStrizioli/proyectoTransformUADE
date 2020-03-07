import React, { Compo } from 'react';
import { StyleSheet, ScrollView, View, Text, Dimensions, Image, Linking} from 'react-native';
import { TouchableOpacity, TouchableWithoutFeedback, TextInput } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import ComentariosCard from '../ComentariosCard'
import { Textarea } from "native-base";
import ApiController from "../../controller/ApiController"
import ImageCarousel from '../ImageCarousel';
import { Card, CardItem, Body } from 'native-base';
import { Video } from 'expo-av'

let { width, height } = Dimensions.get('window');


class ComentariosIdeas extends React.Component {
  constructor(props){
    super(props)
    this.state={
        textoComentado: "",
        comentarios:[]
    }
   
}

  _renderComment(){
   return(
    this.state.comentarios.map((comentario,i) =>{
      return(<ComentariosCard key={i} comentario={comentario}/>)
   })) 
  }

 
  onClickListener(idea){
    let data = {
      post_id: 1,
      text: this.state.textoComentado,
      user_id: "Usuario", //harcodeado hasta que usemos usuarios reales
    }
     ApiController.pushCommentPost(data, this.handleUpdate.bind(this));
     this.setState({
      comentario:""
    })
  }

  handleUpdate(response){
    const { navigation } = this.props;
    const idea = navigation.getParam('idea', {});
    let data = {
      post_id : 1
    }
    ApiController.getCommentsPost(data, this.handleComments.bind(this))
  }

  componentDidMount(){
    this.handleUpdate()
  }

  handleComments(comments){
    this.setState({
      comentarios: comments
    })
  }
  _showImage(idea){
    if(idea.type === "album"){
      return(
        <Card>
          <CardItem >
            <View style={styles.carouselContainer2}>
              <ImageCarousel album={idea.album}/>
            </View>
          </CardItem>
        </Card>
      )
    }else{
      return(
        <Card style={{alignSelf:'center'}}>
          <View > 
            <Video
              source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
              rate={1.0}
              volume={1.0}
              isMuted={false}
              resizeMode="cover"
              shouldPlay
              isLooping= {false}
              useNativeControls={true} 
              style={{ width: 400, height: 300 }}
            />
           </View>
       </Card>
      )
    }
  }

  render() {
    const { navigation } = this.props;
    const idea = navigation.getParam('idea', {});
    return (
      <ScrollView style={styles.container}>
        <View>
          <Text style={styles.titleStyle}>{idea.title}</Text>
        </View>
          {this._showImage(idea)}
          <View style={{margin:5}}>
            <Textarea rowSpan={5} bordered 
            placeholder="Deja aqui tu comentario"
            placeholderTextColor="#061b2c"
            underlineColorAndroid = "transparent"
            onChangeText={(comentario) => this.setState({ textoComentado: comentario })}
            value={this.state.comentario}
            />
              <Ionicons 
                style={styles.SendComment}
                name="md-send"
                size={30}
                onPress={() => this.onClickListener(idea)}
              />
          </View>
        {this._renderComment()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
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
    imagenVideoStyle:{
      height: 200,
      width: 300,
      alignSelf: 'center',
      borderWidth: 0.5,
      borderColor: 'black'
    },
    SendComment: {
      position:"absolute",
      right: 8,
      top:93,
      zIndex: 1
      },
});
export default ComentariosIdeas;
