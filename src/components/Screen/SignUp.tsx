import React from 'react'
import { View ,  Image,  TextInput,Text, StyleSheet, TouchableOpacity } from 'react-native'
import Fontawesome from 'react-native-vector-icons/FontAwesome'
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';


const SignUp = () => {
  const navigation = useNavigation();
  const handleLogin = () => {
    navigation.navigate('Login');
  }
  return (
     <View style={styles.container}>
      <View>
        <Image source={require('../../assets/loginVector-2.jpeg')}
        style={styles.topImage}/>
      </View>
       <View style={styles.mainContainer}>
       <View>
       <Text style={styles.createText}>Create account</Text>    
       </View>
          <View style={styles.signUpContainer}>
        <Fontawesome size={25} color={"#6f6f6f"} name={'user'} style={styles.signUpicon}/>
        <TextInput placeholder='Enter Name'  style={styles.InputText} placeholderTextColor={'gray'}/>
      </View>
       <View style={styles.signUpContainer}>
        <Fontawesome size={25} color={"#6f6f6f"} name={'lock'} style={styles.signUpicon}/>    
        <TextInput placeholder='Enter Password' style={styles.InputText} secureTextEntry placeholderTextColor={'gray'}/>

      </View>
       <View style={styles.signUpContainer}>
        <Fontawesome size={22} color={"#6f6f6f"} name={'envelope'} style={styles.signUpicon}/>
        <TextInput placeholder='Enter Email' style={styles.InputText} placeholderTextColor={'gray'}/>
      </View>
       <View style={styles.signUpContainer}>
        <Fontawesome size={33} color={"#6f6f6f"} name={'mobile-phone'} style={styles.signUpicon}/>
        <TextInput placeholder='Enter Phone number'  style={styles.InputText} placeholderTextColor={'gray'}/>
      </View>
       </View>       
       <View style={styles.createContainer}>
        <Text style={styles.createButton}>Create</Text>
        <LinearGradient colors={['#b76e79', '#b76e79', '#373636ff']} style={styles.LinearGradient}>
         <Fontawesome size={20}  color={"white"}  name={"arrow-right"}/>
          </LinearGradient>
       </View>
       <View style={styles.footerContainer}>      
         <Text style={styles.footerText}>Have already an account?
           <TouchableOpacity onPress={handleLogin}>      
      <Text style={{textDecorationLine :"underline", color : '#b76e79'}}>Login</Text></TouchableOpacity>
     </Text>
        
        <Text style={styles.footerText}>Or create account using social media</Text>
        <View style={styles.IconContainer}>
        <View style={styles.IconFacebook}><Fontawesome size={22}name ={"facebook"} color={'white'}/></View>
         <LinearGradient colors={['#405DE6', '#833AB4', '#C13584']} style={styles.IconInsta}>
         <Fontawesome size={23}name ={"instagram"} color={'white'}/>
          </LinearGradient>
        <View style={styles.IconTwitter}><Fontawesome size={22}name ={"twitter"} color={'white'}/></View>       
        </View>      
        </View>
      <View style={styles.bottomImageConainer}>
          <Image source={require('../../assets/vector-4.png')} style={styles.bottomImage}/>
        </View>
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : '#ffff',
    position : 'relative'
  },
   topImage : {
    width :'100%',
    height : 200,
    top : -40 ,
  },
  mainContainer : {},
  createText : {
    color :"#b76e79",
    textAlign : 'center',
    fontSize : 30,
    marginBottom : 30,
    fontWeight : 500,
    marginTop :  -50
  },
  signUpContainer: {
    marginVertical : 10,
    elevation : 20,
     backgroundColor : "#f4f4f4ff",
    borderRadius : 40,
    flexDirection : 'row',
    padding : 8,
    alignItems : 'center',
    marginHorizontal : 30
  },
  signUpicon : {
     marginLeft : 10
  },
  InputText : {
    marginLeft : 6,
    fontSize : 17,
    color :'#5e5d5dff',
  },
  createContainer : {
    flexDirection : 'row',
    alignItems : 'center',
    marginVertical : 30,
    justifyContent : 'flex-end',
    width : '90%'
  },
  forgetPassword : {
        color : '#6f6f6f',
        width : '90%',
        textAlign : 'right',
        fontSize : 17,
        marginTop : 10
    },
  createButton: {
    fontSize : 25,
    fontWeight : 400,
    color : '#343434ff',
  },
   LinearGradient : {
    width : 70,
    height : 38,
    borderRadius : 50,
    alignItems : 'center',
    justifyContent : 'center',
    marginLeft : 10
  },
  footerContainer: {
    justifyContent : 'center',
    alignItems : 'center',
    marginVertical : 15
  },
  footerText : {
    color :'#5e5d5dff',
    fontSize : 18,
    marginBottom : 10
  },
  IconContainer:{
    flexDirection : 'row', 
     marginTop : 17,
     justifyContent : 'center',
     alignItems : 'center',
     gap : 10
  },
  IconFacebook: {
    backgroundColor : '#076ff7ff',
    width : 50,
    height : 50,
    borderRadius : 50,
    alignItems : 'center',
    justifyContent : 'center',
    elevation : 10

  },
   IconTwitter: {
    backgroundColor :'#1DA1F2',
    color : 'white',
    width : 50,
    height : 50,
    borderRadius : 50,
    alignItems : 'center',
    justifyContent : 'center',
    elevation : 10

 

  }
  , IconInsta: {
    backgroundColor : 'blue',
    color : 'white',
    width : 50,
    height : 50,
    borderRadius : 50,
    alignItems : 'center',
    justifyContent : 'center',
    elevation : 10
    
  },
  bottomImageConainer: {
    position : 'absolute',
    bottom : -30,
    right : -180
   },
   bottomImage : {
    width : 500,
    height : 220
   }
  
  
})
