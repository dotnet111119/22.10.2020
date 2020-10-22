import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {createStore} from 'redux';
import {Provider} from 'react-redux'
// this will provide our application with the store (wrap up)
import rootReducer from './reducers/rootReducer' 

const store = createStore(rootReducer)
console.log(store.getState())
ReactDOM.render(
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>,
  document.getElementById('root')
);


