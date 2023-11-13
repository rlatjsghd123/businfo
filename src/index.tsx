import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/style/reset.scss';
import Home from './content/home';
import store from './store/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <>
    <Provider store={store}>
      <Home />
    </Provider>
  </>,
);
