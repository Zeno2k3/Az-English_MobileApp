
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { LoginScreen, SignupScreen } from '../screen';

const AuthNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}>
      <Stack.Screen name= 'LoginScreen' component={LoginScreen}/>
      <Stack.Screen name= 'SignupScreen' component={SignupScreen}/>
    </Stack.Navigator>
  )
}

export default AuthNavigator