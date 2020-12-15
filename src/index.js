import React from 'react';
import ReactDOM from 'react-dom';
//import { Provider } from 'react-redux';
//import { combineReducers, createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
//import productReducer from './store/reducers/products';
//import ProductProvider from './context/products-context';

// const rootReducer = combineReducers({
//   shop: productReducer
// });

//const store = createStore(rootReducer);

import configureProductsStore from './hooks-store/products-store';
import configureCounterStore from './hooks-store/counter-store';

configureProductsStore();
configureCounterStore();

ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  document.getElementById('root')
);
