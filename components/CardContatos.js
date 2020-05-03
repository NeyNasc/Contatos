import React from 'react';
import {View, StyleSheet} from 'react-native';
import Paletas from '../color/Paletas';
import Dimensoes from '../dimensions/Dimensoes';

const CardContatos = (props) => {
    return (
        <View style={{...estilos.perfil, ...props.estilos}}>{props.children}</View>
        );
};

const estilos = StyleSheet.create({
    perfil:{
        margin: Dimensoes.dois,
        padding: Dimensoes.cinco,
        borderRadius: Dimensoes.dez,

    },
});

export default CardContatos;