import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Signup from './screens/Signup';
import Login from './screens/Login';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{title: "", headerLeft: () => null}}/>
        <Stack.Screen name="Signup" component={Signup} options={{title: "", headerLeft: () => null}}/>
        <Stack.Screen name="Login" component={Login} options={{title: "", headerLeft: () => null}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});