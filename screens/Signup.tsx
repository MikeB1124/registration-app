import { useState } from "react";
import { Button, Text, View, TextInput, SafeAreaView, StyleSheet, Alert } from "react-native";


export default function Signup({ navigation }: { navigation: any }) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const onUsernameChange = (c: string) => {
        setUsername(c)
    }

    const onPasswordChange = (c: string) => {
        setPassword(c)
    }

    const onSignup = async () => {
        console.log("Username: ", username)
        console.log("Password: ", password)

        let url = "https://itvo4rz3ue.execute-api.us-west-2.amazonaws.com/api/signup"
        let body = {
            username: username,
            password: password
        }

        await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'x-api-key': 'fm41U0SDUIa9bGidkcPjx7GEs316dOMT8ocwmdpy'
            },
            body: JSON.stringify(body)
        })
        .then(response => response.json())
        .then(data => {
            if ("error" in data) {
                Alert.alert(data["error"])
            } else {
                Alert.alert(data["message"])
                navigation.navigate("Login")
            }
        })
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