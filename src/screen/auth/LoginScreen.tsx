import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { globalStyles } from '../../styles/globalStyle'
import appColor from '../../constant/appColor'
import { appInfor } from '../../constant/appInfor'
const LoginScreen = () => {
  return (
      <View style= {globalStyles.container}>
        <View
        style = {{flex: 3, 
        backgroundColor: 
        appColor.pimary, 
        borderBottomEndRadius: 13,
        borderBottomStartRadius: 13
        }}>

        </View>
        <View style = {{flex: 7, backgroundColor: appColor.white2, opacity: 0.1}}>
        </View>
        <View
          style = {{
            top: 100, 
            right: appInfor.size.WIDTH * 0.125, 
            position: 'absolute', width: appInfor.size.WIDTH *.75, 
            backgroundColor: appColor.white, height: 
            appInfor.size.HEIGHT * 0.75,
            borderRadius: 25
          }}
        >

        </View>
      </View>
  )
}
export default LoginScreen