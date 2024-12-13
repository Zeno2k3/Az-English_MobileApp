import { StyleProp, TextStyle, TouchableOpacity, ViewStyle} from "react-native"
import TextComponent from "./TextComponent"
import { ReactNode } from "react"
import appColor from "../constant/appColor"
import { globalStyles } from "../styles/globalStyle"

interface Props {
    text: string,
    styles?: StyleProp<ViewStyle>
    icon?: ReactNode
    textStyle ?: StyleProp<TextStyle>
    onPress ?: () => void
    type: 'primary' | 'link'  
}

const ButtonCoponent = (props : Props) => {
    const {text, styles, textStyle, icon, onPress, type} = props
    return (
            type === 'primary' ?
        (<TouchableOpacity
            style = {[
                globalStyles.button,
                {
                    paddingHorizontal: 20,
                    paddingVertical: 5,
                    width:200,
                    height: 40 
                },
                styles
            ]}
            onPress={onPress}
        >
            {icon ?? icon}
            <TextComponent 
                text={text} 
                styles={[
                globalStyles.text,
                {
                    fontSize: 20,
                    color: appColor.white
                },
                textStyle]}
            />
        </TouchableOpacity>) : 
        <TouchableOpacity
        onPress={onPress}
        >
            <TextComponent text={text}
            styles = {[
                {
                color: appColor.black,
                },
                textStyle
            ]}
            />
        </TouchableOpacity>
    )
}

export default ButtonCoponent