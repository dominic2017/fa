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
	mainForm: {
		alignSelf: 'center',
	},
  textInput: {
    alignSelf:'stretch',
	  paddingTop: 7,
	  flex: 1,
		//fontFamily: "normal",
		fontSize: 17,
		fontWeight: "300",
	//	fontStyle: "normal",
		letterSpacing: 0,
		textAlign: "left",
		color: "#646464",
		paddingLeft:70,
  },
})
