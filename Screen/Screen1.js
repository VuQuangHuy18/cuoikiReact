import { StyleSheet, Text, View, Animated, Image, TouchableOpacity,Button} from 'react-native'
import React, { useEffect, useRef } from 'react'


const Screen1 = ({navigation}) => {
    const opasityMotion = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(
          opasityMotion,
          {
            toValue: 1,
            duration: 4000,
            useNativeDriver: false
          }
        ).start();
      }, []);



  return (
    <View style= {styles.container}>

        <Animated.View style={styles.welcome}>
            <Animated.Text style={{opacity:opasityMotion,fontSize: 20,fontWeight:'2000'}}>WELCOME TO FURISAS</Animated.Text>
        </Animated.View>
        <Text style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        A premium online store for women and their stylish choice
        </Text>
       <TouchableOpacity
       onPress={() => navigation.navigate('Screen2')}
        style={{justifyContent:'center',alignItems:'center'}}>
         <View style={{backgroundColor:'black',width:100,borderRadius:20,height:40,justifyContent:'center',alignContent:'center',marginBottom:50}}>
            <Text style={{color:'white',justifyContent:'center',alignContent:'center',marginLeft:10}}>Get Started</Text>
         </View>
       </TouchableOpacity>


       <View style={{backgroundColor:'white',borderRadius:300}}>
       <Image
        style={{ width: 300, height: 300 }}
        source={{
          uri: 'https://res.cloudinary.com/dtwy0ch1a/image/upload/v1670978189/started_hat_1_rvvdqp.png',
        }}
      />
       </View>

       
      
    </View>
  )
}

export default Screen1

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'pink',
        alignItems:'center',
        justifyContent:'center'
    },
    welcome:
    {
        flex:1,
        fontSize:300,
        fontWeight:'700',
        alignItems:'center',
        marginTop:30

    }
})