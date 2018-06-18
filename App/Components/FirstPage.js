import PrimaryNav from '../Navigation/AppNavigation';
import styles from './Styles/FirstPageStyles'
import { Container, Content, Header, Left, Body, Right, Button, Icon, Title, ListItem, CheckBox} from 'native-base';
import React, { Component } from 'react'
import { ScrollView, Text, TouchableOpacity,Alert,Image,TextInput, View} from 'react-native'
import {StackNavigator,} from 'react-navigation';
import LaunchScreen from '../Containers/LaunchScreenContainer';

const App = StackNavigator({
LaunchScreen : {screen: LaunchScreen}
});

export default class FirstPage extends Component{
render(){
  const {navigate} = this.props.navigation;
  return(
  <View style={{backgroundColor : '#690541'}}>
  <View style={{justifyContent : 'center', alignItems : 'center', marginTop: 60}}>
    <Image style={{width:'40%', height : 200, resizeMode : 'contain'}}
      source={require('../Images/companylogo.png')}
      />
  </View>
  <Text style={styles.phrase}> Discover cheap and healthy meal options from families nearby. </Text>
  <Button full onPress={()=> navigate('LaunchScreen', {name:'ash'})} style={styles.button}light><Text style={{fontSize : 20, color : 'black'}}> Join the community </Text></Button>
  <Text style={styles.member}> Already a member? </Text>
  <Text style={styles.signin}> Sign In </Text>
  <Text style={styles.signin}>     </Text>
  </View>
  );
}
}
