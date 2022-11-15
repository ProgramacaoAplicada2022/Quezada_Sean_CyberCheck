import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {StyleSheet, SafeAreaView, View, Text, Button, TouchableOpacity} from 'react-native';
import estilo from '../src/style';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const Ajuda =() =>{
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
            <View style={{alignItems: 'center'}}>
                <Text style={estilo.txtG}> 
                    Ajuda
                </Text>

            </View>
        </SafeAreaView>
    );
}

export default Ajuda