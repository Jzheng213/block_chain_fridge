//React
import React from 'react';
import ReactDOM from 'react-dom';
//Components
import Root from './components/root';
// import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  // let store = configureStore(preloadedState);
  let store;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
