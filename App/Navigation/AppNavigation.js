import { createAppContainer } from 'react-navigation'
import HomeScreen from '../Containers/HomeScreen' //Screen Home Screen tadi otomatis di Import
import { createStackNavigator } from 'react-navigation-stack';
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  HomeScreen: { screen: HomeScreen },             //Screen Home Screen tadi otomatis di register kesini
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'HomeScreen', // <--- Ganti Jadi HomeScreen Tadinya LaunchScreen
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default createAppContainer(PrimaryNav)
