import React, { Component } from 'react';
import {View, Text, Button} from 'react-native';
import firestore from "@react-native-firebase/firestore";



class FirebaseApp extends Component {
    constructor(props){
        super(props);
        this.getUser();
    }
    getUser=asyn() =>{
        const userDocument=await firestore().collection("users").doc(M41n9TeqiGHjrwjC4lKm).get())
        console.log(userDocument);
    }
    render() {
        return (
            <View>
                <Text> FirebaseApp </Text>
            </View>
        );
    }
}