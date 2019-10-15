import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    Image, 
    AppRegistry,
    Keyboard,
    Alert,
  Platform,} from 'react-native';
export default class LoginScreen extends React.Component{
  static navigationOptions =
   {
      title: 'Đăng nhập',
   };
   constructor(props){
    	    super(props);
    	    this.state={
    	      user:"",
    	      pass:"",
    	      //checkLogin:0
    	    }
    	  }
    	  _onSubmit=()=>{
    	    return fetch('http://10.0.3.2:8080/React-native/login.php', { 
    	      method: 'POST',
    	      headers: {
    	        'Accept': 'application/json',
    	        'Content-Type': 'application/json',
    	      },
    	      body: JSON.stringify({
    	        user: this.state.user,
    	        pass: this.state.pass,
    	      })
    	    })
    	    .then((response) => response.json())
    	    .then((response) => {
    	        if(response==='success'){
                  Alert.alert("Thông báo!","Bạn đã đăng nhập thành công!");
                  this.props.navigation.navigate('Dulieu');
    	        }
    	        else{
    	            Alert.alert("Thông báo!","Bạn đã đăng nhập không thành công!");
    	        }
    	    })
    	    .catch((error) =>{
    	        console.error(error);
    	    });
    	  }   
    render(){
      const {navigate} = this.props.navigation;
        return(
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/office/2x/user.png'}}/>
          <TextInput style={styles.inputs}
              placeholder="User"
              underlineColorAndroid='transparent'
              onChangeText={(user) => this.setState({user})}/>
        </View>
        
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/bubbles/2x/key.png'}}/>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(pass) => this.setState({pass})}/>
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={this._onSubmit}>
          <Text style={styles.loginText}>Đăng nhập</Text>
        </TouchableHighlight>
      </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'rgb(234, 195, 176)',
  }, 
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center',
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: 'white',
  }
});