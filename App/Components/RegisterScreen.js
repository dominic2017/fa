import React, { Component } from 'react';
import { Provider } from 'react-redux';
import{
	AppRegistry,
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
	Button,
	Platform,
	Alert,
}from 'react-native';
import styles from '../Components/Styles/registerScreenStyles';
import { StackNavigator } from 'react-navigation';
import PrimaryNav from '../Navigation/AppNavigation';
import Wifi_iOS from '../Containers/wifi.ios'
import Wifi_android from '../Containers/wifi.android'

export default class RegisterScreen extends React.Component{
	constructor (props) {
		super(props)
		this.state = {
			name : '',
			email:'',
			password: '',
		}
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onButtonPress=this.onButtonPress.bind(this);
	}
  onButtonPress() {
      this.props.navigation.navigate(Platform.OS === 'ios' ? 'Wifi_iOS': 'Wifi_android', { name: 'Wifi' });
  };
	handleSubmit () {
		const {name, email, password} = this.state;
		this.props.onSubmit(name, email, password);
	}

	render() {
    const {data} = this.props;
    const {user} = this.props;
		return(
			<View style={styles.mainForm}>
				<Text style={styles.header}>Create a SmartCocoon account</Text>
				<Text style={styles.option}></Text>
				{/*Creates a view so register can be at the bottom*/}
				<View style={styles.lowerLayout}>
					{/*Creates a box for just name portion*/}
					<View style={styles.horizontalLayout}>
						{/*Displays name*/}
						<Text style={styles.dispLabel}> Name </Text>
						{/*Asks for the name*/}
						<TextInput
							style={styles.textInputName}
							underlineColorAndroid= 'transparent'
							placeholder="Your Name"
							onChangeText={(name) => this.setState({name})}
						/>
					</View>

					{/*Creates a box for just Email portion*/}
					<View style={styles.horizontalLayout}>
						{/*Displays Email*/}
						<Text style={styles.dispLabel}> Email </Text>
						{/*Asks for the name*/}
						<TextInput
							style={styles.textInputEmail}
							keyboardType= 'email-address'
							underlineColorAndroid= 'transparent'
							placeholder="Your Email"
							onChangeText={(email) => this.setState({email})}
						/>
					</View>

					{/*Creates a box for just Password portion*/}
					<View style={styles.horizontalLayout}>
						{/*Displays Password*/}
						<Text style={styles.dispLabel}> Password </Text>
						{/*Asks for the name*/}
						<TextInput
							style={styles.textInputPassword}
							underlineColorAndroid= 'transparent'
							placeholder="Your Password"
							onChangeText={(password) => this.setState({password})}
						/>
					</View>

					{/*Creates a button layout*/}
					<View style={styles.registerButton}>
						<Button
							title="Sign Up"
							onPress={this.handleSubmit}
              disabled={data.loading}
						/>
					</View>
					<Button
					title="To wifi screen"
					onPress={this.onButtonPress}
                 />
				</View>
        {data.failed && data.response.errors.full_messages.map((msg, i) => (
          <Text key={i}>
            {msg}
          </Text>
        ))}
			</View>
		);
	}
}

