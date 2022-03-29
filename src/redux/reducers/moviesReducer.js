import {
    SEARCH_MOVIES_FAILURE,
    SEARCH_MOVIES_REQUEST,
    SEARCH_MOVIES_SUCCESS,
    FETCH_MOVIE_DETAIL_FAILURE,
    FETCH_MOVIE_DETAIL_REQUEST,
    FETCH_MOVIE_DETAIL_SUCCESS,
} from '../actions/actionTypes'

const initialState = {
    loading: false,

    items: [],
    error: null,

    detailError: null,
    itemDetail: null
};

export default moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_MOVIES_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case SEARCH_MOVIES_FAILURE:
            const { error } = action.payload;
            return {
                ...state,
                loading: false,
                items: [],
                error,
            };
        case SEARCH_MOVIES_SUCCESS:
            const { items } = action.payload;
            return {
                ...state,
                items,
                loading: false,
                error: null,
            };
        case FETCH_MOVIE_DETAIL_REQUEST:
            return {
                ...state,
                loading: true,
                detailError: null,
            };
        case FETCH_MOVIE_DETAIL_FAILURE:
            const { detailError } = action.payload;
            return {
                ...state,
                loading: false,
                itemDetail: null,
                detailError: detailError,
            };
        case FETCH_MOVIE_DETAIL_SUCCESS:
            const { itemDetail } = action.payload;
            return {
                ...state,
                itemDetail,
                loading: false,
                detailError: null,
            };
        default:
            return state;
    }
}