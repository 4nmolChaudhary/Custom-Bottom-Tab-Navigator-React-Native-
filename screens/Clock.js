import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import * as Font from 'expo-font';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AnalogClock from '../components/AnalogClock';
import * as Localization from 'expo-localization';

export default class Clock extends React.Component {

    state = {
        fontLoaded: false,
        time: '00:00',
        dateDay: '',
        timezone: '',
        utc: ''
    }

    loadFont = async () => {
        await Font.loadAsync({
            lexendDeca: require('../assets/fonts/LexendDeca-Regular.ttf'),
            googleSans: require('../assets/fonts/GoogleSans-Bold.ttf')
        });
        this.setState({ fontLoaded: true })
    }

    getTime = () => {
        let date = new Date();
        let x = Date(Date.UTC(date.getFullYear, date.getMonth, date.getDate)).split(' ');
        this.setState({
            time: `${x[4].slice(0, 5)}`,
            dateDay: ` ${x[0]}, ${x[2]} ${x[1]}`,
            timezone: Localization.timezone,
            utc: `${x[5].slice(0, 6)}:${x[5].slice(6, 9)} ${x[6]}`
        })
        setTimeout(() => this.getTime(), 60000);
    }

    componentDidMount() {
        this.loadFont();
        this.getTime();
    }

    render() {
        return (

            this.state.fontLoaded ?
                <View style={styles.container}>
                    <View style={styles.siderBar}>
                        <TouchableOpacity style={[styles.icon, styles.active]}>
                            <MaterialCommunityIcons name="clock-outline" size={45} color="#f1f3f6" />
                            <Text style={styles.smallFont}>Clock</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.icon} onPress={() => this.props.navigation.navigate('Alarm')}>
                            <MaterialCommunityIcons name="alarm" size={45} color="#f1f3f6" />
                            <Text style={styles.smallFont}>Alarm</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.icon}>
                            <MaterialCommunityIcons name="av-timer" size={45} color="#f1f3f6" />
                            <Text style={styles.smallFont}>Timer</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.icon}>
                            <MaterialCommunityIcons name="timer" size={45} color="#f1f3f6" />
                            <Text style={styles.smallFont}>Stopwatch</Text>
                        </TouchableOpacity>

                    </View>
                    <View style={styles.area}>
                        <Text style={styles.titleFont}>Clock</Text>
                        <Text style={styles.time}>{this.state.time}</Text>
                        <Text style={styles.date}>{this.state.dateDay}</Text>
                        <View style={styles.clock}>
                            <AnalogClock clockBorderWidth={0} clockCentreColor='#353535'
                                secondHandLength={90} minuteHandLength={70} hourHandLength={45}
                                secondHandWidth={1} minuteHandWidth={3} hourHandWidth={3} />
                        </View>
                        <View style={{ width: '90%', height: 2, backgroundColor: '#121212', margin: 15 }}></View>
                        <Text style={{ fontFamily: 'googleSans', fontSize: 16, color: '#fff' }}>Timezone</Text>
                        <Text style={{ fontFamily: 'lexendDeca', fontSize: 14, color: '#757575' }}>{this.state.timezone}</Text>
                        <Text style={{ fontFamily: 'lexendDeca', fontSize: 16, color: '#a5a5a5' }}>{this.state.utc}</Text>

                    </View>
                </View>
                :
                <View>
                    <Text style={{ color: '#000' }}>Fonts Loading</Text>
                </View>
        );

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
        top: 10
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
    }
});