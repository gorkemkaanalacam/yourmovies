import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator, Alert, Button } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import TopListOfArtists from '../components/MovieDetail';
import { setFavoriteMovies, fetchMovieDetail } from '../redux/actions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MovieDetail from '../components/MovieDetail';

export default DetailsScreen = ({ route }) => {
    const { movies } = useSelector(state => state.favorites);
    const { itemDetail, detailError, loading } = useSelector(state => state.movies);
    const dispatch = useDispatch();

    const imdbID = route.params.imdbID;

    useEffect(() => {
        dispatch(fetchMovieDetail(imdbID));
    }, []);

    useEffect(() => {
        if (detailError)
            Alert.alert('Error', detailError);
    }, [detailError]);

    const addFavorite = () => {
        if (movies?.some(m => m.imdbID === itemDetail.imdbID)) {
            Alert.alert("Notice", "The movie has already added");
        }
        else {
            if (movies)
                dispatch(setFavoriteMovies([...movies, itemDetail]));
            else
                dispatch(setFavoriteMovies([itemDetail]));

            Alert.alert("Success", "The movie added successfully");
        }
    }

    return (
        <View style={style.container}>
            {
                loading ?
                    <ActivityIndicator size={32} />
                    :
                    itemDetail && <MovieDetail itemDetail={itemDetail} buttonTitle='Add Favorite' onPressFavoriteButton={addFavorite} />
            }
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        padding: 10,
        flexDirection: 'row'
    },
    informationContainer: {
        width: '65%',
        paddingLeft: 10
    },
    image: {
        width: '35%',
        height: 200,
        resizeMode: 'contain'
    },
    headerText: {
        fontWeight: '700',
        marginVertical: 10
    },
    imdbText: {
        marginTop: 18,
        fontWeight: '700',
        fontSize: 20,
        marginBottom: 20
    }
});