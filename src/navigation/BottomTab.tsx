
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import HomeScreen from '../components/Screen/HomeScreen'
import ProfileScreen from '../components/Screen/ProfileScreen'
import CartScreen from '../components/Screen/CartScreen'
import WishList from '../components/Screen/WishList'
import Ionicons from 'react-native-vector-icons/Ionicons'; 
import { useCart } from '../CartContext'

const BottomTab  = () => {
    const Tab = createBottomTabNavigator();
     const { cartItems } = useCart();
  return ( 
   
      <Tab.Navigator       
        screenOptions={({route}) =>({
          headerShown : false,
          tabBarIcon : ({focused, color, size}) => {
            
           let iconName : React.ComponentProps<typeof Ionicons>['name'] = 'home';
            if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'Cart') {
            iconName = focused ? 'cart' : 'cart-outline';
          } else if (route.name === 'WishList') {
            iconName = focused ? 'heart' : 'heart-outline';
          }

            return <Ionicons name={iconName} size={size} color={color} />
          },
           tabBarActiveTintColor: '#b76e79',
           tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="Home" component={HomeScreen} options={{title : 'Home'}}/>
         <Tab.Screen name="Cart" component={CartScreen} options={{title : 'Cart',
          tabBarBadge : cartItems.length > 0 ? cartItems.length : undefined
         }} />
         <Tab.Screen name="WishList" component={WishList} options={{title : 'WishList'}}/>
         <Tab.Screen name="Profile" component={ProfileScreen}options={{title : 'Profile'}}/>

      </Tab.Navigator>
   
  )
}

export default BottomTab
