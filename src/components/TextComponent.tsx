import { Text, StyleProp, TextStyle } from 'react-native'
import React from 'react'
import { globalStyles } from '../styles/globalStyle'
import { appFamilies } from '../constant/appFamilies'
import appColor from '../constant/appColor'

interface Props {
    text: string,
    size?: number,
    color ?: string,
    font?: string,
    styles?: StyleProp<TextStyle>
    title?: boolean
}

const TextComponent = (props: Props) => {
    const {text, size, font, styles,color, title} = props
    return (
        <Text
            style = {[
                globalStyles.text,
                {
                    color: color ? color : title ? appColor.white : appColor.black,
                    fontSize: size ? size : title ? 24 : 16,
                    fontFamily: font ? font : title ? appFamilies.medium: appFamilies.regular
                },
                styles
            ]}
        >{text}</Text>
    )
}

export default TextComponent