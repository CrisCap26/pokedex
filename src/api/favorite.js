import AsyncStorage from "@react-native-async-storage/async-storage";
import { includes, pull } from "lodash";
import { FAVORITE_STORAGE } from "../utils/constants";

export async function getPokemonsFavoriteApi() {
    try {
        const response = await AsyncStorage.getItem(FAVORITE_STORAGE);
        return JSON.parse(response || "[]");
        //return response ? JSON.parse(response) : [];
    } catch (error) {
        throw error;
    }
}

export async function addPokemonFavoriteApi(id) {
    try {
        //const favorites = [];
        // favorites.push(id);
        // const response = JSON.parse(await AsyncStorage.getItem(FAVORITE_STORAGE));
        // console.log(response, "ressss")
        // let newFavs;
        // if (response?.length > 0) {
        //     let arr =  [...response, ...favorites];
        //     const arrSinRepetidos = new Set(arr);
        //     newFavs = [...arrSinRepetidos];
        // } else {
        //     newFavs = [...favorites];
        // }
        // console.log("FAV", newFavs)
        const favorites = await getPokemonsFavoriteApi();
        favorites.push(id);
        console.log("Favorites", favorites)
        await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorites));
    } catch (error) {
        throw error;
    }
}

export async function isPokemonFavorite(id) {
    try {
        const response = await getPokemonsFavoriteApi();
        const isFav = includes(response, id);
        //const isFav = response?.includes(id);
        return isFav;
    } catch (error) {
        throw error;
    }
}

export async function removePokemonFavoriteApi(id) {
    try {
        const favorites = await getPokemonsFavoriteApi();
        const newFavorites = pull(favorites, id);
        await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(newFavorites));
    } catch (error) {
        throw error;
    }
}