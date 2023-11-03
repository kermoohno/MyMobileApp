import { StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";

export const styles = StyleSheet.create({
    container:{
        padding: 24,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    },
    image: {
        width: '100%',
        height: 350
    },
    title: {
        fontFamily: 'LuckiestGuy-Regular',
        fontSize: 36
    },
    semititle: {
        fontFamily: 'LuckiestGuy-Regular',
        color: colors.orange
    },
    TextContainer: {
        marginTop: 35,
        marginBottom: 45
    }
})