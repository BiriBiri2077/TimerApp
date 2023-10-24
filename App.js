import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity,StyleSheet, Text, View, ScrollView, Image, ImageBackground } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function App() {

  const [sec,setSec] = useState(0);//constante do estado dos segundos
  const [min,setMin] = useState(0);//constantes dos estado dos minutos, ao selecionar um picker, ele buscará essas constantes


 var numeros = []; //variável dos números relacionados para minutos ou segundos
 for(var i = 1; i<=60; i++){ //o uso de i = 1; i<=60; i++ faz com que a cada numero que seja menor ou igual a 60, seja adicionado mais uma opção dinâmicamente
      numeros.push(i);
 }

  return (
    <View style={styles.container}>
      <Text style={{color:'white', fontSize:30}}>texto</Text>
      <View style={{flexDirection:'row'}}>
        <Text style={{color:'white'}}>min:</Text>
      <Picker //o picker será utilizado como um armazém para os valores de minutos e segundos, um "selecionador"
        selectedValue={min}
        onValueChange={(itemValue) => setMin(itemValue) }
        style={{height:50, width:120, color:'white'}}
      >
          {
            numeros.map(function(val){ // a função map faz com que os objetos da váriavel sejam listados
              return(<Picker.Item label={val.toString()} value={val.toString()} />) //o picker pega essas informações e as converte em strings próprias
            })
          }
      </Picker>
      <Text style={{color:'white'}}>seg:</Text>
      <Picker //picker dos segundos
      selectedValue={sec}
      onValueChange={(itemValue) => setSec(itemValue) }
        style={{height:50, width:120, color:'white'}}
        >
          <Picker.Item label='0' value='0' />
          {
            numeros.map(function(val){
              return(<Picker.Item label={val.toString()} value={val.toString()} />)
            })
          }
      </Picker>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'orange',
    alignItems:'center',
    justifyContent:'center',
  },

  botao: {
    fontSize:20
  },
});
