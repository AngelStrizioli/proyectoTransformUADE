import React, { Component } from 'react';
import { Text, View, Image, Dimensions, ImageBackground } from 'react-native';
import { Button, Icon } from 'native-base'
import { TouchableOpacity } from 'react-native-gesture-handler';

const { width } = Dimensions.get('window');

export default class Conciencia extends Component {
  render() {
    const imagen = 'https://image.freepik.com/foto-gratis/persona-que-tiene-ideas-como-metafora-bombillas_23-2148342812.jpg';

    const titulo = '¡Proponé tu idea y ganá!'
    const subtitulo = 'Mandanos una idea creativa para darle una nueva vida a un producto y participá para ganarte varios premios.'

    return (
      <View style={{ backgroundColor: 'black' }} >
        <ImageBackground source={{ uri: imagen }} style={{ flex: 1, height: 250 }}>
          <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.65)' }}>
            <Text style={{ color: 'white', textAlign: 'left', fontSize: 24, fontWeight: 'bold', marginLeft: '2%', marginTop: '2%' }}>{titulo}</Text>
            <Text style={{ color: 'white', textAlign: 'left', fontSize: 16, marginHorizontal: '3%', marginTop: '2%', marginBottom: '2%' }}>{subtitulo}</Text>
          </View>
          <View style={{ marginTop: '15%' , justifyContent: 'flex-end', alignItems:'flex-end'}}>
            <TouchableOpacity style={{backgroundColor: 'black', alignItems: 'center',   padding: '3%'}}>
              <Text style={{ color: 'white'}}>Conocé más ></Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
