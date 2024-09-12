import React from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, Button, Text, Appbar } from "react-native-paper";

const Login = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <Appbar.Header style={{ backgroundColor: "#6200ee" }}>
        <Appbar.Content title="Login" />
      </Appbar.Header>

      {/* Form */}
      <View style={styles.formContainer}>
        {/* Email Input */}
        <TextInput
          label="Email"
          mode="outlined"
          style={styles.input}
          autoCompleteType="email"
        />

        {/* Password Input */}
        <TextInput
          label="Password"
          mode="outlined"
          secureTextEntry
          style={styles.input}
          autoCompleteType="password"
        />

        {/* Forgot Password */}
        <Text style={styles.forgotPassword}>Forgot Password?</Text>

        {/* Login Button */}
        <Button mode="contained" style={styles.loginButton}>
          Login
        </Button>

        {/* Signup Link */}
        <View style={styles.signupContainer}>
          <Text>Don’t have an account? </Text>
          <Text style={styles.signupText}>Sign Up</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  formContainer: {
    padding: 20,
    marginTop: 50,
  },
  input: {
    marginBottom: 20,
  },
  forgotPassword: {
    textAlign: "right",
    color: "#6200ee",
    marginBottom: 20,
  },
  loginButton: {
    marginTop: 10,
  },
  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  signupText: {
    color: "#6200ee",
    fontWeight: "bold",
  },
});

export default Login;
