import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Button } from 'react-native'
import { auth } from '../firebase'

import { useRoute } from '@react-navigation/native';



const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
 
  const navigation = useNavigation()
  

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.replace("Logged")
      }
    })
    return unsubscribe
  }, [])

  const goSignUp = () => {
    navigation.navigate('RegisterScreen')
  }

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Logged in with:', user.email);
      })
      .catch(error => alert(error.message))
  }

  return (
    <KeyboardAvoidingView style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor: '#4fbdfd'}} behavior={'none'}>
      <View style={{marginBottom:20}}>
      <Text style={{ fontSize:40,color:'white'}}> CyberCheck </Text>
      </View>
      <View style={{ borderRadius:10,height:'70%', backgroundColor:"#fff", width:'90%', alignItems:'center', justifyContent:'center', shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,}}
      >
        <View style={[styles.inputContainer, {marginTop: 20}]}>
        
        <Text style={{fontSize:16, color:'black'}}> E-mail :</Text>
          <TextInput
            placeholder=""
            value={email}
            onChangeText={text => setEmail(text)}
            style={[styles.input]}
            selectionColor='#4fbdfd'
          />
          <Text style={{paddingTop:12, fontSize:16, color: 'black'}}> Senha :</Text>
          <TextInput
            placeholder=""
            value={password}
            onChangeText={text => setPassword(text)}
            style={styles.input}
            secureTextEntry
            selectionColor='#4fbdfd'
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={handleLogin}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
          <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 10,
          }}
        />
          <TouchableOpacity
            onPress={goSignUp}
            style={[styles.button, styles.buttonOutline]}
          >
            <Text style={styles.buttonOutlineText}>Cadastrar-se</Text>
          </TouchableOpacity>
          <View style={{marginTop: 15 ,width: "100%",alignItems:'center' }}>
            <Text style={{marginBottom:2,width: '100%',textAlign: 'center',fontSize:12}}>
               Ao cadastrar-se, você concorda com nossos Termos de Uso.
            </Text>
            <Button 
            style={{backgroundColor: '#4fbdfd', color: 'white', textTransform: 'uppercase', marginBottom:10}}
            title="Termos de Uso"   
            onPress={() => {
              navigation.setOptions({headerShown:false});
              navigation.navigate('TermosDeUso2'); 
            }}
          />

        
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

export default LoginScreen


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
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