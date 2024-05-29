import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';

export default function PokemonItem({ item }) {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${item.name}`);
        setDetails(response.data);
      } catch (error) {
        console.error("Error fetching Pokémon details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [item.name]);

  if (loading) {
    return <ActivityIndicator style={styles.loading} size="small" color="#0000ff" />;
  }

  return (
    <View style={styles.card}>
      <Text>Número Pokedex: <Text style={styles.number}>{details.id}</Text></Text>
      <Image
        style={styles.image}
        source={{ uri: details.sprites.front_default }}
      />
      <Text style={styles.title}>{details.name}</Text>
      <Text style={styles.description}>Habilidad: {details.abilities[0].ability.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    margin: 5,
    width: '30%',
    alignItems: 'center',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 5,
    textTransform: 'capitalize',
  },
  description: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 5,
  },
  image: {
    width: 80,
    height: 80,
  },
  number: {
    fontWeight: 'bold'
  },
  loading: {
    marginTop: 20,
  },
});
