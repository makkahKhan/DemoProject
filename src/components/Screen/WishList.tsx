import React from 'react'
import { View ,Text ,StyleSheet, ScrollView, Image,FlatList} from 'react-native'
import Header from '../../navigation/Header'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import  { WishLists } from '../../types/Interface'
import { useRoute } from '@react-navigation/native'
const WishList = () => {
const route = useRoute<any>();

  const { wishlistItems } = route.params || { wishlistItems: [] };
console.log("Wishlist Screen par jo data aya:", wishlistItems);
 const renderWishtListData = ({item}:{item : WishLists}) => {
  return(
      
         <View style={styles.wishListContainer}>
           <View>
             <Image source={{uri : item.thumbnail}} style={styles.wishListImg}/>
           </View>
           <View>
           <View style={styles.wishListContent}>
             <View>
               <Text style={styles.wishListText}>{item.title}</Text>
             </View>
                
           </View>
            <View>
             <Text style={{fontSize : 17 ,color : '#787878ff' , marginTop : 10}}>{item.category}</Text>
           </View>
   
            <View>
             <Text style={{fontSize : 20 ,color : '#030303ff' , marginTop : 10 , fontWeight : 'bold'}}>$ {item.price}</Text>
           </View> 
   
         </View>
         </View>       
      
  )
 }

  return (
  <View>
   <Header title="WishList"/>
       <View style={styles.topContainer}>      
          <FlatList
          data={wishlistItems}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderWishtListData}
          contentContainerStyle={styles.scrollview} />
          </View>
  </View>
  )
}

export default WishList


  const styles = StyleSheet.create({
    scrollview : {
    paddingBottom : 150,
    },
    wishListContainer : {
      flexDirection : 'row',
      backgroundColor : '#f6f6f6',
      elevation : 6,
      gap : 15,
      marginHorizontal : 20,
      borderRadius : 10,
      height :  130,
      padding : 15,
      marginVertical : 10
    },
    wishListImg : {
      width : 100,
      height : 100,
      borderRadius : 20
    }
    ,
    wishListContent : {
     flexDirection : 'row'
    },
    wishListText : {
      fontSize : 20,
      fontWeight : 'bold',
      width : 210

    },
    topContainer : {
      marginTop : 18,
    
      }
  });
