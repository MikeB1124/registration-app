import { useState } from "react";
import { Button, Text, View, TextInput, SafeAreaView, StyleSheet } from "react-native";


export default function Signup({ navigation }: { navigation: any }) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const onUsernameChange = (c: string) => {
        setUsername(c)
    }

    const onPasswordChange = (c: string) => {
        setPassword(c)
    }

    const onSignup = () => {
        console.log("Signed up!")
        console.log("Username: ", username)
        console.log("Password: ", password)
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Signup</Text>
            <TextInput
                style={styles.input}
                onChangeText={(c) => onUsernameChange(c)}
                value={username}
                placeholder="Username"
            />
            <TextInput
                style={styles.input}
                onChangeText={(c) => onPasswordChange(c)}
                value={password}
                placeholder="Password"
            />
            <Text style={styles.loginStyle} onPress={() => navigation.navigate("Login")}>Already have an account?</Text>
            <Button title="Signup" onPress={onSignup}/>
        </SafeAreaView>    
    );
}
  

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      borderRadius: 16,
      width: '80%',
    },
    header: {
        paddingTop: 128,
        margin: 16,
        fontSize: 24,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    loginStyle: {
        color: "gray",
        fontSize: 16,
    },
  });