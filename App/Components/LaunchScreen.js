import { Container, Content, Header, Left, Body, Right, Button, Icon, Drawer, Title, ListItem, CheckBox} from 'native-base';
import React, { Component } from 'react'
import { ScrollView, Text, TouchableOpacity,Image,Alert,TextInput, View} from 'react-native'
import { Images } from '../Themes'
import DateTimePicker from 'react-native-modal-datetime-picker';

import { StackNavigator,withNavigation} from 'react-navigation';
import PrimaryNav from '../Navigation/AppNavigation';
import SearchScreen from './SearchScreen'

//Styles
import styles from './Styles/LaunchScreenStyles';
import SideBar from './SideBar';

import Reactotron from 'reactotron-react-native'
const App = StackNavigator({
SearchScreen : {screen: SearchScreen}
});

export default class LaunchScreen extends Component {

state = {
    checked1: false,
    checked2 : false,
    checked3 :false,
    checked4:false,
    checked5:false,
    checked6:false,
    checked7:false,
    checked8:false,
    isDateTimePickerVisible: false,
    maximum : ' ',
    minimum :''
  };
  closeDrawer = () => {
        this.drawer._root.close()
      };
      openDrawer = () => {
        this.drawer._root.open()
       };
  handlemax = (text)  => {
        this.setState({ maximum: text })
     }
  handlemin = (text)  => {
        this.setState({ minimum: text })
        }
   alertSubmit = () => Alert.alert(
                               'Save Your choices and Find a Meal ',
                               '',
                               [
                                 {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                                 {text: 'OK', onPress: () => console.log('OK Pressed')},
                               ],
                               { cancelable: false }
                             )
  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleDatePicked = (date) => {
      console.log('A date has been picked: ', date);
      this._hideDateTimePicker();
      Alert.alert(
        'Time Selected ! ',
        '',
        [
          {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        { cancelable: false }
      )
    };
  render() {
  const {navigate} = this.props.navigation;
    return (
    <Drawer
            style={{backgroundColor: 'red'}}
            ref={(ref) => { this.drawer = ref; }}
            content={<SideBar navigator={this.navigator} />}
            onClose={() => this.closeDrawer()}
            onOpen={() => this.openDrawer()}>
      <View style={{backgroundColor : 'white'}}>
        <Header style={{backgroundColor : 'white'}}>
                  <Left>
                    <Button transparent>
                      <Image style={{width:'40%', height : 24, resizeMode : 'contain'}}
                            source={require('../Images/Icons/icon.png')}
                            />
                    </Button>
                  </Left>
                  <Right>
                    <Button transparent>
                      <Icon style ={{color : '#690541', fontSize : 35}}name="person"  />
                    </Button>
                  </Right>
         </Header>
        <Text style={styles.searchTitle}> What do you feel like eating? </Text>
                   <View style={{flex: 0, flexDirection: 'row'}}>
                        <View style={styles.thai}>
                          <CheckBox style={{borderColor: '#690541',backgroundColor : (this.state.checked1? '#690541' : 'white') }} checked={this.state.checked1}
                                     onPress={() => this.setState({ checked1:!this.state.checked1})}
                           />
                          <Body>
                            <Text style={styles.listText}>Thai</Text>
                          </Body>
                        </View>
                        <View style={styles.chinese}>
                          <CheckBox style={{borderColor: '#690541',backgroundColor : (this.state.checked2? '#690541' : 'white') }} checked={this.state.checked2}
                                                         onPress={() => this.setState({ checked2:!this.state.checked2 })}
                                               />
                          <Body>
                            <Text style={styles.listText}>Chinese</Text>
                          </Body>
                        </View>
                        <View style={styles.italian}>
                           <CheckBox style={{borderColor: '#690541',backgroundColor : (this.state.checked3? '#690541' : 'white') }} checked={this.state.checked3}
                           onPress={() => this.setState({ checked3:!this.state.checked3 })}
                           />
                           <Body>
                             <Text style={styles.listText} >Italian</Text>
                            </Body>
                        </View>
                        <View style={styles.indian}>
                           <CheckBox style={{borderColor: '#690541',backgroundColor : (this.state.checked4? '#690541' : 'white') }} checked={this.state.checked4}
                           onPress={() => this.setState({ checked4:!this.state.checked4 })}
                           />
                           <Body>
                           <Text style={styles.listText}>Indian</Text>
                           </Body>
                        </View>
                  </View>
                  <View style={{flex: 0, flexDirection: 'row'}}>
                                          <View style={styles.vegan}>
                                            <CheckBox style={{borderColor: '#690541',backgroundColor : (this.state.checked5? '#690541' : 'white') }} checked={this.state.checked5}
                                                       onPress={() => this.setState({ checked5:!this.state.checked5 })}
                                             />
                                            <Body>
                                              <Text style={styles.listText}>Vegan</Text>
                                            </Body>
                                          </View>
                                          <View style={styles.greek}>
                                            <CheckBox style={{borderColor: '#690541',backgroundColor : (this.state.checked6? '#690541' : 'white') }} checked={this.state.checked6}
                                                                           onPress={() => this.setState({ checked6:!this.state.checked6 })}
                                                                 />
                                            <Body>
                                              <Text style={styles.listText}>Greek</Text>
                                            </Body>
                                          </View>
                                          <View style={styles.comfort}>
                                             <CheckBox style={{borderColor: '#690541',backgroundColor : (this.state.checked7? '#690541' : 'white') }} checked={this.state.checked7}
                                             onPress={() => this.setState({ checked7:!this.state.checked7 })}
                                             />
                                             <Body>
                                               <Text style={styles.listText} >Comfort</Text>
                                              </Body>
                                          </View>
                                          <View style={styles.american}>
                                             <CheckBox style={{borderColor: '#690541',backgroundColor : (this.state.checked8? '#690541' : 'white') }} checked={this.state.checked8}
                                             onPress={() => this.setState({ checked8:!this.state.checked8 })}
                                             />
                                             <Body>
                                             <Text style={styles.listText}>American</Text>
                                             </Body>
                                          </View>
                                    </View>
                     <Text style={styles.timeTitle}> When would you like your food to be delivered ? </Text>
                              <Button style={styles.timeButton} full onPress={this._showDateTimePicker}>
                                        <Text style={{fontSize : 16, color : 'white'}}>Select a time</Text>
                                      </Button>
                             <DateTimePicker
                               isVisible={this.state.isDateTimePickerVisible}
                               onConfirm={this._handleDatePicked}
                               onCancel={this._hideDateTimePicker}
                               mode ='time'
                               is24Hour= {false}
                             />
                    <Text style={styles.moneyTitle}> What are you willing to spend ? </Text>
                    <TextInput style = {styles.input}
                                   underlineColorAndroid = "transparent"
                                   placeholder = "$ minimum"
                                   placeholderTextColor = "#9a73ef"
                                   autoCapitalize = "none"
                                   onChangeText = {this.handlemin}/>

                                <TextInput style = {styles.input}
                                   underlineColorAndroid = "transparent"
                                   placeholder = "$ maximum"
                                   placeholderTextColor = "#9a73ef"
                                   autoCapitalize = "none"
                                   onChangeText = {this.handlemax}/>
                     <Button full onPress={()=> navigate('SearchScreen', {name:'ash'})} dark style={{marginLeft:100,marginRight : 100, backgroundColor: '#690541',}}><Text style={styles.submit}> Submit </Text>

                     </Button>
                     <Text style={styles.moneyTitle}> </Text>
           </View>
           </Drawer>
    );
  }
}
