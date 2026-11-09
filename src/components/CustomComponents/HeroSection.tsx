import React from 'react'
import { View , Text, StyleSheet  ,ImageBackground , TouchableOpacity} from 'react-native'


const HeroSection = () => {
  return (
     <View style={styles.heroContainer}>
       <ImageBackground source={require('../../assets/banner.png')} style={styles.heroImg}>
         <View style={styles.heroContent}>  
          <Text style={styles.heroText}>Super Sale Discount</Text>
          <Text style={{fontSize : 20 , fontWeight : 'bold'}}> up to <Text style={{fontSize : 30 , fontWeight : 'bold' , color : '#f0f0f0ff'}}>50%</Text></Text>

          <TouchableOpacity style={styles.heroButton}>
            <Text style={{ fontWeight : 'bold'}}>Shop Now</Text>
          </TouchableOpacity>
        </View>
         
       </ImageBackground>
       
     </View>
  )
}

export default HeroSection

const styles = StyleSheet.create({

heroContainer: {
    marginVertical: 10,
    borderRadius: 20,
    overflow: 'hidden',
  },
  heroImg : {
  width : '100%',
  height : 200,
 borderRadius : 20
},
  heroContent: {
    padding: 20,
    width : 250,   
  },
  heroText: {
    color: 'black',
    fontWeight : 500,
    fontSize: 28,
    marginBottom: 0,
  },
  heroButton: {
    color: 'black',
    fontSize: 16,
    backgroundColor : '#f0f0f0ff',
    width : 100,
    height : 35,
    borderRadius : 30,
    justifyContent : 'center',
    alignItems : 'center',
    fontWeight : '500',
    marginVertical : 10
  },
});

