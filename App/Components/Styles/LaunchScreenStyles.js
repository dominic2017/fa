import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin
  },
  logo: {
    marginTop: Metrics.doubleSection,
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain'
  },
  centered: {
    alignItems: 'center'
  },
  searchTitle:{
      fontSize: 20,
      fontFamily : 'Cochin',
      marginTop : 20,
      color: 'black',
      textAlign : 'center'
  },
  timeTitle :{
        fontSize: 20,
        fontFamily : 'Cochin',
        marginTop : 45,
        color: 'black',
        textAlign : 'center'
  },
  listText:{
  color :'black'
  },
  timeButton:{
  marginTop: 30,
  marginLeft : 80,
  marginRight : 80,
  backgroundColor : '#690541'
  },
  thai:{
  marginTop: 20,
  marginLeft: 20,
  position: 'relative'
  },
  chinese :{
  marginTop : 20,
  marginLeft : 60
  },
  italian:{
  marginTop: 20,
  marginLeft : 60
  },
  indian :{
  marginTop:20,
  marginLeft : 60
  },
  vegan :{
  marginTop: 40,
  marginLeft: 20,
  position: 'relative'
  },
  greek:{
  marginTop : 40,
  marginLeft: 46
  },
  comfort :{
  marginTop : 40,
  marginLeft: 74,
  },
  american :{
  marginTop : 40,
  marginLeft: 46,
  },
  submit:{
  color : 'white',
  fontSize : 15,
  fontFamily : 'Cochin',
  alignItems : 'center'
  },
  moneyTitle :{
  fontSize: 20,
  fontFamily : 'Cochin',
  marginTop : 30,
          color: 'black',
          textAlign : 'center'
  },
  input :{
      margin: 15,
      height: 40,
      borderWidth: 1,
      borderColor : '#690541',
  }
})
