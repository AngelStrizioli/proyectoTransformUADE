import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Header } from 'react-native-elements';
import { DrawerActions } from 'react-navigation-drawer';
import { themeMainColor } from '../../styles/globalStyles';

class LogoHeader extends React.Component {
    render() {
      return (
        <View style={{ alignSelf: 'center', flex: 1 }}>
          <Image
            resizeMode="cover"
            source={require("../../assets/images/LogoHorizontal.png")}
            style={{
              width: 240,
              height: 50,
              resizeMode: 'contain',
            }}
          />
        </View>
      );
    }
  }
  class DrawerNav extends React.Component{
    constructor(props) {
        super(props);
       
      }
      render(){
          return(
            <View>

            <TouchableOpacity 
              onPress={({ navigation }) => {navigation.dispatch(DrawerActions.openDrawer())}}>

              <Ionicons name="md-menu" size={24} color={'white'} />

            </TouchableOpacity>
            </View>  
            );
      }
  }

export default class HeaderComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return(
            <Header 
                statusBarProps={{ barStyle: 'light-content' }}
                barStyle="light-content"
                containerStyle={{
            //        backgroundColor: '#FDD835',
                    backgroundColor: themeMainColor,
                    justifyContent: 'space-around',
                }}
                leftComponent={<DrawerNav />}
                centerComponent={<LogoHeader />}
                rightComponent={{ icon: 'search', color: '#fff' }}
            />
                
        );
    }
}

const styles = StyleSheet.create({
    headerView: {
        flex: 0.12,
        paddingTop:10,
        backgroundColor: '#FDD835',
        width: '100%',
    }, 
    headerTittle: {
        color: '#F5F5F5',
        fontWeight: '600',
        fontSize: 24,
    },
    headerIcon: {
        height: '100%',
        flexDirection: "row",
        position: "absolute",
        alignSelf: "flex-start",
        paddingHorizontal: '5%',
        backgroundColor: 'blue'
    },
});