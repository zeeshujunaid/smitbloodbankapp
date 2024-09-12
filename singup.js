import React from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, Button, Text, Appbar } from "react-native-paper";
import { Formik } from "formik";
import * as Yup from "yup";

// Validation schema
const SignupSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const Signup = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <Appbar.Header style={{ backgroundColor: "#6200ee" }}>
        <Appbar.Content title="Sign Up" />
      </Appbar.Header>

      {/* Form */}
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          // Handle form submission (sign up logic)
          console.log(values);
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View style={styles.formContainer}>
            {/* Name Input */}
            <TextInput
              label="Name"
              mode="outlined"
              value={values.name}
              onChangeText={handleChange("name")}
              onBlur={handleBlur("name")}
              style={styles.input}
              error={touched.name && errors.name ? true : false}
            />
            {touched.name && errors.name && (
              <Text style={styles.errorText}>{errors.name}</Text>
            )}

            {/* Email Input */}
            <TextInput
              label="Email"
              mode="outlined"
              value={values.email}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              style={styles.input}
              error={touched.email && errors.email ? true : false}
            />
            {touched.email && errors.email && (
              <Text style={styles.errorText}>{errors.email}</Text>
            )}

            {/* Password Input */}
            <TextInput
              label="Password"
              mode="outlined"
              secureTextEntry
              value={values.password}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              style={styles.input}
              error={touched.password && errors.password ? true : false}
            />
            {touched.password && errors.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}

            {/* Submit Button */}
            <Button
              mode="contained"
              onPress={handleSubmit}
              style={styles.submitButton}
            >
              Sign Up
            </Button>
          </View>
        )}
      </Formik>
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
  },
  input: {
    marginBottom: 10,
  },
  submitButton: {
    marginTop: 20,
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginBottom: 10,
  },
});

export default Signup;
