import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  ImageBackground
} from 'react-native';

import Carousel from 'react-native-anchor-carousel'; 



const { width } = Dimensions.get('window');
const data = [
    {
      uri: 'https://i.imgur.com/yWGOZ35.jpg',
      content: 'En nuestra página principal encontrarás los botones con las categorias de productos, podés presionar una de ellas, buscar un producto por su nombre en la barra superior o seleccionar uno de los tags. Si sigues bajando encontraras mas secciones'
    },
    {
      uri: 'https://i.imgur.com/2g0ollT.jpg',
      content: 'Arriba a la derecha podemos encontrar la barra lateral con todas las funciones de tu cuenta'
    },
    {
      uri: 'https://i.imgur.com/FcNSqAu.jpg',
      content: 'Una vez seleccionada la categoria deseada, podrás seleccionar el producto que te interese  '
    },
    {
      uri: 'https://i.imgur.com/qwTh4NB.jpg',
      content: 'Dentro del producto se encuentra una breve descripción, el material que lo compone y distintas ideas para reutilizarlo'
    },
    {
      uri: 'https://i.imgur.com/Ml0T1S5.jpg',
      content: 'Si presionas al material, te encontras con una definicion, si es reciclable y la manera correcta de desecharlo '
    },
    {
      uri: 'https://i.imgur.com/N7NdQcn.jpg',
      content: 'Por otro lado, si seleccionas una de las ideas aparecerá un video informativo de como poder llevar a cabo la misma'
    },
    {
      uri: 'https://i.imgur.com/2Yj2Iln.jpg',
      content: 'De nuevo en la pantalla principal, al descender te encontrarás con los botones de eventos'
    },
    {
      uri: 'https://i.imgur.com/itZ0qug.jpg',
      content: 'Al seleccionarlo, te brindará informacion sobre cuando y dónde se realiza'
    },
    
  ];



class ImagenCarouselInstructivo extends React.Component{
  
      renderItem = ({ item, index }) => {
        const { uri, title, content } = item;
        return (
          <TouchableOpacity
            activeOpacity={1}
            style={styles.item}
            onPress={() => {
              this.numberCarousel.scrollToIndex(index);
            }}
          >
            <ImageBackground
              source={{ uri: uri }}
              style={styles.imageBackground}
            >

            </ImageBackground>
            <View style={styles.lowerContainer}>
              <Text style={styles.titleText}>{title}</Text>
              <Text style={styles.contentText}>{content}</Text>
            </View>
          </TouchableOpacity>
        );
      };
    
      render(){
       
      return (

        <Carousel
          style={styles.carousel}
          data={data}
          renderItem={this.renderItem}
          itemWidth={0.8 * width}
          separatorWidth={0}
          inActiveOpacity={0.3}
          containerWidth={width - 10}
          ref={(c) => {
            this.numberCarousel = c;
          }}/> 
  );
    }
    }
    export default ImagenCarouselInstructivo;
    const styles = StyleSheet.create({
        carousel: {
          flex: 1,
          backgroundColor: '#FFFFFF'
        },
        item: {
          backgroundColor: 'white',
          flex: 1,
          //borderRadius: 3,
          elevation: 3
        },
        imageBackground: {
          flex: 2,
          backgroundColor: '#EBEBEB',

        }, 
        lowerContainer: {

            margin: 10
          },
          titleText: {
            fontWeight: 'bold',
            fontSize: 22
          },
          contentText: { 
            fontSize:18
          }
       
      })