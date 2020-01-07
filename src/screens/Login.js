import React from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Image, Dimensions, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import { firebaseAuth } from '../environment/config';

export default class Login extends React.Component {
  state = { email: '', password: '', errorMessage: null }
  constructor(props) {
    super(props);
    this.state = {
			showPass: true,
			press: false,
		};
		this.showPass = this.showPass.bind(this);
	}

  handleLogin = () => {
    firebaseAuth.signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => this.props.navigation.navigate('Main'))
      .catch(error => this.setState({ errorMessage: error.message }));
  }
  showPass() {
    this.state.press === false ? this.setState({ showPass: false, press: true }) :this.setState({ showPass: true, press: false });
  }

  render() {
    return (
      <ScrollView style={{ backgroundColor: '#00B2FF' }}>
        <View style={styles.container}>
          <Image source={require('../assets/images/LogoHorizontal.png')} style={{
            width: 300,
            height: 60,
            resizeMode: 'contain',
          }}/>
          <Text style={styles.heading}>¡Ingresa a tu cuenta para disfrutar de TRANSFORM!</Text>
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
              returnKeyType={'done'}
              onChangeText={email => this.setState({ email })}
              value={this.state.email}
              autoCorrect={false} />
            </View>
            <View style={styles.inputSize}>
              <Image source={require('../assets/images/password.png')} style={styles.icons}/>
              <TextInput 
              style={{ flex: 1 }}
              secureTextEntry={this.state.showPass}
              placeholder="Password"
              autoCapitalize="none"
              onChangeText={password => this.setState({ password })}
              value={this.state.password}/>
              <TouchableOpacity
              activeOpacity={0.7}
              onPress={this.showPass}>
                <Image source={require('../assets/images/eye_black.png')} style={styles.icons} />
              </TouchableOpacity>
            </View>
          <TouchableOpacity onPress={this.handleLogin} >
            <Text style={styles.signupBtn} >
                Ingresar
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.handleLoginGoogle} >
            <Text style={styles.signupBtn} >
                Ingresar con GOOGLE
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
           color="transparent" type="outline"
          onPress={() => this.props.navigation.navigate('SignUp')}
          > 
          <Text style={styles.registerBtn} >
            ¿No tienes cuenta? ¡Regístrate!
          </Text>
          </TouchableOpacity>
      </View>
    </ScrollView>
)}
}
const heightConst = Dimensions.get('screen').height;
const styles = StyleSheet.create({
container: {
 height: heightConst - 50,
 justifyContent: 'center',
 alignItems: 'center'
},
headingSection: {
 borderColor: 1,
 textAlign: 'center',
 alignItems: 'center',
 marginBottom: 35
},
heading: {
 color: '#fff',
 fontSize: 20,
 marginBottom: 10,
 textAlign: 'center'
},
inputSize: {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#fff',
  height: 40,
  margin: 10,
  height: 48,
  borderColor: 'white',
  borderWidth: 1,
  backgroundColor: 'white',
  color: '#00B2FF',
  borderRadius: 5,
  paddingLeft: '5%',
  fontSize: 16,
  width: 280,
  shadowColor: 'rgba(0,0,0, .25)', // IOS
  shadowOffset: { height: 3, width: 3 }, // IOS
  shadowOpacity: 1, // IOS
  shadowRadius: 1, //IOS
},

signupBtn: {
  marginTop: 20,
  width: 246,
  height: 40,
  borderWidth: 1,
  padding: 10,
  borderColor: 'white',
  backgroundColor: 'white',
  color: "#00B2FF",
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
registerBtn: {
  marginTop: 20,
  width: 246,
  height: 40,
  borderWidth: 1,
  padding: 10,
  borderColor: 'white',
  backgroundColor: 'white',
  color: "#00B2FF",
  fontWeight: 'normal',
  borderRadius: 50, //android
  textAlign: "center",
  elevation: 2,//android
  shadowColor: 'rgba(0,0,0, .25)', // IOS
  shadowOffset: { height: 3, width: 3 }, // IOS
  shadowOpacity: 1, // IOS
  shadowRadius: 1, //IOS
  fontSize: 15,
},
buttonText: {
color: '#fff',
textAlign: 'center'
},
icons: {
  width: 25,
  height: 25,
  tintColor: 'rgba(0,0,0,0.2)',
  marginRight: 12,
},
})
