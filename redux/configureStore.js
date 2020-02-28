import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { pets } from './pets';
import { process } from './process';
import { favorites } from './favorites';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            pets,
            process,
            favorites
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}