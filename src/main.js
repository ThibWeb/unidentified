import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router';
import { Provider } from 'react-redux';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import routes from './routes';
import configureStore from './store/configureStore';

const mount = document.getElementById('mount');
const store = configureStore();
const history = createBrowserHistory();

const rootComponent = (
    <Provider store={store}>
        <Router routes={routes} history={history}/>
    </Provider>
);

ReactDOM.render(rootComponent, mount);
