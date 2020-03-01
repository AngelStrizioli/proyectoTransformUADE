import React from 'react';
import { Text, View, Image, StyleSheet, ScrollView,Dimensions,ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';




const { width } = Dimensions.get('window');

/* ### COMPONENTE PARA HACER UN ITEM DE LA GALERIA DE IDEAS ###
    En prototipo: Dentro de producto único > Idea1, Idea2, Idea3... */
class ItemListaIdeas extends React.Component{
    constructor(props){
      super(props);
      this.state = {  idea:[]
      }
      
    }
    componentWillMount(){
      this.setState({idea:this.props.idea})
    }
  
    render(){
      const { navigation } = this.props;
      const idea = this.props.idea;
      
      return(
        
        <View style={styles.container}>
          <TouchableOpacity style={styles.itemIdea} onPress= {()=> {navigation.navigate('IdeaSimple', {idea: idea});}}>
          <ImageBackground  source={{uri: this.state.idea.img}} style={{width: width*0.7, height:300}} >
          <View style={styles.containerItems}> 
              <Text style={styles.textStyle}>{this.state.idea.titulo}</Text>
            </View>
            </ImageBackground>
          </TouchableOpacity>
    
        </View>
        
        
    );
    }
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    itemIdea:{
      //borderWidth: 0.5,
      //borderColor: 'black',
      //padding: '2%',
      margin: '3%',
      width: width*0.8,
      height:300
    },
    containerItems: {
      height: '100%',
      //width: '100%',
      marginTop:'75%',
      alignItems: 'flex-start',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
    },
    textStyle:{
      padding:'2%',
      fontSize:20,
      textAlign:'left',
      fontWeight:'600',
      paddingLeft:'3%',
      textShadowColor: 'rgba(0, 0, 0, 0.25)',
      textShadowOffset: {width: 1, height: 1},
      color:'white',
    }

  });
  
  export default ItemListaIdeas;