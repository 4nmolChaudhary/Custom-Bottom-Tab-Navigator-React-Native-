import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

function DailyScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.font}>DailyScreen</Text>
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
    font: {
        fontFamily: 'googleSans',
    }
});
export default DailyScreen
