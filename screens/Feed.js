import React,{Component} from 'react';
import { View,Text } from 'react-native'; 

export default class FeedScreen extends Component{
    render(){
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#1db954'}}>
                <Text>Feed</Text>
            </View>
        )
    }
}