import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import {firebase, db} from '../firebase';
import 'firebase/firestore';
import 'firebase/auth';
import {useAuthState} from 'react-firebase-hooks/auth';
import {useCollectionData} from 'react-firebase-hooks/firestore';

const firestore= firebase.firestore();

const Team = () => {
    return (
        <View>
            <Text></Text>
        </View>
    )
}

export default Team

const styles = StyleSheet.create({})
