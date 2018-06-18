import { Container, Content, Header, Left, Body, Right, Button, Icon, Drawer, Title, ListItem, CheckBox} from 'native-base';
import React, { Component } from 'react'
import { ScrollView, Text, TouchableOpacity,Image,Alert,TextInput, View} from 'react-native'
import { Images } from '../Themes'
import DateTimePicker from 'react-native-modal-datetime-picker';

export default class SideBar extends Component{
render (){
  return(
  <View style={{backgroundColor : 'transparent'}}>
  <Text> Harold Kumar </Text>
  <Icon name = "person" />
  </View>

  );
}
}
