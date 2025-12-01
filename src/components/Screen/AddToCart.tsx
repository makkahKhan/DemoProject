
import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity , Image, ScrollView } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useCart } from '../../CartContext'

import Toast from 'react-native-toast-message'
import { Products } from '../../types/Interface'
import { toastConfig } from '../../utils/ToastConfig'

type RootStackParamList = {
  Addtocart: { product: Products };
};

type AddToCartRouteProp = RouteProp<RootStackParamList, 'Addtocart'>;

const AddToCart = () => {
  const route = useRoute<AddToCartRouteProp>();
  const {product} = route.params
  const {addToCart} = useCart();
  const navigation = useNavigation();

  const handleAdd = () => {
    addToCart(product);
    Toast.show({
    type: 'success',
    text2: 'Your item is added to cart successfully',
    })
    
  }
  return (
    <View style={styles.container}>
    
      {/* top image side */}
      <View style={styles.topBarContainer}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
         <View style={styles.iconBg}>
          <AntDesign name="left" size={20} color="#3a3a3aff" />
          </View>
        </TouchableOpacity>
         <View style={styles.TopRightIcon}>
           <View style={styles.iconBg}>
          <FontAwesome name={'share'} size={20} color='#3a3a3aff' />
        </View>
         <View style={styles.iconBg}>
          <FontAwesome name={'heart'} size={20} color='#3a3a3aff' />
        </View>
         </View>
      </View>
       <View style={styles.imgContainer}>
           <Image source={product.image} style={styles.cartImg}/>
           </View>
        </View>
       {/*top image side end */}

         {/* content area */}
         <View>
        <ScrollView
          showsVerticalScrollIndicator={true}
          contentContainerStyle={{ paddingBottom: 100 }} 
         >
             <View style={styles.bottomContainer}>
                  <View>                                       
                    <Text style={{fontSize:20, fontWeight : 500}}>{product.title}</Text>
                    <Text style={{fontSize:20, fontWeight : 500 , marginTop : 2}}>$ {product.price}</Text>
                  </View>
                  <View style={styles.sellerText}>                
                    <Text style={{fontSize:17, fontWeight : 500 , marginTop : 2}}>Seller : Syed Noman</Text>
                  </View>
                  <View style={styles.ReviewConatiner}>                
                    <View style={styles.reviewRate}>
                      <FontAwesome name={'star'} size={20} color='white'/>
                    <Text style={{color : 'white' , fontSize : 18}}>4.8</Text>                 
                     </View>
                    <View>
                    <Text style={{fontSize:17, fontWeight : 500, color : '#797878ff'}}>(320 Review)</Text>                 
                     </View>                     
                  </View>
                  <View style={styles.descriptionSection}>
                    <View style={styles.desciptionBtn}>
                      <Text style={{fontSize:18, fontWeight : 500, color : '#ffffffff'}}>Description</Text>
                    </View>
                    <View style={styles.descText}>
                      <Text style={{fontSize:17, 
                      color : '#797878ff'}}>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 
                       </Text>
                    </View>
                  </View>
          </View>
         </ScrollView>
         </View>
     
           {/* content area end */}

          {/* add to cart button area */}
          <View style={styles.addBtContainer}>
            <View style={styles.buttonSection}>
             <View style={styles.quantityConatiner}>
              <TouchableOpacity>
              <Text style={{color : 'white' , fontSize : 30}}>-</Text>                   
              </TouchableOpacity>          
               <Text style={{color : 'white', fontSize :20}}>1</Text>
               <TouchableOpacity>
                <Text style={{color : 'white' , fontSize : 20}}>+</Text>           
              </TouchableOpacity>
               </View>
              <View style={{position : 'absolute', bottom : 200, right : 0 ,left : 0}}>
                <Toast config={toastConfig}/>
              </View>
              <TouchableOpacity onPress={handleAdd}>               
                 <View style={styles.addBtn}>
                <Text style={{color : 'white' , fontSize : 20}}>Add to Cart</Text>
               </View>
              </TouchableOpacity>
            </View>
          </View>
         {/* add to cart button area end */}

    </View>
  )
}

export default AddToCart

const styles = StyleSheet.create({
  container: {
   backgroundColor : "#ebe7e7ff",
   position : 'relative',
   flex : 1,

  },
  topBarContainer: {
    marginTop : 40,
  },
  topBar: {
    flexDirection : 'row',
    justifyContent: 'space-between',
    marginHorizontal : 20

  },
  TopRightIcon : {
    flexDirection : 'row',
    justifyContent: 'space-between',
    alignItems : 'center',
    gap : 20
  },

  iconBg : {
    backgroundColor : "#ffff",
    width : 35,
    height : 35 ,
    borderRadius : 20,
    justifyContent : 'center',
    alignItems : 'center'
  },
  imgContainer : {
    
  justifyContent : 'center',
  alignItems : 'center'

  },
  cartImg : {
    width : 300,
    height : 300,
  },
  bottomContainer : {
   backgroundColor : '#fcfcfcff',
   borderTopRightRadius : 20,
   borderTopLeftRadius : 20,
   padding : 20,
  

  },
  sellerText : {
    alignItems : 'flex-end',
  },
  ReviewConatiner : {
  flexDirection : 'row',
  alignItems : 'center',
  gap : 10,

  },
  reviewRate : {
    backgroundColor : '#eec007ff',
    width :65,
    height : 31,
    borderRadius : 20,
    justifyContent : 'center',
    alignItems : 'center',
    flexDirection : 'row',
    gap : 3
 
  },
  addBtContainer:{
  position: 'absolute',
  bottom: 25,   
  left: 0,      
  right: 0,    
  },
  buttonSection : {
    flexDirection : 'row' ,
    backgroundColor : 'black',
    padding : 10,
    justifyContent : 'space-between',
    alignItems : 'center',
    gap :10 ,
    borderWidth : 1,
   marginHorizontal : 10,
   borderRadius : 60,

  },
  quantityConatiner : {
    flexDirection : 'row',
    gap : 20,
    borderWidth : 1,
    borderColor : 'white',
    borderRadius : 70,
    width : 120,
    padding : 1,
    justifyContent : 'center',
    alignItems : 'center'
    
  },
  descriptionSection : {
    marginVertical : 20,
  }
  ,
   desciptionBtn : {
    marginBottom : 15,
    backgroundColor : '#b76e79',
    width : 140,
    height : 45,
    borderRadius : 70,
    justifyContent : 'center',
    alignItems : 'center',
    
  },
  descText : {
  width : 380
  },
  addBtn : {
    backgroundColor : '#b76e79',
    width : 220,
    height : 60,
    borderRadius : 70,
    justifyContent : 'center',
    alignItems : 'center'
  }
})