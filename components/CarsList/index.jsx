import React from 'react';
import { View, Text, FlatList, Dimensions } from 'react-native';
import styles from './styles.jsx';
import cars from '../CarsList/cars.js';
import CarItem from '../CarItem';

const CarsList = (props) => {
    return (
        <FlatList
            data={cars}
            renderItem={({item}) => <CarItem car={item}/>}
            showsVerticalScrollIndicator={false} 
            snapToAlignment={'start'}
            decelerationRate={'fast'}
            snapToInterval={Dimensions.get('window').height}
        />
    )
}

export default CarsList;