
import React, { Component } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Image, StyleSheet, View,Text } from 'react-native';
import { Container, Header, Content, Button, Right } from 'native-base';
import { firebaseAuth } from '../environment/config';
import { themeMainColor } from '../styles/globalStyles';
import HeaderExample from './HeaderDrawer'


export default class PerfilUsuario extends React.Component {
    static navigationOptions = {
        title: 'Mi perfil',
        drawerIcon: ({ focused }) => (
          <Ionicons name="md-contact" size={24} color={focused ? themeMainColor : 'black'} />
        )
      };

    logOut = () => {
        console.log("!!");
        firebaseAuth.signOut()
            .then(() => this.props.navigation.navigate('Login'))
            .catch(error => this.setState({errorMessage: error.message}));
    };
    render() {
      return (
          <Container>
              <HeaderExample />
          
        <View style={styles.container}>
            <Image
            style={styles.image}
            borderRadius={80}
            source={{uri: 'http://www.lse.ac.uk/International-Inequalities/Assets/Images/BlankImage.jpg'}}
            />
     
            <Text style={styles.subtitle}>Mi perfil</Text>

            <View style={styles.line}>
                <Text style={styles.text}>Usuario</Text>
            </View>
            <View style={styles.line}>
                <Text style={styles.text}>usuarioPrueba@gmail.com</Text>
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
            <Button full light style={styles.buttonStyleLogOut} onPress={this.logOut}>
                <Text>Cerrar sesión</Text>
            </Button>

        </View>
        </Container>
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
    },
    buttonStyleLogOut: {
        marginTop:20,
        backgroundColor: "#b2102f",
    }
})