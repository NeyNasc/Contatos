import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import InputContatos from '../components/InputContatos';
import EditContato from '../components/EditContato';
import ViewContato from '../components/ViewContato';
import ItemContatos from '../components/ItemContatos';
import Main from '../components/Main';
import Paletas from '../color/Paletas';

const Navigation = createStackNavigator({
    CONTATOS: Main,
    Criar: InputContatos,
    Editar: EditContato,
    Item: ItemContatos,
    Exibir: ViewContato
}, { defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: 'white'
    },
    headerTintColor: Platform.OS === 'android' ? Paletas.principal : Paletas.principal
    }
});

export default createAppContainer(Navigation);