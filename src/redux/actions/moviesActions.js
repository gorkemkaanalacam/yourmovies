import {
    SEARCH_MOVIES_FAILURE,
    SEARCH_MOVIES_REQUEST,
    SEARCH_MOVIES_SUCCESS,
    FETCH_MOVIE_DETAIL_FAILURE,
    FETCH_MOVIE_DETAIL_REQUEST,
    FETCH_MOVIE_DETAIL_SUCCESS,
} from './actionTypes';

export const searchMoviesRequest = () => ({
    type: SEARCH_MOVIES_REQUEST,
});

export const searchMoviesFailure = error => ({
    type: SEARCH_MOVIES_FAILURE,
    payload: {
        error,
    },
});

export const searchMoviesSuccess = (items) => ({
    type: SEARCH_MOVIES_SUCCESS,
    payload: {
        items,
    },
});

export const fetchMovieDetailRequest = () => ({
    type: FETCH_MOVIE_DETAIL_REQUEST,
});

export const fetchMovieDetailFailure = detailError => ({
    type: FETCH_MOVIE_DETAIL_FAILURE,
    payload: {
        detailError,
    },
});

export const fetchMovieDetailSuccess = (itemDetail) => ({
    type: FETCH_MOVIE_DETAIL_SUCCESS,
    payload: {
        itemDetail,
    },
});

export const searchMovies = (term) => async (dispatch) => {
    dispatch(searchMoviesRequest());
    try {
        const response = await fetch(`https://omdbapi.com/?apikey=cb248ece&s=${term}`);
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const data = await response.json();
        if (data.Response === "True") {
            dispatch(searchMoviesSuccess(data.Search));
        }
        else {
            dispatch(searchMoviesFailure(data.Error));
        }
    } catch (e) {
        dispatch(searchMoviesFailure(e.message));
    }
}

export const fetchMovieDetail = (id) => async (dispatch) => {
    dispatch(fetchMovieDetailRequest());
    try {
        const response = await fetch(`https://omdbapi.com/?apikey=cb248ece&i=${id}`);
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const data = await response.json();
        if (data.Response === "True") {
            dispatch(fetchMovieDetailSuccess(data));
        }
        else {
            dispatch(fetchMovieDetailFailure(data.Error));
        }
    } catch (e) {
        dispatch(fetchMovieDetailFailure(e.message));
    }
}