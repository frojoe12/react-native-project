import React from 'react'
import {View,Text, Button,Pressable} from 'react-native'

const Item = ({itemName, itemId, addFavoriteHandler, disabled}) => {
    return (
        <View className="flex-1 flex-row"><Text className="bg-slate-200 content-center p-3">{itemName}</Text><Pressable className="align-center" onPress={!disabled ? ()=>{addFavoriteHandler(itemId)} : null}><View className={!disabled ? "p-3 bg-slate-500" : "p-3 bg-slate-300"} ><Text className="text-white">+</Text></View></Pressable></View>
    )
}

export default Item