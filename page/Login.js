import React, { useState } from 'react';
import { SafeAreaView, View, ScrollView, Image, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Logo from '../assets/logo_astra.jpeg';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Login({ navigation }) {

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.logoContainer}>
          <Image
            source={Logo}
            resizeMode={"stretch"}
            style={styles.logo}
          />
        </View>
        <Text style={styles.titleText}>
          {"Knowledge Management System"}
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="NIM"
            placeholderTextColor="#868B8E"
          />
        </View>
        <View style={styles.passwordContainer}>
          <TextInput
            style={[styles.textInput, styles.passwordInput]} // added style for password input
            placeholder="Kata Sandi"
            placeholderTextColor="#868B8E"
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity onPress={toggleShowPassword} style={styles.toggleButton}>
            {showPassword ? (
              <Ionicons name="eye-off-outline" size={24} color="black" />
            ) : (
              <Ionicons name="eye-outline" size={24} color="black" />
            )}
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Dashboard")}>
          <Text style={styles.buttonText}>{"Masuk"}</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  scrollView: {
    flex: 1,
    backgroundColor: "#0056A6",
    paddingTop: 70,
    paddingBottom: 135,
  },
  logoContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 19,
    paddingHorizontal: 15,
    marginBottom: 53,
    marginHorizontal: 107,
    alignItems: "center",
    justifyContent: "center",
    width: 200,
    height: 50,
  },
  logo: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  titleText: {
    color: "#FFFFFF",
    fontSize: 32,
    marginBottom: 50,
    marginHorizontal: 55,
    width: 300,
    fontFamily: "Roboto",
    textAlign: "center",
  },
  inputContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    paddingVertical: 16,
    paddingHorizontal: 19,
    height: 50,
    marginBottom: 19,
    marginHorizontal: 20,
  },
  textInput: {
    color: "#868B8E",
    fontSize: 12,
    flex: 1, // ensure text input takes remaining space
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginBottom: 32,
    height: 50,
    marginHorizontal: 20,
  },
  passwordInput: {
    flex: 1, // ensure password input takes remaining space
  },
  toggleButton: {
    padding: 0,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    paddingVertical: 14,
    marginHorizontal: 61,
  },
  buttonText: {
    color: "#0056A6",
    fontSize: 13,
    fontWeight: "bold",
  },
});
