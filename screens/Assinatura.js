import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {StyleSheet, SafeAreaView, View, Text, Button, TouchableOpacity,ScrollView,Dimensions} from 'react-native';
import estilo from '../src/style';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
const Assinatura =() =>{
    const navigation = useNavigation();
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    return (
    	<SafeAreaView style={{flex:1, backgroundColor: '#4fbdfd'}}>
             
            <View style={{width:'10%'}}>
            <TouchableOpacity
                onPress={() => navigation.openDrawer()}
                style={{paddingLeft:10}}>
                <Entypo name="menu" size={28} color="white" />
            </TouchableOpacity>
            </View>
            
            <View style={{alignItems: 'center'}}>
                <Text style={[estilo.txtG, {color:'white'}]}> 
                    Pagamento
                </Text>

            </View>
            <ScrollView style={{flex:1,flexDirection:"row"}}>
            <SafeAreaView style={{alignItems:'center',margingBottom:10,width:windowWidth}}>
            <View style={{ marginTop:25,borderRadius:10,height:200, backgroundColor:"#fff", width:'75%', alignItems:'center', shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11}}
      >
          </View>
          </SafeAreaView>

          <View style={{flex:1, marginTop:50,paddingLeft:25}}>
                <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}> 
                    Formas de Pagamento
                </Text>

            </View>
            <View style={{flex:1,flexDirection:'column', marginBottom:300}}>
        <View style={styles.itemAval}>
    
            <View style={{flex:1, width:'100%',flexDirection:'row'}}>
            <FontAwesome name="cc-mastercard" size={22} color="#black" /><Entypo name="dots-three-horizontal" size={22} color="black" style={{paddingLeft:5}}/><View ><Text>5478{'     '}(Débito)</Text></View>
            </View>
            <View style={{flex:3,position:'absolute',left:'100%',top:'70%'}}>
                <Text style={{color:'#299CE6'}}><AntDesign name="arrowright" size={28} color="#4fbdfd" /></Text>
            </View>
        
        </View>

        <View style={styles.itemAval}>
       
        <View style={{flex:1, width:'100%',flexDirection:'row', alignItems: 'center'}}>
            <View><FontAwesome name="cc-mastercard" size={22} color="black" /></View><View style={{paddingLeft:5}}><Entypo name="dots-three-horizontal" size={22} color="black" /></View><View><Text>9761{'    '}(Crédito)</Text></View>
            </View>
            <View style={{flex:3,position:'absolute',left:'100%',top:'70%'}}>
                <Text style={{color:'#299CE6'}}><AntDesign name="arrowright" size={28} color="#4fbdfd" /></Text>
            </View>
        </View>
        </View>
        </ScrollView>
        </SafeAreaView>
      
        
    );
}
const styles=StyleSheet.create({
    itemAval:{
        flexDirection: 'row',
        justifyContent:'center',
        alignSelf:'center',
        color: 'white',
        marginTop:30,
        height:70,
        padding:20,
        width:'90%',
        backgroundColor:'white',
        borderRadius:20,
         borderColor:'#0782F9', borderWidth:0
    },

    buttonBox:{
        paddingVertical:30,
        color:'white',
        alignItems:'flex-end',
        marginRight:30,
        //borderWidth:3,
    
    },

    button:{
        backgroundColor: 'white',
        marginBottom:3,
        marginLeft:3,
        borderRadius: 20,
        fontWeight: 'bold',
    }
})
export default Assinatura