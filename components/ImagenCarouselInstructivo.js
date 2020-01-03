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
      uri: 'https://s-media-cache-ak0.pinimg.com/736x/f2/04/96/f20496c1b1bf72494c9c8f6aa054e9f6--ginger-kitten-ginger-cats.jpg',
      title: 'Paso 1',
      content: 'Para comenzar puedes escribir el producto que quieres reutilizar o reciclar y presiona "¡Transformalo!"'
    },
    {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Kitten_in_Rizal_Park%2C_Manila.jpg/1200px-Kitten_in_Rizal_Park%2C_Manila.jpg',
      title: 'Paso 2 ',
      content: 'Si existen productos similares al que buscaste, selecciona la opcion que deseas, sino, pasa al siguiente paso'
    },
    {
      uri: 'https://i.pinimg.com/originals/5b/11/c6/5b11c6b5eabb728c76b652c330ddaf8e.jpgg',
      title: 'Paso 3',
      content: 'Aqui podras encontrar la informacion de tu producto y seleccionar la opcion que prefieras'
    },
    {
      uri: 'https://i.imgur.com/SD3s2OU.jpg',
      title: 'Paso 4',
      content: 'Presiona el botón "Mas Info.." para obtener informacion sobre los materiales que componen el producto'
    },
    {
      uri: 'https://thumbs.dreamstime.com/z/gato-blanco-gatos-animales-dom%C3%A9sticos-gatito-gatitos-felinos-peque%C3%B1os-138362770.jpg',
      title: 'Paso 5 ',
      content: 'Presiona sobre la idea que mas te interese y recibiras informacion sobre como poder reutilizar el producto que buscaste'
    }
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