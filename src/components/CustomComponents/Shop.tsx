import React, { useState , useEffect} from 'react'
import { categories } from '../../appData/Category'; 
import { products } from '../../appData/Product';
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { category } from '../../types/Interface';
import {Products} from '../../types/Interface'
import { useNavigation } from '@react-navigation/native';
import { shopProp } from '../../types/Interface';

const Shop : React.FC<shopProp> = ({products}) => {
    const navigation = useNavigation();

    const [selectedCategory , setSelectedCategory] = useState('All');
  
    const filtered = selectedCategory === 'All' ? products  : products.filter(p => p.category == selectedCategory);
    
   
     const renderCategory = ({item}: {item : category}) => {
      const isActive  = item.key == selectedCategory;
      return (
          <TouchableOpacity
                            key={item.key}
                            onPress={() => setSelectedCategory(item.key)}>
                            <View style={styles.categoryContainer}>
                              <View style={styles.category}>
                                <View style={[styles.catIcon, isActive && styles.catIconActive]}>
                                    <Image source={item.image} style={styles.catImg}/>
                                </View>
                                <Text style={[isActive && styles.catTextActive]}>
                                    {item.key}
                                </Text>
                            </View>
                            </View>
           </TouchableOpacity>
      )}

   const renderProduct = ({item} : {item : Products}) => (
     <View style={styles.productCard}>
        <Image source={item.image } style={styles.productImage} />
        <View style={styles.heartIcon}>
          <EvilIcons name={item.icon} size={25} color={'white'}/>
        </View>
       <View style={styles.proContent}>
         <TouchableOpacity onPress={() => navigation.navigate('Addtocart',{product : item})}>
          <Text style={styles.productTitle}>{item.title}</Text>
         </TouchableOpacity>
        <Text style={styles.productPrice}> <Text style={{color : '#d1aa0fff'}}>$</Text>{" "}{item.price}</Text>
        </View>
       </View>
   )

  return (
    <View>
      <FlatList<category>
     
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
        keyExtractor={(item) => (item.key)}
        renderItem={renderCategory}
      />

      <View style={styles.prodductContainer}>
      <View style={styles.productTopContainer}>
      <Text style={styles.rightText}>Special For You</Text>
        <Text>See All</Text>
      </View>
    <FlatList
    data={filtered} 
    scrollEnabled={false}
    keyExtractor={(item) =>item.id.toString()}
    numColumns={2}
    showsVerticalScrollIndicator={true}
    renderItem={renderProduct}
      ListEmptyComponent={() => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      <Text style={{ fontSize: 18, color: '#b76e79', marginTop : 100 }}>No products found.</Text>
    </View>
  )}/>

    </View>
   </View>
  )
}

export default Shop

const styles = StyleSheet.create({
//category styling;
      categoryContainer: {
        marginVertical: 10,
        marginTop : 10,
        flexDirection: 'row',
        gap: 18
    },
    category: {
        alignItems: 'center'
    }
    ,
    catIcon: {
        backgroundColor: '#ebe9e9ff',
        width: 70,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        marginBottom: 5
    },
    catIconActive: {
        borderWidth: 2,
        borderColor: '#b76e79',
    },
    scrollContent : {
        gap: 20,
    },
    catTextActive: {
        color: '#b76e79',
        fontWeight: 'bold',
    },

    catImg : {
        width : 50,
        height : 50,
    },

   // product styling

  prodductContainer : {
   paddingBottom : 100
  },
productTopContainer : {
  marginTop : 20,
 flexDirection : 'row',
 justifyContent : 'space-between',
 marginHorizontal : 10,
 position : 'relative',

},
heartIcon: {
 position : 'absolute',
 top : 7,
 right : -3,
 backgroundColor : '#b76e79',
 padding : 4,
 borderTopRightRadius : 9,
  borderBottomLeftRadius : 10,
 alignItems : 'center',
 justifyContent : 'center'

},

rightText : {
fontSize : 20
},
row : {
flexDirection : 'row'
},
productCard: {
marginTop : 20,
padding: 6,
 borderRadius: 8,
 flex : 1,
 marginHorizontal : 5,

},
 productImage : {
    width : 160,
    borderTopRightRadius : 10,
    height : 180,
    borderRadius: 10,
     
 },
  productTitle: {
    fontWeight : '500',
    fontSize: 18,
  },
  productPrice: {
    fontWeight : '500',
    fontSize: 15,
  },
  proContent : {
    marginTop : 10
  }

 
})