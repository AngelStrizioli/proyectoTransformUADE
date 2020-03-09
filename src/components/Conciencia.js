import React, { Component } from 'react';
import { Text, View, Image, Dimensions, ImageBackground , ScrollView} from 'react-native';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { Card, CardItem, Body, Row } from 'native-base';

const { width } = Dimensions.get('window');

export default class Conciencia extends Component {
  render() {
    const imagen1 = 'https://image.freepik.com/foto-gratis/persona-que-tiene-ideas-como-metafora-bombillas_23-2148342812.jpg';

    const titulo1 = '¡Proponé tu idea y ganá!'
    const subtitulo1 = 'Mandanos una idea creativa para darle una nueva vida a un producto y participá para ganarte varios premios.'

    const imagen2 = 'https://cdn.forbes.com.mx/2019/09/GettyImages-957852396-640x360.jpg';
    const titulo2 = '¡Tirá tu colilla acá!'
    const subtitulo2 = 'Tiremos las colillas en los cestos rojos y ayudemos a que UADE haga ecoladrillos con ellos'

    return (
      <ScrollView horizontal >
<Row>
      <Card style={{
                elevation: 2,//android
                shadowColor: 'rgba(0,0,0, .25)', // IOS
                shadowOffset: { height: 3, width: 3 }, // IOS
                shadowOpacity: 1, // IOS
                shadowRadius: 1,
            }}>
        <CardItem cardBody>
          <Body>
              <ImageBackground source={{ uri: imagen1 }}  style={{ height: width * 0.7, width: width * 0.8, resizeMode: 'cover', flex: 1 }}>
                  <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.65)' }}>
                    <Text style={{ color: 'white', textAlign: 'left', fontSize: 18, fontWeight: 'bold', marginLeft: '2%', marginTop: '2%' }}>{titulo1}</Text>
                    <Text style={{ color: 'white', textAlign: 'left', fontSize: 14, marginHorizontal: '3%', marginTop: '2%', marginBottom: '2%' }}>{subtitulo1}</Text>
                  </View>
                  <View style={{ marginTop: width*0.25 , justifyContent: 'flex-end', alignItems:'flex-end'}}>
                    <TouchableOpacity style={{backgroundColor: 'black', alignItems: 'center',   padding: '3%'}}>
                      <Text style={{ color: 'white', fontSize:12}}>Conocé más ></Text>
                    </TouchableOpacity>
                  </View>
                </ImageBackground>
              </Body>
            </CardItem>
        </Card>
        <Card style={{
                elevation: 2,//android
                shadowColor: 'rgba(0,0,0, .25)', // IOS
                shadowOffset: { height: 3, width: 3 }, // IOS
                shadowOpacity: 1, // IOS
                shadowRadius: 1,
            }}>
        <CardItem cardBody>
          <Body>
              <ImageBackground source={{ uri: imagen2 }}  style={{ height: width * 0.7, width: width * 0.8, resizeMode: 'cover', flex: 1 }}>
                  <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.65)' }}>
                    <Text style={{ color: 'white', textAlign: 'left', fontSize: 18, fontWeight: 'bold', marginLeft: '2%', marginTop: '2%' }}>{titulo2}</Text>
                    <Text style={{ color: 'white', textAlign: 'left', fontSize: 14, marginHorizontal: '3%', marginTop: '2%', marginBottom: '2%' }}>{subtitulo2}</Text>
                  </View>
                  <View style={{ marginTop: width*0.25 , justifyContent: 'flex-end', alignItems:'flex-end'}}>
                    <TouchableOpacity style={{backgroundColor: 'black', alignItems: 'center',   padding: '3%'}}>
                      <Text style={{ color: 'white', fontSize:12}}>Conocé más ></Text>
                    </TouchableOpacity>
                  </View>
                </ImageBackground>
              </Body>
            </CardItem>
        </Card>
        </Row>
      </ScrollView>
    );
  }
}
