import React from 'react'
import { View ,Text,StyleSheet} from 'react-native'
import Header from '../../navigation/Header'
const CartScreen = () => {
  return (
  <View>
   <Header title="Cart"/>
    <View style={styles.container}><Text style={{color: 'red' , fontSize : 25}}>Your Cart Is Empty</Text></View>
  </View>

  )
}

export default CartScreen

const styles = StyleSheet.create({
  container: {
   justifyContent : 'center',
   alignItems : 'center',
   marginVertical : 360
  },

});
