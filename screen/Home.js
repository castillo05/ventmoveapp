import * as React from 'react';
import { StyleSheet,Image,ImageBackground,Button,Alert,TouchableOpacity,View,Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



const image={ uri: "" };

export default function HomeScreen({ navigation : {navigate}}) {
  return (
    // <View style={styles.container}>
      <ImageBackground source={require('../assets/FONDO.jpg')} style={styles.image}>
      <Image
         style={styles.tinyLogo}
        source={{
          uri: 'https://ventmove.com/img/core-img/VentMove.png',
        }}
      />

      <Text style={styles.resume}>Social, Events, Concerts, shows, things to do, and much more all in one platform for brave new age.</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigate('Login')}
      >
        <Text style={styles.textsarted}>GET STARTED</Text>
      </TouchableOpacity>
      
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{flex: 1, height: 7,marginLeft:100, marginRight:100,marginTop:50,borderRadius:50,backgroundColor: '#778899'}} />
       
        
    </View>
    </ImageBackground>
      
    
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent:"center",
    
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
    marginTop:50,
    borderRadius:50,
    width:250
    
  },
  textsarted:{
    color:'#fff'
  },
  line:{
    
    fontSize: 14,
    paddingHorizontal: 5,
    alignSelf: 'center',
    color: '#A2A2A2'
  }
 
});
