import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {Home, Profile, Ajuda, Assinatura} from '../index';
const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Ajuda" component={Ajuda} />
    </Stack.Navigator>
  );
}

export { StackNavigator }