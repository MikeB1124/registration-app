import { Button, Text, View, TextInput, SafeAreaView, StyleSheet } from "react-native";

export default function Home({ navigation }: { navigation: any }) {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Welcom to the Home Page!</Text>
            <Button title="Logout" onPress={() => navigation.navigate("Login")}/>
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