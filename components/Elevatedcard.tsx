import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const elevatedcard = () => {
  return (
    <View >
      <Text style={styles.heading}>elevatedcard</Text>
      <ScrollView  horizontal={true} style={styles.container}>
        <View>
            <Text style={[styles.elevated,styles.card]}>tap</Text>
        </View>
        <View>
            <Text style={[styles.elevated,styles.card]}>me</Text>
        </View>
        <View>
            <Text style={[styles.elevated,styles.card]}>to</Text>
        </View>
        <View>
            <Text style={[styles.elevated,styles.card]}>scroll</Text>
        </View>
        <View>
            <Text style={[styles.elevated,styles.card]}>more...</Text>
        </View>
        <View>
            <Text style={[styles.elevated,styles.card]}>😊😊</Text>
        </View>
      </ScrollView>
    </View>
  )
}

export default elevatedcard

const styles = StyleSheet.create({
    heading: {
        fontSize:32,
        fontWeight:"bold",
        paddingHorizontal:10,
      },
      container:{
        padding:8,
      },
      card:{
        
        flex:1,
        textAlignVertical:'center',
       textAlign:'center',
        height:100,
        width:100,
        display:'flex',
        borderRadius:4,
        borderColor:'black',
        margin:8,
        color:'black'
      },
      elevated:{
        backgroundColor:'silver'
        ,elevation:100,
      },
})