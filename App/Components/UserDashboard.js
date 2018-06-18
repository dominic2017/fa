import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Drawer,Icon, Button } from 'native-base';
import{
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import styles from './Styles/registerScreenStyles';
import SideBar from './menusidebar.js';

export default class UserDashboard extends React.Component{
  constructor (props) {
    super(props);
  }

  closeDrawer = () => {
             this.drawer._root.close()
  };

  openDrawer = () => {
             this.drawer._root.open()
  };

  render() {
    const {data} = this.props;
    return(
      <Drawer
        style={styles.drawer}
        ref={(ref) => {this.drawer = ref; }}
        content={<SideBar navigator ={this._navigator}/> }
        onClose={() => this.closeDrawer()}>

        <Button transparent onPress={()=>this.openDrawer()} >
          <Icon ios='ios-menu' android="md-menu" />
        </Button>
        <View style={styles.mainForm}>
              <Text style={styles.header}>You are now logged in!</Text>
         </View>
      </Drawer>
    );
  }
};
