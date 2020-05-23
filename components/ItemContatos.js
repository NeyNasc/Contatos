import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, Keyboard, Platform} from 'react-native';
import { CardContatos } from './CardContatos';
import { withNavigation } from 'react-navigation';
import Dimensoes from '../dimensions/Dimensoes'
import Paletas from '../color/Paletas'
import ButtonNavegacao from './ButtonNavegacao';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

const ItemContatos = (props) => {

    const confirmaExclusao = () => {
        Alert.alert(
            'Excluir',
            'Deseja mesmo excluir?',
            [
                {text: 'Sim', style: 'default', onPress: () => props.onDelete(props.chave)},
                {text: 'Não', style: 'default', onPress:  Keyboard.dismiss()},
            ]
        );
       
    }

    return(
        <TouchableOpacity onPress={() => props.onClick(props.chave)} onLongPress={confirmaExclusao}>
            <View styles={styles.item}>
                <CardContatos styles={styles.cartao}>
                <View style={styles.displayFlex}>
                    <Text style={styles.text}>  NOME : </Text><Text>{props.nome}</Text>
                </View>
                <View style={styles.displayFlex}>
                    <Text style={styles.text}>  TELEFONE : </Text><Text>{props.fone}</Text>
                </View>
                </CardContatos>
            </View>
        </TouchableOpacity>
    );
}



const styles = StyleSheet.create ({
    id: {
        fontSize: Dimensoes.quinze,     
        padding: Dimensoes.um,
        backgroundColor: Paletas.preto,
        textAlign: "center",
        fontWeight: "bold",
        color: Paletas.branco
    },
    item: {
        flexDirection: 'row',
    },
    displayFlex: {
        flexDirection: 'row'
    },
    cartao: {
        flexDirection: 'column',
        padding: Dimensoes.um,
        margin: Dimensoes.cinco,
        
    },
    text:{
        fontWeight: "bold",
        color: Paletas.preto,
        fontSize: Dimensoes.quinze,
        textAlign: 'left',
    },
});

export default withNavigation(ItemContatos);