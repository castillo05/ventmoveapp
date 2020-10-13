import * as React from 'react';
import { StyleSheet,Image,ImageBackground,Button,Alert,TouchableOpacity,View,Text,TextInput,ScrollView } from 'react-native';
import {
  Input,
  Icon  
} from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// List Content
import ListContent from '../components/ListContent/ListContent';


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
    
 
]

const image={ uri: "" };

export default function SearchScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View  style={styles.inputContainer}>
          <Icon
            name='search'
            type='evilicon'
            color='#517fa4'
          />
            <TextInput
              style={styles.inputSearch}
              placeholder="Where should we go?"
              multiline
              numberOfLines={4}
          // onChangeText={text => onChangeText(text)}
          // value={value}
        />
         <Icon
         style={{marginLeft:0}}
            name='arrow-down'
            type='evilicon'
            color='#517fa4'
          />
      
      </View>
      <ScrollView>
          <ListContent navigation={navigation} list={list}></ListContent>
          <ListContent navigation={navigation} list={list}></ListContent>
          <ListContent navigation={navigation} list={list}></ListContent>
      </ScrollView>
         
       
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginLeft:10,
    marginRight:10,
    marginTop:10  
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
