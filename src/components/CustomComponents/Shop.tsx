import React, { useState , useEffect} from 'react'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { category } from '../../types/Interface';
import {Products} from '../../types/Interface'
import { useNavigation } from '@react-navigation/native';
// import { shopProp } from '../../types/Interface';




const Shop  = () => {
    const navigation = useNavigation<any>();

    const [selectedCategory , setSelectedCategory] = useState('All');
  const [categories, setCategories] = useState<category[]>([]);
     
    const [productData , setProductData] = useState<Products[]>([]);
    const [whishListIds , setWhishListIds]= useState<number[]>([]);

  const AddToWishList= (id : number) => {
     setWhishListIds((prevIds) => {
      if(prevIds.includes(id)){
          return prevIds.filter((favId) => favId !== id)
      }
      else {
        return [...prevIds, id];
      }
     })
  }


    const ProductApi = async() => {
    try{
const response = await fetch('https://dummyjson.com/products?limit=700');
      const data = await response.json();
       const allowed = ["mens-shoes","womens-shoes","mens-watches","womens-bags","beauty"];

       const filterData = data.products.filter((p : Products) => allowed.includes(p.category))
       const shuffledProducts = filterData.sort(() => Math.random() - 0.5)
      setProductData(shuffledProducts);
      Alert.alert("data fetch successfully");
    } catch (err) {
       Alert.alert("error while data fetching");

    }
    }


const fetchCategories = async () => {
  try {
    const response = await fetch('https://dummyjson.com/products/categories');
    const data = await response.json();
    
    const allowed = ["mens-shoes","womens-shoes","mens-watches","womens-bags","beauty"];
    const filtered = data.filter((cat: category) => allowed.includes(cat.slug));
    
    const formattedCategories = [
      { key: 'All', name: 'All', image: require('../../assets/app-store.png') }, // All ki image
      ...filtered.map((cat: category) => {
        
        // 🛠️ Yahan hum slug ke mutabik apni local image choose kar rahe hain
        let catImage;
        if (cat.slug === 'mens-shoes') catImage = require('../../assets/shoe.png');
        else if (cat.slug === 'mens-watches') catImage = require('../../assets/watch.png');
        else if (cat.slug === 'womens-bags') catImage = require('../../assets/handBag.png');
        else if (cat.slug === 'beauty') catImage =  require('../../assets/lipstick.png');
        else if (cat.slug === 'womens-shoes') catImage =  require('../../assets/snadal.png');

      
        return {
          key: cat.slug,
          name: cat.name,
          image: catImage // Har category ko uski sahi image mil gayi
        };
      })
    ];
    
    setCategories(formattedCategories);
  } catch (err) {
    console.error("Categories fetch error:", err);
  }
};

    useEffect(() => {
      ProductApi();
      fetchCategories();
    },[])
   
    
    const displayCategoryItem = selectedCategory == 'All' ? productData : productData.filter((p => p.category === selectedCategory))



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

      const wishlistedProducts = productData.filter((p) => whishListIds.includes(p.id));

   const renderProduct = ({item} : {item : Products}) => {
    const isItemWishlisted = whishListIds.includes(item.id);
    return(
     <View style={styles.productCard}>
      
<Image source={{ uri: item.thumbnail }} style={styles.productImage} />
         <View style={[styles.heartIcon,
          isItemWishlisted ? {backgroundColor : '#ffff'} :  {backgroundColor : '#dd9024'} 
         ]}>
                 <TouchableOpacity onPress={() => {AddToWishList(item.id),
                 { wishlistItems: wishlistedProducts};                 }}>

<Svg viewBox="0 0 640 640" 
width={25}
height={25}
fill={isItemWishlisted ? "red" : "white" }>
<Path d="M305 151.1L320 171.8L335 151.1C360 116.5 400.2 96 442.9 96C516.4 96 576 155.6 576 229.1L576 231.7C576 343.9 436.1 474.2 363.1 529.9C350.7 539.3 335.5 544 320 544C304.5 544 289.2 539.4 276.9 529.9C203.9 474.2 64 343.9 64 231.7L64 229.1C64 155.6 123.6 96 197.1 96C239.8 96 280 116.5 305 151.1z"/></Svg>
            </TouchableOpacity>
        </View>
     
       <View style={styles.proContent}>
         <TouchableOpacity onPress={() => navigation.navigate('Addtocart',{product : item})}>
          <Text style={styles.productTitle}>{item.title}</Text>
         </TouchableOpacity>
        <Text style={styles.productPrice}> <Text style={{color : '#d1aa0fff'}}>$</Text>{" "}{item.price}</Text>
        </View>
       </View>
)}

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
    data={displayCategoryItem} 
    scrollEnabled={false}
    keyExtractor={(item) =>item.id.toString()}
    numColumns={2}
    showsVerticalScrollIndicator={true}
    renderItem={renderProduct}
      ListEmptyComponent={() => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      <Text style={{ fontSize: 18, color: '#dd9024', marginTop : 100 }}>No products found.</Text>
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
        borderColor: '#dd9024',
    },
    scrollContent : {
        gap: 20,
    },
    catTextActive: {
        color: '#dd9024',
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
 borderRadius: 20,
 flex : 1,
 marginHorizontal : 5,

     


},
 productImage : {
    width : 160,
    borderTopRightRadius : 10,
    height : 180,
    borderRadius: 10,
    backgroundColor : '#ebeaeac9',
    
     
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