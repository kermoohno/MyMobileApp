import { StyleSheet } from "react-native";

import { colors } from '../../utils/colors';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20
    },
    text: {
        color: colors.black,
       
    },
    line: {
        backgroundColor: colors.black,
        height: 1,
        flex: 1,
        marginVertical: 8
    }
})