import React from 'react';
import { View, Text, ImageBackground, Linking } from 'react-native';
import StyledButton from '../StyledButton';
import styles from './styles';

const CarItem = (props) => { 

    const { name, tagline, taglineCTA, image } = props.car;
  
    return (
      <View style={styles.carContainer}>
        <ImageBackground 
        source={image}
        style={styles.image}
        />

        <View style={styles.titles}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subtitle}>{tagline}{' '}
            <Text
             style={styles.subtitleCTA} 
              onPress={() => Linking.openURL('https://psychobiomachine.substack.com/')}
            >{taglineCTA}</Text>
          </Text>
        </View>

        <View style={styles.buttonsContainer}>
            <StyledButton 
              type="primary"
              content={"Custom Orders"}
              onPress={
                  () => {
                    Linking.openURL('https://psychobiomachine.substack.com/')
                    console.warn("Custom Order Pressed");
                  }
            }/>
            <StyledButton 
              type="secondary"
              content={"Existing Inventory"}
              onPress={
                  () => {
                    Linking.openURL('https://psychobiomachine.substack.com/');
                    console.warn("existing inventory Pressed");
                  }
            }/>
        </View>

      </View>

    );
};

export default CarItem;