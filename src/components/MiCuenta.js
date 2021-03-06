import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { View, ScrollView, Text, Dimensions, StyleSheet, Image} from 'react-native';
import { themeMainColor } from "../styles/globalStyles";
import PerfilUsuario from './PerfilUsuario';
import { withNavigation } from 'react-navigation'

class MiCuenta extends React.Component {
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
                <View >
                    <View style={styles.container}>
                    <Image source={require('../assets/images/splashGreenToo2.png')} style={{
                      width: 1000, 
                      height: 200,
                      resizeMode: 'contain',
                    }}/>
                    <Text style={styles.heading}> Si tenés cuenta inicia sesion para disfrutar de Conciencia UADE</Text>
                    <TouchableOpacity  onPress={() => { navigation.navigate('Login')}} style={styles.boton}>
                        <Text style={styles.signupBtn}> Iniciar Sesion  </Text>
                    </TouchableOpacity>
                    <Text style={styles.heading}> Y si no tenés una puedes registarte pulsando el boton de Registrarse</Text>
                    <TouchableOpacity  onPress={() => { navigation.navigate('SignUp')}} title="Registrarse" style={styles.boton}>
                        <Text style={styles.signupBtn}> Registrarse </Text>
                    </TouchableOpacity>
                    </View>
                </View>
              );
            }else{
              return(
                <View>
                    <PerfilUsuario/>
                </View>
              )
            }
          }
    }

    render(){
        return(
            <ScrollView style={{ backgroundColor: 'white', flex:1 }}>  
                {this.showCaseUser()}
            </ScrollView>
        );
    }
    
}
export default withNavigation(MiCuenta);

const heightConst = Dimensions.get('screen').height;
const styles = StyleSheet.create({
 container: {
  marginTop:'10%',
  justifyContent: 'center',
  alignItems: 'center',
 },
 boton:{
   borderRadius: 5,
   borderColor: 'white',
  backgroundColor: themeMainColor,
  marginTop: 20,
  width: 246,
  height: 40,
 },
 signupBtn: { 
    padding: 10,
    color: 'white',
    fontSize: 14,
    fontWeight: 'normal',
    //borderRadius: 25, //android
    textAlign: "center",
    elevation: 2,//android
    shadowColor: 'rgba(0,0,0, .25)', // IOS
    shadowOffset: { height: 3, width: 3 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
  },
  heading: {
    color: themeMainColor,
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
    margin: 30,
   },
})
