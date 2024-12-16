import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { BaoCaoScreen, HoSoHocVienScreen } from '../../screen'


const DanhSachNavigator = () => {
    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator
         screenOptions={{
            headerShown:false
         }}
        >
            <Stack.Screen name='HoSoHocVienScreen' component={HoSoHocVienScreen}/>
            <Stack.Screen name='BaocaoScreen' component={BaoCaoScreen}/>
        </Stack.Navigator>
    )
}

export default DanhSachNavigator