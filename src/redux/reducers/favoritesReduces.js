import {
    SET_FAVORITE_MOVIES
} from '../actions/actionTypes'

const initialState = {
    movies: []
};

export default favoritesReduces = (state = initialState, action) => {
    switch (action.type) {
        case SET_FAVORITE_MOVIES:
            const { data } = action.payload;
            return {
                ...state,
                movies: data
            };
        default:
            return state;
    }
}