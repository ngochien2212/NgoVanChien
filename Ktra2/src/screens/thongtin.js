import React from 'react';
import { FlatList, ActivityIndicator, Text, View,Image,StyleSheet ,TouchableHighlight,Alert } from 'react-native';
export default class ThongtinScreen extends React.Component {
  static navigationOptions =
   {
      title: 'Thông tin chi tiết',
   };
  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

 

  render(){
    const {navigate} = this.props.navigation;

    return(
      <View style={{flex: 1, paddingTop:20}}>
       
              <View style={styles.container}>
                <View style={{flexDirection:'row'}}>
                  <Image style={styles.icon} source= {{uri: this.props.navigation.getParam('anh')}}/>
                </View>
                <View style={styles.item}>
                  <Text style={styles.ten}>{this.props.navigation.getParam('ten_phim')} </Text>
                  <Text style={{marginLeft:10,}}>Mô tả: {this.props.navigation.getParam('noi_dung')}</Text>
                </View>
              </View>
        <View style={{flexDirection:'row',justifyContent:'center'}}>
        <TouchableHighlight onPress={() => navigate('edit',{
          id      :this.props.navigation.getParam('id'),
          ten_phim:this.props.navigation.getParam('ten_phim'),
          noi_dung:this.props.navigation.getParam('noi_dung'),
          the_loai:this.props.navigation.getParam('the_loai'),
          dang    :this.props.navigation.getParam("dang"),
          thoi_gian:this.props.navigation.getParam('thoi_gian'),
          anh: this.props.navigation.getParam('anh'),
        })}>
        <View style={{flexDirection:"row",justifyContent:'center'}}>
          <Image style={{width:50,height:50 }} source={{uri :'https://img.icons8.com/color/2x/support.png'}}/>
        </View>
       </TouchableHighlight>
       <TouchableHighlight onPress={()=>
        Alert.alert(
          'Xóa thông tin phim',
          'Bạn có chắc chắn xóa!',
          [
            {text: 'Không', onPress: () => console.log('Không')},
           
            {text: 'OK', onPress: () =>
            {
        
              fetch('http://10.0.3.2:8080/React-native/Delete.php', {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                id: this.props.navigation.getParam('id'),
              })
          
              }).then((response) => response.text())
                  .then((responseData) => {
                    alert(responseData);        
                      this.props.navigation.navigate('Dulieu')
                  }).catch((error) => {
                    console.error(error);
                  });
          }
          },
          ],
          {cancelable: false},
        )
       }>
        <View style={{flexDirection:"row",justifyContent:'center'}}>
         <Image style={{width:50,height:50}} source={{uri :'https://img.icons8.com/color/2x/waste.png'}}/>
        </View>
       </TouchableHighlight>
       </View>
      </View>
      
    );
  }
}
const styles= StyleSheet.create({
  container:{
    flex: 1,
    flexDirection:'column',
    alignItems:'center',
    borderColor:'black',
    marginTop:8,
  },
  ten:{
    color:'red',
    fontSize:20,
    marginLeft:10,
    marginTop:10,
    textAlign:'center',
  },
  icon:{
      width:200,
      height:200,
      marginTop:10,
  },
})