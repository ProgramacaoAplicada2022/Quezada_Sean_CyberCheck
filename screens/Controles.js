import React from 'react';
import {StyleSheet, SafeAreaView, View, Text, Button, TouchableOpacity} from 'react-native';
import style from '../src/style';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';


const Controles = ()=>{
  const navigation = useNavigation();
    return (
    <SafeAreaView style={{flex:1}}>
    <View style={{width:'10%'}}>
      <TouchableOpacity
          onPress={() => navigation.openDrawer()}
        style={{paddingLeft:10}}>
        <Entypo name="menu" size={28} color="black" />
      </TouchableOpacity>
    </View>
    <View style={{alignItems: 'center', flex: 5}}>
        <Text style={style.txtG}> 
          Home
        </Text>
    </View> 
    </SafeAreaView>
  );
}
export default Controles