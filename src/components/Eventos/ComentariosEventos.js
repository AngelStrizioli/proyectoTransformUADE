import React, { Compo } from 'react';
import { StyleSheet, ScrollView, View, Text, Dimensions, Image, ImageBackground } from 'react-native';
import { TouchableOpacity, TouchableWithoutFeedback, TextInput } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import ComentariosCard from '../ComentariosCard'
import { Textarea } from "native-base";
import ApiController from "../../controller/ApiController"

let { width, height } = Dimensions.get('window');


class ComentariosEventos extends React.Component {
  constructor(props){
    super(props)
    this.state={
        textoComentado: "",
        comentarios:[]
    }
   
}

  renderBlocks(evento) {
    if (evento.blocks != undefined) {
      return evento.blocks.map((block, i) => {
        return (
          <View key={i}>
            <Text style={styles.subtitleStyle}>{block.subtitle}</Text>
            <Text style={styles.textStyle}>{block.text}</Text>
          </View>
        )
      })
    }
  }

  _renderComment(){
   return(
    this.state.comentarios.map((comentario,i) =>{
      return(<ComentariosCard key={i} comentario={comentario}/>)
   })) 
  }

 
  onClickListener(evento){
    let data = {
      id: evento.id,
      texto: this.state.textoComentado,
      usuario: "Usuario", //harcodeado hasta que usemos usuarios reales
    }
     ApiController.pushCommentEvent(data, this.handleUpdate.bind(this));
     this.setState({
      comentario:""
    })
  }

  handleUpdate(response){
    
    const { navigation } = this.props;
    const evento = navigation.getParam('evento', {});
    let data = {
      id : evento.id
    }
    ApiController.getCommentsEvents(data, this.handleComments.bind(this))
  }


  componentDidMount(){
    this.handleUpdate()
  }

  handleComments(comments){
    this.setState({
      comentarios: comments
    })
  }

  render() {
    const { navigation } = this.props;
    const evento = navigation.getParam('evento', {});
    return (
      <ScrollView style={styles.container}>
        <ImageBackground
          source={{ uri: evento.img }}
          style={styles.backgroundImage}>
          <View style={styles.tittleContainer}>
            <View style={styles.backButtonView}>
            </View> 
            <View style={styles.tittlePosition}>
              <Text style={styles.titleStyle}>{evento.title}</Text>
            </View>
            <View style={styles.fechaPosition}>
              <Ionicons style={styles.fechaIcon} name="md-calendar" size={18} color={'white'} />
              <Text style={styles.fechaText}>{evento.fecha}</Text>
            </View>
          </View>
        </ImageBackground>
        <View>
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
                onPress={() => this.onClickListener(evento)}
              />
          </View>
        </View>
        {this._renderComment()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    height: 200,
  },
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  compoView: {
    marginVertical: '5%'
  },
  tittleContainer: {
    flex: 1,
    flexWrap: 'wrap',
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
  },
  tittlePosition: {
    bottom: 0,
    width: '100%',
    paddingHorizontal: '2%'
  },
  fechaPosition: {
    bottom: 0,
    margin: '1%',
    width: '100%',
    paddingHorizontal: '2%',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  fechaIcon: {
    bottom: 0,
    paddingBottom: 0,
  },
  fechaText: {
    fontSize: 18,
    color: 'white',
    marginLeft: '2%',
    textAlign: 'auto',
  },
  backButtonView: {
    flex: 1,
    marginHorizontal: '2%',
    marginVertical: '6%',
    width: '15%',
  },
  backButton: {
    backgroundColor: 'rgba(254, 254, 254, 0.3)',
    borderRadius: 200,
    justifyContent: 'center',
    alignItems: 'center',
    height: '50%',

  },
  titleStyle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white',
  },
  subtitleStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: '4%'
  },
  textStyle: {
    paddingHorizontal: '5%',
    fontSize: 18,
    textAlign: 'justify',
    lineHeight: 26
  },
  SendComment: {
    position:"absolute",
    right: 8,
    top:93,
    zIndex: 1
    },
})
export default ComentariosEventos;
