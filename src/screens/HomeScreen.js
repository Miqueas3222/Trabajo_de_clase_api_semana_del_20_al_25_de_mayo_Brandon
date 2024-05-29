import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const HomeScreen = () => {
    return ( 
        <View style={styles.container}>
        <Text style={styles.title}>
            Trabajo de clase 
        </Text>
        <Text style={styles.descripcion}>
          Trabajo de clase Brandon Daniel Sanchez Santamaria, cambios en la pantalla pokemon y se agrego la api de rick and morty
        </Text>
        </View>
     );
}
 
export default HomeScreen;


// Estilos para los componentes.
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingTop: 20,
      paddingHorizontal:15
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: 10,
      textTransform: 'uppercase',
    },
    descripcion: {
        fontSize: 16,
        fontWeight: '400',
        textAlign: 'justify',
        marginTop: 10,
      },
      negrita:{
        fontWeight:'bold'
      }
  });
  