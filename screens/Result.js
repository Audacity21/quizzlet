import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const Result = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View>
        <Text style={{ fontSize: 36, color: "#fff" }}>Congratulations!</Text>
        <Text style={{ fontSize: 24, color: "#3dfc03" }}>
          You have completed the quiz.
        </Text>
      </View>
      {/* Body */}
      <View style={styles.body}>
        <View style={styles.circle}>
          <Text style={{ fontSize: 60, fontWeight: "600" }}>10</Text>
        </View>
      </View>
      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={{ color: "#fff", fontSize: 18 }}>TRY AGAIN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    justifyContent: "space-evenly",
    backgroundColor: "#662E9B",
    padding: 40,
  },
  body: {
    backgroundColor: "#b134eb",
    borderRadius: 40,
    height: "50%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    width: 150,
    height: 150,
    backgroundColor: "#d1b52a",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#2a5cd1",
    width: 150,
    padding: 20,
    alignItems: "center",
    borderRadius: 15,
  },
});
