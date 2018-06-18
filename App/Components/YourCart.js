import { Container, Content, Left, Body, Right,Header, Footer, FooterTab,Button,Item,Input, Icon, Title, ListItem, CheckBox} from 'native-base';
import React, { Component } from 'react'
import { ScrollView, Text, TouchableOpacity,Image,Alert, TextInput, View} from 'react-native'
import { Images } from '../Themes'
import styles from './Styles/YourCartStyles'



export default class extends Component{
render(){
return(
<View style={{backgroundColor : 'white'}}>
  <Header style={{backgroundColor : 'white'}}>
                    <Left>
                      <Button transparent>
                        <Image style={{width:'40%', height : 24, resizeMode : 'contain'}}
                              source={require('../Images/Icons/icon.png')}
                              />
                      </Button>
                    </Left>
                    <Body>
                    <Text style={{fontSize: 30, color : 'black', textAlign : 'center', marginLeft : 28}}>
                    Your Cart
                    </Text>
                    </Body>
                    <Right>
                      <Button transparent>
                        <Icon style ={{color : '#690541', fontSize : 35}}name="exit"  />
                      </Button>
                    </Right>
           </Header>
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
                <TextInput style = {styles.input}
                                                   underlineColorAndroid = "transparent"
                                                   placeholder = "Add a note to your order..."
                                                   placeholderTextColor = "#9a73ef"
                                                   autoCapitalize = "none"
                                                   onChangeText = {this.handlemin}/>
                  <View style={{flex: 0, flexDirection: 'row'}}>
                                                         <View>
                                                           <Body>
                                                             <Text style={styles.mealcost}> Meal Cost </Text>
                                                           </Body>
                                                         </View>
                                                         <View>
                                                           <Body>
                                                             <Text style={styles.mealprice}>$8.50</Text>
                                                           </Body>
                                                         </View>

                                 </View>
        <View style={{flex: 0, flexDirection: 'row'}}>
                                                                <View>
                                                                  <Body>
                                                                    <Text style={styles.tax}> Tax </Text>
                                                                  </Body>
                                                                </View>
                                                                <View>
                                                                  <Body>
                                                                    <Text style={styles.taxprice}>$1.50</Text>
                                                                  </Body>
                                                                </View>

                                        </View>
        <View style={{flex: 0, flexDirection: 'row'}}>
                                                                <View>
                                                                  <Body>
                                                                    <Text style={styles.delivery}> Delivery Fee </Text>
                                                                  </Body>
                                                                </View>
                                                                <View>
                                                                  <Body>
                                                                    <Text style={styles.deliveryprice}>$2.50</Text>
                                                                  </Body>
                                                                </View>

        </View>
        <View style={{flex: 0, flexDirection: 'row'}}>
                                                                        <View>
                                                                          <Body>
                                                                            <Text style={{fontSize: 30,color : 'black', marginTop : 210, marginLeft: 25, marginRight : 30}}>Total</Text>
                                                                          </Body>
                                                                        </View>
                                                                        <View>
                                                                          <Body>
                                                                            <Text style={styles.totalprice}>$12.50</Text>
                                                                          </Body>
                                                                        </View>

                </View>
        <Text style={{marginTop :240, marginLeft: 30, marginRight : 30}}>______________________________________________________</Text>
        <Button full dark style={{marginLeft:40, marginRight : 40, marginTop : 50, backgroundColor: '#690541'}}><Text style={styles.submitB}> Proceed To Payment </Text>

                                       </Button>
                                 <Text style={styles.totalprice}>
                                 </Text>
</View>
);



}







}


