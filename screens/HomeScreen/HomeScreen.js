import React from 'react'
import {View,Text, Button} from 'react-native'

const HomeScreen = ({navigation}) => {
    return (
        <View className="p-10 flex-1 align-center justify-center">
          
      <Text className="text-slate-400 text-3xl text-center">Demo Project in React Native!</Text>
      <Button 
        title="Go To About Us"
        onPress = {()=>navigation.navigate('About')}
      />
      </View>
    )
}

export default HomeScreen