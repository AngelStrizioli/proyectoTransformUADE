import React from 'react';
import { Image, StyleSheet, Text, View, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { themeMainColor } from '../../styles/globalStyles';

/* ### PÁGINA PARA REPRESENTAR EL POSTEO DE UNA IDEA QUE CONTENGA SOLAMENTE TEXTO ### 
      En prototipo: 

      Falta terminar porque no hay definida todavia una idea que solo contenga texto
     */

class IdeaTexto extends React.Component{
    render(){
        const idea = this.props.idea;

        return(
            <Text  style={styles.titleStyle}>{idea.titulo}</Text>
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
    textStyle:{
        padding:'4%',
        fontSize:18,
        textAlign:'justify'
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
        backgroundColor: themeMainColor,
        width: 300,
        height: 55,
        borderRadius: 50,
        marginBottom:'5%'
        
      }
  });

export default IdeaTexto;