import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Image, Dimensions, TouchableOpacity } from 'react-native';
import { firebaseAuth } from '../environment/config';
import { themeMainColor } from '../styles/globalStyles';
import { Ionicons } from '@expo/vector-icons';
export default class SignUp extends React.Component {
  state = { email: '', password: '', errorMessage: null }
  constructor(props) {
    super(props);
    this.state = {
			showPass: true,
			press: false,
		};
		this.showPass = this.showPass.bind(this);
  }
  /*
  static navigationOptions = {
    title: 'Registrarse',
    drawerIcon: ({ focused }) => (
      <Ionicons name="md-contact" size={24} color={focused ? themeMainColor : 'black'} />
    )
  };
*/
  handleSignUp = () => {
    //FIREBASE AUTHENTICIATION STUFF
    console.log("handled signup");
    firebaseAuth.createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => this.props.navigation.navigate('Main'))
      .catch(error => this.setState({ errorMessage: error.message }));
  }
  showPass() {
    this.state.press === false ? this.setState({ showPass: false, press: true }) :this.setState({ showPass: true, press: false });
    }


  render() {
    return (
      <ScrollView style={{ backgroundColor: 'white' }}>
      <View style={styles.container}>
      <Image source={require('../assets/images/splashGreenToo2.png')} style={{
                      width: 1000, 
                      height: 200,
                      resizeMode: 'contain',
                      marginBottom: 20
                    }}/>
          <Text style={styles.heading}>¡Regístrate para disfrutar de Conciencia UADE!</Text>
          {this.state.errorMessage &&
            <Text style={{ color: 'red' }}>
              {this.state.errorMessage}
            </Text>
          }
          <View style={styles.inputSize}>
            <Image source={require('../assets/images/username.png')} style={styles.icons}/>
          <TextInput
           style={{ flex: 1 }}
           placeholder="Email"
           autoCapitalize="none"
           onChangeText={email => this.setState({ email })}
           value={this.state.email}
          />
          </View>
          <View style={styles.inputSize}>
            <Image source={require('../assets/images/password.png')} style={styles.icons}/>
            <TextInput
            style={{ flex: 1 }}
            secureTextEntry={this.state.showPass}
            placeholder="Password"
            autoCapitalize="none"
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
            />
            <TouchableOpacity
            activeOpacity={0.7}
						onPress={this.showPass}>
						<Image source={require('../assets/images/eye_black.png')} style={styles.icons} />
					  </TouchableOpacity>
          </View>
            <TouchableOpacity onPress={this.handleSignUp} style={styles.boton}>
                <Text style={styles.signupBtn}>¡Regístrate!</Text>
            </TouchableOpacity>
        <TouchableOpacity color="transparent" onPress={() => this.props.navigation.navigate('Login')} style={styles.boton}>
          <Text style={styles.signupBtn}>¿Ya tienes cuenta? Inicia sesión </Text>
        </TouchableOpacity>
     </View>
   </ScrollView>
  )}
}
//const heightConst = Dimensions.get('screen').height;
const heightConst = Dimensions.get('screen').height;
const styles = StyleSheet.create({
 container: {
  marginTop:'10%',
  justifyContent: 'center',
  alignItems: 'center',
  margin: 15,
 },
 headingSection: {
     borderColor: 1,
     textAlign: 'center',
     alignItems: 'center',
     marginBottom: 35
 },
 heading: {
     color: themeMainColor,
     fontSize: 20,
     marginBottom: 10,
     textAlign: 'center'
 },
 inputSize: {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'white', 
  borderColor: themeMainColor,
  height: 40,
  margin: 10,
  height: 48,
  borderWidth: 1,
  color: 'white',
  borderRadius: 25,
  paddingLeft: '5%',
  fontSize: 16,
  width: 280,
  shadowColor: 'rgba(0,0,0, .25)', // IOS
  shadowOffset: { height: 3, width: 3 }, // IOS
  shadowOpacity: 1, // IOS
  shadowRadius: 1, //IOS
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
   fontSize: 15,
   fontWeight: 'normal',
   //borderRadius: 25, //android
   textAlign: "center",
   elevation: 2,//android
   shadowColor: 'rgba(0,0,0, .25)', // IOS
   shadowOffset: { height: 3, width: 3 }, // IOS
   shadowOpacity: 1, // IOS
   shadowRadius: 1, //IOS
},
 buttonText: {
     color: '#fff',
     textAlign: 'center'
 },
 icons: {
  width: 25,
  height: 25,
  tintColor: 'grey',
  marginRight: 12,
},
})
