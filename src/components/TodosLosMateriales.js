//https://snack.expo.io/@dinithminura/drawer-navigation?session_id=snack-session-DKu05jLVS
import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MaterialEsReciclable from './MaterialEsReciclable';
import ApiController from '../controller/ApiController';
import { Divider } from 'react-native-elements';
import { themeMainColor, globalStyle, footerContent } from '../styles/globalStyles';


function compareMaterial(mat1, mat2) {
  let res = 0
  if (mat1.id > mat2.id) {
    res = 1;
  } else if (mat2.id > mat1.id) {
    res = -1;
  }
  return res;
}


class TodosLosMateriales extends React.Component {
  static navigationOptions = {
    title: 'Materiales',


    drawerIcon: ({ focused }) => (
      <Ionicons name="md-cube" size={24} color={focused ? themeMainColor : 'black'} />
    ),

  };
  constructor(props) {
    super(props)
    this.state = { materiales: [] }
  }

  componentDidMount() {
    ApiController.getMateriales(this.handleMateriales.bind(this));
  }

  handleMateriales(listaMateriales) {
    this.setState({ materiales: listaMateriales });
  }

  render() {
    let materiales = this.state.materiales;
    materiales.sort(compareMaterial);
    return (
      <ScrollView>
        <Text style={footerContent.titleStyle}>Materiales</Text>
        <Divider style={{ backgroundColor: 'black' }} />
        <View>
          {materiales.map((material) => {

            return (
              <View key={material.name}>
                <MaterialEsReciclable key={material.id} material={material} navigation={this.props.navigation} />
              </View>
            )
          })}
        </View>

      </ScrollView>

    );
  }
}


export default TodosLosMateriales;