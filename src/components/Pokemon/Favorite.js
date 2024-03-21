import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

export default function Favorite(props) {
    const { id } = props;
    const addFavorite = () => {
        console.log("Añadir a favoritos", id)
    }
    return (
        <Icon 
            name="heart" 
            color="#fff" 
            size={30} 
            onPress={addFavorite} 
            style={{marginRight: 20, }} 
        />
    )
}