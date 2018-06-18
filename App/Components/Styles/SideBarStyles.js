import { StyleSheet,Platform } from 'react-native'
import { Colors, Metrics, Fonts } from '../../Themes/'

export default styles = StyleSheet.create({
headertext:{
},
header2: {
	  alignSelf: 'auto',
	 	//fontFamily: "normal",
		fontSize: 15,
  		fontWeight: "bold",
		//fontStyle: "normal",
		letterSpacing: 0,
		//textAlign: "left",
		color: "#4a4a4a",
		marginTop: 20,
	},
mainForm: {
		alignSelf: 'center',
	},
button: {
    marginVertical: 5,
    borderTopColor: Colors.fire,
    borderBottomColor: Colors.bloodOrange,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    backgroundColor: Colors.ember
  },
 addIcon:{
 fontSize:25,
 alignSelf : 'flex-start',
 marginTop: Platform.OS === 'ios' ? 8 : 12
 }
})
