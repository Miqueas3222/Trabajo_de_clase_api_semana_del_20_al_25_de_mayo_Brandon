import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import PokemonAxios from '../screens/PokemonAxios';
import RickAndMortyScreen from '../screens/RickAndMortyScreen';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Pokemon" component={PokemonAxios} />
      <Tab.Screen name="RickAndMorty" component={RickAndMortyScreen} />
    </Tab.Navigator>
  );
}
