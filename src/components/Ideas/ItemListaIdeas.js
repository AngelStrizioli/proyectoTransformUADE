import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

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
              <Image source={{uri: this.state.idea.img}} style={{width: "100%", height:200}} />
              <Text style={styles.textStyle}>{this.state.idea.titulo}</Text>
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
      borderWidth: 5,
      borderColor: '#6DCAF2',
      //padding: '2%',
      margin: '3%'
    },
    textStyle:{
      padding:'2%',
      fontSize:16,
      textAlign:'center'
    }

  });
  
  export default ItemListaIdeas;