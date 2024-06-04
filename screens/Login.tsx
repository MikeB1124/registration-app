import { useState } from "react";
import { Button, Text, View, TextInput, SafeAreaView, StyleSheet } from "react-native";


export default function Login({ navigation }: { navigation: any }) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    
    const onLogin = () => {
        console.log("Logged in!")
        console.log("Username: ", username)
        console.log("Password: ", password)
        navigation.navigate("Home")
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Login</Text>
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
            />
            <Text style={styles.loginStyle} onPress={() => navigation.navigate("Signup")}>Don't have an account?</Text>
            <Button title="Login" onPress={onLogin}/>
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
  