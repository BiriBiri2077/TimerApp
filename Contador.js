import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity,StyleSheet, Text, View, ScrollView, Image, ImageBackground } from 'react-native';

export default function Contador(props) {

    return(
        <View style={{backgroundColor:'orange'}}>
            <View style={{flexDirection:'row'}}>
                <Text style={styles.textContador}>{props.min :}</Text>
                <Text style={styles.textContador}>{props.sec} :</Text>
            </View>

            <TouchableOpacity onPress={()=>setState('iniciar')} style={styles.btnIniciar}><Text style={{textAlign:'center', paddingTop:30, color:'white', fontSize:20}}>iniciar</Text></TouchableOpacity>
   
        </View>
    )

}

const styles = StyleSheet.create({

    container: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    textContador: {
        color:'white',
        fontSize:40
    },
    btnIniciar: {
        backgroundColor:'orange',
        width:100,
        height:100,
        borderRadius:50,
        marginTop:30,
        borderColor:'white',
        borderWidth:2,
      },

})

