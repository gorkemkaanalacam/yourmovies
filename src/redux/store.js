import {
    createStore,
    combineReducers,
    applyMiddleware,
    compose,
} from 'redux';
import moviesReducer from './reducers/moviesReducer';
import favoritesReduces from './reducers/favoritesReduces';
import thunk from 'redux-thunk';

const reducer = combineReducers({
    movies: moviesReducer,
    favorites: favoritesReduces,
});

const composeEnhancers = compose;

const store = createStore(reducer, composeEnhancers(
    applyMiddleware(thunk)),
);

export default store;