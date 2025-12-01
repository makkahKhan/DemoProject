import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView, FlatList } from 'react-native'
import Header from '../../navigation/Header'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useCart } from '../../CartContext'

const CartScreen = () => {
  const { cartItems } = useCart();

  const renderCartItem = ({ item }: { item: any}) => {
    return (

      <View>
          <View style={styles.CartContainer}>
            <View>
              <Image source={item.image} style={styles.cartImg} />
            </View>
            <View>
              <View style={styles.cartContent}>
                <View>
                  <Text style={styles.cartText}>{item.title}</Text>
                </View>
                <View>
                  <FontAwesome name={'trash'} size={23} color={'#efa51cff'} />
                </View>
              </View>
              <View>
                <Text style={{ fontSize: 17, color: '#787878ff', marginTop: 10 }}>{item.category}</Text>
              </View>


              <View style={styles.bottomContent}>
                <View>
                  <Text style={{ fontSize: 20, color: '#030303ff', marginTop: 10, }}>$ {item.price}</Text>
                </View>
                <View>
                  <Text style={{ fontSize: 16, color: '#5c5b5aff', marginTop: 10,}}>Qaty : {item.quantity}</Text>
                </View>
              </View>          

            </View>
          </View>
      
      </View>

    )
  }


  return (
    <View>
      <Header title="My Cart" />
      <ScrollView
        contentContainerStyle={styles.scrollview}>
        <FlatList
          data={cartItems}
          scrollEnabled={false}
          keyExtractor={(items) => (items.id.toString())}
          renderItem={renderCartItem}
          ListEmptyComponent={() => (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
             <Text style={{ fontSize: 20, color: '#b76e79', marginTop : 300 }}>Your Cart is Empty.</Text>
                </View>
          ) } />
      </ScrollView>

    </View>

  )
}

export default CartScreen

const styles = StyleSheet.create({
  scrollview: {
    marginTop : 20,
    paddingBottom: 100
  },
  
  CartContainer: {
    flexDirection: 'row',
    backgroundColor: '#f6f6f6',
    elevation: 5,
    gap: 15,
    marginHorizontal: 20,
    borderRadius: 10,
    padding: 15,
    marginVertical: 10
  },
  cartImg: {
    width: 100,
    height: 100,
    borderRadius: 20
  }
  ,
  cartContent: {
    flexDirection: 'row'
  },
  cartText: {
    fontSize: 20,
    fontWeight: 'bold',
    width: 180

  },
   bottomContent: {
   flexDirection : 'row',
   width : 200,
   justifyContent : 'space-between',

  }
 
});

