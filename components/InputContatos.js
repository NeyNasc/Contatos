import React, {useState} from 'react';
import {View, TextInput, StyleSheet, TouchableOpacity,Button} from 'react-native';
import Paletas from '../color/Paletas';
import Dimensoes from '../dimensions/Dimensoes';

const InputContatos =(props)=>{
  /*ELEMENTOS ESTADO */
  const [contato, setContato]     = useState('');
  const [telefone, setTelefone]   = useState('');

  /*CAPTURAS */
  const capturaTelefone = (telefone) =>{setTelefone(telefone);}
  const capturaContato = (contato) =>{setContato(contato);}

    return(
        
      
      <View style = {estilos.cadastro}>
        <TextInput placeholder="Nome" style={estilos.cadastro} maxLength={Dimensoes.dez} onChangeText={capturaContato}value={contato} />
        <TextInput placeholder="(XX) XXXXX - XXXX " keyboardType="number-pad" maxLength={Dimensoes.onze} style={estilos.cadastro} onChangeText={capturaTelefone}value={telefone}/>
        <Button title="Adicionar"onPress={()=>props.add(contato,telefone)}color={Paletas.id}/>
      </View>
    );

}

const estilos = StyleSheet.create({
    cadastro: {
        fontSize:Dimensoes.vinte,
        borderWidth: Dimensoes.dois,
        marginBottom:Dimensoes.cinco,
        padding: Dimensoes.tres
    
      },
      

});

export default InputContatos;