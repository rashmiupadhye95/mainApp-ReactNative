import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar ,
  TouchableOpacity
} from 'react-native';



export default class SignUp extends Component{

	render() {
		return(
			<View >
				<View style={styles.signupTextCont}>
					<Text style={styles.signupText}>Don't have an account?</Text>
					<TouchableOpacity><Text style={styles.signupButton}
					onPress={() => this.props.navigation.navigate('Register')}> Sign Up</Text></TouchableOpacity>
				</View>
			</View>	
			)
	}
}

const styles = StyleSheet.create({
  
  signupTextCont : {
  	flexGrow: 1,
    alignItems:'flex-end',
    justifyContent :'center',
    paddingVertical:16,
    flexDirection:'row'
  },
  signupText: {
  	color:'rgba(255,255,255,0.6)',
  	fontSize:16
  },
  signupButton: {
  	color:'#ffffff',
  	fontSize:16,
  	fontWeight:'500'
  }
});