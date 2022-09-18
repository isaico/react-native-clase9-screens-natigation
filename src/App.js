import store from './store/index';
import { init } from './db';
import { Provider } from 'react-redux';
import AppNavigator from './navigation/index';

init()
    .then(console.log('Base de datos inicializada'))
    .catch(() => {
        console.log('Base de datos fallo la inicializacion'), err; 
    });

export default function App() {
    return (
        <Provider store={store}>
            <AppNavigator />
        </Provider>
    );
}
