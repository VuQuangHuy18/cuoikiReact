import { StyleSheet, Text, View ,Image,Animated} from 'react-native'
import React, { useEffect, useRef } from 'react'

const Screen3 = ({ navigation, route }) => {
  const item = route.params;

  const opasityMotion = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(
      opasityMotion,
      {
        toValue: 1,
        duration: 3000,
        useNativeDriver: false
      }
    ).start();
  }, []);
  return (
    <View>
        <Animated.Image source={{ uri: item.image }} style={{ height: 250, width: 350 ,opacity:opasityMotion}} />

        <Text>{item.name}</Text>

        <Text style={{color:'gray'}}>Sale 10%</Text>

        <Text style={{fontSize:20,fontWeight:'2000'}}>Description</Text>
        <Text style={{color:'gray'}}>{item.des}</Text>

        <View style={{flexDirection:'row',marginTop:70,alignItems:'center',justifyContent:'space-between'}}>
        
        <Image
        style={{ width: 25, height: 25 ,margin:30}}
        source={{
          uri: 'https://res.cloudinary.com/dtwy0ch1a/image/upload/v1670982757/Vector_v5jljf.png',
        }}
      />
      <View style={{backgroundColor:'black',marginRight:30}}>
        <Text style={{margin:20,color:'white'}}>Add to cart</Text>
      </View>

        </View>

       
    </View>
  )
}

export default Screen3

const styles = StyleSheet.create({})