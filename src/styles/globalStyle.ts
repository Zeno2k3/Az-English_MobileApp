import { StyleSheet } from "react-native";
import appColor from "../constant/appColor";

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: appColor.white
    },
    text: {
        color: appColor.black,
        fontSize: 16, 
    },
    button: {
        backgroundColor: appColor.pimary,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        elevation :6
    }
})