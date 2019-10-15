import React from 'react';
import { FlatList, ActivityIndicator, Text, View,Image,StyleSheet ,TouchableHighlight,TextInput,TouchableOpacity } from 'react-native';
export default class EditScreen extends React.Component {
    static navigationOptions =
    {
      title: 'Update Movie',
    };

    constructor(props) {      
         super(props)     
         this.state = {     
           id       : this.props.navigation.getParam('id'),
           ten_phim : this.props.navigation.getParam('ten_phim'),
           noi_dung : this.props.navigation.getParam('noi_dung'),
           the_loai : this.props.navigation.getParam('the_loai'),
           dang     : this.props.navigation.getParam('dang'),
           thoi_gian: this.props.navigation.getParam('thoi_gian'),
           anh      : this.props.navigation.getParam('anh'),
         }
       }
  

      _onUpdateMovie = () =>{
        
              fetch('http://10.0.3.2:8080/React-native/update.php', {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                id       : this.state.id,
                ten_phim : this.state.ten_phim,
                noi_dung : this.state.noi_dung,
                the_loai : this.state.the_loai,
                dang     : this.state.dang,
                thoi_gian: this.state.thoi_gian,
                anh      :this.state.anh,
        
              })
        
              }).then((response) => response.text())
                  .then((responseData) => {
                    
                    alert(responseData);
                      this.props.navigation.navigate('Dulieu')
                  }).catch((error) => {
                    console.error(error);
                  });
        
        }
  
      render() {
        const {navigate} = this.props.navigation;
        return (
            
        <View style={styles.container}>
            <View style={styles.inputContainer}>
               <View style={styles.add}>
                <TextInput
              placeholder={this.props.navigation.getParam('ten_phim')}
              onChangeText={ TextInputValue => this.setState({ ten_phim : TextInputValue }) }    
              underlineColorAndroid='transparent'     
              style={styles.TextInputStyleClass}
            />
              </View>
              <View style={styles.add}>
                <TextInput
                    placeholder={this.props.navigation.getParam('noi_dung')}    
                    onChangeText={ TextInputValue => this.setState({ noi_dung : TextInputValue }) }     
                    underlineColorAndroid='transparent'    
                    style={styles.TextInputStyleClass}
                  />
              </View>
              <View style={styles.add}>
                <TextInput
                    placeholder={this.props.navigation.getParam('the_loai')}    
                    onChangeText={ TextInputValue => this.setState({ the_loai : TextInputValue }) }    
                    underlineColorAndroid='transparent'    
                    style={styles.TextInputStyleClass}
                  />
              </View>
            <View style={styles.add}>
              <TextInput
                placeholder={this.props.navigation.getParam('dang')}   
                onChangeText={ TextInputValue => this.setState({ dang : TextInputValue }) }    
                underlineColorAndroid='transparent'    
                style={styles.TextInputStyleClass}
              /></View>
            <View style={styles.add}>
              <TextInput
                placeholder={this.props.navigation.getParam('thoi_gian')}     
                onChangeText={ TextInputValue => this.setState({ thoi_gian : TextInputValue }) }    
                underlineColorAndroid='transparent'     
                style={styles.TextInputStyleClass}
              /></View>
            <View style={styles.add}>
              <TextInput
                placeholder={ this.props.navigation.getParam('anh')}     
                onChangeText={ TextInputValue => this.setState({ anh : TextInputValue }) }     
                underlineColorAndroid='transparent'    
                style={styles.TextInputStyleClass}
              /></View>
     
           <TouchableOpacity activeOpacity = { .4 } style={[styles.buttonContainer, styles.loginButton]} onPress={this._onUpdateMovie} >
     
              <Text style={styles.TextStyle}> UPDATE </Text>
     
           </TouchableOpacity>

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