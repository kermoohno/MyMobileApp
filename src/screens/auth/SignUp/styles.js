import { StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        padding: 24
    },
    agreeRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 35,
        marginBottom: 35
    },
    agreeText: {
        color: colors.black,
        marginHorizontal: 14,
        fontFamily: 'LuckiestGuy-Regular',
        fontSize: 16,
        paddingTop: 5
    },
    agreeTextColored: {
        color: colors.orange,
        fontFamily: 'LuckiestGuy-Regular',
        fontSize: 16,
        paddingTop: 5
    },
    button: {
        marginVertical: 20
    }
})