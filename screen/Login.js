import * as React from 'react';
import { StyleSheet,Image,ImageBackground,Alert,TouchableOpacity,View,Text,TextInput,KeyboardAvoidingView,ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Input,Button } from 'react-native-elements';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const image={ uri: "https://cdn.pixabay.com/photo/2013/11/03/08/05/cheers-204742_960_720.jpg" };

export default function LoginScreen({ navigation}) {
  return (
  
     
    <View style={styles.container}>
         <ScrollView >
        <Text style={styles.h1}>Welcome</Text>
        <Text style={styles.p}>Hello, Welcome back to our Account, Please Login with your Email</Text>
        <Text style={styles.h1}>Sign In</Text>
        <View style={styles.inputContainer}>
       
            <Input
                label='Email ID*'
                placeholder='example@example.com'
                style={styles.input}
                
            />
            <Input 
                label='Password*'
                placeholder="Password"
                secureTextEntry={true}
                style={styles.input}
            />
            <Text style={{color:'#fff',alignSelf:'flex-end'}}>Forgot Password?</Text>
            
        </View>
       
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Search')}
      >
        <Text style={styles.textsarted}>SIGN IN</Text>
      </TouchableOpacity>
     
      <TouchableOpacity
        
       
      >
        <Text style={{color:"#fff",alignSelf:'center',marginTop:5}}>Don't have an account? <Text style={{color:'#FF1493'}}>Sign In</Text></Text>
      </TouchableOpacity>
     
     
     
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{flex: 1, height: 7,marginLeft:100, marginRight:100,marginTop:50,borderRadius:50,backgroundColor: '#778899'}} />
       
        
    </View>
   
      
     </ScrollView>
   </View>
  
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#120A2A",
    alignItems: 'stretch',
    
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  tinyLogo: {
    width: 200,
    height: 280,
   
  },
  logo: {
    width: 66,
    height: 58,
  },
  image:{
    flex: 1,
    resizeMode:"cover",
    justifyContent: "center",
    alignItems: 'center',
    width: null,
    height: null,
  },
  resume:
  {
    width:250,
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 20,
    color:'#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#FF1493",
    padding: 15,
    marginTop:10,
    borderRadius:50,
    width:250,
    alignSelf: 'center',
    
  },
  textsarted:{
    color:'#fff'
  },
  line:{
    
    fontSize: 14,
    paddingHorizontal: 5,
    alignSelf: 'center',
    color: '#A2A2A2'
  },
  h1:{
      color:'#fff',
      marginLeft:20,
      marginTop:50,
      fontSize:40,
      marginBottom:10
  },
  p:{
      color:'#fff',
      alignSelf:'center',
      marginLeft:20,
      marginTop:30,
      marginRight:20
  },
  input:{
      marginLeft:0,
      color:'#fff',
      marginTop:10
  },
  inputContainer:{
      marginLeft:20,
      marginRight:20
  }
 
});
