import React from 'react'
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome5';
import AccountNavigation from './AccountNavigation';
import PokedexNavigation from './PokedexNavigation';
import FavoriteNavigation from './FavoriteNavigation';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen 
            name="favorite" 
            component={FavoriteNavigation} 
            options={{
                tabBarLabel: "Favoritos",
                tabBarIcon: ({color, focused, size}) => (
                    <Icon name='heart' color='red' size={size} />
                ),
            }} 
        />
        <Tab.Screen
            name='pokedex' 
            component={PokedexNavigation} 
            options={{ 
                tabBarLabel: "",
                tabBarIcon: () => renderPokeball(),
            }}
        />
        <Tab.Screen 
            name='account'
            component={AccountNavigation} 
            options={{ 
                tabBarLabel: "Mi Cuenta" ,
                tabBarIcon: ({ color, size}) => (
                    <Icon name='user' color={color} size={size} />
                ),
            }}
        />
    </Tab.Navigator>
  )
}


function renderPokeball() {
    return (
        <Image
            source={require('../assets/pokeball.png')}
            style={{ width: 75, height: 75, top: -18 }}
        />
    )
}