import store from './store/index'
import { Provider } from 'react-redux';
import AppNavigator from './navigation/index';

export default function App() {
    return (
        <Provider store={store}>
            <AppNavigator />
        </Provider>
    );
}
