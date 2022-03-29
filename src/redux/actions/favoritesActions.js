import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    SET_FAVORITE_MOVIES,
} from './actionTypes';

export const setFavoriteMovies = (data) => (dispatch) => {
    AsyncStorage.setItem('FavoriteMovies', JSON.stringify(data));
    dispatch({
        type: SET_FAVORITE_MOVIES,
        payload: {
            data,
        },
    });
}

export const getFavoriteMovies = () => async (dispatch) => {
    const result = await AsyncStorage.getItem('FavoriteMovies');
    const data = JSON.parse(result);
    dispatch({
        type: SET_FAVORITE_MOVIES,
        payload: {
            data,
        },
    });
}