import React from 'react';
import ReactDOM from 'react-dom';
// components imports
import './index.css';
import App from './App';
// Router Imports
import { BrowserRouter as Router} from 'react-router-dom';
// Redux Imports
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import booksReducer from './reducers'
import * as serviceWorker from './serviceWorker';

//const dummyReducer = (state = [], action) => state; //extract into it's own file.
//first argument is the state, 2nd is the action that returns a modified state/

const store = createStore(booksReducer);

ReactDOM.render(
    (
    <Provider store={store} /*Provider takes store as a prop to connect redux to react*/>
        <Router>
            <App />
        </Router>
    </Provider>
    )
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
