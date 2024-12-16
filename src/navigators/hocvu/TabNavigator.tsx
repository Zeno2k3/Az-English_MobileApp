import React, { ReactNode } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen, SettingScreen} from '../../screen'
import DanhSachNavigator from './DanhSachNavigator';
import HoSoNavigator from './HoSoNavigator';
import appColor from '../../constant/appColor';
import { Element3, Setting2, UserSquare } from 'iconsax-react-native';

const TabNavigator = () => {
    const Tab = createBottomTabNavigator();
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
            headerShown: false,
            tabBarStyle: {
                borderTopWidth: 1,
                height: 60,
                justifyContent: 'center',
                alignItems: 'center',
            },
            
        })}
      >
      <Tab.Screen name='HomeScreen' component={HomeScreen} options={{
        title:''
      }}/> 
      <Tab.Screen name='HoSoNavigator' component={HoSoNavigator} options={{
        title:''
      }}/>
      <Tab.Screen name='DanhSachNavigator' component={DanhSachNavigator} options={{
        title:''
      }}/>
      <Tab.Screen name='SettingNavigator' component={SettingScreen} options={{
        title:''
      }}/>
      </Tab.Navigator>
  )
}

export default TabNavigator