import { StyleSheet,ActivityIndicator, FlatList, Text, View,Image,TouchableOpacity } from 'react-native';
import React, { useEffect, useState ,} from 'react';

const Screen2 = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
  
    const getMovies = async () => {
       try {
       fetch('https://63989b2ffe03352a94d7a8af.mockapi.io/hat')
       .then((res) => res.json())
       .then((resjson) =>{
          setData(resjson)
  
       })
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
  
    useEffect(() => {
      getMovies();
    }, []);
  
    const Item = ({item}) => {
      return (
        <TouchableOpacity style={styles.item}
        onPress={() => navigation.navigate('Detail',item)}>
          <View style={{ flexDirection: "column",padding:10,borderRadius:20,}}>
              <View style={{ marginRight: 20,backgroundColor:'pink',borderRadius:20, }}>
              <View style={{ marginRight: 20,backgroundColor:'pink',borderRadius:20, }}>
              <Image source={{ uri: item.image }} style={styles.image} />
            </View>
            <View style={{backgroundColor:'white',borderRadius:7}}>
              <Text>{item.name}</Text>
              <Text style={{ color: "black" }}> {item.price} $</Text>
        
            </View>
              </View>
            
          </View>
    
          
        </TouchableOpacity>
      );
    };
    

    
    return (
        <View style={styles.container}>
            <Text style={{}}>WELCOME BACK!</Text>
            <Text style={{ color: 'gray' }}>Jennifer Marconova</Text>
            <View style={styles.header}>
                <Text>New Product</Text>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 6 }}>
                    <Text>Get a 50% discount on
                        your first purchase</Text>
                        <View style={{backgroundColor:'black',width:70,margin:5,borderRadius:5}}>
                            <Text style={{color:'white'}}>Buy now</Text>
                        </View>
                    </View>
                    
                    

                    <Image
                        style={{ width: 100, height: 100, flex: 4 }}
                        source={{
                            uri: 'https://res.cloudinary.com/dtwy0ch1a/image/upload/v1670978189/started_hat_1_rvvdqp.png',
                        }}
                    />

                </View>

            </View>

            <View style={{flexDirection:'row'}}>
                <Text style={styles.testt}>Trending</Text>
                <Text style={styles.testt}>Popular</Text>
                <Text style={styles.testt}>We recomnended</Text>
            </View>


            <FlatList
        //chieu ngang horiontal={true}
          data={data}
          numColumns={2}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item,index }) => {
            return <Item item={item}  />;
          }}
        />





        </View>
    )
}

export default Screen2

const styles = StyleSheet.create({
    container: {
        flex: 1,


    },
    header: {
        margin: 20,
        heigh: 200,
        backgroundColor: 'pink'

    },
    testt:{
        margin:5,
        boder:1,
        borderColor:'green',
        padding:2,
    },
    item: {
        flexDirection: "row",
        marginTop: 5,
        
       
        justifyContent: "space-between",
        borderBottomWidth: 1,
        borderBottomColor: "rgb(196,196,196)",
       
      },
      image: {
        height: 80,
        width: 80,
      },
     
      textInput:{
        borderRadius:10,
        borderWidth:2,
        width:'70%',
        height:30,
        backgroundColor:'gray'
    
      },
      butHEad:{
        borderRadius:10,
        borderWidth:2,
       width:50,
        height:30,
        backgroundColor:'green',
        marginHorizontal:20
    
      },
      imageNgang:{
        width:30,
        height:30
      },
      body1:{
        height:200,
        flexDirection:'row'
      },
      body1Left:{
        flex:1
      },
      imageNgangbody:{
        flex:1
      },
      welcom:{
        color:'red',
        fontSize:30,
        margin:20
      },
      welcom1:{
        marginHorizontal:10
      },
      body2:{
        height:100,
        backgroundColor:'green',
        borderRadius:20,
        marginHorizontal:20,
        flexDirection:'row'
      },
      imgg:{
        flex:2
      },
      imgg2:{
        flex:6
      },
      imgg3:{
        color:'#FFF',
        fontSize:20,
        
      }
      
    
    
    });
    