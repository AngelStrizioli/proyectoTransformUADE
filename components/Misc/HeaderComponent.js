import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Header } from 'react-native-elements';

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
                    backgroundColor: '#00B2FF',
                    justifyContent: 'space-around',
                }}
                leftComponent={{icon: 'menu', color:'#fff'}}
                centerComponent={{ text: this.props.tittle, style: styles.headerTittle }}
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