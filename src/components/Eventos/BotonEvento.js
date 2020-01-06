import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet, Image, View } from 'react-native';

export default class BotonEvento extends React.Component {


    render() {
        const { navigation } = this.props;
        const evento = this.props.evento;
        return (
            <View style={{width: '80%', alignSelf:'center'}}>
                <TouchableOpacity style={{ backgroundColor: 'white', marginHorizontal: '2%'}}>
                    <View style={{ justifyContent: 'center' }}>
                        <Text style={{ fontSize: 18, color: 'black' }}>
                            {evento.title}
                        </Text>
                        <Image source={{ uri: evento.img }} style={{ width: 80, height: 80 }} />
                    </View>
                </TouchableOpacity>
            </View>);
    }
}