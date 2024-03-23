import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { addPokemonFavoriteApi, getPokemonsFavoriteApi } from '../../api/favorite';

export default function Favorite(props) {
    const { id } = props;
    const addFavorite = async () => {
        console.log(id)
        await addPokemonFavoriteApi(id);
    }
    return (
        <Icon
            name="heart"
            color="#fff"
            size={30}
            onPress={addFavorite}
            style={{ marginRight: 20, }}
        />
    )
}