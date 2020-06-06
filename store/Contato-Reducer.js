import { ADD_CONTATO } from './Contato-Action';
import Contato from '../modelo/Contato';

const estadoInicial = {
    contatos: []
};

export default (estado = estadoInicial, action) => {
    switch (action.type) {
        case ADD_CONTATO:
            let id;
            if (estado.contatos === null || estado.contatos.length === 0){
                id = 10;
            }else{
                let maior = 0;
                for(let i = 0 ; i < estado.contatos.length; i++){
                    if(estado.contatos[i].id > maior){
                        maior = estado.contatos[i].id;
                    }
                }
                id = maior + 2
            }
            const contato = new Contato(id, action.contato.nome, action.contato.fone, action.contato.imagem);
            console.log("@contato reducer", JSON.stringify(contato))
            return {
                contatos: estado.contatos.concat(contato)
            };
        default:
            return estado;
    }
}

