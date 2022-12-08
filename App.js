import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import Home from "./screens/Home";
import Quiz from "./screens/Quiz";
import Result from "./screens/Result";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Quiz /> */}
      <Home />
      {/* <Result /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#662E9B",
    padding: 40,
  },
});
