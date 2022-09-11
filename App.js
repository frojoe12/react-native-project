import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { HomeScreen, AboutScreen } from "./screens"
import TestScreen from "./screens/TestScreen"
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Provider } from 'react-redux'
import { store } from './store/redux/store' 

const Stack = createNativeStackNavigator();

const homeScreenOptions = {title:"Overview"}

export default function App() {
  return (
    <>    
   
    <Provider store={store}>
      <StatusBar style="dark" hidden={false} />
      <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={homeScreenOptions}/>
            <Stack.Screen name="About" component={AboutScreen} />
          </Stack.Navigator>
      </NavigationContainer>
    </Provider>
   
    </>
  );
}


