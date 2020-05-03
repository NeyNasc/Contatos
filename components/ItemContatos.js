import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import  Paletas from '../color/Paletas';
import CardContatos from './CardContatos';
import Dimensoes from '../dimensions/Dimensoes';

const ItemContatos =(props) => {

return(
    <TouchableOpacity onLongPress={props.del.bind(this, props.keys)}>
    
            <View style={estilos.lista}>
              <Text style={estilos.id}>{'ID: '+props.keys}</Text>
              <Text>{'NOME :  '+props.contato}</Text>
              <Text>{'TEL  :   '+props.telefone}</Text>
            </View>
            
    </TouchableOpacity>

);
}

const estilos = StyleSheet.create({
  lista: {
    margin: Dimensoes.dois,
    padding: Dimensoes.quinze,
    borderRadius: Dimensoes.dez,
    
    backgroundColor: Paletas.lista,
    flexDirection: "column",
    borderColor: Paletas.branco,
  
  },

  id: {
    fontSize: Dimensoes.vinte,
    marginBottom: Dimensoes.zero,      
    padding:1,
    backgroundColor: Paletas.id,
    textAlign: "center",
    fontWeight: "bold",
    color: Paletas.branco
  },

});

export default ItemContatos;