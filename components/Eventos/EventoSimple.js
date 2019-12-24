import React, {Compo} from 'react';
import { StyleSheet, ScrollView, View, Text, Dimensions, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

class EventoSimple extends React.Component {

  static navigationOptions = {
    title: 'Todos los eventos',
    header: null,
    drawerIcon: ({ focused }) => (
      <Ionicons name="md-globe" size={24} color={focused ? '#00B2FF' : 'black'} />
    ),
  };

  constructor(props) {
    super(props);
  }

  render(){
    const { navigation } = this.props;

    return(
      <ScrollView style={styles.container}>
        <View>
          <Text style={styles.titleStyle}>TITULO</Text>
           <Image source = {'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.diariodecultura.com.ar%2Fwp-content%2Fuploads%2F2019%2F05%2Fcultura-5.jpg&f=1&nofb=1'} />
      </View>
        <View>
          <Text style={styles.subtitleStyle}>Subtitulo</Text>
          <Text style={styles.textStyle}>Texto de descripcion para un supuesto subtitulo que va a subtitular cosas subtituladas al subtitulado</Text>
        </View>
        <View style={styles.compoPosition}>
          <TouchableOpacity onPress={() => { navigation.goBack()}}>
            <Text style={styles.buttonDesigne}> Volver</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'white'
  },
  compoView:{
      marginVertical: '5%'
  },
  titleStyle: {
      padding: '10%',
      fontSize: 26,
      fontWeight: 'bold',
      textAlign: 'center'
  },
  subtitleStyle: {
      fontSize: 20,
      fontWeight: 'bold',
      padding: '4%'
  },
  textStyle:{
      paddingHorizontal:'5%',
      fontSize:18,
      textAlign:'justify',
      lineHeight:26
  },
  buttonDesigne: {
    color: "white",
    fontSize: 24,
    textAlign: "center",
    textAlignVertical: 'center',
    backgroundColor: '#00B2FF',
    width: 300,
    height: 55,
    borderRadius: 50,
    marginBottom:'5%'
  }
})

export default EventoSimple;
