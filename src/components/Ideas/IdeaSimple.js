import React from 'react';
import { Image, StyleSheet, Text, View, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import IdeaAlbum from './IdeaAlbum';
import IdeaVideo from './IdeaVideo';
import IdeaTexto from './IdeaTexto';

/* ### PÁGINA PARA REPRESENTAR EL POSTEO DE UNA IDEA, YA SEA UN ALBUM DE FOTOS, VIDEO O TEXTO ### 
      En prototipo: Idea
     */

    class IdeaSimple extends React.Component{
        render(){
            const { navigation } = this.props;


            var idea = navigation.getParam('idea', {})
            
            if(idea.tipo == 'album'){
                return (
                <IdeaAlbum idea={idea} navigation={navigation}/>
                );
            }else if (idea.tipo == 'video'){
                return (
                <IdeaVideo idea={idea} navigation={navigation}/>
                );
            }else{
                return (
                <IdeaTexto idea={idea} navigation={navigation}/>
                );
            }
        }
    }

    export default IdeaSimple;