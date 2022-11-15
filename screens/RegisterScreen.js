import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView,KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { auth } from '../firebase'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const RegisterScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [cpf, setCpf] = useState('')
  const [confirmEmail, setConfirmEmail] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const navigation = useNavigation()

  const goSignIn =() => {
      navigation.navigate('Login')
  }  
  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Registered with:', user.email);
      })
      .catch(error => alert(error.message))
  }
    return (
      <SafeAreaView style={{flex:1,backgroundColor: '#4fbdfd'}}>
      <KeyboardAvoidingView style={{flex:1, justifyContent:'center', alignItems:'center', behavior:"height", backgroundColor: '#4fbdfd'}}>
      <View style={{width:'100%',flex:1.5,marginTop:20,marginLeft:20}}>
          <TouchableOpacity
          onPress={goSignIn}>
          <Ionicons name="arrow-back" size={32} color="white" />
          </TouchableOpacity>
      </View>
      <View style={{width:'90%'}}>
      <Text style={{fontSize:32, fontWeight: '600', paddingLeft:10,paddingBottom:5, color: 'white'}}>Crie sua conta</Text>
      </View>
      <View style={{ borderRadius:10, flex:10 , backgroundColor:"#fff",width:'90%', alignItems:'center', justifyContent:'center', shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,}}
      >
          <View style = {{alignItems: 'center', justifyContent: 'center', height:'95%', width:'90%'}}>
          <View style={styles.twoContainers}>
              <View style={{width:'50%', paddingRight:5}}>
              <Text style={{paddingTop:10}}> Nome : </Text>
                  <TextInput
                      placeholder=""
                      value={firstName}
                      onChangeText={text => setFirstName(text)}
                      style={styles.twoContainersInput}
                      selectionColor='#4fbdfd'
                  />
              </View> 
              <View style={{width:'50%', paddingLeft:5}}>
                <Text style={{paddingTop:10}}> Sobrenome : </Text>
                  <TextInput
                      placeholder=""
                      value={lastName}
                      onChangeText={text => setLastName(text)}
                      style={styles.twoContainersInput}
                      selectionColor='#4fbdfd'
                />
              </View>
          </View>
        <View style={styles.inputContainer}>
          <Text style={{paddingTop:10}}> Email :</Text>
          <TextInput
          placeholder=""
          value={email}
          onChangeText={text => setEmail(text)}
          style={[styles.input]}
          selectionColor='#4fbdfd'
          />
          <Text style={{paddingTop:10}}> Senha : </Text>
          <TextInput
          placeholder=""
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry
          selectionColor='#4fbdfd'
          />
          <Text style={{paddingTop:10}}> Confirme sua senha : </Text>
          <TextInput
          placeholder=""
          value={confirmPassword}
          onChangeText={text => setConfirmPassword(text)}
          style={styles.input}
          secureTextEntry
          selectionColor='#4fbdfd'
          />          
        </View>
    <View style={{width:'100%', alignItems:'center', justifyContent:'center'}}>
      <View style={styles.buttonContainer}>
          <TouchableOpacity
          onPress={handleSignUp}
          style={styles.button}
          >
          <Text style={styles.buttonText}>Registrar</Text>
          </TouchableOpacity>
      </View>
    
    {/* <View style={styles.container}>
      <Text style={{
        fontSize: 20,
        color: '#5F5F5F',
      }}> Já possui conta? <TouchableOpacity
        onPress={goSignIn}>
        <Text style={{
          fontSize: 20, 
          color: 'blue',
        }}>
        Log in
        </Text>
        </TouchableOpacity> 
      </Text>   
      </View> */}
    </View>
    </View>
    </View>
    <View style={{flex:1.5}}></View>
  </KeyboardAvoidingView>
  </SafeAreaView>
  );
}

export default RegisterScreen

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#abc'
  },
  inputContainer: {
    width: '80%'
  },
  twoContainers:{
    width: '80%',
    flexDirection:"row",
    justifyContent: 'center',
  },
  twoContainersInput:{
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
    borderWidth: 1,
    borderColor: '#4fbdfd',
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
    borderWidth: 1,
    borderColor: '#4fbdfd',
  },
    shadowProp: {
    elevation: 20,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  twoButtonContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
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
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#0782F9',
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 22,
  },
  buttonOutlineText: {
    color: '#0782F9',
    fontWeight: '700',
    fontSize: 22,
  },
})