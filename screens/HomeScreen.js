import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native';

function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.font}>HomeScreen</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f1f3f8',
        height: Dimensions.get('window').height
    },
    font: {
        fontFamily: 'googleSans',
    }
});
export default HomeScreen
