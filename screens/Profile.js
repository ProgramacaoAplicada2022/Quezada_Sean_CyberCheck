import React, { useEffect, useState } from 'react'
import { Dimensions, TouchableHighlight,Button,Image,SafeAreaView,KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native'
import estilo from '../src/style';
import { ImagePicker } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import style from '../src/style';
import * as firebase from 'firebase';
import { useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';
import icon from '../assets/icon.png'; 
const Profile =()=> {
        const [passwordOld, setPasswordOld] = useState('')
        const [passwordNew, setPasswordNew] = useState('')
        const [passwordNewC, setPasswordNewC] = useState('')
        const navigation=useNavigation();
      
        onChooseImagePress = async () => {
          let result = await ImagePicker.launchCameraAsync();
          //let result = await ImagePicker.launchImageLibraryAsync();
      
          if (!result.cancelled) {
            this.uploadImage(result.uri, "test-image")
              .then(() => {
                Alert.alert("Success");
              })
              .catch((error) => {
                Alert.alert(error);
              });
          }
        }
      
        uploadImage = async (uri, imageName) => {
          const response = await fetch(uri);
          const blob = await response.blob();
          var ref = firebase.storage().ref().child("images/" + imageName);
          return ref.put(blob);
        }
      
          return (

           

            <SafeAreaView style={{flex:1,  backgroundColor: '#4fbdfd', justifyContent:'center', alignItems:'center'}}>
          <View style={{width:'100%'}}>
            <View style={{width:'10%'}}>

            <TouchableOpacity
                onPress={() => navigation.openDrawer()}
                style={{paddingLeft:10,justifyContent:'flex-start'}}>
                <Entypo name="menu" size={28} color="white" />
              </TouchableOpacity>
            </View>
            </View>

            <View style={{alignItems: 'center'}}>
              <View style={{flexDirection:'row', paddingLeft:40}}>{/*Se der ko trocar o paddingleft pra centralizar*/}

            <TouchableHighlight
      style = {{
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        width: Dimensions.get('window').width * 0.5,
        height: Dimensions.get('window').width * 0.5,
        
        justifyContent: 'center',

        alignItems: 'center', 
        

      }}
      underlayColor = '#fff'
      onPress = { () => alert('Yaay!') }
    >
      <Image source={icon} style={{  borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        width: Dimensions.get('window').width * 0.5,
        height: Dimensions.get('window').width * 0.5,
        backgroundColor:'#fff',
        justifyContent: 'center',
        alignItems: 'center' }} /> 

    </TouchableHighlight>
    <View style={{justifyContent: 'flex-end'}}>
    <TouchableOpacity onPress= {this.onChooseImagePress}
            style={[{ backgroundColor: 'white',
            padding: 10,
            borderRadius: 25,
            height: 50, 
            alignItems: 'center', 
            justifyContent: 'center'}]}>
            <Ionicons name="camera-outline" size={32} color="#4fbdfd" />
              
    </TouchableOpacity>
    </View>
    </View>
            </View> 

            <View style={{width:'90%', justifyContent:'flex-start'}}>
            <Text style={{fontSize:26, color:'white', justifyContent:'center'}}>Conta</Text>
            </View>
            <View style={{ padding:15, paddingBottom:20, marginBottom: 20, borderRadius:10,flex:1.4, backgroundColor:"#fff", width:'90%',  justifyContent:'center', shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 5,
              },
              shadowOpacity: 0.36,
              shadowRadius: 6.68,

              elevation: 11,}}
            >
            <View style={{padingBottom:30}}>
            <Text style={{fontSize:16, color:'black', paddingLeft:20}}>Email: cybercheck24@gmail.com</Text>
            <Text style={{fontSize:16, color:'black', paddingLeft:20}}>Nome: Cyber Check</Text>
            </View>
            <View style={{width:'95%', justifyContent:'flex-start', marginTop:20}}>
            <Text style={{fontSize:20, color:'#4fbdfd',paddingLeft:20, justifyContent:'flex-start'}}>Troque sua senha:</Text>
            </View>
            <View style={{width:'95%', justifyContent:'center', alignItems: 'center'}}>
                <View style={{alignItems: 'flex-start', width:'100%'}}>
              <Text style={{paddingTop:12,paddingLeft:30, fontSize:16, color: 'black'}}> Senha atual:</Text>
                </View>
                <TextInput
                  placeholder=""
                  value={passwordOld}
                  onChangeText={text => setPasswordOld(text)}
                  style={styles.input}
                  secureTextEntry
                  selectionColor='#4fbdfd'
                />
              </View>
              <View style={{width:'95%', justifyContent:'center', alignItems: 'center'}}>
                <View style={{alignItems: 'flex-start', width:'100%'}}>
              <Text style={{paddingTop:12,paddingLeft:30, fontSize:16, color: 'black'}}> Senha nova:</Text>
                </View>
                <TextInput
                  placeholder=""
                  value={passwordNew}
                  onChangeText={text => setPasswordNew(text)}
                  style={styles.input}
                  secureTextEntry
                  selectionColor='#4fbdfd'
                />
              </View>
              <View style={{width:'95%', justifyContent:'center', alignItems: 'center'}}>
                <View style={{alignItems: 'flex-start', width:'100%'}}>
              <Text style={{paddingTop:12,paddingLeft:30, fontSize:16, color: 'black'}}> Confirme sua nova senha:</Text>
                </View>
                <TextInput
                  placeholder=""
                  value={passwordNewC}
                  onChangeText={text => setPasswordNewC(text)}
                  style={styles.input}
                  secureTextEntry
                  selectionColor='#4fbdfd'
                />
              </View>
            </View>
            

            </SafeAreaView>
          );
        }

        export default Profile

      


const styles = StyleSheet.create({
  
  button: {backgroundColor: 'white', color:'#4fbdfd', fontSize:16, fontWeight: 'bold'},

  inputContainer: {
    width: '80%',
  },
  input: {
    fontSize:24,
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 6,
    marginTop: 5,
    borderWidth:1,
    borderColor: '#4fbdfd',
    width:'80%', 
  },
  buttonContainer: {
    width: '75%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },  
  button: {
    backgroundColor: '#4fbdfd',
    width: '100%',
    padding: 15,
    borderRadius: 6,
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#4fbdfd',
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 22,
  },
  buttonOutlineText: {
    color: '#4fbdfd',
    fontWeight: '700',
    fontSize: 22,
  },
})

      