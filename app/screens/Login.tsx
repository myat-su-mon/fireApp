import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();

  const signUp = async () => {
    const after = createUserWithEmailAndPassword(auth, email, password);
    alert('Check you Emails')
  };

  const signIn = async () => {
    const user = signInWithEmailAndPassword(auth, email, password);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text: string) => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        textContentType="password"
        onChangeText={(text: string) => setPassword(text)}
        value={password}
      />
      <Button onPress={signUp} title="Sign Up" />
      <Button onPress={signIn} title="Sign In" />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    flexDirection: "column",
    paddingVertical: 10,
  },
  input: {
    marginVertical: 4,
    height: 50,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    backgroundColor: "#fff",
  },
});
