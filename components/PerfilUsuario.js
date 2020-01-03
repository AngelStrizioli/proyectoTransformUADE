
import React, { Component } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Image, StyleSheet, View } from 'react-native';
import { Container, Header, Content, Button, Text, Right } from 'native-base';
import HeaderComponent from './Misc/HeaderComponent'


export default class PerfilUsuario extends React.Component {
    static navigationOptions = {
        title: 'Mi perfil',
        header: null,
        drawerIcon: ({ focused }) => (
          <Ionicons name="md-contact" size={24} color={focused ? '#00B2FF' : 'black'} />
        )
      };
    render() {
      return (
        <View style={styles.container}>
            <Header>
                <Right>
                    <Button transparent onPress={() => {this.props.navigation.navigate('App');}}>
                        <Text style={{color:'black'}}> Volver</Text>
                    </Button>
                </Right>
            </Header>
            <Image
            style={styles.image}
            borderRadius={80}
            source={{uri: 'http://www.lse.ac.uk/International-Inequalities/Assets/Images/BlankImage.jpg'}}
            />
     
            <Text style={styles.subtitle}>Mi perfil</Text>

            <View style={styles.line}>
                <Text style={styles.text}>Juana Perez</Text>
            </View>
            <View style={styles.line}>
                <Text style={styles.text}>juanitaP@gmail.com</Text>
            </View>
            <View style={styles.line}>
                <Text style={styles.text}>********</Text>
            </View>
                <Button full light style={styles.buttonStyle}>
                    <Text>Cambiar contraseña </Text>
                </Button>
            <View style={styles.line}>
                <Text style={styles.text}>(011) 23598631</Text>
            </View>


        </View>
      );
    }
  }
  const styles = StyleSheet.create({
    container: {
        flex:1,


    },
    line:{
        borderBottomColor: 'black',
        borderBottomWidth: 0.5,
    },

    buttonStyle:{
        marginTop:20,
    },
    subtitle:{
        fontSize:22,
        textAlign:'center',
        marginTop:20,


    },
    image:{
        marginTop:20,
        width: 150,
        height: 150,
        alignSelf:"center",


    },
    text:{
        fontSize:18,
        textAlign:'left',
        marginTop:30,
        marginLeft:10,



    }
})