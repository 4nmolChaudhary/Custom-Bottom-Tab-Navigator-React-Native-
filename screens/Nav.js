import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Switch } from 'react-native';
import BottomTabNavigator from '../components/BottomTabNavigator';

function Nav() {
    return (
        <View style={styles.container}>
            <BottomTabNavigator />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#f1f3f8',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default Nav
