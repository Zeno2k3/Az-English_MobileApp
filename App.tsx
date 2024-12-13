import { StatusBar} from 'react-native'
import React, { useEffect, useState } from 'react'
import SplashScreen from './src/screen/SplashScreen'
import AuthNavigator from './src/navigators/AuthNavigator';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  const [isShowSplash, setisShowSplash] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setisShowSplash(false);
    },3000)
    return () => clearTimeout(timeout)
  },[])
  return (
    <>
      <StatusBar translucent barStyle={'light-content'} backgroundColor={'transparent'}/>
      {isShowSplash ? <SplashScreen/> : 
        <NavigationContainer>
          <AuthNavigator/>
        </NavigationContainer>
      } 
    </>
  )
}

export default App