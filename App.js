import React from 'react';
import LoadingScreen from './screens/LoadingScreen';
import HomeScreen from './screens/HomeScreen';
import DailyScreen from './screens/DailyScreen';
import StatsScreen from './screens/StatsScreen';
import ProfileScreen from './screens/ProfileScreen';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import BottomTabNavigator from './components/BottomTabNavigator'

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Daily: {
      screen: DailyScreen
    },
    Stats: {
      screen: StatsScreen,
    },
    Profile: {
      screen: ProfileScreen
    },

  },
  {
    initialRouteName: 'Home',
    tabBarComponent: props => <BottomTabNavigator {...props} />,
  }

)


const MainNavigator = createSwitchNavigator(
  {
    Loading: LoadingScreen,
    Home: TabNavigator,
    Daily: DailyScreen,
    Stats: StatsScreen,
    Profile: ProfileScreen,
  }
);



const App = createAppContainer(MainNavigator);

export default App;


