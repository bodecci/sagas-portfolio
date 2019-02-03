import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { takeEvery, put} from 'redux-saga/effects';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('ADD_PORTFOLIO', postPORTFOLIO);
    yield takeEvery('FETCH_PORTFOLIO', getPortfolio);
}

function* getPortfolio(action) {
    try {
        const serverResponse = yield axios.get('/admin');
        const action = {type:'SET_PROJECTS', payload: serverResponse.data};
        yield put(action); //this triggers the reducer
    } catch (error) {
        console.log('Error in GET');
        alert('theres a problem in GET');
    }
}

function* postPORTFOLIO(action) {
    try {
        yield axios.post('/admin', action.payload);
        console.log('action.payload: ', action.payload);
        
        const nextAction = {type: 'FETCH_PORTFOLIO'};
        yield put(nextAction);
    } catch (error) {
        console.log('Error in making POST');
        alert(`there was a problem in POST`);
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store projects returned from the server
const projects = (state = [], action) => {
    switch (action.type) {
        case 'SET_PROJECTS':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the project tags (e.g. 'React', 'jQuery', 'Angular', 'Node.js')
const tags = (state = [], action) => {
    switch (action.type) {
        case 'SET_TAGS':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        projects,
        tags,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
