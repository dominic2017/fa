import { Container, Content, Header, Left, Body, Right, Button, Icon, Title, ListItem, CheckBox} from 'native-base';
import React, { Component } from 'react'
import { ScrollView, Text, TouchableOpacity,Alert,Image,TextInput, View} from 'react-native'
import { Images } from '../Themes'

import { StackNavigator,withNavigation} from 'react-navigation';
import PrimaryNav from '../Navigation/AppNavigation';
import styles from './Styles/FoodSelectorStyles'
import YourCart from  './YourCart'
const App = StackNavigator({
YourCart: {screen: YourCart}
});

export default class FoodSelector extends Component{
render(){
const {navigate} = this.props.navigation;
  return(
    <View style={{backgroundColor: 'white'}}>
    <View>
      <Image
        style = {{width:420, height : 220}}
        source = {{uri : 'https://info.helpfulbooks.co.uk/wp-content/uploads/2017/09/neonbrand-231219.jpg'}}
      />
     </View>
     <View style={{flex: 0, flexDirection: 'row'}}>
                             <View>
                               <Body>
                                 <Text style={styles.foodTitle}> Rice with Vegetables </Text>
                               </Body>
                             </View>
                             <View>
                               <Body>
                                 <Text style={styles.foodPrice}>$8.50</Text>
                               </Body>
                             </View>
     </View>
     <Text style = {styles.cook}> Made By Sasha</Text>
     <View style={{flex: 0, flexDirection: 'row'}}>
                                  <View>
                                    <Body>
                                      <Icon name ='md-star' style={{fontSize: 30, color: '#690541', marginLeft : 14}}/>
                                    </Body>
                                  </View>
                                  <View>
                                    <Body>
                                      <Icon name ='md-star' style={{fontSize: 30, color: '#690541', marginLeft : 14}}/>
                                    </Body>
                                  </View>
                                  <View>
                                    <Body>
                                      <Icon name ='md-star' style={{fontSize: 30, color: '#690541', marginLeft : 14}}/>
                                    </Body>
                                  </View>
                                  <View>
                                    <Body>
                                      <Icon name ='md-star' style={{fontSize: 30, color: '#690541', marginLeft : 14}}/>
                                    </Body>
                                  </View>
                                  <View>
                                    <Body>
                                      <Icon name ='star-half' style={{fontSize: 30, color: '#690541', marginLeft : 14}}/>
                                    </Body>
                                  </View>
          </View>
          <Text style ={styles.line}>___________________________________________________________</Text>
          <Text style ={styles.redText} > 3 of 6 portions left!</Text>
          <Text style={styles.description}>
          Description :
          </Text>
          <Text style={styles.p2}>
          This delicious meal consists of the finest jasmine rice, freshly cut vegetables and garlic bread. All made with love.
          </Text>
          <Text style={styles.p3}>
          This delicious meal consists of the finest jasmine rice, freshly cut vegetables and garlic bread. All made with love.
          </Text>
          <Button full onPress={()=> navigate('YourCart', {name:'ash'})} dark style={{marginLeft:40, marginRight : 40, marginTop : 20, backgroundColor: '#690541'}}><Text style={styles.submit}> Claim your plate ! </Text>

                               </Button>
          <Text style={styles.description}>

                    </Text>
     </View>

  );
}
}
