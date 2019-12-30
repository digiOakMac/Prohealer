import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store'
import 'semantic-ui-css/semantic.min.css'
import './index.css';
import Home from './routes/home';
import * as serviceWorker from './serviceWorker';

const Root = () => (
  <div>
    <Provider store={store}>
      <Home />
    </Provider>
  </div>
);

render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
