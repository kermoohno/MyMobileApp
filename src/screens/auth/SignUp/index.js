import React, { useState } from "react";
import { View, Text } from "react-native";
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/Input";
import Checkbox from "../../../components/Checkbox";
import Button from "../../../components/Button";
import { styles } from "./styles";
import Separator from "../../../components/Separator";


const SignUp = () => {
    const [checked, setChecked] = useState(false)
    return(
        <View style={styles.container}>
            <AuthHeader title="SignUp" />
            <Input placeholder="Name"/>
            <Input placeholder="Email"/>
            <Input isPassword placeholder="Passwordasd"/>
            <View style={styles.agreeRow}>
                <Checkbox checked={checked} onCheck={setChecked}/>
                <Text style={styles.agreeText}>I agree with<Text style={styles.agreeTextColored}> Terms</Text> & <Text style={styles.agreeTextColored}>Privacy</Text></Text>
            </View>
            <Button style={styles.button} title="Sign Up"/>
        </View>
    )
}

export default SignUp