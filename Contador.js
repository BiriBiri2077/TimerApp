import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity,StyleSheet, Text, View, ScrollView, Image, ImageBackground } from 'react-native';

export default function Contador(props) {

    return(
        <View><Text>{props.segundos}</Text></View>
    )

}

const styles = StyleSheet.create({

    container: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },

})

