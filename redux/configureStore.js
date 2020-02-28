import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { pets } from './pets';
import { process } from './process';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            pets,
            process
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}