import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TextInput, ScrollView} from 'react-native'
import Octicons from 'react-native-vector-icons/Octicons'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import HeroSection from '../CustomComponents/HeroSection'
import Shop from '../CustomComponents/Shop'



const HomeScreen = () => {
 
   const [searchTerm ,  setSearchTerm] = useState('');
    
    // const lorwer = searchTerm.toLowerCase();
    //  const filter = searchTerm ? 
    //      products.filter(p => (p.title && p.title.toLowerCase().includes(lorwer)) || 
    //                          (p.category && p.category.toLowerCase().includes(lorwer)))
    //                          : products  


      
  return (
  
    <ScrollView
       scrollEnabled={true}
       contentContainerStyle={styles.container}>
        <View>
          <View style={styles.Headercontainer}>
            <View style={styles.HeaderIcon}><Octicons size={28} name={"apps"} color={'black'} /></View>
            <View style={styles.HeaderIcon}><Feather size={28} name={"bell"} color={'black'} /></View>
          </View>
          <View style={styles.searchContainer}>
            <View style={styles.searchLeft}>
              <FontAwesome name="search" size={27} color="black" />
              <TextInput placeholder="Search..." style={styles.searchText} value={searchTerm} onChangeText={setSearchTerm} />
            </View>
            <View style={styles.searchRight}>
              <Text style={styles.verticalLine} />
              <FontAwesome name="align-center" size={23} color="black" />
            </View>
          </View>
          <HeroSection />
          <Shop/>
        </View>
        
      
        </ScrollView>
   
  );
};



export default HomeScreen

const styles = StyleSheet.create({
  ScreenContainer: {
    backgroundColor: '#ffff',
    flex: 1,
  },
  container: {
    marginBottom : 150,
    marginHorizontal: 20,
    marginVertical: 50
  },
  Headercontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  HeaderIcon: {
    backgroundColor: '#ebe9e9ff',
    width: 55,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50
  },

  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ebe9e9ff',
    padding: 7,
    marginVertical: 20,
    borderRadius: 30
  },
  searchLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    marginLeft: 10
  },
  searchRight: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
    marginRight: 10
  },
  verticalLine: {
    width: 2,
    height: 23,
    backgroundColor: 'black',
    marginHorizontal: 10,
  },
  searchText: {
    fontSize: 17
  },



})