import { StatusBar} from 'expo-status-bar';
import { Text, View, StyleSheet, ImageBackground } from "react-native";
import React from 'react';
import CarItem  from '../components/CarItem';

export const options = {
  headerShown: false,
};

export default function Index() {
  return (
    <View style={styles.container}>
      <CarItem />

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