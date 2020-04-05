import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Switch } from 'react-native';
import * as Font from 'expo-font';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default class Alarm extends React.Component {

    state = {
        fontLoaded: false,
        time: '00:00'
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.siderBar}>
                    <TouchableOpacity style={[styles.icon]} onPress={() => this.props.navigation.navigate('Clock')} >
                        <MaterialCommunityIcons name="clock-outline" size={45} color="#f1f3f6" />
                        <Text style={styles.smallFont}>Clock</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.icon, styles.active]} onPress={() => this.props.navigation.navigate('Alarm')}>
                        <MaterialCommunityIcons name="alarm" size={45} color="#f1f3f6" />
                        <Text style={styles.smallFont}>Alarm</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.icon} onPress={() => this.props.navigation.navigate('Nav')}>
                        <MaterialCommunityIcons name="av-timer" size={45} color="#f1f3f6" />
                        <Text style={styles.smallFont}>Timer</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.icon}>
                        <MaterialCommunityIcons name="timer" size={45} color="#f1f3f6" />
                        <Text style={styles.smallFont}>Stopwatch</Text>
                    </TouchableOpacity>

                </View>
                <View style={styles.area}>
                    <Text style={styles.titleFont}>Alarm</Text>
                    <View style={styles.alarmContent}>
                        <MaterialCommunityIcons name="tag" size={25} color="#121212" />
                        <Text style={{ fontFamily: 'lexendDeca', color: '#000', fontSize: 20 }}>Office</Text>
                        <Switch />
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#1a1a1a',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleFont: {
        fontFamily: 'googleSans',
        fontSize: 24,
        color: '#fff',
        position: 'relative',
        top: 10,
        marginBottom: 25
    },
    siderBar: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width * 0.22,
        backgroundColor: '#121212',
        position: 'absolute',
        top: 0,
        left: 0,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    area: {
        width: Dimensions.get('window').width * 0.78,
        height: Dimensions.get('window').height,
        position: 'absolute',
        top: 0,
        right: 0,
        padding: 20,
        backgroundColor: '#1a1a1a',
    },
    time: {
        paddingTop: 20,
        fontFamily: 'googleSans',
        fontSize: 56,
        color: '#fff',
    },
    date: {
        marginTop: -10,
        fontFamily: 'lexendDeca',
        fontSize: 18,
        color: '#959595',
    },
    clock: {
        marginTop: 30,
        width: 220,
        height: 220,
        borderRadius: 110,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#f1f3f6',
    },
    icon: {
        marginBottom: 10,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: 10,
        width: '100%'
    },
    smallFont: {
        fontFamily: 'lexendDeca',
        fontSize: 10,
        color: '#959595',
        alignSelf: 'center'
    },
    active: {
        backgroundColor: '#1a1a1a',
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20
    },
    alarmContent: {
        backgroundColor: '#f3f3f3',
        height: Dimensions.get('window').height * 0.20,
        borderRadius: 20,
        padding: 15
    }
});