import React from 'react'
import {View,Text, FlatList, Button} from 'react-native'
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
        <View>
            <Text>
                About Us
            </Text>
            <FlatList 
                data={items}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            {favoriteItems.map(favoriteItems=><Text onPress={()=>{
                removeFavoriteHandler(favoriteItems.id)
            }}key={favoriteItems.id}>{favoriteItems.name}</Text>)}
        </View>
    )
}

export default AboutScreen