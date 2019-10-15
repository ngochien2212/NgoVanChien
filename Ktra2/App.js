import {createAppContainer, StackActions} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import LoginScreen from './src/screens/login';
import SettingsScreen from './src/setting';
import DulieuScreen from './src/screens/Dulieu';
import ThongtinScreen from './src/screens/thongtin';
import AddScreen from './src/screens/add';
import EditScreen from './src/screens/edit';
const LoginStack = createStackNavigator({
  login: LoginScreen,
  Dulieu: DulieuScreen,
  thongtin: ThongtinScreen,
  add: AddScreen,
  edit: EditScreen,
});

// const TabNavigator = createMaterialBottomTabNavigator({
//   Home: { screen: HomeScreen },
//   Settings: { screen: SettingsScreen },
// });
const App = createAppContainer(LoginStack);
  // login: LoginStack,
  // setting: SettingsScreen, 
export default App;