import { StatusBar} from 'expo-status-bar';
import { View, StyleSheet } from "react-native";
import React from 'react';
import CarsList from '../components/CarsList';
import Header from '../components/Header';

export const options = {
  headerShown: false,
};

export default function Index() {
  return (
    <View style={styles.container}>
      <Header />
      <CarsList
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'lightblue',
    alignItems: 'center', 
    justifyContent: 'center',
  },

  
}
)