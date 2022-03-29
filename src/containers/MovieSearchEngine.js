import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { searchMovies } from '../redux/actions';

export default MovieSearchEngine = ({ navigation }) => {
    const { items, loading, error } = useSelector(state => state.movies);
    const dispatch = useDispatch();

    const onSearch = (item) => {
        if (item) {
            dispatch(searchMovies(item));
        }
    }

    return (
        <View>
            <TextInput placeholder='Search...' style={style.searchBar} onChangeText={onSearch} />
            {
                error && <Text style={style.text}>{error}</Text>
            }
            {
                loading ?
                    <ActivityIndicator size={32} />
                    :
                    <FlatList
                        contentContainerStyle={style.flatListContentContainer}
                        data={items}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity onPress={() => navigation.navigate("Details", { imdbID: item.imdbID })}>
                                    <View style={style.listItemContainer}>
                                        <Image source={{ uri: item.Poster }} style={style.image} />
                                        <Text style={style.text}>{item.Title}</Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        }}
                        keyExtractor={(item, index) => index.toString()}
                    />
            }
        </View>
    );
}

const style = StyleSheet.create({
    text: {
        color: '#000'
    },
    listItemContainer: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1,
        alignItems: 'center'
    },
    image: {
        width: 50,
        height: 50,
        marginRight: 10
    },
    searchBar: {
        margin: 10,
        padding: 5,
        color: '#000',
        borderRadius: 5,
        backgroundColor: 'gray'
    }
});