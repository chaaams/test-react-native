import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, Pressable, Alert, ActivityIndicator } from 'react-native';

export default function App() {
const [loading, setLoading] = useState(false)

  const onPress = (remaining) => {
    if(remaining < 0){
        Alert.alert("woula t'es un fdp")
    }else{
      Alert.alert("tu m'aimes toi ?",
      undefined,
      [
        {
          text: "oui",
          onPress: () => console.log("test")
        },
        {
          text: "non",
          onPress: () => onPress(remaining -1)
        },

      ],
      {
        cancelable: false,
      }
      )
    }
  
    }
  return (
    <ScrollView style={styles.container}>
      <View style={styles.textContainer}> 
        <Text style={styles.textStyle}>Exercice 1 </Text> 
        <Text style={styles.textStyle2}>Test </Text> 
        <Text style={styles.textStyle3}>Open up </Text> 
      </View>
        <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://www.konexio.eu/uploads/1/2/0/2/120245745/konexio-logo_1.png',
        }}
        />

        <Image
        style={styles.tinyLogo}
        source={require('./konexio-logo_1.png')}
        />

        <Pressable onPress={() => onPress(3)}>
          <Text style={styles.tinyLogo} >Appuie ici !!</Text>
        </Pressable>

        <Pressable onPress={() => setLoading((loading) => !loading)}>
          <Text> set {loading && "not"}Loading</Text>
        </Pressable>

        {loading && <ActivityIndicator size={"large"} color={'#000000'}/>}

    </ScrollView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  textContainer: {
    backgroundColor: 'white',
  },
  textStyle: {
    margin: 80 ,
    fontSize: 30,
  },
  textStyle2: {
    margin: 80 ,
    textAlign: 'center',
  },
  textStyle3: {
    margin: 80 ,
    fontWeight: 'bold',
  },
  tinyLogo :{
    height: 40,
    width : 124,
    borderColor: 'black'
  }
});
