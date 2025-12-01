import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import Login from './src/components/Screen/Login';
import SignUp from './src/components/Screen/SignUp';
import BottomTab from './src/navigation/BottomTab';
import AddToCart from './src/components/Screen/AddToCart';
import { CartProvider } from './src/CartContext';
import Toast from 'react-native-toast-message';
import { toastConfig } from './src/utils/ToastConfig';



const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <CartProvider>
       <NavigationContainer> 
       <Stack.Navigator 
        initialRouteName='SignUp'
        screenOptions={{ headerShown: false }}> 
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Main" component={BottomTab} />
      <Stack.Screen name="Addtocart" component={AddToCart} />
     </Stack.Navigator> 
    </NavigationContainer>
      <Toast config={toastConfig}/>
    </CartProvider>
   
  );
}
