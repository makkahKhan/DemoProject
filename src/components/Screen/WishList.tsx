import React from 'react'
import { View ,Text ,StyleSheet} from 'react-native'
import Header from '../../navigation/Header'

const WishList = () => {
  return (
  <View>
   <Header title="WishList"/>
    <View style={styles.container}><Text style={{color: 'red' , fontSize : 20}}>Your WishList Is Empty</Text></View>
  </View>
  )
}

export default WishList
const styles = StyleSheet.create({
  container: {
   justifyContent : 'center',
   alignItems : 'center',
   marginVertical : 350
  },

});