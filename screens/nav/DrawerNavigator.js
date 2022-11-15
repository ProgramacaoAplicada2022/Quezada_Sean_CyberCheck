import React from "react";
import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from "@react-navigation/drawer";
import {Home, Profile, Ajuda, Assinatura} from '../index';
import { StackNavigator } from "./StackNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home}/>
        <Drawer.Screen name="Perfil" component={Profile} />
        <Drawer.Screen name="Assinaturas" component={Assinatura}/>
        <Drawer.Screen name="Ajuda" component={Ajuda} />
    </Drawer.Navigator>
  );
}

export { DrawerNavigator }