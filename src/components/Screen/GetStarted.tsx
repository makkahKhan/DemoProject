import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { StyleSheet } from 'react-native'

const GetStarted = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const navigation = useNavigation();

  const handleStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      navigation.navigate('Login')
    }
  }

  const steps = [
    {
      title: "Seamless Shopping",
      description: "Explore thousands of products from top brands and find exactly what you need with ease.",
      image: require('../../assets/getStarted/s.png'), // Apni image path check karein
    },
    {
      title: "Fast Delivery",
      description: "Our lightning-fast logistics ensure your orders reach your doorstep safely and on time.",
      image: require('../../assets/getStarted/d.png'), // 2nd image yahan dalein
    },
    {
      title: "Easy Payment",
      description: "Multiple secure payment options including Credit Cards, UPI, and Cash on Delivery.",
      image: require('../../assets/getStarted/p.png'), // 3rd image yahan dalein
    },
  ];
  return (

    <>
      <View style={{backgroundColor : '#ffff', flex : 1}}>
        <View style={styles.container}>
        <View >
          <Image source={steps[currentStep].image} style={styles.img} />
        </View>
        <View style={styles.details}>
          <Text style={styles.title}>
            {steps[currentStep].title}
          </Text>
          <Text style={styles.titleParagraph}>
            {steps[currentStep].description}
          </Text>
        </View>

      </View>

      <View style={styles.bottomArea}>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={{ color: '#ababab' }}>
              Skip
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.progressBar}>
          <Text style={{
            width: 6,
            height: 6, borderRadius: 15,
            backgroundColor: currentStep === 0 ? '#dd9024' : '#d7d7d7',

          }}>    </Text>

          <Text style={{
            width: 5,
            height: 6, borderRadius: 15,
            backgroundColor: currentStep === 1 ? '#dd9024' : '#d7d7d7',

          }}>    </Text>

          <Text style={{
            width: 6,
            height: 6, borderRadius: 15,
            backgroundColor: currentStep === 2 ? '#dd9024' : '#d7d7d7',

          }}>    </Text>
        </View>

        <View>
          <TouchableOpacity onPress={() => handleStep()}>
            <Text style={{ color: '#dd9024', fontWeight: 'bold' }}>
              Next
            </Text>
          </TouchableOpacity>
        </View>


      </View>
      </View>
      
    </>

  )
}

export default GetStarted

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    flex: 1,
    backgroundColor: '#ffffff'
  },
 
  img: {
    width: 500,
    height: 400,

  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 28
  },
  titleParagraph: {
    color: '#898888',
    textAlign: 'center',
    marginTop: 10,
    lineHeight: 20
  },
  details: {
    marginHorizontal: 26,
   
  },
  bottomArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
     position : 'absolute',
    marginHorizontal: 30,
    bottom : 120,
    left : 0,
    right : 0
   
  },
  progressBar: {
    flexDirection: 'row',
    gap: 4,


  }
})
