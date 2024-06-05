import { useState, useEffect } from "react";
import { Button, Text, View, TextInput, SafeAreaView, StyleSheet, Alert } from "react-native";


export default function Signup({ navigation }: { navigation: any }) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const navigateToLogin = () => {
        setUsername("")
        setPassword("")
        navigation.navigate("Login")
    }

    const signupFailed = (message: string) => {
        Alert.alert("Signup failed", message, [
            {
                text: "Try Again",
                onPress: () => {
                    setUsername("")
                    setPassword("")
                },
            },
        ])
    }

    const signupSuccess = (message: string) => {
        Alert.alert("Signup Successful", message, [
            {
                text: "Login",
                onPress: () => {
                    navigateToLogin()
                },
            },
        ])
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
              'x-api-key': process.env.X_API_KEY as string
            },
            body: JSON.stringify(body)
        })
        .then(r => r.json())
        .then(data => {
            if (data["statusCode"] >= 400) {
                signupFailed(data["message"])
            }

            if (data["statusCode"] == 200) {
                signupSuccess(data["message"])
            }
        })
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Signup</Text>
            <TextInput
                style={styles.input}
                onChangeText={(c) => setUsername(c)}
                value={username}
                placeholder="Username"
            />
            <TextInput
                style={styles.input}
                onChangeText={(c) => setPassword(c)}
                value={password}
                placeholder="Password"
                secureTextEntry={true}
            />
            <Text style={styles.loginStyle} onPress={() => navigateToLogin()}>Already have an account?</Text>
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