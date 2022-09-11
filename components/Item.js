import React from 'react'
import {View,Text, Button} from 'react-native'

const Item = ({itemName, itemId, addFavoriteHandler}) => {
    return (
        <View><Text>{itemName}</Text><Button title="+" onPress={()=>{addFavoriteHandler(itemId)}} /></View>
    )
}

export default Item