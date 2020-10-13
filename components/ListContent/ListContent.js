import * as React from 'react';
import { StyleSheet,Image,ImageBackground,Button,Alert,TouchableOpacity,View,Text,TextInput,ScrollView } from 'react-native';
import {
  Input,
  Icon,
  ListItem,
  Avatar,
  Card
} from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



const list = [
    {
      name: 'Art',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle: 'Vice President'
    },
    {
      name: 'Music',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Vice Chairman'
    },
    {
        name: 'Bussines',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
      },
      {
        name: 'Art',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
      },
      {
        name: 'Music',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
      },
      {
          name: 'Bussines',
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          subtitle: 'Vice President'
        },
   
  ]


const image={ uri: "" };

export default function SearchScreen(props,{navigation}) {
  
  return (
      <View style={{flex:1,flexDirection:'column'}}>
       
                    <View style={{ flexDirection:'row',height:100, width:60, marginRight:15, borderRadius:20, marginTop:10}}  >
                        
                    <Image
                        source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' }}
                        style={{ width: 50, height: 50, borderRadius:10, marginRight:5 }}
                    />
                        <View>
                            <Text style={{flexDirection:'column', textAlign:'center', fontSize:20}}>Events</Text>
                            <Text style={{flexDirection:'column', textAlign:'left', fontSize:14}}>Events</Text>
                        </View>
                        
                    </View>
                    <View style={styles.container}>
                <ScrollView horizontal>
                    
            {
                props.list.map((l, i) => (
                
                    <View style={{height:100, width:90, marginRight:15, borderRadius:20}} key={i}>
                        
                        <Card.Image style={{height:100,borderRadius:20}} source={{uri:l.avatar_url}} onPress={()=>props.navigation.navigate('Login')} />
                        <Text style={{textAlign:'center'}}>{l.name}</Text>
                    
                    </View>
                    
                
            
                ))
            }
            </ScrollView>
            </View>
      </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    marginTop:10,
    
  },
  inputSearch:{
    width:270,
    height:40,
    borderRadius:10,
    backgroundColor:'#fff'
  },
  inputContainer:{
    backgroundColor:'#fff',
    flexDirection:'row',
    alignContent:'center',
    alignItems:'center',
    borderRadius:10
  }
 
});
