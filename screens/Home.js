import {Alert, Modal, TouchableOpacity, StyleSheet, SafeAreaView, View, Text, Button, ScrollView, TextInput} from 'react-native';
import React, { useState} from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import {auth, firebase, db} from '../firebase';
import { doc, getDoc, serverTimestamp } from "firebase/firestore";
import 'firebase/firestore';
import 'firebase/auth';
import {useAuthState} from 'react-firebase-hooks/auth';
import {useCollectionData} from 'react-firebase-hooks/firestore';
import { useNavigation } from '@react-navigation/native';


const sizeBar=250;


const firestore= firebase.firestore();
const claro="#67BDF4";
const escuro="#299CE6";

function timeConverter(UNIX_timestamp){
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['Jan','Fev','Mar','Abr','Maio','Jun','Jul','Ago','Set','Out','Nov','Dec'];
  var year = a.getFullYear()-3969;
  var month = a.getMonth();
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes() < 10 ? '0' + a.getMinutes() : a.getMinutes(); 
  var sec = a.getSeconds() < 10 ? '0' + a.getSeconds() : a.getSeconds();
  var time = date + '/' + month + '/' + year + ' ' + hour + ':' + min + ':' + sec ;
  return time;
}

function ListAvals(props){
    const nome = props.avaliacao.nome;
    const tempo=timeConverter(props.avaliacao.realTime)
    return (
        <View style={{padding:10}}>
        <View style={styles.itemAval}>
        <TouchableOpacity
            onPress={() => {SpecificAval}}
            style={{width:'100%', height:'100%', flexDirection:'row'}}
        >
            <View style={{flex:1.3}}>
                <Text style={{color:'black'}}> {nome} </Text>
            </View>
            <View style={{flex:3}}>
                <Text style={{color:'black'}}> Ultima avaliação: {tempo} </Text>
            </View>
        </TouchableOpacity>
        </View>
        </View>
    );
}


const SpecificAval=({route})=>{
    const nome=route.params.nome
    return 
}

const Home =() => {
    const [modalVisible, setModalVisible] = useState(false);
    const [nome, setNome] = useState('');
    const navigation= useNavigation();
    const avalRef = db.collection("users").doc(firebase.auth().currentUser.email).collection("avals");
    const query2= avalRef.orderBy('createdAt');
    const [avaliacoes2]= useCollectionData(query2, {idField: 'id2'});
    return (
        <View style={{flex:1}}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
            <View style={[styles.centeredView, {backgroundColor: 'rgba(0, 0, 0, 0.3)'}]}>
                <View style={styles.modalView}>
                    <TextInput
                            placeholder="Nome da empresa"
                            value={nome}
                            onChangeText={text => setNome(text)}
                            style={styles.input}
                            selectionColor='#299CE6'
                    />
                    <View style={[styles.buttonView, {flexDirection:'row'}]}>
                        <View style={[styles.buttonBox,{ flex:1, alignItems:'flex-start'}]}>
                        <TouchableOpacity
                            style={styles.buttonBox}
                            onPress={() => {setModalVisible(!modalVisible)}}>
                            <Ionicons name="arrow-back" size={30} color="#299CE6" />
                        </TouchableOpacity>
                        </View>
                        <View style={[styles.buttonBox,{ flex:1, alignItems:'flex-end', paddingTop:4}]}>
                            <TouchableOpacity
                                    onPress={() => {
                                        setModalVisible(false)
                                        if(nome=="")
                                            return(alert("Informe o nome do local a ser avaliado!"));
                                        var docRef = db.collection("users").doc(firebase.auth().currentUser.email).collection("avals").doc(nome);

                                        docRef.get().then((doc) => {
                                            if (doc.exists) {
                                                alert("Já existe um local avaliado com esse nome!")
                                                console.log("Document data:", doc.data());
                                                return;
                                            } else {
                                                console.log("No such document!");
                                                const time=-firebase.firestore.Timestamp.now()
                                                navigation.navigate("Control",{screen: 'Controle1', params: {loc:nome,numero:0}})
                                                return;
                                            }
                                        }).catch((error) => {
                                            console.log("Error getting document:", error);
                                        });
                                    }}
                                    style={[styles.plusButton]}>
                                    <Ionicons name="add" size={32} color="#299CE6" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
        <SafeAreaView style={{flex:1}}>
            <View style = {{flexDirection:'row'}}>
                <View style={{flex:1}}>
                    <TouchableOpacity
                        onPress={() => navigation.openDrawer()}
                        style={{paddingLeft:10}}>
                        <Entypo name="menu" size={28} color='black' />
                    </TouchableOpacity>
                </View>
                <View style={{flex:1, alignItems:'flex-end', padding:5, paddingRight:15}}>
                    <TouchableOpacity
                        onPress={() => setModalVisible(true)}
                        style={{height:30, width:30, borderRadius:30, alignItems:'center', justifyContent:'center'}}>
                        <AntDesign name="plus" size={30} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{alignItems: 'center'}}>
                <Text style={{fontSize:32}}> 
                    Avaliações
                </Text>
                </View>
            <ScrollView >
            
                {avaliacoes2&& avaliacoes2.map(aval=>{
                    const tempo=timeConverter(aval.realTime);
                    return(
                        <View key={aval.id2} style={{padding:10}}>
                        <View style={styles.itemAval}>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate("Control",{screen: 'Avalia', params: {loc:aval.nome}})
                            }}
                            style={{width:'100%', height:'100%', flexDirection:'row'}}
                        >
                            <View style={{flex:1.3}}>
                                <Text style={{color:'black'}}> {aval.nome} </Text>
                            </View>
                            <View style={{flex:3}}>
                                <Text style={{color:'black'}}> Ultima avaliação: {tempo} </Text>
                            </View>
                        </TouchableOpacity>
                        </View>
                        </View>
                    );
                })}
            </ScrollView>
        </SafeAreaView>
        </View>
    );
}

export default Home

const styles=StyleSheet.create({
    itemAval:{
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center',
        color: 'white',
        padding:20,
        backgroundColor:'white',
        borderRadius:20,
         borderColor:'#0782F9', borderWidth:1
    },

    buttonBox:{
        paddingVertical:30,
        color:'white',
        alignItems:'flex-end',
        marginRight:30,
        //borderWidth:3,
    
    },
    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //marginTop: 22,
  },
  buttonView:{
    justifyContent: 'center',
    height:40,
    width:200,
    flexDirection:'row',
  },

  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderWidth: 2,
    borderColor: "#299CE6" ,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor:"#299CE6",
  },
  
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  buttonBox:{
      marginTop:5,
      width:sizeBar/2.5,
      justifyContent:'center',
  },

  input:{
      backgroundColor: 'white',
      paddingHorizontal: 10,
      paddingVertical: 10,
      borderRadius: 10,
      marginTop: 10,
      width: sizeBar,
      borderWidth: 1,
      justifyContent: 'center',
      borderColor: "#299CE6" ,
      
  },
})