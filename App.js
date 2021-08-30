import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CreateStoryScreen from './screens/CreateStory';
import FeedScreen from './screens/Feed';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import { NavigationContainer } from 'react-navigation';

const tab=createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <tab.Navigator screenOptions={({route})=>({
        tabBarIcon:({focused,color,size})=>{
          let iconName
          if(route.name==='Feed'){
            iconName=focused
            ?'book':'book-outline'
          }else if(route.name==='CreateStory'){
            iconName=focused
            ?'create':'create-outline'
          }
          return
          <Ionicons name={iconName} size={size} color={color} ></Ionicons>
        }
      })} tabBarOptions={{
        activeTintColor:'tomato',
        inactiveTintColor:'grey'
      }}>
        <tab.Screen name='Feed' component={FeedScreen} ></tab.Screen>
        <tab.Screen name='createStory' component={CreateStoryScreen} ></tab.Screen>
      </tab.Navigator>
    </NavigationContainer>
  );
}