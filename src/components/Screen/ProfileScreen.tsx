import React from 'react'
import { View ,Text,StyleSheet ,Image, TouchableOpacity , ScrollView} from 'react-native'
import Header from '../../navigation/Header'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Foundation from 'react-native-vector-icons/Foundation'
import { useNavigation } from '@react-navigation/native'


const ProfileScreen = () => {
    const navigation = useNavigation();
    const handleLogin = () => {
      navigation.navigate('Login');
    }
  return (
   
     <View>
      <ScrollView>
      <Header title="Profile" />
      <View style={styles.container}>
       <View style={styles.camerIcon}>
        <MaterialCommunityIcons name={'camera-plus'} size={30} color='black'/>
       </View>
         <View style={styles.profileContainer}>
        <Image source={require('../../assets/profile.jpeg')} style={styles.profileImg}/>
       <Text style={styles.profileName}>Makkah Malik</Text>
       <Text style={styles.emailText}>makkahmalik@gmail.com</Text>
      </View>
        <View style={styles.mainContainer}>
      <View style={styles.ProfileSetting}>
        <View style={styles.profileSettingMenu}>
          <View style={[styles.icon ,{backgroundColor : 'pink', borderRadius : 10}]} >
          <FontAwesome name={'user'} color='#e91e7aff' size={23}/>
          </View>
          <Text style={styles.profileSettingText}>Edit profile</Text>
        </View>
        <View>
         <MaterialIcons name={'arrow-forward-ios'} size={20} color='black'/>
        </View>
      </View>
      {/* //row2 */}
       <View style={styles.ProfileSetting}>
        <View style={styles.profileSettingMenu}>
          <View style={[styles.icon ,{backgroundColor : '#d4d7fbff', borderRadius : 10}]} >
          <Foundation name={'graph-bar'} color='#1e2fe9ff' size={23}/>
          </View>
          <Text style={styles.profileSettingText}>My status</Text>
        </View>
        <View>
         <MaterialIcons name={'arrow-forward-ios'} size={20} color='black'/>
        </View>
      </View>
       {/* /end*/}
        {/* //row3*/}
       <View style={styles.ProfileSetting}>
        <View style={styles.profileSettingMenu}>
          <View style={[styles.icon ,{backgroundColor : '#f9d8b7ff', borderRadius : 10}]} >
          <AntDesign  name={'setting'} color='#e9841eff' size={23}/>
          </View>
          <Text style={styles.profileSettingText}>Setting</Text>
        </View>
        <View>
         <MaterialIcons name={'arrow-forward-ios'} size={20} color='black'/>
        </View>
      </View>
       {/* /end*/}
        {/* //row4 */}
       <View style={styles.ProfileSetting}>
        <View style={styles.profileSettingMenu}>
          <View style={[styles.icon ,{backgroundColor : '#f3f1efff', borderRadius : 10}]} >
           
          <FontAwesome6 name={'user-plus'} color='#8a0591ff' size={23}/>
          </View>
          <Text style={styles.profileSettingText}>Invite a friend</Text>
        </View>
        <View>
         <MaterialIcons name={'arrow-forward-ios'} size={20} color='black'/>
        </View>
      </View>
       </View>

        <View style={styles.mainContainer}>
      <View style={styles.ProfileSetting}>
        <View style={styles.profileSettingMenu}>
          <View style={[styles.icon ,{backgroundColor : '#dcdadaff', borderRadius : 10}]} >
          <AntDesign name={'message1'} color='#2d2c2cff' size={23}/> 
          </View>
          <Text style={styles.profileSettingText}>Edit profile</Text>
        </View>
        <View>
         <MaterialIcons name={'arrow-forward-ios'} size={20} color='black'/>
        </View>
      </View>
      {/* //row2 */}
       <View style={styles.ProfileSetting}>
        <View style={styles.profileSettingMenu}>
          <View style={[styles.icon ,{backgroundColor : '#dcdadaff', borderRadius : 10}]} >
           <MaterialIcons name={'logout'} size={20} color='black'/>
          </View>
         <TouchableOpacity onPressIn={handleLogin}>
         <Text style={styles.profileSettingText}>Log Out</Text>
         </TouchableOpacity>
        </View>
        <View>
         <MaterialIcons name={'arrow-forward-ios'} size={20} color='black'/>
        </View>
      </View>
       {/* /end*/}
       
       </View>
     
      
   
       </View> 
       </ScrollView>
     </View>
  )
}

export default ProfileScreen
const styles = StyleSheet.create({
  container : {
    marginHorizontal: 20,

  },
  camerIcon : {
    alignItems : 'flex-end'
  },
  profileContainer : {
   justifyContent : 'center',
   alignItems : 'center',
   marginVertical : 10
  },
  profileImg : {
   width : 110,
   height : 110,
   borderRadius : 60,
   borderWidth : 3,
   borderColor :  '#dd9024'
  },
  profileName :{
  fontWeight : 'bold',
  fontSize :  18
  },
  emailText : {
   color : '#858585ff',
   fontSize :  16
  },
 mainContainer : {
   backgroundColor : '#ffff',
    borderRadius : 20,
    marginVertical : 15,
    paddingTop : 20,
    paddingBottom : 20
 },
  ProfileSetting : {
    flexDirection : 'row',
    justifyContent : 'space-between',
    padding : 10,
    alignItems : 'center',
    marginHorizontal : 10,
    marginBottom : 10
   
  },
  profileSettingText : {
    fontWeight : 500,
    fontSize : 19
  },
  profileSettingMenu : {
    flexDirection : 'row',
    justifyContent : 'center',
    alignItems : 'center',
    gap : 10,
  },
  icon : {
  width : 40, 
  height : 38 , 
  alignItems : 'center',
  justifyContent : 'center',
  }
})


