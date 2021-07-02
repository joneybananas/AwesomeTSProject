import React from 'react'
import {View,Text,StyleSheet} from 'react-native'

const FeedScreen = () => {return (
<View style ={styles.constainer}>
<Text style ={styles.textt}>
    Feed
</Text>

</View>

)}

// app->services->fetchData.tsx



const styles = StyleSheet.create({

constainer:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#000000'
},
textt:{
textAlign : 'center'
}


})
export default FeedScreen