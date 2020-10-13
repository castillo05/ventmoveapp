// @flow
import * as React from 'react';
import { StyleSheet,Image,ImageBackground,Alert,TouchableOpacity,View,Text,TextInput,KeyboardAvoidingView,ScrollView } from 'react-native';


export default function Titleheader(props) {
    return(
       <Text style={styles.header}>{props.title}</Text>
    )
}


const styles = StyleSheet.create({
    header: {
       alignItems:'center',
       fontSize:30,
       marginLeft:40
    },
  });