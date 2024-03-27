import React, { useState, useCallback } from 'react'
import { Text } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import { getPokemonsFavoriteApi } from '../api/favorite'
import { getPokemonDetailsApi } from '../api/pokemon'
import useAuth from '../hooks/useAuth'
import PokemonList from '../components/PokemonList'

export default function Favorite() {
  const [pokemons, setPokemons] = useState([]);
  const { auth } = useAuth();

  useFocusEffect(
    useCallback(() => {
      if (auth) {
        (async () => {
          const response = await getPokemonsFavoriteApi();
          console.log(response, "UseEff")

          const pokemonsArray = [];
          for await (const id of response) {
            const pokemonDetail = await getPokemonDetailsApi(id);

            pokemonsArray.push({
              id: pokemonDetail.id,
              name: pokemonDetail.name,
              type: pokemonDetail.types[0].type.name,
              order: pokemonDetail.order,
              image: pokemonDetail.sprites.other['official-artwork'].front_default,
            });
          }

          setPokemons(pokemonsArray);
        })()
      }
    }, [auth])
  )


  return !auth ?
    (<Text>Usuario no logueado</Text>)
    :
    (<PokemonList pokemons={pokemons} />)
}