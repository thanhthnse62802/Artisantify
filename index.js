import { registerRootComponent } from 'expo';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
import React from 'react'
import App from './src/routers/App';
import { Provider } from 'react-redux';
import { store } from "./src/redux/store"

const RNRedux = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}

registerRootComponent(RNRedux)

