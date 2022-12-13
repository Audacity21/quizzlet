import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MyStack from "./navigation";

export default function App() {
  return (
    <NavigationContainer style={styles.nav}>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#662E9B",
    padding: 40,
  },
});
