import React, {useEffect, useState } from "react";
import { Button, View, Text, StyleSheet} from "react-native";

import { useNavigation } from '@react-navigation/native'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {Home, Relatorio, Profile, Ajuda, Assinatura, Avals , TermosDeUso, TermosDeUso2, Configs, Avalia, 
    Controle1, Controle2, Controle3, Controle4, Controle5, Controle6, Controle7, Controle8, Controle9, Controle10, Controle11, Controle12, Controle13, Controle14, Controle15, 
    Controle16, Controle17, Controle18, Controle19, Controle20
} from "./screens/index";
import RegisterScreen from './screens/RegisterScreen'
import DrawerContent from './screens/nav/DrawerContent'
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';


import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import {useAuthState} from 'react-firebase-hooks/auth';
import {useCollectionData} from 'react-firebase-hooks/firestore';
import { auth } from './firebase'

import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

function goToHome(){
  return 
}
function StackNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} options={{headerShown:false}}/>
      <Stack.Screen name="Assinaturas" component={Assinatura}/>
    </Stack.Navigator>
  );
}
function controleNav(){
  return (
    <Drawer.Navigator
      screenOptions={{
      swipeEdgeWidth: 0,
      }}
    >
      <Drawer.Screen name="Controle1" component={Controle1} options={{headerShown:false}}/>
      <Drawer.Screen name="Controle2" component={Controle2} options={{headerShown:false}}/>
      <Drawer.Screen name="Controle3" component={Controle3} options={{headerShown:false}}/>
      <Drawer.Screen name="Controle4" component={Controle4} options={{headerShown:false}}/>
      <Drawer.Screen name="Controle5" component={Controle5} options={{headerShown:false}}/>
      <Drawer.Screen name="Controle6" component={Controle6} options={{headerShown:false}}/>
      <Drawer.Screen name="Controle7" component={Controle7} options={{headerShown:false}}/>
      <Drawer.Screen name="Controle8" component={Controle8} options={{headerShown:false}}/>
      <Drawer.Screen name="Controle9" component={Controle9} options={{headerShown:false}}/>
      <Drawer.Screen name="Controle10" component={Controle10} options={{headerShown:false}}/>
      <Drawer.Screen name="Controle11" component={Controle11} options={{headerShown:false}}/>
      <Drawer.Screen name="Controle12" component={Controle12} options={{headerShown:false}}/>
      <Drawer.Screen name="Controle13" component={Controle13} options={{headerShown:false}}/>
      <Drawer.Screen name="Controle14" component={Controle14} options={{headerShown:false}}/>
      <Drawer.Screen name="Controle15" component={Controle15} options={{headerShown:false}}/>
      <Drawer.Screen name="Controle16" component={Controle16} options={{headerShown:false}}/>
      <Drawer.Screen name="Controle17" component={Controle17} options={{headerShown:false}}/>
      <Drawer.Screen name="Controle18" component={Controle18} options={{headerShown:false}}/>
      <Drawer.Screen name="Avalia" component={Avalia} options={{headerShown:false}}/>
      <Drawer.Screen name="Relatorio" component={Relatorio} options={{headerShown:false}}/>
    </Drawer.Navigator>
  )
}
function avalNav(){
  return (
    <Stack.Navigator>
      <Stack.Screen name="Avals" component={Avals} options={{headerShown:false}}/>
      <Stack.Screen name="Avalia" component={Avalia} options = {{ headerShown:true}}/>
      <Stack.Screen name="Control" component={controleNav} options={{headerShown:false}}/>
    </Stack.Navigator>
  );
}

function DrawerNav() {
  return (
    <Drawer.Navigator
        drawerContent={(props) => <DrawerContent {...props} />}
        initialRouteName="Home"
        screenOptions={{headerShown:false}}
      >
        <Drawer.Screen name="Avaliações" component= {avalNav}  options={{drawerIcon: ({focused, size}) => (
              <Fontisto
                 name="prescription"
                 size={28}
                 color={'#0782F9'}
              />
           ),}}/>
        <Drawer.Screen name="Profile" component={Profile} options={{drawerIcon: ({focused, size}) => (
              <AntDesign
                 name="user"
                 size={22}
                 color={'#0782F9'}
              />
           ),}}/>
        <Drawer.Screen name="Assinaturas" component = {Assinatura} options={{drawerIcon: ({focused, size}) => (
              <Entypo
                 name="key"
                 size={22}
                 color={'#0782F9'}
              />
           ),}}/>
        <Drawer.Screen name="Termos de Uso" component={TermosDeUso} options={{drawerIcon: ({focused, size}) => (
              <Feather
                 name="file-text"
                 size={22}
                 color={'#0782F9'}
              />
           ),}}/>
      </Drawer.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
        <Stack.Screen options={{headerShown:false }} name="TermosDeUso2" component={TermosDeUso2}/>
        <Stack.Screen options={{headerShown:false }} name="Logged" component={DrawerNav}/>
        <Stack.Screen options={{headerShown:false }} name="RegisterScreen" component={RegisterScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff646',
    alignItems: 'center',
    justifyContent: 'center',
  },
});