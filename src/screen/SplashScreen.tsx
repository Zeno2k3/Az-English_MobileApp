import { ActivityIndicator, ImageBackground } from 'react-native'
import React from 'react'
import appColor from '../constant/appColor'

const SplashScreen = () => {
  return (
    <ImageBackground
        style= {{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}
        source={require('../assets/img/splash-img.png')}
    >
    <ActivityIndicator color={appColor.pimary}/>
    </ImageBackground>
  )
}

export default SplashScreen