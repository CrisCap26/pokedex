import { StyleSheet, View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { capitalize } from 'lodash';
import { useNavigation } from '@react-navigation/native';
import getColorByPokemonType from '../utils/getColorByPokemonType';

export default function PokemonCard(props) {
    const { pokemon } = props;
    const navigation = useNavigation();
    const pokemonColor = getColorByPokemonType(pokemon.type);
    const bgStyles = { backgroundColor: pokemonColor, ...styles.bgStyles}

    //console.log(pokemon.imagen)
    const goToPokemon = () => {
        //console.log(`Vamos al pokemon: ${pokemon.id}`)
        navigation.navigate("Pokemon", {id: pokemon.id, name: pokemon.name});
    }

    return (
        <TouchableWithoutFeedback onPress={goToPokemon}>
            <View style={styles.card}>
                <View style={styles.spacing}>
                    <View style={bgStyles}>
                    <Text style={styles.number}>#{`${pokemon.order}`.padStart(3, 0)}</Text>
                    <Text style={styles.name}>{capitalize(pokemon.name)}</Text>
                        <Image
                            source={{ uri: pokemon.image }}
                            style={styles.image}
                        />
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        height: 130,
        //marginTop: 15
        // top: 25,
        // bottom: 10
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    spacing: {
        flex: 1,
        padding: 5
    },
    bgStyles: {
        flex: 1,
        borderRadius: 15,
        padding: 10
    },
    number: {
        position: "absolute",
        right: 10,
        top: 10,
        color: "#fff",
        fontSize: 11
    },
    name: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
        paddingTop: 10,
        //textTransform: "capitalize"
    },
    image: {
        position: "absolute",
        bottom: 2,
        right: 2,
        width: 90,
        height: 90,
    },
})