import React from 'react'
import { useNavigation } from '@react-navigation/native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  createDrawerNavigator
} from '@react-navigation/drawer';

const Drawer=createDrawerNavigator();
import { SafeAreaView,  TouchableOpacity, StyleSheet, Text, View, Button ,Image} from 'react-native'
import {Dimensions,TouchableHighlight,Home, Profile, Ajuda, Assinatura, Avals , TermosDeUso} from "../index";
import { AntDesign } from '@expo/vector-icons';
import { auth } from '../../firebase'
import icon from '../../assets/icon.png'; 

const DrawerContent = (props) => {
    const navigation = useNavigation()

  const goHome =() =>{
    navigation.navigate("Home")
  }
  const goProfile =()=>{
    navigation.navigate("Profile")
  }
  const goAssinatura =()=>{
    navigation.navigate("Assinaturas")
  }
  const goAvals =()=>{
    navigation.navigate("Avaliações")
  }
  const goTermos =() =>{
    navigation.navigate("Termos de Uso")
  }
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
  }

    return (
        <SafeAreaView style={{flex:1, justifyContent:'center', alignItems:'center'}} forceInset={{top: "always", horizontal: "never"}}>
            <DrawerContentScrollView {...props} style={{width:'100%',flex:1}}>
              <DrawerItemList {...props}/>
            </DrawerContentScrollView>
            <View
              style={{
                width:'80%',
                borderBottomColor: '#0782f9',
                borderBottomWidth: 1,
                paddingBottom:10
              }}
            />
            <View style={{width:'100%',paddingBottom: 20, paddingTop:10}}>
                <DrawerItem
                  icon={({focused, size}) => <AntDesign name="logout" size={22} color={'#0782f9'}/>}
                  label="Sair"
                  onPress={handleSignOut}/>
                 </View>
        </SafeAreaView> 
        );
}

export default DrawerContent

const styles = StyleSheet.create({
  buttonText:{
    fontSize:14,
    paddingLeft: 16,
    color:'#5a5a5a'
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor:'#4fbdfd',
    borderTopWidth: 1
  },
})
