import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';

export default MovieDetail = ({ itemDetail, buttonTitle, onPressFavoriteButton }) => {

    return (
        <View style={style.headerContainer}>
            <Image source={{ uri: itemDetail.Poster }} style={style.image} />
            <View style={style.informationContainer}>
                <Text style={style.headerText}>{itemDetail.Title}</Text>
                <Text>{itemDetail.Plot}</Text>
                <Text style={style.imdbText}>IMDB: {itemDetail.imdbRating}</Text>
                <Button title={buttonTitle} onPress={onPressFavoriteButton} />
            </View>
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