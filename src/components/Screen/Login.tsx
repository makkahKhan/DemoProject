
import React, { useState } from 'react'
import {View, Image, Text ,Alert,  TextInput,StyleSheet, TouchableOpacity  } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const loginData = { username: 'user', password: '123' };
    const navigation = useNavigation();
      const [username, setUsername] = useState('');
      const [password , setPassword] = useState('')
      const[error , setError] = useState<String | null>(null);
    const handleRegister = () =>{
     navigation.navigate("SignUp");
    };
    const handleLogin =() => {
      const trimedUserName = username.trim();
      const trimedPassword = password.trim();
      if(!trimedUserName){
         setError("please enter email");
         return
      } 
        if(!trimedPassword){
         setError("please enter password");
         return;
      } 
        setError(null);
        if (trimedUserName=== loginData.username && trimedPassword === loginData.password){
            navigation.navigate('Main');
        }else{
         setError("Invalid username or password");
  }
      
    }

 return (
     <View style={styles.container}>
        <View>
         <Image
        source={require("../../assets/loginVector-2.jpeg")}
        style={styles.topImage}/>
        </View>
        <View >
       <Text style={styles.helloText}>Hello</Text>
     </View>
       <View >
       <Text style={styles.signInText}>Sign in to your account</Text>
     </View>
      <View style={styles.inputContainer} >
        <FontAwesome name={"user"} size={25} color={"#6f6f6f"} style={styles.inputIcon}/>
        <TextInput style={styles.inputText} placeholder='Enter User Name' value={username}
          onChangeText={text => setUsername(text)}/>
         {error ? <Text style={{color : 'red'}}>{error}</Text> : null}

     </View>

       <View style={styles.inputContainer} >
        <FontAwesome name={"lock"} size={25} color={"#6f6f6f"} style={styles.inputIcon}/>
        <TextInput style={styles.inputText} placeholder='Enter User Password' secureTextEntry value={password}
        onChangeText={text => setPassword(text)} />
        {error ? <Text style={{color : 'red'}}>{error}</Text> : null}
     </View>
     <View ><Text style={styles.forgetPassword}>Forget Your Password?</Text></View>
     <View style={styles.signInButtonContainer}>

        <Text style={styles.signIn}>Sign In</Text>
     <TouchableOpacity onPress={handleLogin}>
        <LinearGradient colors={['#b76e79', '#b76e79', '#373636ff']} style={styles.LinearGradient}>
        <FontAwesome size={20}  color={"white"}  name={"arrow-right"}/>
       </LinearGradient>
         </TouchableOpacity>
     </View>
     <TouchableOpacity onPressIn={handleRegister}>
      <Text style={styles.footerText}>Don't have an account?
        <Text style={{textDecorationLine :"underline", color : '#b76e79'}}>Create</Text>
        </Text>
     </TouchableOpacity>
    
     <View style={styles.leftVectorContainer}>
         <Image
        source={require("../../assets/vector-4.png")}
        style={styles.rightVectorImage}/>
        </View>
    </View>


  );

}

export default Login

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : "#ffff",
        position : 'relative'
    },
    topImage : {
        width : '100%',
        height : 170,
    },
    helloContainer : { 
        borderWidth : 1,
    },
    helloText : {
        textAlign : "center",
        fontSize : 50,
        marginVertical : 30,
        fontWeight :"500",
        color :"#b76e79",
        marginBottom : 0,
        
        
    },
    signInText : {
        textAlign : 'center',
        fontSize : 20,
        color : '#262626',
        marginBottom : 40
    },
    inputContainer : {
        backgroundColor : "#f2f2f2",
        flexDirection : "row",
        marginHorizontal : 30,
        borderRadius :20,
        elevation : 20,
        alignItems : 'center'  ,
        marginBottom : 20,
        height : 60,
        

    },
    inputIcon : {
        marginLeft : 15
    },
    inputText:{
        fontSize:17,
        padding : 15,
         color : '#535252ff',
    },
    forgetPassword : {
        color : '#6f6f6f',
        width : '90%',
        textAlign : 'right',
        fontSize : 17,
        marginTop : 10
    },
     signInButtonContainer : {
        flexDirection : 'row',
        marginTop : 60,
        width : "100%",
        justifyContent : 'center'

     },
    signIn:{
       color : '#343434ff',
       fontSize : 25,
       fontWeight : 'bold',
    },
    LinearGradient : {
        width : 70,
        height :  40,
        alignItems : 'center',
        justifyContent : 'center',
        borderRadius : 20,
        marginHorizontal :  10
    },
   footerText : {
    fontSize : 17,
    textAlign: 'center',
    marginTop : 50,
    color : '#262626',
   },
   leftVectorContainer: {
    position : 'absolute',
    bottom : -10,
    right : -250
   },
   rightVectorImage : {
    width : 600,
    height : 220
   }
   
})
