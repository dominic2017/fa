import { Container, Content, Left, Body, Right,Header, Footer, FooterTab,Button,Item,Input, Icon, Title, ListItem, CheckBox} from 'native-base';
import React, { Component } from 'react'
import { ScrollView, Text, TouchableOpacity,Image,Alert, TextInput, View} from 'react-native'
import { Images } from '../Themes'
import {StackNavigator,} from 'react-navigation';
import styles from './Styles/SearchScreenStyles'
import FoodSelector from './FoodSelector'

const App = StackNavigator({
FoodSelector : {screen: FoodSelector}
});

export default class SearchScreen extends Component{
render(){
const {navigate} = this.props.navigation;
  return(
  <Container>
          <Header style={{backgroundColor : '#690541'}}searchBar rounded>
            <Item>
              <Icon name="ios-search" />
              <Input placeholder="Search" />
            </Item>
          </Header>
          <ScrollView contentContainerStyle={styles.contentContainer}>
     <View style={{flex: 0, flexDirection: 'column'}}>
                                  <View>
                                    <Body>
                                      <Image
                                              style = {{width:420, height : 220}}
                                              source = {{uri : 'https://info.helpfulbooks.co.uk/wp-content/uploads/2017/09/neonbrand-231219.jpg'}}
                                            />
                                    </Body>
                                  </View>
                                  <View>
                                    <Body>
                                      <Image
                                              style = {{width:410, height : 220}}
                                              source = {{uri : 'https://media1.popsugar-assets.com/files/thumbor/Rvjv0HKoPae8e4z9-BlSSkNOMIU/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2017/09/27/901/n/1922729/tmp_pGmbqY_ea0aa3d5a96c1093_cathal-mac-an-bheatha-221497.jpg'}}
                                            />
                                    </Body>
                                  </View>
                                  <View>
                                    <Body>
                                      <Image
                                              style = {{width:420, height : 220}}
                                              source = {{uri : 'http://brittlepaper.com/wp-content/uploads/2017/08/yvonne-lee-harijanto-41745-1-e1502111546126.jpg'}}
                                            />
                                    </Body>
                                  </View>
                                  <View>
                                    <Body>
                                      <Image
                                              style = {{width:420, height : 220}}
                                              source = {{uri : 'http://images.dailyhive.com/20180226134619/eaters-collective-172257-unsplash.jpg'}}
                                            />
                                    </Body>
                                  </View>
                                  <View>
                                    <Body>
                                     <Image
                                             style = {{width:420, height : 220}}
                                             source = {{uri : 'https://i1.wp.com/magentamagazine.co.za/wp-content/uploads/2018/01/brenan-greene-229562.jpg?resize=650%2C433'}}
                                           />
                                    </Body>
                                  </View>
                                    <Button full onPress={()=> navigate('FoodSelector', {name:'ash'})} light><Text style={{fontSize : 20, color : 'black'}}> Advanced </Text></Button>
          </View>





         </ScrollView>
  </Container>
  );
}
}
