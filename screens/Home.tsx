import { Button, Text, View, TextInput, SafeAreaView, StyleSheet } from "react-native";
import { useEffect, useState } from 'react';
import * as Location from 'expo-location';

export default function Home({ navigation }: { navigation: any }) {
    const [longitude, setLongitude] = useState(0.0);
    const [latitude, setLatitude] = useState(0.0);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
            console.log('Permission to access location was denied');
            return;
            }

            await Location.watchPositionAsync({distanceInterval: 1, accuracy: Location.Accuracy.BestForNavigation}, (l) => {
            setLongitude(l.coords.longitude);
            setLatitude(l.coords.latitude);
            });
        })();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Welcome to the Home Page!</Text>
            <Text style={styles.coords}>Longitude: {longitude}</Text>
            <Text style={styles.coords}>Latitude: {latitude}</Text>
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
    coords: {
        fontSize: 18,
    }
  });