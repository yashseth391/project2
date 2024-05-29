import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Flatcards = () => {
  return (
    <View>
      <Text style={styles.heading}>Flatcards</Text>
      <View style={styles.container}>
        <View style={[styles.card,styles.cardone]}>
          <Text >Red</Text>
        </View>
        <View style={[styles.card,styles.cardtwo]}>
          <Text >Green</Text>
        </View>
        <View style={[styles.card,styles.cardthree]}>
          <Text >blue</Text>
        </View>
      </View>
    </View>
  )
}

export default Flatcards

const styles = StyleSheet.create({
  heading: {
    fontSize:32,
    fontWeight:"bold",
    paddingHorizontal:10,
  },
  container : {
    flex:1,
    flexDirection: 'row',
  },
  card:{
    flex:1,
   alignItems:'center',
   justifyContent:'center',
      width:100,
      height:100,
      borderRadius:5,
      margin:10,
  },
  cardone: {
     backgroundColor:'red',
  },
  cardtwo:{
    backgroundColor:'green',
  },
  cardthree:{
    backgroundColor:'blue',
  }
})