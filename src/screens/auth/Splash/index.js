import React, { useContext } from "react";
import Button from "../../../components/Button";
import {
    Text,
    View,
    Image,
    Pressable
} from "react-native";
import { styles } from "./styles";

const Splash = () => {

    return(
        <View>
            <Image style={styles.image} resizeMode="contain" source={require('../../../assets/splash.png')}/>

            <View>
                <Text>Plan and prosper with</Text>
                <Text>PlanPalooza</Text>
            </View>

            <Button title="Sign Up"/>
            <Button title="Sing In"/>
        </View>
    )
}

export default Splash