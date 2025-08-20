import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create ({
    container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 60,
        zIndex: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 20,
    },
    logo: {
        width: 125,
        height: 15,
    },
    menu: {
        width: 25,
        height: 25,
    }
});

export default styles;