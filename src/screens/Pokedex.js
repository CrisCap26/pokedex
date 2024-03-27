import { View } from 'react-native';
import React, {useState, useEffect} from 'react';
import { getPokemonsApi, getPokemonDetailsByUrlApi } from '../api/pokemon';
import PokemonList from '../components/PokemonList';

export default function Pokedex() {
  const [pokemons, setPokemons] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);
  //console.log("--------->",pokemons)
  useEffect(() => {
    (
      async () => {
        await loadPokemons();
      }
    )()
  }, []);

  const loadPokemons = async () => {
    try {
      const response = await getPokemonsApi(nextUrl);
      setNextUrl(response.next);

      const pokemonsArray = [];
      for await (const pokemon of response.results) {
        const pokemonDetail = await getPokemonDetailsByUrlApi(pokemon.url);
        
        pokemonsArray.push({
          id: pokemonDetail.id,
          name: pokemonDetail.name,
          type: pokemonDetail.types[0].type.name,
          order: pokemonDetail.order,
          image: pokemonDetail.sprites.other['official-artwork'].front_default,
        });
      }
      setPokemons([...pokemons, ...pokemonsArray]);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <View style={{marginTop: 20}}>
      <PokemonList 
        pokemons={pokemons} 
        loadPokemons={loadPokemons}
        isNext={nextUrl} 
      />
    </View>
  )
}