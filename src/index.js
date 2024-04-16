import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './Components/Game';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { store } from './store/store';


// Ici on appelle le composant Game qui est la base de notre application React 
ReactDOM.render(
<Provider store={store}>
   <Game />
</Provider>,
document.getElementById('root')
);

serviceWorker.unregister();
