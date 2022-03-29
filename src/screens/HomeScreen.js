import React, { useEffect } from 'react';
import { Button, FlatList, StyleSheet, View, Text, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import MovieDetail from '../components/MovieDetail';
import MovieSearchEngine from '../containers/MovieSearchEngine';
import { getFavoriteMovies, setFavoriteMovies } from '../redux/actions';

export default HomeScreen = ({ navigation }) => {
    const { movies } = useSelector(state => state.favorites);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFavoriteMovies());
    }, []);

    const removeFavorite = (imdbID) => {
        const movieList = movies.filter(m => m.imdbID !== imdbID);
        dispatch(setFavoriteMovies(movieList));
    }

    return (
        <View style={style.container}>
            <View style={style.headerContainer}>
                <Text style={style.text}>Favorite Movie List</Text>
                <Button title="Search" onPress={() => navigation.navigate("Search")} />
            </View>
            <FlatList
                data={movies}
                renderItem={({ item }) => {
                    return (
                        <View style={style.movieDetail}>
                            <MovieDetail itemDetail={item} buttonTitle='Remove' onPressFavoriteButton={() => removeFavorite(item.imdbID)} />
                        </View>
                    )
                }}
                keyExtractor={(item, index) => index.toString()}
            />
            {
                (!movies || movies?.length == 0) &&
                <Text>You have no favorite movie</Text>
            }
        </View>

    );
}
const style = StyleSheet.create({
    container: {
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
    },
    text: {
        color: '#000',
        fontWeight: '700',
        fontSize: 24
    },
    movieDetail: {
        borderBottomWidth: 1
    },
    image: {
        width: 50,
        height: 50,
        marginRight: 10
    },
    searchBar: {
        margin: 10,
        color: '#000',
        borderRadius: 5,
        backgroundColor: 'gray'
    }
});