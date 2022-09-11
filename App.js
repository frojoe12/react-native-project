import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { HomeScreen, AboutScreen } from "./screens"
import TestScreen from "./screens/TestScreen"
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Provider } from 'react-redux'
import { store } from './store/redux/store' 
import Ionicons from 'react-native-vector-icons/Ionicons';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const homeScreenOptions = {
  title:"Home",tabBarIcon:()=><Ionicons name="home" size={25} color="#0055ff"/>
}

const aboutScreenOptions = {
  title:"About",tabBarIcon:()=><Ionicons name="information-circle" size={25} color="#0055ff"/>
}

export default function App() {
  return (
    <>    
   
    <Provider store={store}>
      <StatusBar style="dark" hidden={false} />
      <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} options={homeScreenOptions} />
            <Tab.Screen name="About" component={AboutScreen} options={aboutScreenOptions} />          
          </Tab.Navigator>
      </NavigationContainer>
    </Provider>
   
    </>
  );
}


