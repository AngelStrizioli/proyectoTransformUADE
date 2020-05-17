import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { Divider } from 'react-native-elements';
import MaterialCompleto from './MaterialCompleto';
import { Icon } from 'native-base';
import getProductosByMaterial from '../controller/ApiController'
import ApiController from '../controller/ApiController'
import { Col, Row, Grid } from "react-native-easy-grid";

import { themeMainColor } from '../styles/globalStyles';
class MaterialEsReciclable extends React.Component{
  constructor(props){
    super(props);
    this.state = { 
    }
  }
    
    render(){
      const { navigation } = this.props;
      const colorTitle = this.props.colorTitle
      const { material } = this.props;
        
          return(
            <View> 
              <TouchableOpacity style={styles.containerMaterial} onPress={() => { navigation.navigate('MaterialCompleto',  {material:  material}) }}>
                  <Grid>
                    <Row>

                      <Col size={10}>
                        <Image title='Icono Material' source={{ uri: material.logo }} style={{height: 50, width: 50}} />
                        </Col>
                        <Col size={30} style={{}}>
                         <Text style={{fontSize:14,marginTop:'9%' ,textAlign:'left', color: themeMainColor, marginLeft:'3%'}}>{material.name}</Text>
                         </Col>
                         <Col size={10} style={{marginTop:'4%', alignItems:'flex-end'}}> 
                          <Ionicons name="md-arrow-round-forward" size={30} color={'black'} />
                          </Col>

                      </Row>
                  </Grid>
                    
              </TouchableOpacity>

            </View>
          );
          
    }
  }

  const styles = StyleSheet.create({
    
    textStyle:{
      //padding:'4%',
      fontSize:18,
      textAlign:'center'
    },
    subtitleStyle: {
      fontSize: 20,
      fontWeight: 'bold',
      padding: '4%',
      //textAlign: "center" 
    },
    containerMaterial:{
      padding: '5%',
      //borderColor: '#6DCAF280',
      //borderWidth: 1,
      width:'100%',
      
    },

     
  })
  
  export default MaterialEsReciclable;