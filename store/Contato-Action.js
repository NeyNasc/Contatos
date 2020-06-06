export const ADD_CONTATO = 'ADD_CONTATO';
export const LISTA_CONTATOS = 'LISTA_CONTATOS';

export const listarContatos = () => {
    return async dispatch => {
        try {
            dispatch({ type: LISTA_CONTATOS, contatos: resultadoDB.rows._array });

        }
        catch (err) {
            console.log(err);
            throw err;
        }
    }
}



export const criarContato = ( nome, fone, imagem) => {
    
    return {type: ADD_CONTATO, contato: {nome: nome, fone: fone, imagem: imagem }}
}