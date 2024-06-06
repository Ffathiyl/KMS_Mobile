import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator, createNavigationNavigator } from "@react-navigation/native-stack";
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Login from './page/Login';
import FileMateri from './page/FileMateri';
import Dashboard from './page/Dashboard';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="File" component={FileMateri} />
          {/* Definisikan screen lain di sini */}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    width: '100%',  // Ensure full width
  },
});
