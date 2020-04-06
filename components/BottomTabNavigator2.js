import React, { useState } from 'react'
import { StyleSheet, View, Text, Dimensions, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

function BottomTabNavigator(props) {
    const [item, changeNavigation] = useState({ home: true, daily: false, stats: false, profile: false })
    const handleClick = (args) => {
        switch (args) {
            case 'home': changeNavigation({ home: true, daily: false, stats: false, profile: false });
                props.navigation.navigate('Home');
                break;
            case 'daily': changeNavigation({ home: false, daily: true, stats: false, profile: false });
                props.navigation.navigate('Daily');
                break;
            case 'stats': changeNavigation({ home: false, daily: false, stats: true, profile: false });
                props.navigation.navigate('Stats');
                break;
            case 'profile': changeNavigation({ home: false, daily: false, stats: false, profile: true });
                props.navigation.navigate('Profile');
                break;
        }
    }
    return (
        <View style={styles.bottomNav}>
            <TouchableOpacity style={item.home ? styles.activeNavItem : styles.navItem} onPress={() => handleClick('home')}>
                <Feather name="grid" size={20} color={item.home ? "#000" : "#cbcdd4"} />
                <Text style={item.home ? styles.activeFont : styles.font}>●</Text>
            </TouchableOpacity>
            <TouchableOpacity style={item.daily ? styles.activeNavItem : styles.navItem} onPress={() => handleClick('daily')}>
                <Feather name="calendar" size={20} color={item.daily ? "#000" : "#cbcdd4"} />
                <Text style={item.daily ? styles.activeFont : styles.font}>●</Text>
            </TouchableOpacity>
            <TouchableOpacity style={item.stats ? styles.activeNavItem : styles.navItem} onPress={() => handleClick('stats')}>
                <Feather name="bar-chart-2" size={20} color={item.stats ? "#000" : "#cbcdd4"} />
                <Text style={item.stats ? styles.activeFont : styles.font} >●</Text>
            </TouchableOpacity>
            <TouchableOpacity style={item.profile ? styles.activeNavItem : styles.navItem} onPress={() => handleClick('profile')}>
                <Feather name="user" size={20} color={item.profile ? "#000" : "#cbcdd4"} />
                <Text style={item.profile ? styles.activeFont : styles.font}>●</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.addButton}>
                <Feather name="plus" size={20} color="#fff" />
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    font: {
        display: 'none'
    },
    activeFont: {
        fontFamily: 'googleSans',
        color: "#000",
        fontSize: 5
    },
    bottomNav: {
        width: Dimensions.get('window').width,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: Dimensions.get('window').height * 0.09,
        backgroundColor: '#fff',
        position: 'absolute',
        bottom: 0,
        left: 0
    },
    navItem: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: '100%',
        padding: 5,
    },
    activeNavItem: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: '100%',
        padding: 5,
    },
    addButton: {
        padding: 12,
        backgroundColor: '#040404',
        borderRadius: 10,
    }
});
export default BottomTabNavigator;