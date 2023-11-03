import React, { useContext } from "react";
import Button from "../../../components/Button";
import {
    Text,
    View,
    Image,
    Pressable
} from "react-native";
import { styles } from "./styles";
import { colors } from "../../../utils/colors";

const Splash = () => {

    return(
        <View style={styles.container}>
            <Image style={styles.image} resizeMode="contain" source={require('../../../assets/splash2.jpg')}/>
            <View style={styles.TextContainer}>
                <Text style={styles.title}>Plan and prosper with
                <Text style={styles.semititle}> PlanPalooza</Text>
                </Text>
            </View>
            <Button title="Sign Up"/>
            <Button title="Sing In" titleStyle={{ color: colors.white }}/>
        </View>
    )
}

export default Splash