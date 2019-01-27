import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

//import Redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const defaultState = {
                    //state will also include feeling(number)
                    //                        understanding(number)
                    //                        supported(number)
                    comments: '',
};
const feedbackReducer = (state = defaultState, action) => {

    if(action.type === 'SET_FEELING'){
        return {...state, feeling: action.payload}
    }
    else if(action.type === 'SET_UNDERSTANDING'){
        return {...state, understanding: action.payload}
    }
    else if(action.type === 'SET_SUPPORTED'){
        return {...state, supported: action.payload}
    }
    else if(action.type === 'SET_COMMENTS'){
        return {...state, comments: action.payload}
    }

    return state;
}

const storeInstance = createStore(
    feedbackReducer,
    applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
