import { View } from 'react-native'
import React, { useState } from 'react'
import { globalStyles } from '../../styles/globalStyle'
import appColor from '../../constant/appColor'
import { appInfor } from '../../constant/appInfor'
import TextComponent from '../../components/TextComponent'
import SpaceComponent from '../../components/SpaceComponent'
import ButtonCoponent from '../../components/ButtonCoponent'
import InputComponent from '../../components/InputComponent'
const LoginScreen = ({navigation}: any) => {
  const [name, setName] = useState('');
  const [passWord, setPassWord] = useState('');
  return (
      <View style= {globalStyles.container}>
        <View
        style = {{
        flex: 3, 
        backgroundColor: 
        appColor.pimary, 
        borderBottomEndRadius: 13,
        borderBottomStartRadius: 13,
        alignItems: 'center'
        }}>
            <SpaceComponent heigth={60}/>
            <TextComponent text = {'ĐĂNG NHẬP'} title/>
        </View>
        <View style = {{flex: 7, backgroundColor: appColor.white2, opacity: 0.06}}>
        </View>
        <View
          style = {{
            top: 100, 
            right: appInfor.size.WIDTH * 0.125, 
            position: 'absolute',
            width: appInfor.size.WIDTH *.75, 
            backgroundColor: appColor.white, 
            height: appInfor.size.HEIGHT * 0.75,
            borderRadius: 25,
            alignItems: 'center'
          }}>
          <SpaceComponent heigth={160}/>
          <View style ={{width: 200}}>
            <TextComponent text='Tên đăng nhập'/>
            <SpaceComponent heigth={10}/>
            <InputComponent value={name} 
              onChange={(val) => setName(val)}/>
            <SpaceComponent heigth={10}/>
            <TextComponent text='Mật khẩu'/>
            <SpaceComponent heigth={10}/>
            <InputComponent 
              isPassWord
              value={passWord} 
              onChange={(val) => setPassWord(val)}
            />
          </View>
          <SpaceComponent heigth={50}/>
          <View style ={{flexDirection: 'row',width: 200,justifyContent: 'space-between'}}>
            <SpaceComponent width={15} />
            <ButtonCoponent text='Quên mật khẩu?' type='link'/>
          </View>
          <SpaceComponent heigth={50}/>
          <View style ={{width: 200, alignItems: 'center'}}>
            <ButtonCoponent text='Đăng nhập' type='primary' onPress={() => navigation.navigate('TabNavigator')}/>
            <SpaceComponent heigth={10}/>
            <ButtonCoponent text='Đăng ký tài khoản' type='link' onPress={() => navigation.navigate('SignupScreen')}/>
          </View>

        </View>
      </View>
  )
}
export default LoginScreen