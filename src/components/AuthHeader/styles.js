import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        padding: 4,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 34,
    },
    image: {
        width: 38,
        height: 38
    },
    title: {
        fontFamily: 'LuckiestGuy-Regular',
        color: colors.black,
        fontSize: 32,
        paddingHorizontal: 24,
        paddingTop: 10
    }
})