import {
  ActivityIndicator,
  Button,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { FIREBASE_AUTH } from "../../firebaseConfig";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;

  const signUp = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(response);
      alert("Check your emails");
    } catch (error) {
      console.log(error);
      alert("Registration failed: ");
    } finally {
      setLoading(false);
    }
  };

  const signIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
    } catch (error) {
      console.log(error);
      alert("Sign In failed: ");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior="padding">
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text: string) => setEmail(text)}
          value={email}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          textContentType="password"
          onChangeText={(text: string) => setPassword(text)}
          value={password}
          secureTextEntry={true}
          autoCapitalize="none"
        />
        {loading ? <ActivityIndicator size={"large"} color="#0000ff" /> : <></>}
        <Button onPress={signIn} title="Login " />
        <Button onPress={signUp} title="Create Account" />
      </KeyboardAvoidingView>
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
