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
export default class AddScreen extends React.Component{
  static navigationOptions =
   {
      title: 'Insert movie',
   };
   constructor(props){
    	    super(props);
    	    this.state={
    	      ten_phim:"",
            noi_dung:"",
            the_loai:"",
            dang:"",
            thoi_gian:"",
            anh:"",
    	      //checkLogin:0
    	    }
    	  }
    	  _onAdd=()=>{
          if(this.state.ten_phim===""){
            Alert.alert("thông báo!","Tên không được bỏ trống");
          }else{
            if(this.state.noi_dung===""){
              Alert.alert("thông báo!","Nội dung không được bỏ trống");
            }else{
              if(this.state.the_loai==""){
                Alert.alert("thông báo!","Thể loại không được bỏ trống");
              }else{
                if(this.state.dang==""){
                  Alert.alert("thông báo!","Dạng không được bỏ trống");
              }else{
                if(this.state.thoi_gian==""){
                  Alert.alert("thông báo!","Thời gian không được bỏ trống");
              }else{
                if(this.state.anh==""){
                  Alert.alert("thông báo!","Ảnh không được bỏ trống");
              }else{
    	    return fetch('http://10.0.3.2:8080/React-native/them.php', { 
    	      method: 'POST',
    	      headers: {
    	        'Accept': 'application/json',
    	        'Content-Type': 'application/json',
    	      },
    	      body: JSON.stringify({
    	        ten_phim: this.state.ten_phim,
              noi_dung: this.state.noi_dung,
              the_loai: this.state.the_loai,
              dang    : this.state.dang,
              thoi_gian: this.state.thoi_gian,
              anh     :this.state.anh,
    	      })
    	    })
    	    .then((response) => response.json())
    	    .then((responseData) => {

            alert(responseData);
              this.props.navigation.navigate('Dulieu')
          }).catch((error) => {
            console.error(error);
          });
        }
      }
    }
  }
}
}
} 
    render(){
      const {navigate} = this.props.navigation;
        return(
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <View style={styles.add}>
            <TextInput placeholder="Tên phim" 
              underlineColorAndroid='transparent'
              onChangeText={(ten_phim) => this.setState({ten_phim})}
            />
          </View>
          <View style={styles.add}>
            <TextInput placeholder="Nội dung" 
              underlineColorAndroid='transparent'
              onChangeText={(noi_dung) => this.setState({noi_dung})}
            />
          </View>
          <View style={styles.add}>
            <TextInput placeholder="Thể loại" 
              underlineColorAndroid='transparent'
              onChangeText={(the_loai) => this.setState({the_loai})}
            />
          </View>
          <View style={styles.add}>
            <TextInput placeholder="Định dạng" 
              underlineColorAndroid='transparent'
              onChangeText={(dang) => this.setState({dang})}
            />
          </View>
          <View style={styles.add}>
            <TextInput placeholder="Thời gian" 
              underlineColorAndroid='transparent'
              onChangeText={(thoi_gian) => this.setState({thoi_gian})}
            />
          </View>
          <View style={styles.add}>
            <TextInput placeholder="Ảnh" 
              underlineColorAndroid='transparent'
              onChangeText={(anh) => this.setState({anh})}
            />
          </View>
        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={this._onAdd}>
          <Text style={styles.loginText}>THÊM</Text>
        </TouchableHighlight>
        </View>
      </View>
        );
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'rgb(234, 195, 176)',
  }, 
  add:{
    borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:15,
      flexDirection: 'column',
      alignItems:'center',
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
});