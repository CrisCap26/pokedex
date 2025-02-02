import { StyleSheet, FlatList, ActivityIndicator, Platform } from 'react-native'
import React from 'react'
import PokemonCard from './PokemonCard';

export default function PokemonList(props) {
  const { pokemons, loadPokemons, isNext } = props;
  console.log(Platform.OS, "Platform")
  const loadMore = () => {
    loadPokemons();
    //console.log("Cargando mas pokemons...")
  }

  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      contentContainerStyle={styles.flatListContentcontainer}
      onEndReached={isNext && loadMore}
      onEndReachedThreshold={0.1}
      ListFooterComponent={
        isNext && (
          <ActivityIndicator
            size="large"
            style={styles.spinner}
            color="#AEAEAE"
          />
        )
      }
    />
  )
}

const styles = StyleSheet.create({
  flatListContentcontainer: {
    paddingHorizontal: 5,
    paddingVertical: 25,
    //marginTop: Platform.OS === 'android' ? 22 : 0,

  },
  spinner: {
    marginTop: 20,
    marginBottom: Platform.OS === "android" ? 60 : 40,
  }
})