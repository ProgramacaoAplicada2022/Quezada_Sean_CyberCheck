import React from 'react';
import {SafeAreaView, View, Text,Image,Button} from 'react-native';
import {Home, Profile, Ajuda, Assinatura} from './index'
export default function CustomDrawer() {
    return(
        <SafeAreaView style={{flex:1, backgroundColor:'#E5efdf'}}>
            <View style={{flex:0.15, paddingTop: 40, alignItems: 'center'}}> 
                <Text style={{fontSize: 32}}> Nome sla</Text>
            </View>
            <View style={{flex:0.1, paddingRight: 10, paddingLeft: 10}}>
            <View style={{flex:0.8, justifyContent: 'center' ,alignItems:'left', backgroundColor:'red'}}> 
            <Button
                color="#4fbdfd"
                title="Home"
                onPress={() => {
                this.props.navigation.navigate('Home');
              }}
            />
            </View>
            </View>


            <View style={{flex:0.1, paddingRight: 10, paddingLeft: 10}}>
            <View style={{flex:0.8, justifyContent: 'center' ,alignItems:'left', backgroundColor:'red'}}> 
            <Button
                color="#4fbdfd"
                title="Profile"
                onPress={() => {
                this.props.navigation.navigate('Profile');
              }}
            />
            </View>
            </View>


            <View style={{flex:0.1, paddingRight: 10, paddingLeft: 10}}>
            <View style={{flex:0.8, justifyContent: 'center' ,alignItems:'left', backgroundColor:'red'}}> 
            <Button
                color="#4fbdfd"
                title="Assinaturas"
                onPress={() => {
                this.props.navigation.navigate('Assinatura');
              }}
            />
            </View>
            </View>


            <View style={{flex:0.1, paddingRight: 10, paddingLeft: 10}}>
            <View style={{flex:0.8, justifyContent: 'center' ,alignItems:'left', backgroundColor:'red'}}> 
            <Button
                color="#4fbdfd"
                title="Ajuda"
                onPress={() => {
                this.props.navigation.navigate('Ajuda');
              }}
            />
            </View>
            </View>
        </SafeAreaView>
    );
}