import {configureStore} from '@reduxjs/toolkit';
import { postReducer } from './reducers/postReducer';

const initialState = {
    posts : {
        posts : [],
        loading: false,
        error: null
    }
}

export const store = configureStore({
    reducer: {
        posts : postReducer,
    },
    preloadedState : initialState
});