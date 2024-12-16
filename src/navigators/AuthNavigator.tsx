
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { LoginScreen, SignupScreen } from '../screen';
import TabNavigator from './hocvu/TabNavigator';

const AuthNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}>
      <Stack.Screen name= 'LoginScreen' component={LoginScreen}/>
      <Stack.Screen name= 'SignupScreen' component={SignupScreen}/>
      <Stack.Screen name = 'TabNavigator' component={TabNavigator}/>
    </Stack.Navigator>
  )
}

export default AuthNavigator