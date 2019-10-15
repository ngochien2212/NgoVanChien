import React from 'react';
import { FlatList, ActivityIndicator, Text, View,Image,StyleSheet, TouchableHighlight } from 'react-native';
import Swipeout from 'react-native-swipeout';
export default class DulieuScreen extends React.Component {
  static navigationOptions =
   {
      title: 'Danh sách phim',
   };
  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }
 
  componentDidMount(){
    return fetch('http://10.0.3.2:8080/React-native/dulieu.php')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }



  render(){
    const {navigate} = this.props.navigation;

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }
    

    return(
      <View style={{flex: 1, paddingTop:20}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => (
            <TouchableHighlight onPress={() => navigate('thongtin',{
              id:item.id,
              ten_phim:item.ten_phim,
              noi_dung:item.noi_dung,
              the_loai:item.the_loai,
              dang:item.dang,
              thoi_gian:item.thoi_gian,
              anh:item.anh,
            })}>
              <View style={styles.container}>
                <View style={{flexDirection:'row'}}>
                  <Image style={styles.icon} source= {{uri: item.anh}}/>
                </View>
                <View style={styles.item}>
                  <Text style={styles.ten}>{item.ten_phim} </Text>
                  <Text style={{marginLeft:10,}}>Thời gian: {item.thoi_gian}</Text>
                </View>
              </View>
            </TouchableHighlight>
          )
          
        }
          keyExtractor={({id}, index) => id}
        />
         <TouchableHighlight onPress={() => navigate('add',)}>
         <Image style={{marginLeft:330 ,width:50,height:50,marginTop:10 }} source={{uri :'https://img.icons8.com/color/2x/add.png'}}
          />
         </TouchableHighlight>
      </View>
      
    );
  }
}
const styles= StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'rgb(234, 195, 176)',
    flexDirection:'row',
    borderColor:'black',
    marginTop:8,
  },
  item:{
    height:70,
    justifyContent:'center',
  },
  ten:{
    color:'red',
    marginLeft:10,
  },
  icon:{
      width:70,
      height:70,
      marginTop:8,
      marginLeft:8,
      marginBottom:8,
  },
})