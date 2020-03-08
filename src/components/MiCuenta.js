import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { View, ScrollView, Button, Text, Dimensions, StyleSheet} from 'react-native';
import { themeMainColor } from "../styles/globalStyles";
import Login from '../screens/Login'
import PerfilUsuario from './PerfilUsuario';
import { withNavigation } from 'react-navigation'

class MiCuenta extends React.Component {
    static navigationOptions = {
        title: 'Mi Cuenta',
        drawerIcon: ({ focused }) => (
          <Ionicons name="md-contact" size={24} color={focused ? themeMainColor : 'black'} />
        )
      };
      constructor(props){
        super(props);
        this.state={
          userLoged: false
        }
      }
    
    showCaseUser(){
        {
            if(this.state.userLoged === false){
            const { navigation } = this.props;
              return(
                <ScrollView >
                    <View style={styles.container}>
                    <Text style={styles.heading}> Si tienes cuenta inicia sesion para disfrutar de Conciencia UADE</Text>
                    <TouchableOpacity  onPress={() => { navigation.navigate('Login')}}  >
                        <Text style={styles.signupBtn}> Iniciar Sesion  </Text>
                    </TouchableOpacity>
                    <Text style={styles.heading}> Y si no tienes una pudes registarte pulsando el boton de Registrarse</Text>
                    <TouchableOpacity  onPress={() => { navigation.navigate('SignUp')}} title="Registrarse">
                        <Text style={styles.signupBtn}> Registrarse </Text>
                    </TouchableOpacity>
                    </View>
                </ScrollView>
              );
            }else{
              return(
                <ScrollView>
                    <PerfilUsuario/>
                </ScrollView>
              )
            }
          }
    }

    render(){
        return(
            <ScrollView style={{ backgroundColor: themeMainColor, flex:1 }}>  
                {this.showCaseUser()}
            </ScrollView>
        );
    }
    
}
export default withNavigation(MiCuenta);

const heightConst = Dimensions.get('screen').height;
const styles = StyleSheet.create({
 container: {
  height: heightConst-155,
  justifyContent: 'center',
  alignItems: 'center',
 },
 signupBtn: {
    marginTop: 20,
    width: 246,
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderColor: 'white',
    backgroundColor: 'white',
    color: themeMainColor,
    fontSize: 15,
    fontWeight: 'normal',
    borderRadius: 50, //android
    textAlign: "center",
    elevation: 2,//android
    shadowColor: 'rgba(0,0,0, .25)', // IOS
    shadowOffset: { height: 3, width: 3 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
  },
  heading: {
    color: '#fff',
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center',
    margin: 30,
   },
})
