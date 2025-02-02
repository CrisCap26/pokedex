import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import { map, capitalize } from "lodash"
import getColorByPokemonType from '../../utils/getColorByPokemonType';

export default function Type(props) {
    const { types } = props;

    return (
        <View style={styles.content}>
            {map(types, (item, index) => (
                <View key={index} style={{ ...styles.pill, backgroundColor: getColorByPokemonType(item.type.name) }}>
                    <Text style={styles.text}>{capitalize(item.type.name)}</Text>
                </View>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    pill: {
        paddingHorizontal: 30,
        paddingVertical: 5,
        borderRadius: 50,
        marginHorizontal: 10,
        backgroundColor: "#f0f",
    },
    text: {
        color: "white",
        fontWeight: "bold",
        fontSize: 18,
    }
});