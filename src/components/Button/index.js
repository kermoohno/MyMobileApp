import React from "react";
import { Pressable, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const Button = ({title, onPress, titleStyle, style}) => {

    return (
        <TouchableOpacity activeOpacity={0.6} onPress={onPress} style={[styles.container, style]}>
            <Text style={[styles.title, titleStyle]}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button