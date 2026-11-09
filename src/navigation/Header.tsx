
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
 import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../components/Screen/Login';
import SignUp from '../components/Screen/SignUp';
import BottomTab from './BottomTab';
import GetStarted from '../components/Screen/GetStarted';
interface HeaderItemProps {
 title ?: string;
 name ?: string;
}

const Header : React.FC<HeaderItemProps> = ({title}) => {
  const navigation = useNavigation();
 const Stack = createNativeStackNavigator()
  return (
     <View style={styles.headerContainer}>
       <View style={styles.topBar}>
           <TouchableOpacity onPress={() => navigation.goBack()}>
             <AntDesign name="left" size={26} color="#dd9024" />
           </TouchableOpacity>
         <Text style={styles.title}>{title}</Text>
         <View style={{ width: 26 }} />
       </View>
     </View>

  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    marginTop : 40,
    padding: 20,
    paddingBottom: 10,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
     fontSize: 22,
     fontWeight: '600' ,
    color : '#dd9024'},
});
