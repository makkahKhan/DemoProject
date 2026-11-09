
import React, { useState } from 'react'
import {View, Image, Text ,Alert,  TextInput,StyleSheet, TouchableOpacity  } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import Svg, { Path } from 'react-native-svg';

const Login = () => {
      const navigation = useNavigation();
      const [username, setUsername] = useState('');
      const [password , setPassword] = useState('')
     const [email , setEmail] = useState('');
  

      const[UserError , setUserError] = useState<String>("");
      const[passdError , setPassError] = useState<String>("");
      const[emailError , setEmailError] = useState<String>("");

       const[showPass , setShowPass] = useState(false);
  
    const handleLogin =() => {
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
         const emailRjex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      const trimedUserName = username.trim().toLowerCase();
      const trimedEmail = email.trim().toLowerCase();
      const trimedPassword = password.trim();
     
      if(trimedUserName === ""){
         setUserError("User-Name is required");
         return
      }
      

       else if(trimedEmail === ""){
        setEmailError("Email is required");
         return;
      } 
     
        else if(trimedPassword === ""){
        setPassError("Password is required");
         return;
      } 

       else if(!emailRjex.test(trimedEmail)){
         setEmailError("Enter a correct email address, such as name@example.com");
          return
        }

      else if(!passwordRegex.test(trimedPassword)){
          setPassError("Password must be 8+ characters with at least one uppercase letter and one number.");
          return
        }
       
          setPassError("");
          setUserError("");
          navigation.navigate("Main")
        }
 

 return (
     <View style={styles.container}>
       <View  style={{justifyContent : 'center', alignContent : 'center', alignItems : 'center', marginTop : 70}}>
      
        <View style={styles.logo}>
          <Image source={require("../../assets/app.png")} style={styles.logoImg}/>
        </View>
  <View style={{marginTop :10}}>
         <Text style={styles.helloText}>WELCOME</Text>
        </View>
     </View>
      <View style={styles.popupArea}>  
       <View >
       <Text style={styles.signInText}>Create account with us</Text>
     </View>
     <View style={styles.mainContainer}>
       <View style={[styles.inputContainer,
        UserError ? styles.userInput : {marginBottom : 10}
       ]} >
        <FontAwesome name={"user"} size={25} color={"#dd9024"} style={styles.inputIcon}/>
        <TextInput style={styles.inputText} placeholder='Enter User Name' value={username}
          onChangeText={text => {
            setUsername(text);
            setUserError(""); 
          }}  placeholderTextColor={'gray'}             autoCapitalize="none"
/>              
     </View>
     <View>
          <Text style={[
           UserError ? styles.errorStyling : {marginBottom : 4}]}>{UserError}</Text> 
          </View> 
     </View>
    
     <View style={styles.mainContainer}>
      <View style={[styles.inputContainer,
           emailError ? styles.passInput : {marginBottom : 0}

      ]} >
        
         <FontAwesome name={"envelope"} size={25} color={"#dd9024"} style={styles.inputIcon}/>
        <TextInput placeholder='Enter Email'  style={styles.inputText} placeholderTextColor={'gray'}
          onChangeText={(text) => {setEmail(text), setEmailError('')}} value={email}
            autoCapitalize="none"
            keyboardType="email-address"/>
          </View>
           <View style={{}}>       

          <Text style={[emailError ? styles.errorStyling : {marginBottom : 4}]}>{emailError}</Text> 
          </View> 
 </View>

      
 <View style={styles.mainContainer}>
      <View style={[styles.inputContainer,
           passdError ? styles.passInput : {marginBottom : 0}

      ]} >
        <FontAwesome name={"lock"} size={25} color={"#dd9024"} style={styles.inputIcon}/>
        <TextInput style={styles.inputText} placeholder='Enter User Password' placeholderTextColor={'gray'} 
        secureTextEntry={!showPass} value={password}
        onChangeText={text =>{
        setPassword(text);
         setPassError("");

        }} /> 
        <TouchableOpacity onPress={() => setShowPass(!showPass)}>
          
          {password.length > 0 && (
             <View style={{marginEnd : 10}}>
          {showPass ? (<Svg viewBox="0 0 640 640"
          width={25}
          height={25}
          fill={'#dd9024'}><Path d="M320 144C254.8 144 201.2 173.6 160.1 211.7C121.6 247.5 95 290 81.4 320C95 350 121.6 392.5 160.1 428.3C201.2 466.4 254.8 496 320 496C385.2 496 438.8 466.4 479.9 428.3C518.4 392.5 545 350 558.6 320C545 290 518.4 247.5 479.9 211.7C438.8 173.6 385.2 144 320 144zM127.4 176.6C174.5 132.8 239.2 96 320 96C400.8 96 465.5 132.8 512.6 176.6C559.4 220.1 590.7 272 605.6 307.7C608.9 315.6 608.9 324.4 605.6 332.3C590.7 368 559.4 420 512.6 463.4C465.5 507.1 400.8 544 320 544C239.2 544 174.5 507.2 127.4 463.4C80.6 419.9 49.3 368 34.4 332.3C31.1 324.4 31.1 315.6 34.4 307.7C49.3 272 80.6 220 127.4 176.6zM320 400C364.2 400 400 364.2 400 320C400 290.4 383.9 264.5 360 250.7C358.6 310.4 310.4 358.6 250.7 360C264.5 383.9 290.4 400 320 400zM240.4 311.6C242.9 311.9 245.4 312 248 312C283.3 312 312 283.3 312 248C312 245.4 311.8 242.9 311.6 240.4C274.2 244.3 244.4 274.1 240.5 311.5zM286 196.6C296.8 193.6 308.2 192.1 319.9 192.1C328.7 192.1 337.4 193 345.7 194.7C346 194.8 346.2 194.8 346.5 194.9C404.4 207.1 447.9 258.6 447.9 320.1C447.9 390.8 390.6 448.1 319.9 448.1C258.3 448.1 206.9 404.6 194.7 346.7C192.9 338.1 191.9 329.2 191.9 320.1C191.9 309.1 193.3 298.3 195.9 288.1C196.1 287.4 196.2 286.8 196.4 286.2C208.3 242.8 242.5 208.6 285.9 196.7z"/></Svg>
         ) 
        :  (
           <Svg viewBox="0 0 640 640"
         width={25}
          height={25}
          fill={'#dd9024'}><Path d="M73 39.1C63.6 29.7 48.4 29.7 39.1 39.1C29.8 48.5 29.7 63.7 39 73.1L567 601.1C576.4 610.5 591.6 610.5 600.9 601.1C610.2 591.7 610.3 576.5 600.9 567.2L504.5 470.8C507.2 468.4 509.9 466 512.5 463.6C559.3 420.1 590.6 368.2 605.5 332.5C608.8 324.6 608.8 315.8 605.5 307.9C590.6 272.2 559.3 220.2 512.5 176.8C465.4 133.1 400.7 96.2 319.9 96.2C263.1 96.2 214.3 114.4 173.9 140.4L73 39.1zM236.5 202.7C260 185.9 288.9 176 320 176C399.5 176 464 240.5 464 320C464 351.1 454.1 379.9 437.3 403.5L402.6 368.8C415.3 347.4 419.6 321.1 412.7 295.1C399 243.9 346.3 213.5 295.1 227.2C286.5 229.5 278.4 232.9 271.1 237.2L236.4 202.5zM357.3 459.1C345.4 462.3 332.9 464 320 464C240.5 464 176 399.5 176 320C176 307.1 177.7 294.6 180.9 282.7L101.4 203.2C68.8 240 46.4 279 34.5 307.7C31.2 315.6 31.2 324.4 34.5 332.3C49.4 368 80.7 420 127.5 463.4C174.6 507.1 239.3 544 320.1 544C357.4 544 391.3 536.1 421.6 523.4L357.4 459.2z"/></Svg>
       
        )
        }  
          
           </View>   
          )}

          </TouchableOpacity>  


          </View>
           <View style={{}}>
          <Text style={styles.errorStyling}>{passdError}</Text> 
          </View> 
 </View>
     



     <View style={styles.signInButtonContainer}>

        <Text style={styles.signIn}>Create</Text>
     <TouchableOpacity onPress={handleLogin}>
        <LinearGradient colors={['#dd9024', '#dd9024', '#dd9024']}  style={styles.LinearGradient}>
        <FontAwesome size={20}  color={"white"}  name={"arrow-right"}/>
       </LinearGradient>
         </TouchableOpacity>
     </View>
   {/* Register screen ka naam check karlein */}
          <Text style={styles.footerText}>have already an account?
             <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={{textDecorationLine :"underline", color : '#dd9024'}}>Login</Text>
            </TouchableOpacity>
        </Text>
 
    </View>
    </View>


  );

}

export default Login

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : "#dd9024",
        position : 'relative'
    },
    logo : {
     width :110,
     height : 110,
     backgroundColor : '#ffffff',
     borderRadius : 60,
     justifyContent : 'center',
     alignItems : 'center',
   
    } ,
    logoImg : {
      width : 70,
      height :70
    },
   popupArea : {
    backgroundColor : '#ffff',
    borderTopLeftRadius : 40,
    borderTopRightRadius : 40,
    bottom : 0,
    position : 'absolute',
    left : 0,
    right : 0,
    paddingTop : 40,
    height : '69%'
   },
    helloContainer : { 
        borderWidth : 1,
    },
    helloText : {
        fontSize : 30,
        marginStart : 20,
        fontWeight :"500",
        color :"#ffffff",
        marginBottom : 10
        
    
    },
    signInText : {
        textAlign : 'center',
        fontSize : 20,
        color : '#262626',
        marginBottom : 35
    },
    mainContainer : {
     marginHorizontal : 25,
     marginTop : 0
    }
 ,
    inputContainer : {
        backgroundColor : "#f4f4f4ff",
        flexDirection : "row",
        borderRadius :20,
        elevation : 10,
        alignItems : 'center'  ,   
        height : 60,
        color : 'red',
    
    },
  
    userInput  : {
        marginBottom : 10
    },
      passInput  : {
        marginBottom : 10
    },
    inputIcon : {
        marginLeft : 15
    },
    inputText:{
        fontSize:17,
        padding : 15,
         color : 'gray',
         flex : 1
    },
   
     signInButtonContainer : {
        flexDirection : 'row',
        marginTop : 15,
        width : "100%",
        justifyContent : 'center',
        alignItems: 'center' // 🌟 Arrow aur text ko barabar karne ke liye

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
    marginTop : 20,
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
   },
   errorStyling :  {
    color : '#e40e0e',
    marginBottom : 10,
    marginStart : 10,
    
   }
   
})
