import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; import Login from './src/components/Screen/Login';
import SignUp from './src/components/Screen/SignUp';
import BottomTab from './src/navigation/BottomTab';



const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer> 
       <Stack.Navigator 
        initialRouteName='Login'
        screenOptions={{ headerShown: false }}> 
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
       <Stack.Screen name="Main" component={BottomTab} />
     </Stack.Navigator> 
    </NavigationContainer>
  );
}
