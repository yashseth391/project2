import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.heading}>Trending Places</Text>
      <View style={[styles.card,styles.cardelevated]}>
        <Image
        source={{
            uri:'data:image/jpeg;base64,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'
        }}
        style={styles.cardimage}
        />
        <View style={styles.cardbody}>
            <Text style={styles.cardtittle}>Maahil Taalab</Text>
            <Text style={styles.cardlabel}>Orai</Text>
            <Text style={styles.carddescription}>It was constructed in memory of King Mahil who ruled Orai. 
            The King was very fond of getting married and he did 401 marriages. 
            Later he abandoned this childish attitude and post his shistacharya he constructed an ashram for his wives who can live there according to their wishes.

Because of this, this place becomes interesting tourists spot for the travelers.</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    heading: {
        fontSize:24,
        fontWeight:"bold",
        paddingHorizontal:10,
        marginTop:8,
      },
      cardimage:{
        height:180,
        width:350,
        marginBottom:20,
        borderTopLeftRadius:6,
        borderTopRightRadius:6,
      },
      card: {
        height:410,
        width:350
        ,borderRadius:6,
        marginHorizontal:12,
        marginVertical:16,

      },
      cardelevated: {
        backgroundColor:'white',
        elevation:10,
        shadowOffset :{
          width: 20,
          height:10
        }
      },
      cardbody:{
        flex:1,
        flexGrow:1,
        paddingHorizontal:12,

      },
      cardtittle:{
        color:'black',
        fontSize:22,
        fontWeight:'bold',
        marginBottom:5,
      },
      cardlabel:{
        color:'black',
        fontSize:17,
        marginBottom:2.5,
        
      },
      carddescription:{
        color:'black',
        fontSize:14,
      },

})