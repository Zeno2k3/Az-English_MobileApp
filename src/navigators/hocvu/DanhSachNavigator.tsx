import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { DanhSachHocVienScreen } from '../../screen'
import ThemHocVienScreen from '../../screen/home/hocvu/hosohv/ThemHocVienScreen'

const DanhSachNavigator = () => {
    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator
         screenOptions={{
            headerShown:false
         }}
        >
            <Stack.Screen name='DanhSachHocVienScreen' component={DanhSachHocVienScreen}/>
            <Stack.Screen name='ThemHocVienScreen' component={ThemHocVienScreen}/>
        </Stack.Navigator>
    )
}

export default DanhSachNavigator