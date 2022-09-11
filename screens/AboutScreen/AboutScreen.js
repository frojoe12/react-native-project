import React from 'react'
import {View,Text, FlatList, Button,Pressable} from 'react-native'
import Item from "../../components/Item"
import favorites from '../../store/redux/favorites'
import {useDispatch, useSelector} from 'react-redux'
import { addFavorite, removeFavorite, removeAllFavorites} from '../../store/redux/favorites'

const items = [
    {id:'df34dfg',name:'Hiking'},
    {id:'4tdfgtw',name:'Swimming'},
    {id:'fiocv098',name:'Driving'},
    {id:'dfioh',name:'Fishing'},
    {id:'v8u9j',name:'Cycling'} 
]

const AboutScreen = () => {
    const renderItem = (({item})=><Item addFavoriteHandler={addFavoriteHandler} itemName={item.name} itemId={item.id} />)
    const favoriteItemIds = useSelector(state => state.favoriteItems.ids)
    const favoriteItems = items.filter(item => favoriteItemIds.includes(item.id))
    const dispatch = useDispatch()

    const addFavoriteHandler = (itemId) => {
        dispatch(addFavorite({id: itemId}))
    }
    const removeFavoriteHandler = (itemId) => {
        dispatch(removeFavorite({id: itemId}))
    }
    return (
        <View className="flex-1 justify-start align-start">
            <View className="flex-1 p-5">
            <FlatList 
                data={items}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            </View>
            <View className="flex-1 p-5">
                <Text className="py-2">Things I Like:</Text>
                <View className="flex-1 flex-row flex-wrap">
            {favoriteItems.map(favoriteItems=><Pressable onPress={()=>{
                removeFavoriteHandler(favoriteItems.id)
            }}key={favoriteItems.id}><View className="p-2 mr-1 mb-1 bg-slate-500" ><Text className="text-white">{favoriteItems.name}</Text></View></Pressable>)}
            </View>
            </View>
            
            
        </View>
    )
}

export default AboutScreen