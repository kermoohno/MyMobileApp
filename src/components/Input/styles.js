import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        marginBottom: 5
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: colors.orange,
        borderRadius: 14,
        flexDirection: 'row',
        alignItems: 'center'
    },
    input: {
        paddingHorizontal: 14,
        paddingVertical: 14,
        flex: 1,
        fontFamily: 'LuckiestGuy-Regular',
        color: colors.black,
        fontSize: 20,
        marginTop: 5
    },
    label: {
        marginVertical: 8,
        color: colors.black,
        fontFamily: 'LuckiestGuy-Regular',
    },
    eye: {
        width: 38,
        height: 26,
        marginHorizontal: 16
    }
})