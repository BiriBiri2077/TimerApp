import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity,StyleSheet, Text, View, ScrollView, Image, ImageBackground } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Contador from './contador';

export default function App() {

  console.disableYellowBox = true;
  const [alarm, setAlarm] = useState([
    {
      id:1,
      selecionado: true,
      som:'alarme1',
      file:'alarm1.mp3'
    },
    {
      id:2,
      selecionado: true,
      som:'alarme2',
      file:'alarm2.mp3'
    },
  ])

  const [state, setState] =useState('selecionar');
  const [sec,setSec] = useState(0);//constante do estado dos segundos
  const [min,setMin] = useState(1);//constantes dos estado dos minutos, ao selecionar um picker, ele buscará essas constantes


 var numeros = []; //variável dos números relacionados para minutos ou segundos
 for(var i = 1; i<=60; i++){ //o uso de i = 1; i<=60; i++ faz com que a cada numero que seja menor ou igual a 60, seja adicionado mais uma opção dinâmicamente
      numeros.push(i);
 }

 if(estado == 'setState'){
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
          <TouchableOpacity onPress={()=>setState('iniciar')} style={styles.btnIniciar}><Text style={{textAlign:'center', paddingTop:30, color:'white', fontSize:20}}>iniciar</Text></TouchableOpacity>
    </View>
  );
}else if(estado == 'iniciar'){ //se o estado for igual a 'iniciar' esta ação será atualizada
      return(
        <Contador setSec={setState} minutos={min} segundos={sec}></Contador> //o Contador buscara os segundos e minutos e os mostrará na tela
      );
};
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'orange',
    alignItems:'center',
    justifyContent:'center',
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
});
