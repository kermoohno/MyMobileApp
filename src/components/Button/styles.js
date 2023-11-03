import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.orange,
        paddingVertical: 18,
        paddingHorizontal: 8,
        borderRadius: 10,
        width: '100%',
        marginBottom: 25,
    },
    title: {
        fontFamily: 'LuckiestGuy-Regular',
        fontSize: 24,
        color: colors.black,
        textAlign: 'center',
        paddingTop: 5
    }
})