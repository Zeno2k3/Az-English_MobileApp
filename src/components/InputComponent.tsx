import { View,TextInput, StyleProp, ViewProps, ViewStyle } from 'react-native'
import React, { useState } from 'react'
import { globalStyles } from '../styles/globalStyle';
import appColor from '../constant/appColor';


interface Props {
    value: string;
    styles?: StyleProp<ViewStyle>
    type?: 'auth' | 'input'
    isPassWord ?: boolean
    onChange : (val: string) => void

}
const InputComponent = (props: Props) => {
    const {value, styles, type, isPassWord, onChange} = props
    return (
        <View
            style= {[globalStyles.button,
                {
                    backgroundColor: appColor.white,
                    borderWidth: 1,
                    borderColor: type === 'auth' ? appColor.gray : appColor.blue, 
                    flexDirection: 'row',
                },
                styles
            ]}>
        <TextInput 
            style = {{
                flex: 1,
                paddingHorizontal: 14,
            }}
            value = {value}
            onChangeText={val => onChange(val)}
            secureTextEntry = {isPassWord}
            />
        </View>
    )
}

export default InputComponent