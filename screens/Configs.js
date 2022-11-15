import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Configs = () => {
    return (
        <View style={{flex:1}}>
      <TouchableOpacity
         onPress={() => navigation.openDrawer()} 
      > <Text>Press Here</Text>
      </TouchableOpacity>
        <View>
            <Text>Configs</Text>
        </View>
    </View>
    )
}

export default Configs

const styles = StyleSheet.create({})
