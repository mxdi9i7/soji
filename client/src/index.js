import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './reducers/index.js'
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';

// import { PersistGate } from 'redux-persist/integration/react'
// import configureState from './configureState'
// const { store, persistor} = configureState()

ReactDOM.render(
    <Provider store={store}>
        {/* <PersistGate loading={null} persistor={persistor}> */}
            <App />
        {/* </PersistGate> */}
    </Provider>
, document.getElementById('root'));
registerServiceWorker();
