import React, { useState } from 'react';
import {View, TextInput,StyleSheet,Button, Platform } from 'react-native';
import Paletas from '../color/Paletas';
import Dimensoes from '../dimensions/Dimensoes'
import ButtonNavegacao from './ButtonNavegacao';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { withNavigation } from 'react-navigation';



const InputContatos = (props) => {
    const [nome, setNome] = useState ('');
    const [fone, setFone] = useState('');
    const mudouNome = (nome) => {setNome (nome);}
    const mudouFone = (fone) => {setFone(fone);}

    function limpaEnvia(){
        props.salvar(nome, fone);
        setFone('');
        setNome('');
    }

    return (
        
            <View style={styles.item}> 
                <TextInput style={styles.input} placeholder="NOME" value={nome} onChangeText={mudouNome}/>
                <TextInput style={styles.input} placeholder="TELEFONE" value={fone} onChangeText={mudouFone} keyboardType={'numeric'}/>
                <View style={styles.buttons}>
                    <View style={styles.buttons}>
                        <Button title="Salvar" onPress={limpaEnvia} color={Paletas.principal}/>
                    </View>
                    <View style={styles.buttons}> 
                        <Button  title="Voltar" onPress={() => props.voltar()} color={Paletas.cinza}/>
                    </View>
                </View>
            </View>
         
    );
}



InputContatos.navigationOptions = dadosNav => {
    return {
    headerTitle: "Adicionar",
    headerRight:
    <HeaderButtons
    HeaderButtonComponent={ButtonNavegacao}>
    <Item
        title="Adicionar"
        iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
        onPress={() => { dadosNav.navigation.navigate("Adicionar") }} />
    </HeaderButtons>
    }
}

const styles = StyleSheet.create({
    buttons: {
        flexDirection: 'row', 
        margin: 6
    },
    component: {
       backgroundColor: Paletas.planoFundo 
    },
    input:{
        color: Paletas.preto,
        padding: Dimensoes.dois,
        borderColor: Paletas.preto,
        margin:Dimensoes.cinco,
        borderColor: Paletas.preto,
        marginBottom: Dimensoes.quinze,
        backgroundColor: Paletas.cinza

    },
    tableHeader: {
        fontWeight: 'bold',
        marginBottom: Dimensoes.dez,
        color: Paletas.principal
    },
    displayFlex: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    item:{
    color: Paletas.cinza,
    padding: Dimensoes.dois,
    borderColor: Paletas.preto,
    margin:Dimensoes.cinco,
    }
});


export default withNavigation(InputContatos);