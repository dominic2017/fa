import { StackNavigator } from 'react-navigation'
import LaunchScreenContainer from '../Containers/LaunchScreenContainer'
import React, { Component } from 'react';
import styles from './Styles/NavigationStyles'
import FoodSelector from '../Components/FoodSelector'
import SearchScreen from '../Components/SearchScreen'
import FirstPage from '../Components/FirstPage'
import YourCart from '../Components/YourCart'



// Manifest of possible screens
const PrimaryNav  = StackNavigator({
  LaunchScreen: { screen: LaunchScreenContainer },
  FoodSelector :{screen: FoodSelector},
  SearchScreen : {screen : SearchScreen},
  FirstPage :{screen:FirstPage},
  YourCart : {screen : YourCart}
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'FirstPage',
  navigationOptions: {
    headerStyle: styles.header
  }
});

export default PrimaryNav
